import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const testData = t.testimonials;
  const clientNotes = testData.clientNotes || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Tự động chuyển đổi phản hồi sau mỗi 7 giây (tạm dừng khi người dùng rê chuột vào)
  useEffect(() => {
    if (clientNotes.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientNotes.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [clientNotes.length, isPaused]);

  const currentNote = clientNotes[currentIndex] || clientNotes[0] || {};

  return (
    <section id="ho-so" className="py-20 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục hồ sơ tinh gọn, trang nhã */}
        <div className="max-w-3xl mb-14">
          {testData.eyebrow && (
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 font-mono">
              {testData.eyebrow}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
            {testData.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {testData.desc}
          </p>
        </div>

        {/* Mục lục án vụ dạng Dossier mở (Hoàn toàn phẳng, ngăn cách bằng đường kẻ chỉ hairline) */}
        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80 mb-20">
          {testData.cases.map((item) => (
            <div
              key={item.index}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group hover:bg-white/40 transition-colors"
            >
              {/* Cột 1: Chỉ số & Diễn đàn tài phán */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                    {item.index}
                  </span>
                  <span className="text-[10px] font-bold text-[#0F2144] tracking-widest uppercase bg-slate-200/60 px-2 py-0.5 rounded font-mono">
                    {item.badge}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-slate-500 block">
                    {testData.forumLabel}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.forum}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-slate-500 block">
                    {testData.valueLabel}
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight">
                    {item.value}
                  </p>
                </div>
              </div>

              {/* Cột 2: Nội dung tranh chấp & Tóm lược chiến lược pháp lý */}
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight group-hover:text-blue-900 transition-colors">
                  {item.nature}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Phản hồi từ thân chủ (Bố cục chuẩn mẫu Asoka Law / Khách hàng thực tế & quốc tế) */}
        <div className="mt-8">
          {testData.clientEyebrow && (
            <div className="mb-8">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">
                {testData.clientEyebrow}
              </span>
            </div>
          )}

          {/* Khung Card Feedback chuẩn xác theo hình mẫu */}
          <div
            className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-[0_4px_24px_rgba(15,33,68,0.04)] relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Cột Trái: Trích dẫn & Thông tin khách hàng */}
              <div className="lg:col-span-8 flex flex-col justify-center text-left">
                {/* Dấu ngoặc kép màu xanh pastel nhạt */}
                <div className="flex justify-start">
                  <svg
                    className="w-12 h-9 sm:w-14 sm:h-10 text-[#D8EEF8] mb-4 select-none shrink-0"
                    viewBox="0 0 48 36"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M0 21.6C0 9.72 6.48 2.16 19.44 0L21.6 4.32C13.68 6.48 9.36 10.8 9 16.2H19.44V36H0V21.6ZM25.92 21.6C25.92 9.72 32.4 2.16 45.36 0L47.52 4.32C39.6 6.48 35.28 10.8 34.92 16.2H45.36V36H25.92V21.6Z" />
                  </svg>
                </div>

                {/* Đoạn nhận xét của khách hàng */}
                <blockquote className="text-sm sm:text-base lg:text-[1.05rem] text-slate-700 italic leading-relaxed sm:leading-[1.8] font-normal min-h-[90px] sm:min-h-[105px] flex items-center transition-opacity duration-300">
                  &ldquo;{currentNote.statement}&rdquo;
                </blockquote>

                {/* Đường kẻ ngang hairline thanh mảnh */}
                <div className="w-full max-w-[280px] mx-auto border-t border-slate-200/90 my-5" />

                {/* Tên thân chủ & Ghi chú bảo mật màu vàng hổ phách */}
                <div className="text-center">
                  <h4 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight">
                    {currentNote.clientName}
                  </h4>
                  <p className="text-xs sm:text-[13px] font-medium text-amber-500 mt-1">
                    {currentNote.clientRole}
                  </p>
                </div>
              </div>

              {/* Cột Phải: Ảnh chân dung trong khung tròn xanh nhạt */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-full bg-[#E1F3FD] flex items-center justify-center overflow-hidden shadow-sm">
                  <img
                    src={currentNote.avatar}
                    alt={currentNote.clientName}
                    className="w-full h-full object-cover object-top transition-opacity duration-500"
                    onError={(e) => {
                      e.target.src = './client-1.jpg';
                    }}
                  />
                </div>
              </div>

            </div>

            {/* Các nốt chấm tròn chuyển slide (Pagination Dots) */}
            <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
              {clientNotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === idx
                      ? 'w-3 h-3 bg-amber-400 ring-4 ring-amber-100 scale-110'
                      : 'w-2.5 h-2.5 bg-slate-400 hover:bg-slate-500'
                  }`}
                  aria-label={`Chuyển đến phản hồi ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
