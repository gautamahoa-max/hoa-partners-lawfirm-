import React, { useState, useMemo } from 'react';
import {
  calculateCourtFee,
  estimateLegalFee,
  LEGAL_SERVICE_SCHEDULE,
  COMPLEXITY_LEVELS,
  FEE_OPTIONS,
} from '../utils/courtFeeCalc';
import { formatCurrency, formatNumber } from '../utils/formatters';
import { useAnimatedNumber } from '../utils/useAnimatedNumber';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircleIcon, ShieldCheckIcon, ScaleIcon } from './Icons';

const CARD_WATERMARKS = {
  advisory: (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <circle cx="48" cy="24" r="9" />
      <path d="M48 11v3M48 34v3M35 24h3M58 24h3M39 15l2 2M55 31l2 2M57 15l-2 2M41 31l-2 2" />
      <rect x="14" y="28" width="26" height="34" rx="2" />
      <path d="M20 38h14M20 45h14M20 52h9" />
    </svg>
  ),
  representation: (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <rect x="18" y="22" width="26" height="40" rx="1.5" />
      <rect x="44" y="34" width="18" height="28" rx="1.5" />
      <path d="M25 31h4M33 31h4M25 39h4M33 39h4M25 47h4M33 47h4M50 42h6M50 49h6M12 62h56" />
    </svg>
  ),
  litigation: (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full"
    >
      <path d="M40 12 62 21v17c0 14-9.5 23.5-22 29-12.5-5.5-22-15-22-29V21l22-9Z" />
      <path d="M40 26v24M29 33h22M32 50h16" />
    </svg>
  ),
};

const PRICING_CARDS = {
  vi: [
    {
      id: 'advisory',
      serviceId: 'contract',
      title: 'Tư vấn & Soạn thảo',
      fromLabel: 'Từ',
      priceText: '1.000.000',
      currency: 'VNĐ',
      popularLabel: 'Dịch vụ phổ biến',
      items: [
        'Tư vấn trực tiếp với Luật sư (khấu trừ 100% khi ký HĐ)',
        'Soạn thảo Đơn khởi kiện, Đơn kháng cáo, Thư cảnh báo',
        'Soạn thảo & Rà soát Hợp đồng đặt cọc, mua bán nhà đất',
        'Tư vấn lập Di chúc hợp pháp & Văn bản khai nhận di sản',
      ],
      cta: 'Đăng ký ngay',
    },
    {
      id: 'representation',
      serviceId: 'retainer',
      title: 'Đại diện Ngoài tố tụng',
      fromLabel: 'Từ',
      priceText: '8.000.000',
      currency: 'VNĐ',
      popularLabel: 'Dịch vụ phổ biến',
      items: [
        'Thủ tục Ly hôn thuận tình & Thỏa thuận nuôi con, tài sản',
        'Đại diện khai nhận thừa kế, sang tên & cấp đổi Sổ đỏ',
        'Đại diện thương lượng thu hồi công nợ & Hòa giải cơ sở',
        'Cố vấn pháp lý thường xuyên cho Gia đình & Doanh nghiệp',
      ],
      cta: 'Đăng ký ngay',
    },
    {
      id: 'litigation',
      serviceId: 'real-estate',
      title: 'Tranh tụng tại Tòa án',
      fromLabel: 'Từ',
      priceText: '20.000.000',
      currency: 'VNĐ',
      popularLabel: 'Dịch vụ phổ biến',
      items: [
        'Tranh tụng vụ án Đất đai, ranh giới & đòi lại nhà đất',
        'Khởi kiện phân chia Di sản thừa kế tại Tòa án các cấp',
        'Tranh tụng Hợp đồng vay tài sản, đặt cọc & Bồi thường',
        'Ly hôn đơn phương tranh chấp quyền nuôi con, tài sản lớn',
      ],
      cta: 'Đăng ký ngay',
    },
  ],
  en: [
    {
      id: 'advisory',
      serviceId: 'contract',
      title: 'Advisory & Legal Drafting',
      fromLabel: 'From',
      priceText: '1.000.000',
      currency: 'VNĐ',
      popularLabel: 'Popular Services',
      items: [
        'Direct Partner Consultation (100% credited upon engagement)',
        'Drafting Statements of Claim, Appeals & Demand Letters',
        'Real Estate Deposit & Sale-Purchase Contract Review',
        'Statutory Will Drafting & Estate Inventory Advisory',
      ],
      cta: 'Register Now',
    },
    {
      id: 'representation',
      serviceId: 'retainer',
      title: 'Pre-Litigation & Representation',
      fromLabel: 'From',
      priceText: '8.000.000',
      currency: 'VNĐ',
      popularLabel: 'Popular Services',
      items: [
        'Uncontested Divorce, Child Custody & Property Settlement',
        'Notarized Inheritance Probate & Land Title Registration',
        'Out-of-Court Debt Recovery Negotiation & Conciliation',
        'Ongoing Legal Retainer for Families & SMEs',
      ],
      cta: 'Register Now',
    },
    {
      id: 'litigation',
      serviceId: 'real-estate',
      title: 'Courtroom Litigation',
      fromLabel: 'From',
      priceText: '20.000.000',
      currency: 'VNĐ',
      popularLabel: 'Popular Services',
      items: [
        'Land Disputes, Boundary Claims & Property Restitution',
        'Contested Inheritance & Estate Division Before Courts',
        'Loan Contract Enforcement, Deposit Claims & Civil Torts',
        'Contested Divorce Involving Custody & Major Assets',
      ],
      cta: 'Register Now',
    },
  ],
};

