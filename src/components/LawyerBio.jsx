import React from 'react';
import { CheckCircleIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function LawyerBio() {
  const { t } = useLanguage();
  const bio = t.lawyerBio;

  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="luat-su" className="py-20 sm:py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="ve-chung-toi" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Thông tin Luật sư sáng lập (Không đóng khung thẻ) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="border-b border-slate-200/80 pb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">
                {bio.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2144]">
                {bio.name}
              </h3>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                {bio.degree}
              </p>
            </div>

            <blockquote className="text-sm text-slate-700 italic border-l-2 border-[#0F2144] pl-4 py-1 leading-relaxed">
              {bio.quote}
            </blockquote>

            <div className="space-y-2.5 text-xs text-slate-600 pt-2">
              {bio.creds.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#0F2144] flex-shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#142859] transition-all shadow-sm"
              >
                <span>{bio.contactBtn}</span>
                <span className="ml-2">&rarr;</span>
              </button>
            </div>

          </div>

          {/* Cột phải: Giá trị cốt lõi và Tôn chỉ hành nghề (Mục lục mở) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              {bio.principlesEyebrow}
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
              {bio.principlesTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {bio.principlesBody}
            </p>

            {/* Ba nguyên tắc thực thi thanh lịch */}
            <div className="space-y-5 pt-4">
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold text-slate-400 font-mono">01</span>
                  <h4 className="text-sm font-bold text-[#0F2144]">
                    {bio.p1Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {bio.p1Desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold text-slate-400 font-mono">02</span>
                  <h4 className="text-sm font-bold text-[#0F2144]">
                    {bio.p2Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {bio.p2Desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold text-slate-400 font-mono">03</span>
                  <h4 className="text-sm font-bold text-[#0F2144]">
                    {bio.p3Title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {bio.p3Desc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
