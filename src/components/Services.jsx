import React from 'react';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  FileTextIcon,
  GavelIcon,
  HeartHandshakeIcon,
  LandmarkIcon,
  ScaleIcon,
  ShieldCheckIcon,
} from './Icons';
import { useLanguage } from '../context/LanguageContext';
import CaseWorkflowTimeline from './CaseWorkflowTimeline';

export const ICON_MAP = {
  litigation: ScaleIcon,
  'real-estate': LandmarkIcon,
  inheritance: FileTextIcon,
  contract: BriefcaseIcon,
  family: HeartHandshakeIcon,
  tort: ShieldCheckIcon,
  // backwards compatibility
  arbitration: GavelIcon,
  mna: BriefcaseIcon,
  banking: LandmarkIcon,
  corporate: ShieldCheckIcon,
};

// Retained for ServiceDetailPage accent theming across practice detail routes
export const PRACTICE_COLOR_MAP = {
  litigation: {
    color: '#1E3A8A',
    activeColor: '#2563EB',
    glowColor: 'rgba(37, 99, 235, 0.45)',
    gradStart: '#1E3A8A',
    gradEnd: '#1D4ED8',
    activeGradStart: '#2563EB',
    activeGradEnd: '#3B82F6',
    numberColor: '#BFDBFE',
    accentColor: '#93C5FD',
  },
  'real-estate': {
    color: '#166534',
    activeColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.45)',
    gradStart: '#14532D',
    gradEnd: '#166534',
    activeGradStart: '#047857',
    activeGradEnd: '#10B981',
    numberColor: '#BBF7D0',
    accentColor: '#86EFAC',
  },
  inheritance: {
    color: '#92400E',
    activeColor: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.45)',
    gradStart: '#78350F',
    gradEnd: '#92400E',
    activeGradStart: '#B45309',
    activeGradEnd: '#F59E0B',
    numberColor: '#FDE68A',
    accentColor: '#FCD34D',
  },
  contract: {
    color: '#3730A3',
    activeColor: '#4F46E5',
    glowColor: 'rgba(79, 70, 229, 0.45)',
    gradStart: '#312E81',
    gradEnd: '#3730A3',
    activeGradStart: '#4338CA',
    activeGradEnd: '#6366F1',
    numberColor: '#C7D2FE',
    accentColor: '#A5B4FC',
  },
  family: {
    color: '#9F1239',
    activeColor: '#E11D48',
    glowColor: 'rgba(225, 29, 72, 0.45)',
    gradStart: '#881337',
    gradEnd: '#9F1239',
    activeGradStart: '#BE123C',
    activeGradEnd: '#F43F5E',
    numberColor: '#FECDD3',
    accentColor: '#FDA4AF',
  },
  tort: {
    color: '#115E59',
    activeColor: '#0D9488',
    glowColor: 'rgba(13, 148, 136, 0.45)',
    gradStart: '#134E4A',
    gradEnd: '#115E59',
    activeGradStart: '#0F766E',
    activeGradEnd: '#14B8A6',
    numberColor: '#A5F3FC',
    accentColor: '#5EEAD4',
  },
  arbitration: {
    color: '#1E3A8A',
    activeColor: '#2563EB',
    glowColor: 'rgba(37, 99, 235, 0.45)',
    gradStart: '#1E3A8A',
    gradEnd: '#1D4ED8',
    activeGradStart: '#2563EB',
    activeGradEnd: '#3B82F6',
    numberColor: '#BFDBFE',
    accentColor: '#93C5FD',
  },
  mna: {
    color: '#92400E',
    activeColor: '#D97706',
    glowColor: 'rgba(217, 119, 6, 0.45)',
    gradStart: '#78350F',
    gradEnd: '#92400E',
    activeGradStart: '#B45309',
    activeGradEnd: '#F59E0B',
    numberColor: '#FDE68A',
    accentColor: '#FCD34D',
  },
  banking: {
    color: '#115E59',
    activeColor: '#0D9488',
    glowColor: 'rgba(13, 148, 136, 0.45)',
    gradStart: '#134E4A',
    gradEnd: '#115E59',
    activeGradStart: '#0F766E',
    activeGradEnd: '#14B8A6',
    numberColor: '#A5F3FC',
    accentColor: '#5EEAD4',
  },
  corporate: {
    color: '#166534',
    activeColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.45)',
    gradStart: '#14532D',
    gradEnd: '#166534',
    activeGradStart: '#047857',
    activeGradEnd: '#10B981',
    numberColor: '#BBF7D0',
    accentColor: '#86EFAC',
  },
};

export default function Services() {
  const { t, lang } = useLanguage();
  const isEn = lang === 'en';
  const servicesText = t.services;
  const basisLabel = isEn ? 'Legal basis' : 'Căn cứ';
  const actionLabel = isEn ? 'View Practice Profile' : 'Xem hồ sơ năng lực';

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

          <div className="flex md:grid md:grid-cols-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-6 pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scroll-pl-4 [&>a:last-child]:mr-4 md:[&>a:last-child]:mr-0">
            {servicesText.items.map((item) => {
              const Icon = ICON_MAP[item.id] || ScaleIcon;
              return (
                <a
                  key={item.id}
                  href={`#/linh-vuc/${item.id}`}
                  className="group shrink-0 w-[83vw] max-w-[360px] md:w-auto md:max-w-none snap-start rounded-[22px] bg-white p-6 sm:p-8 border border-slate-200/70 shadow-[0_2px_16px_rgba(15,33,68,0.04)] hover:shadow-[0_14px_36px_rgba(15,33,68,0.09)] hover:border-[#0F2144]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2144]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#0F2144]/5 border border-[#0F2144]/10 text-[#0F2144] group-hover:bg-[#0F2144] group-hover:text-amber-300 transition-colors flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono tabular-nums text-xs font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#0F2144] leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      <span className="font-semibold text-[#0F2144]">{basisLabel}: </span>
                      {item.basis}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F2144] group-hover:text-amber-700 min-h-[28px] transition-colors">
                      <span>{actionLabel}</span>
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
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
