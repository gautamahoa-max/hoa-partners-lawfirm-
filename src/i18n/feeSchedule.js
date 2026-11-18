export const FEE_CATEGORIES = [
  { id: 'all', label: { vi: 'Tất cả (20)', en: 'All (20)' } },
  { id: 'advisory', label: { vi: 'Tư vấn & Soạn thảo', en: 'Advisory & Drafting' } },
  { id: 'litigation', label: { vi: 'Tranh tụng & Đại diện', en: 'Litigation & Representation' } },
  { id: 'corporate_land', label: { vi: 'Doanh nghiệp & Nhà đất', en: 'Corporate & Real Estate' } },
  { id: 'other', label: { vi: 'Hải quan, Di trú & Khác', en: 'Customs, Visa & Other' } },
];

export const FEE_SCHEDULE_ITEMS = [
  {
    stt: 1,
    category: 'advisory',
    service: {
      vi: 'Tư vấn pháp luật trực tiếp tại Công ty Luật TNHH Hoà và Cộng sự',
      en: 'In-office Legal Consultation at Hoa & Associates Law Firm LLC',
    },
    fee: {
      vi: '100.000 – 500.000',
      en: '100,000 – 500,000',
    },
    note: {
      vi: 'Biểu phí tối thiểu và thời gian tư vấn không quá 1 giờ (quá 1 giờ sẽ tính phí phụ trội)',
      en: 'Minimum consultation fee for up to 1 hour (surcharges apply for additional time)',
    },
  },
  {
    stt: 2,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo các văn bản: đơn đề nghị, yêu cầu, kiến nghị…',
      en: 'Drafting formal requests, petitions, and legal applications',
    },
    fee: {
      vi: '200.000 – 500.000',
      en: '200,000 – 500,000',
    },
    note: {
      vi: 'Áp dụng đối với các vụ án hình sự, dân sự, hành chính, lao động, khiếu nại, tố cáo,… Hỗ trợ gửi văn bản tới Bên thứ ba.',
      en: 'Applicable to criminal, civil, administrative, labor, complaint, and denunciation matters. Includes dispatch support to third parties.',
    },
  },
  {
    stt: 3,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo Đơn khởi kiện; Kháng cáo; Khiếu nại, Đơn tố cáo; Tố giác…',
      en: 'Drafting Statements of Claim, Appeals, Complaints, and Denunciations',
    },
    fee: {
      vi: '1.000.000 – 5.000.000',
      en: '1,000,000 – 5,000,000',
    },
    note: {
      vi: '',
      en: '',
    },
  },
  {
    stt: 4,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo di chúc, Văn bản thỏa thuận về tài sản; Văn bản chia tài sản',
      en: 'Drafting Wills, Property Agreements, and Asset Division Instruments',
    },
    fee: {
      vi: '1.000.000 – 3.000.000',
      en: '1,000,000 – 3,000,000',
    },
    note: {
      vi: 'Đã bao gồm phí tư vấn, không bao gồm phí dịch thuật, công chứng – chứng thực (nếu có)',
      en: 'Includes legal consultation; excludes translation and notarization/certification fees (if applicable)',
    },
  },
  {
    stt: 5,
    category: 'advisory',
    service: {
      vi: 'Soạn thảo hợp đồng các loại kinh tế, dân sự, thương mại… (trong nước)',
      en: 'Drafting domestic Economic, Civil, and Commercial Contracts',
    },
    fee: {
      vi: '1.000.000 – 5.000.000',
      en: '1,000,000 – 5,000,000',
    },
    note: {
      vi: '',
      en: '',
    },
  },
  {
    stt: 6,
    category: 'advisory',
    service: {
      vi: 'Soạn hợp đồng có yếu tố nước ngoài (liên doanh, thương mại, li-xăng…)',
      en: 'Drafting Cross-Border Contracts (Joint Venture, Commercial, Licensing…)',
    },
    fee: {
      vi: '5.000.000 – 20.000.000',
      en: '5,000,000 – 20,000,000',
    },
    note: {
      vi: '',
      en: '',
    },
  },
  {
    stt: 7,
    category: 'advisory',
    service: {
      vi: 'Tư vấn giải quyết tranh chấp (trực tiếp và bằng văn bản), tư vấn tại nhà khách hàng hoặc tham gia đàm phán với bên thứ ba theo yêu cầu của khách hàng',
      en: 'Dispute Resolution Advisory (in-person/written), home visits, or third-party negotiations upon client request',
    },
    fee: {
      vi: '2.000.000 – 10.000.000',
      en: '2,000,000 – 10,000,000',
    },
    note: {
      vi: 'Áp dụng cho những tình huống phức tạp, quan trọng. Cần có thời gian xem xét, nghiên cứu hồ sơ và soạn thư tư vấn bằng văn bản.',
      en: 'Applicable to complex, high-stakes matters requiring dossier review and formal written legal opinion.',
    },
  },
  {
    stt: 8,
    category: 'litigation',
    service: {
      vi: 'Thù lao Luật sư tham gia tranh tụng/Đại diện tại tòa án/Trọng tài thương mại (cho 01 giai đoạn giải quyết/01 cấp xét xử)',
      en: 'Attorney Litigation Fee / Court & Commercial Arbitration Representation (per procedural stage / instance)',
    },
    fee: {
      vi: 'Tối thiểu 5.000.000',
      en: 'Minimum 5,000,000',
    },
    note: {
      vi: 'Phí dịch vụ cụ thể sẽ được thông báo sau khi nghiên cứu hồ sơ, tùy tính chất của vụ việc',
      en: 'Exact legal fee is quoted after dossier review depending on case complexity',
    },
  },
  {
    stt: 9,
    category: 'litigation',
    service: {
      vi: 'Đại diện ngoài tố tụng (đại diện theo ủy quyền) theo yêu cầu của khách hàng',
      en: 'Out-of-Court Representation (under Power of Attorney) upon client request',
    },
    fee: {
      vi: '2.000.000 – 5.000.000',
      en: '2,000,000 – 5,000,000',
    },
    note: {
      vi: 'Phí tối thiểu, không bao gồm chi phí công chứng, đi lại, ăn nghỉ của LS. Nếu vụ việc phức tạp, kéo dài thì tùy hồ sơ sẽ thông báo phí sau',
      en: 'Minimum fee; excludes notarization, travel, and accommodation expenses. Complex/protracted matters are quoted per dossier.',
    },
  },
  {
    stt: 10,
    category: 'litigation',
    service: {
      vi: 'Xúc tiến, đại diện cho thương nhân và môi giới thương mại',
      en: 'Commercial Trade Representation, Promotion, and Brokerage',
    },
    fee: {
      vi: '5.000.000 – 20.000.000',
      en: '5,000,000 – 20,000,000',
    },
    note: {
      vi: '',
      en: '',
    },
  },
  {
    stt: 11,
    category: 'litigation',
    service: {
      vi: 'Tư vấn pháp luật thường xuyên cho doanh nghiệp (Luật sư riêng)',
      en: 'Ongoing Corporate Legal Retainer (Dedicated Counsel)',
    },
    fee: {
      vi: '2.000.000 – 5.000.000',
      en: '2,000,000 – 5,000,000',
    },
    note: {
      vi: 'Phí tối thiểu hàng tháng, tùy phạm vi công việc và số giờ Luật sư sẽ có mức phí cụ thể.',
      en: 'Minimum monthly retainer; final fee depends on work scope and attorney hours.',
    },
  },
  {
    stt: 12,
    category: 'corporate_land',
    service: {
      vi: 'Đăng ký kinh doanh (doanh nghiệp trong nước)',
      en: 'Business Registration (Domestic Enterprises)',
    },
    fee: {
      vi: '1.000.000 – 2.000.000',
      en: '1,000,000 – 2,000,000',
    },
    note: {
      vi: 'Đăng ký mới, đăng ký thay đổi, thành lập chi nhánh, văn phòng đại diện… (theo quy trình thông thường, không bao gồm phí thẩm tra, lệ phí nhà nước)',
      en: 'New incorporation, amendments, branches, representative offices (standard process; excludes appraisal and statutory state fees)',
    },
  },
  {
    stt: 13,
    category: 'corporate_land',
    service: {
      vi: 'Đăng ký kinh doanh (doanh nghiệp có vốn đầu tư nước ngoài)',
      en: 'Business Registration (Foreign-Invested Enterprises)',
    },
    fee: {
      vi: '5.000.000 – 20.000.000',
      en: '5,000,000 – 20,000,000',
    },
    note: {
      vi: '',
      en: '',
    },
  },
  {
    stt: 14,
    category: 'corporate_land',
    service: {
      vi: 'Cấp GCN QSD đất lần đầu; Thủ tục mua bán, chuyển nhượng Bất động sản; Cấp phép xây dựng…',
      en: 'Initial Land Use Right Certificate; Real Estate Transfer Procedures; Construction Permits…',
    },
    fee: {
      vi: '5.000.000 – 50.000.000',
      en: '5,000,000 – 50,000,000',
    },
    note: {
      vi: 'Tùy tính chất vụ việc sẽ có mức phí cụ thể theo thỏa thuận giữa Luật sư và khách hàng (áp dụng khu vực TPHCM)',
      en: 'Specific fee agreed between Attorney and Client depending on case complexity (applicable in Ho Chi Minh City)',
    },
  },
  {
    stt: 15,
    category: 'corporate_land',
    service: {
      vi: 'Xác minh, thu thập chứng cứ. Thu thập trích lục bản đồ, thông tin quy hoạch, thửa đất…',
      en: 'Evidence Verification & Collection; Cadastral Map Extracts, Zoning, and Land Parcel Records…',
    },
    fee: {
      vi: 'Thỏa thuận tùy vụ việc',
      en: 'By Agreement Per Case',
    },
    note: {
      vi: 'Phí tối thiểu (áp dụng khu vực TPHCM), không bao gồm chi phí đi lại, ăn nghỉ của LS. Khu vực các tỉnh khác sẽ báo phí sau',
      en: 'Minimum fee (applicable in Ho Chi Minh City); excludes attorney travel and lodging. Other provinces quoted separately.',
    },
  },
  {
    stt: 16,
    category: 'other',
    service: {
      vi: 'Thủ tục khai báo Hải quan, thông quan xuất nhập khẩu…',
      en: 'Customs Declaration and Import-Export Clearance Procedures…',
    },
    fee: {
      vi: '2.000.000 – 10.000.000',
      en: '2,000,000 – 10,000,000',
    },
    note: {
      vi: '',
      en: '',
    },
  },
  {
    stt: 17,
    category: 'other',
    service: {
      vi: 'Thủ tục xin visa, tạm trú, thường trú, kết hôn, mua nhà đất… cho Việt kiều, người nước ngoài',
      en: 'Visa, Temporary/Permanent Residence, Marriage, and Property Acquisition for Overseas Vietnamese & Foreigners',
    },
    fee: {
      vi: '1.000.000 – 3.000.000',
      en: '1,000,000 – 3,000,000',
    },
    note: {
      vi: 'Tùy vụ việc, các trường hợp có tính chất phức tạp sẽ báo phí sau khi xem hồ sơ (chưa bao gồm lệ phí nhà nước)',
      en: 'Complex cases quoted after dossier review (excludes statutory government fees)',
    },
  },
  {
    stt: 18,
    category: 'other',
    service: {
      vi: 'Phí dịch thuật văn bản, giấy tờ / trang A4',
      en: 'Document Translation Fee / A4 Page',
    },
    fee: {
      vi: '200.000 – 500.000',
      en: '200,000 – 500,000',
    },
    note: {
      vi: 'Tùy nội dung dịch thuật, chưa bao gồm chi phí công chứng, hợp pháp hóa lãnh sự',
      en: 'Depends on content complexity; excludes notarization and consular legalization charges',
    },
  },
  {
    stt: 19,
    category: 'litigation',
    service: {
      vi: 'Tư vấn, đàm phán thu hồi công nợ cho các cá nhân, tổ chức',
      en: 'Debt Recovery Advisory and Negotiation for Individuals and Organizations',
    },
    fee: {
      vi: 'Theo thỏa thuận',
      en: 'By Agreement',
    },
    note: {
      vi: 'Tùy theo tính chất phức tạp của vụ việc, sẽ thông báo phí dịch vụ khi xem xét hồ sơ',
      en: 'Quoted upon dossier assessment depending on case complexity',
    },
  },
  {
    stt: 20,
    category: 'other',
    service: {
      vi: 'Các dịch vụ pháp lý khác',
      en: 'Other Legal Services',
    },
    fee: {
      vi: 'Thỏa thuận',
      en: 'By Agreement',
    },
    note: {
      vi: 'Tại thời điểm tiếp nhận vụ việc',
      en: 'Determined at intake',
    },
  },
];
