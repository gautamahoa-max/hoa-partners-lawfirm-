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

  const scrollToServices = () => {
    const el = document.getElementById('linh-vuc');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#linh-vuc';
    }
  };

  return (
    <section className="bg-[#071938] text-white overflow-hidden text-center">
      
      {/* 1. KHỐI HERO SHOT CHỦ ĐẠO - Banner điện ảnh chuẩn phong cách YKVN */}
      <div className="w-full bg-[#051329] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#072448]">
            <img
              src="./hero-ykvn-shot.jpg"
              alt="Hòa & Cộng sự - Pioneering Litigation & Advocacy"
              className="w-full h-auto object-cover aspect-[2048/1012] block select-none"
            />
          </div>
        </div>
      </div>

      {/* 2. KHỐI THÔNG ĐIỆP & ĐIỀU HƯỚNG TINH GỌN (Airy, Clean & Modern) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 flex flex-col items-center">
        
        {/* Nhãn định danh tối giản */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-sm bg-amber-400 shrink-0" />
          <span>{hero.bar || 'ĐOÀN LUẬT SƯ VIỆT NAM'} • {hero.locations || 'TP.HCM • ĐẮK LẮK'}</span>
        </div>

        {/* Tuyên ngôn lớn đĩnh đạc - Khoảng thở rộng rãi, dễ đọc */}
        <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white tracking-tight leading-[1.3] text-balance">
          {hero.headline}
        </h1>

        {/* Đoạn mô tả súc tích (1 câu duy nhất, không thừa chữ) */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal text-pretty">
          {hero.desc}
        </p>

        {/* Cụm hành động tinh gọn: 1 Nút chính + 1 Hotline + 1 Nút điều hướng */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          
          <button
            onClick={() => {
              window.location.hash = '#/lien-he';
            }}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-[#0F2144] active:translate-y-[1px] transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
          >
            <span>{hero.ctaSchedule}</span>
            <span className="ml-2 font-mono">&rarr;</span>
          </button>

          <a
            href="tel:0988886447"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all"
          >
            <PhoneIcon className="w-4 h-4 text-amber-400" />
            <span className="font-mono">{hero.ctaHotline}</span>
          </a>

          <button
            onClick={scrollToDossier}
            className="inline-flex items-center px-4 py-3 text-xs sm:text-sm font-medium text-slate-400 hover:text-amber-300 hover:underline transition-colors"
          >
            <span>{hero.ctaDossier || 'Xem danh mục án vụ'}</span>
            <span className="ml-1.5">&darr;</span>
          </button>

        </div>

      </div>

    </section>
  );
}
