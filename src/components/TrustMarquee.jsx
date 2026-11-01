import React, { useRef } from 'react';
import { AwardIcon } from './Icons';

export default function TrustMarquee() {
  const scrollRef = useRef(null);

  const partners = [
    { name: 'Liên đoàn Luật sư Việt Nam', sub: 'Vietnam Bar Federation', badge: 'VBF' },
    { name: 'Trọng tài Quốc tế Việt Nam', sub: 'Vietnam Intl Arbitration Centre', badge: 'VIAC' },
    { name: 'Đoàn Luật sư TP. Hà Nội', sub: 'Hanoi Bar Association', badge: 'HBA' },
    { name: 'Đoàn Luật sư TP. Hồ Chí Minh', sub: 'HCMC Bar Association', badge: 'HCMBA' },
    { name: 'Phòng Thương mại & Công nghiệp', sub: 'VCCI Vietnam', badge: 'VCCI' },
    { name: 'Hiệp hội Ngân hàng Việt Nam', sub: 'Vietnam Banks Association', badge: 'VNBA' },
    { name: 'Trung tâm Hòa giải Thương mại', sub: 'Vietnam Mediation Centre', badge: 'VMC' },
  ];

  return (
    <section className="py-8 bg-[#F8F9FA] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-2 mb-4 text-left">
          <AwardIcon className="w-4 h-4 text-slate-500" />
          <h2 className="text-xs font-semibold text-slate-500">
            Cơ quan tài phán, Hiệp hội pháp lý và Định chế đối tác
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`${partner.badge}-${index}`}
              className="flex-shrink-0 w-52 bg-white rounded-lg border border-slate-200 p-3 flex items-center gap-3 select-none"
            >
              <div className="w-8 h-8 rounded bg-slate-100 text-slate-800 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">
                {partner.badge}
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs font-bold text-slate-900 truncate">
                  {partner.name}
                </p>
                <p className="text-[10px] text-slate-500 truncate">
                  {partner.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
