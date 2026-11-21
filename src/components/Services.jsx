import React from 'react';
import {
  BriefcaseIcon,
  FileTextIcon,
  HeartHandshakeIcon,
  LandmarkIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import CaseWorkflowTimeline from './CaseWorkflowTimeline';

const ICON_MAP = {
  litigation: ScaleIcon,
  'real-estate': LandmarkIcon,
  inheritance: FileTextIcon,
  contract: BriefcaseIcon,
  family: HeartHandshakeIcon,
  tort: ShieldCheckIcon,
};

function PracticeAreaCard({ item, isLeft }) {
  const Icon = ICON_MAP[item.id] || ScaleIcon;
  const [cardRef, isVisible] = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

  return (
    <article
      ref={cardRef}
      className={`rounded-[20px] md:rounded-[22px] bg-white p-5 md:p-8 border border-slate-200/70 shadow-[0_2px_16px_rgba(15,33,68,0.04)] flex flex-col text-left transition-all duration-700 ease-out transform motion-reduce:transition-none ${
        !isLeft ? 'md:delay-100 motion-reduce:delay-0' : ''
      } ${
        isVisible
          ? 'opacity-100 translate-y-0 md:translate-x-0 scale-100'
          : `opacity-0 translate-y-8 scale-[0.98] ${isLeft ? 'md:-translate-x-8' : 'md:translate-x-8'}`
      }`}
    >
      <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto] items-start gap-x-3 md:gap-x-4 gap-y-2 md:gap-y-5">
        <div className="col-start-1 row-start-1 w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-[#0F2144]/5 border border-[#0F2144]/10 text-[#0F2144] flex items-center justify-center shrink-0">
          <Icon className="w-[18px] h-[18px] md:w-5 md:h-5" />
        </div>

        <h3 className="col-start-2 row-start-1 md:col-[1/-1] md:row-start-2 self-center md:self-auto text-base sm:text-lg md:text-xl font-bold text-[#0F2144] leading-snug tracking-tight">
          {item.title}
        </h3>

        <span className="col-start-3 row-start-1 md:col-start-2 md:row-start-1 justify-self-end pt-1 md:pt-0 font-mono tabular-nums text-xs font-bold text-slate-400">
          {item.num}
        </span>
      </div>

      <p className="mt-3 md:mt-2.5 text-[13.5px] sm:text-sm text-slate-600 leading-relaxed">
        {item.shortDesc}
      </p>
    </article>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const servicesText = t.services;

  return (
    <section id="linh-vuc" className="border-b border-slate-200/80 overflow-x-clip">
      {/* Apple-style Spaced Blocks (Mobile Compact Stack, 2x3 Desktop Grid) */}
      <div className="bg-[#F5F5F7] py-12 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14">
            <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-[0.2em]">
              {servicesText.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.3]">
              {servicesText.title}
            </h2>
            <p className="mt-3 sm:mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {servicesText.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {servicesText.items.map((item, idx) => (
              <PracticeAreaCard key={item.id} item={item} isLeft={idx % 2 === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Quy trình tiếp nhận & giải quyết vụ việc trên nền trắng tách biệt */}
      <div className="bg-white py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseWorkflowTimeline />
        </div>
      </div>
    </section>
  );
}
