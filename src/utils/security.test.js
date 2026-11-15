import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeInput, isValidPhone } from './security.js';
import {
  CONSULTATION_STATUSES,
  CONSENT_DOCUMENT_VERSION,
  buildConsentAuditFields,
  escapeCsvField,
  buildConsultationsCsv,
  exportConsultationsCsv,
  submitConsultation,
} from '../services/consultations.js';
import { formatConsentDateLabels } from './formatters.js';
import { buildPdfFromJpegPages, resolveConsentVersion } from './consentPdf.js';

test('sanitizeInput strips HTML, control characters, dangerous protocols, and enforces maxLength', () => {
  assert.equal(sanitizeInput('<script>alert(1)</script>Hello'), 'alert(1)Hello');
  assert.equal(sanitizeInput('<b>Bold</b> text'), 'Bold text');
  assert.equal(sanitizeInput('javascript:alert(1) data:text/html vbscript:msg'), 'alert(1) text/html msg');
  assert.equal(sanitizeInput('abc\u0000\u0007def\u007F'), 'abcdef');
  assert.equal(sanitizeInput('abcdef', 3), 'abc');
  assert.equal(sanitizeInput(null), '');
  assert.equal(sanitizeInput(12345), '');
});

test('isValidPhone validates Vietnamese and international phone formats', () => {
  assert.equal(isValidPhone('0988886447'), true);
  assert.equal(isValidPhone('098.888.6447'), true);
  assert.equal(isValidPhone('+84 988 886 447'), true);
  assert.equal(isValidPhone('(035) 123-4567'), true);
  assert.equal(isValidPhone('+14155552671'), true);

  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone('098888644712345678'), false);
  assert.equal(isValidPhone('abc0988886447'), false);
  assert.equal(isValidPhone(''), false);
  assert.equal(isValidPhone(null), false);
});

test('escapeCsvField handles RFC 4180 quoting and neutralizes formula injection', () => {
  assert.equal(escapeCsvField(null), '');
  assert.equal(escapeCsvField(undefined), '');
  assert.equal(escapeCsvField('Nguyễn Văn A'), 'Nguyễn Văn A');
  assert.equal(escapeCsvField('Tranh chấp, đất đai'), '"Tranh chấp, đất đai"');
  assert.equal(escapeCsvField('Anh "Hòa"'), '"Anh ""Hòa"""');
  assert.equal(escapeCsvField('Dòng 1\nDòng 2'), '"Dòng 1\nDòng 2"');
  assert.equal(escapeCsvField('=CMD("calc")'), `"'=CMD(""calc"")"`);
  assert.equal(escapeCsvField('+84988886447'), "'+84988886447");
  assert.equal(escapeCsvField('-1+1'), "'-1+1");
  assert.equal(escapeCsvField('@SUM(A1:A2)'), "'@SUM(A1:A2)");
});

test('buildConsultationsCsv and exportConsultationsCsv produce UTF-8 BOM CSV with escaped rows and consent audit columns', () => {
  const sample = [
    {
      id: 'c1',
      fullName: 'Nguyễn "An", Jr.',
      phone: '0988886447',
      status: 'new',
      notes: 'Cần tư vấn\nhợp đồng',
      lawyerNotes: '=HYPERLINK("http://bad")',
      lang: 'vi',
      source: 'web_contact_form',
      createdAt: '2026-11-13T05:00:00.000Z',
      consentVersion: 'HP-PDPL-02/2026',
      consentAcceptedAt: '2026-11-13T04:59:50.000Z',
    },
  ];

  const csv = buildConsultationsCsv(sample);
  const lines = csv.split('\r\n');
  assert.equal(lines.length, 2);
  assert.match(lines[0], /^ID,Họ và tên,Số điện thoại.*Phiên bản chấp thuận,Thời điểm chấp thuận$/);
  assert.ok(lines[1].includes('"Nguyễn ""An"", Jr."'));
  assert.ok(lines[1].includes('"Cần tư vấn\nhợp đồng"'));
  assert.ok(lines[1].includes(`"'=HYPERLINK(""http://bad"")"`));
  assert.ok(lines[1].includes('HP-PDPL-02/2026,2026-11-13T04:59:50.000Z'));

  const bomCsv = exportConsultationsCsv(sample);
  assert.equal(bomCsv.startsWith('\uFEFF'), true);
});

