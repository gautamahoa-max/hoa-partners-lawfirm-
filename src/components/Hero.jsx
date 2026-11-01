import React from 'react';
import { ScaleIcon, CheckCircleIcon, CalculatorIcon, ShieldCheckIcon } from './Icons';

export default function Hero({ onOpenRiskModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#F8F9FA] pt-14 pb-20 md:pt-20 md:pb-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Tuyên ngôn định vị theo phong cách YKVN */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-xs font-semibold text-[#0F2144] rounded">
              <span className="w-2 h-2 rounded-full bg-[#C5221F]"></span>
              <span>Hãng luật kinh doanh &amp; tranh tụng hàng đầu Việt Nam</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#0F2144] tracking-normal leading-[1.38] sm:leading-[1.32] font-serif">
              Cung cấp dịch vụ pháp lý ở trình độ cao nhất, bảo vệ quyền lợi tối đa cho thân chủ.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed">
              Hòa &amp; Cộng sự đã tạo dựng danh tiếng về chất lượng dịch vụ xuất sắc trong các lĩnh vực cốt lõi: Trọng tài thương mại quốc tế, Tranh tụng Tòa án, Mua bán &amp; Sáp nhập (M&amp;A), Ngân hàng và Dự án bất động sản.
            </p>

            {/* Các cam kết pháp lý chuẩn mực */}
            <div className="pt-2 border-t border-slate-200/80 space-y-3 max-w-xl">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-[#C5221F] flex-shrink-0 mt-0.5" />
                <span>Tiêu chuẩn hành nghề tương đương các hãng luật quốc tế hàng đầu (Magic Circle).</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-[#C5221F] flex-shrink-0 mt-0.5" />
                <span>Mạng lưới hoạt động chiến lược kết nối Hà Nội, TP. Hồ Chí Minh và Singapore.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-[#C5221F] flex-shrink-0 mt-0.5" />
                <span>Bảo mật tuyệt đối thông tin và tư vấn chiến lược toàn diện trước khi khởi kiện.</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('lien-he')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded text-sm font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all shadow-sm"
              >
                Đặt lịch tư vấn với luật sư
              </button>

              <button
                onClick={() => scrollTo('tinh-an-phi')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded text-sm font-semibold bg-white text-[#0F2144] border border-slate-300 hover:bg-slate-50 active:translate-y-[1px] transition-all shadow-sm"
              >
                <CalculatorIcon className="w-4 h-4 text-slate-600" />
                <span>Bảng tính án phí Tòa án (NQ 326)</span>
              </button>
            </div>
          </div>

          {/* Cột phải: Thẻ tóm lược thông số hãng luật */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-8 border border-slate-200 text-left space-y-6 shadow-sm">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#0F2144] text-amber-400 flex items-center justify-center">
                    <ScaleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#0F2144] font-serif leading-tight">
                      Hòa &amp; Cộng sự
                    </h2>
                    <p className="text-xs text-slate-500">Thông tin hãng luật</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                  Đang nhận hồ sơ
                </span>
              </div>

              {/* Tôn chỉ của Luật sư Điều hành */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Tuyên ngôn hành nghề
                </p>
                <blockquote className="text-sm text-slate-700 italic border-l-2 border-[#C5221F] pl-3.5 py-1 leading-relaxed">
                  &ldquo;Công lý được bảo đảm bằng tri thức pháp lý vững vàng, kỹ năng tranh tụng sắc bén và lòng tận tụy tối đa với quyền lợi của thân chủ.&rdquo;
                </blockquote>
                <p className="text-xs text-slate-600 font-medium">
                  — Luật sư Võ Văn Hoà, Giám đốc điều hành
                </p>
              </div>

              {/* Bảng trụ sở và thông số */}
              <div className="pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Mạng lưới văn phòng:</span>
                  <span className="font-semibold text-slate-900">Hà Nội &bull; TP.HCM &bull; Singapore</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Cơ quan tài phán chính:</span>
                  <span className="font-semibold text-slate-900">Tòa án nhân dân &amp; VIAC / SIAC</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Thời gian phản hồi:</span>
                  <span className="font-semibold text-slate-900">Trong 30 phút làm việc</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Chính sách bảo mật:</span>
                  <span className="font-semibold text-slate-900">Tuyệt đối theo Luật Luật sư</span>
                </div>
              </div>

              {/* Nút khảo sát */}
              <div className="pt-2">
                <button
                  onClick={onOpenRiskModal}
                  className="w-full py-3 px-4 rounded bg-[#F8F9FA] border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-4 h-4 text-amber-700" />
                    <span>Khảo sát rủi ro pháp lý doanh nghiệp</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">Miễn phí</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
