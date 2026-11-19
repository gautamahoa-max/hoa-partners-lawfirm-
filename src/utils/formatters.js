/**
 * Định dạng tiền tệ tiếng Việt chuẩn, không bao giờ bị rớt dòng đơn vị
 */
export const formatCurrency = (amount) => {
  if (isNaN(amount) || amount === null || amount === undefined) {
    return '0\u00A0đ';
  }
  return new Intl.NumberFormat('vi-VN').format(Math.round(amount)) + '\u00A0đ';
};

/**
 * Định dạng số nguyên
 */
export const formatNumber = (num) => {
  if (isNaN(num)) return '0';
  return new Intl.NumberFormat('vi-VN').format(Math.round(num));
};

function parseConsentDate(value) {
  if (!value) return new Date();
  if (typeof value?.toDate === 'function') {
    const d = value.toDate();
    if (!Number.isNaN(d?.getTime())) return d;
  }
  if (typeof value?.seconds === 'number') {
    const d = new Date(value.seconds * 1000);
    if (!Number.isNaN(d.getTime())) return d;
  }
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime()) ? parsed : new Date();
}

function toEpochMs(value) {
  if (!value) return 0;
  if (typeof value?.toDate === 'function') {
    const d = value.toDate();
    return Number.isNaN(d?.getTime()) ? 0 : d.getTime();
  }
  if (typeof value?.seconds === 'number') {
    return value.seconds * 1000;
  }
  const ms = new Date(value).getTime();
  return Number.isNaN(ms) ? 0 : ms;
}

/**
 * Extract 4-digit year string in GMT+7 (Asia/Ho_Chi_Minh) for Consent Letter numbering.
 */
export const getConsentYear = (isoTimestamp) => {
  const date = parseConsentDate(isoTimestamp);
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
  }).format(date);
};

/**
 * Format sequential per-client Consent Letter number (e.g., "01/2026/TCT-HCS").
 */
export const formatConsentDocumentNumber = (seq, year = getConsentYear()) => {
  const num = Number(seq);
  if (!Number.isInteger(num) || num < 1) return '';
  const cleanYear = String(year || '').trim() || getConsentYear();
  const padded = String(num).padStart(2, '0');
  return `${padded}/${cleanYear}/TCT-HCS`;
};

/**
 * Format Vietnamese and English document number header lines for Consent Letter overlays.
 */
export const formatConsentNumberLines = (consentNumber, isoTimestamp) => {
  const clean = typeof consentNumber === 'string' ? consentNumber.trim() : '';
  const year = getConsentYear(isoTimestamp);
  const effective = clean || `....../${year}/TCT-HCS`;
  return {
    vi: `Số: ${effective}`,
    en: `Ref. No.: ${effective}`,
    legacyEn: `Ref. No. ${effective}`,
  };
};

/**
 * Resolve stored per-client Consent Letter number or assign chronological fallback for legacy rows.
 */
export const deriveFallbackConsentNumber = (inquiry = {}, allInquiries = []) => {
  const storedNumber = typeof inquiry?.consentNumber === 'string' ? inquiry.consentNumber.trim() : '';
  if (storedNumber) return storedNumber;

  const targetTs = inquiry?.consentAcceptedAt || inquiry?.createdAt;
  const year = getConsentYear(targetTs);
  if (Number.isInteger(inquiry?.consentSeq) && inquiry.consentSeq >= 1) {
    return formatConsentDocumentNumber(inquiry.consentSeq, year);
  }

  const sameYear = (Array.isArray(allInquiries) ? allInquiries : []).filter(
    (item) => getConsentYear(item?.consentAcceptedAt || item?.createdAt) === year
  );
  if (sameYear.length === 0) return formatConsentDocumentNumber(1, year);

  const usedSeqs = new Set();
  const legacyItems = [];

  for (const item of sameYear) {
    const itemNum = typeof item?.consentNumber === 'string' ? item.consentNumber.trim() : '';
    const itemSeq = Number.isInteger(item?.consentSeq) && item.consentSeq >= 1 ? item.consentSeq : 0;
    if (itemNum) {
      const parsedSeq = Number.parseInt(itemNum.split('/')[0], 10);
      if (Number.isInteger(parsedSeq) && parsedSeq >= 1) usedSeqs.add(parsedSeq);
    } else if (itemSeq >= 1) {
      usedSeqs.add(itemSeq);
    } else {
      legacyItems.push(item);
    }
  }

  legacyItems.sort((a, b) => {
    const diff = toEpochMs(a?.createdAt || a?.consentAcceptedAt) - toEpochMs(b?.createdAt || b?.consentAcceptedAt);
    if (diff !== 0) return diff;
    return String(a?.id || '').localeCompare(String(b?.id || ''));
  });

  let nextSeq = 1;
  for (const item of legacyItems) {
    while (usedSeqs.has(nextSeq)) nextSeq += 1;
    if (
      (inquiry?.id && item?.id === inquiry.id) ||
      (!inquiry?.id && item === inquiry)
    ) {
      return formatConsentDocumentNumber(nextSeq, year);
    }
    usedSeqs.add(nextSeq);
  }

  return '';
};

/**
 * Định dạng ngày tháng năm chuẩn NĐ 30/2020/NĐ-CP và bản tiếng Anh tương ứng cho Thư chấp thuận.
 */
export const formatConsentDateLabels = (isoTimestamp) => {
  const date = parseConsentDate(isoTimestamp);

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const dayNum = Number(map.day);
  const monthNum = Number(map.month);
  const yearStr = map.year;

  const dayVi = String(dayNum).padStart(2, '0');
  const monthVi = monthNum <= 2 ? String(monthNum).padStart(2, '0') : String(monthNum);
  const enDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Ho_Chi_Minh',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);

  return {
    vi: `Đắk Lắk, ngày ${dayVi} tháng ${monthVi} năm ${yearStr}`,
    en: `Dak Lak, ${enDate}`,
  };
};
