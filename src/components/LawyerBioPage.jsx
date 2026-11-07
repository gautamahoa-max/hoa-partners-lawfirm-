import React, { useEffect } from 'react';
import { PhoneIcon, CheckCircleIcon, ShieldCheckIcon, ZaloIcon, ScaleIcon } from './Icons';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

export default function LawyerBioPage({ onBack }) {
  const { lang, setLang, t } = useLanguage();
  const bio = t.lawyerBio;
  const detail = t.detailPage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* 1. Header & Navigation Bar chuẩn như ảnh 2 */}
      <Navbar />

      {/* Main Content trang Luật sư điều hành */}
      <main className="flex-grow">
        
        {/* Hero Banner trang trọng */}
        <section className="bg-[#FAF9F6] border-b border-slate-200 py-14 sm:py-20 text-left">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold uppercase mb-4 border tracking-wider bg-[#0F2144]/5 border-[#0F2144]/20 text-[#0F2144]">
              <span className="w-2 h-2 rounded-full bg-[#0F2144]"></span>
              <span>{bio.badge}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2144] tracking-tight leading-tight">
                  {bio.name}
                </h1>
                <p className="mt-2 text-sm sm:text-base font-semibold text-slate-500">
                  {bio.degree}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:0988886447"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-semibold text-white bg-[#0F2144] hover:bg-[#162C5B] transition-all shadow-sm"
                >
                  <PhoneIcon className="w-4 h-4 text-amber-400" />
                  <span>{detail.callBtn}</span>
                </a>
                <a
                  href="https://zalo.me/0988886447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded text-xs font-semibold text-[#0F2144] bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  <ZaloIcon className="w-4 h-4 text-[#0068FF]" />
                  <span>{detail.zaloBtn}</span>
                </a>
              </div>
            </div>

            {/* Trích dẫn triết lý hành nghề */}
            <blockquote className="mt-8 text-sm sm:text-base text-slate-700 italic border-l-3 border-[#0F2144] pl-5 py-2 leading-relaxed bg-white/70 rounded-r-lg border border-slate-200/60">
              {bio.quote}
            </blockquote>

          </div>
        </section>

        {/* Nội dung chi tiết: Năng lực chuyên môn & Tôn chỉ hành nghề */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200 text-left">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Cột trái: Thông tin Năng lực & Chứng chỉ hành nghề */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                    {lang === 'vi' ? 'TƯ CÁCH & KINH NGHIỆM' : 'CREDENTIALS & EXPERIENCE'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F2144]">
                    {lang === 'vi' ? 'Hồ sơ năng lực chuyên môn' : 'Professional Profile'}
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                  {bio.creds.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#FAF9F6] border border-slate-200/80">
                      <CheckCircleIcon className="w-4 h-4 text-[#0F2144] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Cam kết bảo mật & trách nhiệm */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F2144] uppercase tracking-wider">
                    <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                    <span>{detail.confidentiality}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {detail.confidentialityValue}
                  </p>
                </div>
              </div>

              {/* Cột phải: Giá trị cốt lõi và 3 Nguyên tắc thực thi */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono block mb-2">
                    {bio.principlesEyebrow}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2144] tracking-tight leading-snug">
                    {bio.principlesTitle}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {bio.principlesBody}
                </p>

                {/* Ba nguyên tắc thực thi chi tiết */}
                <div className="space-y-6 pt-4">
                  <div className="p-5 rounded-xl border border-slate-200 bg-[#FAF9F6] hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 font-mono px-2 py-0.5 rounded bg-white border border-slate-200">
                        01
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F2144]">
                        {bio.p1Title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      {bio.p1Desc}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-200 bg-[#FAF9F6] hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 font-mono px-2 py-0.5 rounded bg-white border border-slate-200">
                        02
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F2144]">
                        {bio.p2Title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      {bio.p2Desc}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl border border-slate-200 bg-[#FAF9F6] hover:border-slate-300 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-slate-400 font-mono px-2 py-0.5 rounded bg-white border border-slate-200">
                        03
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F2144]">
                        {bio.p3Title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      {bio.p3Desc}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Khung Liên Hệ Tham Vấn 24/7 */}
        <section className="py-14 sm:py-16 bg-[#FAF9F6] border-b border-slate-200 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F2144] mb-3">
              {detail.consultCardTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              {detail.consultCardDesc}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:0988886447"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-xs font-semibold text-white bg-[#0F2144] hover:bg-[#162C5B] transition-all shadow-sm"
              >
                <PhoneIcon className="w-4 h-4 text-amber-400" />
                <span>{detail.callBtn}</span>
              </a>
              <a
                href="https://zalo.me/0988886447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-xs font-semibold text-[#0F2144] bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
              >
                <ZaloIcon className="w-4 h-4 text-[#0068FF]" />
                <span>{detail.zaloBtn}</span>
              </a>
              <a
                href="#/lien-he"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-xs font-semibold text-[#0F2144] bg-white border border-[#0F2144]/30 hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>{lang === 'vi' ? 'Điền Form Đặt Lịch Hẹn' : 'Submit Consultation Form'} &rarr;</span>
              </a>
              <button
                onClick={onBack}
                className="inline-flex items-center justify-center px-6 py-3 rounded text-xs font-semibold text-slate-600 hover:text-[#0F2144] transition-colors"
              >
                &larr; {detail.back}
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer & Floating Contact */}
      <Footer />
      <FloatingContact />

    </div>
  );
}
