import React, { useState } from 'react';
import { ScaleIcon, PhoneIcon, MapPinIcon } from './Icons';

export default function Navbar({ onOpenRiskModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('vi');

  const navLinks = [
    { name: 'Giới thiệu', href: '#ve-chung-toi' },
    { name: 'Lĩnh vực & Ngành nghề', href: '#linh-vuc' },
    { name: 'Đội ngũ luật sư', href: '#ve-chung-toi' },
    { name: 'Tính án phí NQ 326', href: '#tinh-an-phi' },
    { name: 'Vụ việc & Án lệ', href: '#danh-gia' },
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
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 transition-all">
      {/* Top Utility Bar theo chuẩn YKVN */}
      <div className="hidden lg:block bg-[#0F2144] text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
              Văn phòng: Hà Nội &bull; TP. Hồ Chí Minh &bull; Singapore
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              Tiếp nhận hồ sơ tố tụng và tư vấn 24/7
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenRiskModal}
              className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors"
            >
              Khảo sát rủi ro pháp lý doanh nghiệp
            </button>
            <span className="text-slate-600">|</span>
            <a href="tel:0912345678" className="flex items-center gap-1 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Hotline: 0912.345.678</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={() => setLang('vi')}
                className={`font-semibold ${lang === 'vi' ? 'text-amber-400 underline underline-offset-2' : 'text-slate-400 hover:text-white'}`}
              >
                VI
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setLang('en')}
                className={`font-semibold ${lang === 'en' ? 'text-amber-400 underline underline-offset-2' : 'text-slate-400 hover:text-white'}`}
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
          
          {/* Logo YKVN-Style Typographic Branding */}
          <a href="#" className="flex items-center gap-3.5 text-left group">
            <div className="w-11 h-11 rounded bg-[#0F2144] flex items-center justify-center text-amber-400 shadow-sm">
              <ScaleIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-[#0F2144] font-serif">
                  HÒA &amp; CỘNG SỰ
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                  LAW FIRM
                </span>
              </div>
              <p className="text-[11px] text-slate-500 tracking-normal">
                Hãng luật Kinh doanh &amp; Tranh tụng Quốc tế
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
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
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded text-sm font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all"
            >
              Đặt lịch tư vấn
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
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
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRiskModal();
              }}
              className="w-full text-center py-2.5 px-4 rounded text-xs font-semibold bg-slate-100 text-slate-800"
            >
              Khảo sát rủi ro pháp lý doanh nghiệp
            </button>
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="w-full text-center py-3 px-4 rounded text-sm font-semibold bg-[#0F2144] text-white"
            >
              Đặt lịch tư vấn với luật sư
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
