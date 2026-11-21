import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeInput, isValidPhone, normalizePhone } from './security.js';
import {
  CONSULTATION_STATUSES,
  CONSENT_DOCUMENT_VERSION,
  buildConsentAuditFields,
  escapeCsvField,
  buildConsultationsCsv,
  exportConsultationsCsv,
  submitConsultation,
  createManualConsultation,
} from '../services/consultations.js';
import {
  formatConsentDateLabels,
  getConsentYear,
  formatConsentDocumentNumber,
  formatConsentNumberLines,
  deriveFallbackConsentNumber,
  isOfflineManualSource,
  formatConsultationSource,
  buildZaloContextMessage,
} from './formatters.js';
import { FAQ_ITEMS } from '../i18n/faq.js';
import {
  buildPdfFromJpegPages,
  resolveConsentVersion,
  buildConsentPageOverlays,
  clampConsentZoom,
  computePinchZoomScroll,
} from './consentPdf.js';
import {
  calculateCourtFee,
  estimateLegalFee,
  LEGAL_SERVICE_SCHEDULE,
} from './courtFeeCalc.js';
import {
  FEE_CATEGORIES,
  FEE_HOMEPAGE_GROUPS,
  FEE_SCHEDULE_ITEMS,
} from '../i18n/feeSchedule.js';

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
      consentNumber: '03/2026/TCT-HCS',
      consentVersion: 'HP-PDPL-02/2026',
      consentAcceptedAt: '2026-11-13T04:59:50.000Z',
    },
  ];

  const csv = buildConsultationsCsv(sample);
  const lines = csv.split('\r\n');
  assert.equal(lines.length, 2);
  assert.match(lines[0], /^ID,Họ và tên,Số điện thoại.*Số Thư chấp thuận,Phiên bản chấp thuận,Thời điểm chấp thuận$/);
  assert.ok(lines[1].includes('"Nguyễn ""An"", Jr."'));
  assert.ok(lines[1].includes('"Cần tư vấn\nhợp đồng"'));
  assert.ok(lines[1].includes(`"'=HYPERLINK(""http://bad"")"`));
  assert.ok(lines[1].includes('03/2026/TCT-HCS,HP-PDPL-02/2026,2026-11-13T04:59:50.000Z'));

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

test('LEGAL_SERVICE_SCHEDULE, estimateLegalFee, and calculateCourtFee cover 6 practices & Res. 326 bounds', () => {
  const ids = LEGAL_SERVICE_SCHEDULE.map((item) => item.id);
  assert.deepEqual(ids, ['real-estate', 'litigation', 'inheritance', 'family', 'contract', 'retainer']);

  for (const id of ids) {
    for (const feeOption of ['stage_plus_success', 'lump_sum']) {
      for (const value of [0, 500000000, 10000000000]) {
        const std = estimateLegalFee(id, value, { complexity: 'standard', feeOption, lang: 'vi' });
        const cmp = estimateLegalFee(id, value, { complexity: 'complex', feeOption, lang: 'vi' });
        const high = estimateLegalFee(id, value, { complexity: 'high_complex', feeOption, lang: 'vi' });
        assert.ok(
          std.baseFee < cmp.baseFee && cmp.baseFee < high.baseFee,
          `Expected monotonic tiers for ${id} (${feeOption}, val=${value}): ${std.baseFee}, ${cmp.baseFee}, ${high.baseFee}`
        );
      }
    }
  }

  const enEstate = estimateLegalFee('real-estate', 1500000000, {
    complexity: 'complex',
    feeOption: 'lump_sum',
    lang: 'en',
  });
  assert.equal(enEstate.name, 'Land & Real Estate Disputes');
  assert.equal(enEstate.rangeLabel, 'VND 70M – 150M');

  const zeroCourt = calculateCourtFee(0, 'civil');
  assert.equal(zeroCourt.courtFee, 300000);
  assert.equal(zeroCourt.advanceFee, 150000);

  const civil600m = calculateCourtFee(600000000, 'civil');
  assert.equal(civil600m.courtFee, 28000000);
  assert.equal(civil600m.advanceFee, 14000000);

  const comm50m = calculateCourtFee(50000000, 'commercial');
  assert.equal(comm50m.courtFee, 3000000);
  assert.equal(comm50m.advanceFee, 1500000);
});

