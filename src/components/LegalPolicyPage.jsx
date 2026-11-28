import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';
import { PRIVACY_POLICY_CONTENT } from '../i18n/privacyPolicy';
import { TERMS_OF_USE_CONTENT } from '../i18n/termsOfUse';

const PdfConsentModal = React.lazy(() => import('./PdfConsentModal'));

function formatKirklandHeading(article) {
  const cleaned = String(article.heading || '').replace(/^(?:Điều|Article)\s+\d+\.\s*/i, '');
  const num = Number.parseInt(article.number, 10);
  return Number.isNaN(num) ? cleaned : `${num} ${cleaned}`;
}

function renderLabeledText(text) {
  const str = String(text || '');
  const colonIdx = str.indexOf(': ');
  if (colonIdx > 0 && colonIdx < 110) {
    const label = str.slice(0, colonIdx);
    const rest = str.slice(colonIdx + 2);
    return (
      <>
        <span className="underline underline-offset-4 decoration-[#333333]/60">{label}</span>:{' '}
        {rest}
      </>
    );
  }
  return str;
}

const PROSE_PARAGRAPH_CLASS = 'text-base sm:text-lg font-normal text-[#333333] leading-[1.7] mb-5';
const PROSE_LIST_CLASS =
  'list-disc pl-8 sm:pl-10 space-y-3.5 my-5 text-base sm:text-lg font-normal text-[#333333] leading-[1.7]';
const UNDERLINE_LEAD_CLASS = 'underline underline-offset-4 decoration-[#333333]/60';

