import React, { useState } from 'react';
import { ScaleIcon, PhoneIcon, ClockIcon, MapPinIcon } from './Icons';

export default function Navbar({ onOpenRiskModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Về Chúng Tôi', href: '#ve-chung-toi' },
    { name: 'Lĩnh Vực Hành Nghề', href: '#linh-vuc' },
    { name: 'Tính Án Phí & Chi Phí', href: '#tinh-an-phi' },
    { name: 'Quy Trình Làm Việc', href: '#quy-trinh' },
    { name: 'Khách Hàng', href: '#danh-gia' },
    { name: 'Liên Hệ', href: '#lien-he' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Top Bar - Thông tin liên hệ nhanh */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ClockIcon className="w-3.5 h-3.5 text-amber-400" />
              Thứ 2 - Thứ 7: 08:00 - 18:00 (Hỗ trợ khẩn cấp 24/7)
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
              Hà Nội &amp; TP. Hồ Chí Minh
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <button
              onClick={onOpenRiskModal}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center gap-1 transition-colors"
            >
              <span>Kiểm tra sức khỏe pháp lý doanh nghiệp</span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded-full font-bold">Miễn phí</span>
            </button>
            <span className="text-slate-600">|</span>
            <a href="tel:0912345678" className="flex items-center gap-1.5 text-amber-400 font-bold hover:text-amber-300 transition-colors">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>Hotline: 0912.345.678</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3.5 group text-left">
            <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
              <ScaleIcon className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-serif">
                  HÒA &amp; CỘNG SỰ
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-amber-50 text-amber-800 border border-amber-200/60 px-2 py-0.5 rounded-md">
                  LAW FIRM
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium tracking-wide">
                Hãng Luật &amp; Cố Vấn Pháp Lý Doanh Nghiệp
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
                className="px-3.5 py-2 text-sm font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] active:scale-[0.99] shadow-md shadow-slate-900/15 hover:shadow-lg transition-all duration-150"
            >
              Đặt Lịch Tư Vấn
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Mở menu điều hướng"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRiskModal();
              }}
              className="w-full text-center py-3 px-4 rounded-xl text-sm font-bold bg-amber-50 text-amber-900 border border-amber-200"
            >
              Kiểm Tra Sức Khỏe Pháp Lý (Miễn Phí)
            </button>
            <button
              onClick={() => handleNavClick('#lien-he')}
              className="w-full text-center py-3.5 px-4 rounded-xl text-base font-bold bg-slate-900 text-white shadow-md shadow-slate-900/20"
            >
              Đặt Lịch Tư Vấn Với Luật Sư
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