test('FEE_SCHEDULE_ITEMS contains 20 civil-law rows synced in content and floor price with FEE_HOMEPAGE_GROUPS', () => {
  assert.equal(FEE_SCHEDULE_ITEMS.length, 20);
  const validCategories = new Set(FEE_CATEGORIES.map((c) => c.id).filter((id) => id !== 'all'));
  const bannedTerms = ['Mild Sunshine', 'Hải quan', 'visa', 'hình sự', 'Đăng ký kinh doanh', 'môi giới thương mại', 'Tổi thiểu'];

  FEE_SCHEDULE_ITEMS.forEach((item, idx) => {
    assert.equal(item.stt, idx + 1);
    assert.ok(validCategories.has(item.category), `Invalid category on item ${item.stt}`);
    assert.ok(item.service.vi.length > 0 && item.service.en.length > 0);
    assert.ok(item.fee.vi.length > 0 && item.fee.en.length > 0);
    for (const banned of bannedTerms) {
      assert.equal(item.service.vi.toLowerCase().includes(banned.toLowerCase()), false);
      assert.equal(item.fee.vi.toLowerCase().includes(banned.toLowerCase()), false);
    }
  });

  assert.equal(FEE_HOMEPAGE_GROUPS.vi.length, 3);
  assert.equal(FEE_HOMEPAGE_GROUPS.en.length, 3);
  for (const group of FEE_HOMEPAGE_GROUPS.vi) {
    const groupRows = FEE_SCHEDULE_ITEMS.filter((row) => row.category === group.id);
    assert.ok(groupRows.length >= 4, `Group ${group.id} should back homepage bullets`);
    assert.ok(
      groupRows.some((row) => row.fee.vi.includes(group.priceText)),
      `Expected homepage floor ${group.priceText} to appear in ${group.id} detailed schedule`
    );
  }
});

test('Consent numbering formatters and legacy chronological fallback avoid collisions', () => {
  // Dec 31 2026 18:00 UTC is Jan 1 2027 01:00 in GMT+7
  assert.equal(getConsentYear('2026-12-31T18:00:00.000Z'), '2027');
  assert.equal(getConsentYear('2026-11-19T01:00:00.000Z'), '2026');

  assert.equal(formatConsentDocumentNumber(1, '2026'), '01/2026/TCT-HCS');
  assert.equal(formatConsentDocumentNumber(12, '2026'), '12/2026/TCT-HCS');
  assert.equal(formatConsentDocumentNumber(105, '2026'), '105/2026/TCT-HCS');
  assert.equal(formatConsentDocumentNumber(0, '2026'), '');
  assert.equal(formatConsentDocumentNumber(-2, '2026'), '');

  const lines = formatConsentNumberLines('07/2026/TCT-HCS', '2026-11-19T01:00:00.000Z');
  assert.deepEqual(lines, {
    vi: 'Số: 07/2026/TCT-HCS',
    en: 'Ref. No.: 07/2026/TCT-HCS',
    legacyEn: 'Ref. No. 07/2026/TCT-HCS',
  });

  const placeholderLines = formatConsentNumberLines('', '2026-11-19T01:00:00.000Z');
  assert.equal(placeholderLines.vi, 'Số: ....../2026/TCT-HCS');
  assert.equal(placeholderLines.en, 'Ref. No.: ....../2026/TCT-HCS');

  const inquiries = [
    { id: 'c3', createdAt: '2026-11-18T00:00:00.000Z', consentSeq: 2 },
    { id: 'c1', createdAt: '2026-11-15T00:00:00.000Z' },
    { id: 'c2', createdAt: '2026-11-16T00:00:00.000Z' },
    { id: 'c4', createdAt: '2026-11-19T00:00:00.000Z', consentNumber: '04/2026/TCT-HCS' },
  ];
  assert.equal(deriveFallbackConsentNumber(inquiries[1], inquiries), '01/2026/TCT-HCS');
  assert.equal(deriveFallbackConsentNumber(inquiries[0], inquiries), '02/2026/TCT-HCS');
  // c2 skips seq 2 because c3 already claimed 2, gets 03/2026/TCT-HCS
  assert.equal(deriveFallbackConsentNumber(inquiries[2], inquiries), '03/2026/TCT-HCS');
  assert.equal(deriveFallbackConsentNumber(inquiries[3], inquiries), '04/2026/TCT-HCS');
});

