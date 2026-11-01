import React from 'react';
import { ScaleIcon, PhoneIcon, MailIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F2144] text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800 text-left">
          
          {/* Cột 1: Thông tin thương hiệu hãng luật */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#142859] border border-slate-700 text-amber-400 flex items-center justify-center">
                <ScaleIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif tracking-normal">
                  HÒA &amp; CỘNG SỰ
                </span>
                <p className="text-xs text-slate-400">
                  Công ty Luật TNHH Hòa &amp; Cộng sự
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Đại diện tố tụng tại Tòa án và Trọng tài Thương mại Quốc tế, cung cấp dịch vụ cố vấn pháp chế thường xuyên và thẩm định hợp đồng.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Giấy phép hoạt động: <strong>0108929/TP/ĐKHĐ</strong> do Sở Tư pháp cấp</p>
              <p>Mã số doanh nghiệp: <strong>0109887766</strong></p>
              <p>Luật sư Điều hành: <strong>Luật sư Võ Văn Hoà</strong></p>
            </div>
          </div>

          {/* Cột 2: Lĩnh vực dịch vụ */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Lĩnh vực hành nghề
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Trọng tài Thương mại Quốc tế
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Tranh tụng Tòa án các cấp
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Mua bán &amp; Sáp nhập (M&amp;A)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Ngân hàng &amp; Thị trường vốn
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Bất động sản &amp; Xây dựng
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Pháp chế Doanh nghiệp thường xuyên
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3: Văn phòng & Liên hệ */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Hệ thống văn phòng
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p><strong>Hà Nội:</strong> Tòa tháp Diamond Flower, Phường Nhân Chính, Quận Thanh Xuân</p>
              <p><strong>TP. Hồ Chí Minh:</strong> Tòa nhà Landmark 81, Phường 22, Quận Bình Thạnh</p>
              <p><strong>Singapore:</strong> Marina Bay Financial Centre, Singapore</p>
              <div className="pt-2 text-xs text-slate-300 space-y-1">
                <p className="flex items-center gap-1.5">
                  <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
                  Đường dây nóng: <strong>0912.345.678</strong>
                </p>
                <p className="flex items-center gap-1.5">
                  <MailIcon className="w-3.5 h-3.5 text-amber-400" />
                  Hòm thư: <strong>contact@hoapartners.vn</strong>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tuyên bố miễn trừ trách nhiệm pháp lý chuẩn mực */}
        <div className="py-6 border-b border-slate-800 text-left text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Miễn trừ trách nhiệm pháp lý:</strong> Toàn bộ thông tin đăng tải trên website mang tính chất tham khảo học thuật và thông tin pháp luật chung, không cấu thành ý kiến tư vấn pháp lý chính thức cho một vụ việc cụ thể. Để có giải pháp pháp lý toàn diện, Quý khách vui lòng liên hệ trực tiếp với luật sư.
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} CÔNG TY LUẬT TNHH HÒA &amp; CỘNG SỰ. Bản quyền thuộc về Luật sư Võ Văn Hoà.
          </p>
          <p className="text-slate-400 font-mono text-[11px]">
            Hà Nội &bull; TP. Hồ Chí Minh &bull; Singapore
          </p>
        </div>

      </div>
    </footer>
  );
}
