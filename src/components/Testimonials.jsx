import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScaleIcon, ShieldCheckIcon, CheckCircleIcon, LandmarkIcon } from './Icons';

export default function Testimonials() {
  const { t, lang } = useLanguage();
  const testData = t.testimonials;
  const clientNotes = testData.clientNotes || [];
  const allCases = testData.cases || [];
  const filters = testData.filters || [];
  const stageLabels = testData.stageLabels || {
    challenge: '01. Nút thắt pháp lý',
    strategy: '02. Chiến lược Luật sư',
    verdict: '03. Phán quyết Tòa án',
  };

  // Bộ lọc danh mục hồ sơ án lệ
  const [activeFilter, setActiveFilter] = useState('all');

  // Trạng thái tab giải phẫu vụ án cho từng hồ sơ (mặc định mở 'strategy' hoặc 'verdict' để gây ấn tượng ngay)
  const [activeStages, setActiveStages] = useState({
    '01': 'verdict',
    '02': 'strategy',
    '03': 'verdict',
    '04': 'strategy',
  });

  const handleStageChange = (caseIndex, stageKey) => {
    setActiveStages((prev) => ({
      ...prev,
      [caseIndex]: stageKey,
    }));
  };

  const filteredCases =
    activeFilter === 'all'
      ? allCases
      : allCases.filter((item) => item.category === activeFilter);

  // Carousel phản hồi khách hàng
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (clientNotes.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientNotes.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [clientNotes.length, isPaused]);

  const currentNote = clientNotes[currentIndex] || clientNotes[0] || {};

  const STAGE_KEYS = ['challenge', 'strategy', 'verdict'];

  return (
    <section
      id="ho-so"
      className="py-20 sm:py-28 bg-[#FAF9F6] border-b border-slate-200/80 text-left relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. Header Bất đối xứng (Editorial Asymmetric Split) + Bộ lọc tương tác */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7 space-y-4">
            {/* Huy hiệu trạng thái Perpetual Micro-Motion */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F2144] font-mono">
                {testData.eyebrow || 'HỒ SƠ ÁN LỆ ĐIỂN HÌNH'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2144] tracking-tight leading-[1.25] text-balance">
              {testData.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[65ch] font-normal">
              {testData.desc}
            </p>
          </div>

          {/* Cột phải: Bộ lọc chuyên môn dạng Tactile Pills */}
          <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer active:translate-y-[1px] ${
                    isActive
                      ? 'bg-[#0F2144] text-white shadow-sm ring-2 ring-[#0F2144]/15'
                      : 'bg-white text-slate-700 border border-slate-200/90 hover:border-[#0F2144]/40 hover:text-[#0F2144]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Lưới Bento Bất Đối Xứng (Offset Asymmetric 12-Column Bento Dossier Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-24">
          {filteredCases.map((item, idx) => {
            // Cấu trúc Zig-Zag Bất đối xứng: Hàng 1 (7 cột + 5 cột), Hàng 2 (5 cột + 7 cột)
            // Khi lọc theo 1 danh mục đơn lẻ, mở rộng toàn khung 12 cột
            const isSingleView = filteredCases.length === 1;
            const isWideCard = isSingleView
              ? true
              : idx % 4 === 0 || idx % 4 === 3;
            const colSpanClass = isSingleView
              ? 'lg:col-span-12'
              : isWideCard
              ? 'lg:col-span-7'
              : 'lg:col-span-5';

            // Phối màu High-Contrast Architectural: Thẻ Flagship nền Navy (#0F2144), thẻ đối trọng nền Trắng Tinh Khiết (#FFFFFF)
            const isDarkTheme = item.featured;
            const currentStageKey = activeStages[item.index] || 'verdict';
            const currentStageText =
              (item.stages && item.stages[currentStageKey]) || item.summary;

            return (
              <article
                key={item.index}
                className={`${colSpanClass} rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                  isDarkTheme
                    ? 'bg-[#0F2144] text-white border border-slate-800 shadow-[0_16px_40px_-12px_rgba(15,33,68,0.25)]'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,33,68,0.06)] hover:border-slate-300'
                }`}
              >
                {/* Họa tiết đường kẻ kiến trúc (Architectural Hairline Grid) cho thẻ Flagship */}
                {isDarkTheme && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.06]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                      backgroundSize: '48px 48px',
                    }}
                    aria-hidden="true"
                  />
                )}

                <div className="p-6 sm:p-8 lg:p-9 relative z-10 flex-1 flex flex-col">
                  
                  {/* Thanh Meta Dossier trên cùng: Số thứ tự Hồ sơ + Nhãn chuyên môn + Trạng thái thắng kiện */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-current/10">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl font-mono text-sm font-extrabold tracking-tight ${
                          isDarkTheme
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-[#0F2144] text-white'
                        }`}
                      >
                        {item.index}
                      </span>
                      <div>
                        <span
                          className={`text-xs font-extrabold uppercase tracking-widest font-mono block ${
                            isDarkTheme ? 'text-amber-300' : 'text-[#0F2144]'
                          }`}
                        >
                          {item.badge}
                        </span>
                        <span
                          className={`text-xs font-medium block mt-0.5 ${
                            isDarkTheme ? 'text-slate-300' : 'text-slate-600'
                          }`}
                        >
                          {item.forum}
                        </span>
                      </div>
                    </div>

                    {/* Huy hiệu kết quả phán quyết (Verified Outcome Pill) */}
                    {item.outcome && (
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold ${
                          isDarkTheme
                            ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/60'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <span>{item.outcome}</span>
                      </div>
                    )}
                  </div>

                  {/* Tiêu đề vụ án & Từ khóa pháp lý */}
                  <div className="my-5">
                    <h3
                      className={`text-lg sm:text-xl font-bold tracking-tight leading-snug ${
                        isDarkTheme ? 'text-white' : 'text-[#0F2144]'
                      }`}
                    >
                      {item.nature}
                    </h3>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md ${
                              isDarkTheme
                                ? 'bg-slate-800/90 text-slate-200 border border-slate-700'
                                : 'bg-slate-100 text-slate-700 border border-slate-200/80'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Khối Quy mô tài sản bảo vệ & Cơ quan tài phán (Tabular Monospace Authority) */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl mb-6 ${
                      isDarkTheme
                        ? 'bg-slate-900/90 border border-slate-800'
                        : 'bg-[#F8FAFC] border border-slate-200/80'
                    }`}
                  >
                    <div>
                      <span
                        className={`text-xs font-semibold block ${
                          isDarkTheme ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {testData.valueLabel}
                      </span>
                      <p
                        className={`text-base sm:text-lg font-extrabold font-mono tracking-tight mt-0.5 tabular-nums ${
                          isDarkTheme ? 'text-amber-300' : 'text-[#0F2144]'
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`text-xs font-semibold block ${
                          isDarkTheme ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {testData.forumLabel}
                      </span>
                      <p
                        className={`text-xs sm:text-sm font-bold mt-1 ${
                          isDarkTheme ? 'text-white' : 'text-slate-800'
                        }`}
                      >
                        {item.forum}
                      </p>
                    </div>
                  </div>

                  {/* Bộ chuyển đổi Giải phẫu vụ án 3 giai đoạn (Interactive 3-Stage Case Anatomy) */}
                  <div className="mt-auto">
                    <div
                      className={`grid grid-cols-3 gap-1.5 p-1.5 rounded-xl mb-4 ${
                        isDarkTheme
                          ? 'bg-slate-900/95 border border-slate-800'
                          : 'bg-slate-100 border border-slate-200/70'
                      }`}
                      role="tablist"
                      aria-label={item.nature}
                    >
                      {STAGE_KEYS.map((stageKey) => {
                        const isSelected = currentStageKey === stageKey;
                        return (
                          <button
                            key={stageKey}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            onClick={() => handleStageChange(item.index, stageKey)}
                            className={`min-h-[40px] px-2 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer text-center leading-tight active:translate-y-[1px] ${
                              isSelected
                                ? isDarkTheme
                                  ? 'bg-amber-400 text-slate-950 shadow-xs'
                                  : 'bg-[#0F2144] text-white shadow-xs'
                                : isDarkTheme
                                ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                : 'text-slate-700 hover:text-[#0F2144] hover:bg-white/60'
                            }`}
                          >
                            {stageLabels[stageKey]}
                          </button>
                        );
                      })}
                    </div>

                    {/* Nội dung chi tiết của giai đoạn đang chọn */}
                    <div
                      className={`p-4 sm:p-5 rounded-2xl border-l-4 transition-all duration-300 min-h-[118px] flex flex-col justify-between ${
                        isDarkTheme
                          ? 'bg-slate-900/70 border-l-amber-400 text-slate-200'
                          : 'bg-[#FAF9F6] border-l-[#0F2144] text-slate-700'
                      }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed font-normal">
                        {currentStageText}
                      </p>

                      {/* Thanh điều hướng chân Dossier */}
                      <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-current/10">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isDarkTheme ? 'text-amber-300' : 'text-[#0F2144]'
                          }`}
                        >
                          {stageLabels[currentStageKey]}
                        </span>

                        <a
                          href="#/lien-he"
                          className={`inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-4 transition-colors ${
                            isDarkTheme
                              ? 'text-white hover:text-amber-300'
                              : 'text-[#0F2144] hover:text-amber-800'
                          }`}
                        >
                          <span>{testData.consultCaseBtn || 'Tư vấn tình huống tương tự'}</span>
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* 3. Phản hồi từ thân chủ (Bố cục chuẩn mẫu Khách hàng thực tế) */}
        <div className="mt-8">
          {testData.clientEyebrow && (
            <div className="mb-8">
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest font-mono">
                {testData.clientEyebrow}
              </span>
            </div>
          )}

          <div
            className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-[0_4px_24px_rgba(15,33,68,0.04)] relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Cột Trái: Trích dẫn & Thông tin khách hàng */}
              <div className="lg:col-span-8 flex flex-col justify-center text-left">
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

                <blockquote className="text-sm sm:text-base lg:text-[1.05rem] text-slate-700 italic leading-relaxed sm:leading-[1.8] font-normal min-h-[90px] sm:min-h-[105px] flex items-center transition-opacity duration-300">
                  &ldquo;{currentNote.statement}&rdquo;
                </blockquote>

                <div className="w-full max-w-[280px] mx-auto border-t border-slate-200/90 my-5" />

                <div className="text-center">
                  <h4 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight">
                    {currentNote.clientName}
                  </h4>
                  <p className="text-xs sm:text-[13px] font-semibold text-amber-800 mt-1">
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
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-3 h-3 bg-amber-500 ring-4 ring-amber-100 scale-110'
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
