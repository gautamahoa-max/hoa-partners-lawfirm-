export const FEE_CATEGORIES = [
  { id: 'all', label: { vi: 'Tất cả (20)', en: 'All (20)' } },
  { id: 'advisory', label: { vi: 'Tư vấn & Soạn thảo (6)', en: 'Advisory & Drafting (6)' } },
  { id: 'representation', label: { vi: 'Đại diện Ngoài tố tụng (6)', en: 'Pre-Litigation & Representation (6)' } },
  { id: 'litigation', label: { vi: 'Tranh tụng tại Tòa án (8)', en: 'Courtroom Litigation (8)' } },
];

export const FEE_HOMEPAGE_GROUPS = {
  vi: [
    {
      id: 'advisory',
      title: 'Tư vấn & Soạn thảo',
      fromLabel: 'Từ',
      priceText: '1.000.000',
      currency: 'VNĐ',
      popularLabel: 'Dịch vụ phổ biến',
      items: [
        'Tư vấn trực tiếp với Luật sư (khấu trừ 100% khi ký HĐ)',
        'Soạn Đơn khởi kiện, Đơn kháng cáo, Bản tự bảo vệ',
        'Soạn thảo & Rà soát Hợp đồng đặt cọc, mua bán nhà đất',
        'Soạn thảo Di chúc hợp pháp & Văn bản chia di sản',
      ],
      cta: 'Đăng ký ngay',
    },
    {
      id: 'representation',
      title: 'Đại diện Ngoài tố tụng',
      fromLabel: 'Từ',
      priceText: '8.000.000',
      currency: 'VNĐ',
      popularLabel: 'Dịch vụ phổ biến',
      items: [
        'Thủ tục Ly hôn thuận tình & Thỏa thuận nuôi con, tài sản',
        'Đại diện khai nhận thừa kế, sang tên & cấp đổi Sổ đỏ',
        'Đại diện hòa giải đất đai, đàm phán & thu hồi công nợ',
        'Cố vấn pháp lý thường xuyên cho Gia đình & Doanh nghiệp',
      ],
      cta: 'Đăng ký ngay',
    },
    {
      id: 'litigation',
      title: 'Tranh tụng tại Tòa án',
      fromLabel: 'Từ',
      priceText: '20.000.000',
      currency: 'VNĐ',
      popularLabel: 'Dịch vụ phổ biến',
      items: [
        'Tranh tụng vụ án Đất đai, ranh giới & đòi lại nhà đất',
        'Khởi kiện phân chia Di sản thừa kế tại Tòa án các cấp',
        'Tranh tụng Hợp đồng vay, đặt cọc & Bồi thường thiệt hại',
        'Ly hôn đơn phương tranh chấp quyền nuôi con, tài sản lớn',
      ],
      cta: 'Đăng ký ngay',
    },
  ],
  en: [
    {
      id: 'advisory',
      title: 'Advisory & Legal Drafting',
      fromLabel: 'From',
      priceText: '1.000.000',
      currency: 'VNĐ',
      popularLabel: 'Popular Services',
      items: [
        'Direct Partner Consultation (100% credited upon engagement)',
        'Drafting Statements of Claim, Appeals & Defense Briefs',
        'Real Estate Deposit & Sale-Purchase Contract Review',
        'Statutory Will Drafting & Estate Division Instruments',
      ],
      cta: 'Register Now',
    },
    {
      id: 'representation',
      title: 'Pre-Litigation & Representation',
      fromLabel: 'From',
      priceText: '8.000.000',
      currency: 'VNĐ',
      popularLabel: 'Popular Services',
      items: [
        'Uncontested Divorce, Child Custody & Property Settlement',
        'Notarized Inheritance Probate & Land Title Registration',
        'Land Mediation, Out-of-Court Negotiation & Debt Recovery',
        'Ongoing Legal Retainer for Families & SMEs',
      ],
      cta: 'Register Now',
    },
    {
      id: 'litigation',
      title: 'Courtroom Litigation',
      fromLabel: 'From',
      priceText: '20.000.000',
      currency: 'VNĐ',
      popularLabel: 'Popular Services',
      items: [
        'Land Disputes, Boundary Claims & Property Restitution',
        'Contested Inheritance & Estate Division Before Courts',
        'Loan Contract Enforcement, Deposits & Civil Tort Claims',
        'Contested Divorce Involving Custody & Major Assets',
      ],
      cta: 'Register Now',
    },
  ],
};

