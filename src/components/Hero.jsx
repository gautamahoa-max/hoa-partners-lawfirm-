import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PhoneIcon } from './Icons';

export default function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  const scrollToDossier = () => {
    const el = document.getElementById('ho-so');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#ho-so';
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#061226] text-left text-white border-b border-slate-900/60">
      {/* Lớp 1: Hình ảnh Hero Đô thị / Kiến trúc với hiệu ứng Zoom chậm Ken Burns (chuẩn phong cách YKVN) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="./hero-bg.jpg"
          alt="Ho Chi Minh City Skyline - Hoa & Partners Law Firm"
          className="w-full h-full object-cover object-center animate-ykvn-zoom origin-center opacity-45 brightness-95 contrast-105"
        />
      </div>

      {/* Lớp 2: Mặt nạ màu Gradient Hoàng gia (Royal Navy Color Mask chuẩn YKVN .mk-video-color-mask) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#061226]/95 via-[#081838]/88 to-[#0E244C]/75"
        aria-hidden="true"
      />
      {/* Gradient chuyển tiếp chiều sâu từ trên xuống dưới */}
      <div
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#061226]/70 via-transparent to-[#061226]"
        aria-hidden="true"
      />

      {/* Lớp 3: Nội dung trung tâm của Hero */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
        
        {/* Khối nhận diện thương hiệu với điểm nhấn hình học màu vàng hổ phách (Signature Geometric Block) */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-sm bg-amber-400 shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono">
            {hero.bar || 'ĐOÀN LUẬT SƯ VIỆT NAM'} • {hero.locations || 'TP.HCM • ĐẮK LẮK'}
          </span>
        </div>

        {/* Tuyên ngôn lớn đĩnh đạc (Headline) */}
        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.25] sm:leading-[1.2] max-w-5xl text-balance drop-shadow-sm">
          {hero.headline}
        </h1>

        {/* Đoạn mô tả mở rộng thanh lịch (Description) */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed font-normal text-pretty">
          {hero.desc}
        </p>

        {/* Đường kẻ chỉ hairline tinh xảo */}
        <div className="border-t border-white/15 my-10" />

        {/* 3 Nguyên tắc hành nghề cốt lõi dàn ngang dạng Thẻ kính mờ cao cấp (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.08] transition-all group">
            <span className="text-xs font-bold text-amber-400/90 uppercase tracking-widest block mb-2 font-mono">
              {hero.p1Tag}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {hero.p1Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
              {hero.p1Desc}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.08] transition-all group">
            <span className="text-xs font-bold text-amber-400/90 uppercase tracking-widest block mb-2 font-mono">
              {hero.p2Tag}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {hero.p2Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
              {hero.p2Desc}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.08] transition-all group">
            <span className="text-xs font-bold text-amber-400/90 uppercase tracking-widest block mb-2 font-mono">
              {hero.p3Tag}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              {hero.p3Title}
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
              {hero.p3Desc}
            </p>
          </div>

        </div>

        {/* Nút hành động chính & Hotline liên hệ */}
        <div className="mt-10 pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
          
          {/* Nút đặt lịch tư vấn chính (Màu vàng hổ phách nổi bật) */}
          <button
            onClick={() => {
              window.location.hash = '#/lien-he';
            }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-[#0F2144] active:translate-y-[1px] transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
          >
            <span>{hero.ctaSchedule}</span>
            <span className="ml-2 font-mono">&rarr;</span>
          </button>

          {/* Nút xem danh mục án vụ (Kiểu viền kính sang trọng) */}
          <button
            onClick={scrollToDossier}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 backdrop-blur-sm active:translate-y-[1px] transition-all"
          >
            <span>{hero.ctaDossier || 'Xem hồ sơ án vụ trọng điểm'}</span>
          </button>

          {/* Hotline khẩn cấp 24/7 */}
          <a
            href="tel:0988886447"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors ml-auto sm:ml-2"
          >
            <PhoneIcon className="w-4 h-4 text-amber-400" />
            <span className="font-mono">{hero.ctaHotline}</span>
          </a>

        </div>

      </div>
    </section>
  );
}
