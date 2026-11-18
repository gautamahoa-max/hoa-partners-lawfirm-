/**
 * Tính toán Án phí Sơ thẩm & Dự toán Thù lao Luật sư theo Nghị quyết 326/2016/UBTVQH14
 * và Khung phí dịch vụ Công ty Luật TNHH Hoà và Cộng sự (Điều 55 Luật Luật sư).
 */

export const CASE_TYPES = {
  CIVIL: 'civil', // Dân sự, Đất đai, Thừa kế
  COMMERCIAL: 'commercial', // Kinh doanh thương mại, Hợp đồng kinh tế
  LABOR: 'labor', // Lao động có giá ngạch
};

export const COMPLEXITY_LEVELS = [
  {
    id: 'standard',
    label: { vi: 'Tiêu chuẩn', en: 'Standard' },
    shortDesc: {
      vi: 'Dưới 50 bút lục, tối đa 2 bên',
      en: '< 50 docket pages, up to 2 parties',
    },
  },
  {
    id: 'complex',
    label: { vi: 'Phức tạp', en: 'Complex' },
    shortDesc: {
      vi: '50–300 bút lục, đo đạc / 3–5 bên',
      en: '50–300 pages, survey / 3–5 parties',
    },
  },
  {
    id: 'high_complex',
    label: { vi: 'Đặc biệt phức tạp', en: 'Highly Complex' },
    shortDesc: {
      vi: 'Trên 300 bút lục, >5 bên / ngoại tỉnh',
      en: '> 300 pages, 5+ parties / cross-province',
    },
  },
];

export const FEE_OPTIONS = [
  {
    id: 'stage_plus_success',
    label: { vi: 'Phương án 1: Phí cố định + % kết quả', en: 'Option 1: Fixed Fee + Success %' },
    shortDesc: {
      vi: 'Giảm áp lực chi phí đầu vào; phần % chỉ tính khi bảo vệ/thu hồi thành công theo Hợp đồng.',
      en: 'Lower upfront cost; success % applies strictly upon verified recovery/protection per contract.',
    },
  },
  {
    id: 'lump_sum',
    label: { vi: 'Phương án 2: Trọn gói theo giai đoạn', en: 'Option 2: Stage Lump Sum' },
    shortDesc: {
      vi: 'Ấn định trọn gói ngay từ đầu theo từng cấp xét xử (tiền tố tụng, sơ thẩm, phúc thẩm).',
      en: 'Fixed all-in fee determined upfront per stage (pre-suit, first instance, appellate).',
    },
  },
];

const LITIGATION_DEFAULTS = {
  supportsDisputeValue: true,
  supportsFeeOptions: true,
};

