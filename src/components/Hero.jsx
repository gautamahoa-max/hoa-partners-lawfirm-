import React from 'react';
import { ShieldCheckIcon, ScaleIcon, ArrowRightIcon, CalculatorIcon, CheckCircleIcon } from './Icons';

export default function Hero({ onOpenRiskModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#FBFBFB] pt-12 pb-16 md:pt-20 md:pb-28 border-b border-slate-200/70">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Cột Trái: Thông điệp cốt lõi & Call to Actions */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Tagline định danh thẩm quyền */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-amber-600 animate-pulse-subtle"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Hãng Luật &amp; Cố Vấn Pháp Lý Doanh Nghiệp
              </span>
            </div>

            {/* Tiêu đề chính trang trọng, vững chãi, không gradient loè loẹt */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.18] font-serif">
              Vững Pháp Lý, <br className="hidden sm:inline" />
              Bảo Vệ Quyền Lợi Tối Đa <br className="hidden sm:inline" />
              <span className="text-amber-700">Cho Doanh Nghiệp &amp; Bạn.</span>
            </h1>

            {/* Mô tả súc tích & đáng tin cậy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Chúng tôi đại diện bảo vệ quyền lợi hợp pháp của thân chủ với tư duy pháp lý sắc bén, chiến lược tranh tụng vững vàng tại Tòa án &amp; Trọng tài quốc tế, và tinh thần thượng tôn công lý.
            </p>

            {/* Điểm nhấn cam kết thiết thực */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
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
                <span>Chiến lược đa chiều trước khi khởi kiện</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <span>Tiếp nhận &amp; phản hồi trong 30 phút</span>
              </div>
            </div>

            {/* Nút hành động với phản hồi xúc giác (tactile push feedback) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('lien-he')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-base font-bold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] active:scale-[0.99] shadow-xl shadow-slate-900/15 transition-all duration-150"
              >
                <span>Đặt Lịch Tư Vấn Trực Tiếp</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('tinh-an-phi')}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-base font-bold bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:translate-y-[1px] active:scale-[0.99] shadow-sm transition-all duration-150"
              >
                <CalculatorIcon className="w-5 h-5 text-amber-600" />
                <span>Bảng Tính Án Phí NQ 326</span>
              </button>
            </div>

            {/* Banner nhỏ kiểm tra rủi ro */}
            <div className="pt-2">
              <button
                onClick={onOpenRiskModal}
                className="group flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-amber-900 bg-amber-50/80 hover:bg-amber-100/80 border border-amber-200/80 px-4 py-3 rounded-2xl active:translate-y-[1px] transition-all"
              >
                <ShieldCheckIcon className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Bạn muốn kiểm tra rủi ro hợp đồng &amp; pháp lý của mình? Bấm để làm khảo sát 1 phút &rarr;</span>
              </button>
            </div>

          </div>

          {/* Cột Phải: Thẻ định danh & Khí chất Hãng Luật */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl shadow-slate-200/70">
              
              {/* Header trên thẻ định danh */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
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
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  Trực tuyến 24/7
                </span>
              </div>

              {/* Tôn chỉ nghề nghiệp của Luật sư Võ Văn Hoà */}
              <div className="py-6 space-y-4">
                <blockquote className="text-slate-700 italic text-sm sm:text-base border-l-2 border-amber-500 pl-4 py-1 leading-relaxed">
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

              {/* Lưới năng lực pháp lý vững vàng */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tranh Tụng</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">Tòa Án &amp; VIAC</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sơ thẩm &amp; Phúc thẩm</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Doanh Nghiệp</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">Cố Vấn Thường Xuyên</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pháp chế &amp; M&amp;A</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">Phản Hồi</p>
                  <p className="text-sm font-bold text-amber-700 mt-1">Trong 30 Phút</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tiếp nhận hồ sơ nhanh</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Đạo Đức</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">Tuyệt Đối Bảo Mật</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Theo quy tắc luật sư</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
