import React, { useState, useEffect } from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon, CloseIcon, CheckCircleIcon, HeartHandshakeIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

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

// Mảng mặc định cho backwards-compatibility
export const PRACTICE_AREAS = TRANSLATIONS.vi.services.items.map((item) => ({
  ...item,
  icon: ICON_MAP[item.id] || ScaleIcon,
  activeColor: '#0F2144',
  accentColor: '#C5A880',
}));

// Hàm chuyển đổi tọa độ cực sang Descartes
function polarToCartesian(cx, cy, r, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

// Hàm vẽ cung tròn bánh Donut (Annular Sector)
function describeDonutSlice(cx, cy, rInner, rOuter, startAngle, endAngle) {
  const oStart = polarToCartesian(cx, cy, rOuter, startAngle);
  const oEnd = polarToCartesian(cx, cy, rOuter, endAngle);
  const iStart = polarToCartesian(cx, cy, rInner, startAngle);
  const iEnd = polarToCartesian(cx, cy, rInner, endAngle);

  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', oStart.x.toFixed(2), oStart.y.toFixed(2),
    'A', rOuter, rOuter, 0, arcSweep, 1, oEnd.x.toFixed(2), oEnd.y.toFixed(2),
    'L', iEnd.x.toFixed(2), iEnd.y.toFixed(2),
    'A', rInner, rInner, 0, arcSweep, 0, iStart.x.toFixed(2), iStart.y.toFixed(2),
    'Z',
  ].join(' ');
}

