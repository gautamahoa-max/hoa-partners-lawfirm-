import React from 'react';
import { ScaleIcon, ShieldCheckIcon, LandmarkIcon, BriefcaseIcon } from './Icons';

export default function Accolades() {
  const pillars = [
    {
      icon: ScaleIcon,
      badge: 'TỐ TỤNG TÒA ÁN',
      title: 'Tòa án Nhân dân các cấp',
      desc: 'Đại diện bảo vệ quyền và lợi ích hợp pháp tại các phiên Tòa sơ thẩm, phúc thẩm và giám đốc thẩm trên toàn quốc.',
    },
    {
      icon: LandmarkIcon,
      badge: 'TRỌNG TÀI THƯƠNG MẠI',
      title: 'VIAC, SIAC & ICC',
      desc: 'Kinh nghiệm đại diện thân chủ trong các vụ kiện trọng tài xuyên biên giới theo Công ước New York 1958.',
    },
    {
      icon: BriefcaseIcon,
      badge: 'TỔ CHỨC NGHỀ NGHIỆP',
      title: 'Liên đoàn Luật sư Việt Nam',
      desc: 'Thành viên Đoàn Luật sư TP. Hà Nội, hoạt động theo chuẩn mực đạo đức và quy tắc ứng xử nghề nghiệp nghiêm ngặt.',
    },
    {
      icon: ShieldCheckIcon,
      badge: 'NGUYÊN TẮC HÀNH NGHỀ',
      title: 'Điều 25 Luật Luật sư',
      desc: 'Cam kết bảo mật tuyệt đối và vô điều kiện mọi bí mật kinh doanh, hồ sơ tài liệu của quý thân chủ.',
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header tối giản */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
            Bảo chứng năng lực &bull; Tư cách hành nghề
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F2144] tracking-tight">
            Nền tảng tài phán &amp; Quy chuẩn hành nghề độc lập
          </h2>
        </div>

        {/* 4 Trụ cột dàn ngang phẳng, không đóng hộp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#0F2144]" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#0F2144] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dải mạng lưới thành viên thanh mảnh */}
        <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span className="font-semibold text-slate-700">Mạng lưới &amp; Thành viên:</span>
          <span>Liên đoàn Luật sư Việt Nam (VBF)</span>
          <span>Trung tâm Trọng tài Quốc tế Việt Nam (VIAC)</span>
          <span>Trung tâm Trọng tài Quốc tế Singapore (SIAC)</span>
          <span>Hiệp hội Luật sư Quốc tế (IBA)</span>
          <span>VCCI</span>
        </div>

      </div>
    </section>
  );
}
