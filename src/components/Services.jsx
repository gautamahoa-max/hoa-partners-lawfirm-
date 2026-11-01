import React, { useState } from 'react';
import { GavelIcon, BriefcaseIcon, FileTextIcon, LandmarkIcon, ShieldCheckIcon, ScaleIcon } from './Icons';

export const PRACTICE_AREAS = [
  {
    id: 'arbitration',
    title: 'Trọng Tài Thương Mại Quốc Tế',
    shortDesc: 'Đại diện thân chủ trong các vụ kiện trọng tài phức tạp tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC), SIAC (Singapore) và ICC.',
    icon: GavelIcon,
    code: 'TT-01',
    details: {
      basis: 'Luật Trọng tài Thương mại 2010, Quy tắc Tố tụng VIAC, Quy tắc SIAC và Công ước New York 1958 về công nhận và cho thi hành phán quyết trọng tài nước ngoài.',
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
    id: 'banking',
    title: 'Ngân Hàng, Tài Chính & Thị Trường Vốn',
    shortDesc: 'Tư vấn pháp lý cho các định chế tài chính, ngân hàng trong và ngoài nước trong các giao dịch tín dụng hợp vốn, phát hành trái phiếu và tài trợ dự án.',
    icon: LandmarkIcon,
    code: 'NH-02',
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
    id: 'mna',
    title: 'Mua Bán & Sáp Nhập (M&A)',
    shortDesc: 'Thẩm định pháp lý (Legal Due Diligence), cấu trúc thương vụ, đàm phán hợp đồng mua bán cổ phần (SPA) và xin chấp thuận tập trung kinh tế.',
    icon: BriefcaseIcon,
    code: 'MA-03',
    details: {
      basis: 'Luật Doanh nghiệp 2020, Luật Đầu tư 2020, Luật Cạnh tranh 2018.',
      scope: [
        'Báo cáo thẩm định pháp lý toàn diện công ty mục tiêu (Legal Due Diligence Report).',
        'Tư vấn cấu trúc giao dịch: Mua bán tài sản (Asset Deal) hoặc Mua cổ phần (Share Deal).',
        'Soạn thảo Hợp đồng mua bán cổ phần (SPA), Thỏa thuận cổ đông (SHA).',
        'Thủ tục thông báo tập trung kinh tế tại Ủy ban Cạnh tranh Quốc gia.',
      ],
      steps: [
        'Bước 1: Ký thỏa thuận bảo mật (NDA) và thiết lập phòng dữ liệu ảo (Virtual Data Room).',
        'Bước 2: Rà soát toàn bộ tài sản, lao động, hợp đồng, thuế và giấy phép con.',
        'Bước 3: Phát hành báo cáo Red Flag và đàm phán bộ hợp đồng giao dịch.',
        'Bước 4: Hoàn tất chuyển nhượng cổ phần và ghi nhận biến động đăng ký kinh doanh.',
      ],
      deliverables: 'Báo cáo LDD chuyên sâu và bộ hợp đồng M&A song ngữ hoàn chỉnh.',
    },
  },
  {
    id: 'litigation',
    title: 'Tranh Tụng Tòa Án Các Cấp',
    shortDesc: 'Đại diện bảo vệ quyền lợi hợp pháp của thân chủ tại Tòa án nhân dân sơ thẩm, phúc thẩm và giám đốc thẩm trong các vụ án kinh tế, dân sự và đất đai.',
    icon: ScaleIcon,
    code: 'TT-04',
    details: {
      basis: 'Bộ luật Tố tụng Dân sự 2015, Bộ luật Dân sự 2015, Luật Tố tụng Hành chính 2015.',
      scope: [
        'Tranh chấp hợp đồng kinh tế, vi phạm nghĩa vụ thanh toán và phạt bồi thường.',
        'Tranh chấp nội bộ công ty giữa các nhóm cổ đông và thành viên góp vốn.',
        'Khởi kiện quyết định hành chính thu hồi đất và xử phạt vi phạm hành chính.',
        'Đại diện tham gia các phiên đối chất, tiếp cận công khai chứng cứ và phiên xét xử.',
      ],
      steps: [
        'Bước 1: Tiếp nhận và đánh giá toàn diện chứng cứ ban đầu (trong 24h).',
        'Bước 2: Xây dựng bản luận cứ bảo vệ và đơn khởi kiện/đơn phản tố.',
        'Bước 3: Thu thập tài liệu bổ sung từ cơ quan nhà nước có thẩm quyền.',
        'Bước 4: Trực tiếp tranh luận tại phiên tòa và thực hiện thủ tục thi hành án.',
      ],
      deliverables: 'Bản phân tích điểm mạnh - điểm yếu chứng cứ và đại diện tố tụng toàn diện.',
    },
  },
  {
    id: 'real-estate',
    title: 'Bất Động Sản, Xây Dựng & Dự Án',
    shortDesc: 'Tư vấn thủ tục chấp thuận chủ trương đầu tư dự án khu đô thị, khu công nghiệp, hợp đồng xây dựng EPC và giải quyết tranh chấp quyền sử dụng đất.',
    icon: FileTextIcon,
    code: 'BDS-05',
    details: {
      basis: 'Luật Đất đai 2024, Luật Nhà ở 2023, Luật Kinh doanh Bất động sản 2023, Luật Xây dựng 2014 (sửa đổi 2020).',
      scope: [
        'Thẩm định pháp lý khu đất dự án, quy hoạch sử dụng đất và hồ sơ giải phóng mặt bằng.',
        'Soạn thảo hợp đồng tổng thầu EPC, hợp đồng hợp tác đầu tư và phân phối bất động sản.',
        'Thủ tục cấp Giấy chứng nhận quyền sử dụng đất và chuyển đổi mục đích sử dụng.',
        'Đại diện giải quyết tranh chấp ranh giới đất đai và hợp đồng mua bán căn hộ/nhà ở.',
      ],
      steps: [
        'Bước 1: Tra cứu lịch sử địa chính và tình trạng pháp lý của dự án.',
        'Bước 2: Xây dựng ma trận rủi ro pháp lý theo quy định của Luật Đất đai 2024 mới nhất.',
        'Bước 3: Soạn thảo hoặc rà soát hợp đồng chuyển nhượng dự án hoặc hợp đồng xây dựng.',
        'Bước 4: Hỗ trợ đàm phán và hoàn tất thủ tục bàn giao thực địa.',
      ],
      deliverables: 'Bản ý kiến pháp lý dự án và bộ hợp đồng giao dịch bất động sản an toàn.',
    },
  },
  {
    id: 'corporate',
    title: 'Pháp Chế Doanh Nghiệp Thường Xuyên',
    shortDesc: 'Dịch vụ Cố vấn pháp luật trọn gói cho doanh nghiệp trong việc rà soát hợp đồng hàng ngày, quy chế lao động, bảo mật thông tin và tuân thủ pháp luật.',
    icon: ShieldCheckIcon,
    code: 'DN-06',
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
      deliverables: 'Thư tư vấn pháp lý không giới hạn và báo cáo rà soát văn bản định kỳ hàng tháng.',
    },
  },
];

