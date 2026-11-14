import React from 'react';
import { VCardIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function LawyerBio() {
  const { lang, t } = useLanguage();
  const bio = t.lawyerBio;

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
                        
                        {/* Nút liên hệ Zalo trực tiếp với icon dạng thẻ vCard chuẩn YKVN */}
                        <a
                          href="https://zalo.me/0988886447"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#0F2144] hover:bg-[#18356d] text-white transition-colors shrink-0 ml-1 cursor-pointer"
                          title="Liên hệ Zalo: 098.888.6447"
                          aria-label="Liên hệ Zalo"
                        >
                          <VCardIcon className="w-3.5 h-3.5 text-white" />
                        </a>
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

              {bio.experienceItems && bio.experienceItems.length > 0 && (
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F2144] mb-2.5 tracking-tight">
                    {bio.experienceTitle || (lang === 'vi' ? 'Nơi Từng Công Tác' : 'Prior Experience')}
                  </h4>
                  <div className="space-y-1.5 text-slate-600 leading-relaxed">
                    {bio.experienceItems.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
