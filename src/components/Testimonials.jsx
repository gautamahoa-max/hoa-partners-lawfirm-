import React from 'react';
import { AwardIcon } from './Icons';

export default function Testimonials() {
  const cases = [
    {
      category: 'Tranh Tụng Trọng Tài VIAC',
      value: '42 Tỷ VNĐ',
      title: 'Thu hồi thành công khoản công nợ khó đòi trong hợp đồng cung ứng quốc tế',
      result: 'Hội đồng Trọng tài tuyên chấp nhận 100% yêu cầu khởi kiện và bồi thường thiệt hại.',
      client: 'Tổng Giám đốc Tập đoàn Thép & Xuất Nhập Khẩu',
    },
    {
      category: 'Tư Vấn M&A Doanh Nghiệp',
      value: '8.5 Triệu USD',
      title: 'Thẩm định pháp lý (LDD) & đàm phán hợp đồng chuyển nhượng vốn chuỗi công nghệ',
      result: 'Phát hiện 3 rủi ro thuế trọng yếu, đàm phán giảm 12% giá mua thành công.',
      client: 'Chủ tịch Quỹ Đầu Tư Tư Nhân (PE Fund)',
    },
    {
      category: 'Tranh Chấp Đất Đai',
      value: '3.200 m²',
      title: 'Khởi kiện yêu cầu hủy quyết định thu hồi đất và công nhận quyền sử dụng hợp pháp',
      result: 'Tòa án nhân dân cấp cao tuyên hủy quyết định hành chính, cấp Giấy chứng nhận quyền sử dụng đất.',
      client: 'Đại diện Hộ gia đình thân chủ tại Đồng Nai',
    },
  ];

  const reviews = [
    {
      quote: 'Luật sư Võ Văn Hoà và cộng sự làm việc với tác phong cực kỳ đĩnh đạc và chuẩn xác. Báo cáo đánh giá rủi ro hợp đồng của hãng luật đã giúp công ty chúng tôi tránh được một khoản bồi thường phạt vi phạm hàng tỷ đồng.',
      author: 'Nguyễn Minh Tuấn',
      title: 'Giám đốc Điều hành Công ty Xây dựng Công nghiệp',
    },
    {
      quote: 'Điều tôi đánh giá cao nhất ở HÒA & CỘNG SỰ là sự thẳng thắn và minh bạch. Luật sư phân tích rõ xác suất thắng thua và chuẩn bị các phương án dự phòng chi tiết. Sự tận tâm của các bạn làm tôi hoàn toàn yên tâm.',
      author: 'Trần Thị Mai Lan',
      title: 'Đồng sáng lập Hệ sinh thái Dịch vụ & Bán lẻ',
    },
  ];

  return (
    <section id="danh-gia" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Uy Tín Đã Được Khẳng Định
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Vụ Việc Tiêu Biểu &amp; Niềm Tin Khách Hàng
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Kết quả thực tế trong các phiên tranh tụng và đàm phán thương vụ là minh chứng rõ nhất cho năng lực của chúng tôi.
          </p>
        </div>

        {/* 3 Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-sm font-extrabold text-slate-900 font-serif">
                    {item.value}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 font-serif mt-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  <strong>Kết quả:</strong> {item.result}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <AwardIcon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="truncate">{item.client}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cảm nhận khách hàng */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm text-left flex flex-col justify-between"
            >
              <blockquote className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                &ldquo;{rev.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{rev.author}</p>
                  <p className="text-xs text-slate-500">{rev.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
