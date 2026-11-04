import React, { useState } from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon, CloseIcon, CheckCircleIcon } from './Icons';

export const PRACTICE_AREAS = [
  {
    id: 'arbitration',
    num: '01',
    title: 'Trọng tài Thương mại Quốc tế',
    shortName: 'Trọng tài Quốc tế',
    sliceLines: ['Trọng tài', 'Quốc tế'],
    shortDesc: 'Đại diện thân chủ trong các vụ kiện trọng tài phức tạp tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC), SIAC (Singapore) và ICC.',
    icon: GavelIcon,
    color: '#0F2144',
    activeGradStart: '#0F2144',
    activeGradEnd: '#1A335E',
    activeColor: '#0F2144',
    accentColor: '#C5A880',
    glowColor: 'rgba(15, 33, 68, 0.22)',
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
    num: '02',
    title: 'Tranh tụng Tòa án các cấp',
    shortName: 'Tranh tụng Tòa án',
    sliceLines: ['Tranh tụng', 'Tòa án'],
    shortDesc: 'Đại diện bảo vệ quyền lợi hợp pháp của thân chủ tại Tòa án nhân dân sơ thẩm, phúc thẩm và giám đốc thẩm trong các vụ án kinh tế, dân sự và đất đai.',
    icon: ScaleIcon,
    color: '#0F2144',
    activeGradStart: '#0F2144',
    activeGradEnd: '#1A335E',
    activeColor: '#0F2144',
    accentColor: '#C5A880',
    glowColor: 'rgba(15, 33, 68, 0.22)',
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
    num: '03',
    title: 'Mua bán & Sáp nhập Doanh nghiệp (M&A)',
    shortName: 'Mua bán & Sáp nhập',
    sliceLines: ['Mua bán &', 'Sáp nhập'],
    shortDesc: 'Thẩm định pháp lý (Legal Due Diligence), cấu trúc thương vụ, đàm phán hợp đồng mua bán cổ phần (SPA) và xin chấp thuận tập trung kinh tế.',
    icon: BriefcaseIcon,
    color: '#0F2144',
    activeGradStart: '#0F2144',
    activeGradEnd: '#1A335E',
    activeColor: '#0F2144',
    accentColor: '#C5A880',
    glowColor: 'rgba(15, 33, 68, 0.22)',
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
    num: '04',
    title: 'Ngân hàng, Tài chính & Thị trường Vốn',
    shortName: 'Ngân hàng & Tài chính',
    sliceLines: ['Ngân hàng', '& Tài chính'],
    shortDesc: 'Tư vấn pháp lý cho các định chế tài chính, ngân hàng trong các giao dịch tín dụng hợp vốn, phát hành trái phiếu và tài trợ dự án.',
    icon: LandmarkIcon,
    color: '#0F2144',
    activeGradStart: '#0F2144',
    activeGradEnd: '#1A335E',
    activeColor: '#0F2144',
    accentColor: '#C5A880',
    glowColor: 'rgba(15, 33, 68, 0.22)',
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
    num: '05',
    title: 'Bất động sản, Xây dựng & Dự án',
    shortName: 'Bất động sản & Dự án',
    sliceLines: ['Bất động sản', '& Dự án'],
    shortDesc: 'Tư vấn thủ tục chấp thuận chủ trương đầu tư dự án khu đô thị, khu công nghiệp, hợp đồng xây dựng EPC và giải quyết tranh chấp quyền sử dụng đất.',
    icon: FileTextIcon,
    color: '#0F2144',
    activeGradStart: '#0F2144',
    activeGradEnd: '#1A335E',
    activeColor: '#0F2144',
    accentColor: '#C5A880',
    glowColor: 'rgba(15, 33, 68, 0.22)',
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
    num: '06',
    title: 'Pháp chế Doanh nghiệp thường xuyên',
    shortName: 'Pháp chế Doanh nghiệp',
    sliceLines: ['Pháp chế', 'Doanh nghiệp'],
    shortDesc: 'Cố vấn pháp luật nội bộ trọn gói cho doanh nghiệp: rà soát hợp đồng hàng ngày, quy chế lao động, bảo vệ dữ liệu và giải quyết bất đồng nội bộ.',
    icon: ShieldCheckIcon,
    color: '#0F2144',
    activeGradStart: '#0F2144',
    activeGradEnd: '#1A335E',
    activeColor: '#0F2144',
    accentColor: '#C5A880',
    glowColor: 'rgba(15, 33, 68, 0.22)',
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

  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;
  const currentService = PRACTICE_AREAS[activeIndex];
  const CurrentIcon = currentService.icon;

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
            Lĩnh vực hành nghề &bull; 6 Trụ cột chuyên môn
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
            Các lĩnh vực tư vấn và tranh tụng cốt lõi
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Mỗi lĩnh vực được phụ trách chuyên sâu bởi đội ngũ luật sư Hòa &amp; Cộng sự, cam kết bảo vệ tối đa quyền lợi hợp pháp và giá trị thương vụ cho thân chủ.
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
                {/* Gradient xanh sẫm hoàng gia sang trọng cho phân khúc active */}
                <linearGradient id="luxury-navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0F2144" />
                  <stop offset="100%" stopColor="#1B3568" />
                </linearGradient>

                {/* Đổ bóng mềm mại, êm ái */}
                <filter id="luxury-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(15, 33, 68, 0.22)" />
                </filter>
              </defs>

              {/* Vòng bezel định vị thanh mảnh phong cách đồng hồ Thụy Sỹ */}
              <circle cx={cx} cy={cy} r={baseOuterRadius + 10} fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="2 4" opacity="0.8" />
              <circle cx={cx} cy={cy} r={baseOuterRadius + 4} fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6" />
              <circle cx={cx} cy={cy} r={baseInnerRadius - 5} fill="none" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.6" />

              {/* 6 mảnh ghép phân khúc vòm kiến trúc tối giản */}
              {PRACTICE_AREAS.map((item, i) => {
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
                    onClick={() => handleSliceClick(item)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(i)}
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

            {/* Trung tâm vòng tròn: Thiết kế Chronometer tối giản, không màu mè */}
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
                {currentService.num} &bull; TRỤ CỘT CHUYÊN MÔN
              </span>

              {/* Tiêu đề lĩnh vực */}
              <h4 className="relative z-10 text-xs sm:text-[13px] font-bold text-[#0F2144] tracking-tight leading-snug px-2 line-clamp-2 mt-0.5">
                {currentService.shortName}
              </h4>

              {/* Nút hành động tinh giản tối đa */}
              <div className="relative z-10 mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0F2144] group-hover:text-blue-900 transition-colors">
                <span className="group-hover:underline underline-offset-4">Xem hồ sơ</span>
                <span className="text-amber-700 font-bold transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </div>
            </div>

          </div>

        </div>

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
              {/* Dải viền đỉnh thẻ xanh navy sang trọng */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F2144]" />

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
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-semibold uppercase mb-2 border border-slate-200 bg-slate-50 text-slate-700 tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F2144]"></span>
                    <span>Lĩnh vực tư vấn &amp; Tranh tụng &bull; {selectedServiceForModal.num}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2144] tracking-tight leading-snug">
                    {selectedServiceForModal.title}
                  </h3>
                </div>

                <div className="w-11 h-11 rounded-xl bg-[#0F2144] flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                  {React.createElement(selectedServiceForModal.icon, { className: 'w-5 h-5 text-white' })}
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
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  PHẠM VI GIẢI QUYẾT TRỌNG TÂM:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {selectedServiceForModal.details.scope.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF9F6] border border-slate-200/70">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#0F2144]" />
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-xs font-semibold text-white bg-[#0F2144] hover:bg-[#162C5B] active:scale-95 transition-all shadow-sm"
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
