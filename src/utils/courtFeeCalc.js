/**
 * Tính toán Án phí Sơ thẩm & Tạm ứng án phí theo Nghị quyết 326/2016/UBTVQH14
 */

export const CASE_TYPES = {
  CIVIL: 'civil', // Dân sự, Đất đai, Thừa kế
  COMMERCIAL: 'commercial', // Kinh doanh thương mại, Hợp đồng kinh tế
  LABOR: 'labor', // Lao động có giá ngạch
};

/**
 * Tính án phí sơ thẩm theo giá ngạch
 * @param {number} value - Giá trị tranh chấp (VND)
 * @param {string} caseType - Loại vụ án (civil | commercial | labor)
 * @returns {{ courtFee: number, advanceFee: number, formulaDescription: string }}
 */
export function calculateCourtFee(value, caseType = 'commercial') {
  const val = Math.max(0, Number(value) || 0);

  if (val === 0) {
    return {
      courtFee: 300000,
      advanceFee: 150000,
      formulaDescription: 'Vụ án không có giá ngạch: Án phí định suất 300.000 đ',
    };
  }

  let courtFee = 0;
  let formulaDescription = '';

  if (caseType === 'commercial') {
    // Tranh chấp kinh doanh thương mại
    if (val <= 60000000) {
      courtFee = 3000000;
      formulaDescription = 'Dưới 60 triệu: Mức cố định 3.000.000 đ';
    } else if (val <= 400000000) {
      courtFee = val * 0.05;
      formulaDescription = 'Từ 60 đến 400 triệu: 5% giá trị tranh chấp';
    } else if (val <= 800000000) {
      courtFee = 20000000 + (val - 400000000) * 0.04;
      formulaDescription = 'Từ 400 đến 800 triệu: 20 triệu + 4% phần vượt 400 triệu';
    } else if (val <= 2000000000) {
      courtFee = 36000000 + (val - 800000000) * 0.03;
      formulaDescription = 'Từ 800 triệu đến 2 tỷ: 36 triệu + 3% phần vượt 800 triệu';
    } else if (val <= 4000000000) {
      courtFee = 72000000 + (val - 2000000000) * 0.02;
      formulaDescription = 'Từ 2 tỷ đến 4 tỷ: 72 triệu + 2% phần vượt 2 tỷ';
    } else {
      courtFee = 112000000 + (val - 4000000000) * 0.001;
      formulaDescription = 'Trên 4 tỷ: 112 triệu + 0.1% phần vượt 4 tỷ';
    }
  } else {
    // Dân sự, đất đai, hôn nhân gia đình
    if (val <= 6000000) {
      courtFee = 300000;
      formulaDescription = 'Dưới 6 triệu: Mức cố định 300.000 đ';
    } else if (val <= 400000000) {
      courtFee = val * 0.05;
      formulaDescription = 'Từ 6 đến 400 triệu: 5% giá trị tài sản tranh chấp';
    } else if (val <= 800000000) {
      courtFee = 20000000 + (val - 400000000) * 0.04;
      formulaDescription = 'Từ 400 đến 800 triệu: 20 triệu + 4% phần vượt 400 triệu';
    } else if (val <= 2000000000) {
      courtFee = 36000000 + (val - 800000000) * 0.03;
      formulaDescription = 'Từ 800 triệu đến 2 tỷ: 36 triệu + 3% phần vượt 800 triệu';
    } else if (val <= 4000000000) {
      courtFee = 72000000 + (val - 2000000000) * 0.02;
      formulaDescription = 'Từ 2 tỷ đến 4 tỷ: 72 triệu + 2% phần vượt 2 tỷ';
    } else {
      courtFee = 112000000 + (val - 4000000000) * 0.001;
      formulaDescription = 'Trên 4 tỷ: 112 triệu + 0.1% phần vượt 4 tỷ';
    }
  }

  // Tiền tạm ứng án phí sơ thẩm bằng 50% mức án phí dự tính
  const advanceFee = Math.round(courtFee * 0.5);

  return {
    courtFee: Math.round(courtFee),
    advanceFee,
    formulaDescription,
  };
}

/**
 * Ước tính phí thù lao Luật sư tham khảo
 */
export function estimateLegalFee(serviceType, disputeValue = 0) {
  switch (serviceType) {
    case 'litigation':
      // Tranh tụng: Phí cơ sở + % thành công
      return {
        baseFee: Math.max(15000000, Math.round(disputeValue * 0.025)),
        name: 'Đại diện Tranh tụng Tòa án & Trọng tài',
        notes: 'Bao gồm nghiên cứu hồ sơ, soạn đơn khởi kiện, thu thập chứng cứ và tham gia các phiên xử sơ thẩm.',
      };
    case 'contract':
      return {
        baseFee: 3500000,
        name: 'Soạn thảo & Rà soát Hợp đồng Kinh tế',
        notes: 'Bảo vệ quyền lợi tối đa, loại bỏ các điều khoản bất lợi, bồi thường và phạt vi phạm.',
      };
    case 'retainer':
      return {
        baseFee: 8000000,
        name: 'Tư vấn Pháp chế Thường xuyên Doanh nghiệp',
        notes: 'Gói cố vấn pháp lý trọn gói hàng tháng (hợp đồng, lao động, thuế, nội quy công ty).',
      };
    case 'incorporation':
      return {
        baseFee: 2500000,
        name: 'Thành lập & Tái cấu trúc Doanh nghiệp',
        notes: 'Tư vấn loại hình, vốn điều lệ, cơ cấu cổ đông sáng lập và giấy phép đủ điều kiện.',
      };
    default:
      return {
        baseFee: 5000000,
        name: 'Tư vấn Pháp lý Chuyên sâu',
        notes: 'Giải quyết vụ việc theo yêu cầu chuyên biệt.',
      };
  }
}
