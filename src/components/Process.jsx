import React from 'react';
import { FileTextIcon, ScaleIcon, ShieldCheckIcon, CheckCircleIcon } from './Icons';

export default function Process() {
  const steps = [
    {
      num: '1',
      title: 'Tiếp nhận và Thẩm định sơ bộ',
      time: 'Trong vòng 30 phút',
      desc: 'Luật sư tiếp nhận hồ sơ, lắng nghe bản chất vụ việc và ký cam kết bảo mật thông tin (NDA) trước khi đi sâu phân tích.',
      icon: FileTextIcon,
    },
    {
      num: '2',
      title: 'Lập báo cáo chiến lược pháp lý',
      time: '24 - 48 giờ làm việc',
      desc: 'Phân tích điểm mạnh, điểm yếu, căn cứ pháp luật hiện hành và đánh giá xác suất thắng kiện hoặc thương lượng thành công.',
      icon: ScaleIcon,
    },
    {
      num: '3',
      title: 'Ký Hợp đồng và Thu thập chứng cứ',
      time: 'Rõ ràng, minh bạch',
      desc: 'Thống nhất phạm vi công việc và thù lao cố định. Tiến hành trích lục tài liệu, giám định và củng cố toàn diện chứng cứ.',
      icon: ShieldCheckIcon,
    },
    {
      num: '4',
      title: 'Trực tiếp tham gia tố tụng',
      time: 'Đồng hành đến cùng',
      desc: 'Đại diện đàm phán, tham gia phiên tòa Tòa án hoặc Trọng tài VIAC và giám sát quá trình thi hành án cho đến khi nhận đủ quyền lợi.',
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section id="quy-trinh" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-2">
            Trình tự tố tụng
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Quy trình tiếp nhận và Giải quyết vụ việc
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Mọi bước đi được hoạch định có căn cứ luật định và thông báo tiến độ kịp thời tới thân chủ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 bg-[#F8F9FA] rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-slate-600">
                      Giai đoạn {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-slate-600" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-serif leading-snug">
                    {step.title}
                  </h3>

                  <span className="inline-block text-[11px] font-medium text-slate-500 mt-1 mb-2">
                    {step.time}
                  </span>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
