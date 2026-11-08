import React from 'react';
import { PhoneIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();
  const isVi = lang === 'vi';

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

  const badges = isVi
    ? ['Tranh tụng Tòa án', 'Đất đai & Bất động sản', 'Thừa kế di sản', 'Hợp đồng dân sự']
    : ['Court Litigation', 'Land & Real Estate', 'Inheritance & Estate', 'Civil Contracts'];

  return (
    <section className="w-full bg-[#03122a] overflow-hidden border-b border-slate-200/80">
      {/* 1. GIAO DIỆN DESKTOP / TABLET LỚN (md:block) */}
      {/* Giữ trọn vẹn 100% bố cục master banner phong cách YKVN đã duyệt */}
      <div className="hidden md:block w-full">
        <img
          src="./hero-ykvn-shot.jpg"
          alt="Công ty Luật TNHH Hòa & Cộng sự - Điểm tựa pháp lý vững chắc tại Buôn Ma Thuột, Đắk Lắk"
          className="w-full h-auto object-cover aspect-[2048/1012] block select-none"
        />
      </div>

      {/* 2. GIAO DIỆN MOBILE TỐI ƯU ĐẶC BIỆT (block md:hidden) */}
      {/* Giải quyết triệt để lỗi chữ quá nhỏ trên điện thoại: chữ to, sắc nét, chuẩn phong cách nhận diện */}
      <div className="block md:hidden relative bg-gradient-to-b from-[#03122a] via-[#072c62] to-[#041a38] text-white px-4 sm:px-6 pt-4 pb-8 text-left">
        
        {/* Khung ảnh biểu tượng Ngã Sáu Buôn Ma Thuột */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-white/15">
          <img
            src="./bmt-monument-mobile.jpg"
            alt="Ngã Sáu Buôn Ma Thuột - Tượng đài chiến thắng Đắk Lắk"
            className="w-full h-full object-cover select-none"
          />
          {/* Lớp phủ chuyển sắc bảo đảm thẩm mỹ */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#03122a]/80 via-transparent to-black/20" />
          
          {/* Nhãn chú thích địa danh */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center">
            <span className="px-2.5 py-1 rounded bg-[#030e1e]/85 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-medium text-sky-100 truncate shadow-sm">
              {isVi
                ? 'NGÃ SÁU BUÔN MA THUỘT • TƯỢNG ĐÀI CHIẾN THẮNG'
                : 'BUON MA THUOT VICTORY MONUMENT • DAK LAK'}
            </span>
          </div>
        </div>

        {/* Khối định danh thương hiệu hãng luật */}
        <div className="mt-4 pt-1">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase">
              HÒA & CỘNG SỰ
            </h2>
            {/* Chấm vuông đỏ nhận diện phong cách Cravath / YKVN */}
            <div className="w-4 h-4 bg-[#DC2626] rounded-[2px] shrink-0 shadow-sm" />
          </div>
          
          {/* Đường kẻ hairline */}
          <div className="w-full h-[1px] bg-white/60 mt-2 mb-2" />
          
          {/* Thông tin đoàn luật sư hiển thị 2 dòng gọn gàng, không bị tràn viền */}
          <div className="space-y-0.5 text-[11px] sm:text-xs font-semibold uppercase text-sky-200">
            <div>HOA & ASSOCIATES LAW FIRM</div>
            <div className="text-sky-300 font-medium">
              {isVi ? 'ĐOÀN LUẬT SƯ TP.HỒ CHÍ MINH' : 'HO CHI MINH CITY BAR ASSOCIATION'}
            </div>
          </div>
        </div>

        {/* Tuyên ngôn chủ đạo (Font to, rõ ràng, dễ đọc trên mọi điện thoại) */}
        <div className="mt-5 space-y-1">
          <h1 className="text-[22px] sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
            {isVi ? 'BẢN LĨNH TRANH TỤNG' : 'LITIGATION PROWESS'}
          </h1>
          <p className="text-[20px] sm:text-[22px] font-extrabold text-[#4BD2FF] tracking-tight leading-snug">
            {isVi ? 'ĐIỂM TỰA PHÁP LÝ TẠI ĐẮK LẮK' : 'LEGAL BULWARK IN DAK LAK'}
          </p>
        </div>

        {/* Đoạn văn mô tả năng lực thực thi */}
        <p className="mt-3 text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
          {isVi
            ? 'Hãng luật chuyên sâu Tranh tụng Dân sự tại Tòa án các cấp, bảo vệ tối đa quyền lợi thân chủ trong các tranh chấp Đất đai, Bất động sản, Thừa kế di sản, Hợp đồng và Hôn nhân gia đình.'
            : 'Dedicated Civil Litigation counsel before People\'s Courts at all levels, vigorously protecting client rights in Land & Real Estate disputes, Inheritance & Estates, Civil Contracts, and Family Law.'}
        </p>

        {/* Danh mục lĩnh vực trọng tâm (Flex wrap tự nhiên, không bị cắt chữ) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-[11px] sm:text-xs font-medium text-slate-100 shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Nút thao tác nhanh trên điện thoại */}
        <div className="mt-5 flex flex-col gap-2.5 pt-1">
          <a
            href="tel:0988886447"
            className="w-full py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 active:scale-[0.99] text-slate-900 font-bold text-xs uppercase tracking-wider text-center shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <PhoneIcon className="w-4 h-4 text-slate-900" />
            <span>{isVi ? 'Hotline 24/7: 098.888.6447' : '24/7 Hotline: +84 98.888.6447'}</span>
          </a>
          <button
            onClick={() => scrollTo('linh-vuc')}
            className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 active:scale-[0.99] text-white font-medium text-xs tracking-wider text-center border border-white/25 transition-all cursor-pointer"
          >
            {isVi ? 'Xem các lĩnh vực chuyên sâu ↓' : 'View Practice Areas ↓'}
          </button>
        </div>

      </div>
    </section>
  );
}
