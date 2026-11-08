import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const footer = t.footer;

  const scrollTo = (id) => {
    if (window.location.hash.startsWith('#/')) {
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const copyrightText = footer.copyright.replace('{year}', currentYear);

  return (
    <footer id="lien-he" className="bg-white text-slate-900 pt-16 pb-12 border-t border-slate-200/90 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phần trên: Thương hiệu bên trái & Các liên kết tối giản bên phải kiểu Cravath */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 text-left">
          
          {/* Cột trái: Tên hãng luật sang trọng kiểu Cravath */}
          <div>
            <h2 className="text-2xl sm:text-[1.75rem] font-bold text-[#0F2144] tracking-tight">
              {footer.firmTitle}
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mt-2">
              {footer.firmSubtitle}
            </p>
          </div>

          {/* Cột phải: Các liên kết chữ hoa tinh giản (Cravath style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 text-xs font-semibold tracking-wider uppercase text-[#0F2144]">
            <div>
              <a
                href="tel:0988886447"
                className="hover:underline underline-offset-4 transition-all block"
              >
                {footer.call}
              </a>
            </div>

            <div>
              <button
                onClick={() => scrollTo('linh-vuc')}
                className="hover:underline underline-offset-4 transition-all text-left block"
              >
                {footer.practice}
              </button>
            </div>

            <div>
              <a
                href="mailto:Gautamahoa@gmail.com"
                className="hover:underline underline-offset-4 transition-all block"
              >
                GAUTAMAHOA@GMAIL.COM
              </a>
            </div>

            <div>
              <button
                onClick={() => scrollTo('ho-so')}
                className="hover:underline underline-offset-4 transition-all text-left block"
              >
                {footer.dossier}
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  window.location.hash = '#/luat-su';
                }}
                className="hover:underline underline-offset-4 transition-all text-left block"
              >
                {footer.about}
              </button>
            </div>

            <div>
              <button
                onClick={() => {
                  window.location.hash = '#/kien-thuc-phap-luat';
                }}
                className="hover:underline underline-offset-4 transition-all text-left block"
              >
                {footer.knowledge || (lang === 'vi' ? 'KIẾN THỨC PHÁP LUẬT' : 'LEGAL KNOWLEDGE')}
              </button>
            </div>

            <div>
              <span className="text-slate-500 block">
                {footer.locations}
              </span>
            </div>
          </div>

        </div>

        {/* Đường kẻ ngang hairline kiểu Cravath */}
        <div className="border-t border-[#0F2144]/30 mt-14 mb-6" />

        {/* Dòng ghi chú bản quyền và thông cáo pháp lý dưới cùng kiểu Cravath */}
        <div className="text-[11px] text-slate-500 font-medium text-left">
          <p>
            {copyrightText}
          </p>
        </div>

      </div>
    </footer>
  );
}