test('buildConsentAuditFields normalizes version and ISO consentAcceptedAt timestamp', () => {
  const defaults = buildConsentAuditFields();
  assert.equal(defaults.consentVersion, CONSENT_DOCUMENT_VERSION);
  assert.match(defaults.consentAcceptedAt, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);

  const custom = buildConsentAuditFields({
    consentVersion: '<b>HP-PDPL-03/2026</b>',
    consentAcceptedAt: '2026-11-15T05:10:00.000Z',
  });
  assert.equal(custom.consentVersion, 'HP-PDPL-03/2026');
  assert.equal(custom.consentAcceptedAt, '2026-11-15T05:10:00.000Z');

  const invalidTs = buildConsentAuditFields({
    consentVersion: 'HP-PDPL-02/2026',
    consentAcceptedAt: 'not-a-timestamp',
  });
  assert.match(invalidTs.consentAcceptedAt, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
});

test('CONSULTATION_STATUSES and submitConsultation validation reject invalid payloads', async () => {
  assert.deepEqual(CONSULTATION_STATUSES, ['new', 'contacted', 'in_progress', 'completed']);

  await assert.rejects(
    () => submitConsultation({ fullName: '<b></b>', phone: '0988886447', notes: 'Test' }),
    { code: 'validation/invalid-input' }
  );
  await assert.rejects(
    () => submitConsultation({ fullName: 'Nguyen A', phone: '123', notes: 'Test' }),
    { code: 'validation/invalid-input' }
  );
  await assert.rejects(
    () => submitConsultation({ fullName: 'Nguyen A', phone: '0988886447', notes: '   ' }),
    { code: 'validation/invalid-input' }
  );
  await assert.rejects(
    () => submitConsultation({ fullName: 'Nguyen A', phone: '0988886447', notes: 'Test', consent: false }),
    { code: 'validation/invalid-input' }
  );
});

test('formatConsentDateLabels formats NĐ 30 Vietnamese and English dates in GMT+7', () => {
  const jan = formatConsentDateLabels('2026-01-05T10:00:00.000Z');
  assert.equal(jan.vi, 'Đắk Lắk, ngày 05 tháng 01 năm 2026');
  assert.equal(jan.en, 'Dak Lak, January 5, 2026');

  const nov = formatConsentDateLabels('2026-11-15T05:38:00.000Z');
  assert.equal(nov.vi, 'Đắk Lắk, ngày 15 tháng 11 năm 2026');
  assert.equal(nov.en, 'Dak Lak, November 15, 2026');

  const fallback = formatConsentDateLabels('');
  assert.match(fallback.vi, /^Đắk Lắk, ngày \d{2} tháng \d{1,2} năm \d{4}$/);
  assert.match(fallback.en, /^Dak Lak, [A-Z][a-z]+ \d{1,2}, \d{4}$/);
});

test('resolveConsentVersion resolves exact versioned PDF or falls back safely', () => {
  const registry = {
    'HP-PDPL-02/2026': { version: 'HP-PDPL-02/2026', pdfUrl: '/v2.pdf' },
    'HP-PDPL-03/2026': { version: 'HP-PDPL-03/2026', pdfUrl: '/v3.pdf' },
  };
  const exact = resolveConsentVersion(registry, 'HP-PDPL-02/2026', 'HP-PDPL-03/2026');
  assert.equal(exact.pdfUrl, '/v2.pdf');
  assert.equal(exact.isExactVersionMatch, true);

  const fallback = resolveConsentVersion(registry, 'HP-PDPL-99/2099', 'HP-PDPL-03/2026');
  assert.equal(fallback.pdfUrl, '/v3.pdf');
  assert.equal(fallback.isExactVersionMatch, false);
});

test('buildPdfFromJpegPages produces valid multi-page A4 PDF readable by pdfjs-dist', async () => {
  const tinyJpegBytes = Uint8Array.from(
    Buffer.from(
      '/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAqADAAQAAAABAAAAAgAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAAgACAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAAf/aAAwDAQACEQMRAD8A/fyiiigD/9k=',
      'base64'
    )
  );

  assert.throws(() => buildPdfFromJpegPages([]), /At least one rendered JPEG page/);

  const pdfBytes = buildPdfFromJpegPages([
    { bytes: tinyJpegBytes, widthPx: 1240, heightPx: 1754 },
    { bytes: tinyJpegBytes, widthPx: 1240, heightPx: 1754 },
  ]);

  const asciiHead = Buffer.from(pdfBytes.subarray(0, 8)).toString('ascii');
  const asciiTail = Buffer.from(pdfBytes.subarray(-6)).toString('ascii');
  assert.equal(asciiHead, '%PDF-1.4');
  assert.equal(asciiTail, '%%EOF\n');

  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const doc = await pdfjsLib.getDocument({ data: pdfBytes, verbosity: 0 }).promise;
  assert.equal(doc.numPages, 2);
  const p1 = await doc.getPage(1);
  const vp = p1.getViewport({ scale: 1 });
  assert.ok(Math.abs(vp.width - 595.28) < 0.05);
  assert.ok(Math.abs(vp.height - 841.99) < 0.2);
  await doc.destroy();
});
