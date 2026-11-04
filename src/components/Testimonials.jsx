import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const testData = t.testimonials;

  return (
    <section id="ho-so" className="py-20 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục hồ sơ tinh gọn, trang nhã */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 font-mono">
            {testData.eyebrow}
          </p>
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

                <div className="pt-2 flex items-center gap-2 text-[11px] font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>{testData.resultBadge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phản hồi từ thân chủ (Bố cục mở, trích dẫn thanh lịch, không đóng hộp) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono">
              {testData.clientEyebrow}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            {testData.clientNotes.map((note, idx) => (
              <div key={idx} className="space-y-4">
                <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed border-l-2 border-[#0F2144]/40 pl-5">
                  &ldquo;{note.statement}&rdquo;
                </blockquote>
                <div className="text-xs pl-5">
                  <p className="font-bold text-[#0F2144] text-sm">{note.clientName}</p>
                  <p className="text-slate-500 mt-0.5">{note.clientRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
