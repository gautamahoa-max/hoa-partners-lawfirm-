import React from 'react';
import { FileTextIcon, ScaleIcon, ShieldCheckIcon, CheckCircleIcon } from './Icons';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Tiếp Nhận & Thẩm Định Sơ Bộ',
      time: 'Trong vòng 30 phút',
      desc: 'Luật sư tiếp nhận hồ sơ, lắng nghe bản chất vụ việc và ký cam kết bảo mật thông tin (NDA) trước khi đi sâu phân tích.',
      icon: FileTextIcon,
    },
    {
      num: '02',
      title: 'Lập Báo Cáo Chiến Lược Pháp Lý',
      time: '24 - 48 giờ làm việc',
      desc: 'Phân tích điểm mạnh, điểm yếu, căn cứ pháp luật hiện hành và đánh giá xác suất thắng kiện / thương lượng thành công.',
      icon: ScaleIcon,
    },
    {
      num: '03',
      title: 'Ký Hợp Đồng Dịch Vụ & Thu Thập Chứng Cứ',
      time: 'Rõ ràng, minh bạch',
      desc: 'Thống nhất phạm vi công việc, thù lao cố định. Tiến hành trích lục tài liệu, giám định và củng cố toàn diện chứng cứ.',
      icon: ShieldCheckIcon,
    },
    {
      num: '04',
      title: 'Trực Tiếp Thực Thi & Bảo Vệ Quyền Lợi',
      time: 'Đồng hành đến cùng',
      desc: 'Đại diện đàm phán, tham gia tố tụng tại Tòa án/Trọng tài và giám sát quá trình thi hành án cho đến khi nhận đủ quyền lợi.',
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section id="quy-trinh" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Quy Trình Chuyên Nghiệp
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            4 Bước Giải Quyết Vụ Việc Chuẩn Mực
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Mọi bước đi đều được hoạch định rõ ràng, có căn cứ luật định và thông báo tiến độ kịp thời tới Quý khách.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-slate-50 rounded-3xl p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all text-left flex flex-col justify-between"
              >
                <div>
                  {/* Số bước & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-amber-600 font-serif">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-amber-900 bg-amber-100/70 px-2.5 py-0.5 rounded-md mb-2">
                    {step.time}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 font-serif leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                  Bước {idx + 1} / 4 trong quy trình
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