function KirklandArticle({ article, locale, isFirst }) {
  const purposeHeaders =
    locale === 'vi'
      ? { left: 'Nhóm mục đích', right: 'Nội dung xử lý cụ thể' }
      : { left: 'Purpose Group', right: 'Specific Processing Activities' };

  return (
    <section id={article.id} className={isFirst ? '' : 'pt-5'}>
      <h2
        className={`text-base sm:text-lg font-bold text-[#222222] leading-[1.67] mb-5 ${
          isFirst ? 'mt-0' : 'mt-5'
        }`}
      >
        {formatKirklandHeading(article)}
      </h2>

      {article.intro && <p className={PROSE_PARAGRAPH_CLASS}>{article.intro}</p>}

      {article.paragraphs?.map((para, idx) => (
        <p key={idx} className={PROSE_PARAGRAPH_CLASS}>
          {para}
        </p>
      ))}

      {article.controllerFacts && (
        <ul className={PROSE_LIST_CLASS}>
          {article.controllerFacts.map((fact) => (
            <li key={fact.label}>
              <span className={UNDERLINE_LEAD_CLASS}>{fact.label}</span>: {fact.value}
            </li>
          ))}
        </ul>
      )}

      {article.twoColCards?.map((card) => (
        <div key={card.title} className="mt-6">
          <p className="text-base sm:text-lg font-normal text-[#333333] leading-[1.7] mb-3">
            <span className={UNDERLINE_LEAD_CLASS}>{card.title}</span>:
          </p>
          <ul className={PROSE_LIST_CLASS}>
            {card.bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      {article.purposeGroups && (
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[540px] border border-[#CCCCCC] border-collapse text-left">
            <thead>
              <tr className="bg-[#1A1A1A] text-white">
                <th className="w-1/2 py-2.5 px-3.5 text-base sm:text-lg font-normal">
                  {purposeHeaders.left}
                </th>
                <th className="w-1/2 py-2.5 px-3.5 text-base sm:text-lg font-normal">
                  {purposeHeaders.right}
                </th>
              </tr>
            </thead>
            <tbody>
              {article.purposeGroups.map((group) => (
                <tr key={group.title} className="odd:bg-white even:bg-[#E6E6E6] border-t border-[#CCCCCC]">
                  <td className="w-1/2 py-3 px-3.5 align-top text-base font-normal text-[#333333] leading-[1.65]">
                    {group.title}
                  </td>
                  <td className="w-1/2 py-3 px-3.5 align-top text-base font-normal text-[#333333] leading-[1.65] space-y-1.5">
                    {group.bullets.map((item, idx) => (
                      <p key={idx}>
                        ({String.fromCharCode(97 + idx)}) {item}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {article.recipientCards && (
        <ul className={PROSE_LIST_CLASS}>
          {article.recipientCards.map((rec) => (
            <li key={rec.number}>
              <span className={UNDERLINE_LEAD_CLASS}>{rec.title}</span>: {rec.text}
            </li>
          ))}
        </ul>
      )}

      {article.securityControls && (
        <ul className={PROSE_LIST_CLASS}>
          {article.securityControls.map((ctrl) => (
            <li key={ctrl.title}>
              <span className={UNDERLINE_LEAD_CLASS}>{ctrl.title}</span>: {ctrl.detail}
            </li>
          ))}
        </ul>
      )}

      {article.safetyAdvisory && (
        <div className="mt-6">
          <p className="text-base sm:text-lg font-normal text-[#333333] leading-[1.7] mb-3">
            <span className={UNDERLINE_LEAD_CLASS}>{article.safetyAdvisory.title}</span>:{' '}
            {article.safetyAdvisory.subtitle}
          </p>
          <ul className={PROSE_LIST_CLASS}>
            {article.safetyAdvisory.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {article.slaRows && (
        <div className="overflow-x-auto my-7">
          <table className="w-full min-w-[600px] border border-[#CCCCCC] border-collapse text-left">
            <thead>
              <tr className="bg-[#1A1A1A] text-white">
                <th className="py-2.5 px-3.5 text-base sm:text-lg font-normal">
                  {article.slaTableHeaders.metric}
                </th>
                <th className="py-2.5 px-3.5 text-base sm:text-lg font-normal whitespace-nowrap">
                  {article.slaTableHeaders.timeline}
                </th>
                <th className="py-2.5 px-3.5 text-base sm:text-lg font-normal">
                  {article.slaTableHeaders.detail}
                </th>
              </tr>
            </thead>
            <tbody>
              {article.slaRows.map((row) => (
                <tr key={row.metric} className="odd:bg-white even:bg-[#E6E6E6] border-t border-[#CCCCCC]">
                  <td className="py-3 px-3.5 align-top text-base font-normal text-[#333333] leading-[1.65]">
                    {row.metric}
                  </td>
                  <td className="py-3 px-3.5 align-top text-base font-normal text-[#333333] leading-[1.65] whitespace-nowrap">
                    {row.timeline}
                  </td>
                  <td className="py-3 px-3.5 align-top text-base font-normal text-[#333333] leading-[1.65]">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {article.rightsList && (
        <ul className={PROSE_LIST_CLASS}>
          {article.rightsList.map((right) => (
            <li key={right.num}>{right.text}</li>
          ))}
        </ul>
      )}

      {article.obligations && (
        <div className="mt-6">
          <p className="text-base sm:text-lg font-normal text-[#333333] leading-[1.7] mb-3">
            <span className={UNDERLINE_LEAD_CLASS}>{article.obligationsTitle}</span>:
          </p>
          <ul className={PROSE_LIST_CLASS}>
            {article.obligations.map((ob, idx) => (
              <li key={idx}>{ob}</li>
            ))}
          </ul>
        </div>
      )}

      {article.bullets && (
        <ul className={PROSE_LIST_CLASS}>
          {article.bullets.map((bullet, idx) => (
            <li key={idx}>{renderLabeledText(bullet)}</li>
          ))}
        </ul>
      )}

      {article.callout && (
        <p className={PROSE_PARAGRAPH_CLASS}>
          <span className={UNDERLINE_LEAD_CLASS}>{article.callout.title}</span>:{' '}
          {article.callout.text}
        </p>
      )}

      {article.footnote && <p className={PROSE_PARAGRAPH_CLASS}>{renderLabeledText(article.footnote)}</p>}
    </section>
  );
}

export default function LegalPolicyPage({ mode = 'privacy' }) {
  const { lang, t } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isTerms = mode === 'terms';
  const privacyDoc = PRIVACY_POLICY_CONTENT[locale];
  const termsDoc = TERMS_OF_USE_CONTENT[locale];
  const activeDoc = isTerms ? termsDoc : privacyDoc;

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode, locale]);

  const navItems = [
    {
      key: 'privacy',
      label: privacyDoc.title,
      href: '#/chinh-sach-bao-mat',
      active: !isTerms,
    },
    {
      key: 'terms',
      label: termsDoc.title,
      href: '#/dieu-khoan-su-dung',
      active: isTerms,
    },
  ];

  const menuHeading = locale === 'vi' ? 'Danh mục' : 'Menu';
  const consentLabel = privacyDoc.viewConsentBtn;
  const updatedLabel = locale === 'vi' ? 'Cập nhật: Tháng 11/2026' : 'Updated: November 2026';

  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-clip">
      <Navbar />

      <main id="main-content" className="flex-grow">
        {/* Band 1: Dark Architectural Title Banner */}
        <section className="relative overflow-hidden bg-[#0F2144] text-white text-left">
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 360"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full opacity-10"
          >
            <polygon points="0,360 520,0 760,0 240,360" fill="#FFFFFF" />
            <polygon points="620,360 1120,0 1320,0 820,360" fill="#94A3B8" />
            <line x1="0" y1="220" x2="1440" y2="80" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="340" y1="0" x2="1080" y2="360" stroke="#CBD5E1" strokeWidth="1" />
          </svg>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-28">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
              {activeDoc.title}
            </h1>
          </div>
        </section>

        {/* Band 2: Full-Width Light-Gray Menu Switcher Band */}
        <section aria-label={menuHeading} className="bg-[#E6E6E6] text-left">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
            <div className="md:flex md:items-center md:gap-12 lg:gap-16">
              <div className="shrink-0">
                <p className="text-lg sm:text-xl font-normal text-[#333333]">{menuHeading}</p>
                <div aria-hidden="true" className="w-7 h-px bg-[#666666] mt-3" />
              </div>

              {/* Desktop Rectangular Switcher Buttons */}
              <div className="hidden md:flex md:flex-wrap md:items-center md:gap-3.5 lg:gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    aria-current={item.active ? 'page' : undefined}
                    className={`min-h-[46px] px-6 py-2.5 rounded-none text-sm font-medium transition-colors inline-flex items-center justify-center ${
                      item.active
                        ? 'bg-[#0F2144] text-white border border-[#0F2144]'
                        : 'bg-white text-[#0F2144] border border-[#0F2144] hover:bg-[#0F2144]/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={() => setShowConsentModal(true)}
                  className="min-h-[46px] px-6 py-2.5 rounded-none text-sm font-medium bg-white text-[#0F2144] border border-[#0F2144] hover:bg-[#0F2144] hover:text-white transition-colors inline-flex items-center justify-center cursor-pointer"
                >
                  {consentLabel}
                </button>
              </div>

              {/* Mobile Sharp-Cornered Dropdown Switcher */}
              <div className="md:hidden mt-5">
                <button
                  type="button"
                  aria-expanded={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="w-full min-h-[46px] px-4 py-2.5 rounded-none bg-[#0F2144] text-white text-sm font-medium flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span className="truncate">{activeDoc.title}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      mobileMenuOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {mobileMenuOpen && (
                  <div className="rounded-none border border-[#0F2144] border-t-0 bg-white divide-y divide-slate-200">
                    {navItems.map((item) => (
                      <a
                        key={item.key}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={item.active ? 'page' : undefined}
                        className={`min-h-[44px] px-4 py-2.5 text-sm font-medium flex items-center ${
                          item.active
                            ? 'bg-[#EEF3FA] text-[#0F2144] font-semibold'
                            : 'text-[#0F2144] hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowConsentModal(true);
                      }}
                      className="w-full min-h-[44px] px-4 py-2.5 text-left text-sm font-medium text-[#0F2144] hover:bg-slate-50 cursor-pointer"
                    >
                      {consentLabel}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Band 3: Pure White Flat Editorial Prose Canvas */}
        <section className="bg-white py-12 sm:py-16 lg:py-20 text-left">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            {activeDoc.articles.map((article, idx) => (
              <KirklandArticle
                key={article.id}
                article={article}
                locale={locale}
                isFirst={idx === 0}
              />
            ))}

            <p className="text-base sm:text-lg font-normal text-[#333333] leading-[1.7] mt-12">
              {updatedLabel}
            </p>
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
