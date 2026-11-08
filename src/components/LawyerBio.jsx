import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LawyerBio() {
  const { lang, t } = useLanguage();
  const bio = t.lawyerBio;

  const handleDownloadVCard = () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Võ;Văn Hoà;;Luật sư;',
      'FN:Luật sư Võ Văn Hoà',
      'ORG:Công ty Luật TNHH Hoà & Cộng sự',
      'TITLE:Luật sư Điều hành & Sáng lập',
      'TEL;TYPE=CELL,VOICE:0988886447',
      'EMAIL;TYPE=PREF,INTERNET:gautamahoa@gmail.com',
      'ADR;TYPE=WORK:;;9/12 Chu Huy Mân, P. Tân An;TP. Buôn Ma Thuột;Đắk Lắk;;Việt Nam',
      'ADR;TYPE=WORK:;;2A đường 33, P. Bình Trưng;TP. Hồ Chí Minh;;;Việt Nam',
      'URL:https://gautamahoa-max.github.io/hoa-partners-lawfirm-/',
      'NOTE:Đoàn Luật sư TP. Hồ Chí Minh • Liên đoàn Luật sư Việt Nam',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Luat_su_Vo_Van_Hoa.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="luat-su" className="py-16 sm:py-20 bg-white border-b border-slate-200/90 text-left">
      <div id="ve-chung-toi" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Executive Split Card chuẩn mẫu YKVN */}
        <div className="border border-slate-200/90 shadow-sm bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Nửa trái (Nền trắng): Ảnh chân dung + Tên + Chức danh & Liên hệ */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start gap-6 sm:gap-8 bg-white">
              <img
                src={bio.avatar || './lawyer-vo-van-hoa.jpg'}
                alt={bio.fullNameWithTitle || bio.name}
                className="w-40 h-48 sm:w-48 sm:h-56 lg:w-52 lg:h-60 object-cover object-top shrink-0 border border-slate-200/60 shadow-sm bg-slate-100"
                onError={(e) => {
                  e.target.src = './client-1.jpg';
                }}
              />

              <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch text-left">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0F2144] tracking-tight leading-tight">
                    {bio.name}
                  </h2>
                </div>

                <div className="mt-6 sm:mt-12 pt-4 border-t border-slate-100 sm:border-0 sm:pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-[13px] leading-relaxed">
                    <div>
                      <p className="font-bold text-[#0F2144]">{bio.role}</p>
                      <p className="text-slate-600 mt-1">{bio.locations}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-slate-500 font-medium">{lang === 'vi' ? 'ĐT.' : 'Tel.'}</span>
                        <a
                          href={`tel:${bio.phone}`}
                          className="text-[#0F2144] font-medium hover:underline underline-offset-2"
                        >
                          {bio.phoneFormatted || bio.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <a
                          href={`mailto:${bio.email}`}
                          className="text-[#0F2144] font-medium hover:underline underline-offset-2 break-all"
                        >
                          {bio.email}
                        </a>
                        
                        <div className="inline-flex items-center gap-1.5 shrink-0 ml-1">
                          <button
                            type="button"
                            onClick={handleDownloadVCard}
                            className="w-5 h-5 rounded bg-[#0F2144] hover:bg-[#18356d] text-white flex items-center justify-center transition-colors cursor-pointer"
                            title={lang === 'vi' ? 'Lưu danh bạ (vCard)' : 'Download vCard'}
                            aria-label="Download vCard"
                          >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-11 5a2 2 0 11.001 4.001A2 2 0 019 9zm4 7H5v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1zm6-1h-4v-2h4v2zm0-4h-4v-2h4v2z" />
                            </svg>
                          </button>
                          <a
                            href="https://zalo.me/0988886447"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-5 h-5 rounded bg-[#0F2144] hover:bg-[#18356d] text-white flex items-center justify-center transition-colors text-xs"
                            title={lang === 'vi' ? 'Liên hệ Zalo' : 'Connect via Zalo'}
                            aria-label="Connect via Zalo"
                          >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Nửa phải (Nền xanh nhạt Ice Blue): Lĩnh Vực Tư Vấn */}
            <div className="lg:col-span-4 bg-[#E8F1F7] p-6 sm:p-8 lg:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200/80 text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0F2144] mb-3 sm:mb-4 tracking-tight">
                {bio.practiceTitle || (lang === 'vi' ? 'Lĩnh Vực Tư Vấn' : 'Practice Areas')}
              </h3>
              
              <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-snug">
                {(bio.practiceAreas || []).map((area, idx) => (
                  <li
                    key={idx}
                    className="font-normal text-slate-700 hover:text-[#0F2144] transition-colors"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Lower Section: Tiểu sử và Học vấn, Đoàn luật sư */}
        <div className="mt-12 sm:mt-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Cột trái: 4 Đoạn tiểu sử trang trọng chuẩn YKVN */}
            <div className="lg:col-span-8 space-y-5 text-xs sm:text-[14px] text-slate-700 leading-[1.8] sm:leading-[1.85]">
              {(bio.paragraphs || []).map((paragraph, idx) => (
                <p key={idx} className="text-justify sm:text-left">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Cột phải: Học Vấn & Đoàn Luật Sư */}
            <div className="lg:col-span-4 space-y-8 text-xs sm:text-[13px]">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0F2144] mb-2.5 tracking-tight">
                  {bio.educationTitle || (lang === 'vi' ? 'Học Vấn' : 'Education')}
                </h4>
                <div className="space-y-1.5 text-slate-600 leading-relaxed">
                  {(bio.educationItems || []).map((edu, idx) => (
                    <p key={idx}>{edu}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0F2144] mb-2.5 tracking-tight">
                  {bio.barTitle || (lang === 'vi' ? 'Đoàn Luật Sư và Hiệp Hội Nghề Nghiệp' : 'Bar & Professional Associations')}
                </h4>
                <div className="space-y-1.5 text-slate-600 leading-relaxed">
                  {(bio.barItems || []).map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
