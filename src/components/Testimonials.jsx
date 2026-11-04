import React from 'react';

export default function Testimonials() {
  const cases = [
    {
      index: '01',
      forum: 'Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)',
      nature: 'Tranh chấp hợp đồng mua bán kim loại quốc tế',
      value: '42 tỷ đồng',
      badge: 'TRỌNG TÀI THƯƠNG MẠI',
      summary: 'Bảo vệ quyền lợi bên bán trước yêu cầu hủy hợp đồng và bác bỏ lý do bất khả kháng viện dẫn trái quy định của đối tác nước ngoài. Hội đồng Trọng tài tuyên chấp thuận toàn bộ yêu cầu thanh toán công nợ gốc và bồi thường thiệt hại.',
    },
    {
      index: '02',
      forum: 'Thẩm định Pháp lý Doanh nghiệp (M&A)',
      nature: 'Giao dịch chuyển nhượng vốn chuỗi bán lẻ công nghệ',
      value: '8,5 triệu USD',
      badge: 'THẨM ĐỊNH M&A',
      summary: 'Tiến hành thẩm định pháp lý (Legal Due Diligence), phát hiện các nghĩa vụ thuế tiềm ẩn và tranh chấp sở hữu trí tuệ chưa giải quyết, hỗ trợ bên mua đàm phán giảm 12% giá chuyển nhượng và thiết lập cơ chế bảo đảm bồi hoàn.',
    },
    {
      index: '03',
      forum: 'Tòa án nhân dân cấp cao',
      nature: 'Khởi kiện quyết định hành chính về quản lý đất đai',
      value: '3.200 m²',
      badge: 'TỐ TỤNG HÀNH CHÍNH',
      summary: 'Đại diện người sử dụng đất khởi kiện quyết định thu hồi đất không đúng thẩm quyền và trình tự pháp luật. Hội đồng xét xử tuyên hủy quyết định hành chính bị kiện và khôi phục quyền sử dụng đất hợp pháp cho thân chủ.',
    },
  ];

  const clientNotes = [
    {
      statement: 'Sự am hiểu sâu sắc các quy tắc trọng tài của VIAC và tác phong chuẩn bị hồ sơ tỉ mỉ của Luật sư Võ Văn Hoà đã giúp doanh nghiệp chúng tôi bảo toàn được khoản công nợ lớn trong giai đoạn kinh doanh khó khăn.',
      clientName: 'Nguyễn Minh Tuấn',
      clientRole: 'Giám đốc Điều hành Công ty Cổ phần Thép và Kim loại',
    },
    {
      statement: 'Chúng tôi đánh giá cao sự trung thực của hãng luật ngay từ khâu đánh giá ban đầu. Luật sư không đưa ra những lời hứa hão huyền mà luôn vạch ra các rủi ro cụ thể cùng phương án dự phòng chi tiết.',
      clientName: 'Trần Thị Mai Lan',
      clientRole: 'Đại diện Ban Điều hành Doanh nghiệp Bán lẻ',
    },
  ];

  return (
    <section id="ho-so" className="py-20 sm:py-24 bg-[#FAF9F6] border-b border-slate-200/80 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục hồ sơ tinh gọn, trang nhã */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
            Danh mục hồ sơ từng tham gia
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-[1.35] sm:leading-[1.3]">
            Mục lục án vụ &amp; Giao dịch đại diện thực tế
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Các tranh chấp thương mại phức tạp và thương vụ M&amp;A đã được luật sư đại diện giải quyết thành công qua con đường đàm phán, trọng tài quốc tế và tòa án các cấp.
          </p>
        </div>

        {/* Mục lục án vụ dạng Dossier mở (Hoàn toàn phẳng, ngăn cách bằng đường kẻ chỉ hairline) */}
        <div className="divide-y divide-slate-200/80 border-y border-slate-200/80 mb-20">
          {cases.map((item) => (
            <div
              key={item.index}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group hover:bg-white/40 transition-colors"
            >
              {/* Cột 1: Chỉ số & Diễn đàn tài phán */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                    {item.index}
                  </span>
                  <span className="text-[10px] font-bold text-[#0F2144] tracking-widest uppercase bg-slate-200/60 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-slate-500 block">
                    Diễn đàn thụ lý:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item.forum}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-semibold text-slate-500 block">
                    Quy mô tranh chấp / Thương vụ:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight">
                    {item.value}
                  </p>
                </div>
              </div>

              {/* Cột 2: Nội dung tranh chấp & Tóm lược chiến lược pháp lý */}
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight group-hover:text-blue-900 transition-colors">
                  {item.nature}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.summary}
                </p>

                <div className="pt-2 flex items-center gap-2 text-[11px] font-medium text-emerald-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Kết quả: Bảo vệ toàn diện quyền lợi hợp pháp của thân chủ</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phản hồi từ thân chủ (Bố cục mở, trích dẫn thanh lịch, không đóng hộp) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              Đánh giá từ thân chủ &bull; Uy tín thực tế
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
            {clientNotes.map((note, idx) => (
              <div key={idx} className="space-y-4">
                <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed border-l-2 border-[#0F2144]/40 pl-5">
                  &ldquo;{note.statement}&rdquo;
                </blockquote>
                <div className="text-xs pl-5">
                  <p className="font-bold text-[#0F2144] text-sm">{note.clientName}</p>
                  <p className="text-slate-500 mt-0.5">{note.clientRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
