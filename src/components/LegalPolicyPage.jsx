import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';
import { PRIVACY_POLICY_CONTENT } from '../i18n/privacyPolicy';

const PdfConsentModal = React.lazy(() => import('./PdfConsentModal'));

function BreadcrumbNav({ backLabel, currentTitle, onBack }) {
  return (
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
        {backLabel}
      </a>
      <span aria-hidden="true">/</span>
      <span className="text-[#0F2144] font-semibold">{currentTitle}</span>
    </nav>
  );
}

function ArticleCard({ article }) {
  return (
    <article
      id={article.id}
      className="scroll-mt-24 lg:scroll-mt-32 rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_2px_16px_rgba(15,33,68,0.03)] space-y-5"
    >
      <div className="flex items-start gap-3.5 border-b border-slate-100 pb-4">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#EEF3FA] border border-slate-200/90 text-xs font-bold text-[#0F2144] shrink-0 mt-0.5 tabular-nums">
          {article.number}
        </span>
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#0F2144] tracking-tight leading-snug">
          {article.heading}
        </h2>
      </div>

      {article.intro && (
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{article.intro}</p>
      )}

      {article.paragraphs?.map((para, idx) => (
        <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {para}
        </p>
      ))}

      {article.controllerFacts && (
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl bg-[#FAF9F6] border border-slate-200/90 p-4 sm:p-5">
          {article.controllerFacts.map((fact, idx) => (
            <div
              key={fact.label}
              className={idx === article.controllerFacts.length - 1 ? 'sm:col-span-2' : ''}
            >
              <dt className="text-xs font-bold uppercase tracking-wider text-slate-600">
                {fact.label}
              </dt>
              <dd className="mt-1 text-xs sm:text-sm font-medium text-[#0F2144] leading-relaxed">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {article.twoColCards && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {article.twoColCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-[#FAF9F6] border border-slate-200/90 p-4 sm:p-5 space-y-3"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1E3A6D]">
                {card.badge}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#0F2144]">{card.title}</h3>
              <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {card.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {article.purposeGroups && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {article.purposeGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0F2144] text-white text-xs font-bold tracking-wider">
                {group.badge}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-[#0F2144] leading-snug">
                {group.title}
              </h3>
              <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {group.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {article.recipientCards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {article.recipientCards.map((rec) => (
            <div
              key={rec.number}
              className="rounded-xl bg-[#FAF9F6] border border-slate-200/90 p-4 sm:p-5 space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#0F2144] text-white text-xs font-bold inline-flex items-center justify-center shrink-0 tabular-nums">
                  {rec.number}
                </span>
                <h3 className="text-sm font-bold text-[#0F2144] leading-snug">{rec.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{rec.text}</p>
            </div>
          ))}
        </div>
      )}

      {article.securityControls && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {article.securityControls.map((ctrl) => (
            <div
              key={ctrl.title}
              className="rounded-xl bg-[#FAF9F6] border border-slate-200/90 p-4 space-y-1.5"
            >
              <div className="flex items-center gap-2 text-[#0F2144]">
                <svg
                  className="w-4 h-4 text-[#1E3A6D] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                </svg>
                <h3 className="text-sm font-bold text-[#0F2144]">{ctrl.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{ctrl.detail}</p>
            </div>
          ))}
        </div>
      )}

      {article.safetyAdvisory && (
        <div className="rounded-xl border border-amber-300/90 bg-amber-50/70 p-4 sm:p-5 space-y-3">
          <div className="flex items-start gap-2.5">
            <svg
              className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
              />
            </svg>
            <div className="space-y-1">
              <h3 className="text-sm sm:text-base font-bold text-[#0F2144]">
                {article.safetyAdvisory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">{article.safetyAdvisory.subtitle}</p>
            </div>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-800 leading-relaxed">
            {article.safetyAdvisory.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {article.slaRows && (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#FAF9F6] border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F2144]">
                  {article.slaTableHeaders.metric}
                </th>
                <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F2144] whitespace-nowrap">
                  {article.slaTableHeaders.timeline}
                </th>
                <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#0F2144]">
                  {article.slaTableHeaders.detail}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 text-xs sm:text-sm text-slate-700">
              {article.slaRows.map((row) => (
                <tr key={row.metric} className="align-top">
                  <td className="py-3.5 px-4 font-semibold text-[#0F2144]">{row.metric}</td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#EEF3FA] text-[#0F2144] text-xs font-bold">
                      {row.timeline}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 leading-relaxed">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {article.rightsList && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {article.rightsList.map((right) => (
            <div
              key={right.num}
              className="flex items-start gap-3 rounded-xl bg-[#FAF9F6] border border-slate-200/80 p-3.5"
            >
              <span className="text-xs font-bold text-[#1E3A6D] bg-white border border-slate-200 rounded-md px-2 py-0.5 shrink-0 tabular-nums">
                {right.num}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{right.text}</p>
            </div>
          ))}
        </div>
      )}

      {article.obligations && (
        <div className="rounded-xl bg-[#FAF9F6] border border-slate-200/90 p-4 sm:p-5 space-y-2.5">
          <h3 className="text-sm font-bold text-[#0F2144]">{article.obligationsTitle}</h3>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {article.obligations.map((ob, idx) => (
              <li key={idx}>{ob}</li>
            ))}
          </ul>
        </div>
      )}

      {article.bullets && (
        <ul className="list-disc pl-5 space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {article.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      )}

      {article.callout && (
        <div className="rounded-xl bg-[#EEF3FA]/75 border border-[#0F2144]/15 p-4 sm:p-5 space-y-1.5">
          <h3 className="text-xs sm:text-sm font-bold text-[#0F2144]">{article.callout.title}</h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {article.callout.text}
          </p>
        </div>
      )}

      {article.footnote && (
        <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
          {article.footnote}
        </p>
      )}
    </article>
  );
}

function PrivacyPolicyView({ locale, pages, onOpenConsent, onBack }) {
  const p = PRIVACY_POLICY_CONTENT[locale];
  const [activeId, setActiveId] = useState(p.articles[0].id);

  useEffect(() => {
    setActiveId(p.articles[0].id);
  }, [locale, p.articles]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    );

    p.articles.forEach((article) => {
      const el = document.getElementById(article.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [p.articles]);

  const scrollToSection = (sectionId) => {
    setActiveId(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Institutional Header Band */}
      <section className="bg-[#FAF9F6] border-b border-slate-200/80 py-10 sm:py-14 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav backLabel={pages.backHome} currentTitle={p.title} onBack={onBack} />

          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 ykvn-accent-block">
              {p.eyebrow}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-tight">
              {p.title}
            </h1>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsent}
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#0F2144] hover:bg-[#162A56] text-white text-xs sm:text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                  />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>{p.viewConsentBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Horizontal Quick-Jump Strip */}
      <div className="lg:hidden bg-white border-b border-slate-200/80 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto">
          {p.articles.map((article) => {
            const isActive = activeId === article.id;
            return (
              <button
                key={article.id}
                type="button"
                onClick={() => scrollToSection(article.id)}
                className={`min-h-[44px] px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#0F2144] text-white'
                    : 'bg-[#FAF9F6] border border-slate-200 text-[#0F2144] hover:border-slate-300'
                }`}
              >
                {article.number}. {article.shortTitle}
              </button>
            );
          })}
        </div>
      </div>

      {/* Two-Column Body: Sticky Sidebar + Main Articles */}
      <section className="py-10 sm:py-14 text-left">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 lg:sticky lg:top-32 space-y-5">
            <nav
              aria-label={p.tocTitle}
              className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-[0_2px_16px_rgba(15,33,68,0.03)] space-y-2"
            >
              <p className="px-2.5 pt-1 pb-2 text-xs font-bold uppercase tracking-wider text-slate-600 border-b border-slate-100">
                {p.tocTitle}
              </p>
              <ul className="space-y-1">
                {p.articles.map((article) => {
                  const isActive = activeId === article.id;
                  return (
                    <li key={article.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(article.id)}
                        className={`w-full min-h-[44px] px-2.5 py-2 rounded-xl text-left text-xs font-semibold transition-colors flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? 'bg-[#EEF3FA] text-[#0F2144] border border-slate-200/90'
                            : 'text-slate-700 hover:bg-[#FAF9F6] hover:text-[#0F2144]'
                        }`}
                      >
                        <span
                          className={`text-xs font-bold tabular-nums shrink-0 ${
                            isActive ? 'text-[#0F2144]' : 'text-slate-500'
                          }`}
                        >
                          {article.number}
                        </span>
                        <span className="leading-snug">{article.shortTitle}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Main 8-Article Content Column */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-6">
            {p.articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}

            {/* Bottom Cross-Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs sm:text-sm">
              <a
                href="#/dieu-khoan-su-dung"
                className="font-semibold text-[#0F2144] underline underline-offset-4 hover:text-amber-800"
              >
                {p.crossTermsLabel}
              </a>
              <a
                href="#/lien-he"
                className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#0F2144] hover:bg-[#162A56] text-white text-xs sm:text-sm font-semibold inline-flex items-center transition-colors"
              >
                {p.contactPageCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TermsPolicyView({ locale, pages, content, onBack }) {
  return (
    <>
      <section className="bg-[#FAF9F6] border-b border-slate-200/80 py-10 sm:py-14 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav backLabel={pages.backHome} currentTitle={content.title} onBack={onBack} />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 ykvn-accent-block">
            {content.eyebrow}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2144] tracking-tight leading-tight">
            {content.title}
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-medium text-slate-600">{content.updated}</p>
        </div>
      </section>

      <section className="py-10 sm:py-14 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-[0_2px_16px_rgba(15,33,68,0.04)] space-y-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{content.intro}</p>

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
              href="#/chinh-sach-bao-mat"
              className="font-semibold text-[#0F2144] underline underline-offset-4 hover:text-amber-800"
            >
              {locale === 'vi'
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
    </>
  );
}

export default function LegalPolicyPage({ mode = 'privacy', onBack }) {
  const { lang, t } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';
  const pages = t.legalPages;
  const [showConsentModal, setShowConsentModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-clip">
      <Navbar />

      <main id="main-content" className="flex-grow">
        {mode === 'terms' ? (
          <TermsPolicyView
            locale={locale}
            pages={pages}
            content={pages.terms}
            onBack={onBack}
          />
        ) : (
          <PrivacyPolicyView
            locale={locale}
            pages={pages}
            onOpenConsent={() => setShowConsentModal(true)}
            onBack={onBack}
          />
        )}
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
