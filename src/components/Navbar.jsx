import React, { useState } from 'react';
import { ScaleIcon, PhoneIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { safeScrollToAnchor } from '../utils/security';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const navContent = t.navbar;

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
      {/* Top Bar tối giản */}
      <div className="hidden lg:block bg-[#0F2144] text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-slate-300">
            <span>{navContent.locations}</span>
            <span className="text-slate-600">|</span>
            <span>{navContent.tagline}</span>
          </div>

          <div className="flex items-center space-x-5">
            <a href="tel:0988886447" className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors">
              <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>{navContent.hotline}</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <button
                onClick={() => setLang('vi')}
                className={`transition-colors ${lang === 'vi' ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setLang('en')}
                className={`transition-colors ${lang === 'en' ? 'text-amber-400 font-bold' : 'text-slate-300 hover:text-white'}`}
                title="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Wordmark tối giản, đĩnh đạc */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 text-left group min-w-0 flex-1 max-w-[210px] sm:max-w-none pr-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#0F2144] p-1.5 flex items-center justify-center shrink-0 shadow-sm border border-slate-700/20 transition-transform group-hover:scale-105">
              <img 
                src="./logo-emblem-gold.png" 
                alt="Logo Công ty Luật TNHH Hoà & Cộng sự" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0F2144] block leading-snug">
                {navContent.firmName}
              </span>
              <span className="text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-slate-500 mt-0.5 block truncate">
                {navContent.firmSub}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
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

          {/* Language switcher for mobile & Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="lg:hidden flex items-center gap-1.5 text-xs font-semibold px-2 py-1 bg-slate-100 rounded">
              <button
                onClick={() => setLang('vi')}
                className={lang === 'vi' ? 'text-[#0F2144] font-bold' : 'text-slate-500 hover:text-slate-900'}
              >
                VI
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'text-[#0F2144] font-bold' : 'text-slate-500 hover:text-slate-900'}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Mở menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="space-y-1">
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
          </div>
        </div>
      )}
    </header>
  );
}
