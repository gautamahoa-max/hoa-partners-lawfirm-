import React from 'react';
import { ShieldCheckIcon, ScaleIcon, AwardIcon, ArrowRightIcon, CalculatorIcon, CheckCircleIcon } from './Icons';

export default function Hero({ onOpenRiskModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-100">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Cột Trái: Thông điệp cốt lõi & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tagline định danh */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Hãng Luật &amp; Cố Vấn Pháp Lý Hàng Đầu Việt Nam
              </span>
            </div>

            {/* Tiêu đề chính hùng hồn & trang trọng */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.18] font-serif">
              Vững Pháp Lý, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-amber-700">
                Bảo Vệ Quyền Lợi Tối Đa
              </span> Cho Bạn.
            </h1>

            {/* Mô tả súc tích & đáng tin cậy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Chúng tôi đại diện bảo vệ quyền lợi hợp pháp của doanh nghiệp và cá nhân với tư duy pháp lý sắc bén, chiến lược tranh tụng vững vàng và tinh thần thượng tôn pháp luật.
            </p>

            {/* Điểm nhấn cam kết nhanh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Bảo mật tuyệt đối thông tin vụ việc</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Minh bạch 100% thù lao &amp; chi phí</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Tư vấn chiến lược đa chiều trước khởi kiện</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Phản hồi &amp; tiếp nhận hồ sơ trong 30 phút</span>
              </div>
            </div>

            {/* Nút hành động (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={() => scrollTo('lien-he')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/15 hover:shadow-slate-900/25 transition-all duration-200"
              >
                <span>Đặt Lịch Tư Vấn Trực Tiếp</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('tinh-an-phi')}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-base font-bold bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm transition-all duration-200"
              >
                <CalculatorIcon className="w-5 h-5 text-amber-600" />
                <span>Bảng Tính Án Phí NQ 326</span>
              </button>
            </div>

            {/* Banner nhỏ kiểm tra rủi ro */}
            <div className="pt-2">
              <button
                onClick={onOpenRiskModal}
                className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-800 bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200/80 px-4 py-2.5 rounded-xl transition-all"
              >
                <ShieldCheckIcon className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Bạn muốn kiểm tra rủi ro hợp đồng &amp; pháp lý của mình? Bấm để làm khảo sát 1 phút &rarr;</span>
              </button>
            </div>

          </div>

          {/* Cột Phải: Thẻ định danh & Khí chất Hãng Luật */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl shadow-slate-200/70">
              
              {/* Badge trên thẻ */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md">
                    <ScaleIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif leading-tight">
                      HÒA &amp; CỘNG SỰ
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Hội Đồng Luật Sư &amp; Cố Vấn</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  Đang trực tuyến
                </span>
              </div>

              {/* Tôn chỉ nghề nghiệp của Luật sư tương lai */}
              <div className="py-6 space-y-4">
                <blockquote className="text-slate-700 italic text-sm sm:text-base border-l-2 border-amber-500 pl-4 py-1">
                  &ldquo;Công lý không tự nhiên xuất hiện, nó được tạo dựng bởi sự dũng cảm, tri thức chuẩn mực và cái tâm trong sáng của người hành nghề Luật.&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-serif font-bold text-slate-800 text-base">
                    VH
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Luật sư Võ Văn Hoà &amp; Đội ngũ</p>
                    <p className="text-xs text-slate-500">Người sáng lập &amp; Điều hành hãng luật</p>
                  </div>
                </div>
              </div>

              {/* Lưới số liệu chứng minh năng lực */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">98.6%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Vụ việc đạt kết quả kỳ vọng</p>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">500+</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Hợp đồng &amp; hồ sơ đã thẩm định</p>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-amber-700 font-serif">30 phút</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Tốc độ phản hồi tiếp nhận</p>
                </div>
                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-left">
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">100%</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Cam kết bảo mật thông tin</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
