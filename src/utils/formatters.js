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
