import React, { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  MailIcon, 
  MapPinIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  ZaloIcon, 
  ScaleIcon 
} from './Icons';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage({ onBack }) {
  const { lang, setLang, t } = useLanguage();
  const contact = t.contactPage;
  const formT = contact.form;
  const sidebarT = contact.sidebar;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practice: '',
    location: '',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage(formT.errorEmpty);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Giả lập lưu hồ sơ và phản hồi thành công sau 600ms
    setTimeout(() => {
      try {
        const existingInquiries = JSON.parse(localStorage.getItem('hp_consultations') || '[]');
        existingInquiries.push({
          ...formData,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('hp_consultations', JSON.stringify(existingInquiries));
      } catch (err) {
        console.error('Storage error:', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      practice: '',
      location: '',
      notes: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* Top Bar điều hướng trang con */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F2144] hover:text-blue-700 transition-colors"
          >
            <span>&larr;</span>
            <span>{contact.back}</span>
          </button>

          <a href="#" onClick={onBack} className="text-center group">
            <span className="text-lg font-bold text-[#0F2144] tracking-tight block">
              {t.navbar.firmName}
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <button
                onClick={() => setLang('vi')}
                className={lang === 'vi' ? 'text-[#0F2144] font-bold' : 'text-slate-400 hover:text-slate-700'}
              >
                VI
              </button>
              <span className="text-slate-300">/</span>
              <button
                onClick={() => setLang('en')}
                className={lang === 'en' ? 'text-[#0F2144] font-bold' : 'text-slate-400 hover:text-slate-700'}
              >
                EN
              </button>
            </div>

            <a
              href="tel:0988886447"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2144] hover:underline"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>098.888.6447</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content trang Liên hệ & Đặt lịch hẹn */}
      <main className="flex-grow">
        
        {/* Hero Header */}
        <section className="bg-[#FAF9F6] border-b border-slate-200 py-12 sm:py-16 text-left">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-semibold uppercase mb-4 border tracking-wider bg-[#0F2144]/5 border-[#0F2144]/20 text-[#0F2144]">
              <span className="w-2 h-2 rounded-full bg-[#0F2144]"></span>
              <span>{contact.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F2144] tracking-tight leading-tight">
              {contact.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {contact.subtitle}
            </p>
          </div>
        </section>

        {/* Form Container & Sidebar Grid */}
        <section className="py-12 sm:py-16 bg-white text-left">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Cột trái: Form nhập thông tin hoặc Màn hình xác nhận thành công */}
              <div className="lg:col-span-7">
                {isSubmitted ? (
                  /* Màn hình gửi thành công */
                  <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-6 text-left shadow-sm animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                      <CheckCircleIcon className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F2144] tracking-tight">
                        {formT.successTitle}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-emerald-800">
                        {formT.successSubtitle}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {formT.successDesc}
                      </p>
                    </div>

                    {/* Hộp thông báo khẩn cấp */}
                    <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-700 space-y-2">
                      <p className="font-semibold text-amber-900">
                        {formT.successHotlineNote}
                      </p>
                      <a
                        href="tel:0988886447"
                        className="inline-flex items-center gap-2 text-base font-bold text-[#0F2144] hover:text-blue-700"
                      >
                        <PhoneIcon className="w-4 h-4 text-emerald-600" />
                        <span>098.888.6447 (24/7)</span>
                      </a>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#162C5B] transition-colors"
                      >
                        {formT.resetBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Form tiếp nhận thông tin */
                  <div className="bg-[#FAF9F6] border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="border-b border-slate-200 pb-4 mb-6">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                        {formT.legend}
                      </span>
                      <h3 className="text-lg font-bold text-[#0F2144] mt-1">
                        {lang === 'vi' ? 'Tiếp nhận thông tin vụ việc sơ bộ' : 'Preliminary Case Intake'}
                      </h3>
                    </div>

                    {errorMessage && (
                      <div className="mb-6 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Họ và tên */}
                      <div>
                        <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                          {formT.nameLabel} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder={formT.namePlaceholder}
                          required
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400"
                        />
                      </div>

                      {/* Số điện thoại & Email (2 cột) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                            {formT.phoneLabel} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={formT.phonePlaceholder}
                            required
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                            {formT.emailLabel}
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={formT.emailPlaceholder}
                            className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      {/* Lĩnh vực cần tư vấn */}
                      <div>
                        <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                          {formT.practiceLabel}
                        </label>
                        <select
                          name="practice"
                          value={formData.practice}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all"
                        >
                          <option value="">{formT.practiceDefault}</option>
                          {formT.practiceOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Khu vực / Tòa án thẩm quyền */}
                      <div>
                        <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                          {formT.locationLabel}
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all"
                        >
                          <option value="">{formT.locationDefault}</option>
                          {formT.locationOptions.map((opt, idx) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Tóm tắt nội dung */}
                      <div>
                        <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                          {formT.notesLabel}
                        </label>
                        <textarea
                          rows={4}
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder={formT.notesPlaceholder}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400"
                        ></textarea>
                      </div>

                      {/* Hộp cam kết bảo mật theo Điều 25 Luật Luật sư */}
                      <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-200/80 flex items-start gap-2.5 text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                        <ShieldCheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{formT.confidentialityText}</span>
                      </div>

                      {/* Nút Submit */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 px-6 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#0F2144] hover:bg-[#162C5B] active:translate-y-[1px] transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                        >
                          <ScaleIcon className="w-4 h-4 text-amber-400" />
                          <span>{isSubmitting ? formT.submittingBtn : formT.submitBtn}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Cột phải: Kênh liên hệ trực tiếp & Văn phòng */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                {/* Thẻ liên hệ 24/7 */}
                <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-5 shadow-sm">
                  <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                      {sidebarT.directTitle}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                      24/7
                    </span>
                  </div>

                  {/* Hotline */}
                  <div className="space-y-1">
                    <span className="text-xs text-slate-500 font-medium block">
                      {sidebarT.hotlineLabel}
                    </span>
                    <a
                      href="tel:0988886447"
                      className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-[#0F2144] hover:text-blue-700 tracking-tight"
                    >
                      <PhoneIcon className="w-5 h-5 text-emerald-600" />
                      <span>{sidebarT.hotlineVal}</span>
                    </a>
                    <p className="text-[11px] text-slate-500 italic">
                      {sidebarT.hotlineNote}
                    </p>
                  </div>

                  {/* Zalo */}
                  <div className="space-y-1 pt-2 border-t border-slate-200/70">
                    <span className="text-xs text-slate-500 font-medium block">
                      {sidebarT.zaloLabel}
                    </span>
                    <a
                      href="https://zalo.me/0988886447"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0068FF] hover:underline"
                    >
                      <ZaloIcon className="w-4 h-4 text-[#0068FF]" />
                      <span>{sidebarT.zaloVal} (Zalo Luật sư Hoà)</span>
                    </a>
                    <p className="text-[11px] text-slate-500">
                      {sidebarT.zaloNote}
                    </p>
                  </div>

                  {/* Email */}
                  <div className="space-y-1 pt-2 border-t border-slate-200/70">
                    <span className="text-xs text-slate-500 font-medium block">
                      {sidebarT.emailLabel}
                    </span>
                    <a
                      href="mailto:GAUTAMAHOA@GMAIL.COM"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 hover:text-blue-700 font-mono"
                    >
                      <MailIcon className="w-4 h-4 text-slate-500" />
                      <span>{sidebarT.emailVal}</span>
                    </a>
                  </div>
                </div>

                {/* Thẻ Địa chỉ Văn phòng */}
                <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block border-b border-slate-200 pb-2">
                    {sidebarT.officesTitle}
                  </span>

                  {/* TP.HCM */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2144]">
                      <MapPinIcon className="w-3.5 h-3.5 text-blue-700 flex-shrink-0" />
                      <span>{sidebarT.hcmOfficeTitle}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                      {sidebarT.hcmAddress}
                    </p>
                  </div>

                  {/* Đắk Lắk */}
                  <div className="space-y-1 pt-2 border-t border-slate-200/70">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0F2144]">
                      <MapPinIcon className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span>{sidebarT.daklakOfficeTitle}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                      {sidebarT.daklakAddress}
                    </p>
                  </div>
                </div>

                {/* Thẻ Thời gian làm việc */}
                <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-6 space-y-2 text-xs text-slate-600 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1">
                    <ClockIcon className="w-4 h-4 text-slate-500" />
                    <span>{sidebarT.hoursTitle}</span>
                  </div>
                  <p className="leading-relaxed whitespace-pre-line text-slate-700">
                    {sidebarT.hoursText}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer & Floating Contact Button */}
      <Footer />
      <FloatingContact />

    </div>
  );
}