export const LEGAL_SERVICE_SCHEDULE = [
  {
    id: 'real-estate',
    name: {
      vi: 'Tranh chấp Đất đai & Bất động sản',
      en: 'Land & Real Estate Disputes',
    },
    shortName: { vi: 'Đất đai & BĐS', en: 'Land & Real Estate' },
    categoryTag: { vi: 'Mũi nhọn • Dân sự & Hành chính đất đai', en: 'Core Practice • Land Litigation' },
    ...LITIGATION_DEFAULTS,
    tiers: {
      standard: {
        criteria: {
          vi: 'Hồ sơ dưới 50 bút lục, ranh giới/chứng cứ rõ ràng, tối đa 2 bên, giá trị tranh chấp dưới 1 tỷ đồng.',
          en: 'Under 50 docket pages, clear boundaries/title records, up to 2 parties, claim under VND 1B.',
        },
        stage_plus_success: {
          minFee: 25000000,
          maxFee: 40000000,
          valueRate: 0.015,
          rangeLabel: { vi: '25 – 40 triệu đ', en: 'VND 25M – 40M' },
          successFeeLabel: { vi: '+ 3% – 6% giá trị bảo vệ/thu hồi', en: '+ 3% – 6% of recovered value' },
          notes: {
            vi: 'Nghiên cứu hồ sơ địa chính, đại diện hòa giải UBND cấp xã/phường, soạn đơn khởi kiện và bảo vệ tại phiên sơ thẩm.',
            en: 'Cadastral record review, mandatory communal mediation, pleadings, and first-instance representation.',
          },
        },
        lump_sum: {
          minFee: 40000000,
          maxFee: 65000000,
          valueRate: 0.02,
          rangeLabel: { vi: '40 – 65 triệu đ', en: 'VND 40M – 65M' },
          successFeeLabel: { vi: 'Trọn gói cấp xét xử (không thu thêm %)', en: 'All-in per stage (no success %)' },
          notes: {
            vi: 'Bao trọn thù lao luật sư cho toàn bộ cấp xét xử đã ký hợp đồng, không phát sinh tỷ lệ % theo giá trị thắng kiện.',
            en: 'Full stage coverage specified in the Legal Service Contract with zero percentage success fee.',
          },
        },
      },
      complex: {
        criteria: {
          vi: '50–300 bút lục, cần trích lục bản đồ/đo đạc & thẩm định giá tại chỗ, 3–5 bên hoặc giá trị 1–10 tỷ đồng.',
          en: '50–300 pages, cadastral survey & on-site appraisal required, 3–5 parties, or VND 1B–10B.',
        },
        stage_plus_success: {
          minFee: 45000000,
          maxFee: 80000000,
          valueRate: 0.012,
          rangeLabel: { vi: '45 – 80 triệu đ', en: 'VND 45M – 80M' },
          successFeeLabel: { vi: '+ 3% – 5% giá trị bảo vệ/thu hồi', en: '+ 3% – 5% of recovered value' },
          notes: {
            vi: 'Phối hợp đo đạc thực địa, thu thập tài liệu cấp sổ đỏ qua nhiều thời kỳ, đối chất chứng cứ và tranh luận nhiều phiên.',
            en: 'On-site survey coordination, historical land archive collection, evidence confrontation, and trial advocacy.',
          },
        },
        lump_sum: {
          minFee: 70000000,
          maxFee: 150000000,
          valueRate: 0.025,
          rangeLabel: { vi: '70 – 150 triệu đ', en: 'VND 70M – 150M' },
          successFeeLabel: { vi: 'Trọn gói cấp xét xử (không thu thêm %)', en: 'All-in per stage (no success %)' },
          notes: {
            vi: 'Trọn gói thủ tục tiền tố tụng, thu thập chứng cứ địa chính và tranh tụng bảo vệ trọn vẹn quyền sử dụng đất.',
            en: 'Comprehensive pre-trial, archival evidence gathering, and courtroom representation at fixed stage fee.',
          },
        },
      },
      high_complex: {
        criteria: {
          vi: 'Trên 300 bút lục, đất qua nhiều đời/thiếu giấy tờ gốc, >5 bên hoặc >10 tỷ / liên tỉnh Đắk Lắk – TP.HCM.',
          en: '>300 pages, multi-generational land lacking originals, 5+ parties, >VND 10B, or cross-province.',
        },
        stage_plus_success: {
          minFee: 90000000,
          maxFee: null,
          valueRate: 0.008,
          rangeLabel: { vi: 'Từ 90 triệu đ', en: 'From VND 90M' },
          successFeeLabel: { vi: '+ Tỷ lệ % thỏa thuận theo hợp đồng', en: '+ Negotiated success % per contract' },
          notes: {
            vi: 'Áp dụng cho án lớn nhiều đương sự, thu hồi bồi thường giải phóng mặt bằng hoặc phúc thẩm/giám đốc thẩm liên tỉnh.',
            en: 'Designed for multi-party high-stakes land claims, compulsory acquisition appeals, or cross-province dockets.',
          },
        },
        lump_sum: {
          minFee: 155000000,
          maxFee: null,
          valueRate: 0.015,
          rangeLabel: { vi: 'Từ 155 triệu đ', en: 'From VND 155M' },
          successFeeLabel: { vi: 'Trọn gói theo thỏa thuận hồ sơ', en: 'Bespoke lump sum per dossier' },
          notes: {
            vi: 'Đội ngũ Luật sư điều hành trực tiếp thụ lý xuyên suốt từ xác minh nguồn gốc đất, khiếu nại hành chính tới thi hành án.',
            en: 'Partner-led representation from historical land title investigation through final judgment enforcement.',
          },
        },
      },
    },
  },
  {
    id: 'litigation',
    name: {
      vi: 'Tranh tụng Dân sự, Hợp đồng vay & Đòi tài sản',
      en: 'Civil Litigation, Loan Recovery & Property Claims',
    },
    shortName: { vi: 'Tranh tụng & Đòi nợ', en: 'Civil Litigation' },
    categoryTag: { vi: 'Trọng tâm • Tòa án & Thi hành án', en: 'Core • Court & Enforcement' },
    ...LITIGATION_DEFAULTS,
    tiers: {
      standard: {
        criteria: {
          vi: 'Dưới 50 bút lục, hợp đồng/giấy vay rõ ràng, tối đa 2 bên, giá trị tranh chấp dưới 1 tỷ đồng.',
          en: 'Under 50 pages, clear loan/contract documents, up to 2 parties, under VND 1B.',
        },
        stage_plus_success: {
          minFee: 20000000,
          maxFee: 35000000,
          valueRate: 0.015,
          rangeLabel: { vi: '20 – 35 triệu đ', en: 'VND 20M – 35M' },
          successFeeLabel: { vi: '+ 4% – 7% giá trị thực thu/bảo vệ', en: '+ 4% – 7% of actual recovery' },
          notes: {
            vi: 'Phát hành thư cảnh báo pháp lý, soạn đơn khởi kiện/bản tự bảo vệ, tham gia hòa giải và phiên xét xử sơ thẩm.',
            en: 'Demand letter issuance, claim/defense drafting, court conciliation, and first-instance hearing advocacy.',
          },
        },
        lump_sum: {
          minFee: 35000000,
          maxFee: 55000000,
          valueRate: 0.02,
          rangeLabel: { vi: '35 – 55 triệu đ', en: 'VND 35M – 55M' },
          successFeeLabel: { vi: 'Trọn gói cấp xét xử (không thu thêm %)', en: 'All-in per stage (no success %)' },
          notes: {
            vi: 'Phù hợp yêu cầu đòi nợ dân sự, tranh chấp đặt cọc, mua bán rõ nghĩa vụ muốn ấn định tổng chi phí từ đầu.',
            en: 'Ideal for straightforward loan, deposit, or sales disputes with a fixed upfront budget cap.',
          },
        },
      },
      complex: {
        criteria: {
          vi: '50–300 bút lục, cần chứng minh dòng tiền/giao dịch thực tế, 3–5 bên hoặc giá trị 1–10 tỷ đồng.',
          en: '50–300 pages, payment trail reconstruction needed, 3–5 parties, or VND 1B–10B.',
        },
        stage_plus_success: {
          minFee: 40000000,
          maxFee: 75000000,
          valueRate: 0.012,
          rangeLabel: { vi: '40 – 75 triệu đ', en: 'VND 40M – 75M' },
          successFeeLabel: { vi: '+ 3% – 5% giá trị thực thu/bảo vệ', en: '+ 3% – 5% of actual recovery' },
          notes: {
            vi: 'Yêu cầu áp dụng biện pháp khẩn cấp tạm thời (phong tỏa tài khoản/tài sản), phản tố và tranh tụng nhiều buổi.',
            en: 'Interim relief applications (asset freeze), counterclaims, evidence verification, and multi-day trial work.',
          },
        },
        lump_sum: {
          minFee: 65000000,
          maxFee: 125000000,
          valueRate: 0.022,
          rangeLabel: { vi: '65 – 125 triệu đ', en: 'VND 65M – 125M' },
          successFeeLabel: { vi: 'Trọn gói cấp xét xử (không thu thêm %)', en: 'All-in per stage (no success %)' },
          notes: {
            vi: 'Đại diện toàn diện từ thu thập chứng cứ ngân hàng/vi bằng, bảo vệ biện pháp khẩn cấp tạm thời tới tuyên án.',
            en: 'Full representation from bailiff/bank evidence gathering and interim relief through trial judgment.',
          },
        },
      },
      high_complex: {
        criteria: {
          vi: 'Trên 300 bút lục, liên quan nhiều giao dịch chồng chéo, >5 bên hoặc giá trị trên 10 tỷ đồng.',
          en: '>300 pages, layered transactions or insolvency risk, 5+ parties, or over VND 10B.',
        },
        stage_plus_success: {
          minFee: 80000000,
          maxFee: null,
          valueRate: 0.008,
          rangeLabel: { vi: 'Từ 80 triệu đ', en: 'From VND 80M' },
          successFeeLabel: { vi: '+ Tỷ lệ % thỏa thuận theo hợp đồng', en: '+ Negotiated success % per contract' },
          notes: {
            vi: 'Áp dụng cho án tranh chấp hợp đồng lớn, bồi thường thiệt hại phức tạp, kháng cáo phúc thẩm hoặc thi hành án cưỡng chế.',
            en: 'Tailored for high-value contract claims, appellate litigation, or complex multi-party judgment enforcement.',
          },
        },
        lump_sum: {
          minFee: 135000000,
          maxFee: null,
          valueRate: 0.015,
          rangeLabel: { vi: 'Từ 135 triệu đ', en: 'From VND 135M' },
          successFeeLabel: { vi: 'Trọn gói theo thỏa thuận hồ sơ', en: 'Bespoke lump sum per dossier' },
          notes: {
            vi: 'Phương án trọn gói cho tổ chức hoặc vụ án giá trị cao yêu cầu phân công nhóm Luật sư tranh tụng chuyên sâu.',
            en: 'Dedicated litigation team engagement under a bespoke fixed-fee scope agreed in advance.',
          },
        },
      },
    },
  },
  {
    id: 'inheritance',
    name: {
      vi: 'Thừa kế & Phân chia Di sản',
      en: 'Inheritance & Estate Distribution',
    },
    shortName: { vi: 'Thừa kế & Di sản', en: 'Inheritance' },
    categoryTag: { vi: 'Dân sự gia đình • Di chúc & Di sản', en: 'Estates • Wills & Probate' },
    ...LITIGATION_DEFAULTS,
    tiers: {
      standard: {
        criteria: {
          vi: 'Soạn thảo di chúc hợp pháp hoặc tư vấn thủ tục khai nhận, phân chia di sản không có tranh chấp.',
          en: 'Will drafting, estate inventory review, or non-contentious notarized probate.',
        },
        supportsDisputeValue: false,
        supportsFeeOptions: false,
        stage_plus_success: {
          minFee: 8000000,
          maxFee: 20000000,
          valueRate: 0,
          rangeLabel: { vi: '8 – 20 triệu đ', en: 'VND 8M – 20M' },
          successFeeLabel: { vi: 'Trọn gói phi tranh tụng (không thu %)', en: 'Non-contentious fixed fee' },
          notes: {
            vi: 'Rà soát hàng thừa kế, thẩm định quyền sở hữu tài sản, soạn dự thảo di chúc/văn bản thỏa thuận và hướng dẫn công chứng.',
            en: 'Heir verification, title audit, will or estate agreement drafting, and notarization support.',
          },
        },
        lump_sum: {
          minFee: 8000000,
          maxFee: 20000000,
          valueRate: 0,
          rangeLabel: { vi: '8 – 20 triệu đ', en: 'VND 8M – 20M' },
          successFeeLabel: { vi: 'Trọn gói phi tranh tụng (không thu %)', en: 'Non-contentious fixed fee' },
          notes: {
            vi: 'Rà soát hàng thừa kế, thẩm định quyền sở hữu tài sản, soạn dự thảo di chúc/văn bản thỏa thuận và hướng dẫn công chứng.',
            en: 'Heir verification, title audit, will or estate agreement drafting, and notarization support.',
          },
        },
      },
      complex: {
        criteria: {
          vi: 'Tranh chấp di sản tại Tòa án, tối đa 4 đồng thừa kế, có xác minh công sức tôn tạo hoặc tính di chúc hợp lệ.',
          en: 'Contested estate litigation in Court, up to 4 co-heirs, including contribution or will validity claims.',
        },
        stage_plus_success: {
          minFee: 35000000,
          maxFee: 65000000,
          valueRate: 0.01,
          rangeLabel: { vi: '35 – 65 triệu đ', en: 'VND 35M – 65M' },
          successFeeLabel: { vi: '+ 3% – 5% kỷ phần nhận/bảo vệ', en: '+ 3% – 5% of estate share awarded' },
          notes: {
            vi: 'Tổ chức hòa giải gia đình, xác minh nhân thân/hộ tịch các hàng thừa kế và đại diện tranh tụng phân chia kỷ phần.',
            en: 'Family settlement mediation, civil-status heir tracing, and trial representation for estate shares.',
          },
        },
        lump_sum: {
          minFee: 60000000,
          maxFee: 120000000,
          valueRate: 0.02,
          rangeLabel: { vi: '60 – 120 triệu đ', en: 'VND 60M – 120M' },
          successFeeLabel: { vi: 'Trọn gói cấp xét xử (không thu thêm %)', en: 'All-in per stage (no success %)' },
          notes: {
            vi: 'Thụ lý trọn gói quy trình chứng minh di sản, yêu cầu định giá tài sản chung và tham gia toàn bộ phiên Tòa.',
            en: 'Fixed stage fee covering estate tracing, court asset valuation motions, and trial advocacy.',
          },
        },
      },
      high_complex: {
        criteria: {
          vi: 'Di sản qua nhiều thế hệ (hơn 4 đồng thừa kế/thừa kế thế vị), nhiều bất động sản hoặc có đương sự ở nước ngoài.',
          en: 'Multi-generational estates (4+ heirs/subrogation), multiple properties, or overseas heirs.',
        },
        stage_plus_success: {
          minFee: 75000000,
          maxFee: null,
          valueRate: 0.008,
          rangeLabel: { vi: 'Từ 75 triệu đ', en: 'From VND 75M' },
          successFeeLabel: { vi: '+ Tỷ lệ % thỏa thuận theo hợp đồng', en: '+ Negotiated success % per contract' },
          notes: {
            vi: 'Ủy thác tư pháp nước ngoài, giám định chữ ký di chúc, bảo vệ quyền người thừa kế không phụ thuộc nội dung di chúc.',
            en: 'Cross-border judicial assistance, forensic will examination, and statutory forced-heir claims.',
          },
        },
        lump_sum: {
          minFee: 130000000,
          maxFee: null,
          valueRate: 0.014,
          rangeLabel: { vi: 'Từ 130 triệu đ', en: 'From VND 130M' },
          successFeeLabel: { vi: 'Trọn gói theo thỏa thuận hồ sơ', en: 'Bespoke lump sum per dossier' },
          notes: {
            vi: 'Đại diện trọn gói các vụ án thừa kế đặc biệt phức tạp kéo dài, nhiều tài sản bất động sản liên tỉnh.',
            en: 'Bespoke full-scope representation for protracted cross-jurisdiction estate disputes.',
          },
        },
      },
    },
  },
  {
    id: 'family',
    name: {
      vi: 'Hôn nhân & Gia đình',
      en: 'Marriage & Family Law',
    },
    shortName: { vi: 'Hôn nhân & Gia đình', en: 'Family Law' },
    categoryTag: { vi: 'Bảo mật • Ly hôn, Con cái & Tài sản chung', en: 'Confidential • Divorce & Assets' },
    ...LITIGATION_DEFAULTS,
    tiers: {
      standard: {
        criteria: {
          vi: 'Ly hôn thuận tình hoặc đơn phương không có tranh chấp phức tạp về tài sản chung và quyền nuôi con.',
          en: 'Uncontested mutual divorce or simple unilateral divorce without major asset/custody disputes.',
        },
        supportsDisputeValue: false,
        supportsFeeOptions: false,
        stage_plus_success: {
          minFee: 10000000,
          maxFee: 25000000,
          valueRate: 0,
          rangeLabel: { vi: '10 – 25 triệu đ', en: 'VND 10M – 25M' },
          successFeeLabel: { vi: 'Trọn gói thủ tục (không thu %)', en: 'Fixed procedural fee' },
          notes: {
            vi: 'Soạn trọn bộ đơn từ, thỏa thuận con chung/tài sản chung rõ ràng, hướng dẫn nộp hồ sơ và tham gia phiên giải quyết.',
            en: 'Complete petition & settlement drafting, court filing guidance, and hearing attendance.',
          },
        },
        lump_sum: {
          minFee: 10000000,
          maxFee: 25000000,
          valueRate: 0,
          rangeLabel: { vi: '10 – 25 triệu đ', en: 'VND 10M – 25M' },
          successFeeLabel: { vi: 'Trọn gói thủ tục (không thu %)', en: 'Fixed procedural fee' },
          notes: {
            vi: 'Soạn trọn bộ đơn từ, thỏa thuận con chung/tài sản chung rõ ràng, hướng dẫn nộp hồ sơ và tham gia phiên giải quyết.',
            en: 'Complete petition & settlement drafting, court filing guidance, and hearing attendance.',
          },
        },
      },
      complex: {
        criteria: {
          vi: 'Ly hôn đơn phương có tranh chấp quyền trực tiếp nuôi con, cấp dưỡng hoặc chia tài sản chung dưới 5 tỷ đồng.',
          en: 'Contested custody, alimony, or marital asset division under VND 5B.',
        },
        stage_plus_success: {
          minFee: 26000000,
          maxFee: 50000000,
          valueRate: 0.01,
          rangeLabel: { vi: '26 – 50 triệu đ', en: 'VND 26M – 50M' },
          successFeeLabel: { vi: '+ 3% – 5% phần tài sản chênh lệch/bảo vệ', en: '+ 3% – 5% of contested asset share' },
          notes: {
            vi: 'Chứng minh điều kiện nuôi con vượt trội, nguồn gốc tài sản riêng – công sức đóng góp và tranh luận tại Tòa án.',
            en: 'Custody fitness proof, separate vs. marital asset tracing, and courtroom litigation.',
          },
        },
        lump_sum: {
          minFee: 40000000,
          maxFee: 85000000,
          valueRate: 0.015,
          rangeLabel: { vi: '40 – 85 triệu đ', en: 'VND 40M – 85M' },
          successFeeLabel: { vi: 'Trọn gói cấp xét xử (không thu thêm %)', en: 'All-in per stage (no success %)' },
          notes: {
            vi: 'Thù lao trọn gói xuyên suốt các buổi hòa giải, xác minh thu nhập/tài sản và phiên tòa sơ thẩm.',
            en: 'All-in stage fee covering conciliation sessions, income/asset tracing, and first-instance trial.',
          },
        },
      },
      high_complex: {
        criteria: {
          vi: 'Tài sản chung từ 5 tỷ đồng trở lên (nhà đất, cổ phần, công nợ chung) hoặc hôn nhân có yếu tố nước ngoài.',
          en: 'Marital estate VND 5B+ (real estate, equity, debts) or cross-border/foreign spouse elements.',
        },
        stage_plus_success: {
          minFee: 55000000,
          maxFee: null,
          valueRate: 0.008,
          rangeLabel: { vi: 'Từ 55 triệu đ', en: 'From VND 55M' },
          successFeeLabel: { vi: '+ Tỷ lệ % thỏa thuận theo hợp đồng', en: '+ Negotiated success % per contract' },
          notes: {
            vi: 'Thẩm định khối tài sản lớn, phòng ngừa tẩu tán tài sản, phối hợp hợp pháp hóa lãnh sự và ủy thác tư pháp.',
            en: 'High-value estate defense, asset dissipation prevention, and international consular/judicial filings.',
          },
        },
        lump_sum: {
          minFee: 90000000,
          maxFee: null,
          valueRate: 0.014,
          rangeLabel: { vi: 'Từ 90 triệu đ', en: 'From VND 90M' },
          successFeeLabel: { vi: 'Trọn gói theo thỏa thuận hồ sơ', en: 'Bespoke lump sum per dossier' },
          notes: {
            vi: 'Bảo vệ toàn diện quyền lợi thân nhân, quyền nuôi con và cơ cấu tài sản tối ưu với mức trọn gói rõ ràng.',
            en: 'Comprehensive protection of custody and high-net-worth asset structures under a tailored fixed fee.',
          },
        },
      },
    },
  },
  {
    id: 'contract',
    name: {
      vi: 'Soạn thảo, Rà soát Hợp đồng & Đơn từ Tố tụng',
      en: 'Contracts, Demand Letters & Court Pleadings',
    },
    shortName: { vi: 'Hợp đồng & Đơn từ', en: 'Contracts & Pleadings' },
    categoryTag: { vi: 'Phòng ngừa rủi ro • Giao dịch an toàn', en: 'Preventive Advisory' },
    supportsDisputeValue: false,
    supportsFeeOptions: false,
    tiers: {
      standard: {
        criteria: {
          vi: 'Soạn thảo đơn khởi kiện, đơn kháng cáo, đơn khiếu nại, thư yêu cầu thực hiện nghĩa vụ (Demand Letter).',
          en: 'Statements of claim, appeal briefs, administrative petitions, or formal demand letters.',
        },
        stage_plus_success: {
          minFee: 3000000,
          maxFee: 6000000,
          valueRate: 0,
          rangeLabel: { vi: '3 – 6 triệu đ / văn bản', en: 'VND 3M – 6M / document' },
          successFeeLabel: { vi: 'Hoàn thành trong 1–3 ngày làm việc', en: 'Delivered in 1–3 business days' },
          notes: {
            vi: 'Phân tích căn cứ pháp lý sơ bộ, cấu trúc lập luận chặt chẽ, kèm hướng dẫn nộp hồ sơ & tài liệu chứng cứ đính kèm.',
            en: 'Preliminary merits check, persuasive legal drafting, and submission checklist.',
          },
        },
      },
      complex: {
        criteria: {
          vi: 'Soạn thảo hoặc rà soát chuyên sâu hợp đồng đặt cọc, mua bán nhà đất, hợp đồng vay có tài sản bảo đảm.',
          en: 'Drafting or deep risk-review of real estate deposits, sales, or secured loan agreements.',
        },
        stage_plus_success: {
          minFee: 6000000,
          maxFee: 15000000,
          valueRate: 0,
          rangeLabel: { vi: '6 – 15 triệu đ / bộ', en: 'VND 6M – 15M / package' },
          successFeeLabel: { vi: 'Kèm 1–2 vòng chỉnh sửa theo phản hồi', en: 'Includes 1–2 redline rounds' },
          notes: {
            vi: 'Quét rủi ro vô hiệu, cài cắm điều khoản phạt vi phạm/bồi thường/giải quyết tranh chấp và hướng dẫn ký kết an toàn.',
            en: 'Nullity risk screening, penalty/indemnity clauses, dispute venue protection, and execution guidance.',
          },
        },
      },
      high_complex: {
        criteria: {
          vi: 'Cấu trúc bộ hợp đồng giao dịch tài sản/kinh doanh giá trị lớn, song ngữ hoặc trực tiếp tham gia đàm phán.',
          en: 'Complex multi-agreement structuring, bilingual contracts, and direct negotiation support.',
        },
        stage_plus_success: {
          minFee: 15000000,
          maxFee: 35000000,
          valueRate: 0,
          rangeLabel: { vi: '15 – 35 triệu đ / thương vụ', en: 'VND 15M – 35M / transaction' },
          successFeeLabel: { vi: 'Bao gồm tham gia phiên đàm phán trực tiếp', en: 'Includes live negotiation sessions' },
          notes: {
            vi: 'Thẩm định pháp lý đối tác/tài sản, soạn thảo hợp đồng song ngữ và cùng khách hàng thương lượng bảo vệ lợi ích tối đa.',
            en: 'Counterparty/asset due diligence, bilingual drafting, and partner-led deal negotiation.',
          },
        },
      },
    },
  },
  {
    id: 'retainer',
    name: {
      vi: 'Tư vấn theo Giờ & Cố vấn Pháp lý Thường xuyên',
      en: 'Hourly Counsel & Ongoing Legal Retainer',
    },
    shortName: { vi: 'Tư vấn & Cố vấn', en: 'Hourly & Retainer' },
    categoryTag: { vi: 'Đồng hành • Cá nhân & Doanh nghiệp', en: 'Advisory • Retainer Plans' },
    supportsDisputeValue: false,
    supportsFeeOptions: false,
    tiers: {
      standard: {
        criteria: {
          vi: 'Tư vấn trực tiếp với Luật sư (tại VP Đắk Lắk / TP.HCM hoặc Video Call) đánh giá hồ sơ và chiến lược ban đầu.',
          en: 'Direct 1-on-1 Attorney consultation (Dak Lak / HCMC offices or Video) for case assessment.',
        },
        stage_plus_success: {
          minFee: 1000000,
          maxFee: 2000000,
          valueRate: 0,
          rangeLabel: { vi: '1.000.000 đ / giờ (EN: 2.000.000 đ)', en: 'VND 1M / hr (EN: VND 2M)' },
          successFeeLabel: { vi: 'Khấu trừ 100% khi ký HĐ dịch vụ pháp lý', en: '100% credited upon full engagement' },
          notes: {
            vi: 'Do chính Luật sư có Thẻ hành nghề trực tiếp tư vấn. Nếu khách hàng ký hợp đồng thụ lý vụ việc, khoản phí này được khấu trừ toàn bộ.',
            en: 'Conducted strictly by licensed Attorneys; 100% credited toward legal fees if you proceed with engagement.',
          },
        },
      },
      complex: {
        criteria: {
          vi: 'Gói Cố vấn Cơ bản dành cho Doanh nghiệp vừa & nhỏ / Gia đình: định mức 15 giờ làm việc của Luật sư mỗi tháng.',
          en: 'Core SME / Family Office Retainer: 15 dedicated attorney hours per month.',
        },
        stage_plus_success: {
          minFee: 8000000,
          maxFee: 8000000,
          valueRate: 0,
          rangeLabel: { vi: '8.000.000 đ / tháng (15 giờ)', en: 'VND 8M / month (15 hrs)' },
          successFeeLabel: { vi: '~533k/giờ • Vượt giờ: 600.000 đ/giờ', en: '~VND 533k/hr • Overage: VND 600k/hr' },
          notes: {
            vi: 'Kiểm soát hợp đồng giao dịch hàng ngày, tư vấn lao động – nội quy công ty và xử lý tranh chấp phát sinh bước đầu.',
            en: 'Day-to-day contract review, labor/HR governance, and rapid early-stage dispute advisory.',
          },
        },
      },
      high_complex: {
        criteria: {
          vi: 'Gói Cố vấn Toàn diện: định mức 35 giờ/tháng (~457k/giờ), kèm ưu đãi giảm 20% phí hợp đồng tranh tụng phát sinh.',
          en: 'Executive Retainer: 35 attorney hours/month (~VND 457k/hr), plus 20% off separate litigation contracts.',
        },
        stage_plus_success: {
          minFee: 16000000,
          maxFee: 16000000,
          valueRate: 0,
          rangeLabel: { vi: '16.000.000 đ / tháng (35 giờ)', en: 'VND 16M / month (35 hrs)' },
          successFeeLabel: { vi: 'Vượt giờ: 500k/giờ • Giảm 20% phí án vụ', en: 'Overage: VND 500k/hr • 20% litigation discount' },
          notes: {
            vi: 'Luật sư riêng đồng hành cùng Ban lãnh đạo: thẩm định giao dịch BĐS/hợp đồng lớn, tham gia đàm phán và ưu tiên xử lý khẩn cấp.',
            en: 'Dedicated partner-level counsel for leadership: deal review, live negotiations, and priority urgent response.',
          },
        },
      },
    },
  },
];

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

  const advanceFee = Math.round(courtFee * 0.5);

  return {
    courtFee: Math.round(courtFee),
    advanceFee,
    formulaDescription,
  };
}

