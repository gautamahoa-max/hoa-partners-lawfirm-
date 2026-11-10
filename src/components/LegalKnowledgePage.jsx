import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

export default function LegalKnowledgePage({ articleId, onBack }) {
  const { lang, t } = useLanguage();
  const knowledge = t.legalKnowledge;

  // Filter state for the listing view
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(knowledge.industries[0]);
  const [selectedPractice, setSelectedPractice] = useState(knowledge.practices[0]);
  const [selectedAuthor, setSelectedAuthor] = useState(knowledge.authors[0]);
  const [selectedDate, setSelectedDate] = useState('all');

  // Share dropdown state for the detail view
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync filter default labels when language switches
  useEffect(() => {
    setSelectedIndustry(knowledge.industries[0]);
    setSelectedPractice(knowledge.practices[0]);
    setSelectedAuthor(knowledge.authors[0]);
  }, [lang, knowledge.industries, knowledge.practices, knowledge.authors]);

  // Scroll to top when switching between list and article detail
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowShareMenu(false);
  }, [articleId]);

  // Active article for the full-page YKVN detail view
  const activeArticle = useMemo(() => {
    if (!articleId) return null;
    return knowledge.articles.find((a) => a.id === articleId) || null;
  }, [articleId, knowledge.articles]);

  // Reset all filters
  const handleReset = (e) => {
    if (e) e.preventDefault();
    setSearchKeyword('');
    setSelectedIndustry(knowledge.industries[0]);
    setSelectedPractice(knowledge.practices[0]);
    setSelectedAuthor(knowledge.authors[0]);
    setSelectedDate('all');
  };

  // Navigate to an article's detail page
  const openArticle = (article) => {
    window.location.hash = `#/kien-thuc-phap-luat/${article.id}`;
  };

  // Return to the legal updates listing page
  const backToList = () => {
    window.location.hash = '#/kien-thuc-phap-luat';
  };

  // Copy article URL
  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Filter articles
  const filteredArticles = useMemo(() => {
    return knowledge.articles.filter((article) => {
      // 1. Keyword search (title, displayTitle, summary, introParagraphs)
      if (searchKeyword.trim()) {
        const q = searchKeyword.trim().toLowerCase();
        const inTitle = article.title.toLowerCase().includes(q);
        const inDisplay = article.displayTitle && article.displayTitle.toLowerCase().includes(q);
        const inSummary = article.summary.toLowerCase().includes(q);
        const inIntro =
          article.introParagraphs &&
          article.introParagraphs.some((p) => p.toLowerCase().includes(q));
        if (!inTitle && !inDisplay && !inSummary && !inIntro) return false;
      }

      // 2. Industry filter
      if (selectedIndustry !== knowledge.industries[0]) {
        if (article.industry !== selectedIndustry) return false;
      }

      // 3. Practice filter
      if (selectedPractice !== knowledge.practices[0]) {
        if (article.practice !== selectedPractice) return false;
      }

      // 4. Author filter
      if (selectedAuthor !== knowledge.authors[0]) {
        if (article.author !== selectedAuthor) return false;
      }

      // 5. Date filter
      if (selectedDate !== 'all' && article.rawDate) {
        const articleDate = new Date(article.rawDate);
        const now = new Date('2026-11-10T00:00:00');
        const diffDays = (now - articleDate) / (1000 * 60 * 60 * 24);

        if (selectedDate === '1w' && diffDays > 7) return false;
        if (selectedDate === '1m' && diffDays > 30) return false;
        if (selectedDate === '3m' && diffDays > 90) return false;
        if (selectedDate === '6m' && diffDays > 180) return false;
        if (selectedDate === '2026' && !article.rawDate.startsWith('2026')) return false;
        if (selectedDate === '2025' && !article.rawDate.startsWith('2025')) return false;
      }

      return true;
    });
  }, [
    knowledge.articles,
    searchKeyword,
    selectedIndustry,
    selectedPractice,
    selectedAuthor,
    selectedDate,
    knowledge,
  ]);

  // ============================================================================
  // VIEW 1: FULL-PAGE ARTICLE DETAIL VIEW (YKVN Article Layout)
  // ============================================================================
  if (activeArticle) {
    return (
      <div className="min-h-screen bg-[#FFFFFF] text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
        <Navbar />

        <main className="flex-grow pt-6 sm:pt-8 pb-20">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Utility Bar: Back link on left, Print & Share icons on right */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={backToList}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1E345B] py-1 px-2 -ml-2 rounded hover:bg-slate-100 transition-colors uppercase tracking-wider"
              >
                {knowledge.backToListBtn}
              </button>

              {/* Print & Share Icons (Exact YKVN Top-Right Action Bar) */}
              <div className="flex items-center gap-3 text-slate-400 relative">
                <button
                  onClick={() => window.print()}
                  title={knowledge.printLabel}
                  aria-label={knowledge.printLabel}
                  className="hover:text-[#1E345B] transition-colors p-1.5"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                    <path d="M448 288v128h-384v-128h-64v192h512v-192zm-32-256h-320v352h320v-352zm-64 288h-192v-32h192v32zm0-96h-192v-32h192v32zm0-96h-192v-32h192v32z" />
                  </svg>
                </button>

                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu((prev) => !prev)}
                    title={knowledge.shareLabel}
                    aria-label={knowledge.shareLabel}
                    className="hover:text-[#1E345B] transition-colors p-1.5"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </button>

                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-30 text-xs text-slate-700">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3.5 py-2 hover:bg-slate-50 hover:text-[#1E345B] font-medium"
                      >
                        Facebook
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3.5 py-2 hover:bg-slate-50 hover:text-[#1E345B] font-medium"
                      >
                        LinkedIn
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyLink}
                        className="w-full text-left px-3.5 py-2 hover:bg-slate-50 hover:text-[#1E345B] font-medium"
                      >
                        {copiedLink ? `✓ ${knowledge.copiedLabel}` : 'Copy Link'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Article Heading (Title Case, Bold Navy #1E345B) */}
            <h1 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#1E345B] tracking-tight leading-snug mb-5">
              {activeArticle.displayTitle || activeArticle.title}
            </h1>

            {/* Publication Date */}
            <p className="text-[13px] sm:text-[14px] text-[#777777] mb-8">
              {activeArticle.date}
            </p>

            {/* Opening Editorial Paragraphs */}
            {activeArticle.introParagraphs && (
              <div className="space-y-5 text-[14px] sm:text-[15px] text-[#666666] leading-[1.8] mb-8">
                {activeArticle.introParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}

            {/* 3-Column Comparison Table (Exact YKVN Centered Table Style) */}
            {activeArticle.table && (
              <div className="my-8 sm:my-10">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-center">
                    <thead>
                      <tr>
                        {activeArticle.table.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            className="py-4 px-4 font-bold text-[#555555] text-[13.5px] sm:text-[14.5px] align-middle"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {activeArticle.table.rows.map((row, rIdx) => (
                        <tr key={rIdx}>
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className="py-5 px-4 text-[#666666] text-[13.5px] sm:text-[14.5px] align-middle leading-relaxed"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Footnote */}
                {activeArticle.table.footnote && (
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#666666] mt-6 leading-[1.8]">
                    {activeArticle.table.footnote}
                  </p>
                )}
              </div>
            )}

            {/* Closing Editorial Paragraphs */}
            {activeArticle.closingParagraphs && (
              <div className="space-y-5 text-[14px] sm:text-[15px] text-[#666666] leading-[1.8] mb-8">
                {activeArticle.closingParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}

            {/* Lawyer Representative Card */}
            <div className="mt-10 pt-4">
              <p className="text-[14px] sm:text-[15px] text-[#666666] leading-[1.8] mb-8">
                {knowledge.contactPrompt}
              </p>

              {/* Lawyer Portrait & Info */}
              <div className="w-48 sm:w-52 text-center my-4">
                <a
                  href="#/luat-su"
                  className="group inline-block text-center focus:outline-none"
                >
                  <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden mb-3.5 border border-slate-200/80 shadow-sm">
                    <img
                      src="./lawyer-vo-van-hoa.jpg"
                      alt={knowledge.lawyerName}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="block text-[14px] font-bold text-[#222222] group-hover:text-[#1E345B] transition-colors">
                    {knowledge.lawyerName}
                  </span>
                  <span className="block text-[13px] text-[#777777] mt-0.5">
                    {knowledge.lawyerRole}
                  </span>
                  <span className="block text-[13px] text-[#777777]">
                    {knowledge.lawyerLocation}
                  </span>
                </a>
              </div>
            </div>



          </div>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    );
  }

  // ============================================================================
  // VIEW 2: LEGAL UPDATES LISTING PAGE (YKVN Cập Nhật Pháp Luật Grid + Sidebar)
  // ============================================================================
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      <Navbar />

      {/* Editorial News Banner (YKVN Style) */}
      <div className="w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden relative border-b border-slate-200 bg-slate-900">
        <img
          src="./news-banner.jpg"
          alt={knowledge.pageTitle}
          className="w-full h-full object-cover object-center select-none opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <main className="flex-grow pt-8 sm:pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tiêu đề trang Cập Nhật Pháp Luật */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F2144] tracking-tight">
              {knowledge.pageTitle}
            </h1>
          </div>

          {/* 2-Column Responsive Layout: Left = Articles Grid, Right = Filter Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Cột trái: Danh sách bài viết */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              {filteredArticles.length === 0 ? (
                <div className="bg-[#F8FAFC] rounded-lg p-10 text-center border border-slate-200/90 my-8">
                  <p className="text-slate-600 text-sm mb-4">
                    {knowledge.noResults}
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0F2144] hover:text-amber-600 uppercase tracking-wider transition-colors"
                  >
                    ↺ {knowledge.resetBtn}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      className="group flex flex-col justify-between"
                    >
                      <div>
                        {/* Tiêu đề bài viết: in hoa, đậm, màu navy #0F2144 */}
                        <h2
                          onClick={() => openArticle(article)}
                          className="text-sm sm:text-[15px] font-extrabold text-[#0F2144] uppercase tracking-wide leading-snug cursor-pointer group-hover:text-blue-900 group-hover:underline transition-colors mb-2"
                        >
                          {article.title}
                        </h2>

                        {/* Ngày đăng: in nghiêng, font serif/italic nhẹ */}
                        <time className="text-xs italic text-slate-500 font-serif block mb-3">
                          {article.date}
                        </time>

                        {/* Trích dẫn nội dung */}
                        <p
                          onClick={() => openArticle(article)}
                          className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal cursor-pointer"
                        >
                          {article.summary}
                        </p>
                      </div>

                      {/* Nút xem chi tiết */}
                      <div className="mt-4 pt-2">
                        <button
                          onClick={() => openArticle(article)}
                          className="text-xs font-semibold text-[#0F2144] hover:text-blue-900 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          {knowledge.readMore} <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Cột phải: Hộp Tìm Kiếm & Bộ Lọc (YKVN Boxed Filter Widget) */}
            <aside className="lg:col-span-4 order-1 lg:order-2">
              <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-lg p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] sticky top-24 self-start">
                
                {/* Header widget: Tìm kiếm */}
                <h3 className="text-base sm:text-lg font-bold text-[#0F2144] mb-4">
                  {knowledge.filterSearchTitle}
                </h3>

                {/* Form tìm kiếm từ khóa */}
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="relative mb-5"
                >
                  <label htmlFor="knowledge-search-input" className="sr-only">
                    {knowledge.filterKeywordPlaceholder}
                  </label>
                  <input
                    id="knowledge-search-input"
                    type="search"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder={knowledge.filterKeywordPlaceholder}
                    className="w-full bg-white border border-slate-300 rounded px-3 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0F2144] focus:ring-1 focus:ring-[#0F2144] pr-9 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => {}}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-[#0F2144] transition-colors p-1"
                    aria-label={knowledge.filterSearchTitle}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </form>

                {/* Danh mục bộ lọc theo phong cách YKVN */}
                <div className="space-y-1">
                  
                  {/* 1. Ngành nghề */}
                  <div className="relative border-b border-slate-200/80 py-2.5 flex items-center justify-between">
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-700 font-medium appearance-none cursor-pointer focus:outline-none pr-6 hover:text-slate-900"
                      aria-label={knowledge.filterIndustry}
                    >
                      {knowledge.industries.map((ind, idx) => (
                        <option key={idx} value={ind} className="bg-white text-slate-800 py-1">
                          {ind}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-1 text-rose-700 text-[10px] pointer-events-none select-none">
                      ▼
                    </span>
                  </div>

                  {/* 2. Thực hành */}
                  <div className="relative border-b border-slate-200/80 py-2.5 flex items-center justify-between">
                    <select
                      value={selectedPractice}
                      onChange={(e) => setSelectedPractice(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-700 font-medium appearance-none cursor-pointer focus:outline-none pr-6 hover:text-slate-900"
                      aria-label={knowledge.filterPractice}
                    >
                      {knowledge.practices.map((pra, idx) => (
                        <option key={idx} value={pra} className="bg-white text-slate-800 py-1">
                          {pra}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-1 text-rose-700 text-[10px] pointer-events-none select-none">
                      ▼
                    </span>
                  </div>

                  {/* 3. Tác giả */}
                  <div className="relative border-b border-slate-200/80 py-2.5 flex items-center justify-between">
                    <select
                      value={selectedAuthor}
                      onChange={(e) => setSelectedAuthor(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-700 font-medium appearance-none cursor-pointer focus:outline-none pr-6 hover:text-slate-900"
                      aria-label={knowledge.filterAuthor}
                    >
                      {knowledge.authors.map((auth, idx) => (
                        <option key={idx} value={auth} className="bg-white text-slate-800 py-1">
                          {auth}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-1 text-rose-700 text-[10px] pointer-events-none select-none">
                      ▼
                    </span>
                  </div>

                  {/* 4. Ngày */}
                  <div className="relative border-b border-slate-200/80 py-2.5 flex items-center justify-between">
                    <select
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm text-slate-700 font-medium appearance-none cursor-pointer focus:outline-none pr-6 hover:text-slate-900"
                      aria-label={knowledge.filterDate}
                    >
                      {knowledge.dateOptions.map((opt, idx) => (
                        <option key={idx} value={opt.value} className="bg-white text-slate-800 py-1">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-1 text-rose-700 text-[10px] pointer-events-none select-none">
                      ▼
                    </span>
                  </div>

                </div>

                {/* Nút Thiết lập lại (Reset) căn phải */}
                <div className="flex justify-end pt-3 mt-2">
                  <button
                    onClick={handleReset}
                    type="button"
                    className="text-xs text-slate-500 hover:text-[#0F2144] hover:underline font-medium transition-colors"
                  >
                    {knowledge.resetBtn}
                  </button>
                </div>

              </div>
            </aside>

          </div>

        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
