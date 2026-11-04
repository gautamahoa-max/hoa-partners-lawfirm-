import React from 'react';
import { PhoneIcon } from './Icons';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FAF9F6] pt-20 pb-24 md:pt-28 md:pb-32 border-b border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow trang trọng */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">
          <span>Đoàn Luật sư Việt Nam</span>
          <span className="text-slate-300">&bull;</span>
          <span>Công ty Luật TNHH Hòa &amp; Cộng sự</span>
          <span className="text-slate-300">&bull;</span>
          <span className="text-slate-700">Hà Nội &bull; TP.HCM &bull; Singapore</span>
        </div>

        {/* Tuyên ngôn lớn đĩnh đạc */}
        <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#0F2144] tracking-tight leading-[1.25] sm:leading-[1.2] max-w-5xl">
          Bảo vệ quyền lợi hợp pháp bằng sự chuẩn mực của pháp luật và chiến lược tranh tụng kiên định.
        </h1>

        {/* Đoạn mô tả mở rộng thanh lịch */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed font-normal">
          Hãng luật chuyên sâu trong lĩnh vực Trọng tài thương mại quốc tế (VIAC, SIAC), Tranh tụng Tòa án các cấp, Mua bán &amp; Sáp nhập (M&amp;A) và Cố vấn pháp chế chiến lược cho các tổ chức kinh tế và nhà đầu tư.
        </p>

        {/* Đường kẻ chỉ hairline tinh xảo */}
        <div className="border-t border-slate-200/80 my-10" />

        {/* 3 Nguyên tắc hành nghề cốt lõi dàn ngang (Không đóng khung thẻ) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
              01 &bull; BẢO MẬT TUYỆT ĐỐI
            </span>
            <h3 className="text-sm font-bold text-[#0F2144] mb-1">
              Đạo đức nghề luật chuẩn mực
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bảo mật toàn diện mọi tài liệu và thông tin vụ việc theo quy định tại Điều 25 Luật Luật sư.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
              02 &bull; MINH BẠCH THÙ LAO
            </span>
            <h3 className="text-sm font-bold text-[#0F2144] mb-1">
              Đánh giá xác suất trung thực
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Phân tích thẳng thắn cơ hội và rủi ro trước khi ký hợp đồng dịch vụ, cam kết không phát sinh chi phí ẩn.
            </p>
          </div>

          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
              03 &bull; ĐỒNG HÀNH TOÀN DIỆN
            </span>
            <h3 className="text-sm font-bold text-[#0F2144] mb-1">
              Chiến lược tố tụng kiên quyết
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Đại diện xuyên suốt từ tiền tố tụng, đàm phán hòa giải, tranh luận tại tòa cho tới thi hành xong phán quyết.
            </p>
          </div>
        </div>

        {/* Nút hành động chính */}
        <div className="mt-10 pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={() => scrollTo('lien-he')}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all shadow-sm"
          >
            <span>Đặt lịch hẹn tư vấn với luật sư</span>
            <span className="ml-2">&rarr;</span>
          </button>

          <a
            href="tel:0988886447"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded text-xs font-semibold text-[#0F2144] bg-white border border-slate-200/90 hover:border-slate-300 transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hotline 24/7: 098.888.6447</span>
          </a>
        </div>

      </div>
    </section>
  );
}
