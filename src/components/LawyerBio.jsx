import React from 'react';
import { ScaleIcon, CheckCircleIcon } from './Icons';

export default function LawyerBio() {
  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="luat-su" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="ve-chung-toi" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Chân dung Luật sư điều hành */}
          <div className="lg:col-span-5 text-left">
            <div className="bg-[#FAF9F6] rounded-xl p-8 border border-slate-200 space-y-6">
              
              <div className="w-16 h-16 rounded bg-[#0F2144] text-amber-400 font-bold text-2xl flex items-center justify-center">
                VH
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0F2144]">
                  Luật sư Võ Văn Hoà
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                  Luật sư Điều hành &bull; Người sáng lập
                </p>
              </div>

              <blockquote className="text-sm text-slate-700 italic border-l-2 border-[#0F2144] pl-4 py-1 leading-relaxed">
                &ldquo;Một người hành nghề Luật giỏi không chỉ nắm vững điều luật, mà phải thấu hiểu bản chất quan hệ kinh tế và đồng hành cùng thân chủ bằng sự liêm chính.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  <span>Cử nhân Luật học (LL.B) &amp; Thạc sĩ Luật Kinh tế (LL.M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  <span>Thành viên Liên đoàn Luật sư Việt Nam &amp; Đoàn Luật sư</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-slate-600 flex-shrink-0" />
                  <span>Chuyên sâu về Trọng tài thương mại, M&amp;A và Pháp chế doanh nghiệp</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={scrollToContact}
                  className="w-full py-3 px-4 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#142859] transition-colors"
                >
                  Liên hệ trực tiếp với Luật sư Hoà
                </button>
              </div>

            </div>
          </div>

          {/* Cột phải: Giá trị cốt lõi và Tôn chỉ hành nghề */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Tôn chỉ hành nghề
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
              Tận tâm bảo vệ quyền lợi, định hình giải pháp pháp lý vững bền
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Hòa &amp; Cộng sự được thành lập với mục tiêu trở thành điểm tựa pháp lý đáng tin cậy. Trong bối cảnh các quy định pháp luật ngày càng được chuẩn hóa, một giải pháp pháp lý đúng thời điểm là lá chắn quan trọng nhất bảo vệ an toàn cho tài sản và hoạt động kinh doanh của thân chủ.
            </p>

            {/* Ba nguyên tắc thực thi */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#0F2144]">
                  1. Tư duy pháp lý sắc bén và đánh giá xác suất trung thực
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chúng tôi phân tích hồ sơ dưới nhiều góc độ tố tụng và giải thích thẳng thắn điểm mạnh, điểm yếu của vụ việc, không hứa hẹn viển vông.
                </p>
              </div>

              <div className="space-y-1 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-bold text-[#0F2144]">
                  2. Minh bạch chi phí và tiến độ
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mọi khoản thù lao, chi phí tố tụng và án phí đều được thỏa thuận rõ ràng bằng Hợp đồng dịch vụ pháp lý, cam kết không phát sinh chi phí ẩn.
                </p>
              </div>

              <div className="space-y-1 pt-3 border-t border-slate-100">
                <h4 className="text-sm font-bold text-[#0F2144]">
                  3. Đồng hành xuyên suốt quá trình tố tụng
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Luật sư chịu trách nhiệm cá nhân đối với từng vụ việc được giao, trực tiếp tham gia từ giai đoạn thương lượng, hòa giải cho tới khi thi hành xong phán quyết.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
