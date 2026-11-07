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

// Bảng màu sắc tương ứng cho từng lĩnh vực chuyên môn
export const PRACTICE_COLOR_MAP = {
  litigation: {
    color: '#1E3A8A', // Xanh dương đậm / Tranh tụng Tòa án
    activeColor: '#2563EB', // Sapphire Blue
    glowColor: 'rgba(37, 99, 235, 0.45)',
    gradStart: '#1E3A8A',
    gradEnd: '#1D4ED8',
    activeGradStart: '#2563EB',
    activeGradEnd: '#3B82F6',
    numberColor: '#BFDBFE',
    accentColor: '#93C5FD',
  },
  'real-estate': {
    color: '#166534', // Xanh lá cây / Đất đai & Bất động sản
    activeColor: '#059669', // Emerald Green
    glowColor: 'rgba(5, 150, 105, 0.45)',
    gradStart: '#14532D',
    gradEnd: '#166534',
    activeGradStart: '#047857',
    activeGradEnd: '#10B981',
    numberColor: '#BBF7D0',
    accentColor: '#86EFAC',
  },
  inheritance: {
    color: '#92400E', // Vàng hổ phách / Thừa kế & Di sản
    activeColor: '#D97706', // Vibrant Amber Gold
    glowColor: 'rgba(217, 119, 6, 0.45)',
    gradStart: '#78350F',
    gradEnd: '#92400E',
    activeGradStart: '#B45309',
    activeGradEnd: '#F59E0B',
    numberColor: '#FDE68A',
    accentColor: '#FCD34D',
  },
  contract: {
    color: '#3730A3', // Tím than Indigo / Hợp đồng Dân sự
    activeColor: '#4F46E5', // Vibrant Indigo
    glowColor: 'rgba(79, 70, 229, 0.45)',
    gradStart: '#312E81',
    gradEnd: '#3730A3',
    activeGradStart: '#4338CA',
    activeGradEnd: '#6366F1',
    numberColor: '#C7D2FE',
    accentColor: '#A5B4FC',
  },
  family: {
    color: '#9F1239', // Đỏ hồng Ruby / Hôn nhân & Gia đình
    activeColor: '#E11D48', // Vibrant Rose Ruby
    glowColor: 'rgba(225, 29, 72, 0.45)',
    gradStart: '#881337',
    gradEnd: '#9F1239',
    activeGradStart: '#BE123C',
    activeGradEnd: '#F43F5E',
    numberColor: '#FECDD3',
    accentColor: '#FDA4AF',
  },
  tort: {
    color: '#115E59', // Xanh mòng két Teal / Bồi thường Dân sự
    activeColor: '#0D9488', // Vibrant Teal Aqua
    glowColor: 'rgba(13, 148, 136, 0.45)',
    gradStart: '#134E4A',
    gradEnd: '#115E59',
    activeGradStart: '#0F766E',
    activeGradEnd: '#14B8A6',
    numberColor: '#A5F3FC',
    accentColor: '#5EEAD4',
  },
  // Fallbacks backwards compatibility
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

// Mảng mặc định cho backwards-compatibility
export const PRACTICE_AREAS = TRANSLATIONS.vi.services.items.map((item) => ({
  ...item,
  icon: ICON_MAP[item.id] || ScaleIcon,
  ...(PRACTICE_COLOR_MAP[item.id] || PRACTICE_COLOR_MAP.litigation),
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
    ...(PRACTICE_COLOR_MAP[item.id] || PRACTICE_COLOR_MAP.litigation),
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

  const cx = 200;
  const cy = 200;
  const baseInnerRadius = 104;
  const baseOuterRadius = 172;

  const handleSliceClick = (item) => {
    setSelectedServiceForModal(item);
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
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <defs>
                {practiceAreas.map((item) => (
                  <React.Fragment key={item.id}>
                    {/* Gradient trạng thái nghỉ */}
                    <linearGradient id={`slice-grad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={item.gradStart} />
                      <stop offset="100%" stopColor={item.gradEnd} />
                    </linearGradient>

                    {/* Gradient rực rỡ khi hover/active */}
                    <linearGradient id={`slice-grad-active-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={item.activeGradStart} />
                      <stop offset="100%" stopColor={item.activeGradEnd} />
                    </linearGradient>

                    {/* Bộ lọc bóng đổ theo màu sắc đặc trưng */}
                    <filter id={`slice-glow-${item.id}`} x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor={item.glowColor} />
                    </filter>
                  </React.Fragment>
                ))}
              </defs>

              {/* Vòng bezel định vị thanh mảnh phong cách đồng hồ Thụy Sỹ */}
              <circle cx={cx} cy={cy} r={baseOuterRadius + 10} fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 4" opacity="0.8" />
              <circle cx={cx} cy={cy} r={baseOuterRadius + 4} fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6" />
              <circle cx={cx} cy={cy} r={baseInnerRadius - 5} fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6" />

              {/* 6 mảnh ghép phân khúc vòm kiến trúc tối giản */}
              {practiceAreas.map((item, i) => {
                const isSliceActive = hoveredIndex === i;

                // Góc bắt đầu và kết thúc với khe hở thanh mảnh 1.2 độ
                const startAngle = i * 60 + 1.2;
                const endAngle = (i + 1) * 60 - 1.2;
                const midAngle = i * 60 + 30;

                // Độ dịch chuyển nhẹ ra ngoài khi active (7px)
                const offsetDistance = isSliceActive ? 7 : 0;
                const offsetAngleRad = ((midAngle - 90) * Math.PI) / 180.0;
                const tx = Math.cos(offsetAngleRad) * offsetDistance;
                const ty = Math.sin(offsetAngleRad) * offsetDistance;

                // Vị trí nhãn cố định tương đối với mảnh ghép
                const labelRadius = (baseInnerRadius + baseOuterRadius) / 2;
                const labelPos = polarToCartesian(cx, cy, labelRadius, midAngle);

                // Đường vẽ mảnh ghép visual với bán kính cố định
                const slicePath = describeDonutSlice(cx, cy, baseInnerRadius, baseOuterRadius, startAngle, endAngle);

                // Vùng nhận tương tác chuột tĩnh (Hit Area) - bao trọn cả khi di chuyển, không bao giờ xê dịch -> triệt tiêu hoàn toàn hiện tượng rung/nhấp nháy ở mép
                const hitPath = describeDonutSlice(cx, cy, baseInnerRadius - 6, baseOuterRadius + 14, i * 60, (i + 1) * 60);

                return (
                  <g key={item.id} className="relative">
                    {/* Lớp hiển thị trực quan (visual) - pointer-events-none để không bao giờ bị văng chuột khi chuyển động */}
                    <g
                      className="pointer-events-none select-none transition-transform duration-300 ease-out"
                      transform={`translate(${tx.toFixed(2)}, ${ty.toFixed(2)})`}
                    >
                      {/* Bề mặt mảnh ghép: Nền màu đặc trưng tương ứng từng lĩnh vực */}
                      <path
                        d={slicePath}
                        fill={isSliceActive ? `url(#slice-grad-active-${item.id})` : `url(#slice-grad-${item.id})`}
                        filter={isSliceActive ? `url(#slice-glow-${item.id})` : 'none'}
                        stroke="#FFFFFF"
                        strokeWidth={isSliceActive ? '2.5' : '2'}
                        className="transition-all duration-300 ease-out"
                      />

                      {/* Nội dung nhãn chuyên môn trên mảnh ghép */}
                      <g transform={`translate(${labelPos.x.toFixed(2)}, ${labelPos.y.toFixed(2)})`}>
                        {/* Số thứ tự phân khúc tinh giản (01 - 06) */}
                        <text
                          textAnchor="middle"
                          y={-14}
                          fill={isSliceActive ? '#FFFFFF' : item.numberColor}
                          fontSize="9.5"
                          fontWeight="800"
                          letterSpacing="1px"
                          className="transition-colors duration-300 font-mono"
                        >
                          {item.num}
                        </text>

                        {/* Tiêu đề dòng 1 */}
                        <text
                          textAnchor="middle"
                          y={0}
                          fill="#FFFFFF"
                          fontSize={isSliceActive ? '11' : '10.5'}
                          fontWeight="700"
                          letterSpacing="0.2px"
                          className="transition-all duration-300 font-sans"
                        >
                          {item.sliceLines[0]}
                        </text>

                        {/* Tiêu đề dòng 2 */}
                        <text
                          textAnchor="middle"
                          y={14}
                          fill="rgba(255, 255, 255, 0.94)"
                          fontSize={isSliceActive ? '10' : '9.5'}
                          fontWeight="600"
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
                            fill="#FFFFFF"
                            className="animate-pulse"
                          />
                        )}
                      </g>
                    </g>

                    {/* Vùng cảm ứng chuột tĩnh (Hit Target) cố định, không di chuyển theo hover */}
                    <path
                      d={hitPath}
                      fill="transparent"
                      style={{ pointerEvents: 'all' }}
                      className="cursor-pointer"
                      onClick={() => handleSliceClick(item)}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex((prev) => (prev === i ? null : prev))}
                    />
                  </g>
                );
              })}
            </svg>
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
              {/* Dải viền đỉnh thẻ mang màu sắc tương ứng của lĩnh vực */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 transition-colors"
                style={{ backgroundColor: selectedServiceForModal.activeColor || '#0F2144' }}
              />

              {/* Header thẻ chi tiết (Cố định ở trên) */}
              <div className="flex items-start justify-between gap-4 mb-3 pr-10 flex-shrink-0">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-semibold uppercase mb-1.5 border tracking-wider transition-colors"
                    style={{
                      backgroundColor: `${selectedServiceForModal.activeColor || '#0F2144'}15`,
                      borderColor: `${selectedServiceForModal.activeColor || '#0F2144'}35`,
                      color: selectedServiceForModal.activeColor || '#0F2144',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: selectedServiceForModal.activeColor || '#0F2144' }}
                    />
                    <span>{servicesText.modalTag} &bull; {selectedServiceForModal.num}</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#0F2144] tracking-tight leading-snug">
                    {selectedServiceForModal.title}
                  </h3>
                </div>

                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-sm transition-colors"
                  style={{ backgroundColor: selectedServiceForModal.color || '#0F2144' }}
                >
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
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors"
                          style={{ backgroundColor: selectedServiceForModal.activeColor || '#0F2144' }}
                        />
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
                  className="w-full sm:w-auto order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition-all shadow-sm hover:opacity-95"
                  style={{ backgroundColor: selectedServiceForModal.color || '#0F2144' }}
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
