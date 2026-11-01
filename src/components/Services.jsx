import React from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon, ArrowRightIcon, CheckCircleIcon } from './Icons';

export const PRACTICE_AREAS = [
  {
    id: 'litigation',
    title: 'Tranh Tụng Tòa Án & Trọng Tài Quốc Tế',
    shortDesc: 'Đại diện thân chủ bảo vệ quyền lợi hợp pháp tại Tòa án các cấp và Trung tâm Trọng tài Quốc tế (VIAC) trong các tranh chấp kinh tế, hợp đồng và bồi thường.',
    icon: GavelIcon,
    badge: 'Mũi Nhọn Tranh Tụng',
    featured: true,
    details: {
      basis: 'Bộ luật Tố tụng Dân sự 2015, Luật Trọng tài Thương mại 2010, Bộ luật Tố tụng Hình sự 2015.',
      scope: [
        'Tranh chấp hợp đồng mua bán hàng hóa quốc tế, cung ứng dịch vụ, đầu tư thương mại.',
        'Tranh chấp quyền sở hữu, hợp đồng vay tài sản, thu hồi nợ khó đòi hợp pháp.',
        'Đại diện tham gia các phiên đối chất, hòa giải và tranh tụng tại Tòa án sơ thẩm, phúc thẩm, giám đốc thẩm.',
        'Thi hành án dân sự và công nhận, cho thi hành phán quyết trọng tài.',
      ],
      steps: [
        'Bước 1: Tiếp nhận và đánh giá toàn diện chứng cứ ban đầu (trong 24h).',
        'Bước 2: Xây dựng chiến lược tố tụng tối ưu, phân tích rủi ro và xác suất thành công.',
        'Bước 3: Soạn thảo đơn từ, củng cố hồ sơ chứng cứ và nộp Tòa án/Trọng tài.',
        'Bước 4: Trực tiếp tham gia bảo vệ quyền lợi tại tất cả các phiên xử.',
      ],
      deliverables: 'Bản đánh giá pháp lý rủi ro + Chiến lược tố tụng độc quyền + Đại diện toàn diện tại Tòa.',
    },
  },
  {
    id: 'corporate',
    title: 'Pháp Chế Doanh Nghiệp & Quản Trị Cổ Đông',
    shortDesc: 'Dịch vụ Cố vấn pháp lý nội bộ thường xuyên trọn gói cho doanh nghiệp: chuẩn hóa điều lệ, phòng ngừa rủi ro thất thoát tài sản và xung đột cổ đông.',
    icon: BriefcaseIcon,
    badge: 'Cố Vấn Thường Xuyên',
    featured: true,
    details: {
      basis: 'Luật Doanh nghiệp 2020, Luật Đầu tư 2020, Bộ luật Lao động 2019.',
      scope: [
        'Rà soát và chuẩn hóa hệ thống quy chế, điều lệ công ty, thỏa ước lao động tập thể.',
        'Tư vấn tổ chức Đại hội đồng cổ đông, Hội đồng quản trị, giải quyết tranh chấp nhóm cổ đông.',
        'Thẩm định tính hợp pháp của các quyết định kinh doanh và dự án đầu tư mới.',
        'Đại diện thương lượng và xử lý khiếu nại của đối tác và cơ quan quản lý.',
      ],
      steps: [
        'Bước 1: Khảo sát hiện trạng pháp lý (Legal Audit) toàn diện doanh nghiệp.',
        'Bước 2: Chỉ điểm lỗ hổng rủi ro và xây dựng lộ trình khắc phục.',
        'Bước 3: Ban hành bộ quy chuẩn hợp đồng mẫu và quy chế quản trị nội bộ.',
        'Bước 4: Cố vấn thường trực 24/7 qua điện thoại, văn bản và họp trực tiếp.',
      ],
      deliverables: 'Báo cáo Legal Audit + Thư tư vấn pháp lý định kỳ + Rà soát văn bản không giới hạn.',
    },
  },
  {
    id: 'contract',
    title: 'Soạn Thảo & Đàm Phán Hợp Đồng',
    shortDesc: 'Thiết kế hợp đồng thương mại, phân phối, EPC và hợp tác kinh doanh chặt chẽ, loại trừ bẫy pháp lý và điều khoản phạt bất lợi.',
    icon: FileTextIcon,
    badge: 'Hợp Đồng Kinh Tế',
    featured: false,
    details: {
      basis: 'Bộ luật Dân sự 2015, Luật Thương mại 2005 và Công ước Viên về mua bán hàng hóa (CISG).',
      scope: [
        'Hợp đồng hợp tác kinh doanh (BCC), hợp đồng phân phối, nhượng quyền thương mại.',
        'Hợp đồng xây dựng EPC, hợp đồng logistics, thuê gia công và cung ứng dịch vụ công nghệ.',
        'Rà soát điều khoản phạt vi phạm, bồi thường thiệt hại và cơ chế giải quyết tranh chấp.',
        'Tham gia đàm phán trực tiếp cùng thân chủ với đối tác trong nước và quốc tế.',
      ],
      steps: [
        'Bước 1: Làm rõ mục tiêu thương mại và các rủi ro lo ngại của thân chủ.',
        'Bước 2: Soạn thảo hoặc rà soát từng điều khoản với ma trận đánh giá rủi ro (Risk Matrix).',
        'Bước 3: Đưa ra các phương án điều khoản thay thế (Alternative Clauses) có lợi nhất.',
        'Bước 4: Đồng hành cùng thân chủ trong các phiên đàm phán chốt hợp đồng.',
      ],
      deliverables: 'Bản hợp đồng hoàn chỉnh + Bảng giải trình rủi ro từng điều khoản.',
    },
  },
  {
    id: 'mna',
    title: 'Mua Bán & Sáp Nhập (M&A)',
    shortDesc: 'Thẩm định pháp lý (Due Diligence), cấu trúc thương vụ, soạn thảo hợp đồng mua bán cổ phần (SPA) và đăng ký thay đổi sở hữu.',
    icon: LandmarkIcon,
    badge: 'Giao Dịch Đầu Tư',
    featured: false,
    details: {
      basis: 'Luật Doanh nghiệp 2020, Luật Đầu tư 2020, Luật Cạnh tranh 2018, Luật Chứng khoán 2019.',
      scope: [
        'Báo cáo thẩm định pháp lý chuyên sâu (Legal Due Diligence Report - LDD).',
        'Tư vấn cấu trúc giao dịch: Mua bán tài sản (Asset Deal) hay Mua bán cổ phần (Share Deal).',
        'Soạn thảo Hợp đồng mua bán cổ phần (SPA), Thỏa thuận cổ đông (SHA).',
        'Hỗ trợ thực hiện thủ tục đăng ký biến động sở hữu và giấy phép điều kiện.',
      ],
      steps: [
        'Bước 1: Ký thỏa thuận bảo mật (NDA) và thiết lập phòng dữ liệu ảo (Virtual Data Room).',
        'Bước 2: Rà soát toàn diện hồ sơ pháp lý, tài sản, hợp đồng, thuế và lao động.',
        'Bước 3: Lập báo cáo LDD nêu rõ các "Red Flags" (rủi ro nghiêm trọng) và kiến nghị xử lý.',
        'Bước 4: Soạn thảo bộ hợp đồng giao dịch và giám sát quy trình bàn giao thực tế.',
      ],
      deliverables: 'Báo cáo LDD chi tiết + Bộ hợp đồng giao dịch M&A chuẩn mực.',
    },
  },
  {
    id: 'real-estate',
    title: 'Bất Động Sản, Đất Đai & Dự Án',
    shortDesc: 'Tư vấn pháp lý dự án bất động sản, thủ tục cấp Giấy chứng nhận (Sổ đỏ), giải quyết tranh chấp đất đai và thừa kế quyền sử dụng đất.',
    icon: ScaleIcon,
    badge: 'Đất Đai & Dự Án',
    featured: false,
    details: {
      basis: 'Luật Đất đai 2024, Luật Nhà ở 2023, Luật Kinh doanh Bất động sản 2023, Luật Đầu tư 2020.',
      scope: [
        'Thẩm định pháp lý khu đất, điều kiện chuyển nhượng, cấp Giấy chứng nhận (Sổ đỏ).',
        'Tư vấn pháp lý cho dự án phát triển đô thị, khu công nghiệp và bất động sản nghỉ dưỡng.',
        'Giải quyết tranh chấp thừa kế quyền sử dụng đất, tranh chấp lối đi chung, ranh giới.',
        'Đại diện khiếu nại quyết định thu hồi đất và bồi thường, hỗ trợ tái định cư.',
      ],
      steps: [
        'Bước 1: Tra cứu hồ sơ địa chính, quy hoạch sử dụng đất và lịch sử biến động.',
        'Bước 2: Đánh giá cơ sở pháp lý và tính khả thi trong việc cấp sổ hoặc khởi kiện.',
        'Bước 3: Thu thập trích lục bản đồ địa chính, xác minh hiện trạng thực địa.',
        'Bước 4: Tham gia đối thoại, hòa giải tại UBND hoặc tham gia phiên tòa.',
      ],
      deliverables: 'Văn bản ý kiến pháp lý + Đại diện thực hiện toàn bộ thủ tục pháp lý.',
    },
  },
  {
    id: 'ip',
    title: 'Sở Hữu Trí Tuệ & Chuyển Giao CN',
    shortDesc: 'Đăng ký bảo hộ độc quyền nhãn hiệu, bản quyền tác phẩm phần mềm, sáng chế và xử lý vi phạm sở hữu trí tuệ, hàng giả hàng nhái.',
    icon: ShieldCheckIcon,
    badge: 'Bảo Hộ Thương Hiệu',
    featured: false,
    details: {
      basis: 'Luật Sở hữu Trí tuệ sửa đổi 2022, Nghị định 65/2023/NĐ-CP, Thỏa ước Madrid.',
      scope: [
        'Tra cứu khả năng bảo hộ và nộp đơn đăng ký nhãn hiệu, logo, slogan tại Cục SHTT.',
        'Đăng ký bản quyền tác phẩm phần mềm, thiết kế giao diện, ấn phẩm xuất bản.',
        'Lập hồ sơ giám định xâm phạm và yêu cầu Quản lý thị trường, Thanh tra xử lý vi phạm.',
        'Soạn thảo hợp đồng li-xăng (Licensing), chuyển giao công nghệ và nhượng quyền.',
      ],
      steps: [
        'Bước 1: Tra cứu chuyên sâu nhãn hiệu tại kho dữ liệu Cục SHTT và quốc tế.',
        'Bước 2: Phân loại nhóm hàng hóa dịch vụ theo Bảng phân loại Ni-xơ.',
        'Bước 3: Nộp đơn và theo dõi thẩm định hình thức, thẩm định nội dung.',
        'Bước 4: Nhận văn bằng bảo hộ và thực hiện gia hạn định kỳ 10 năm/lần.',
      ],
      deliverables: 'Văn bằng bảo hộ nhãn hiệu + Thư cảnh báo vi phạm bản quyền chính thức.',
    },
  },
];