test('buildConsentPageOverlays builds interleaved Page 1 and legacy split Page 1/6 overlays', () => {
  const dateLabels = formatConsentDateLabels('2026-11-19T01:00:00.000Z');
  const interleavedEntry = { version: 'HP-PDPL-03/2026', layout: 'interleaved' };

  const p1 = buildConsentPageOverlays({
    pageNumber: 1,
    archiveEntry: interleavedEntry,
    dateLabels,
    consentNumber: '05/2026/TCT-HCS',
    isoTimestamp: '2026-11-19T01:00:00.000Z',
  });
  assert.equal(p1.length, 4);
  assert.deepEqual(p1[0], { placeholder: 'Số: 00/2026/TCT-HCS', text: 'Số: 05/2026/TCT-HCS', fontStyle: 'normal' });
  assert.deepEqual(p1[1], { placeholder: 'Ref. No.: 00/2026/TCT-HCS', text: 'Ref. No.: 05/2026/TCT-HCS', fontStyle: 'italic' });
  assert.equal(p1[2].placeholder, 'Đắk Lắk, năm 2026');
  assert.equal(p1[3].placeholder, 'Dak Lak, 2026');

  assert.deepEqual(
    buildConsentPageOverlays({ pageNumber: 2, archiveEntry: interleavedEntry, dateLabels, consentNumber: '05/2026/TCT-HCS' }),
    []
  );

  const splitEntry = { version: 'HP-PDPL-02/2026', layout: 'split' };
  const legacyP1 = buildConsentPageOverlays({ pageNumber: 1, archiveEntry: splitEntry, dateLabels, consentNumber: '05/2026/TCT-HCS' });
  assert.equal(legacyP1.length, 2);
  assert.equal(legacyP1[0].placeholder, 'Số: 02/2026/TCT-HCS');
  const legacyP6 = buildConsentPageOverlays({ pageNumber: 6, archiveEntry: splitEntry, dateLabels, consentNumber: '05/2026/TCT-HCS' });
  assert.equal(legacyP6.length, 2);
  assert.deepEqual(legacyP6[0], { placeholder: 'Ref. No. 02/2026/TCT-HCS', text: 'Ref. No. 05/2026/TCT-HCS', fontStyle: 'italic' });
});

test('HP-PDPL-03-2026.pdf contains single unified interleaved bilingual content and Page 1 placeholders', async () => {
  const fs = await import('node:fs');
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(fs.readFileSync(new URL('../assets/consent/HP-PDPL-03-2026.pdf', import.meta.url)));
  const doc = await pdfjsLib.getDocument({ data, verbosity: 0 }).promise;
  assert.ok(doc.numPages >= 6);

  const pageTexts = [];
  for (let p = 1; p <= doc.numPages; p += 1) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    if (p === 1) {
      for (const expectedPlaceholder of ['Số: 00/2026/TCT-HCS', 'Ref. No.: 00/2026/TCT-HCS', 'Đắk Lắk, năm 2026', 'Dak Lak, 2026']) {
        assert.ok(
          tc.items.some((item) => item.str?.trim() === expectedPlaceholder),
          `Expected exact single text item ${expectedPlaceholder} on Page 1`
        );
      }
    }
    pageTexts.push(tc.items.map((i) => i.str).join(' '));
  }
  await doc.destroy();

  const normalize = (s) => s.replace(/\s+/g, ' ');
  const p1Text = normalize(pageTexts[0]);
  assert.ok(p1Text.includes('THƯ CHẤP THUẬN') && p1Text.includes('LETTER OF CONSENT'));

  const allText = normalize(pageTexts.join(' '));
  assert.ok(allText.includes('Điều 2.') && allText.includes('Article 2.'));
  assert.ok(allText.includes('Điều 5.') && allText.includes('Article 5.'));
  // Ensure unified bilingual text: only ONE LETTER OF CONSENT heading across the whole PDF
  assert.equal(allText.match(/LETTER OF CONSENT/g)?.length, 1);
  // Single signature block at end has both VN & EN party headers together
  const lastPageText = normalize(pageTexts[pageTexts.length - 1]);
  assert.ok(lastPageText.includes('KHÁCH HÀNG /') && lastPageText.includes('HOA & ASSOCIATES LAW FIRM LLC'));
});

