import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FAF9F6] pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tuyên ngôn lớn đĩnh đạc */}
        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#0F2144] tracking-tight leading-[1.25] sm:leading-[1.2] max-w-5xl">
          {hero.headline}
        </h1>

        {/* Đoạn mô tả mở rộng thanh lịch */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
          {hero.desc}
        </p>

        {/* Đường kẻ chỉ hairline tinh xảo */}
        <div className="border-t border-slate-200/80 my-10" />

        {/* 3 Nguyên tắc hành nghề cốt lõi dàn ngang (Không đóng khung thẻ) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-mono">
              {hero.p1Tag}
            </span>
            <h3 className="text-sm font-bold text-[#0F2144] mb-1">
              {hero.p1Title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {hero.p1Desc}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-mono">
              {hero.p2Tag}
            </span>
            <h3 className="text-sm font-bold text-[#0F2144] mb-1">
              {hero.p2Title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {hero.p2Desc}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-mono">
              {hero.p3Tag}
            </span>
            <h3 className="text-sm font-bold text-[#0F2144] mb-1">
              {hero.p3Title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {hero.p3Desc}
            </p>
          </div>
        </div>

        {/* Nút hành động chính */}
        <div className="mt-10 pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              window.location.hash = '#/lien-he';
            }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all shadow-sm"
          >
            <span>{hero.ctaSchedule}</span>
            <span className="ml-2">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
