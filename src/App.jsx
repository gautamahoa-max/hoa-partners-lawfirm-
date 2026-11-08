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
import ContactPage from './components/ContactPage';
import LegalKnowledgePage from './components/LegalKnowledgePage';

function MainContent() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Kiểm tra nếu route là trang luật sư riêng (#/luat-su, #/gioi-thieu hoặc #/ve-chung-toi)
  const isLawyerRoute = /^#(?:(?:\/)?(?:luat-su|gioi-thieu|ve-chung-toi))(?:\/)?$/.test(currentRoute);
  if (isLawyerRoute) {
    return (
      <LawyerBioPage
        onBack={() => {
          window.location.hash = '';
        }}
      />
    );
  }

  // Kiểm tra nếu route là trang liên hệ riêng (#/lien-he hoặc #/contact)
  const isContactRoute = /^#(?:(?:\/)?(?:lien-he|contact))(?:\/)?$/.test(currentRoute);
  if (isContactRoute) {
    return (
      <ContactPage
        onBack={() => {
          window.location.hash = '';
        }}
      />
    );
  }

  // Kiểm tra nếu route là trang kiến thức pháp luật (#/kien-thuc-phap-luat, #/kien-thuc hoặc #/legal-knowledge)
  const isKnowledgeRoute = /^#(?:(?:\/)?(?:kien-thuc-phap-luat|kien-thuc|legal-knowledge))(?:\/)?$/.test(currentRoute);
  if (isKnowledgeRoute) {
    return (
      <LegalKnowledgePage
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden">
      {/* 1. Header & Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2. Hero Proclamation */}
        <Hero />

        {/* 3. Lĩnh Vực Hành Nghề Cốt Lõi (Biểu đồ Donut tương tác) */}
        <Services />

        {/* 4. Hồ Sơ Tiêu Biểu & Danh sách vụ án từng tham dự */}
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
