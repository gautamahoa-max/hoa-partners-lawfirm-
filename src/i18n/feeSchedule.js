export { FEE_HOMEPAGE_GROUPS } from './feeHomepageGroups.js';

export const FEE_CATEGORIES = [
  { id: 'all', label: { vi: 'Tất cả (20)', en: 'All (20)' } },
  { id: 'advisory', label: { vi: 'Tư vấn & Soạn thảo (6)', en: 'Advisory & Drafting (6)' } },
  { id: 'representation', label: { vi: 'Đại diện Ngoài tố tụng (6)', en: 'Pre-Litigation & Representation (6)' } },
  { id: 'litigation', label: { vi: 'Tranh tụng tại Tòa án (8)', en: 'Courtroom Litigation (8)' } },
];

export const FEE_SCHEDULE_ITEMS = [
  // Nhóm 1: Tư vấn & Soạn thảo (Từ 1.000.000 VNĐ)
  {
    stt: 1,
    category: 'advisory',
    service: {
      vi: 'Tư vấn trực tiếp với Luật sư',
      en: 'Direct Consultation with Attorney',
    },
    fee: {
      vi: '1.000.000 – 2.000.000',
      en: '1,000,000 – 2,000,000',
    },
    note: {
      vi: 'Tư vấn pháp luật Dân sự tối đa 60 phút (quá thời lượng tính phí phụ trội). Được khấu trừ 100% khi ký Hợp đồng dịch vụ pháp lý.',
      en: 'Civil Law consultation up to 60 minutes per session. Credited 100% toward legal fees upon signing a Legal Service Contract.',
    },
  },
  {
    stt: 2,
    category: 'advisory',
    service: {
      vi: 'Soạn đơn khiếu nại, kiến nghị & văn bản gửi bên thứ ba',
      en: 'Drafting Complaints, Petitions & Formal Notices',
    },
    fee: {
      vi: '1.000.000 – 3.000.000',
      en: '1,000,000 – 3,000,000',
    },
    note: {
      vi: 'Áp dụng cho đơn đề nghị, khiếu nại hành chính đất đai, dân sự, thừa kế, hôn nhân và văn bản phản hồi; kèm hướng dẫn gửi cơ quan có thẩm quyền.',
      en: 'Covers civil petitions, land administrative complaints, inheritance, family matters, and formal replies; includes filing guidance.',
    },
  },
  {
    stt: 3,
    category: 'advisory',
    service: {
      vi: 'Soạn Đơn khởi kiện, Kháng cáo & Bản tự bảo vệ',
      en: 'Drafting Claims, Appeals & Defense Briefs',
    },
    fee: {
      vi: '2.000.000 – 5.000.000',
      en: '2,000,000 – 5,000,000',
    },
    note: {
      vi: 'Bao gồm cả đơn đề nghị giám đốc thẩm, rà soát thời hiệu khởi kiện, đánh giá chứng cứ ban đầu và lập luận theo Bộ luật Tố tụng Dân sự 2015.',
      en: 'Includes cassation petitions, statute-of-limitations checks, initial evidence review, and pleadings structured under the Civil Procedure Code 2015.',
    },
  },
  {
    stt: 4,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo & Rà soát Hợp đồng dân sự',
      en: 'Drafting & Reviewing Civil Contracts',
    },
    fee: {
      vi: '2.000.000 – 8.000.000',
      en: '2,000,000 – 8,000,000',
    },
    note: {
      vi: 'Áp dụng cho hợp đồng đặt cọc, chuyển nhượng nhà đất, vay tài sản, thế chấp bảo lãnh; kiểm soát rủi ro vô hiệu và phạt vi phạm (chưa gồm phí công chứng).',
      en: 'Covers real estate deposit, property transfer, loan, and security contracts; screens nullity risks and penalty clauses (excludes notarization fees).',
    },
  },
  {
    stt: 5,
    category: 'advisory',
    service: {
      vi: 'Soạn Di chúc & Văn bản phân chia tài sản',
      en: 'Drafting Wills & Asset Division Deeds',
    },
    fee: {
      vi: '3.000.000 – 8.000.000',
      en: '3,000,000 – 8,000,000',
    },
    note: {
      vi: 'Bao gồm di chúc hợp pháp, thỏa thuận tài sản vợ chồng và phân chia di sản; đã gồm tư vấn hàng thừa kế (chưa gồm phí công chứng, dịch thuật).',
      en: 'Includes statutory wills, marital property agreements, and inheritance distribution deeds; includes heir consultation (excludes notarization and translation fees).',
    },
  },
  {
    stt: 6,
    category: 'advisory',
    service: {
      vi: 'Thẩm định hồ sơ & Thư tư vấn bằng văn bản',
      en: 'Written Legal Opinion & Case Assessment',
    },
    fee: {
      vi: '5.000.000 – 15.000.000',
      en: '5,000,000 – 15,000,000',
    },
    note: {
      vi: 'Nghiên cứu toàn bộ hồ sơ tranh chấp phức tạp, phân tích xác suất thắng kiện, rủi ro pháp lý và đề xuất lộ trình giải quyết bằng văn bản (Legal Opinion).',
      en: 'Full audit of complex dispute dossiers, evaluating win probability, legal risks, and a written resolution roadmap (Legal Opinion).',
    },
  },

  // Nhóm 2: Đại diện Ngoài tố tụng (Từ 8.000.000 VNĐ)
  {
    stt: 7,
    category: 'representation',
    service: {
      vi: 'Thủ tục Ly hôn thuận tình',
      en: 'Uncontested Mutual Divorce',
    },
    fee: {
      vi: '8.000.000 – 15.000.000',
      en: '8,000,000 – 15,000,000',
    },
    note: {
      vi: 'Bao gồm thỏa thuận quyền trực tiếp nuôi con và phân chia tài sản chung rõ ràng; soạn trọn bộ hồ sơ, bảo mật tuyệt đối (chưa gồm án phí nhà nước).',
      en: 'Includes agreed child custody and clear marital property division; end-to-end filing preparation under strict confidentiality (excludes statutory court fees).',
    },
  },
  {
    stt: 8,
    category: 'representation',
    service: {
      vi: 'Khai nhận thừa kế & Sang tên, cấp đổi Sổ đỏ',
      en: 'Inheritance Probate & Land Title Transfer',
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
      vi: 'Đại diện hòa giải đất đai, đàm phán & thu hồi nợ',
      en: 'Land Mediation, Negotiation & Debt Recovery',
    },
    fee: {
      vi: '8.000.000 – 20.000.000',
      en: '8,000,000 – 20,000,000',
    },
    note: {
      vi: 'Đại diện theo ủy quyền hòa giải tại UBND và thương lượng giai đoạn tiền tố tụng; thỏa thuận gắn % thu hồi (nếu có) quy định rõ trong Hợp đồng.',
      en: 'Authorized representation in communal land conciliation and pre-suit negotiation; recovery-% terms (if any) are explicitly set by contract.',
    },
  },
  {
    stt: 10,
    category: 'representation',
    service: {
      vi: 'Thu thập chứng cứ, trích lục hồ sơ & lập vi bằng',
      en: 'Evidence Collection, Cadastral Extracts & Bailiff Records',
    },
    fee: {
      vi: '8.000.000 – 20.000.000',
      en: '8,000,000 – 20,000,000',
    },
    note: {
      vi: 'Xác minh hồ sơ, trích lục bản đồ địa chính, thông tin quy hoạch và hỗ trợ lập vi bằng tại Đắk Lắk – TP.HCM (chưa gồm lệ phí nhà nước, thừa phát lại, công tác phí).',
      en: 'Evidence verification, cadastral map extracts, zoning records, and bailiff attestation support in Dak Lak & HCMC (excludes statutory, bailiff, and travel fees).',
    },
  },
  {
    stt: 11,
    category: 'representation',
    service: {
      vi: 'Giải quyết tranh chấp tài sản & vụ việc có yếu tố nước ngoài',
      en: 'Out-of-Court Property & Cross-Border Civil Representation',
    },
    fee: {
      vi: '15.000.000 – 35.000.000',
      en: '15,000,000 – 35,000,000',
    },
    note: {
      vi: 'Đại diện ngoài tố tụng về tài sản, bồi thường thiệt hại và quan hệ dân sự có yếu tố nước ngoài; chưa gồm hợp pháp hóa lãnh sự, dịch thuật và công tác phí ngoại tỉnh.',
      en: 'Out-of-court representation for property, tort, and cross-border civil matters; excludes consular legalization, certified translation, and inter-provincial travel.',
    },
  },
  {
    stt: 12,
    category: 'representation',
    service: {
      vi: 'Cố vấn pháp lý thường xuyên cho Gia đình & Doanh nghiệp',
      en: 'Ongoing Legal Retainer for Families & Businesses',
    },
    fee: {
      vi: '8.000.000 – 16.000.000',
      en: '8,000,000 – 16,000,000',
    },
    note: {
      vi: 'Kiểm soát hợp đồng dân sự, công nợ và tài sản theo định mức giờ luật sư hàng tháng; được ưu đãi giảm phí khi phát sinh án tố tụng.',
      en: 'Monthly retainer governing civil contracts, debt, and assets based on attorney hours; includes preferred fee discounts for subsequent litigation.',
    },
  },

  // Nhóm 3: Tranh tụng tại Tòa án (Từ 20.000.000 VNĐ)
  {
    stt: 13,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng Hợp đồng dân sự (vay nợ, đặt cọc, mua bán)',
      en: 'Civil Contract Litigation (Loans, Deposits, Sales)',
    },
    fee: {
      vi: 'Từ 20.000.000',
      en: 'From 20,000,000',
    },
    note: {
      vi: 'Tính cho 01 cấp xét xử sơ thẩm (gồm cả thế chấp, bảo lãnh); có thể chọn phí cố định hoặc phí cơ sở + % kết quả theo Điều 55 Luật Luật sư.',
      en: 'Covers one first-instance court stage (including mortgages and guarantees); fixed fee or base fee + success % under Art. 55.',
    },
  },
  {
    stt: 14,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng Đất đai & Bất động sản',
      en: 'Land & Real Estate Litigation',
    },
    fee: {
      vi: 'Từ 25.000.000',
      en: 'From 25,000,000',
    },
    note: {
      vi: 'Tranh chấp ranh giới, lối đi, đòi lại nhà đất, hủy hợp đồng chuyển nhượng cho 01 cấp xét xử; chưa gồm án phí NQ 326, đo đạc và định giá tài sản.',
      en: 'Covers boundary, easement, property restitution, and transfer cancellation disputes for one court instance; excludes Res. 326 court fees, survey, and appraisal costs.',
    },
  },
  {
    stt: 15,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng Thừa kế & Phân chia di sản',
      en: 'Inheritance & Estate Partition Litigation',
    },
    fee: {
      vi: 'Từ 25.000.000',
      en: 'From 25,000,000',
    },
    note: {
      vi: 'Áp dụng cho chia di sản theo di chúc hoặc theo pháp luật (01 cấp xét xử); mức cụ thể căn cứ số đồng thừa kế, khối lượng tài sản và yêu cầu giám định.',
      en: 'Covers contested wills or statutory estate partition (one court instance); exact fee depends on number of heirs, asset scope, and forensic verification needs.',
    },
  },
  {
    stt: 16,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng Ly hôn đơn phương, nuôi con & chia tài sản',
      en: 'Contested Divorce, Custody & Asset Litigation',
    },
    fee: {
      vi: 'Từ 20.000.000',
      en: 'From 20,000,000',
    },
    note: {
      vi: 'Mức phí điều chỉnh theo giá trị khối tài sản chung tranh chấp, yêu cầu cấp dưỡng hoặc trường hợp có đương sự cư trú ở nước ngoài.',
      en: 'Adjusted according to disputed marital estate value, alimony claims, or cross-border party involvement.',
    },
  },
  {
    stt: 17,
    category: 'litigation',
    service: {
      vi: 'Tranh tụng Bồi thường thiệt hại ngoài hợp đồng',
      en: 'Non-Contractual Civil Damages Litigation',
    },
    fee: {
      vi: 'Từ 20.000.000',
      en: 'From 20,000,000',
    },
    note: {
      vi: 'Áp dụng cho thiệt hại tài sản, sức khỏe, tính mạng, danh dự, uy tín; bao gồm định lượng theo Nghị quyết 02/2022/NQ-HĐTP và tranh luận tại phiên tòa.',
      en: 'Covers property, health, life, and reputation damages; includes quantification under Res. 02/2022/NQ-HDTP and trial advocacy.',
    },
  },
  {
    stt: 18,
    category: 'litigation',
    service: {
      vi: 'Kháng cáo Phúc thẩm, Giám đốc thẩm & Hành chính đất đai',
      en: 'Appeals, Cassation Review & Land Administrative Suits',
    },
    fee: {
      vi: 'Từ 25.000.000',
      en: 'From 25,000,000',
    },
    note: {
      vi: 'Áp dụng cho xét xử phúc thẩm, đề nghị giám đốc thẩm/tái thẩm hoặc khởi kiện quyết định hành chính về đất đai; báo phí chính xác sau khi nghiên cứu bản án.',
      en: 'Applies to appellate trials, cassation/retrial petitions, or administrative land suits; exact fee confirmed upon reviewing the lower-court judgment.',
    },
  },
  {
    stt: 19,
    category: 'litigation',
    service: {
      vi: 'Đại diện Thi hành án dân sự & Thu hồi tài sản',
      en: 'Civil Judgment Enforcement & Asset Recovery',
    },
    fee: {
      vi: 'Theo thỏa thuận',
      en: 'By Agreement',
    },
    note: {
      vi: 'Tổ chức thu hồi thực tế theo bản án có hiệu lực; thỏa thuận cố định hoặc kết hợp tỷ lệ % trên giá trị thu hồi ghi rõ trong Hợp đồng.',
      en: 'Post-judgment asset recovery under enforceable rulings; fixed fee or percentage tied to actual recovered value as stated in the Contract.',
    },
  },
  {
    stt: 20,
    category: 'litigation',
    service: {
      vi: 'Các vụ việc Dân sự, Đất đai khác theo yêu cầu',
      en: 'Other Specialized Civil & Property Matters',
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