const COMPLIANCE_PRINCIPLES = {
  vi: [
    {
      title: '1. Minh bạch theo Hợp đồng dịch vụ pháp lý (Quy tắc 8)',
      desc: 'Mọi khoản thù lao, phương thức thanh toán và phạm vi công việc được giải thích rõ trước khi thụ lý và ghi thành văn bản. Cam kết không thu thêm ngoài Hợp đồng (Điểm đ Khoản 1 Điều 9 Luật Luật sư).',
    },
    {
      title: '2. Định nghĩa rõ "Tỷ lệ % kết quả" (Điều 55 Luật Luật sư)',
      desc: 'Ở Phương án 1, tỷ lệ % chỉ tính trên giá trị tài sản hoặc số tiền thực tế bảo vệ/thu hồi được và thanh toán theo mốc ghi rõ trong Hợp đồng — không thu dưới danh nghĩa "hứa thưởng" mập mờ.',
    },
    {
      title: '3. Tách bạch Thù lao Luật sư & Chi phí Nhà nước',
      desc: 'Biểu phí chưa gồm thuế GTGT (VAT), án phí/tạm ứng án phí nộp Kho bạc (NQ 326), chi phí đo đạc – định giá – công chứng – lập vi bằng và công tác phí ngoại tỉnh (Đắk Lắk – TP.HCM – tỉnh khác).',
    },
    {
      title: '4. Khấu trừ 100% Phí tư vấn ban đầu',
      desc: 'Khách hàng sử dụng gói tư vấn trực tiếp theo giờ (1.000.000 đ/giờ) sẽ được khấu trừ toàn bộ khoản phí này vào thù lao chính thức khi ký Hợp đồng giải quyết vụ việc.',
    },
  ],
  en: [
    {
      title: '1. Written Transparency (Rule 8, Code of Ethics)',
      desc: 'All fees, milestones, and representation scope are explained upfront and formalized in a signed Legal Service Contract with zero extra-contractual charges (Art. 9.1(dd), Law on Lawyers).',
    },
    {
      title: '2. Strict Definition of Success % (Art. 55, Law on Lawyers)',
      desc: 'Under Option 1, the percentage applies strictly to actual asset value protected or recovered under contract terms — never vague extra-contractual "promise bonuses".',
    },
    {
      title: '3. Clear Separation from Statutory Disbursements',
      desc: 'Legal fees exclude VAT, Court fees/advance deposits (Res. 326), land survey/appraisal/notary charges, and inter-provincial travel expenses outside Ho Chi Minh City or Dak Lak.',
    },
    {
      title: '4. 100% Credit for Initial Consultation',
      desc: 'Hourly consultation fees (VND 1,000,000/hr) are credited 100% toward the engagement fee upon signing a representation contract.',
    },
  ],
};

