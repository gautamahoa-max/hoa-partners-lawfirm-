import React from 'react';
import { PhoneIcon, MailIcon, ClockIcon, ShieldCheckIcon, ZaloIcon } from './Icons';

export default function ContactSection() {
  return (
    <section id="lien-he" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề mục liên hệ */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-mono font-semibold text-slate-500 mb-2 uppercase tracking-wider">
            Thông tin liên hệ &bull; Mạng lưới văn phòng
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-normal leading-[1.45] sm:leading-[1.4] font-serif">
            Tiếp nhận hồ sơ và Tư vấn trực tiếp
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Quý thân chủ và đối tác có thể trao đổi trực tiếp với Luật sư Võ Văn Hoà hoặc chuyển phát hồ sơ vụ việc tới các văn phòng của Hòa &amp; Cộng sự qua các kênh chính thức dưới đây.
          </p>
        </div>

        {/* 2 Khối liên hệ trực tiếp nổi bật: Đường dây nóng & Hòm thư */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          
          {/* Card 1: Đường dây nóng */}
          <div className="bg-[#FAF9F6] rounded-xl p-7 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Đường dây nóng hỗ trợ tố tụng 24/7</span>
              </div>

              <a
                href="tel:0988886447"
                className="text-2xl sm:text-3xl font-bold text-[#0F2144] hover:text-[#142859] font-mono tracking-tight transition-colors block mb-3"
              >
                098.888.6447
              </a>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Tiếp nhận hỗ trợ khẩn cấp đối với các vụ việc tạm giữ, áp dụng biện pháp khẩn cấp tạm thời, tranh chấp hợp đồng kinh tế quy mô lớn tại Tòa án và Hội đồng Trọng tài (VIAC, SIAC).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href="tel:0988886447"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0F2144] text-white hover:bg-[#142859] text-xs font-semibold transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-amber-400" />
                <span>Gọi trực tiếp</span>
              </a>

              <a
                href="https://zalo.me/0988886447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0068FF] text-white hover:bg-blue-600 text-xs font-semibold transition-colors"
              >
                <ZaloIcon className="w-4 h-4" />
                <span>Nhắn tin qua Zalo</span>
              </a>
            </div>
          </div>

          {/* Card 2: Hòm thư tiếp nhận */}
          <div className="bg-[#FAF9F6] rounded-xl p-7 sm:p-8 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-3">
                <MailIcon className="w-4 h-4 text-slate-500" />
                <span>Hòm thư tiếp nhận tài liệu vụ việc</span>
              </div>

              <a
                href="mailto:Gautamahoa@gmail.com"
                className="text-xl sm:text-2xl font-bold text-[#0F2144] hover:text-[#142859] tracking-tight transition-colors block mb-3 break-all"
              >
                Gautamahoa@gmail.com
              </a>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Tiếp nhận tài liệu hợp đồng, hồ sơ chứng cứ vụ kiện và yêu cầu phát hành Thư ý kiến pháp lý (Legal Opinion). Luật sư điều hành trực tiếp bảo mật và phản hồi trong 24 giờ làm việc.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
              <a
                href="mailto:Gautamahoa@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 text-xs font-semibold transition-colors"
              >
                <MailIcon className="w-4 h-4 text-slate-600" />
                <span>Gửi thư điện tử</span>
              </a>
              <span className="text-xs text-slate-500">Phản hồi trong 24 giờ</span>
            </div>
          </div>

        </div>

        {/* Mạng lưới 3 Văn phòng đại diện */}
        <div className="mb-10 text-left">
          <p className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider mb-5">
            Hệ thống trụ sở &amp; Văn phòng đại diện
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Văn phòng Hà Nội */}
            <div className="bg-[#FAF9F6] p-6 rounded-lg border border-slate-200 text-left space-y-3">
              <div className="pb-3 border-b border-slate-200">
                <span className="text-[11px] font-mono font-bold text-[#C5221F] uppercase">Trụ sở chính</span>
                <h3 className="text-lg font-bold text-[#0F2144] font-serif mt-0.5">
                  Văn phòng Hà Nội
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tòa tháp Diamond Flower, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội
              </p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p><strong>Lĩnh vực:</strong> Tranh tụng Tòa án, Trọng tài VIAC &amp; Pháp chế</p>
                <p><strong>Hotline:</strong> 098.888.6447</p>
              </div>
            </div>

            {/* Văn phòng TP. Hồ Chí Minh */}
            <div className="bg-[#FAF9F6] p-6 rounded-lg border border-slate-200 text-left space-y-3">
              <div className="pb-3 border-b border-slate-200">
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Chi nhánh miền Nam</span>
                <h3 className="text-lg font-bold text-[#0F2144] font-serif mt-0.5">
                  Văn phòng TP. Hồ Chí Minh
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tòa nhà Landmark 81, Phường 22, Quận Bình Thạnh, TP. Hồ Chí Minh
              </p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p><strong>Lĩnh vực:</strong> M&amp;A, Ngân hàng, Bất động sản &amp; Dự án</p>
                <p><strong>Hotline:</strong> 098.888.6447</p>
              </div>
            </div>

            {/* Văn phòng Singapore */}
            <div className="bg-[#FAF9F6] p-6 rounded-lg border border-slate-200 text-left space-y-3">
              <div className="pb-3 border-b border-slate-200">
                <span className="text-[11px] font-mono font-bold text-slate-500 uppercase">Đại diện quốc tế</span>
                <h3 className="text-lg font-bold text-[#0F2144] font-serif mt-0.5">
                  Văn phòng Singapore
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Marina Bay Financial Centre, Marina Boulevard, Singapore
              </p>
              <div className="pt-2 text-xs text-slate-500 space-y-1">
                <p><strong>Lĩnh vực:</strong> Trọng tài quốc tế (SIAC, ICC) &amp; Đầu tư</p>
                <p><strong>Email:</strong> Gautamahoa@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* Cam kết bảo mật & Thời gian làm việc */}
        <div className="p-6 rounded-xl bg-[#FAF9F6] border border-slate-200 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 max-w-2xl">
            <ShieldCheckIcon className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>Cam kết bảo mật tuyệt đối:</strong> Toàn bộ thông tin, tài liệu và tình tiết vụ việc của thân chủ được giữ kín theo quy định tại Điều 25 Luật Luật sư 2006 và Quy tắc Đạo đức và ứng xử nghề nghiệp Luật sư Việt Nam.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 flex-shrink-0">
            <ClockIcon className="w-4 h-4 text-slate-500" />
            <span>Thứ 2 &ndash; Thứ 7: 08:00 &ndash; 18:00 (Hỗ trợ khẩn cấp 24/7)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
