import React, { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  ScaleIcon 
} from './Icons';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage({ onBack }) {
  const { lang, setLang, t } = useLanguage();
  const contact = t.contactPage;
  const formT = contact.form;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
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

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.notes.trim()) {
      setErrorMessage(formT.errorEmpty);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Giả lập lưu hồ sơ và xác nhận thành công sau 500ms
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
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      notes: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* Top Bar điều hướng trang con */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
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

      {/* Main Content */}
      <main className="flex-grow">
        
        {/* Header tinh gọn */}
        <section className="bg-[#FAF9F6] border-b border-slate-200 py-10 sm:py-14 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight">
              {contact.title}
            </h1>
          </div>
        </section>

        {/* Khung Bảng Form Tiếp Nhận Căn Giữa (Chỉ 3 trường: Họ tên, Số điện thoại, Nội dung vụ việc) */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            
            {isSubmitted ? (
              /* Màn hình gửi thành công */
              <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-8 sm:p-10 space-y-6 text-center shadow-sm animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                  <CheckCircleIcon className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F2144] tracking-tight">
                    {formT.successTitle}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-emerald-800">
                    {formT.successSubtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
                    {formT.successDesc}
                  </p>
                </div>

                {/* Hộp thông báo khẩn cấp */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-slate-700 space-y-2 max-w-md mx-auto">
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
              /* Bảng Form tiếp nhận thông tin chuẩn 3 trường */
              <div className="bg-[#FAF9F6] border border-slate-200/90 rounded-2xl p-6 sm:p-9 shadow-sm text-left">
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
                  {/* 1. Họ và tên */}
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
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* 2. Số điện thoại */}
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
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* 3. Nội dung vụ việc */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F2144] uppercase tracking-wider mb-1.5">
                      {formT.notesLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder={formT.notesPlaceholder}
                      required
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-400 leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Cam kết bảo mật theo Điều 25 Luật Luật sư */}
                  <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-200/80 flex items-start gap-2.5 text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    <ShieldCheckIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{formT.confidentialityText}</span>
                  </div>

                  {/* Nút gửi */}
                  <div className="pt-2">
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
        </section>

      </main>

      {/* Footer & Floating Contact Button */}
      <Footer />
      <FloatingContact />

    </div>
  );
}
