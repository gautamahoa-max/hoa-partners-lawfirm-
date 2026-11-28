import React, { useEffect, useRef, useState } from 'react';
import { PhoneIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { safeScrollToAnchor } from '../utils/security';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const { lang, setLang, t } = useLanguage();
  const navContent = t.navbar;

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#/')) {
      if (window.location.hash === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.location.hash = href;
      return;
    }
    if (window.location.hash.startsWith('#/')) {
      window.location.hash = '';
      setTimeout(() => {
        safeScrollToAnchor(href);
      }, 80);
      return;
    }
    safeScrollToAnchor(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#0F2144] focus:text-white focus:text-xs focus:font-bold focus:shadow-lg"
      >
        {lang === 'en' ? 'Skip to main content' : 'Chuyển tới nội dung chính'}
      </a>

      {/* Top Bar tối giản */}
      <div className="hidden lg:block bg-[#0F2144] text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-slate-300">
            <span>{navContent.locations}</span>
            <span aria-hidden="true" className="text-slate-500">|</span>
            <span>{navContent.tagline}</span>
          </div>

          <div className="flex items-center space-x-5">
            <a href="tel:0988886447" className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors">
              <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>{navContent.hotline}</span>
            </a>
            <span aria-hidden="true" className="text-slate-500">|</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`px-1.5 py-0.5 rounded transition-colors ${lang === 'vi' ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                title="VI — Tiếng Việt"
                aria-label="VI — Tiếng Việt"
                aria-pressed={lang === 'vi'}
              >
                VI
              </button>
              <span aria-hidden="true" className="text-slate-500">/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${lang === 'en' ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                title="EN — English"
                aria-label="EN — English"
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 h-20">
          {/* Logo Wordmark tối giản, đĩnh đạc */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 text-left group min-w-0 flex-1 pr-1"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#0F2144] p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-slate-700/20 transition-transform group-hover:scale-105">
              <picture className="w-full h-full block">
                <source srcSet="./logo-emblem-gold.webp" type="image/webp" />
                <img
                  src="./logo-emblem-gold.png"
                  alt={lang === 'en' ? 'Hoa & Associates Law Firm Logo' : 'Logo Công ty Luật TNHH Hoà & Cộng sự'}
                  width="44"
                  height="44"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </picture>
            </div>
            <div className="min-w-0">
              <span className="text-[15px] sm:text-xl font-extrabold tracking-tight text-[#0F2144] block leading-tight truncate">
                {navContent.firmName}
              </span>
              <span className="text-[10px] sm:text-xs uppercase font-semibold tracking-wider text-slate-600 mt-0.5 block truncate">
                {navContent.firmSub}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label={lang === 'en' ? 'Primary navigation' : 'Điều hướng chính'}
            className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5"
          >
            {navContent.nav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-[#0F2144] hover:bg-slate-50 rounded transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language switcher for mobile & Hamburger Menu (min 44x44 tap targets) */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <div className="lg:hidden flex items-center bg-slate-100 rounded-lg p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang('vi')}
                aria-label="VI — Tiếng Việt"
                aria-pressed={lang === 'vi'}
                className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md transition-colors ${
                  lang === 'vi' ? 'bg-white text-[#0F2144] font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                VI
              </button>
              <span aria-hidden="true" className="text-slate-400 px-0.5">/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label="EN — English"
                aria-pressed={lang === 'en'}
                className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-md transition-colors ${
                  lang === 'en' ? 'bg-white text-[#0F2144] font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label={
                lang === 'en'
                  ? mobileMenuOpen
                    ? 'Close navigation menu'
                    : 'Open navigation menu'
                  : mobileMenuOpen
                    ? 'Đóng menu điều hướng'
                    : 'Mở menu điều hướng'
              }
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
          <nav aria-label={lang === 'en' ? 'Mobile navigation' : 'Menu di động'} className="space-y-1">
            {navContent.nav.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
