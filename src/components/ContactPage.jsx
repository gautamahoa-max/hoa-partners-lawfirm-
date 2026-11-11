import React, { useState, useEffect } from 'react';
import { 
  PhoneIcon, 
  CheckCircleIcon 
} from './Icons';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';
import {
  purgeLegacySensitiveStorage,
  sanitizeInput,
  isValidPhone,
  checkRateLimit,
  recordSubmissionTimestamp,
} from '../utils/security';

export default function ContactPage({ onBack }) {
  const { lang, setLang, t } = useLanguage();
  const contact = t.contactPage;
  const formT = contact.form;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    notes: '',
    botField: '', // Honeypot anti-bot trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    purgeLegacySensitiveStorage();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const maxLen = name === 'fullName' ? 120 : name === 'phone' ? 20 : name === 'botField' ? 100 : 2000;
    setFormData((prev) => ({ ...prev, [name]: value.slice(0, maxLen) }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check: if hidden botField is filled, silently drop
    if (formData.botField) {
      setIsSubmitted(true);
      return;
    }

    const cleanName = sanitizeInput(formData.fullName, 120).trim();
    const cleanPhone = sanitizeInput(formData.phone, 20).trim();
    const cleanNotes = sanitizeInput(formData.notes, 2000).trim();

    if (!cleanName || !cleanPhone || !cleanNotes) {
      setErrorMessage(formT.errorEmpty);
      return;
    }

    if (!isValidPhone(cleanPhone)) {
      setErrorMessage(
        lang === 'vi'
          ? 'Vui lòng nhập số điện thoại hợp lệ (từ 9 đến 15 chữ số).'
          : 'Please enter a valid phone number (9 to 15 digits).'
      );
      return;
    }

    // 2. Rate limit check
    const rateStatus = checkRateLimit();
    if (!rateStatus.allowed) {
      setErrorMessage(
        rateStatus.reason === 'cooldown'
          ? lang === 'vi'
            ? `Vui lòng đợi ${rateStatus.waitSeconds} giây trước khi gửi yêu cầu tiếp theo.`
            : `Please wait ${rateStatus.waitSeconds} seconds before submitting another request.`
          : lang === 'vi'
            ? 'Bạn đã đạt giới hạn gửi yêu cầu trong phiên làm việc này. Vui lòng liên hệ trực tiếp qua Hotline.'
            : 'Maximum submissions reached for this session. Please call our Hotline directly.'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Xác nhận tiếp nhận an toàn trong bộ nhớ phiên (Không lưu dữ liệu nhạy cảm PII vào localStorage để chống rò rỉ XSS)
    setTimeout(() => {
      recordSubmissionTimestamp();
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      notes: '',
      botField: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      
      {/* 1. Header & Navigation Bar chuẩn như ảnh 2 */}
      <Navbar />

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
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-widest font-mono block">
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

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot field ẩn để chống bot tự động spam */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botField">Do not fill this out if you are human</label>
                    <input
                      id="botField"
                      type="text"
                      name="botField"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.botField}
                      onChange={handleChange}
                    />
                  </div>

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
                      maxLength={120}
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-500"
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
                      maxLength={20}
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-500"
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
                      maxLength={2000}
                      required
                      className="w-full px-4 py-3 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all placeholder:text-slate-500 leading-relaxed"
                    ></textarea>
                  </div>

                  {/* Nút gửi yêu cầu tư vấn hiện đại */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative overflow-hidden w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0F2144] via-[#162A56] to-[#0F2144] text-white font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(15,33,68,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] hover:shadow-[0_8px_28px_rgba(15,33,68,0.28)] hover:via-[#1B3368] active:scale-[0.99] active:translate-y-[1px] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {/* Hiệu ứng quét sáng (Shimmer Sweep) khi hover */}
                      <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out pointer-events-none" />

                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-amber-300" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span className="tracking-wide">{formT.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span className="tracking-wide">{formT.submitBtn}</span>
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-white/10 text-amber-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shrink-0">
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="22" y1="2" x2="11" y2="13" />
                              <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                          </span>
                        </>
                      )}
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
