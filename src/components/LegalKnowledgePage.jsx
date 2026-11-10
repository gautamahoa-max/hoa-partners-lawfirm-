import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

export default function LegalKnowledgePage({ onBack }) {
  const { lang, t } = useLanguage();
  const knowledge = t.legalKnowledge;

  // Filter state
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(knowledge.industries[0]);
  const [selectedPractice, setSelectedPractice] = useState(knowledge.practices[0]);
  const [selectedAuthor, setSelectedAuthor] = useState(knowledge.authors[0]);
  const [selectedDate, setSelectedDate] = useState('all');

  // Selected article for reading modal
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Reset all filters
  const handleReset = (e) => {
    if (e) e.preventDefault();
    setSearchKeyword('');
    setSelectedIndustry(knowledge.industries[0]);
    setSelectedPractice(knowledge.practices[0]);
    setSelectedAuthor(knowledge.authors[0]);
    setSelectedDate('all');
  };

  // Filter articles
  const filteredArticles = useMemo(() => {
    return knowledge.articles.filter((article) => {
      // 1. Keyword search (title, summary, highlights)
      if (searchKeyword.trim()) {
        const q = searchKeyword.trim().toLowerCase();
        const inTitle = article.title.toLowerCase().includes(q);
        const inSummary = article.summary.toLowerCase().includes(q);
        const inHighlights = article.highlights && article.highlights.some((h) => h.toLowerCase().includes(q));
        if (!inTitle && !inSummary && !inHighlights) return false;
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
        const now = new Date('2026-11-10T00:00:00'); // Consistent reference date
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
  }, [knowledge.articles, searchKeyword, selectedIndustry, selectedPractice, selectedAuthor, selectedDate, knowledge]);

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
          
          {/* Breadcrumb quay lại */}
          <div className="mb-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#0F2144] py-1 px-2.5 rounded hover:bg-slate-100 transition-colors uppercase tracking-wider"
            >
              {knowledge.backBtn}
            </button>
          </div>

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
                          onClick={() => setSelectedArticle(article)}
                          className="text-sm sm:text-[15px] font-extrabold text-[#0F2144] uppercase tracking-wide leading-snug cursor-pointer group-hover:text-blue-900 group-hover:underline transition-colors mb-2"
                        >
                          {article.title}
                        </h2>

                        {/* Ngày đăng: in nghiêng, font serif/italic nhẹ */}
                        <time className="text-xs italic text-slate-500 font-serif block mb-3">
                          {article.date}
                        </time>

                        {/* Trích dẫn nội dung */}
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                          {article.summary}
                        </p>
                      </div>

                      {/* Nút xem chi tiết */}
                      <div className="mt-4 pt-2">
                        <button
                          onClick={() => setSelectedArticle(article)}
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

      {/* Modal Đọc Bài Viết Chi Tiết */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nút đóng modal */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
              aria-label={knowledge.closeModal}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Tags & Metadata */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F1F3F7] text-[#0F2144]">
                {selectedArticle.badge}
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                {selectedArticle.readTime}
              </span>
            </div>

            {/* Tiêu đề bài viết */}
            <h2 className="text-lg sm:text-xl font-extrabold text-[#0F2144] uppercase tracking-wide leading-snug mb-2">
              {selectedArticle.title}
            </h2>

            {/* Ngày và tác giả */}
            <div className="flex items-center gap-2 text-xs italic text-slate-500 font-serif mb-6 pb-4 border-b border-slate-100">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span className="not-italic font-sans font-semibold text-slate-700">{selectedArticle.author}</span>
            </div>

            {/* Nội dung phân tích */}
            <div className="text-sm text-slate-700 leading-relaxed space-y-4 mb-6 font-normal whitespace-pre-line">
              {selectedArticle.content}
            </div>

            {/* Điểm nhấn trọng tâm */}
            {selectedArticle.highlights && selectedArticle.highlights.length > 0 && (
              <div className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-200/80 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F2144] mb-3">
                  {lang === 'vi' ? 'Điểm Nhấn Pháp Lý Trọng Tâm' : 'Key Legal Takeaways'}
                </h4>
                <ul className="space-y-2">
                  {selectedArticle.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  window.location.hash = '#/lien-he';
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0F2144] to-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg transition-all"
              >
                ⚖️ {knowledge.consultThis}
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {knowledge.closeModal}
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
      <FloatingContact />
    </div>
  );
}
