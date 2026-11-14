import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LocationSection() {
  const { t, lang } = useLanguage();
  const location = t.location;
  const [activeId, setActiveId] = useState('hcm');

  const offices = location?.offices || [];
  const activeOffice = offices.find((o) => o.id === activeId) || offices[0];
  if (!activeOffice) return null;

  const encodedQuery = encodeURIComponent(activeOffice.mapQuery);
  const embedUrl = `https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s${encodedQuery}&hl=${lang === 'en' ? 'en' : 'vi'}&z=16`;
  const externalMapUrl =
    activeOffice.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;

  return (
    <section id="dia-diem" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#0F2144] mb-8 sm:mb-10">
          {location.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 border border-slate-200/80 shadow-[0_8px_30px_rgba(15,33,68,0.06)] bg-white overflow-hidden">
          {/* Cột thông tin văn phòng nền Navy đậm chuẩn editorial */}
          <div className="md:col-span-5 lg:col-span-4 bg-[#07192E] text-white p-8 sm:p-10 lg:px-11 lg:py-12 flex flex-col justify-between text-left">
            <div>
              {offices.length > 1 && (
                <div
                  className="flex items-center gap-6 border-b border-white/15 pb-3 mb-7"
                  role="tablist"
                  aria-label={location.heading}
                >
                  {offices.map((office) => {
                    const isSelected = office.id === activeOffice.id;
                    return (
                      <button
                        key={office.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActiveId(office.id)}
                        className={`relative pb-1 text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                          isSelected
                            ? 'text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {office.tabLabel}
                        {isSelected && (
                          <span className="absolute left-0 right-0 -bottom-[13px] h-[2px] bg-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight mb-4">
                {activeOffice.city}
              </h3>

              {activeOffice.role && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">
                  {activeOffice.role}
                </p>
              )}

              <div className="space-y-0.5 text-sm sm:text-[15px] text-slate-200/95 leading-[1.75]">
                {activeOffice.lines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              <p className="mt-6 text-sm sm:text-[15px] text-slate-200/95">
                <span>{location.voiceLabel} </span>
                <a
                  href={`tel:${activeOffice.tel}`}
                  className="hover:text-white transition-colors"
                >
                  {activeOffice.phone}
                </a>
              </p>
            </div>

            <div className="mt-8 pt-2">
              <a
                href={externalMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-white hover:text-amber-300 transition-colors group"
              >
                <span>{location.openMaps}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Cột bản đồ Google Maps tương tác */}
          <div className="md:col-span-7 lg:col-span-8 min-h-[340px] sm:min-h-[380px] md:min-h-[420px] relative bg-slate-100">
            <iframe
              key={`${activeOffice.id}-${lang}`}
              title={`${location.heading} - ${activeOffice.city}`}
              src={embedUrl}
              className="w-full h-full min-h-[340px] sm:min-h-[380px] md:min-h-[420px] border-0 block saturate-[0.78] contrast-[1.03]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