/**
 * Dự toán khung thù lao Luật sư theo lĩnh vực, cấp độ phức tạp và phương thức trả phí.
 */
export function estimateLegalFee(serviceType, disputeValue = 0, options = {}) {
  const {
    complexity = 'standard',
    feeOption = 'stage_plus_success',
    lang = 'vi',
  } = options;

  const locale = lang === 'en' ? 'en' : 'vi';
  const service =
    LEGAL_SERVICE_SCHEDULE.find((item) => item.id === serviceType) || LEGAL_SERVICE_SCHEDULE[0];
  const tierKey = Object.prototype.hasOwnProperty.call(service.tiers, complexity)
    ? complexity
    : 'standard';
  const tier = service.tiers[tierKey];
  const complexityMeta =
    COMPLEXITY_LEVELS.find((lvl) => lvl.id === tierKey) || COMPLEXITY_LEVELS[0];

  const tierSupportsOptions =
    tier.supportsFeeOptions !== undefined ? tier.supportsFeeOptions : service.supportsFeeOptions;
  const tierSupportsValue =
    tier.supportsDisputeValue !== undefined ? tier.supportsDisputeValue : service.supportsDisputeValue;

  const activeOptionKey =
    tierSupportsOptions && tier[feeOption] ? feeOption : 'stage_plus_success';
  const plan = tier[activeOptionKey];

  const val = Math.max(0, Number(disputeValue) || 0);
  let estimatedBaseFee = plan.minFee;
  if (tierSupportsValue && plan.valueRate > 0 && val > 0) {
    const rawAdjusted = Math.max(plan.minFee, Math.round(val * plan.valueRate));
    estimatedBaseFee = plan.maxFee ? Math.min(plan.maxFee, rawAdjusted) : rawAdjusted;
  }

  return {
    serviceId: service.id,
    complexity: tierKey,
    feeOption: activeOptionKey,
    baseFee: estimatedBaseFee,
    minFee: plan.minFee,
    maxFee: plan.maxFee,
    rangeLabel: plan.rangeLabel[locale],
    successFeeLabel: plan.successFeeLabel[locale],
    name: service.name[locale],
    shortName: service.shortName[locale],
    tierLabel: complexityMeta.label[locale],
    criteria: tier.criteria[locale],
    notes: plan.notes[locale],
    supportsDisputeValue: Boolean(tierSupportsValue),
    supportsFeeOptions: Boolean(tierSupportsOptions),
  };
}
