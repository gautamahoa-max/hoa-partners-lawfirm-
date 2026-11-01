import React from 'react';

export default function Testimonials() {
  const cases = [
    {
      forum: 'Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)',
      nature: 'Tranh chấp hợp đồng mua bán kim loại quốc tế',
      value: '42 tỷ đồng',
      summary: 'Bảo vệ quyền lợi bên bán trước yêu cầu hủy hợp đồng và bác bỏ lý do bất khả kháng viện dẫn trái quy định của đối tác nước ngoài. Hội đồng Trọng tài tuyên chấp thuận toàn bộ yêu cầu thanh toán công nợ gốc và bồi thường thiệt hại.',
    },
    {
      forum: 'Thẩm định Pháp lý Doanh nghiệp (M&A)',
      nature: 'Giao dịch chuyển nhượng vốn chuỗi bán lẻ công nghệ',
      value: '8,5 triệu USD',
      summary: 'Tiến hành thẩm định pháp lý (Legal Due Diligence), phát hiện các nghĩa vụ thuế tiềm ẩn và tranh chấp sở hữu trí tuệ chưa giải quyết, hỗ trợ bên mua đàm phán giảm 12% giá chuyển nhượng và thiết lập cơ chế bảo đảm bồi hoàn.',
    },
    {
      forum: 'Tòa án nhân dân cấp cao',
      nature: 'Khởi kiện quyết định hành chính về quản lý đất đai',
      value: '3.200 m²',
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
    <section id="danh-gia" className="py-20 bg-[#FDFDFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-2">
            Hồ sơ vụ việc
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-serif">
            Án lệ và Vụ việc tiêu biểu
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Các tranh chấp thực tế và thương vụ đã được luật sư đại diện giải quyết thành công qua con đường đàm phán, trọng tài và tòa án.
          </p>
        </div>

        {/* Danh sách vụ việc dạng bản tin án lệ (Case Record Archive) */}
        <div className="space-y-6 mb-16 text-left">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-slate-200 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-medium text-slate-500 block mb-1">
                    Cơ quan tài phán: {item.forum}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    {item.nature}
                  </h3>
                </div>
                <div className="text-sm font-semibold text-slate-800 font-mono sm:text-right flex-shrink-0">
                  Giá trị: {item.value}
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Phản hồi từ thân chủ theo chuẩn tòa soạn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-slate-200 pt-12">
          {clientNotes.map((note, idx) => (
            <div key={idx} className="space-y-4">
              <blockquote className="text-sm sm:text-base text-slate-700 italic leading-relaxed border-l-2 border-slate-300 pl-4">
                &ldquo;{note.statement}&rdquo;
              </blockquote>
              <div className="text-xs pl-4">
                <p className="font-bold text-slate-900">{note.clientName}</p>
                <p className="text-slate-500">{note.clientRole}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