export default function Services({ onNavigateToPage }) {
  const { t } = useLanguage();
  const servicesText = t.services;

  const practiceAreas = servicesText.items.map((item) => ({
    ...item,
    icon: ICON_MAP[item.id] || ScaleIcon,
    activeColor: '#0F2144',
    accentColor: '#C5A880',
  }));

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  // Khóa scroll trang khi mở modal & lắng nghe phím Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedServiceForModal(null);
      }
    };

    if (selectedServiceForModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedServiceForModal]);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;
  const currentService = practiceAreas[activeIndex] || practiceAreas[0];
  const CurrentIcon = currentService.icon;

  const cx = 200;
  const cy = 200;
  const baseInnerRadius = 104;
  const baseOuterRadius = 172;

  const handleSliceClick = (item, index) => {
    const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouch) {
      if (hoveredIndex === index) {
        // Nhấp lần thứ hai vào mảnh đang chọn -> mở popup tóm tắt
        setSelectedServiceForModal(item);
      } else {
        // Nhấp lần đầu trên màn hình cảm ứng -> hiển thị thông tin ở tâm vòng tròn
        setHoveredIndex(index);
      }
    } else {
      // Trên desktop chuột -> mở popup tóm tắt ngay
      setSelectedServiceForModal(item);
    }
  };

  const handleOpenDetailPage = (serviceId) => {
    setSelectedServiceForModal(null);
    if (onNavigateToPage) {
      onNavigateToPage(serviceId);
    }
  };

  return (
    <section id="linh-vuc" className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục chuyên môn tối giản, trang trọng */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold text-slate-500 mb-2.5 uppercase tracking-[0.2em]">
            {servicesText.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
            {servicesText.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {servicesText.desc}
          </p>
        </div>

        {/* ================= BIỂU ĐỒ VÒNG TRÒN TƯƠNG TÁC CAO CẤP ================= */}
        <div className="flex flex-col items-center">
          
          {/* Vòng tròn tương tác 6 phân khúc chuẩn Precision Dial (Monochrome Luxury) */}
          <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center my-2">
            
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full overflow-visible drop-shadow-sm select-none"
            >
              <defs>
                <linearGradient id="luxury-navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F2144" />
                  <stop offset="100%" stopColor="#1B3568" />
                </linearGradient>

                <filter id="luxury-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(15, 33, 68, 0.22)" />
                </filter>
              </defs>

              {/* Vòng bezel định vị thanh mảnh phong cách đồng hồ Thụy Sỹ */}
              <circle cx={cx} cy={cy} r={baseOuterRadius + 10} fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 4" opacity="0.8" />
              <circle cx={cx} cy={cy} r={baseOuterRadius + 4} fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6" />
              <circle cx={cx} cy={cy} r={baseInnerRadius - 5} fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6" />

              {/* 6 mảnh ghép phân khúc vòm kiến trúc tối giản */}
              {practiceAreas.map((item, i) => {
                const isSliceActive = hoveredIndex === i;

                // Góc bắt đầu và kết thúc với khe hở thanh mảnh 1.5 độ
                const startAngle = i * 60 + 1.2;
                const endAngle = (i + 1) * 60 - 1.2;
                const midAngle = i * 60 + 30;

                // Khi active: mở rộng bán kính và đẩy nhẹ tâm ra ngoài
                const rOuter = isSliceActive ? baseOuterRadius + 11 : baseOuterRadius;
                const rInner = isSliceActive ? baseInnerRadius - 2 : baseInnerRadius;

                const offsetDistance = isSliceActive ? 9 : 0;
                const offsetAngleRad = ((midAngle - 90) * Math.PI) / 180.0;
                const tx = Math.cos(offsetAngleRad) * offsetDistance;
                const ty = Math.sin(offsetAngleRad) * offsetDistance;

                const labelRadius = (rInner + rOuter) / 2;
                const labelPos = polarToCartesian(cx, cy, labelRadius, midAngle);

                const slicePath = describeDonutSlice(cx, cy, rInner, rOuter, startAngle, endAngle);

                return (
                  <g
                    key={item.id}
                    className="cursor-pointer transition-all duration-300 ease-out"
                    transform={`translate(${tx.toFixed(2)}, ${ty.toFixed(2)})`}
                    onClick={() => handleSliceClick(item, i)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Bề mặt mảnh ghép: Nền sứ cao cấp khi nghỉ, chuyển Navy Imperial khi active */}
                    <path
                      d={slicePath}
                      fill={isSliceActive ? 'url(#luxury-navy-grad)' : '#F8FAFC'}
                      filter={isSliceActive ? 'url(#luxury-soft-shadow)' : 'none'}
                      stroke={isSliceActive ? '#0F2144' : '#E2E8F0'}
                      strokeWidth={isSliceActive ? '1.5' : '1'}
                      className="transition-all duration-300 ease-out"
                    />

                    {/* Nội dung nhãn chuyên môn trên mảnh ghép */}
                    <g transform={`translate(${labelPos.x.toFixed(2)}, ${labelPos.y.toFixed(2)})`} className="pointer-events-none select-none">
                      
                      {/* Số thứ tự phân khúc tinh giản (01 - 06) */}
                      <text
                        textAnchor="middle"
                        y={-14}
                        fill={isSliceActive ? '#C5A880' : '#94A3B8'}
                        fontSize="9"
                        fontWeight="700"
                        letterSpacing="1px"
                        className="transition-colors duration-300 font-mono"
                      >
                        {item.num}
                      </text>

                      {/* Tiêu đề dòng 1 */}
                      <text
                        textAnchor="middle"
                        y={0}
                        fill={isSliceActive ? '#FFFFFF' : '#0F2144'}
                        fontSize={isSliceActive ? '11' : '10'}
                        fontWeight={isSliceActive ? '700' : '600'}
                        letterSpacing="0.2px"
                        className="transition-all duration-300 font-sans"
                      >
                        {item.sliceLines[0]}
                      </text>

                      {/* Tiêu đề dòng 2 */}
                      <text
                        textAnchor="middle"
                        y={14}
                        fill={isSliceActive ? '#E2E8F0' : '#475569'}
                        fontSize={isSliceActive ? '10' : '9.5'}
                        fontWeight={isSliceActive ? '600' : '500'}
                        letterSpacing="0.2px"
                        className="transition-all duration-300 font-sans"
                      >
                        {item.sliceLines[1]}
                      </text>

                      {/* Điểm nhấn Champagne Gold tinh xảo khi active */}
                      {isSliceActive && (
                        <circle
                          cx={0}
                          cy={24}
                          r={2}
                          fill="#C5A880"
                          className="animate-pulse"
                        />
                      )}
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Trung tâm vòng tròn: Thiết kế Chronometer tối giản */}
            <div
              onClick={() => handleSliceClick(currentService)}
              className="absolute w-[184px] h-[184px] rounded-full bg-white border border-slate-200/90 shadow-[0_12px_32px_-8px_rgba(15,33,68,0.08)] p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-300 transition-all duration-300 group"
              title="Nhấp để xem hồ sơ lĩnh vực"
            >
              {/* Viền hairline trang nhã bên trong */}
              <div className="absolute inset-2 rounded-full border border-slate-100 pointer-events-none" />

              {/* Huy hiệu biểu tượng chuyên môn tối giản */}
              <div className="relative z-10 w-9 h-9 rounded-full bg-[#0F2144]/5 flex items-center justify-center text-[#0F2144] mb-1.5 transition-transform duration-300 group-hover:scale-105">
                <CurrentIcon className="w-4 h-4 text-[#0F2144]" />
              </div>

              {/* Chỉ số thứ tự & Nhãn thể loại */}
              <span className="relative z-10 text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 font-mono">
                {currentService.num} &bull; {servicesText.hubTag}
              </span>

              {/* Tiêu đề lĩnh vực */}
              <h4 className="relative z-10 text-xs sm:text-[13px] font-bold text-[#0F2144] tracking-tight leading-snug px-2 line-clamp-2 mt-0.5">
                {currentService.shortName}
              </h4>

              {/* Nút hành động tinh giản tối đa */}
              <div className="relative z-10 mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F2144] group-hover:text-blue-900 transition-colors">
                <span className="group-hover:underline underline-offset-4">{servicesText.hubAction}</span>
                <span className="text-amber-700 font-bold transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= MODAL HIỂN THỊ THẺ TÓM TẮT KHI NHẤP VÀO 1 MẢNH ================= */}
        {selectedServiceForModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fade-in overflow-y-auto cursor-pointer"
            onClick={() => setSelectedServiceForModal(null)}
            onTouchEnd={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedServiceForModal(null);
              }
            }}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] flex flex-col p-5 sm:p-8 border border-slate-200 shadow-2xl text-left cursor-default my-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dải viền đỉnh thẻ xanh navy sang trọng */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F2144]" />

              {/* Header thẻ chi tiết (Cố định ở trên) */}
              <div className="flex items-start justify-between gap-4 mb-3 pr-10 flex-shrink-0">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-semibold uppercase mb-1.5 border border-slate-200 bg-slate-50 text-slate-700 tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F2144]"></span>
                    <span>{servicesText.modalTag} &bull; {selectedServiceForModal.num}</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#0F2144] tracking-tight leading-snug">
                    {selectedServiceForModal.title}
                  </h3>
                </div>

                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0F2144] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  {React.createElement(selectedServiceForModal.icon, { className: 'w-5 h-5 text-white' })}
                </div>
              </div>

              {/* Nút đóng modal ở góc trên bên phải - Lớn, rõ ràng, dễ chạm trên mobile */}
              <button
                type="button"
                onClick={() => setSelectedServiceForModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-90 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all z-10"
                aria-label={servicesText.modalClose || 'Đóng'}
                title={servicesText.modalClose || 'Đóng'}
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              {/* Nội dung có thể cuộn độc lập trên màn hình nhỏ */}
              <div className="overflow-y-auto overscroll-contain pr-1 -mr-1 space-y-4 my-2 flex-grow">
                {/* Mô tả tóm tắt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedServiceForModal.shortDesc}
                </p>

                {/* Căn cứ pháp lý */}
                <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-slate-200/80 text-xs text-slate-700">
                  <span className="font-bold text-[#0F2144] block mb-1">{servicesText.modalBasis}</span>
                  <span className="text-slate-600 leading-relaxed">{selectedServiceForModal.basis}</span>
                </div>

                {/* Phạm vi giải quyết trọng tâm (4 ô) */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    {servicesText.modalScope}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {selectedServiceForModal.scope.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-slate-200/70">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#0F2144]" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kết quả bàn giao */}
                <div className="text-xs text-slate-500 pt-1">
                  <span>{servicesText.modalDeliverable} </span>
                  <strong className="text-slate-700">{selectedServiceForModal.deliverables}</strong>
                </div>
              </div>

              {/* Footer thanh công cụ ở dưới: Có nút Đóng rõ ràng và nút Xem chi tiết */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedServiceForModal(null)}
                  className="w-full sm:w-auto order-2 sm:order-1 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all text-center"
                >
                  {servicesText.modalClose || 'Đóng lại'}
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenDetailPage(selectedServiceForModal.id)}
                  className="w-full sm:w-auto order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0F2144] hover:bg-[#162C5B] active:scale-95 transition-all shadow-sm"
                >
                  <span>{servicesText.modalAction}</span>
                  <span>&rarr;</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
