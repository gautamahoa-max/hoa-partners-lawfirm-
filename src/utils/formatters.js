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

/**
 * Định dạng ngày tháng năm chuẩn NĐ 30/2020/NĐ-CP và bản tiếng Anh tương ứng cho Thư chấp thuận.
 */
export const formatConsentDateLabels = (isoTimestamp) => {
  const parsed = isoTimestamp ? new Date(isoTimestamp) : null;
  const date = parsed && !Number.isNaN(parsed.getTime()) ? parsed : new Date();

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
