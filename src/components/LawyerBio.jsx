import React from 'react';
import { CheckCircleIcon } from './Icons';

export default function LawyerBio() {
  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="luat-su" className="py-20 sm:py-24 bg-white border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="ve-chung-toi" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Cột trái: Thông tin Luật sư sáng lập (Không đóng khung thẻ) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="border-b border-slate-200/80 pb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                LUẬT SƯ ĐIỀU HÀNH &bull; SÁNG LẬP
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2144]">
                Luật sư Võ Văn Hoà
              </h3>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                Thạc sĩ Luật Kinh tế (LL.M) &bull; Cử nhân Luật (LL.B)
              </p>
            </div>

            <blockquote className="text-sm text-slate-700 italic border-l-2 border-[#0F2144] pl-4 py-1 leading-relaxed">
              &ldquo;Một người hành nghề Luật giỏi không chỉ nắm vững điều luật, mà phải thấu hiểu bản chất quan hệ kinh tế và đồng hành cùng thân chủ bằng sự liêm chính.&rdquo;
            </blockquote>

            <div className="space-y-2.5 text-xs text-slate-600 pt-2">
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#0F2144] flex-shrink-0" />
                <span>Thành viên Liên đoàn Luật sư Việt Nam &amp; Đoàn Luật sư</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#0F2144] flex-shrink-0" />
                <span>Hơn 15 năm kinh nghiệm tranh tụng thương mại và đàm phán hợp đồng</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-[#0F2144] flex-shrink-0" />
                <span>Chuyên sâu về Trọng tài quốc tế (VIAC, SIAC), M&amp;A và Bất động sản</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#142859] transition-all"
              >
                <span>Liên hệ trực tiếp với Luật sư Hoà</span>
                <span className="ml-2">&rarr;</span>
              </button>
            </div>

          </div>

          {/* Cột phải: Giá trị cốt lõi và Tôn chỉ hành nghề (Mục lục mở) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Tôn chỉ hành nghề &bull; Văn hóa thực thi
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
              Tận tâm bảo vệ quyền lợi, định hình giải pháp pháp lý vững bền
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Hòa &amp; Cộng sự được thành lập với mục tiêu trở thành điểm tựa pháp lý tin cậy và chuẩn mực. Trong bối cảnh thương mại và pháp luật ngày càng phức tạp, một giải pháp pháp lý đúng thời điểm là lá chắn quan trọng nhất bảo vệ an toàn cho tài sản và hoạt động kinh doanh của thân chủ.
            </p>

            {/* Ba nguyên tắc thực thi thanh lịch */}
            <div className="space-y-5 pt-4">
              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold text-slate-400 font-mono">01</span>
                  <h4 className="text-sm font-bold text-[#0F2144]">
                    Tư duy pháp lý sắc bén và đánh giá xác suất trung thực
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  Chúng tôi phân tích hồ sơ dưới nhiều góc độ tố tụng và giải thích thẳng thắn điểm mạnh, điểm yếu của vụ việc, không hứa hẹn viển vông.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold text-slate-400 font-mono">02</span>
                  <h4 className="text-sm font-bold text-[#0F2144]">
                    Minh bạch chi phí và tiến độ
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  Mọi khoản thù lao, chi phí tố tụng và án phí đều được thỏa thuận rõ ràng bằng Hợp đồng dịch vụ pháp lý, cam kết không phát sinh chi phí ẩn.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-bold text-slate-400 font-mono">03</span>
                  <h4 className="text-sm font-bold text-[#0F2144]">
                    Đồng hành xuyên suốt quá trình tố tụng
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
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