test('normalizePhone canonicalizes Vietnamese and international phone formats', () => {
  assert.equal(normalizePhone('098.888.6447'), '0988886447');
  assert.equal(normalizePhone('+84 988 886 447'), '0988886447');
  assert.equal(normalizePhone('84988886447'), '0988886447');
  assert.equal(normalizePhone('0084988886447'), '0988886447');
  assert.equal(normalizePhone('+1 (415) 555-2671'), '+14155552671');
  assert.equal(normalizePhone('0014155552671'), '+14155552671');
  assert.equal(normalizePhone(null), '');
});

test('Offline manual sources, source labels, Zalo summary builder, and consent number skipping', () => {
  assert.equal(isOfflineManualSource('zalo'), true);
  assert.equal(isOfflineManualSource('hotline'), true);
  assert.equal(isOfflineManualSource('office'), true);
  assert.equal(isOfflineManualSource('web_contact_form'), false);
  assert.equal(isOfflineManualSource('bang_gia:#01'), false);

  assert.equal(formatConsultationSource(''), 'Form liên hệ');
  assert.equal(formatConsultationSource('web_contact_form'), 'Form liên hệ');
  assert.equal(formatConsultationSource('zalo'), 'Zalo');
  assert.equal(formatConsultationSource('hotline'), 'Hotline');
  assert.equal(formatConsultationSource('office'), 'Trực tiếp VP');
  assert.equal(formatConsultationSource('bang_gia:#01'), 'Bảng giá #01');
  assert.equal(formatConsultationSource('trang_chu:advisory'), 'Trang chủ • Tư vấn');
  assert.equal(formatConsultationSource('trang_chu:representation'), 'Trang chủ • Ngoài tố tụng');
  assert.equal(formatConsultationSource('trang_chu:litigation'), 'Trang chủ • Tranh tụng');

  const msgVi = buildZaloContextMessage({
    fullName: 'Nguyễn Văn A',
    consentNumber: '08/2026/TCT-HCS',
    notes: 'A'.repeat(400),
    lang: 'vi',
  });
  assert.ok(msgVi.length <= 350);
  assert.ok(msgVi.includes('Nguyễn Văn A'));
  assert.ok(msgVi.includes('08/2026/TCT-HCS'));
  assert.ok(msgVi.endsWith('...'));

  const msgEn = buildZaloContextMessage({
    fullName: 'Jane Doe',
    notes: 'Boundary claim inquiry',
    lang: 'en',
  });
  assert.ok(msgEn.includes('Hello Hoa & Associates Law Firm (Jane Doe)'));
  assert.ok(msgEn.includes('Boundary claim inquiry'));

  const mixedInquiries = [
    { id: 'w1', createdAt: '2026-11-15T00:00:00.000Z', source: 'web_contact_form' },
    { id: 'm1', createdAt: '2026-11-14T00:00:00.000Z', source: 'zalo' },
    { id: 'm2', createdAt: '2026-11-16T00:00:00.000Z', source: 'hotline' },
    { id: 'w2', createdAt: '2026-11-17T00:00:00.000Z', source: 'bang_gia:#01' },
  ];
  assert.equal(deriveFallbackConsentNumber(mixedInquiries[1], mixedInquiries), '');
  assert.equal(deriveFallbackConsentNumber(mixedInquiries[2], mixedInquiries), '');
  assert.equal(deriveFallbackConsentNumber(mixedInquiries[0], mixedInquiries), '01/2026/TCT-HCS');
  assert.equal(deriveFallbackConsentNumber(mixedInquiries[3], mixedInquiries), '02/2026/TCT-HCS');
});

test('createManualConsultation rejects invalid inputs and disallowed sources', async () => {
  await assert.rejects(
    () => createManualConsultation({ fullName: '  ', phone: '0988886447', notes: 'Tư vấn', source: 'zalo' }),
    { code: 'validation/invalid-input' }
  );
  await assert.rejects(
    () => createManualConsultation({ fullName: 'Trần Văn B', phone: '123', notes: 'Tư vấn', source: 'zalo' }),
    { code: 'validation/invalid-input' }
  );
  await assert.rejects(
    () => createManualConsultation({ fullName: 'Trần Văn B', phone: '0988886447', notes: '', source: 'hotline' }),
    { code: 'validation/invalid-input' }
  );
  await assert.rejects(
    () => createManualConsultation({ fullName: 'Trần Văn B', phone: '0988886447', notes: 'Hồ sơ', source: 'web_contact_form' }),
    { code: 'validation/invalid-input' }
  );
});

