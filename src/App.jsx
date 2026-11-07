import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ServiceDetailPage from './components/ServiceDetailPage';
import LawyerBioPage from './components/LawyerBioPage';

function MainContent() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);
  const { t, lang } = useLanguage();
  const bio = t.lawyerBio;

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Kiểm tra nếu route là trang luật sư riêng (#/luat-su hoặc #/ve-chung-toi)
  const isLawyerRoute = /^#(?:(?:\/)?(?:luat-su|ve-chung-toi))(?:\/)?$/.test(currentRoute);
  if (isLawyerRoute) {
    return (
      <LawyerBioPage
        onBack={() => {
          window.location.hash = '';
        }}
      />
    );
  }

  // Kiểm tra nếu route là dạng #/linh-vuc/:id hoặc #/dich-vu/:id
  const serviceMatch = currentRoute.match(/^#(?:(?:\/linh-vuc\/)|\/dich-vu\/)([\w-]+)/);
  const activeServiceId = serviceMatch ? serviceMatch[1] : null;

  // Nếu đang ở trang chi tiết chuyên môn
  if (activeServiceId) {
    return (
      <ServiceDetailPage
        serviceId={activeServiceId}
        onBack={() => {
          window.location.hash = '';
        }}
        onSelectService={(id) => {
          window.location.hash = `#/linh-vuc/${id}`;
        }}
      />
    );
  }

  // Trang chủ mặc định
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* 1. Header & Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2. Hero Proclamation */}
        <Hero />

        {/* 3. Lĩnh Vực Hành Nghề Cốt Lõi (Biểu đồ Donut tương tác) */}
        <Services
          onNavigateToPage={(serviceId) => {
            window.location.hash = `#/linh-vuc/${serviceId}`;
          }}
        />

        {/* 4. Hồ Sơ Luật Sư Điều Hành (Dẫn sang trang riêng) */}
        <section className="py-12 sm:py-16 bg-[#FAF9F6] border-b border-slate-200/80 text-left">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">
                  {bio.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F2144]">
                  {bio.name}
                </h3>
                <p className="text-xs font-semibold text-slate-500">
                  {bio.degree}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 italic border-l-2 border-[#0F2144] pl-3 py-0.5 mt-2">
                  {bio.quote}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="#/luat-su"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-semibold bg-[#0F2144] text-white hover:bg-[#142859] active:translate-y-[1px] transition-all shadow-sm"
                >
                  <span>{lang === 'vi' ? 'Xem hồ sơ chi tiết & Tôn chỉ hành nghề' : 'View Full Profile & Principles'}</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Hồ Sơ Tiêu Biểu & Vụ Việc Thực Tế */}
        <Testimonials />
      </main>

      {/* 6. Chân Trang Pháp Lý Chuẩn Cravath */}
      <Footer />

      {/* Nút Liên Hệ Khẩn Cấp 24/7 */}
      <FloatingContact />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
