import React from 'react';
import { ScaleIcon, CheckCircleIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FAF9F6] pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Tuyên ngôn pháp lý tối giản */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <p className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              Văn phòng Luật sư &bull; Đoàn Luật sư Việt Nam
            </p>

            <h1 
              className="text-2xl sm:text-3xl lg:text-[2.75rem] font-bold text-[#0F2144] tracking-normal font-serif"
              style={{ lineHeight: 1.55 }}
            >
              Bảo vệ quyền lợi hợp pháp bằng sự chuẩn mực của pháp luật và chiến lược tranh tụng kiên định.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Hòa &amp; Cộng sự tập trung vào các lĩnh vực pháp lý trọng yếu: Trọng tài thương mại quốc tế (VIAC, SIAC), Tranh tụng Tòa án các cấp, Mua bán &amp; Sáp nhập (M&amp;A) và Cố vấn pháp chế thường xuyên cho doanh nghiệp.
            </p>

            {/* Các cam kết cốt lõi */}
            <div className="pt-3 border-t border-slate-200 space-y-3 max-w-xl text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-4 h-4 text-[#C5221F] flex-shrink-0 mt-0.5" />
                <span>Bảo mật tuyệt đối thông tin thân chủ theo Luật Luật sư và Quy tắc đạo đức nghề nghiệp.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-4 h-4 text-[#C5221F] flex-shrink-0 mt-0.5" />
                <span>Minh bạch thù lao, đánh giá xác suất thắng kiện trung thực trước khi ký kết dịch vụ.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-4 h-4 text-[#C5221F] flex-shrink-0 mt-0.5" />
                <span>Đồng hành từ giai đoạn hòa giải, tố tụng cho tới khi thi hành xong phán quyết.</span>
              </div>
            </div>

            {/* Nút hành động duy nhất */}
            <div className="pt-2">
              <button
                onClick={() => scrollTo('lien-he')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded text-sm font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all"
              >
                Đặt lịch hẹn tư vấn với luật sư
              </button>
            </div>
          </div>

          {/* Cột phải: Hồ sơ tiếp nhận tóm tắt */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-8 border border-slate-200/90 text-left space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#0F2144] text-amber-400 flex items-center justify-center">
                    <ScaleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#0F2144] font-serif leading-normal">
                      Hòa &amp; Cộng sự
                    </h2>
                    <p className="text-xs text-slate-500">Hãng luật điều hành</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded">
                  Hà Nội &bull; TP.HCM &bull; Singapore
                </span>
              </div>

              {/* Tuyên ngôn của Luật sư Sáng lập */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                  Tôn chỉ nghề nghiệp
                </p>
                <blockquote className="text-sm text-slate-700 italic border-l-2 border-[#0F2144] pl-3.5 py-1 leading-relaxed">
                  &ldquo;Nghề Luật sư đòi hỏi sự tỉnh táo trước pháp luật, sự cẩn trọng trước từng tài liệu và lòng kiên định vì quyền lợi hợp pháp của thân chủ.&rdquo;
                </blockquote>
                <p className="text-xs text-slate-600 font-medium pt-1">
                  — Luật sư Võ Văn Hoà, Giám đốc điều hành
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