export default function Services({ onSelectService }) {
  const featuredPractices = PRACTICE_AREAS.filter((p) => p.featured);
  const secondaryPractices = PRACTICE_AREAS.filter((p) => !p.featured);

  return (
    <section id="linh-vuc" className="py-16 md:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục với typographic hierarchy chuẩn mực */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Lĩnh Vực Hành Nghề Chuyên Sâu
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Giải Pháp Pháp Lý Toàn Diện &amp; Thực Chiến
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Chúng tôi tập trung nguồn lực vào các lĩnh vực pháp lý trọng yếu đòi hỏi tư duy sắc bén, bảo vệ tối đa lợi ích của bạn trước mọi rủi ro tranh chấp.
          </p>
        </div>

        {/* 1. HAI LĨNH VỰC MŨI NHỌN (Asymmetric Flagship Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {featuredPractices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectService(service)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service);
                  }
                }}
                className="group relative bg-[#FBFBFB] rounded-3xl p-8 sm:p-10 border border-slate-200/90 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50 active:translate-y-[1px] active:scale-[0.99] transition-all duration-200 text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Phạm vi nổi bật tóm tắt */}
                  <div className="mt-5 space-y-2 border-t border-slate-200/70 pt-4">
                    {service.details.scope.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/70 flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-amber-700">
                  <span>Xem chi tiết quy trình 4 bước &amp; căn cứ &rarr;</span>
                  <div className="w-9 h-9 rounded-full bg-white border border-slate-200 group-hover:bg-amber-100 group-hover:border-amber-200 flex items-center justify-center text-slate-700 group-hover:text-amber-800 transition-all shadow-sm">
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. CÁC LĨNH VỰC CHUYÊN SÂU KHÁC (Balanced 2-Column Grid, tránh 3 thẻ bằng nhau) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {secondaryPractices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                role="button"
                tabIndex={0}
                onClick={() => onSelectService(service)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service);
                  }
                }}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 active:translate-y-[1px] active:scale-[0.99] transition-all duration-200 text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-slate-900 group-hover:text-amber-400 text-slate-800 flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-700">
                  <span>Tìm hiểu thêm &rarr;</span>
                  <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
