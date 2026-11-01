import React from 'react';
import { ScaleIcon, PhoneIcon, MailIcon, MapPinIcon } from './Icons';

export default function Footer({ onOpenRiskModal }) {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900 text-left">
          
          {/* Cột 1: Thông tin thương hiệu hãng luật */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center shadow-md">
                <ScaleIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-serif tracking-tight">
                  HÒA &amp; CỘNG SỰ
                </span>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  HOA &amp; PARTNERS LAW FIRM
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Hãng luật hàng đầu chuyên sâu về Tranh tụng Tòa án &amp; Trọng tài, Pháp chế Doanh nghiệp, Hợp đồng và Bất động sản.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Giấy phép hoạt động số: <strong>0108929/TP/ĐKHĐ</strong> do Sở Tư pháp cấp</p>
              <p>Mã số doanh nghiệp: <strong>0109887766</strong></p>
              <p>Luật sư Điều hành: <strong>Luật sư Võ Văn Hoà</strong></p>
            </div>
          </div>

          {/* Cột 2: Lĩnh vực dịch vụ */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Lĩnh Vực Hành Nghề
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-amber-400 transition-colors">
                  Tranh tụng Tòa án &amp; Trọng tài VIAC
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-amber-400 transition-colors">
                  Pháp chế Doanh nghiệp Thường xuyên
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-amber-400 transition-colors">
                  Soạn thảo &amp; Thẩm định Hợp đồng
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-amber-400 transition-colors">
                  Mua bán &amp; Sáp nhập (M&amp;A)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-amber-400 transition-colors">
                  Đất đai &amp; Bất động sản
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('linh-vuc')} className="hover:text-amber-400 transition-colors">
                  Bảo hộ Nhãn hiệu &amp; Sở hữu trí tuệ
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3: Công cụ & Hỗ trợ */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Công Cụ Trực Tuyến &amp; Văn Phòng
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div>
                <button
                  onClick={() => scrollTo('tinh-an-phi')}
                  className="font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  &rarr; Bảng tính án phí chuẩn Nghị quyết 326/2016
                </button>
              </div>
              <div>
                <button
                  onClick={onOpenRiskModal}
                  className="font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  &rarr; Kiểm tra sức khỏe pháp lý doanh nghiệp
                </button>
              </div>
              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p className="flex items-center gap-1.5 text-slate-300">
                  <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
                  Hotline tư vấn: <strong>0912.345.678</strong>
                </p>
                <p className="flex items-center gap-1.5 text-slate-300">
                  <MailIcon className="w-3.5 h-3.5 text-amber-400" />
                  Email: <strong>contact@hoapartners.vn</strong>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Tuyên bố miễn trừ trách nhiệm pháp lý chuẩn mực */}
        <div className="py-6 border-b border-slate-900 text-left text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300">Miễn trừ trách nhiệm pháp lý:</strong> Toàn bộ thông tin, bảng tính án phí và bài viết đăng tải trên website mang tính chất tham khảo học thuật và thông tin pháp luật phổ thông. Chúng không thay thế cho văn bản tư vấn pháp lý chính thức cho từng tình huống cụ thể. Để có giải pháp tối ưu cho vụ việc của bạn, vui lòng liên hệ trực tiếp với Luật sư.
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            &copy; {currentYear} <strong>CÔNG TY LUẬT TNHH HÒA &amp; CỘNG SỰ</strong>. Bản quyền thuộc về Luật sư Võ Văn Hoà.
          </p>
          <p className="text-amber-400/90 font-medium">
            Vững Pháp Lý &bull; Trọn Niềm Tin
          </p>
        </div>

      </div>
    </footer>
  );
}
