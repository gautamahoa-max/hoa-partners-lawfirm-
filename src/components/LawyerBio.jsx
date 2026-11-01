import React from 'react';
import { ScaleIcon, CheckCircleIcon } from './Icons';

export default function LawyerBio({ onOpenConsultModal }) {
  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const lawyers = [
    {
      name: 'Luật sư Võ Văn Hoà',
      role: 'Luật sư Điều hành & Người sáng lập (Managing Partner)',
      degrees: 'Cử nhân Luật học (LL.B) & Thạc sĩ Luật Kinh tế (LL.M)',
      specialty: 'Trọng tài Thương mại Quốc tế, Tranh tụng Tòa án, Quản trị Cổ đông & M&A',
      bio: 'Với tầm nhìn xây dựng hãng luật tranh tụng chuẩn mực quốc tế tại Việt Nam, Luật sư Võ Văn Hoà đã trực tiếp chỉ đạo và tham gia giải quyết nhiều tranh chấp thương mại phức tạp, bảo vệ quyền lợi tối đa cho doanh nghiệp và nhà đầu tư.',
      avatarInitials: 'VH',
    },
    {
      name: 'Hội đồng Cố vấn & Luật sư Cộng sự',
      role: 'Đội ngũ chuyên gia pháp lý cao cấp (Senior Associates & Counsel)',
      degrees: 'Các chuyên gia có trên 15 năm kinh nghiệm trong ngành Tòa án, Ngân hàng và Doanh nghiệp',
      specialty: 'Bất động sản & Xây dựng, Tài chính Ngân hàng, Sở hữu Trí tuệ và Thuế',
      bio: 'Quy tụ các luật sư tranh tụng và chuyên gia pháp chế nội bộ hàng đầu, phối hợp chặt chẽ để mang lại giải pháp đa chiều và hiệu quả nhất cho từng hồ sơ vụ việc.',
      avatarInitials: 'HP',
    },
  ];

  return (
    <section id="ve-chung-toi" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header danh mục theo chuẩn YKVN */}
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider font-mono">
            Nhân sự lãnh đạo
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-normal leading-[1.35] font-serif">
            Gặp gỡ Đội ngũ Luật sư của chúng tôi
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Mỗi luật sư tại Hòa &amp; Cộng sự là một chuyên gia thực chiến với nền tảng học thuật vững chắc và tinh thần trách nhiệm nghề nghiệp cao nhất.
          </p>
        </div>

        {/* Lưới hồ sơ luật sư */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {lawyers.map((lawyer, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-xl p-8 border border-slate-200 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded bg-[#0F2144] text-amber-400 font-serif font-bold text-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    {lawyer.avatarInitials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2144] font-serif">
                      {lawyer.name}
                    </h3>
                    <p className="text-xs text-[#C5221F] font-semibold mt-0.5">
                      {lawyer.role}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {lawyer.degrees}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <p>
                    <strong>Lĩnh vực phụ trách:</strong> {lawyer.specialty}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lawyer.bio}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Thành viên Liên đoàn Luật sư Việt Nam
                </span>
                <button
                  onClick={scrollToContact}
                  className="px-4 py-2 rounded bg-white border border-slate-300 text-xs font-semibold text-[#0F2144] hover:bg-slate-50 transition-colors"
                >
                  Kết nối trực tiếp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tôn chỉ hoạt động của hãng luật */}
        <div className="mt-12 p-8 bg-[#0F2144] text-white rounded-xl text-left">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Cam kết chất lượng
            </span>
            <h4 className="text-xl font-bold font-serif">
              Tôn chỉ phục vụ thân chủ và trách nhiệm xã hội
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Chúng tôi cam kết bảo vệ không khoan nhượng quyền lợi hợp pháp của thân chủ, đồng thời đóng góp tích cực vào sự phát triển của nền tư pháp Việt Nam thông qua các hoạt động nghiên cứu pháp luật và trợ giúp pháp lý cộng đồng.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
