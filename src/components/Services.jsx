import React from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon } from './Icons';

export const PRACTICE_AREAS = [
  {
    id: 'litigation',
    title: 'Tranh tụng Tòa án và Trọng tài Thương mại',
    shortDesc: 'Đại diện thân chủ bảo vệ quyền lợi hợp pháp tại Tòa án các cấp và Trung tâm Trọng tài Quốc tế (VIAC) trong các tranh chấp kinh tế, hợp đồng và bồi thường.',
    icon: GavelIcon,
    code: 'TT-01',
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
      deliverables: 'Bản đánh giá pháp lý rủi ro, chiến lược tố tụng và đại diện toàn diện tại Tòa.',
    },
  },
  {
    id: 'corporate',
    title: 'Pháp chế Doanh nghiệp và Quản trị Nội bộ',
    shortDesc: 'Cố vấn pháp lý nội bộ thường xuyên trọn gói cho doanh nghiệp: chuẩn hóa điều lệ, phòng ngừa rủi ro thất thoát tài sản và xung đột cổ đông.',
    icon: BriefcaseIcon,
    code: 'DN-02',
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
      deliverables: 'Báo cáo Legal Audit, thư tư vấn pháp lý định kỳ và rà soát văn bản.',
    },
  },
  {
    id: 'contract',
    title: 'Soạn thảo và Đàm phán Hợp đồng Kinh tế',
    shortDesc: 'Thiết kế hợp đồng thương mại, phân phối, EPC và hợp tác kinh doanh chặt chẽ, loại trừ bẫy pháp lý và điều khoản phạt bất lợi.',
    icon: FileTextIcon,
    code: 'HD-03',
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
        'Bước 2: Soạn thảo hoặc rà soát từng điều khoản với ma trận đánh giá rủi ro.',
        'Bước 3: Đưa ra các phương án điều khoản thay thế có lợi nhất.',
        'Bước 4: Đồng hành cùng thân chủ trong các phiên đàm phán chốt hợp đồng.',
      ],
      deliverables: 'Bản hợp đồng hoàn chỉnh và bảng giải trình rủi ro từng điều khoản.',
    },
  },
  {
    id: 'mna',
    title: 'Mua bán và Sáp nhập Doanh nghiệp (M&A)',
    shortDesc: 'Thẩm định pháp lý (Due Diligence), cấu trúc thương vụ, soạn thảo hợp đồng mua bán cổ phần (SPA) và đăng ký thay đổi sở hữu.',
    icon: LandmarkIcon,
    code: 'MA-04',
    details: {
      basis: 'Luật Doanh nghiệp 2020, Luật Đầu tư 2020, Luật Cạnh tranh 2018, Luật Chứng khoán 2019.',
      scope: [
        'Báo cáo thẩm định pháp lý chuyên sâu (Legal Due Diligence Report - LDD).',
        'Tư vấn cấu trúc giao dịch: Mua bán tài sản (Asset Deal) hay Mua bán cổ phần (Share Deal).',
        'Soạn thảo Hợp đồng mua bán cổ phần (SPA), Thỏa thuận cổ đông (SHA).',
        'Hỗ trợ thực hiện thủ tục đăng ký biến động sở hữu và giấy phép điều kiện.',
      ],
      steps: [
        'Bước 1: Ký thỏa thuận bảo mật (NDA) và thiết lập phòng dữ liệu ảo.',
        'Bước 2: Rà soát toàn diện hồ sơ pháp lý, tài sản, hợp đồng, thuế và lao động.',
        'Bước 3: Lập báo cáo LDD nêu rõ các rủi ro nghiêm trọng và kiến nghị xử lý.',
        'Bước 4: Soạn thảo bộ hợp đồng giao dịch và giám sát quy trình bàn giao thực tế.',
      ],
      deliverables: 'Báo cáo LDD chi tiết và bộ hợp đồng giao dịch M&A chuẩn mực.',
    },
  },
  {
    id: 'real-estate',
    title: 'Bất động sản, Đất đai và Dự án Đầu tư',
    shortDesc: 'Tư vấn pháp lý dự án bất động sản, thủ tục cấp Giấy chứng nhận quyền sử dụng đất, giải quyết tranh chấp đất đai và thừa kế tài sản.',
    icon: ScaleIcon,
    code: 'DD-05',
    details: {
      basis: 'Luật Đất đai 2024, Luật Nhà ở 2023, Luật Kinh doanh Bất động sản 2023, Luật Đầu tư 2020.',
      scope: [
        'Thẩm định pháp lý khu đất, điều kiện chuyển nhượng, cấp Giấy chứng nhận quyền sử dụng đất.',
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
      deliverables: 'Văn bản ý kiến pháp lý và đại diện thực hiện toàn bộ thủ tục pháp lý.',
    },
  },
  {
    id: 'ip',
    title: 'Sở hữu Trí tuệ và Chuyển giao Công nghệ',
    shortDesc: 'Đăng ký bảo hộ nhãn hiệu, bản quyền phần mềm, sáng chế và xử lý vi phạm sở hữu trí tuệ, hàng giả hàng nhái trên thị trường.',
    icon: ShieldCheckIcon,
    code: 'TT-06',
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
      deliverables: 'Văn bằng bảo hộ nhãn hiệu và hồ sơ xử lý vi phạm bản quyền chính thức.',
    },
  },
];

export default function Services({ onSelectService }) {
  return (
    <section id="linh-vuc" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề mục theo phong cách tòa soạn báo chí pháp lý */}
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-2">
            Danh mục dịch vụ pháp lý
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Lĩnh vực hành nghề cốt lõi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Mỗi lĩnh vực do luật sư chuyên trách trực tiếp nghiên cứu hồ sơ và tham gia giải quyết theo quy chuẩn tố tụng.
          </p>
        </div>

        {/* Lưới phân chia danh mục với hairline divider, không đổ bóng rẻ tiền */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {PRACTICE_AREAS.map((service) => {
            const Icon = service.icon;
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
                className="bg-white p-7 sm:p-8 hover:bg-[#FBFBFB] transition-colors cursor-pointer text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-slate-400 font-medium">
                      {service.code}
                    </span>
                    <Icon className="w-5 h-5 text-slate-700 group-hover:text-amber-700 transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif leading-snug group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Căn cứ: {service.details.basis.split(',')[0]}</span>
                  <span className="text-slate-900 font-semibold group-hover:text-amber-800">Chi tiết</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
