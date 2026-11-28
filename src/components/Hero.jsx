import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      aria-label={lang === 'en' ? 'Firm Overview' : 'Giới thiệu hãng luật'}
      className="relative w-full bg-[#051329] text-white overflow-hidden border-b border-slate-200/80"
    >
      {/* Decorative architectural backdrop */}
      <picture aria-hidden="true" className="pointer-events-none select-none">
        <source
          type="image/webp"
          srcSet="./hero-bg-960.webp 960w, ./hero-bg-1600.webp 1600w"
          sizes="100vw"
        />
        <img
          src="./hero-bg.jpg"
          alt=""
          width="1600"
          height="1068"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        />
      </picture>

      {/* Directional Deep Judicial Navy veil ensuring crisp WCAG AAA text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#051329]/95 via-[#07192E]/88 to-[#0F2144]/72"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#051329]/90 via-transparent to-[#051329]/45"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
        <div className="max-w-3xl text-left">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4 sm:mb-5 ykvn-accent-block">
            {hero.eyebrow}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.18] text-white">
            <span className="block">{hero.headlineLine1}</span>
            <span className="block mt-1 text-amber-300">{hero.headlineLine2}</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-slate-200 leading-relaxed max-w-2xl">
            {hero.subtitle}
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#/lien-he"
              className="min-h-[48px] px-6 sm:px-7 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#07192E] font-bold text-sm sm:text-base shadow-[0_8px_24px_rgba(245,158,11,0.28)] active:scale-[0.99] transition-all inline-flex items-center justify-center gap-2 text-center"
            >
              <span>{hero.primaryCta}</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#/bang-gia"
              className="min-h-[48px] px-6 sm:px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base active:scale-[0.99] transition-all inline-flex items-center justify-center text-center"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Institutional Trust Bar */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 text-left">
          {hero.trustItems.map((item) => (
            <div
              key={item.label}
              className="rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/15 px-4 py-3.5"
            >
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                {item.label}
              </span>
              <span className="mt-1 block text-sm sm:text-[15px] font-bold text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
