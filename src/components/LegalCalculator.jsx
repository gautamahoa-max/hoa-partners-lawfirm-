import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FEE_HOMEPAGE_GROUPS } from '../i18n/feeSchedule';

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

/**
 * 3-card Fee Overview section on the Homepage synchronized directly with FEE_HOMEPAGE_GROUPS.
 */
export default function LegalCalculator() {
  const { lang } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';
  const cards = FEE_HOMEPAGE_GROUPS[locale];

  const handleSelectPackage = (card) => {
    const summaryText =
      locale === 'vi'
        ? [
            '[Đăng ký từ Bảng giá dịch vụ]',
            `- Nhóm dịch vụ: ${card.title} (${card.fromLabel} ${card.priceText} ${card.currency})`,
            `- Các hạng mục quan tâm: ${card.items.join('; ')}`,
            '- Ghi chú thêm của Quý khách: ',
          ].join('\n')
        : [
            '[Fee Schedule Inquiry]',
            `- Package: ${card.title} (${card.fromLabel} ${card.priceText} ${card.currency})`,
            `- Scope of Interest: ${card.items.join('; ')}`,
            '- Additional Details: ',
          ].join('\n');

    try {
      sessionStorage.setItem('hp_prefill_notes', summaryText.slice(0, 2000));
    } catch {
      // Ignore storage failures in restricted contexts
    }
    window.location.hash = '#/lien-he';
  };

  return (
    <section
      id="bao-gia"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8F9FA] to-white border-b border-slate-200 scroll-mt-20 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-tr from-slate-100/90 via-slate-50/40 to-transparent -skew-y-2 origin-bottom-left"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight font-serif">
            {locale === 'vi' ? 'Bảng giá dịch vụ pháp lý' : 'Legal Service Fee Schedule'}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === 'vi'
              ? 'Hoà & Cộng sự đồng hành cùng thân chủ từ bước đầu tư vấn chiến lược, rà soát hợp đồng, đại diện hòa giải tiền tố tụng cho đến trực tiếp tranh tụng bảo vệ quyền lợi tại Tòa án nhân dân các cấp tại TP.HCM và Đắk Lắk.'
              : 'Hoa & Associates partners with clients from strategic legal assessment, contract review, and pre-trial representation to full courtroom advocacy across HCMC and Dak Lak.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9 max-w-6xl mx-auto items-stretch">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-[0_12px_36px_rgba(15,33,68,0.08)] hover:shadow-[0_18px_48px_rgba(15,33,68,0.14)] pt-9 pb-8 px-7 sm:px-8 flex flex-col justify-between relative overflow-hidden transition-shadow duration-300"
            >
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 w-20 h-20 text-amber-400/25 pointer-events-none"
              >
                {CARD_WATERMARKS[card.id]}
              </div>

              <div>
                <h3 className="text-lg sm:text-[20px] font-bold text-slate-800 text-left mt-2 mb-5 pr-8">
                  {card.title}
                </h3>

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
      </div>
    </section>
  );
}
