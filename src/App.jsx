import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LawyerBio from './components/LawyerBio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import ServiceDetailPage from './components/ServiceDetailPage';

function MainContent() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

        {/* 4. Gặp Gỡ Luật Sư Điều Hành Võ Văn Hoà */}
        <LawyerBio />

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
