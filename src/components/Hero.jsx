import React from 'react';
import { ScaleIcon, CheckCircleIcon, CalculatorIcon, ShieldCheckIcon } from './Icons';

export default function Hero({ onOpenRiskModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FDFDFC] pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Tuyên ngôn pháp lý & Lối tiếp cận trực tiếp */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-xs font-semibold text-slate-500 tracking-normal">
              Văn phòng Luật sư &bull; Đoàn Luật sư Việt Nam
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.18] font-serif">
              Bảo vệ quyền lợi hợp pháp bằng sự chuẩn mực của pháp luật và chiến lược tranh tụng kiên định.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Hãng luật Hòa &amp; Cộng sự đại diện cho thân chủ tại Tòa án các cấp và Trung tâm Trọng tài Quốc tế (VIAC), đồng thời cung cấp dịch vụ cố vấn pháp chế thường xuyên cho doanh nghiệp tại Việt Nam.
            </p>

            {/* Các cam kết thực chất theo Luật Luật sư */}
            <div className="pt-2 border-t border-slate-200 space-y-3 max-w-xl">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>Bảo mật tuyệt đối bí mật thông tin của thân chủ theo Quy tắc đạo đức nghề nghiệp.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>Minh bạch thù lao, giải thích rõ các bước tố tụng và xác suất vụ việc trước khi ký hợp đồng dịch vụ.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircleIcon className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>Trực tiếp tham gia tố tụng và giám sát thi hành án cho tới khi kết thúc vụ việc.</span>
              </div>
            </div>

            {/* Hành động chính: Không dùng mũi tên rập khuôn */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('lien-he')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 active:translate-y-[1px] transition-all"
              >
                Đặt lịch tư vấn với luật sư
              </button>

              <button
                onClick={() => scrollTo('tinh-an-phi')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 active:translate-y-[1px] transition-all"
              >
                <CalculatorIcon className="w-4 h-4 text-slate-600" />
                <span>Tra cứu án phí theo Nghị quyết 326</span>
              </button>
            </div>
          </div>

          {/* Cột phải: Hồ sơ tiếp nhận ban đầu (Editorial Legal Docket) */}
          <div className="lg:col-span-5">
            <div className="bg-[#F8F9FA] rounded-2xl p-7 border border-slate-200 text-left space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center">
                    <ScaleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-slate-900 font-serif leading-tight">
                      Hòa &amp; Cộng sự
                    </h2>
                    <p className="text-xs text-slate-500">Tiếp nhận hồ sơ pháp lý</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                  Đang nhận hồ sơ
                </span>
              </div>

              {/* Tuyên ngôn của Luật sư sáng lập */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Trách nhiệm nghề nghiệp
                </p>
                <blockquote className="text-sm text-slate-700 italic border-l-2 border-slate-400 pl-3.5 py-0.5 leading-relaxed">
                  &ldquo;Nghề Luật sư đòi hỏi sự tỉnh táo trước pháp luật, sự cẩn trọng trước từng tài liệu và lòng kiên định vì quyền lợi hợp pháp của thân chủ.&rdquo;
                </blockquote>
                <p className="text-xs text-slate-600 font-medium">
                  — Luật sư Võ Văn Hoà, Giám đốc điều hành
                </p>
              </div>

              {/* Thông số hoạt động chính thức */}
              <div className="pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Phạm vi tài phán:</span>
                  <span className="font-semibold text-slate-900">Tòa án các cấp &amp; VIAC</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Thời gian phản hồi:</span>
                  <span className="font-semibold text-slate-900">Trong 30 phút làm việc</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Chính sách bảo mật:</span>
                  <span className="font-semibold text-slate-900">Theo Luật Luật sư 2006</span>
                </div>
              </div>

              {/* Nút khảo sát rủi ro */}
              <div className="pt-2">
                <button
                  onClick={onOpenRiskModal}
                  className="w-full py-3 px-4 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheckIcon className="w-4 h-4 text-amber-700" />
                    <span>Khảo sát rủi ro pháp lý doanh nghiệp</span>
                  </span>
                  <span className="text-slate-400 font-mono">1 phút</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
