import React, { useState } from 'react';
import { ScaleIcon, PhoneIcon, ClockIcon, MapPinIcon } from './Icons';

export default function Navbar({ onOpenRiskModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Về chúng tôi', href: '#ve-chung-toi' },
    { name: 'Lĩnh vực hành nghề', href: '#linh-vuc' },
    { name: 'Tính án phí', href: '#tinh-an-phi' },
    { name: 'Án lệ tiêu biểu', href: '#danh-gia' },
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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Bar - Thông tin tiếp nhận vụ việc */}
      <div className="hidden lg:block bg-[#111827] text-slate-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ClockIcon className="w-3.5 h-3.5 text-amber-500" />
              Thứ Hai đến Thứ Bảy: 08:00 - 18:00 (Hỗ trợ khẩn cấp 24/7)
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPinIcon className="w-3.5 h-3.5 text-amber-500" />
              Hà Nội và TP. Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenRiskModal}
              className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2 transition-colors"
            >
              Khảo sát rủi ro pháp lý doanh nghiệp
            </button>
            <span className="text-slate-600">|</span>
            <a href="tel:0912345678" className="flex items-center gap-1.5 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Hotline: 0912.345.678</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Định danh Hãng luật */}
          <a href="#" className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400">
              <ScaleIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-serif">
                  HÒA &amp; CỘNG SỰ
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-mono font-bold tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  HÃNG LUẬT
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Cố vấn Pháp chế &amp; Tranh tụng Tòa án
              </p>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] transition-all"
            >
              Đặt lịch tư vấn
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
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
              className="w-full text-center py-2.5 px-4 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800"
            >
              Khảo sát rủi ro pháp lý doanh nghiệp
            </button>
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="w-full text-center py-3 px-4 rounded-lg text-sm font-semibold bg-slate-900 text-white"
            >
              Đặt lịch tư vấn với luật sư
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
