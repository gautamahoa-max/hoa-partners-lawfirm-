import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang, t } = useLanguage();
  const hero = t.hero;
  const videoRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
      setIsPlaying(false);
    } else {
      videoEl.play().catch(() => {
        setIsPlaying(false);
      });
    }

    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    mq?.addEventListener?.('change', handleMotionChange);
    return () => mq?.removeEventListener?.('change', handleMotionChange);
  }, []);

  const handleTogglePlayback = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      aria-label={lang === 'en' ? 'Firm Overview' : 'Giới thiệu hãng luật'}
      className="w-full bg-gradient-to-br from-[#FAF9F6] via-[#FFFFFF] to-[#EEF3FA] text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Editorial Copy & CTAs */}
          <div className="lg:col-span-7 text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-4 sm:mb-5 ykvn-accent-block">
              {hero.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.16] text-[#0F2144]">
              <span className="block">{hero.headlineLine1}</span>
              <span className="block mt-1.5 text-[#1E3A6D]">{hero.headlineLine2}</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
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
                className="min-h-[48px] px-7 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0F2144]/40 text-[#0F2144] font-semibold text-sm sm:text-base shadow-[0_2px_10px_rgba(15,33,68,0.04)] active:scale-[0.98] transition-all inline-flex items-center justify-center text-center"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Original Light-Editorial Living Cinema Viewport (Saigon Urban Pulse) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] rounded-[22px] sm:rounded-[24px] overflow-hidden border border-slate-200/90 shadow-[0_24px_60px_rgba(15,33,68,0.10)] bg-[#0F2144]">
              <video
                ref={videoRef}
                autoPlay={!prefersReducedMotion}
                muted
                loop
                playsInline
                preload="metadata"
                poster="./hero-saigon-poster.webp"
                aria-label={hero.videoAriaLabel}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover object-center block"
              >
                <source src="./hero-saigon-life.mp4" type="video/mp4" />
              </video>

              {/* Bottom editorial legibility scrim + crisp inner edge */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07192E]/70 via-[#07192E]/10 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[22px] sm:rounded-[24px]"
              />

              {/* Subtle Caption Pill & WCAG 2.2.2 Pause/Play Control */}
              <div className="absolute inset-x-3.5 sm:inset-x-4 bottom-3.5 sm:bottom-4 flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07192E]/70 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-[0.14em] text-white/95">
                  <span aria-hidden="true" className="w-1.5 h-1.5 bg-amber-400 shrink-0" />
                  <span>{hero.videoCaption}</span>
                </div>

                <button
                  type="button"
                  onClick={handleTogglePlayback}
                  aria-label={isPlaying ? hero.pauseVideo : hero.playVideo}
                  aria-pressed={!isPlaying}
                  className="min-h-[44px] min-w-[44px] rounded-full bg-[#07192E]/75 hover:bg-[#07192E]/95 backdrop-blur-md border border-white/25 text-white inline-flex items-center justify-center transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <rect x="6" y="5" width="4" height="14" rx="1" />
                      <rect x="14" y="5" width="4" height="14" rx="1" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="6,4 20,12 6,20" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
