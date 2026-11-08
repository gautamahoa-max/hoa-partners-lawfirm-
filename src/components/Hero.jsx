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
    <section className="relative overflow-hidden bg-[#061226] text-left text-white border-b border-slate-900/80">
      
      {/* Background Architectural Canvas với chuyển động thở Ken Burns YKVN */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="./hero-bg.jpg"
          alt="Ho Chi Minh City Skyline - Hoa & Partners"
          className="w-full h-full object-cover object-right md:object-center animate-ykvn-zoom opacity-25 brightness-90 contrast-110"
        />
        {/* Mặt nạ màu Gradient Royal Navy đa tầng bảo toàn 100% độ tương phản */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061226] via-[#061226]/95 to-[#081838]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061226] via-transparent to-[#061226]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        
        {/* KHỐI HERO SHOT CHUẨN PHONG CÁCH YKVN THEO MẪU YÊU CẦU */}
        <div className="mb-12 sm:mb-16">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.65)] bg-[#072448] group">
            
            {/* Ảnh Hero Shot gốc chuẩn xác theo thiết kế YKVN với thương hiệu Hòa & Cộng sự */}
            <img
              src="./hero-ykvn-shot.jpg"
              alt="Hòa & Cộng sự - Celebrating Pioneering Litigation Excellence"
              className="w-full h-auto object-cover aspect-[2048/1012] group-hover:scale-[1.01] transition-transform duration-700 select-none"
            />
            
            {/* Viền sáng hairline bóng mượt góc trên */}
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl sm:rounded-3xl" />
          </div>
        </div>

        {/* Bố cục Tuyên ngôn & Năng lực Bất đối xứng (Asymmetric Split Grid theo chuẩn Taste-Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Cột Trái (7 cols): Tuyên ngôn bản lĩnh, Uy tín thể chế & Nút hành động */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Nhãn định danh với Khối hình học vàng hổ phách YKVN Accent Block */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md mb-5 w-fit shadow-sm">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-400 shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-200 uppercase font-mono">
                {hero.bar || 'ĐOÀN LUẬT SƯ VIỆT NAM'} • {hero.locations || 'TP.HCM • ĐẮK LẮK'}
              </span>
            </div>

            {/* Tiêu đề chính đĩnh đạc (Headline) */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.28] sm:leading-[1.22] text-balance">
              {hero.headline}
            </h1>

            {/* Đoạn mô tả mở rộng thanh lịch (Description) */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl text-pretty">
              {hero.desc}
            </p>

            {/* Cụm hành động chính (Primary CTA & Hotline liên lạc trực tiếp) */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              
              <button
                onClick={() => {
                  window.location.hash = '#/lien-he';
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-[#0F2144] active:translate-y-[1px] transition-all shadow-[0_4px_24px_rgba(245,158,11,0.25)]"
              >
                <span>{hero.ctaSchedule}</span>
                <span className="ml-2 font-mono">&rarr;</span>
              </button>

              <button
                onClick={scrollToDossier}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/40 backdrop-blur-sm active:translate-y-[1px] transition-all"
              >
                <span>{hero.ctaDossier || 'Xem danh mục án vụ'}</span>
              </button>

              <a
                href="tel:0988886447"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors py-2"
              >
                <PhoneIcon className="w-4 h-4 text-amber-400" />
                <span className="font-mono">{hero.ctaHotline}</span>
              </a>

            </div>

            {/* Cam kết pháp định tinh gọn */}
            <div className="mt-8 pt-5 border-t border-white/10 flex items-center gap-2.5 text-slate-400 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Thụ lý & trực tiếp giải quyết bởi Luật sư Điều hành Võ Văn Hoà • Bảo mật tuyệt đối theo Điều 25 Luật Luật sư</span>
            </div>

          </div>

          {/* Cột Phải (5 cols): Thẻ điều hành tranh tụng & diễn đàn tài phán (Executive Practice Card) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-3">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest font-mono">
                  HÃNG LUẬT TRANH TỤNG DÂN SỰ
                </span>
                <span className="text-[10px] font-semibold text-slate-300 font-mono">
                  TP.HCM • ĐẮK LẮK
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Luật sư Võ Văn Hoà (LL.M)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Luật sư Điều hành • Đoàn Luật sư TP. Hồ Chí Minh
                </p>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Hơn 15 năm kinh nghiệm thực chiến tại Tòa án nhân dân các cấp và Trung tâm Trọng tài, trực tiếp xây dựng phương án tố tụng bảo vệ tối đa quyền tài sản và nhân thân của thân chủ.
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                  LĨNH VỰC ĐẠI DIỆN TRỌNG TÂM
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                    Tranh tụng Đất đai & Nhà ở
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                    Phân chia Di sản Thừa kế
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                    Hợp đồng Đặt cọc & Dân sự
                  </span>
                  <span className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                    Hôn nhân & Phân chia Tài sản
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Khối Nguyên tắc hành nghề cốt lõi: Cấu trúc phân tầng Bất đối xứng (Banning 3-equal-cards) */}
        <div className="mt-14 pt-10 border-t border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Cột 1 (7 cols - Nguyên tắc nền tảng chủ đạo): Thẻ kính mờ lớn đĩnh đạc */}
            <div className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 font-mono">
                  {hero.p1Tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {hero.p1Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {hero.p1Desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>CĂN CỨ PHÁP ĐỊNH: ĐIỀU 25 LUẬT LUẬT SƯ</span>
                <span className="text-amber-400 font-bold">100% TUÂN THỦ PHÁP LUẬT</span>
              </div>
            </div>

            {/* Cột 2 (5 cols - 2 nguyên tắc bổ trợ xếp chồng linh hoạt): Minh bạch thù lao & Đồng hành */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.07] transition-all">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1 font-mono">
                  {hero.p2Tag}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  {hero.p2Title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hero.p2Desc}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.07] transition-all">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1 font-mono">
                  {hero.p3Tag}
                </span>
                <h4 className="text-sm font-bold text-white mb-1">
                  {hero.p3Title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hero.p3Desc}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