function renderCompactTierCell(tier, locale) {
  if (!tier?.stage_plus_success) return '—';
  const pa1 = tier.stage_plus_success;
  const pa2 = tier.lump_sum;
  const hasTwoOptions =
    tier.supportsFeeOptions !== false && pa2 && pa2.rangeLabel[locale] !== pa1.rangeLabel[locale];

  if (!hasTwoOptions) {
    return (
      <div className="space-y-0.5">
        <p className="font-bold text-[#0F2144]">{pa1.rangeLabel[locale]}</p>
        <p className="text-[11px] text-slate-500">{pa1.successFeeLabel[locale]}</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <p className="text-xs text-slate-800">
        <span className="font-semibold text-[#0F2144]">{locale === 'vi' ? 'PA1:' : 'Opt 1:'}</span>{' '}
        <span className="font-bold">{pa1.rangeLabel[locale]}</span>{' '}
        <span className="text-[11px] text-slate-600">({pa1.successFeeLabel[locale]})</span>
      </p>
      <p className="text-xs text-slate-700">
        <span className="font-semibold text-slate-600">{locale === 'vi' ? 'PA2:' : 'Opt 2:'}</span>{' '}
        <span className="font-semibold">{pa2.rangeLabel[locale]}</span>
      </p>
    </div>
  );
}

function savePrefillAndNavigate(text) {
  const safeNotes = String(text || '').slice(0, 2000);
  try {
    sessionStorage.setItem('hp_prefill_notes', safeNotes);
  } catch {
    // Ignore storage failures in restricted contexts
  }
  window.location.hash = '#/lien-he';
}

export default function LegalCalculator() {
  const { lang } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';

  const [showDetailedTools, setShowDetailedTools] = useState(false);
  const [activeTab, setActiveTab] = useState('legalFee'); // 'legalFee' | 'courtFee'
  const [selectedService, setSelectedService] = useState('real-estate');
  const [complexity, setComplexity] = useState('standard');
  const [feeOption, setFeeOption] = useState('stage_plus_success');
  const [disputeValue, setDisputeValue] = useState(500000000);
  const [caseType, setCaseType] = useState('civil');

  const courtFeeResult = useMemo(
    () => calculateCourtFee(disputeValue, caseType),
    [disputeValue, caseType]
  );

  const legalFeeResult = useMemo(
    () => estimateLegalFee(selectedService, disputeValue, { complexity, feeOption, lang: locale }),
    [selectedService, disputeValue, complexity, feeOption, locale]
  );

  const animatedCourtFee = useAnimatedNumber(courtFeeResult.courtFee, 350);
  const animatedAdvanceFee = useAnimatedNumber(courtFeeResult.advanceFee, 350);
  const animatedLegalFee = useAnimatedNumber(legalFeeResult.baseFee, 350);

  const handleSelectPackage = (card) => {
    const summaryText =
      locale === 'vi'
        ? [
            `[Đăng ký từ Bảng giá dịch vụ]`,
            `- Nhóm dịch vụ: ${card.title} (${card.fromLabel} ${card.priceText} ${card.currency})`,
            `- Các hạng mục quan tâm: ${card.items.join('; ')}`,
            `- Ghi chú thêm của Quý khách: `,
          ].join('\n')
        : [
            `[Fee Schedule Inquiry]`,
            `- Package: ${card.title} (${card.fromLabel} ${card.priceText} ${card.currency})`,
            `- Scope of Interest: ${card.items.join('; ')}`,
            `- Additional Details: `,
          ].join('\n');
    savePrefillAndNavigate(summaryText);
  };

  const handleConsultThisCase = () => {
    const selectedOptionMeta = FEE_OPTIONS.find((opt) => opt.id === legalFeeResult.feeOption);
    const lines =
      locale === 'vi'
        ? [
            `[Dự toán từ Bảng giá dịch vụ]`,
            `- Lĩnh vực: ${legalFeeResult.name}`,
            `- Mức độ hồ sơ: ${legalFeeResult.tierLabel}`,
            legalFeeResult.supportsFeeOptions && selectedOptionMeta
              ? `- Phương thức phí: ${selectedOptionMeta.label.vi}`
              : null,
            `- Khung thù lao tham khảo: ${legalFeeResult.rangeLabel} (${legalFeeResult.successFeeLabel})`,
            legalFeeResult.supportsDisputeValue
              ? `- Giá trị tài sản / tranh chấp dự kiến: ${formatCurrency(disputeValue)} (Án phí NQ 326: ${formatCurrency(courtFeeResult.courtFee)}, Tạm ứng: ${formatCurrency(courtFeeResult.advanceFee)})`
              : null,
          ]
        : [
            `[Fee Schedule Estimate]`,
            `- Practice Area: ${legalFeeResult.name}`,
            `- Complexity Tier: ${legalFeeResult.tierLabel}`,
            legalFeeResult.supportsFeeOptions && selectedOptionMeta
              ? `- Fee Structure: ${selectedOptionMeta.label.en}`
              : null,
            `- Reference Fee Range: ${legalFeeResult.rangeLabel} (${legalFeeResult.successFeeLabel})`,
            legalFeeResult.supportsDisputeValue
              ? `- Estimated Claim Value: ${formatCurrency(disputeValue)} (Res. 326 Court Fee: ${formatCurrency(courtFeeResult.courtFee)}, Deposit: ${formatCurrency(courtFeeResult.advanceFee)})`
              : null,
          ];

    savePrefillAndNavigate(lines.filter(Boolean).join('\n'));
  };

  const cards = PRICING_CARDS[locale];
  const quickValues = [100000000, 500000000, 1000000000, 2000000000, 5000000000];
  const principles = COMPLIANCE_PRINCIPLES[locale];

  return (
    <section
      id="bang-gia"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8F9FA] to-white border-b border-slate-200 scroll-mt-20 overflow-hidden"
    >
      {/* Nền cong trang trí nhẹ ở nửa dưới giống bố cục mẫu */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-tr from-slate-100/90 via-slate-50/40 to-transparent -skew-y-2 origin-bottom-left"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Phần mở đầu căn giữa */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 mb-2">
            {locale === 'vi'
              ? 'Biểu phí minh bạch • Luật Luật sư (Điều 55)'
              : 'Transparent Fee Framework • Law on Lawyers (Art. 55)'}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight font-serif">
            {locale === 'vi' ? 'Bảng giá dịch vụ pháp lý' : 'Legal Service Fee Schedule'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'vi'
              ? 'Hoà & Cộng sự đồng hành cùng thân chủ từ bước đầu tư vấn chiến lược, rà soát hợp đồng, đại diện hòa giải tiền tố tụng cho đến trực tiếp tranh tụng bảo vệ quyền lợi tại Tòa án nhân dân các cấp tại TP.HCM và Đắk Lắk.'
              : 'Hoa & Associates partners with clients from strategic legal assessment, contract review, and pre-trial representation to full courtroom advocacy across HCMC and Dak Lak.'}
          </p>
        </div>

        {/* Lưới 3 Thẻ Dịch vụ chuẩn giao diện Asoka Law */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 max-w-6xl mx-auto items-stretch">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_12px_36px_rgba(15,33,68,0.08)] hover:shadow-[0_18px_48px_rgba(15,33,68,0.14)] pt-9 pb-8 px-7 sm:px-8 flex flex-col justify-between relative overflow-hidden transition-shadow duration-300"
            >
              {/* Icon watermark nét mảnh góc phải trên */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 w-20 h-20 text-amber-400/25 pointer-events-none"
              >
                {CARD_WATERMARKS[card.id]}
              </div>

              <div>
                <h3 className="text-xl sm:text-[22px] font-bold text-slate-800 text-left mt-2 mb-5 pr-12">
                  {card.title}
                </h3>

                {/* Dải băng giá nền kem vàng nhạt sát lề trái bo tròn đầu phải */}
                <div className="-ml-7 sm:-ml-8 pl-7 sm:pl-8 pr-6 py-3 rounded-r-full bg-[#FFF8EB] w-[92%] mb-7 text-left flex items-baseline gap-1.5">
                  <span className="text-xs font-bold uppercase text-[#1D5B9B]">
                    {card.fromLabel}
                  </span>
                  <span className="text-2xl sm:text-[26px] font-extrabold text-[#185ADB] tracking-tight">
                    {card.priceText}
                  </span>
                  <span className="text-xs font-bold text-[#1D5B9B]">{card.currency}</span>
                </div>

                <p className="text-sm font-bold text-slate-700 mb-4 text-left">
                  {card.popularLabel}
                </p>

                <ul className="space-y-3 text-left mb-8">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span aria-hidden="true" className="text-sky-500 font-bold text-xs mt-1 shrink-0">
                        ▸
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPackage(card)}
                className="w-[82%] mx-auto py-3 px-6 rounded-md bg-[#F7B500] hover:bg-[#E0A300] active:translate-y-[1px] text-white font-bold text-sm shadow-[0_4px_14px_rgba(247,181,0,0.35)] transition-all cursor-pointer text-center"
              >
                {card.cta}
              </button>
            </article>
          ))}
        </div>

        {/* Nút mở rộng tùy chọn tra cứu Án phí NQ 326 & Bảng khung phí chi tiết */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowDetailedTools((prev) => !prev)}
            aria-expanded={showDetailedTools}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:border-[#0F2144] text-xs sm:text-sm font-semibold text-[#0F2144] shadow-sm transition-all cursor-pointer"
          >
            <span>
              {locale === 'vi'
                ? 'Tra cứu thêm: Máy tính Án phí Tòa án (Nghị quyết 326) & Bảng khung phí chi tiết'
                : 'Explore Further: Court Fee Calculator (Res. 326) & Full Tiered Fee Schedule'}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showDetailedTools ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>

        {/* Khối chi tiết mở rộng */}
        {showDetailedTools && (
          <div className="mt-8 space-y-8 max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="text-center">
              <div className="inline-flex flex-wrap p-1 bg-white border border-slate-300 rounded-xl shadow-sm gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('legalFee')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'legalFee'
                      ? 'bg-[#0F2144] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0F2144]'
                  }`}
                >
                  {locale === 'vi'
                    ? 'Dự toán Thù lao theo Độ khó'
                    : 'Tiered Legal Fee Estimator'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('courtFee')}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'courtFee'
                      ? 'bg-[#0F2144] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#0F2144]'
                  }`}
                >
                  {locale === 'vi'
                    ? 'Tra cứu Án phí Tòa án (Nghị quyết 326)'
                    : 'Court Fee Calculator (Res. 326)'}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm text-left space-y-8">
              {activeTab === 'legalFee' ? (
                <>
                  <div>
                    <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-3">
                      {locale === 'vi'
                        ? '1. Chọn lĩnh vực dịch vụ cần tham khảo:'
                        : '1. Select Practice Area / Service:'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {LEGAL_SERVICE_SCHEDULE.map((srv) => {
                        const isSelected = selectedService === srv.id;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => setSelectedService(srv.id)}
                            className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? 'border-[#0F2144] bg-[#0F2144] text-white shadow-md'
                                : 'border-slate-200 bg-white text-slate-800 hover:border-[#0F2144]/40 hover:bg-slate-50/70'
                            }`}
                          >
                            <p
                              className={`text-[10px] font-semibold uppercase tracking-wider ${
                                isSelected ? 'text-amber-300' : 'text-amber-700'
                              }`}
                            >
                              {srv.categoryTag[locale]}
                            </p>
                            <p className="font-bold text-sm mt-1 leading-snug">{srv.name[locale]}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-3">
                      {locale === 'vi'
                        ? '2. Chọn mức độ phức tạp hồ sơ:'
                        : '2. Select Case / Matter Complexity:'}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {COMPLEXITY_LEVELS.map((lvl) => {
                        const active = complexity === lvl.id;
                        return (
                          <button
                            key={lvl.id}
                            type="button"
                            onClick={() => setComplexity(lvl.id)}
                            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                              active
                                ? 'border-[#0F2144] bg-slate-900 text-white'
                                : 'border-slate-200 bg-slate-50/60 text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <p className="font-bold text-sm">{lvl.label[locale]}</p>
                            <p className={`text-xs mt-1 ${active ? 'text-slate-300' : 'text-slate-500'}`}>
                              {lvl.shortDesc[locale]}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-2.5 text-xs text-slate-600 bg-slate-50 border border-slate-200/80 rounded-lg px-3.5 py-2.5">
                      <strong className="text-[#0F2144]">
                        {locale === 'vi' ? 'Tiêu chí định khung:' : 'Tier Criteria:'}
                      </strong>{' '}
                      {legalFeeResult.criteria}
                    </p>
                  </div>

                  {legalFeeResult.supportsFeeOptions && (
                    <div>
                      <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-3">
                        {locale === 'vi'
                          ? '3. Chọn phương thức thỏa thuận thù lao (Điều 55 Luật Luật sư):'
                          : '3. Select Fee Structure (Art. 55, Law on Lawyers):'}
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {FEE_OPTIONS.map((opt) => {
                          const active = legalFeeResult.feeOption === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setFeeOption(opt.id)}
                              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                                active
                                  ? 'border-[#0F2144] bg-amber-50/70 ring-1 ring-[#0F2144]'
                                  : 'border-slate-200 bg-white hover:border-slate-300'
                              }`}
                            >
                              <p className="font-bold text-sm text-[#0F2144]">{opt.label[locale]}</p>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {opt.shortDesc[locale]}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {legalFeeResult.supportsDisputeValue && (
                    <div className="pt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <label
                          htmlFor="fee-dispute-slider"
                          className="text-xs font-bold text-[#0F2144] uppercase tracking-wider"
                        >
                          {locale === 'vi'
                            ? '4. Giá trị tài sản hoặc số tiền tranh chấp dự kiến:'
                            : '4. Estimated Disputed Property / Claim Value:'}
                        </label>
                        <span className="text-lg sm:text-xl font-bold text-[#0F2144] font-mono whitespace-nowrap">
                          {formatCurrency(disputeValue)}
                        </span>
                      </div>
                      <input
                        id="fee-dispute-slider"
                        type="range"
                        min="50000000"
                        max="10000000000"
                        step="50000000"
                        value={disputeValue}
                        onChange={(e) => setDisputeValue(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F2144]"
                      />
                      <div className="flex flex-wrap items-center gap-2 mt-3">
                        <span className="text-xs text-slate-500">
                          {locale === 'vi' ? 'Mốc nhanh:' : 'Quick presets:'}
                        </span>
                        {quickValues.map((quickVal) => (
                          <button
                            key={quickVal}
                            type="button"
                            onClick={() => setDisputeValue(quickVal)}
                            className={`text-xs px-3 py-1 rounded border font-medium transition-colors cursor-pointer ${
                              disputeValue === quickVal
                                ? 'bg-[#0F2144] text-white border-[#0F2144]'
                                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                            }`}
                          >
                            {quickVal >= 1000000000
                              ? `${quickVal / 1000000000} ${locale === 'vi' ? 'tỷ' : 'B'}`
                              : `${formatNumber(quickVal / 1000000)} ${locale === 'vi' ? 'triệu' : 'M'}`}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="bg-[#F8F9FA] rounded-xl p-5 sm:p-6 border border-slate-200 space-y-4">
                    <div
                      className={`grid grid-cols-1 ${
                        legalFeeResult.supportsDisputeValue ? 'lg:grid-cols-2' : ''
                      } gap-4`}
                    >
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                              {legalFeeResult.name} • {legalFeeResult.tierLabel}
                            </span>
                            <h4 className="text-base font-bold text-[#0F2144] mt-1">
                              {locale === 'vi'
                                ? 'Khung thù lao luật sư dự kiến'
                                : 'Estimated Attorney Fee Range'}
                            </h4>
                          </div>
                          <ScaleIcon className="w-5 h-5 text-[#0F2144]/70 shrink-0" />
                        </div>
                        <p className="text-2xl sm:text-3xl font-bold text-[#0F2144] mt-3 font-mono">
                          {legalFeeResult.rangeLabel}
                        </p>
                        <p className="text-xs font-semibold text-emerald-700 mt-1.5">
                          {legalFeeResult.successFeeLabel}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-2">
                          {locale === 'vi' ? 'Mức tham chiếu khởi điểm:' : 'Reference baseline:'}{' '}
                          <strong className="text-slate-700 font-mono">
                            {formatCurrency(animatedLegalFee)}
                          </strong>
                        </p>
                      </div>

                      {legalFeeResult.supportsDisputeValue && (
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                            {locale === 'vi'
                              ? 'Chi phí tố tụng nộp Nhà nước (Nghị quyết 326)'
                              : 'Statutory Court Deposit (Resolution 326)'}
                          </span>
                          <h4 className="text-base font-bold text-[#0F2144] mt-1">
                            {locale === 'vi'
                              ? 'Tạm ứng án phí sơ thẩm dự tính (50%)'
                              : 'Estimated First-Instance Court Deposit (50%)'}
                          </h4>
                          <p className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 font-mono">
                            {formatCurrency(animatedAdvanceFee)}
                          </p>
                          <p className="text-xs text-slate-600 mt-1.5">
                            {locale === 'vi' ? 'Án phí sơ thẩm toàn phần:' : 'Full court fee:'}{' '}
                            <strong className="font-mono text-slate-800">
                              {formatCurrency(animatedCourtFee)}
                            </strong>
                          </p>
                          <p className="text-[11px] text-slate-500 mt-2">
                            {courtFeeResult.formulaDescription}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="bg-white rounded-xl p-4 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong className="text-[#0F2144]">
                        {locale === 'vi' ? 'Phạm vi công việc:' : 'Scope Included:'}
                      </strong>{' '}
                      {legalFeeResult.notes}
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-8">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-3">
                      {locale === 'vi' ? 'Quan hệ tranh chấp:' : 'Dispute Category:'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setCaseType('civil')}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          caseType === 'civil'
                            ? 'border-[#0F2144] bg-[#0F2144] text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <p className="font-bold text-sm">
                          {locale === 'vi'
                            ? 'Tranh chấp dân sự, đất đai, thừa kế'
                            : 'Civil, Land & Inheritance Disputes'}
                        </p>
                        <p
                          className={`text-xs mt-1 ${
                            caseType === 'civil' ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {locale === 'vi'
                            ? 'Quyền sử dụng đất, chia di sản thừa kế, hợp đồng vay tài sản'
                            : 'Land title disputes, estate distribution, private loan agreements'}
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCaseType('commercial')}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                          caseType === 'commercial'
                            ? 'border-[#0F2144] bg-[#0F2144] text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <p className="font-bold text-sm">
                          {locale === 'vi'
                            ? 'Tranh chấp kinh doanh, thương mại'
                            : 'Commercial & Business Disputes'}
                        </p>
                        <p
                          className={`text-xs mt-1 ${
                            caseType === 'commercial' ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {locale === 'vi'
                            ? 'Hợp đồng kinh tế, tranh chấp thành viên công ty, mua bán hàng hóa'
                            : 'Commercial contracts, shareholder disputes, supply agreements'}
                        </p>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <label
                        htmlFor="dispute-slider"
                        className="text-xs font-bold text-[#0F2144] uppercase tracking-wider"
                      >
                        {locale === 'vi'
                          ? 'Giá trị tài sản hoặc số tiền tranh chấp (VNĐ):'
                          : 'Disputed Asset or Claim Value (VND):'}
                      </label>
                      <span className="text-xl sm:text-2xl font-bold text-[#0F2144] font-mono whitespace-nowrap">
                        {formatCurrency(disputeValue)}
                      </span>
                    </div>

                    <input
                      id="dispute-slider"
                      type="range"
                      min="10000000"
                      max="10000000000"
                      step="50000000"
                      value={disputeValue}
                      onChange={(e) => setDisputeValue(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F2144]"
                    />

                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      <span className="text-xs text-slate-500">
                        {locale === 'vi' ? 'Mốc nhanh:' : 'Quick presets:'}
                      </span>
                      {quickValues.map((quickVal) => (
                        <button
                          key={quickVal}
                          type="button"
                          onClick={() => setDisputeValue(quickVal)}
                          className={`text-xs px-3 py-1 rounded border font-medium transition-colors cursor-pointer ${
                            disputeValue === quickVal
                              ? 'bg-[#0F2144] text-white border-[#0F2144]'
                              : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {quickVal >= 1000000000
                            ? `${quickVal / 1000000000} ${locale === 'vi' ? 'tỷ' : 'B'}`
                            : `${formatNumber(quickVal / 1000000)} ${locale === 'vi' ? 'triệu' : 'M'}`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#F8F9FA] rounded-xl p-6 border border-slate-200 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                      <div className="bg-white p-5 rounded-lg border border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {locale === 'vi' ? 'Án phí sơ thẩm dự tính' : 'Estimated First-Instance Court Fee'}
                        </p>
                        <p className="text-2xl font-bold text-[#0F2144] font-mono mt-2 whitespace-nowrap">
                          {formatCurrency(animatedCourtFee)}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">{courtFeeResult.formulaDescription}</p>
                      </div>

                      <div className="bg-white p-5 rounded-lg border border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {locale === 'vi'
                            ? 'Tạm ứng án phí (nộp khi khởi kiện)'
                            : 'Advance Court Deposit (Upon Filing)'}
                        </p>
                        <p className="text-2xl font-bold text-[#0F2144] font-mono mt-2 whitespace-nowrap">
                          {formatCurrency(animatedAdvanceFee)}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {locale === 'vi'
                            ? 'Bằng 50% mức án phí sơ thẩm theo Điều 7 Nghị quyết 326'
                            : 'Equal to 50% of first-instance court fee under Art. 7, Res. 326'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-slate-600 pt-1">
                      <CheckCircleIcon className="w-4 h-4 text-[#0F2144] flex-shrink-0 mt-0.5" />
                      <span>
                        {locale === 'vi'
                          ? 'Bên thắng kiện toàn bộ sẽ được Tòa án tuyên trả lại số tiền tạm ứng án phí đã nộp; bên thua kiện có nghĩa vụ nộp toàn bộ án phí theo quyết định của bản án có hiệu lực.'
                          : 'The prevailing party is entitled to a refund of the advance deposit; the losing party bears final statutory court costs.'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500">
                    {locale === 'vi'
                      ? 'Cần luật sư phân tích chứng cứ và báo giá cố định bằng văn bản?'
                      : 'Need an attorney to review your evidence and issue a formal written quote?'}
                  </p>
                  <p className="text-sm font-semibold text-[#0F2144] mt-0.5">
                    {locale === 'vi'
                      ? 'Đặt lịch tư vấn trực tiếp với Luật sư Võ Văn Hoà (mang theo phương án vừa chọn).'
                      : 'Schedule a consultation with Attorney Vo Van Hoa (pre-filled with your selected plan).'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleConsultThisCase}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-bold bg-[#0F2144] text-white hover:bg-[#162A56] active:translate-y-[1px] transition-all whitespace-nowrap shadow-sm cursor-pointer"
                >
                  {locale === 'vi' ? 'Tiếp tục với phương án này →' : 'Proceed with This Estimate →'}
                </button>
              </div>
            </div>

            {/* Bảng tổng hợp khung phí chi tiết 6 lĩnh vực */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden text-left">
              <div className="px-5 sm:px-8 py-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50/70">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F2144] font-serif">
                    {locale === 'vi'
                      ? 'Bảng Tổng hợp Khung Phí Dịch vụ Pháp lý (Tham khảo)'
                      : 'Consolidated Legal Service Fee Schedule (Reference)'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {locale === 'vi'
                      ? 'Nhấp vào một dòng để nạp nhanh lĩnh vực đó lên bộ dự toán chi tiết phía trên.'
                      : 'Click any row to load that practice area into the interactive estimator above.'}
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-semibold text-amber-800 self-start sm:self-center">
                  {locale === 'vi' ? 'Áp dụng tại Đắk Lắk & TP.HCM' : 'Dak Lak & HCMC Jurisdictions'}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-600 border-b border-slate-200">
                      <th className="py-3.5 px-5 w-[24%]">
                        {locale === 'vi' ? 'Lĩnh vực / Dịch vụ' : 'Practice Area'}
                      </th>
                      <th className="py-3.5 px-4 w-[25%]">
                        {locale === 'vi' ? 'Cấp độ Tiêu chuẩn' : 'Standard Tier'}
                      </th>
                      <th className="py-3.5 px-4 w-[26%]">
                        {locale === 'vi' ? 'Cấp độ Phức tạp' : 'Complex Tier'}
                      </th>
                      <th className="py-3.5 px-4 w-[25%]">
                        {locale === 'vi' ? 'Đặc biệt phức tạp' : 'Highly Complex'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {LEGAL_SERVICE_SCHEDULE.map((srv) => {
                      const isRowSelected = selectedService === srv.id;
                      return (
                        <tr
                          key={srv.id}
                          onClick={() => {
                            setSelectedService(srv.id);
                            setActiveTab('legalFee');
                          }}
                          className={`cursor-pointer transition-colors ${
                            isRowSelected ? 'bg-amber-50/50' : 'hover:bg-slate-50/80'
                          }`}
                        >
                          <td className="py-4 px-5 align-top">
                            <p className="font-bold text-[#0F2144] text-xs sm:text-sm leading-snug">
                              {srv.name[locale]}
                            </p>
                            <p className="text-[11px] text-slate-500 mt-1">{srv.categoryTag[locale]}</p>
                          </td>
                          <td className="py-4 px-4 align-top">
                            {renderCompactTierCell(srv.tiers.standard, locale)}
                          </td>
                          <td className="py-4 px-4 align-top">
                            {renderCompactTierCell(srv.tiers.complex, locale)}
                          </td>
                          <td className="py-4 px-4 align-top">
                            {renderCompactTierCell(srv.tiers.high_complex, locale)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4 Nguyên tắc minh bạch thù lao */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-sm text-left">
              <div className="flex items-center gap-2.5 mb-5">
                <ShieldCheckIcon className="w-5 h-5 text-[#0F2144] shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-[#0F2144] font-serif">
                  {locale === 'vi'
                    ? 'Nguyên tắc Minh bạch Thù lao & Tuân thủ Luật Luật sư'
                    : 'Fee Transparency & Statutory Compliance Principles'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80"
                  >
                    <p className="text-xs sm:text-sm font-bold text-[#0F2144]">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
