import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

const PdfConsentModal = React.lazy(() => import('./PdfConsentModal'));

export default function LegalPolicyPage({ mode = 'privacy', onBack }) {
  const { lang, t } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';
  const pages = t.legalPages;
  const content = mode === 'terms' ? pages.terms : pages.privacy;
  const [showConsentModal, setShowConsentModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <Navbar />

      <main id="main-content" className="flex-grow">
        <section className="bg-[#FAF9F6] border-b border-slate-200/80 py-10 sm:py-14 text-left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-600 mb-5 flex items-center gap-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBack) onBack();
                  else window.location.hash = '';
                }}
                className="hover:text-[#0F2144] transition-colors font-medium"
              >
                {pages.backHome}
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-[#0F2144] font-semibold">{content.title}</span>
            </nav>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 ykvn-accent-block">
              {content.eyebrow}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-tight">
              {content.title}
            </h1>
            <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600">
              {content.updated}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14 text-left">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_2px_16px_rgba(15,33,68,0.04)] space-y-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {content.intro}
              </p>

              {mode === 'privacy' && (
                <div className="rounded-xl bg-[#FAF9F6] border border-slate-200/90 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {locale === 'vi'
                      ? 'Quý khách có thể xem trực tiếp toàn văn bản gốc Thư chấp thuận xử lý Dữ liệu cá nhân đang áp dụng:'
                      : 'You may inspect the official full-text bilingual Letter of Consent currently in force:'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowConsentModal(true)}
                    className="min-h-[44px] px-4 py-2.5 rounded-lg bg-[#0F2144] hover:bg-[#162A56] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 cursor-pointer"
                  >
                    {pages.viewConsentPdfBtn}
                  </button>
                </div>
              )}

              <div className="divide-y divide-slate-200/80">
                {content.sections.map((section) => (
                  <div key={section.heading} className="py-5 first:pt-2 last:pb-0 space-y-2.5">
                    <h2 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight">
                      {section.heading}
                    </h2>
                    {section.paragraphs?.map((para, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {section.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <a
                href={mode === 'privacy' ? '#/dieu-khoan-su-dung' : '#/chinh-sach-bao-mat'}
                className="font-semibold text-[#0F2144] underline underline-offset-4 hover:text-amber-800"
              >
                {mode === 'privacy'
                  ? locale === 'vi'
                    ? 'Xem Điều khoản sử dụng & Miễn trừ trách nhiệm →'
                    : 'View Terms of Use & Legal Disclaimer →'
                  : locale === 'vi'
                    ? 'Xem Chính sách bảo mật dữ liệu cá nhân →'
                    : 'View Personal Data Privacy Policy →'}
              </a>
              <a
                href="#/lien-he"
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#0F2144] hover:bg-[#162A56] text-white text-xs font-semibold inline-flex items-center transition-colors"
              >
                {locale === 'vi' ? 'Liên hệ tư vấn trực tiếp' : 'Contact Our Attorneys'}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />

      {showConsentModal && (
        <React.Suspense
          fallback={
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-xl px-5 py-3 text-xs sm:text-sm font-medium text-[#0F2144] shadow-lg">
                {locale === 'en' ? 'Opening document...' : 'Đang mở văn bản PDF...'}
              </div>
            </div>
          }
        >
          <PdfConsentModal
            lang={lang}
            formT={t.contactPage.form}
            onClose={() => setShowConsentModal(false)}
          />
        </React.Suspense>
      )}
    </div>
  );
}
