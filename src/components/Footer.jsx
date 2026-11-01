import React from 'react';
import { ScaleIcon, PhoneIcon, MailIcon } from './Icons';

export default function Footer({ onOpenRiskModal }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800 text-left">
          
          {/* Cột 1: Thông tin thương hiệu hãng luật */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center">
                <ScaleIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif tracking-tight">
                  HÒA &amp; CỘNG SỰ
                </span>
                <p className="text-xs text-slate-400">
                  Công ty Luật TNHH Hòa &amp; Cộng sự
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Đại diện tố tụng tại Tòa án và Trọng tài Thương mại, cung cấp dịch vụ cố vấn pháp chế doanh nghiệp thường xuyên và thẩm định hợp đồng.
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
                  Tranh tụng Tòa án và Trọng tài VIAC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Pháp chế Doanh nghiệp thường xuyên
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Soạn thảo và Thẩm định Hợp đồng
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Mua bán và Sáp nhập (M&amp;A)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Đất đai và Bất động sản
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-white transition-colors">
                  Bảo hộ Nhãn hiệu và Sở hữu trí tuệ
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3: Công cụ & Hỗ trợ */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Tra cứu &amp; Liên hệ
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div>
                <button
                  onClick={() => scrollTo('tinh-an-phi')}
                  className="font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Tra cứu án phí theo Nghị quyết 326/2016
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenRiskModal}
                  className="font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  Khảo sát rủi ro pháp lý doanh nghiệp
                </button>
              </div>
              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p className="flex items-center gap-1.5 text-slate-300">
                  <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
                  Đường dây nóng: <strong>0912.345.678</strong>
                </p>
                <p className="flex items-center gap-1.5 text-slate-300">
                  <MailIcon className="w-3.5 h-3.5 text-amber-400" />
                  Hòm thư: <strong>contact@hoapartners.vn</strong>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tuyên bố miễn trừ trách nhiệm pháp lý chuẩn mực */}
        <div className="py-6 border-b border-slate-800 text-left text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Miễn trừ trách nhiệm pháp lý:</strong> Toàn bộ thông tin, bảng tính án phí và bài viết trên website mang tính chất tham khảo học thuật và phổ biến kiến thức pháp luật chung, không cấu thành ý kiến tư vấn pháp lý chính thức cho một vụ việc cụ thể. Để có giải pháp pháp lý toàn diện, Quý khách vui lòng liên hệ trực tiếp với luật sư.
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} CÔNG TY LUẬT TNHH HÒA &amp; CỘNG SỰ. Bản quyền thuộc về Luật sư Võ Văn Hoà.
          </p>
          <p className="text-slate-500 font-mono text-[11px]">
            Thượng tôn Pháp luật &bull; Bảo toàn Quyền lợi
          </p>
        </div>

      </div>
    </footer>
  );
}
