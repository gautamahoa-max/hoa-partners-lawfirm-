import React from 'react';
import { ScaleIcon, AwardIcon, ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

export default function LawyerBio({ onOpenConsultModal }) {
  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ve-chung-toi" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Cột Trái: Chân dung thương hiệu & Tôn chỉ */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Khung nền trang trọng */}
              <div className="relative bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-900/20 overflow-hidden">
                {/* Hoa văn chìm */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <ScaleIcon className="w-4 h-4 text-amber-400" />
                    Người Sáng Lập &amp; Điều Hành
                  </div>

                  {/* Chân dung đại diện thiết kế sang trọng */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-serif font-black text-3xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    VH
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                      Luật sư Võ Văn Hoà
                    </h3>
                    <p className="text-amber-400 text-sm font-semibold mt-1">
                      Luật Sư Sáng Lập | Giám Đốc Điều Hành Hãng Luật
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed italic border-l-2 border-amber-400 pl-4">
                    &ldquo;Hành nghề Luật sư không chỉ là nắm vững các điều luật, mà là sứ mệnh bảo vệ sự công bằng, mang lại điểm tựa an tâm cho doanh nhân và bảo toàn công lý cho xã hội.&rdquo;
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Cử nhân Luật học (LL.B) &amp; Thạc sĩ Luật kinh tế (LL.M)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Thành viên Liên đoàn Luật sư Việt Nam &amp; Đoàn Luật sư</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Chuyên gia tư vấn Hợp đồng thương mại &amp; Pháp chế doanh nghiệp</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={scrollToContact}
                      className="w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 text-center transition-colors shadow-md"
                    >
                      Kết Nối Trực Tiếp Với Luật Sư Hoà
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải: Câu chuyện, Hoài bão & 3 Trụ Cột Giá Trị */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              Tầm Nhìn &amp; Sứ Mệnh
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif leading-tight">
              Tận Tâm Bảo Vệ Quyền Lợi, <br />
              Định Hình Tương Lai Vững Bền
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong>HÒA &amp; CỘNG SỰ</strong> được xây dựng từ ngọn lửa đam mê công lý và khát vọng trở thành một điểm tựa pháp lý vững chãi cho mọi khách hàng. Trong một thế giới kinh doanh biến đổi không ngừng và hệ thống luật pháp ngày càng hoàn thiện, mỗi quyết định pháp lý chuẩn xác là chiếc chìa khóa bảo vệ thành quả của cả một đời gây dựng.
            </p>

            {/* 3 Trụ Cột Giá Trị Cốt Lõi */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    01
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Tư Duy Pháp Lý Sắc Bén &amp; Chiến Lược Đa Chiều
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Chúng tôi không chỉ trích dẫn luật, mà phân tích bản chất thương mại và tâm lý các bên để vạch ra lộ trình giải quyết tối ưu: hòa giải khi có thể và tranh tụng quyết liệt khi cần thiết.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Chính Trực &amp; Tuyệt Đối Minh Bạch Chi Phí
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Đánh giá trung thực xác suất thắng kiện ngay từ buổi đầu tiếp nhận hồ sơ. Mọi khoản thù lao, lệ phí và thù lao theo kết quả được ghi nhận rõ ràng bằng văn bản hợp đồng dịch vụ.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Bảo Mật Thông Tin &amp; Trách Nhiệm Đến Cùng
                    </h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Bí mật vụ việc và danh tính khách hàng là nguyên tắc bất khả xâm phạm. Chúng tôi đồng hành xuyên suốt từ giai đoạn hòa giải, tố tụng cho tới khi thi hành xong bản án.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
