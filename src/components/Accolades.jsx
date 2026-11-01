import React from 'react';
import { AwardIcon } from './Icons';

export default function Accolades() {
  const recognitions = [
    {
      source: 'Chambers and Partners',
      quote: 'Công ty luật xuất sắc nổi bật tại Việt Nam, về chất lượng dịch vụ, sự chuyên sâu và am hiểu pháp luật thực tiễn.',
      tier: 'Hạng Nhất (Band 1) — Tranh Tụng & Trọng Tài',
    },
    {
      source: 'The Legal 500 Asia Pacific',
      quote: 'Đội ngũ luật sư có tư duy chiến lược sắc sảo, bảo vệ hiệu quả quyền lợi thân chủ trong các tranh chấp thương mại phức tạp.',
      tier: 'Top Tier Law Firm — Giải Quyết Tranh Chấp',
    },
    {
      source: 'IFLR1000 (Financial & Corporate)',
      quote: 'Họ làm việc theo tiêu chuẩn quốc tế cao nhất, cung cấp các giải pháp cấu trúc M&A và tín dụng ngân hàng an toàn tuyệt đối.',
      tier: 'Hãng Luật Tiêu Biểu — M&A và Tài Chính Doanh Nghiệp',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tiêu đề theo phong cách YKVN */}
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
            Tiêu chuẩn hành nghề quốc tế
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2144] tracking-normal font-serif">
            &ldquo;Trình độ ngang bằng với các hãng luật quốc tế hàng đầu&rdquo;
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Được các tổ chức xếp hạng pháp lý uy tín toàn cầu và cộng đồng doanh nghiệp ghi nhận về chất lượng chuyên môn vượt trội.
          </p>
        </div>

        {/* Lưới 3 đánh giá từ các bảng xếp hạng uy tín */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {recognitions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F8F9FA] rounded-lg border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <AwardIcon className="w-4 h-4 text-[#C5221F]" />
                  <span className="text-xs font-bold text-[#0F2144] font-serif">
                    {item.source}
                  </span>
                </div>

                <blockquote className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-600 font-mono">
                {item.tier}
              </div>
            </div>
          ))}
        </div>

        {/* Thanh đối tác và mạng lưới hợp tác */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Mạng lưới &amp; Thành viên:</span>
          <span>Liên đoàn Luật sư Việt Nam (VBF)</span>
          <span>Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)</span>
          <span>Trung tâm Trọng tài Quốc tế Singapore (SIAC)</span>
          <span>Hiệp hội Luật sư Quốc tế (IBA)</span>
          <span>Phòng Thương mại &amp; Công nghiệp Việt Nam (VCCI)</span>
        </div>

      </div>
    </section>
  );
}
