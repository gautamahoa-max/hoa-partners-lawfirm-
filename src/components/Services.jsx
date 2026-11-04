import React, { useState } from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon, CloseIcon, CheckCircleIcon } from './Icons';

export const PRACTICE_AREAS = [
  {
    id: 'arbitration',
    title: 'Trọng tài Thương mại Quốc tế',
    shortName: 'Trọng tài Quốc tế',
    sliceLines: ['Trọng tài', 'Quốc tế'],
    shortDesc: 'Đại diện thân chủ trong các vụ kiện trọng tài phức tạp tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC), SIAC (Singapore) và ICC.',
    icon: GavelIcon,
    color: '#1D4789',       // Deep Royal Blue
    activeColor: '#2563EB', // Electric Blue (illuminated)
    glowColor: 'rgba(37, 99, 235, 0.45)',
    details: {
      basis: 'Luật Trọng tài Thương mại 2010, Quy tắc Tố tụng VIAC, Quy tắc SIAC và Công ước New York 1958.',
      scope: [
        'Tranh chấp hợp đồng mua bán hàng hóa, đầu tư quốc tế và chuyển nhượng cổ phần.',
        'Tranh chấp hợp đồng xây dựng quốc tế (FIDIC) và hợp tác liên doanh xuyên biên giới.',
        'Thủ tục áp dụng biện pháp khẩn cấp tạm thời tại Tòa án hỗ trợ tố tụng trọng tài.',
        'Thủ tục công nhận, cho thi hành hoặc hủy bỏ phán quyết trọng tài tại Tòa án có thẩm quyền.',
      ],
      steps: [
        'Bước 1: Nghiên cứu thỏa thuận trọng tài và phân tích thẩm quyền tài phán.',
        'Bước 2: Soạn thảo Bản tự bảo vệ hoặc Đơn khởi kiện trọng tài kèm bảng tổng hợp chứng cứ.',
        'Bước 3: Tham gia chỉ định Trọng tài viên và các phiên đối chất, phiên xử kín.',
        'Bước 4: Nhận phán quyết trọng tài có giá trị chung thẩm và tiến hành thi hành án.',
      ],
      deliverables: 'Chiến lược tố tụng độc quyền, bản luận cứ bảo vệ và đại diện toàn diện tại Hội đồng trọng tài.',
    },
  },
  {
    id: 'litigation',
    title: 'Tranh tụng Tòa án các cấp',
    shortName: 'Tranh tụng Tòa án',
    sliceLines: ['Tranh tụng', 'Tòa án'],
    shortDesc: 'Đại diện bảo vệ quyền lợi hợp pháp của thân chủ tại Tòa án nhân dân sơ thẩm, phúc thẩm và giám đốc thẩm trong các vụ án kinh tế, dân sự và đất đai.',
    icon: ScaleIcon,
    color: '#991B1B',       // Deep Crimson
    activeColor: '#DC2626', // Bright Crimson Red (illuminated)
    glowColor: 'rgba(220, 38, 38, 0.45)',
    details: {
      basis: 'Bộ luật Tố tụng Dân sự 2015, Bộ luật Dân sự 2015, Luật Tố tụng Hành chính 2015.',
      scope: [
        'Tranh chấp hợp đồng kinh tế, vi phạm nghĩa vụ thanh toán và phạt bồi thường.',
        'Tranh chấp nội bộ công ty giữa các nhóm cổ đông và thành viên góp vốn.',
        'Khởi kiện quyết định hành chính thu hồi đất và xử phạt vi phạm hành chính.',
        'Đại diện tham gia các phiên đối chất, tiếp cận công khai chứng cứ và phiên xét xử.',
      ],
      steps: [
        'Bước 1: Tiếp nhận và đánh giá toàn diện chứng cứ ban đầu trong vòng 24 giờ.',
        'Bước 2: Xây dựng bản luận cứ bảo vệ và đơn khởi kiện hoặc đơn phản tố.',
        'Bước 3: Thu thập tài liệu bổ sung từ cơ quan nhà nước có thẩm quyền.',
        'Bước 4: Trực tiếp tranh luận tại phiên tòa và thực hiện thủ tục thi hành án.',
      ],
      deliverables: 'Bản phân tích điểm mạnh - điểm yếu chứng cứ và đại diện tố tụng toàn diện.',
    },
  },
  {
    id: 'mna',
    title: 'Mua bán & Sáp nhập Doanh nghiệp (M&A)',
    shortName: 'Mua bán & Sáp nhập',
    sliceLines: ['Mua bán &', 'Sáp nhập'],
    shortDesc: 'Thẩm định pháp lý (Legal Due Diligence), cấu trúc thương vụ, đàm phán hợp đồng mua bán cổ phần (SPA) và xin chấp thuận tập trung kinh tế.',
    icon: BriefcaseIcon,
    color: '#B45309',       // Deep Bronze Amber
    activeColor: '#F59E0B', // Luminous Gold Amber (illuminated)
    glowColor: 'rgba(245, 158, 11, 0.45)',
    details: {
      basis: 'Luật Doanh nghiệp 2020, Luật Đầu tư 2020, Luật Cạnh tranh 2018.',
      scope: [
        'Báo cáo thẩm định pháp lý toàn diện công ty mục tiêu (Legal Due Diligence Report).',
        'Tư vấn cấu trúc giao dịch: Mua bán tài sản (Asset Deal) hoặc Mua cổ phần (Share Deal).',
        'Soạn thảo Hợp đồng mua bán cổ phần (SPA), Thỏa thuận cổ đông (SHA).',
        'Thủ tục thông báo tập trung kinh tế tại Ủy ban Cạnh tranh Quốc gia.',
      ],
      steps: [
        'Bước 1: Ký thỏa thuận bảo mật (NDA) và thiết lập phòng dữ liệu ảo.',
        'Bước 2: Rà soát toàn bộ tài sản, lao động, hợp đồng, thuế và giấy phép con.',
        'Bước 3: Phát hành báo cáo Red Flag và đàm phán bộ hợp đồng giao dịch.',
        'Bước 4: Hoàn tất chuyển nhượng cổ phần và ghi nhận biến động đăng ký kinh doanh.',
      ],
      deliverables: 'Báo cáo LDD chuyên sâu và bộ hợp đồng M&A song ngữ hoàn chỉnh.',
    },
  },
  {
    id: 'banking',
    title: 'Ngân hàng, Tài chính & Thị trường Vốn',
    shortName: 'Ngân hàng & Tài chính',
    sliceLines: ['Ngân hàng', '& Tài chính'],
    shortDesc: 'Tư vấn pháp lý cho các định chế tài chính, ngân hàng trong các giao dịch tín dụng hợp vốn, phát hành trái phiếu và tài trợ dự án.',
    icon: LandmarkIcon,
    color: '#0F766E',       // Deep Teal
    activeColor: '#0D9488', // Bright Teal / Aqua (illuminated)
    glowColor: 'rgba(13, 148, 136, 0.45)',
    details: {
      basis: 'Luật Các tổ chức tín dụng 2024, Luật Chứng khoán 2019, các thông tư của Ngân hàng Nhà nước.',
      scope: [
        'Hợp đồng tín dụng song phương và hợp đồng tín dụng hợp vốn quốc tế.',
        'Cấu trúc và đăng ký giao dịch bảo đảm tài sản (cầm cố, thế chấp, bảo lãnh).',
        'Tư vấn phát hành trái phiếu doanh nghiệp riêng lẻ và ra công chúng.',
        'Tuân thủ quy định ngoại hối và đăng ký khoản vay nước ngoài tại Ngân hàng Nhà nước.',
      ],
      steps: [
        'Bước 1: Rà soát điều kiện pháp lý bên vay và tài sản bảo đảm.',
        'Bước 2: Soạn thảo hợp đồng tín dụng và hợp đồng bảo đảm theo chuẩn mực quốc tế (LMA).',
        'Bước 3: Đăng ký biện pháp bảo đảm tại Trung tâm đăng ký giao dịch tài sản.',
        'Bước 4: Phát hành Thư ý kiến pháp lý (Legal Opinion) giải ngân.',
      ],
      deliverables: 'Thư ý kiến pháp lý chính thức và bộ hợp đồng tín dụng chuẩn LMA.',
    },
  },
  {
    id: 'real-estate',
    title: 'Bất động sản, Xây dựng & Dự án',
    shortName: 'Bất động sản & Dự án',
    sliceLines: ['Bất động sản', '& Dự án'],
    shortDesc: 'Tư vấn thủ tục chấp thuận chủ trương đầu tư dự án khu đô thị, khu công nghiệp, hợp đồng xây dựng EPC và giải quyết tranh chấp quyền sử dụng đất.',
    icon: FileTextIcon,
    color: '#4338CA',       // Deep Indigo
    activeColor: '#6366F1', // Electric Indigo / Violet (illuminated)
    glowColor: 'rgba(99, 102, 241, 0.45)',
    details: {
      basis: 'Luật Đất đai 2024, Luật Nhà ở 2023, Luật Kinh doanh Bất động sản 2023, Luật Xây dựng.',
      scope: [
        'Thẩm định pháp lý khu đất dự án, quy hoạch sử dụng đất và hồ sơ giải phóng mặt bằng.',
        'Soạn thảo hợp đồng tổng thầu EPC, hợp đồng hợp tác đầu tư và phân phối bất động sản.',
        'Thủ tục cấp Giấy chứng nhận quyền sử dụng đất và chuyển đổi mục đích sử dụng.',
        'Đại diện giải quyết tranh chấp ranh giới đất đai và hợp đồng mua bán nhà ở.',
      ],
      steps: [
        'Bước 1: Tra cứu lịch sử địa chính và tình trạng pháp lý của dự án.',
        'Bước 2: Xây dựng ma trận rủi ro pháp lý theo Luật Đất đai 2024 mới nhất.',
        'Bước 3: Soạn thảo hoặc rà soát hợp đồng chuyển nhượng dự án hoặc hợp đồng xây dựng.',
        'Bước 4: Hỗ trợ đàm phán và hoàn tất thủ tục bàn giao thực địa.',
      ],
      deliverables: 'Bản ý kiến pháp lý dự án và bộ hợp đồng giao dịch bất động sản an toàn.',
    },
  },
  {
    id: 'corporate',
    title: 'Pháp chế Doanh nghiệp thường xuyên',
    shortName: 'Pháp chế Doanh nghiệp',
    sliceLines: ['Pháp chế', 'Doanh nghiệp'],
    shortDesc: 'Cố vấn pháp luật nội bộ trọn gói cho doanh nghiệp: rà soát hợp đồng hàng ngày, quy chế lao động, bảo vệ dữ liệu và giải quyết bất đồng nội bộ.',
    icon: ShieldCheckIcon,
    color: '#065F46',       // Deep Forest Emerald
    activeColor: '#10B981', // Bright Emerald Green (illuminated)
    glowColor: 'rgba(16, 185, 129, 0.45)',
    details: {
      basis: 'Luật Doanh nghiệp 2020, Bộ luật Lao động 2019, Nghị định bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).',
      scope: [
        'Soạn thảo và rà soát hệ thống hợp đồng thương mại, mua bán, dịch vụ định kỳ.',
        'Xây dựng Thỏa ước lao động tập thể, Nội quy lao động và Thỏa thuận bảo mật (NDA/NCA).',
        'Tư vấn tổ chức họp Đại hội đồng cổ đông và Hội đồng quản trị thường niên.',
        'Cập nhật các văn bản pháp luật mới liên quan trực tiếp đến ngành nghề của doanh nghiệp.',
      ],
      steps: [
        'Bước 1: Khảo sát hiện trạng pháp lý (Legal Health Audit) toàn diện.',
        'Bước 2: Ban hành hệ thống biểu mẫu hợp đồng chuẩn hóa.',
        'Bước 3: Tiếp nhận và phản hồi văn bản tư vấn trong vòng 24 giờ.',
        'Bước 4: Luật sư trực tiếp tham gia các cuộc họp quan trọng với đối tác của thân chủ.',
      ],
      deliverables: 'Thư tư vấn pháp lý định kỳ và báo cáo rà soát văn bản hàng tháng.',
    },
  },
];

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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [viewMode, setViewMode] = useState('donut'); // 'donut' hoặc 'grid'

  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;
  const currentService = PRACTICE_AREAS[activeIndex];
  const CurrentIcon = currentService.icon;

  const cx = 200;
  const cy = 200;
  const baseInnerRadius = 98;
  const baseOuterRadius = 172;

  const handleSliceClick = (item) => {
    // Chỉ hiện ra phần thông tin tóm tắt khi nhấp vào 1 mảnh (dạng popup/modal)
    setSelectedServiceForModal(item);
  };

  const handleOpenDetailPage = (serviceId) => {
    setSelectedServiceForModal(null);
    if (onNavigateToPage) {
      onNavigateToPage(serviceId);
    }
  };

  return (
    <section id="linh-vuc" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục & Nút chuyển chế độ xem */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-3xl">
            <p className="text-xs font-mono font-semibold text-slate-500 mb-2 uppercase tracking-wider">
              Lĩnh vực hành nghề &bull; 6 Trụ cột chuyên môn
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-normal leading-[1.45] sm:leading-[1.4] font-serif">
              Các lĩnh vực tư vấn và tranh tụng cốt lõi
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Mỗi lĩnh vực là một mảnh ghép chuyên sâu. Nhấp vào từng mảnh bánh donut để mở hồ sơ hoặc xem chi tiết toàn diện ở trang riêng.
            </p>
          </div>

          {/* Bộ chọn giao diện: Donut hoặc Lưới */}
          <div className="flex items-center gap-1 p-1 bg-[#F1F3F5] rounded-lg self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setViewMode('donut')}
              className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-all ${
                viewMode === 'donut'
                  ? 'bg-white text-[#0F2144] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Biểu đồ Donut
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-[#0F2144] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lưới 6 thẻ
            </button>
          </div>
        </div>

        {/* ================= CHẾ ĐỘ 1: BIỂU ĐỒ DONUT (TRUNG TÂM, TINH GỌN) ================= */}
        {viewMode === 'donut' && (
          <div className="flex flex-col items-center">
            
            {/* Vòng bánh Donut 6 mảnh tương tác đặt tại trung tâm */}
            <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center my-4">
              
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full overflow-visible drop-shadow-sm select-none"
              >
                <defs>
                  {PRACTICE_AREAS.map((item, i) => (
                    <filter key={`glow-${i}`} id={`donut-glow-${i}`} x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={item.glowColor} />
                    </filter>
                  ))}
                </defs>

                {/* Vòng viền trang trí trang nhã */}
                <circle cx={cx} cy={cy} r={baseOuterRadius + 4} fill="none" stroke="#F1F3F5" strokeWidth="2" strokeDasharray="4 4" />

                {/* 6 mảnh Donut */}
                {PRACTICE_AREAS.map((item, i) => {
                  const isSliceActive = hoveredIndex === i;
                  const hasActive = hoveredIndex !== null;

                  // Góc bắt đầu và kết thúc với khe hở 3 độ giữa các mảnh
                  const startAngle = i * 60 + 1.5;
                  const endAngle = (i + 1) * 60 - 1.5;
                  const midAngle = i * 60 + 30;

                  // Độ giãn bán kính khi active: to lên 1 chút (outer +12px, inner -4px)
                  const rOuter = isSliceActive ? baseOuterRadius + 12 : baseOuterRadius;
                  const rInner = isSliceActive ? baseInnerRadius - 4 : baseInnerRadius;

                  // Độ đẩy tâm ra phía ngoài theo góc (offset 10px)
                  const offsetDistance = isSliceActive ? 10 : 0;
                  const offsetAngleRad = ((midAngle - 90) * Math.PI) / 180.0;
                  const tx = Math.cos(offsetAngleRad) * offsetDistance;
                  const ty = Math.sin(offsetAngleRad) * offsetDistance;

                  // Vị trí hiển thị chữ trên mảnh bánh
                  const labelRadius = (rInner + rOuter) / 2;
                  const labelPos = polarToCartesian(cx, cy, labelRadius, midAngle);

                  const slicePath = describeDonutSlice(cx, cy, rInner, rOuter, startAngle, endAngle);

                  return (
                    <g
                      key={item.id}
                      className="cursor-pointer transition-all duration-300 ease-out"
                      transform={`translate(${tx.toFixed(2)}, ${ty.toFixed(2)})`}
                      onClick={() => handleSliceClick(item)}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onTouchStart={() => setHoveredIndex(i)}
                    >
                      {/* Đường path của mảnh */}
                      <path
                        d={slicePath}
                        fill={isSliceActive ? item.activeColor : item.color}
                        filter={isSliceActive ? `url(#donut-glow-${i})` : 'none'}
                        opacity={isSliceActive ? 1 : hasActive ? 0.65 : 0.9}
                        stroke="#FFFFFF"
                        strokeWidth={isSliceActive ? '3' : '2'}
                        className="transition-all duration-300 ease-out"
                      />

                      {/* Tên lĩnh vực đầy đủ 2 dòng trên mảnh bánh */}
                      <g transform={`translate(${labelPos.x.toFixed(2)}, ${labelPos.y.toFixed(2)})`} className="pointer-events-none select-none">
                        <text
                          textAnchor="middle"
                          y={-5}
                          fill="#FFFFFF"
                          fontSize={isSliceActive ? '11.5' : '10.5'}
                          fontWeight="700"
                          className="transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                        >
                          {item.sliceLines[0]}
                        </text>
                        <text
                          textAnchor="middle"
                          y={9}
                          fill="#FFFFFF"
                          fontSize={isSliceActive ? '11' : '10'}
                          fontWeight="600"
                          className="transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                        >
                          {item.sliceLines[1]}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>

              {/* Trung tâm lỗ bánh Donut (Center Hub tương tác) */}
              <div
                onClick={() => handleSliceClick(currentService)}
                className="absolute w-[172px] h-[172px] rounded-full bg-[#FAF9F6] border-2 border-slate-200/90 shadow-inner flex flex-col items-center justify-center p-3 text-center cursor-pointer hover:bg-white hover:border-slate-300 transition-all group"
                title="Nhấp để xem hồ sơ lĩnh vực"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110 shadow-sm"
                  style={{ backgroundColor: currentService.activeColor, color: '#FFFFFF' }}
                >
                  <CurrentIcon className="w-5 h-5 text-white" />
                </div>

                <p
                  className="text-[10px] font-bold tracking-wider uppercase mb-0.5"
                  style={{ color: currentService.activeColor }}
                >
                  Lĩnh vực chuyên môn
                </p>

                <h4 className="text-xs sm:text-[13px] font-bold text-[#0F2144] line-clamp-2 px-1 font-serif leading-tight">
                  {currentService.shortName}
                </h4>

                <span className="text-[10px] text-slate-500 mt-1 font-medium group-hover:text-[#0F2144] flex items-center gap-0.5">
                  Nhấp xem tóm tắt &rarr;
                </span>
              </div>

            </div>

            <p className="text-xs text-slate-500 mt-4 font-medium text-center">
              💡 Chạm vào từng mảnh bánh donut để xem tóm tắt hồ sơ &amp; chuyển sang trang chi tiết
            </p>

            {/* Dải 6 chip chọn nhanh bên dưới bánh Donut */}
            <div className="w-full max-w-4xl mt-10 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {PRACTICE_AREAS.map((item, i) => {
                  const isHovered = hoveredIndex === i;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSliceClick(item)}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`px-3 py-2.5 rounded-lg border text-left transition-all flex items-center gap-2 ${
                        isHovered
                          ? 'bg-white shadow-sm scale-[1.02]'
                          : 'bg-[#FAF9F6] hover:bg-white text-slate-600 border-slate-200'
                      }`}
                      style={{
                        borderColor: isHovered ? item.activeColor : '#E2E8F0',
                      }}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: isHovered ? item.activeColor : item.color }}
                      />
                      <div className="truncate">
                        <span className="text-xs font-semibold text-slate-800 truncate block">
                          {item.shortName}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* ================= CHẾ ĐỘ 2: LƯỚI 6 THẺ TRUYỀN THỐNG ================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
            {PRACTICE_AREAS.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSliceClick(service)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSliceClick(service);
                    }
                  }}
                  className="bg-white p-7 sm:p-8 hover:bg-[#FAF9F6] transition-colors cursor-pointer text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: service.activeColor }}
                      />
                      <Icon className="w-5 h-5 text-slate-600 group-hover:text-[#0F2144] transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-[#0F2144] font-serif leading-snug group-hover:text-[#142859] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="truncate pr-2">Căn cứ: {service.details.basis.split(',')[0]}</span>
                    <span className="text-[#0F2144] font-semibold whitespace-nowrap group-hover:underline">Chi tiết</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= MODAL HIỂN THỊ THẺ TÓM TẮT KHI NHẤP VÀO 1 MẢNH ================= */}
        {selectedServiceForModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedServiceForModal(null)}
          >
            <div
              className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-9 border border-slate-200 shadow-2xl text-left overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Dải màu đỉnh thẻ */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: selectedServiceForModal.activeColor }}
              />

              {/* Nút đóng modal */}
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Đóng"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              {/* Header thẻ chi tiết */}
              <div className="flex items-start justify-between gap-4 mb-4 pr-6">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-semibold uppercase mb-2 border tracking-wider"
                    style={{
                      backgroundColor: `${selectedServiceForModal.activeColor}15`,
                      borderColor: `${selectedServiceForModal.activeColor}40`,
                      color: selectedServiceForModal.activeColor,
                    }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedServiceForModal.activeColor }}></span>
                    <span>Lĩnh vực tư vấn &amp; Tranh tụng</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2144] font-serif leading-snug">
                    {selectedServiceForModal.title}
                  </h3>
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: selectedServiceForModal.activeColor, color: '#FFFFFF' }}
                >
                  {React.createElement(selectedServiceForModal.icon, { className: 'w-6 h-6 text-white' })}
                </div>
              </div>

              {/* Mô tả tóm tắt */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {selectedServiceForModal.shortDesc}
              </p>

              {/* Căn cứ pháp lý */}
              <div className="p-3.5 rounded-lg bg-[#FAF9F6] border border-slate-200/80 mb-6 text-xs text-slate-700">
                <span className="font-bold text-[#0F2144] block mb-1">Căn cứ pháp lý áp dụng:</span>
                <span className="text-slate-600">{selectedServiceForModal.details.basis}</span>
              </div>

              {/* Phạm vi giải quyết trọng tâm (4 ô) */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 block">
                  PHẠM VI GIẢI QUYẾT TRỌNG TÂM:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {selectedServiceForModal.details.scope.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-slate-200/70">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: selectedServiceForModal.activeColor }} />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nút hành động mở trang riêng */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 truncate max-w-[240px]">
                  Kết quả: <strong>{selectedServiceForModal.details.deliverables.split(',')[0]}...</strong>
                </span>

                <button
                  onClick={() => handleOpenDetailPage(selectedServiceForModal.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-white shadow-md hover:opacity-90 active:scale-95 transition-all"
                  style={{ backgroundColor: selectedServiceForModal.activeColor }}
                >
                  <span>Xem toàn bộ quy trình 4 bước ở trang riêng</span>
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
