import React, { useState } from 'react';
import { ScaleIcon, PhoneIcon } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('vi');

  const navLinks = [
    { name: 'Giới thiệu', href: '#ve-chung-toi' },
    { name: 'Lĩnh vực hành nghề', href: '#linh-vuc' },
    { name: 'Luật sư điều hành', href: '#luat-su' },
    { name: 'Hồ sơ tiêu biểu', href: '#ho-so' },
    { name: 'Liên hệ', href: '#lien-he' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Bar tối giản */}
      <div className="hidden lg:block bg-[#0F2144] text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-slate-300">
            <span>Hà Nội &bull; TP. Hồ Chí Minh &bull; Singapore</span>
            <span className="text-slate-600">|</span>
            <span>Hãng luật tranh tụng &amp; tư vấn doanh nghiệp</span>
          </div>

          <div className="flex items-center space-x-5">
            <a href="tel:0988886447" className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors">
              <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Hotline: 098.888.6447</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={() => setLang('vi')}
                className={`${lang === 'vi' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-white'}`}
              >
                VI
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setLang('en')}
                className={`${lang === 'en' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-white'}`}
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
          <a href="#" className="flex items-center gap-3.5 text-left group">
            <div className="w-10 h-10 rounded bg-[#0F2144] flex items-center justify-center text-amber-400">
              <ScaleIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-normal text-[#0F2144] font-serif block leading-normal">
                HÒA &amp; CỘNG SỰ
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1 block">
                HOA &amp; ASSOCIATES LAW FIRM
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0F2144] hover:bg-slate-50 rounded transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded text-sm font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all"
            >
              Liên hệ tư vấn
            </button>

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
            {navLinks.map((link) => (
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
          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="w-full text-center py-3 px-4 rounded text-sm font-semibold bg-[#0F2144] text-white"
            >
              Liên hệ tư vấn với luật sư
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
