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
import CaseWorkflowTimeline from './CaseWorkflowTimeline';

const ICON_MAP = {
  litigation: ScaleIcon,
  'real-estate': LandmarkIcon,
  inheritance: FileTextIcon,
  contract: BriefcaseIcon,
  family: HeartHandshakeIcon,
  tort: ShieldCheckIcon,
};

export default function Services() {
  const { t } = useLanguage();
  const servicesText = t.services;

  return (
    <section id="linh-vuc" className="border-b border-slate-200/80 overflow-x-clip">
      {/* Apple-style Spaced Blocks (2x3 Desktop Grid, Horizontal Snap on Mobile) */}
      <div className="bg-[#F5F5F7] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-[0.2em]">
              {servicesText.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.3]">
              {servicesText.title}
            </h2>
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {servicesText.desc}
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scroll-pl-4 [&>article:last-child]:mr-4 md:[&>article:last-child]:mr-0">
            {servicesText.items.map((item) => {
              const Icon = ICON_MAP[item.id] || ScaleIcon;
              return (
                <article
                  key={item.id}
                  className="shrink-0 w-[83vw] max-w-[360px] md:w-auto md:max-w-none snap-start rounded-[22px] bg-white p-6 sm:p-8 border border-slate-200/70 shadow-[0_2px_16px_rgba(15,33,68,0.04)] flex flex-col text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0F2144]/5 border border-[#0F2144]/10 text-[#0F2144] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono tabular-nums text-xs font-bold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#0F2144] leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </article>
              );
            })}
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
