import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="lien-he" className="bg-white text-slate-900 pt-16 pb-12 border-t-4 border-[#0F2144] scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Phần trên: Thương hiệu bên trái & Các liên kết tối giản bên phải kiểu Cravath */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 text-left">
          
          {/* Cột trái: Tên hãng luật sang trọng kiểu Cravath */}
          <div>
            <h2 className="text-2xl sm:text-[1.75rem] font-bold text-[#0F2144] tracking-tight">
              HÒA &amp; CỘNG SỰ
            </h2>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mt-2">
              HOA &amp; ASSOCIATES LAW FIRM &bull; LUẬT SƯ VÕ VĂN HOÀ
            </p>
          </div>

          {/* Cột phải: Các liên kết chữ hoa tinh giản (Cravath style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 text-xs font-semibold tracking-wider uppercase text-[#0F2144]">
            <div>
              <a
                href="tel:0988886447"
                className="hover:underline underline-offset-4 transition-all block"
              >
                LIÊN HỆ: 098.888.6447
              </a>
            </div>

            <div>
              <button
                onClick={() => scrollTo('linh-vuc')}
                className="hover:underline underline-offset-4 transition-all text-left block"
              >
                LĨNH VỰC HÀNH NGHỀ
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
                HỒ SƠ TIÊU BIỂU
              </button>
            </div>

            <div>
              <button
                onClick={() => scrollTo('ve-chung-toi')}
                className="hover:underline underline-offset-4 transition-all text-left block"
              >
                VỀ CHÚNG TÔI
              </button>
            </div>

            <div>
              <span className="text-slate-500 block">
                HÀ NỘI &bull; TP.HCM &bull; SINGAPORE
              </span>
            </div>
          </div>

        </div>

        {/* Đường kẻ ngang hairline kiểu Cravath */}
        <div className="border-t border-[#0F2144]/30 mt-14 mb-6" />

        {/* Dòng ghi chú bản quyền và thông cáo pháp lý dưới cùng */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-500 font-medium text-left">
          <p>
            Thông tin hành nghề luật sư. &copy; {currentYear} Công ty Luật TNHH Hòa &amp; Cộng sự.
          </p>
          <p>
            Bảo mật theo Điều 25 Luật Luật sư &bull; Giấy phép 0108929/TP/ĐKHĐ
          </p>
        </div>

      </div>
    </footer>
  );
}