export const FEE_SCHEDULE_ITEMS = [
  // Nhóm 1: Tư vấn & Soạn thảo (Từ 1.000.000 VNĐ)
  {
    stt: 1,
    category: 'advisory',
    service: {
      vi: 'Tư vấn pháp luật Dân sự trực tiếp với Luật sư',
      en: 'Direct Civil Law Consultation with Licensed Attorney',
    },
    fee: {
      vi: '1.000.000 – 2.000.000',
      en: '1,000,000 – 2,000,000',
    },
    note: {
      vi: 'Thời gian tư vấn tối đa 60 phút (quá thời lượng tính phí phụ trội). Được khấu trừ 100% khi ký Hợp đồng dịch vụ pháp lý.',
      en: 'Up to 60 minutes per session. Credited 100% toward legal fees upon signing a Legal Service Contract.',
    },
  },
  {
    stt: 2,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo đơn đề nghị, kiến nghị, khiếu nại hành chính đất đai & văn bản phản hồi gửi bên thứ ba',
      en: 'Drafting Civil Petitions, Land Administrative Complaints, and Formal Third-Party Notices',
    },
    fee: {
      vi: '1.000.000 – 3.000.000',
      en: '1,000,000 – 3,000,000',
    },
    note: {
      vi: 'Áp dụng cho tranh chấp dân sự, đất đai, thừa kế, hôn nhân gia đình và bồi thường thiệt hại; kèm hướng dẫn gửi cơ quan có thẩm quyền.',
      en: 'Applicable to civil, land, inheritance, family, and tort matters; includes filing guidance.',
    },
  },
  {
    stt: 3,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo Đơn khởi kiện, Đơn kháng cáo, Bản tự bảo vệ, Đơn đề nghị giám đốc thẩm',
      en: 'Drafting Statements of Claim, Appellate Briefs, Statements of Defense & Cassation Petitions',
    },
    fee: {
      vi: '2.000.000 – 5.000.000',
      en: '2,000,000 – 5,000,000',
    },
    note: {
      vi: 'Bao gồm rà soát thời hiệu khởi kiện, đánh giá chứng cứ ban đầu và cấu trúc lập luận theo Bộ luật Tố tụng Dân sự 2015.',
      en: 'Includes statute-of-limitations check, initial evidence review, and pleadings structured under the Civil Procedure Code 2015.',
    },
  },
  {
    stt: 4,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo & Rà soát Hợp đồng dân sự (đặt cọc, chuyển nhượng nhà đất, vay tài sản, thế chấp bảo lãnh)',
      en: 'Drafting & Risk Review of Civil Contracts (Real Estate Deposits, Transfers, Loans, Security)',
    },
    fee: {
      vi: '2.000.000 – 8.000.000',
      en: '2,000,000 – 8,000,000',
    },
    note: {
      vi: 'Kiểm soát rủi ro vô hiệu, thiết lập điều khoản phạt vi phạm/bồi thường; chưa bao gồm phí công chứng, chứng thực.',
      en: 'Screens nullity risks and builds enforceable penalty/indemnity terms; excludes notarization fees.',
    },
  },
  {
    stt: 5,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo Di chúc hợp pháp, Văn bản thỏa thuận tài sản vợ chồng & Văn bản phân chia di sản',
      en: 'Drafting Statutory Wills, Marital Property Agreements & Inheritance Distribution Deeds',
    },
    fee: {
      vi: '3.000.000 – 8.000.000',
      en: '3,000,000 – 8,000,000',
    },
    note: {
      vi: 'Đã bao gồm phí tư vấn hàng thừa kế và tài sản chung/riêng; chưa bao gồm phí công chứng, chứng thực, dịch thuật (nếu có).',
      en: 'Includes heir and asset-ownership consultation; excludes notarization and translation charges if applicable.',
    },
  },
  {
    stt: 6,
    category: 'advisory',
    service: {
      vi: 'Thư tư vấn pháp lý chuyên sâu bằng văn bản (Legal Opinion) & Thẩm định hồ sơ tranh chấp phức tạp',
      en: 'Written Legal Opinion & Comprehensive Merits Assessment for Complex Civil Dossiers',
    },
    fee: {
      vi: '5.000.000 – 15.000.000',
      en: '5,000,000 – 15,000,000',
    },
    note: {
      vi: 'Nghiên cứu toàn bộ hồ sơ, phân tích xác suất thắng kiện, rủi ro pháp lý và đề xuất lộ trình giải quyết bằng văn bản.',
      en: 'Full dossier audit delivering candid win-probability evaluation and written litigation strategy.',
    },
  },

  // Nhóm 2: Đại diện Ngoài tố tụng (Từ 8.000.000 VNĐ)
  {
    stt: 7,
    category: 'representation',
    service: {
      vi: 'Thủ tục Ly hôn thuận tình & Thỏa thuận quyền trực tiếp nuôi con, phân chia tài sản chung rõ ràng',
      en: 'Uncontested Mutual Divorce & Agreed Child Custody / Marital Property Settlement',
    },
    fee: {
      vi: '8.000.000 – 15.000.000',
      en: '8,000,000 – 15,000,000',
    },
    note: {
      vi: 'Soạn trọn bộ hồ sơ, hướng dẫn thủ tục tại Tòa án và bảo mật thông tin tuyệt đối; chưa bao gồm án phí nhà nước.',
      en: 'End-to-end filing preparation under strict confidentiality; excludes statutory court fees.',
    },
  },
  {
    stt: 8,
    category: 'representation',
    service: {
      vi: 'Đại diện khai nhận di sản thừa kế, sang tên, cấp mới / cấp đổi Giấy chứng nhận (Sổ đỏ)',
      en: 'Representation for Notarized Inheritance Probate & Land Use Right Certificate Transfer / Issuance',
    },
    fee: {
      vi: '10.000.000 – 35.000.000',
      en: '10,000,000 – 35,000,000',
    },
    note: {
      vi: 'Áp dụng tại Đắk Lắk và TP.HCM tùy tính chất hồ sơ đất đai; chưa bao gồm thuế, lệ phí trước bạ, đo đạc và công chứng.',
      en: 'Applicable in Dak Lak and HCMC based on dossier complexity; excludes taxes, stamp duty, survey, and notary fees.',
    },
  },
  {
    stt: 9,
    category: 'representation',
    service: {
      vi: 'Đại diện theo ủy quyền tham gia hòa giải tranh chấp đất đai tại UBND, đàm phán & thu hồi công nợ',
      en: 'Authorized Representation in Communal Land Conciliation, Settlement Negotiation & Debt Recovery',
    },
    fee: {
      vi: '8.000.000 – 20.000.000',
      en: '8,000,000 – 20,000,000',
    },
    note: {
      vi: 'Áp dụng giai đoạn tiền tố tụng; trường hợp vụ việc kéo dài hoặc thỏa thuận gắn % thu hồi sẽ quy định rõ trong Hợp đồng.',
      en: 'Pre-suit phase coverage; extended engagements or recovery-% terms are explicitly set by contract.',
    },
  },
  {
    stt: 10,
    category: 'representation',
    service: {
      vi: 'Xác minh, thu thập chứng cứ; trích lục bản đồ địa chính, hồ sơ quy hoạch & lập vi bằng sự kiện pháp lý',
      en: 'Civil Evidence Collection, Cadastral Map Extracts, Zoning Records & Bailiff Attestation Support',
    },
    fee: {
      vi: '8.000.000 – 20.000.000',
      en: '8,000,000 – 20,000,000',
    },
    note: {
      vi: 'Phí tối thiểu tại Đắk Lắk và TP.HCM; chưa gồm lệ phí cơ quan lưu trữ, phí thừa phát lại và chi phí đi lại ngoại tỉnh.',
      en: 'Minimum fee in Dak Lak & HCMC; excludes archive/bailiff statutory fees and inter-provincial travel.',
    },
  },
  {
    stt: 11,
    category: 'representation',
    service: {
      vi: 'Đại diện ngoài tố tụng giải quyết tranh chấp tài sản, bồi thường thiệt hại & quan hệ dân sự có yếu tố nước ngoài',
      en: 'Out-of-Court Representation for Property, Tort & Cross-Border Civil / Family Matters',
    },
    fee: {
      vi: '15.000.000 – 35.000.000',
      en: '15,000,000 – 35,000,000',
    },
    note: {
      vi: 'Chưa bao gồm lệ phí hợp pháp hóa lãnh sự, dịch thuật công chứng và công tác phí ngoài địa bàn Đắk Lắk – TP.HCM.',
      en: 'Excludes consular legalization, certified translation, and travel outside Dak Lak – HCMC.',
    },
  },
  {
    stt: 12,
    category: 'representation',
    service: {
      vi: 'Cố vấn pháp lý thường xuyên cho Gia đình & Doanh nghiệp (kiểm soát hợp đồng dân sự, công nợ, tài sản)',
      en: 'Ongoing Legal Retainer for Families & Enterprises (Civil Contracts, Debt & Asset Governance)',
    },
    fee: {
      vi: '8.000.000 – 16.000.000',
      en: '8,000,000 – 16,000,000',
    },
    note: {
      vi: 'Phí theo tháng tương ứng định mức giờ luật sư; khách hàng ký gói thường xuyên được ưu đãi giảm phí khi phát sinh án tố tụng.',
      en: 'Monthly retainer based on attorney hours; includes preferred fee discount for subsequent litigation.',
    },
  },

  // Nhóm 3: Tranh tụng tại Tòa án (Từ 20.000.000 VNĐ)
  {
    stt: 13,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng vụ án Hợp đồng dân sự (vay mượn tài sản, đặt cọc, mua bán, thế chấp bảo lãnh) tại Tòa án Sơ thẩm',
      en: 'First-Instance Litigation for Civil Contracts (Loans, Deposits, Sales, Guarantees)',
    },
    fee: {
      vi: 'Từ 20.000.000',
      en: 'From 20,000,000',
    },
    note: {
      vi: 'Tính cho 01 cấp xét xử; có thể chọn phương án phí cố định hoặc phí cơ sở + % kết quả theo Điều 55 Luật Luật sư.',
      en: 'Covers one court instance; available as fixed stage fee or base fee + success % under Art. 55.',
    },
  },
  {
    stt: 14,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng vụ án Đất đai & Bất động sản (ranh giới, lối đi, đòi lại nhà đất, hủy hợp đồng chuyển nhượng)',
      en: 'Litigation for Land & Real Estate Disputes (Boundaries, Easement, Restitution, Title Claims)',
    },
    fee: {
      vi: 'Từ 25.000.000',
      en: 'From 25,000,000',
    },
    note: {
      vi: 'Cho 01 cấp xét xử; chưa bao gồm án phí NQ 326, chi phí đo đạc thực địa, xem xét thẩm định tại chỗ và định giá tài sản.',
      en: 'Covers one court instance; excludes Res. 326 court fees, land survey, on-site inspection, and appraisal costs.',
    },
  },
  {
    stt: 15,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng vụ án Thừa kế & Phân chia Di sản theo di chúc hoặc theo pháp luật tại Tòa án các cấp',
      en: 'Court Litigation for Contested Wills & Inheritance Estate Distribution',
    },
    fee: {
      vi: 'Từ 25.000.000',
      en: 'From 25,000,000',
    },
    note: {
      vi: 'Cho 01 cấp xét xử; mức cụ thể căn cứ số lượng đồng thừa kế, khối lượng bất động sản và yêu cầu giám định tài liệu.',
      en: 'Covers one court instance; exact fee depends on number of heirs, asset scope, and forensic verification needs.',
    },
  },
  {
    stt: 16,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng vụ án Ly hôn đơn phương có tranh chấp quyền nuôi con, cấp dưỡng hoặc chia tài sản chung lớn',
      en: 'Contested Divorce Litigation Involving Child Custody, Support & Major Marital Assets',
    },
    fee: {
      vi: 'Từ 20.000.000',
      en: 'From 20,000,000',
    },
    note: {
      vi: 'Mức phí điều chỉnh theo giá trị khối tài sản chung tranh chấp hoặc trường hợp có đương sự đang cư trú ở nước ngoài.',
      en: 'Adjusted according to disputed marital estate value or cross-border party involvement.',
    },
  },
  {
    stt: 17,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng yêu cầu Bồi thường thiệt hại ngoài hợp đồng (tài sản, sức khỏe, tính mạng, danh dự, uy tín)',
      en: 'Civil Tort Litigation for Non-Contractual Damages (Property, Health, Life & Reputation)',
    },
    fee: {
      vi: 'Từ 20.000.000',
      en: 'From 20,000,000',
    },
    note: {
      vi: 'Bao gồm định lượng thiệt hại thực tế theo Nghị quyết 02/2022/NQ-HĐTP, lập hồ sơ chứng cứ và tranh luận tại phiên tòa.',
      en: 'Includes statutory damage quantification under Res. 02/2022/NQ-HDTP, evidence compilation, and trial advocacy.',
    },
  },
  {
    stt: 18,
    category: 'litigation',
    service: {
      vi: 'Đại diện Kháng cáo Phúc thẩm, đề nghị Giám đốc thẩm / Tái thẩm & Khởi kiện quyết định hành chính về đất đai',
      en: 'Appellate Advocacy, Cassation / Retrial Petitions & Administrative Land Appeals',
    },
    fee: {
      vi: 'Từ 25.000.000',
      en: 'From 25,000,000',
    },
    note: {
      vi: 'Áp dụng cho cấp xét xử phúc thẩm hoặc thủ tục đặc biệt; báo phí chính xác sau khi nghiên cứu bản án đã tuyên.',
      en: 'Applies to appellate instance or extraordinary review; confirmed upon reviewing the lower-court judgment.',
    },
  },
  {
    stt: 19,
    category: 'litigation',
    service: {
      vi: 'Đại diện giai đoạn Thi hành án dân sự & Tổ chức thu hồi thực tế theo bản án có hiệu lực',
      en: 'Civil Judgment Enforcement Representation & Post-Judgment Asset Recovery',
    },
    fee: {
      vi: 'Theo thỏa thuận',
      en: 'By Agreement',
    },
    note: {
      vi: 'Thỏa thuận cố định hoặc kết hợp tỷ lệ % trên giá trị tài sản/số tiền thực tế thu hồi được ghi rõ trong Hợp đồng.',
      en: 'Fixed fee or percentage tied to actual recovered judgment value as documented in the Legal Service Contract.',
    },
  },
  {
    stt: 20,
    category: 'litigation',
    service: {
      vi: 'Các vụ việc Dân sự, Đất đai, Tài sản chuyên biệt khác theo yêu cầu của thân chủ',
      en: 'Other Specialized Civil, Land, and Property Legal Matters',
    },
    fee: {
      vi: 'Theo thỏa thuận',
      en: 'By Agreement',
    },
    note: {
      vi: 'Đánh giá hồ sơ và thông báo thù lao minh bạch bằng văn bản ngay tại thời điểm tiếp nhận vụ việc.',
      en: 'Assessed and quoted transparently in writing at initial intake.',
    },
  },
];