export const INDUSTRY_SECTORS = [
  {
    name: 'Ngân hàng, Dịch vụ Tài chính & Bảo hiểm',
    desc: 'Tư vấn pháp lý cho các ngân hàng thương mại, công ty tài chính, fintech và quỹ đầu tư trong việc tuân thủ pháp luật chuyên ngành và xử lý nợ xấu.',
  },
  {
    name: 'Bất động sản, Xây dựng & Cơ sở Hạ tầng',
    desc: 'Hỗ trợ các nhà phát triển dự án bất động sản nhà ở, khu công nghiệp, cảng biển và các nhà thầu thi công hạ tầng giao thông quy mô lớn.',
  },
  {
    name: 'Năng lượng, Khai khoáng, Dầu & Khí',
    desc: 'Tư vấn các dự án điện gió, điện mặt trời, LNG, thăm dò khai thác dầu khí và hợp đồng mua bán điện (PPA) tại Việt Nam.',
  },
  {
    name: 'Công nghiệp, Sản xuất & Vật liệu',
    desc: 'Hỗ trợ các tập đoàn sản xuất thép, vật liệu xây dựng, chế biến công nghiệp trong việc đầu tư nhà máy và giải quyết tranh chấp chuỗi cung ứng.',
  },
  {
    name: 'Công nghệ, Truyền thông & Viễn thông',
    desc: 'Bảo hộ bản quyền phần mềm, nền tảng số, thương mại điện tử, tuân thủ Nghị định bảo vệ dữ liệu cá nhân (PDPD) và an ninh mạng.',
  },
  {
    name: 'Hàng không, Hàng hải & Hậu cần (Logistics)',
    desc: 'Tư vấn thuê mua tàu bay, vận tải đường biển quốc tế, thành lập trung tâm kho vận logistics và xử lý tranh chấp bồi thường hàng hải.',
  },
];

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('practices'); // 'practices' | 'sectors'

  return (
    <section id="linh-vuc" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề & Hệ thống 2 Tab chuẩn mực YKVN */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-2">
            Năng lực chuyên môn
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-normal leading-[1.35] font-serif">
            Lĩnh Vực Hành Nghề &amp; Ngành Nghề Chuyên Biệt
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Chúng tôi cung cấp giải pháp pháp lý toàn diện từ cấp độ chiến lược kinh doanh đến tranh tụng bảo vệ quyền lợi tại Tòa án và Trọng tài.
          </p>

          {/* Tab Selector theo đúng phong cách YKVN */}
          <div className="flex border-b border-slate-200 mt-8 space-x-8">
            <button
              onClick={() => setActiveTab('practices')}
              className={`pb-3 text-sm font-semibold transition-all relative ${
                activeTab === 'practices'
                  ? 'text-[#0F2144] border-b-2 border-[#0F2144]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Lĩnh Vực Tư Vấn ({PRACTICE_AREAS.length})
            </button>
            <button
              onClick={() => setActiveTab('sectors')}
              className={`pb-3 text-sm font-semibold transition-all relative ${
                activeTab === 'sectors'
                  ? 'text-[#0F2144] border-b-2 border-[#0F2144]'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Ngành Nghề Tư Vấn ({INDUSTRY_SECTORS.length})
            </button>
          </div>
        </div>

        {/* TAB 1: LĨNH VỰC HÀNH NGHÈ */}
        {activeTab === 'practices' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden">
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
                  className="bg-white p-7 hover:bg-[#F8F9FA] transition-colors cursor-pointer text-left flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-slate-400 font-semibold">
                        {service.code}
                      </span>
                      <Icon className="w-5 h-5 text-slate-600 group-hover:text-[#C5221F] transition-colors" />
                    </div>

                    <h3 className="text-base font-bold text-[#0F2144] font-serif leading-snug group-hover:text-[#C5221F] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="truncate pr-2">Căn cứ: {service.details.basis.split(',')[0]}</span>
                    <span className="text-[#0F2144] font-semibold whitespace-nowrap group-hover:text-[#C5221F]">Chi tiết</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* TAB 2: NGÀNH NGHỀ TƯ VẤN CHUYÊN BIỆT */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {INDUSTRY_SECTORS.map((sector, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F8F9FA] rounded-lg border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#0F2144] font-serif leading-snug">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {sector.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-[#0F2144]">
                  Kinh nghiệm ngành sâu sắc &bull; Tư vấn theo chuẩn mực quốc tế
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
