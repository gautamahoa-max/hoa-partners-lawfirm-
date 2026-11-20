import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FAQ_ITEMS } from '../i18n/faq';

export default function FaqSection({ compact = false }) {
  const { lang } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';
  const items = FAQ_ITEMS[locale];

  return (
    <section
      id="cau-hoi-thuong-gap"
      className={`${compact ? 'py-10 sm:py-14 bg-white border-t border-slate-200/80' : 'py-16 sm:py-20 bg-[#FAF9F6] border-b border-slate-200/80'} scroll-mt-20 cv-auto text-left`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
            {locale === 'vi' ? 'GIẢI ĐÁP THẮC MẮC' : 'FREQUENTLY ASKED QUESTIONS'}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2144] tracking-tight font-serif">
            {locale === 'vi'
              ? 'Câu hỏi thường gặp về dịch vụ & chi phí'
              : 'Common Questions on Legal Services & Fees'}
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl bg-white border border-slate-200/80 px-5 sm:px-6 py-4 shadow-[0_2px_12px_rgba(15,33,68,0.03)] open:border-[#0F2144]/30 open:shadow-[0_6px_20px_rgba(15,33,68,0.06)] transition-all"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm sm:text-base text-[#0F2144] select-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-[#0F2144]"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
