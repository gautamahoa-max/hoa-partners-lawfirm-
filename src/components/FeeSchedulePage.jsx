import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import FaqSection from './FaqSection';
import { useLanguage } from '../context/LanguageContext';
import { FEE_CATEGORIES, FEE_SCHEDULE_ITEMS } from '../i18n/feeSchedule';

const CATEGORY_BADGES = {
  advisory: { vi: 'Tư vấn & Soạn thảo', en: 'Advisory & Drafting' },
  representation: { vi: 'Đại diện Ngoài tố tụng', en: 'Pre-Litigation' },
  litigation: { vi: 'Tranh tụng tại Tòa án', en: 'Court Litigation' },
};

function formatDisplayFee(feeText, locale) {
  const lower = String(feeText || '').toLowerCase();
  if (!feeText || lower.includes('thỏa thuận') || lower.includes('agreement')) {
    return feeText;
  }
  return locale === 'vi' ? `${feeText} VNĐ` : `${feeText} VND`;
}

export default function FeeSchedulePage() {
  const { lang } = useLanguage();
  const locale = lang === 'en' ? 'en' : 'vi';

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FEE_SCHEDULE_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (!q) return true;
      const inService = item.service[locale].toLowerCase().includes(q);
      const inFee = item.fee[locale].toLowerCase().includes(q);
      const inNote = item.note[locale].toLowerCase().includes(q);
      const inStt = String(item.stt).includes(q);
      return inService || inFee || inNote || inStt;
    });
  }, [activeCategory, searchQuery, locale]);

  const handleRequestQuote = (item) => {
    const prefill =
      locale === 'vi'
        ? [
            '[Yêu cầu tư vấn theo Biểu phí dịch vụ]',
            `- Hạng mục #${item.stt}: ${item.service.vi}`,
            `- Mức phí niêm yết: ${formatDisplayFee(item.fee.vi, 'vi')}`,
            item.note.vi ? `- Ghi chú áp dụng: ${item.note.vi}` : null,
            '- Mô tả thêm tình tiết hồ sơ của Quý khách: ',
          ]
            .filter(Boolean)
            .join('\n')
        : [
            '[Fee Schedule Consultation Request]',
            `- Item #${item.stt}: ${item.service.en}`,
            `- Listed Fee: ${formatDisplayFee(item.fee.en, 'en')}`,
            item.note.en ? `- Applicable Note: ${item.note.en}` : null,
            '- Brief summary of your matter: ',
          ]
            .filter(Boolean)
            .join('\n');

    try {
      sessionStorage.setItem('hp_prefill_notes', prefill.slice(0, 2000));
      sessionStorage.setItem('hp_prefill_source', `bang_gia:#${String(item.stt).padStart(2, '0')}`);
    } catch {
      // Ignore storage failures in restricted contexts
    }
    window.location.hash = '#/lien-he';
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Editorial Header Band */}
        <section className="bg-[#FAF9F6] border-b border-slate-200/80 py-12 sm:py-16 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 ykvn-accent-block">
                {locale === 'vi' ? 'BIỂU PHÍ DỊCH VỤ PHÁP LÝ' : 'ATTORNEY FEE SCHEDULE'}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F2144] tracking-tight leading-[1.2]">
                {locale === 'vi' ? 'Bảng giá dịch vụ luật sư' : 'Legal Service Fee Schedule'}
              </h1>
            </div>
          </div>
        </section>

        {/* Pill Filter & Search Bar */}
        <section className="bg-white border-b border-slate-200/80 py-5 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {FEE_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-semibold border transition-all active:scale-[0.98] cursor-pointer ${
                      active
                        ? 'bg-[#0F2144] text-white border-[#0F2144] shadow-sm'
                        : 'bg-[#F5F5F7] text-slate-700 border-transparent hover:bg-slate-200/80 hover:text-[#0F2144]'
                    }`}
                  >
                    {cat.label[locale]}
                  </button>
                );
              })}
            </div>

            <div className="w-full lg:w-72 relative">
              <label htmlFor="fee-search" className="sr-only">
                {locale === 'vi' ? 'Tìm kiếm dịch vụ' : 'Search services'}
              </label>
              <input
                id="fee-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  locale === 'vi' ? 'Tìm dịch vụ, mức phí...' : 'Search service or fee...'
                }
                className="w-full min-h-[44px] px-4 pr-16 rounded-full text-xs sm:text-sm bg-[#F5F5F7] border border-transparent text-slate-900 placeholder:text-slate-500 focus:outline-none focus:bg-white focus:border-slate-300 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-[11px] font-semibold text-slate-500 hover:text-[#0F2144] cursor-pointer"
                >
                  {locale === 'vi' ? 'Xóa' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Apple-inspired Spaced Service Blocks Grid */}
        <section className="py-10 sm:py-14 bg-[#F5F5F7] text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
              <span>
                {locale === 'vi'
                  ? `Hiển thị ${filteredItems.length} / ${FEE_SCHEDULE_ITEMS.length} hạng mục dịch vụ`
                  : `Showing ${filteredItems.length} of ${FEE_SCHEDULE_ITEMS.length} service items`}
              </span>
              <span className="font-mono">
                {locale === 'vi' ? 'Đơn vị: VNĐ' : 'Currency: VND'}
              </span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="rounded-[22px] bg-white border border-slate-200/80 py-14 px-6 text-center space-y-4 shadow-[0_2px_16px_rgba(15,33,68,0.04)]">
                <p className="text-sm text-slate-600">
                  {locale === 'vi'
                    ? 'Không tìm thấy dịch vụ phù hợp với từ khóa bạn vừa nhập.'
                    : 'No services match your current search filter.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="min-h-[44px] px-6 py-2.5 rounded-full bg-[#0F2144] text-white text-xs font-semibold hover:bg-[#162A56] active:scale-[0.98] transition-all cursor-pointer"
                >
                  {locale === 'vi' ? 'Hiển thị toàn bộ 20 dịch vụ' : 'Show All 20 Services'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {filteredItems.map((item) => {
                  const categoryLabel = CATEGORY_BADGES[item.category]?.[locale] || '';
                  return (
                    <article
                      key={item.stt}
                      className="rounded-[22px] bg-white p-6 sm:p-8 border border-slate-200/70 shadow-[0_2px_16px_rgba(15,33,68,0.04)] hover:shadow-[0_14px_36px_rgba(15,33,68,0.09)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                            {categoryLabel}
                          </span>
                          <span className="font-mono tabular-nums text-xs font-semibold text-slate-400">
                            {String(item.stt).padStart(2, '0')}
                          </span>
                        </div>

                        <h2 className="mt-3 text-base sm:text-lg font-bold text-[#0F2144] leading-snug tracking-tight">
                          {item.service[locale]}
                        </h2>

                        {item.note[locale] && (
                          <p className="mt-3 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                            {item.note[locale]}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            {locale === 'vi' ? 'Mức phí tham khảo' : 'Reference Fee'}
                          </span>
                          <span className="mt-0.5 block font-mono tabular-nums text-lg sm:text-xl font-bold text-[#0F2144]">
                            {formatDisplayFee(item.fee[locale], locale)}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRequestQuote(item)}
                          className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#0F2144] hover:bg-[#183161] text-white text-xs font-semibold tracking-wide active:scale-[0.98] transition-all shrink-0 cursor-pointer"
                        >
                          {locale === 'vi' ? 'Đăng ký' : 'Inquire'}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <FaqSection compact />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
