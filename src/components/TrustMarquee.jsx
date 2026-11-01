import React, { useRef } from 'react';
import { AwardIcon } from './Icons';

export default function TrustMarquee() {
  const scrollRef = useRef(null);

  const partners = [
    { name: 'Liên Đoàn Luật Sư VN', sub: 'Vietnam Bar Federation', badge: 'VBF' },
    { name: 'Trọng Tài Quốc Tế', sub: 'Vietnam Intl Arbitration', badge: 'VIAC' },
    { name: 'Đoàn Luật Sư Hà Nội', sub: 'Hanoi Bar Association', badge: 'HBA' },
    { name: 'Đoàn Luật Sư TP.HCM', sub: 'HCMC Bar Association', badge: 'HCMBA' },
    { name: 'Phòng TM & CN VN', sub: 'Vietnam Chamber of Comm.', badge: 'VCCI' },
    { name: 'Hiệp Hội Ngân Hàng', sub: 'Vietnam Banks Assoc.', badge: 'VNBA' },
    { name: 'Trung Tâm Hòa Giải', sub: 'Vietnam Mediation Centre', badge: 'VMC' },
    { name: 'Hiệp Hội Bất Động Sản', sub: 'Real Estate Association', badge: 'VNREA' },
  ];

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 md:py-10 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề ngắn gọn */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <AwardIcon className="w-5 h-5 text-amber-600" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">
              Chứng Nhận Hành Nghề, Hiệp Hội Pháp Lý &amp; Đối Tác Trọng Tài
            </h2>
          </div>

          {/* Cặp nút điều hướng cuộn tay */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={() => handleScroll('left')}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Cuộn sang trái"
            >
              &larr;
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Cuộn sang phải"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Thanh băng chuyền kết hợp cuộn tự động & cảm ứng touch */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          {partners.concat(partners).map((partner, index) => (
            <div
              key={`${partner.badge}-${index}`}
              className="flex-shrink-0 w-44 sm:w-52 h-18 sm:h-20 bg-white rounded-2xl border border-slate-200/80 shadow-sm p-3.5 flex items-center gap-3 hover:border-amber-300 hover:shadow-md transition-all select-none"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-extrabold text-xs flex items-center justify-center flex-shrink-0 shadow-sm">
                {partner.badge}
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {partner.name}
                </p>
                <p className="text-[11px] text-slate-500 truncate">
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