test('GEO/AEO artifacts (index.html JSON-LD, llms.txt, robots.txt, sitemap.xml) stay in sync', async () => {
  const fs = await import('node:fs');
  const baseUrl = 'https://gautamahoa-max.github.io/hoa-partners-lawfirm-/';

  const indexHtml = fs.readFileSync(new URL('../../index.html', import.meta.url), 'utf8');
  const ldMatch = indexHtml.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  assert.ok(ldMatch, 'Expected application/ld+json script in index.html');
  const jsonLd = JSON.parse(ldMatch[1]);
  const graph = jsonLd['@graph'];
  assert.ok(Array.isArray(graph));

  const firm = graph.find((node) => node['@type'] === 'LegalService');
  const lawyer = graph.find((node) => node['@type'] === 'Person');
  const faq = graph.find((node) => node['@type'] === 'FAQPage');
  assert.ok(firm && lawyer && faq);

  assert.equal(firm.hasOfferCatalog.itemListElement.length, FEE_SCHEDULE_ITEMS.length);
  for (const item of FEE_SCHEDULE_ITEMS) {
    assert.ok(
      firm.hasOfferCatalog.itemListElement.some((offer) => offer.itemOffered?.name === item.service.vi),
      `Missing service in JSON-LD OfferCatalog: ${item.service.vi}`
    );
  }

  assert.equal(FAQ_ITEMS.vi.length, 6);
  assert.equal(FAQ_ITEMS.en.length, 6);
  assert.equal(faq.mainEntity.length, FAQ_ITEMS.vi.length);
  faq.mainEntity.forEach((qNode, idx) => {
    assert.equal(qNode.name, FAQ_ITEMS.vi[idx].q);
    assert.equal(qNode.acceptedAnswer?.text, FAQ_ITEMS.vi[idx].a);
  });

  const llmsTxt = fs.readFileSync(new URL('../../public/llms.txt', import.meta.url), 'utf8');
  assert.ok(llmsTxt.includes(baseUrl));
  assert.ok(llmsTxt.includes('098.888.6447'));
  for (const item of FEE_SCHEDULE_ITEMS) {
    assert.ok(llmsTxt.includes(item.service.vi), `Missing fee item in llms.txt: ${item.service.vi}`);
  }
  for (const qa of FAQ_ITEMS.vi) {
    assert.ok(llmsTxt.includes(qa.q), `Missing FAQ question in llms.txt: ${qa.q}`);
  }

  const robotsTxt = fs.readFileSync(new URL('../../public/robots.txt', import.meta.url), 'utf8');
  assert.ok(robotsTxt.includes(`Sitemap: ${baseUrl}sitemap.xml`));

  const sitemapXml = fs.readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
  assert.ok(sitemapXml.includes(`<loc>${baseUrl}</loc>`));
  assert.ok(sitemapXml.includes(`<loc>${baseUrl}llms.txt</loc>`));
  assert.equal(sitemapXml.includes('#/'), false);
});

test('Consent modal zoom clamping and pinch focal-point scroll calculation', () => {
  assert.equal(clampConsentZoom(0.2), 0.75);
  assert.equal(clampConsentZoom(4.5), 2.5);
  assert.equal(clampConsentZoom(1.456), 1.46);
  assert.equal(clampConsentZoom('invalid'), 1);

  const zoomedIn = computePinchZoomScroll({
    startZoom: 1,
    targetZoom: 2,
    startScrollLeft: 0,
    startScrollTop: 100,
    focalX: 150,
    focalY: 200,
  });
  assert.deepEqual(zoomedIn, { zoom: 2, scrollLeft: 150, scrollTop: 400 });

  const zoomedOutFloor = computePinchZoomScroll({
    startZoom: 1,
    targetZoom: 0.5,
    startScrollLeft: 0,
    startScrollTop: 0,
    focalX: 200,
    focalY: 200,
  });
  assert.deepEqual(zoomedOutFloor, { zoom: 0.75, scrollLeft: 0, scrollTop: 0 });
});
