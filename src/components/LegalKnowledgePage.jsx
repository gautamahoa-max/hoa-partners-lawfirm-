import React, { useState, useEffect } from 'react';
import { 
  ScaleIcon, 
  LandmarkIcon, 
  FileTextIcon, 
  BriefcaseIcon, 
  HeartHandshakeIcon, 
  ShieldCheckIcon, 
  PhoneIcon, 
  CheckCircleIcon 
} from './Icons';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { useLanguage } from '../context/LanguageContext';

export default function LegalKnowledgePage({ onBack }) {
  const { lang, t } = useLanguage();
  const knowledge = t.legalKnowledge;

  const [activeCategory, setActiveCategory] = useState(knowledge.categories[0] || 'Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Lọc bài viết theo danh mục và từ khóa tìm kiếm
  const filteredArticles = knowledge.articles.filter((article) => {
    const matchesCat = activeCategory === knowledge.categories[0] || article.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesQuery = !query || 
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      <Navbar />

      <main className="flex-grow pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb quay lại */}
          <div className="mb-6">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0F2144] py-1.5 px-3 rounded-lg hover:bg-slate-200/60 transition-colors uppercase tracking-wider"
            >
              {knowledge.backBtn}
            </button>
          </div>

          {/* Header Trang Kiến Thức Pháp Luật */}
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-2.5">
              {knowledge.eyebrow}
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2144] tracking-tight leading-[1.3] mb-4">
              {knowledge.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {knowledge.desc}
            </p>
          </div>

          {/* Thanh Tìm Kiếm & Bộ Lọc Danh Mục */}
          <div className="mb-10 space-y-4">
            {/* Input tìm kiếm */}
            <div className="relative max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={knowledge.searchPlaceholder}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 pl-11 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F2144] focus:border-transparent transition-all shadow-sm"
              />
              <svg 
                className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {knowledge.categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all ${
                      isActive
                        ? 'bg-[#0F2144] text-white shadow-sm'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Danh Sách Bài Viết Cẩm Nang */}
          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-slate-200/80 mb-14">
              <p className="text-slate-500 text-sm">
                Không tìm thấy bài viết phù hợp với từ khóa "{searchQuery}".
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredArticles.map((article) => {
                const isExpanded = expandedArticleId === article.id;
                return (
                  <article
                    key={article.id}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,33,68,0.04)] hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Badge và thời gian đọc */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#F1F3F7] text-[#0F2144]">
                          {article.badge}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400">
                          {article.readTime}
                        </span>
                      </div>

                      {/* Tiêu đề bài viết */}
                      <h2 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight leading-snug mb-3">
                        {article.title}
                      </h2>

                      {/* Tóm tắt */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                        {article.summary}
                      </p>

                      {/* Điểm nhấn chuyên môn */}
                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        {article.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                            <span className="text-xs text-slate-700 leading-normal font-normal">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-500">
                        Căn cứ: {article.date}
                      </span>
                      <button
                        onClick={() => {
                          window.location.hash = '#/lien-he';
                        }}
                        className="text-xs font-bold text-[#0F2144] hover:text-amber-600 inline-flex items-center gap-1 transition-colors"
                      >
                        Tư vấn tình huống này →
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Giải đáp câu hỏi pháp lý thường gặp (FAQ) */}
          <section className="mb-16">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F2144] tracking-tight">
                {knowledge.faqTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {knowledge.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_2px_12px_rgba(15,33,68,0.04)] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-slate-400 block mb-2">
                      0{index + 1} • TÌNH HUỐNG THỰC TẾ
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0F2144] leading-snug mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to action cuối trang */}
          <section className="bg-[#0F2144] rounded-2xl p-8 sm:p-10 text-white text-center shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 tracking-tight">
              {knowledge.ctaTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-7 leading-relaxed font-normal">
              {knowledge.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={() => {
                  window.location.hash = '#/lien-he';
                }}
                className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm"
              >
                {knowledge.ctaBtn1}
              </button>
              <a
                href="tel:0988886447"
                className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors border border-white/20 inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>{knowledge.ctaBtn2}</span>
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
