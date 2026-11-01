import React from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon, ArrowRightIcon } from './Icons';

export const PRACTICE_AREAS = [
  {
    id: 'litigation',
    title: 'Tranh Tụng Tòa Án & Trọng Tài',
    shortDesc: 'Đại diện thân chủ bảo vệ quyền lợi hợp pháp tại Tòa án các cấp và Trung tâm Trọng tài (VIAC).',
    icon: GavelIcon,
    accent: 'bg-amber-500/10 text-amber-800 border-amber-200',
    stat: '98% Vụ việc thành công',
    details: {
      basis: 'Bộ luật Tố tụng Dân sự 2015, Luật Trọng tài Thương mại 2010, Bộ luật Tố tụng Hình sự 2015.',
      scope: [
        'Tranh chấp hợp đồng mua bán hàng hóa, cung ứng dịch vụ, đầu tư thương mại.',
        'Tranh chấp quyền sở hữu, hợp đồng vay tài sản, bồi thường thiệt hại ngoài hợp đồng.',
        'Đại diện khởi kiện và thi hành án dân sự, thu hồi nợ khó đòi hợp pháp.',
        'Bảo vệ quyền lợi tại Tòa án nhân dân sơ thẩm, phúc thẩm, giám đốc thẩm.',
      ],
      steps: [
        'Bước 1: Tiếp nhận và đánh giá toàn diện chứng cứ ban đầu (trong 24h).',
        'Bước 2: Xây dựng chiến lược tố tụng tối ưu, phân tích xác suất thắng kiện.',
        'Bước 3: Soạn thảo đơn từ, củng cố hồ sơ chứng cứ và nộp Tòa án/Trọng tài.',
        'Bước 4: Trực tiếp tham gia bảo vệ quyền lợi tại tất cả các phiên đối chất và phiên xử.',
      ],
      deliverables: 'Bản đánh giá pháp lý rủi ro + Chiến lược tố tụng độc quyền + Đại diện toàn diện tại Tòa.',
    },
  },
  {
    id: 'corporate',
    title: 'Pháp Chế Doanh Nghiệp & Quản Trị',
    shortDesc: 'Dịch vụ Luật sư nội bộ thuê ngoài trọn gói cho doanh nghiệp SME và Tập đoàn đa quốc gia.',
    icon: BriefcaseIcon,
    accent: 'bg-blue-500/10 text-blue-800 border-blue-200',
    stat: '500+ Doanh nghiệp cố vấn',
    details: {
      basis: 'Luật Doanh nghiệp 2020, Luật Đầu tư 2020, Bộ luật Lao động 2019.',
      scope: [
        'Rà soát và chuẩn hóa hệ thống quy chế, điều lệ công ty, thỏa ước lao động tập thể.',
        'Tư vấn họp Đại hội đồng cổ đông, Hội đồng quản trị, giải quyết xung đột lợi ích.',
        'Thẩm định tính hợp pháp của các quyết định kinh doanh và dự án đầu tư mới.',
        'Đại diện thương lượng và xử lý khiếu nại của đối tác, người lao động.',
      ],
      steps: [
        'Bước 1: Khảo sát hiện trạng pháp lý (Legal Audit) toàn diện doanh nghiệp.',
        'Bước 2: Chỉ điểm lỗ hổng rủi ro và xây dựng lộ trình khắc phục.',
        'Bước 3: Ban hành bộ quy chuẩn hợp đồng mẫu và quy chế quản trị nội bộ.',
        'Bước 4: Cố vấn thường trực 24/7 qua điện thoại, văn bản và họp trực tiếp.',
      ],
      deliverables: 'Báo cáo Legal Audit + Thư tư vấn pháp lý không giới hạn + Rà soát văn bản.',
    },
  },
  {
    id: 'contract',
    title: 'Soạn Thảo & Đàm Phán Hợp Đồng',
    shortDesc: 'Thiết kế hợp đồng thương mại, mua bán, chuyển nhượng chặt chẽ, loại trừ mọi bẫy pháp lý.',
    icon: FileTextIcon,
    accent: 'bg-emerald-500/10 text-emerald-800 border-emerald-200',
    stat: '1.200+ Hợp đồng thẩm định',
    details: {
      basis: 'Bộ luật Dân sự 2015, Luật Thương mại 2005 và các điều ước quốc tế (CISG).',
      scope: [
        'Hợp đồng hợp tác kinh doanh (BCC), hợp đồng phân phối, nhượng quyền thương mại.',
        'Hợp đồng xây dựng EPC, hợp đồng logistics, thuê gia công và cung ứng dịch vụ.',
        'Rà soát điều khoản phạt vi phạm, bồi thường thiệt hại và cơ chế giải quyết tranh chấp.',
        'Tham gia đàm phán trực tiếp cùng thân chủ với đối tác trong nước và nước ngoài.',
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
    shortDesc: 'Thẩm định pháp lý (Due Diligence), cấu trúc thương vụ và chuyển nhượng cổ phần an toàn.',
    icon: LandmarkIcon,
    accent: 'bg-purple-500/10 text-purple-800 border-purple-200',
    stat: '100+ Triệu USD giao dịch',
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
    title: 'Bất Động Sản & Dự Án Đầu Tư',
    shortDesc: 'Tư vấn pháp lý đất đai, thủ tục chấp thuận chủ trương đầu tư và giải quyết tranh chấp nhà đất.',
    icon: ScaleIcon,
    accent: 'bg-rose-500/10 text-rose-800 border-rose-200',
    stat: '300+ Vụ việc đất đai',
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
    title: 'Sở Hữu Trí Tuệ & Công Nghệ',
    shortDesc: 'Đăng ký bảo hộ nhãn hiệu, bản quyền phần mềm, sáng chế và xử lý vi phạm thương hiệu.',
    icon: ShieldCheckIcon,
    accent: 'bg-indigo-500/10 text-indigo-800 border-indigo-200',
    stat: '1.000+ Nhãn hiệu bảo hộ',
    details: {
      basis: 'Luật Sở hữu Trí tuệ sửa đổi 2022, Nghị định 65/2023/NĐ-CP, Thỏa ước Madrid.',
      scope: [
        'Tra cứu khả năng bảo hộ và nộp đơn đăng ký nhãn hiệu, logo, slogan tại Cục SHTT.',
        'Đăng ký bản quyền tác phẩm phần mềm, thiết kế giao diện, ấn phẩm xuất bản.',
        'Lập hồ sơ giám định xâm phạm và yêu cầu Quản lý thị trường, Thanh tra xử lý hàng giả.',
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
  return (
    <section id="linh-vuc" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề mục */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Lĩnh Vực Hành Nghề Chuyên Sâu
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Giải Pháp Pháp Lý Toàn Diện &amp; Thực Chiến
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Chúng tôi tập trung vào các lĩnh vực pháp lý trọng yếu đòi hỏi chuyên môn cao, mang lại sự an tâm tuyệt đối và bảo vệ tối đa lợi ích của bạn.
          </p>
        </div>

        {/* Lưới các thẻ dịch vụ (Quy chuẩn Clean White: không lồng viền card-in-a-card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRACTICE_AREAS.map((service) => {
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
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Icon & Thẻ thống kê */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-slate-800 transition-all">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                      {service.stat}
                    </span>
                  </div>

                  {/* Tiêu đề & Mô tả */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors font-serif leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Nút Xem chi tiết liên kết trực tiếp Modal */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-slate-900 group-hover:text-amber-700">
                  <span>Xem chi tiết quy trình &amp; căn cứ &rarr;</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-amber-100 flex items-center justify-center text-slate-700 group-hover:text-amber-800 transition-colors">
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
