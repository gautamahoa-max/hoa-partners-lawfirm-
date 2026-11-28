import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();
  const hero = t.hero;
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    const reduced = Boolean(mq?.matches);
    setPrefersReducedMotion(reduced);

    const videoEl = videoRef.current;
    if (!videoEl) return undefined;

    if (reduced) {
      videoEl.pause();
    } else {
      videoEl.play().catch(() => {});
    }

    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
      }
    };
    mq?.addEventListener?.('change', handleMotionChange);
    return () => mq?.removeEventListener?.('change', handleMotionChange);
  }, []);

  return (
    <section
      aria-label={lang === 'en' ? 'Firm Overview' : 'Giới thiệu hãng luật'}
      className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center bg-[#FAF9F6] text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Full-bleed Saigon urban pulse video canvas */}
      <video
        ref={videoRef}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster="./hero-saigon-poster.webp"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center block"
      >
        <source src="./hero-saigon-life.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric light veils integrating video cleanly with typography & light palette */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/86 via-[42%] to-transparent"
      />
      <div
        aria-hidden="true"
        className="lg:hidden pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/94 via-[#FAF9F6]/88 to-[#EEF3FA]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/25 via-transparent to-white/20"
      />

      {/* Unified Foreground Editorial Copy & CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700 mb-4 sm:mb-5 ykvn-accent-block">
            {hero.eyebrow}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.16] text-[#0F2144]">
            <span className="block">{hero.headlineLine1}</span>
            <span className="block mt-1.5 text-[#1E3A6D]">{hero.headlineLine2}</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-xl">
            {hero.subtitle}
          </p>

          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#/lien-he"
              className="min-h-[48px] px-7 py-3 rounded-full bg-[#0F2144] hover:bg-[#162A56] text-white font-semibold text-sm sm:text-base shadow-[0_8px_24px_rgba(15,33,68,0.16)] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 text-center"
            >
              <span>{hero.primaryCta}</span>
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="#/bang-gia"
              className="min-h-[48px] px-7 py-3 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-slate-300 hover:border-[#0F2144]/40 text-[#0F2144] font-semibold text-sm sm:text-base shadow-[0_2px_10px_rgba(15,33,68,0.04)] active:scale-[0.98] transition-all inline-flex items-center justify-center text-center"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
