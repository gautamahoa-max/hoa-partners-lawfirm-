import React from 'react';
import { AwardIcon, ScaleIcon, CheckCircleIcon } from './Icons';

export default function Testimonials() {
  const landmarkCase = {
    category: 'Tranh Tụng Trọng Tài Quốc Tế VIAC',
    value: '42 Tỷ VNĐ',
    title: 'Bảo vệ thành công quyền đòi nợ và bồi thường thiệt hại hợp đồng cung ứng quốc tế',
    challenge: 'Đối tác nước ngoài viện dẫn điều khoản bất khả kháng và lỗi giao hàng chậm để từ chối thanh toán 42 tỷ đồng công nợ kéo dài 18 tháng.',
    solution: 'Luật sư rà soát toàn bộ thư tín điện tử, biên bản giao nhận cảng biển, áp dụng Công ước Viên (CISG) và Luật Thương mại 2005 để bẻ gãy lập luận bất khả kháng của đối phương.',
    result: 'Hội đồng Trọng tài Quốc tế VIAC tuyên buộc đối tác thanh toán 100% công nợ gốc kèm lãi suất quá hạn và toàn bộ chi phí trọng tài.',
    client: 'Tổng Giám đốc Tập đoàn Xuất Nhập Khẩu Kim Loại',
  };

  const companionCases = [
    {
      category: 'Tư Vấn M&A Doanh Nghiệp',
      value: '8.5 Triệu USD',
      title: 'Thẩm định pháp lý chuyên sâu (LDD) thương vụ mua lại chuỗi bán lẻ',
      desc: 'Phát hiện 3 rủi ro truy thu thuế và lỗ hổng điều lệ công ty mục tiêu, đàm phán giảm trừ 12% giá trị chuyển nhượng và bổ sung điều khoản cam kết bồi hoàn (Indemnity).',
      client: 'Chủ tịch Quỹ Đầu Tư Tư Nhân (PE Fund)',
    },
    {
      category: 'Tranh Chấp Đất Đai & Dự Án',
      value: '3.200 m²',
      title: 'Khởi kiện yêu cầu hủy quyết định hành chính thu hồi đất trái thẩm quyền',
      desc: 'Chứng minh quá trình sử dụng đất ổn định từ trước năm 1993, buộc cơ quan chức năng ban hành lại quyết định bồi thường thỏa đáng và cấp Giấy chứng nhận quyền sử dụng đất.',
      client: 'Đại diện Hộ gia đình thân chủ tại Đồng Nai',
    },
  ];

  const reviews = [
    {
      quote: 'Luật sư Võ Văn Hoà và cộng sự làm việc với tác phong đĩnh đạc và chuẩn xác tuyệt đối. Báo cáo đánh giá rủi ro hợp đồng của hãng luật đã giúp chúng tôi tránh được một khoản phạt vi phạm hàng tỷ đồng.',
      author: 'Nguyễn Minh Tuấn',
      title: 'Giám đốc Điều hành Doanh nghiệp Xây dựng Công nghiệp',
    },
    {
      quote: 'Điều tôi đánh giá cao nhất ở HÒA & CỘNG SỰ là sự thẳng thắn. Luật sư phân tích rõ xác suất thắng thua và chuẩn bị sẵn các phương án thương lượng trước khi khởi kiện. Sự tận tâm của các bạn làm tôi hoàn toàn yên tâm.',
      author: 'Trần Thị Mai Lan',
      title: 'Đồng sáng lập Hệ sinh thái Dịch vụ & Bán lẻ',
    },
  ];

  return (
    <section id="danh-gia" className="py-16 md:py-24 bg-[#FBFBFB] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Uy Tín &amp; Bản Lĩnh Thực Chiến
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Hồ Sơ Vụ Việc Tiêu Biểu &amp; Niềm Tin Thân Chủ
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Kết quả bảo vệ quyền lợi tại phòng xử án và bàn đàm phán là thước đo chân thực nhất cho năng lực của chúng tôi.
          </p>
        </div>

        {/* ASYMMETRIC CASE CHRONICLE (Không dùng 3 thẻ bằng nhau) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-16 text-left items-stretch">
          
          {/* Cột Trái: Landmark Featured Case Study (7/12) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-md">
                  {landmarkCase.category}
                </span>
                <span className="text-xl font-extrabold text-slate-900 font-serif">
                  Giá trị: {landmarkCase.value}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 font-serif mt-5 leading-snug">
                {landmarkCase.title}
              </h3>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900 mb-1">Tình huống tranh chấp:</p>
                  <p>{landmarkCase.challenge}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900 mb-1">Giải pháp chiến lược của Luật sư:</p>
                  <p>{landmarkCase.solution}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-800 font-semibold">
                <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Phán quyết thắng kiện toàn diện</span>
              </div>
              <span className="text-xs text-slate-500 italic">
                {landmarkCase.client}
              </span>
            </div>
          </div>

          {/* Cột Phải: 2 Vụ việc tiêu biểu phối hợp (5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {companionCases.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md shadow-slate-200/30 flex-1 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-base font-extrabold text-slate-900 font-serif">
                      {item.value}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-serif mt-3.5 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                  <AwardIcon className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="truncate">{item.client}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ĐÁNH GIÁ CỦA THÂN CHỦ (2-Column Clean Editorial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-left flex flex-col justify-between"
            >
              <blockquote className="text-slate-700 text-sm sm:text-base italic leading-relaxed">
                &ldquo;{rev.quote}&rdquo;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-serif font-bold flex items-center justify-center text-sm">
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
