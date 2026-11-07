import React, { useEffect } from 'react';
import { PhoneIcon, CheckCircleIcon, ShieldCheckIcon, ZaloIcon } from './Icons';
import { ICON_MAP } from './Services';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

export default function ServiceDetailPage({ serviceId, onBack, onSelectService }) {
  const { lang, setLang, t } = useLanguage();
  const detail = t.detailPage;
  const items = t.services.items;

  const service = items.find((s) => s.id === serviceId) || items[0];
  const Icon = ICON_MAP[service.id] || CheckCircleIcon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* 1. Header & Navigation Bar chuẩn như ảnh 2 */}
      <Navbar />

      {/* Main Content của trang chuyên môn */}
      <main className="flex-grow">
        
        {/* Hero Banner lĩnh vực */}
        <section className="bg-[#FAF9F6] border-b border-slate-200 py-14 sm:py-20 text-left">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Tag chuyên môn */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold uppercase mb-4 border tracking-wider bg-[#0F2144]/5 border-[#0F2144]/20 text-[#0F2144]">
              <span className="w-2 h-2 rounded-full bg-[#0F2144]"></span>
              <span>{detail.tag} &bull; {service.num}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2144] tracking-tight leading-[1.25] mb-4">
                  {service.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                  {service.shortDesc}
                </p>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#0F2144] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Thông số tóm tắt nhanh */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
              <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                <span className="text-slate-500 block mb-0.5 font-semibold uppercase">{detail.leadCounsel}</span>
                <strong className="text-[#0F2144]">{detail.leadName}</strong>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                <span className="text-slate-500 block mb-0.5 font-semibold uppercase">{detail.responseTime}</span>
                <strong className="text-[#0F2144]">{detail.responseValue}</strong>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                <span className="text-slate-500 block mb-0.5 font-semibold uppercase">{detail.confidentiality}</span>
                <strong className="text-[#0F2144]">{detail.confidentialityValue}</strong>
              </div>
            </div>

          </div>
        </section>

        {/* Khối Căn cứ pháp lý & Phạm vi giải quyết */}
        <section className="py-14 sm:py-16 text-left border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Căn cứ pháp lý */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                {detail.legalFramework}
              </p>
              <h2 className="text-2xl font-bold text-[#0F2144] tracking-tight mb-4">
                {detail.legalTitle}
              </h2>
              <div className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200 text-sm text-slate-700 leading-relaxed">
                {service.basis}
              </div>
            </div>

            {/* Phạm vi giải quyết trọng tâm */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                {detail.scopeEyebrow}
              </p>
              <h2 className="text-2xl font-bold text-[#0F2144] tracking-tight mb-4">
                {detail.scopeTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.scope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-sm hover:border-slate-300 transition-colors"
                  >
                    <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#0F2144]" />
                    <span className="text-sm text-slate-700 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quy trình thực thi 4 bước chuẩn mực */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                {detail.processEyebrow}
              </p>
              <h2 className="text-2xl font-bold text-[#0F2144] tracking-tight mb-4">
                {detail.processTitle}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#FAF9F6] border border-slate-200 flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold uppercase mb-2 block tracking-wider text-[#0F2144] font-mono">
                      {detail.stage} {idx + 1}
                    </span>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Kết quả bàn giao */}
            <div className="p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 flex items-start gap-4">
              <ShieldCheckIcon className="w-6 h-6 flex-shrink-0 mt-0.5 text-emerald-600" />
              <div>
                <h4 className="text-sm font-bold text-[#0F2144] uppercase tracking-wider mb-1 font-mono">
                  {detail.deliverableEyebrow}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {service.deliverables}
                </p>
              </div>
            </div>

            {/* Khối kết nối trực tiếp với Luật sư */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0F2144] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-white">
                  {detail.consultCardTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  {detail.consultCardDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <a
                  href="#/lien-he"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white text-[#0F2144] border border-[#0F2144]/30 hover:bg-slate-50 font-semibold text-xs transition-colors"
                >
                  <span>{lang === 'vi' ? 'Đặt lịch tư vấn' : 'Consultation Form'}</span>
                </a>
                <a
                  href="tel:0988886447"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-amber-400 text-slate-950 hover:bg-amber-300 font-semibold text-xs transition-colors"
                >
                  <PhoneIcon className="w-4 h-4 text-slate-950" />
                  <span>{detail.callBtn}</span>
                </a>
                <a
                  href="https://zalo.me/0988886447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#0068FF] text-white hover:bg-blue-600 font-semibold text-xs transition-colors"
                >
                  <ZaloIcon className="w-4 h-4" />
                  <span>{detail.zaloBtn}</span>
                </a>
              </div>
            </div>

            {/* Danh sách 5 lĩnh vực còn lại để duyệt tiếp */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 font-mono">
                {detail.otherPractices}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {items.filter((s) => s.id !== service.id).map((s) => (
                  <button
                    key={s.id}
                    onClick={() => onSelectService(s.id)}
                    className="p-3 rounded-lg border border-slate-200 bg-[#FAF9F6] hover:bg-white text-left transition-all flex items-center gap-2.5"
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#0F2144]" />
                    <span className="text-xs font-semibold text-slate-800 line-clamp-1 block">
                      {s.shortName}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Nút quay lại trang chủ cuối trang */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-6 py-3 rounded border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
              >
                <span>&larr;</span>
                <span>{detail.back}</span>
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Footer chuẩn mực Cravath */}
      <Footer />

    </div>
  );
}
