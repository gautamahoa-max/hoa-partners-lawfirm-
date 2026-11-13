import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeInput, isValidPhone } from './security.js';
import {
  CONSULTATION_STATUSES,
  escapeCsvField,
  buildConsultationsCsv,
  exportConsultationsCsv,
  submitConsultation,
} from '../services/consultations.js';

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

test('buildConsultationsCsv and exportConsultationsCsv produce UTF-8 BOM CSV with escaped rows', () => {
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
    },
  ];

  const csv = buildConsultationsCsv(sample);
  const lines = csv.split('\r\n');
  assert.equal(lines.length, 2);
  assert.match(lines[0], /^ID,Họ và tên,Số điện thoại/);
  assert.ok(lines[1].includes('"Nguyễn ""An"", Jr."'));
  assert.ok(lines[1].includes('"Cần tư vấn\nhợp đồng"'));
  assert.ok(lines[1].includes(`"'=HYPERLINK(""http://bad"")"`));

  const bomCsv = exportConsultationsCsv(sample);
  assert.equal(bomCsv.startsWith('\uFEFF'), true);
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
});
