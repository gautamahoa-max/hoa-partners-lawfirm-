import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      aria-label={lang === 'en' ? 'Firm Overview' : 'Giới thiệu hãng luật'}
      className="w-full bg-gradient-to-br from-[#FAF9F6] via-[#FFFFFF] to-[#EEF3FA] text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial Copy & CTAs */}
          <div className="lg:col-span-7 text-left">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-4 sm:mb-5 ykvn-accent-block">
              {hero.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.1rem] font-extrabold tracking-tight leading-[1.18] text-[#0F2144]">
              <span className="block">{hero.headlineLine1}</span>
              <span className="block mt-1 text-[#1E3A6D]">{hero.headlineLine2}</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-slate-600 leading-relaxed max-w-xl">
              {hero.subtitle}
            </p>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#/lien-he"
                className="min-h-[48px] px-7 py-3 rounded-full bg-[#0F2144] hover:bg-[#162A56] text-white font-semibold text-sm sm:text-[15px] shadow-[0_8px_24px_rgba(15,33,68,0.16)] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 text-center"
              >
                <span>{hero.primaryCta}</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#/bang-gia"
                className="min-h-[48px] px-7 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0F2144]/40 text-[#0F2144] font-semibold text-sm sm:text-[15px] shadow-[0_2px_10px_rgba(15,33,68,0.04)] active:scale-[0.98] transition-all inline-flex items-center justify-center text-center"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Monochrome Silver-Navy Framed Architectural Skyline */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,33,68,0.08)] bg-[#0F2144]">
              <picture aria-hidden="true" className="pointer-events-none select-none">
                <source type="image/webp" srcSet="./hero-bg-960.webp" />
                <img
                  src="./hero-bg.jpg"
                  alt=""
                  width="960"
                  height="640"
                  decoding="async"
                  className="w-full h-full object-cover object-center grayscale contrast-[1.06] brightness-[0.98] opacity-95"
                />
              </picture>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-[#0F2144]/35 via-[#0F2144]/10 to-transparent mix-blend-multiply"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[22px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
