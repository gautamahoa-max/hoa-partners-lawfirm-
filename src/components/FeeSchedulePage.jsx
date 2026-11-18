import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { PhoneIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import { FEE_CATEGORIES, FEE_SCHEDULE_ITEMS } from '../i18n/feeSchedule';

export default function FeeSchedulePage({ onBack }) {
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
            `- Mức phí niêm yết: ${item.fee.vi} VNĐ`,
            item.note.vi ? `- Ghi chú áp dụng: ${item.note.vi}` : null,
            '- Mô tả thêm tình tiết hồ sơ của Quý khách: ',
          ]
            .filter(Boolean)
            .join('\n')
        : [
            '[Fee Schedule Consultation Request]',
            `- Item #${item.stt}: ${item.service.en}`,
            `- Listed Fee: ${item.fee.en} VND`,
            item.note.en ? `- Applicable Note: ${item.note.en}` : null,
            '- Brief summary of your matter: ',
          ]
            .filter(Boolean)
            .join('\n');

    try {
      sessionStorage.setItem('hp_prefill_notes', prefill.slice(0, 2000));
    } catch {
      // Ignore storage failures in restricted contexts
    }
    window.location.hash = '#/lien-he';
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-grow">
        {/* Editorial Header Band — asymmetric layout synced with ServiceDetailPage & LegalKnowledgePage */}
        <section className="bg-[#FAF9F6] border-b border-slate-200 py-12 sm:py-16 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBack) onBack();
                  else window.location.hash = '';
                }}
                className="hover:text-[#0F2144] transition-colors"
              >
                {locale === 'vi' ? 'Trang chủ' : 'Home'}
              </a>
              <span>/</span>
              <span className="text-[#0F2144] font-semibold">
                {locale === 'vi' ? 'Bảng giá dịch vụ' : 'Fee Schedule'}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 mb-3 ykvn-accent-block">
                  {locale === 'vi' ? 'BIỂU PHÍ DỊCH VỤ PHÁP LÝ' : 'ATTORNEY FEE SCHEDULE'}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F2144] tracking-tight leading-[1.2]">
                  {locale === 'vi' ? 'Bảng giá dịch vụ luật sư' : 'Legal Service Fee Schedule'}
                </h1>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-[65ch]">
                  {locale === 'vi'
                    ? 'Biểu phí tham chiếu chi tiết cho 20 nhóm dịch vụ tư vấn, soạn thảo, đại diện ngoài tố tụng và tranh tụng tại Công ty Luật TNHH Hoà và Cộng sự. Mức phí cụ thể được thống nhất minh bạch bằng Hợp đồng dịch vụ pháp lý theo quy định của Luật Luật sư.'
                    : 'Detailed reference fee schedule across 20 advisory, drafting, non-litigation, and courtroom representation services at Hoa & Associates Law Firm LLC, formalized in writing under the Vietnam Law on Lawyers.'}
                </p>
              </div>

              <div className="lg:col-span-4 bg-white border border-slate-200 p-5 space-y-2.5 text-xs">
                <div className="flex justify-between gap-3 pb-2.5 border-b border-slate-200/80">
                  <span className="text-slate-500 font-semibold uppercase tracking-wider">
                    {locale === 'vi' ? 'Đơn vị tính' : 'Currency'}
                  </span>
                  <span className="font-mono font-bold text-[#0F2144]">VNĐ</span>
                </div>
                <div className="flex justify-between gap-3 pb-2.5 border-b border-slate-200/80">
                  <span className="text-slate-500 font-semibold uppercase tracking-wider">
                    {locale === 'vi' ? 'Địa bàn chính' : 'Jurisdictions'}
                  </span>
                  <span className="font-semibold text-[#0F2144] text-right">
                    {locale === 'vi' ? 'TP.HCM & Đắk Lắk' : 'HCMC & Dak Lak'}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-slate-500 font-semibold uppercase tracking-wider">
                    {locale === 'vi' ? 'Số hạng mục' : 'Schedule Items'}
                  </span>
                  <span className="font-mono font-bold text-[#0F2144] tabular-nums">
                    {FEE_SCHEDULE_ITEMS.length} {locale === 'vi' ? 'dịch vụ' : 'services'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="bg-white border-b border-slate-200 py-5 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {FEE_CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`min-h-[44px] px-4 py-2 text-xs font-semibold border transition-all active:translate-y-[1px] cursor-pointer ${
                      active
                        ? 'bg-[#0F2144] text-white border-[#0F2144]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-[#0F2144] hover:text-[#0F2144]'
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
                className="w-full min-h-[44px] px-3.5 pr-16 text-xs sm:text-sm bg-[#FAF9F6] border border-slate-200 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-[#0F2144] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-[11px] font-semibold text-slate-500 hover:text-[#0F2144] cursor-pointer"
                >
                  {locale === 'vi' ? 'Xóa' : 'Clear'}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Excel-faithful Schedule Table (Desktop) & Single-Column Breakdown (Mobile) */}
        <section className="py-10 sm:py-14 bg-white text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4 text-xs text-slate-500">
              <span>
                {locale === 'vi'
                  ? `Hiển thị ${filteredItems.length} / ${FEE_SCHEDULE_ITEMS.length} hạng mục dịch vụ`
                  : `Showing ${filteredItems.length} of ${FEE_SCHEDULE_ITEMS.length} service items`}
              </span>
              <span className="hidden sm:inline font-mono">
                {locale === 'vi' ? 'Đơn vị: VNĐ' : 'Currency: VND'}
              </span>
            </div>

            {filteredItems.length === 0 ? (
              <div className="border-t-2 border-[#0F2144] border-b border-slate-200 py-14 text-center space-y-4">
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
                  className="min-h-[44px] px-5 py-2 border border-[#0F2144] text-xs font-bold uppercase tracking-wider text-[#0F2144] hover:bg-[#0F2144] hover:text-white transition-colors cursor-pointer"
                >
                  {locale === 'vi' ? 'Hiển thị toàn bộ 20 dịch vụ' : 'Show All 20 Services'}
                </button>
              </div>
            ) : (
              <>
                {/* Desktop High-Density Table (Hairline Dividers) */}
                <div className="hidden md:block border-t-2 border-[#0F2144] border-b border-slate-200">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#FAF9F6] border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        <th className="py-4 px-4 w-[7%]">STT</th>
                        <th className="py-4 px-4 w-[37%]">
                          {locale === 'vi' ? 'Dịch vụ' : 'Legal Service'}
                        </th>
                        <th className="py-4 px-4 w-[20%]">
                          {locale === 'vi' ? 'Mức phí (VNĐ)' : 'Fee Range (VND)'}
                        </th>
                        <th className="py-4 px-4 w-[24%]">
                          {locale === 'vi' ? 'Ghi chú' : 'Notes & Scope'}
                        </th>
                        <th className="py-4 px-4 w-[12%] text-right">
                          {locale === 'vi' ? 'Liên hệ' : 'Action'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm">
                      {filteredItems.map((item) => (
                        <tr
                          key={item.stt}
                          className="hover:bg-[#FAF9F6]/80 transition-colors"
                        >
                          <td className="py-5 px-4 align-top font-mono tabular-nums text-xs font-bold text-slate-500">
                            {String(item.stt).padStart(2, '0')}
                          </td>
                          <td className="py-5 px-4 align-top font-semibold text-[#0F2144] leading-relaxed">
                            {item.service[locale]}
                          </td>
                          <td className="py-5 px-4 align-top font-mono tabular-nums font-bold text-[#0F2144] whitespace-nowrap">
                            {item.fee[locale]}
                          </td>
                          <td className="py-5 px-4 align-top text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                            {item.note[locale] || '—'}
                          </td>
                          <td className="py-4 px-4 align-top text-right">
                            <button
                              type="button"
                              onClick={() => handleRequestQuote(item)}
                              className="min-h-[40px] px-3.5 py-2 text-xs font-semibold border border-slate-300 text-[#0F2144] bg-white hover:bg-[#0F2144] hover:text-white hover:border-[#0F2144] active:translate-y-[1px] transition-all whitespace-nowrap cursor-pointer"
                            >
                              {locale === 'vi' ? 'Đăng ký' : 'Inquire'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Single-Column Hairline List (Zero Horizontal Scroll) */}
                <div className="md:hidden border-t-2 border-[#0F2144] border-b border-slate-200 divide-y divide-slate-200">
                  {filteredItems.map((item) => (
                    <div key={item.stt} className="py-5 space-y-2.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono tabular-nums text-xs font-bold text-slate-500">
                          #{String(item.stt).padStart(2, '0')}
                        </span>
                        <span className="font-mono tabular-nums text-sm font-bold text-[#0F2144]">
                          {item.fee[locale]} VNĐ
                        </span>
                      </div>
                      <h2 className="text-sm font-bold text-[#0F2144] leading-snug">
                        {item.service[locale]}
                      </h2>
                      {item.note[locale] && (
                        <p className="text-xs text-slate-600 leading-relaxed">{item.note[locale]}</p>
                      )}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => handleRequestQuote(item)}
                          className="w-full min-h-[44px] px-4 py-2.5 text-xs font-semibold border border-[#0F2144] text-[#0F2144] bg-white hover:bg-[#0F2144] hover:text-white active:translate-y-[1px] transition-all cursor-pointer"
                        >
                          {locale === 'vi' ? 'Đăng ký tư vấn hạng mục này' : 'Request Quote for This Item'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Bottom Direct Consultation Strip (Consistent with ServiceDetailPage) */}
        <section className="py-12 sm:py-16 bg-[#FAF9F6] border-t border-slate-200 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5">
                {locale === 'vi' ? 'CAM KẾT MINH BẠCH THÙ LAO' : 'TRANSPARENT FEE COMMITMENT'}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F2144] tracking-tight">
                {locale === 'vi'
                  ? 'Cần báo giá chi tiết cho hồ sơ cụ thể của Quý khách?'
                  : 'Need a tailored written quote for your specific matter?'}
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {locale === 'vi'
                  ? 'Toàn bộ chi phí công chứng, lệ phí nhà nước, án phí và chi phí đi lại ngoài khu vực được tách bạch rõ ràng và thỏa thuận trước bằng Hợp đồng dịch vụ pháp lý.'
                  : 'All notary fees, government statutory charges, court deposits, and out-of-area travel expenses are transparently separated and confirmed upfront in writing.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="tel:0988886447"
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 border border-slate-300 bg-white hover:border-[#0F2144] text-[#0F2144] text-xs sm:text-sm font-bold transition-colors"
              >
                <PhoneIcon className="w-4 h-4 text-amber-600" />
                <span>098.888.6447</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  window.location.hash = '#/lien-he';
                }}
                className="min-h-[44px] px-6 py-3 bg-[#0F2144] hover:bg-[#162A56] text-white text-xs sm:text-sm font-bold active:translate-y-[1px] transition-all cursor-pointer"
              >
                {locale === 'vi' ? 'Gửi yêu cầu báo giá' : 'Request Consultation'}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
