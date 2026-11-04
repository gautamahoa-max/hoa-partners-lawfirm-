import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accolades from './components/Accolades';
import Services from './components/Services';
import LawyerBio from './components/LawyerBio';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  // Khi thân chủ chọn dịch vụ trong modal để chuyển sang thông tin liên hệ
  const handleSelectServiceForConsult = () => {
    const contactEl = document.getElementById('lien-he');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* 1. Header & Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2. Hero Proclamation */}
        <Hero />

        {/* 3. Accolades & International Recognition */}
        <Accolades />

        {/* 4. Lĩnh Vực Hành Nghề Cốt Lõi */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Gặp Gỡ Luật Sư Điều Hành Võ Văn Hoà */}
        <LawyerBio />

        {/* 6. Án Lệ & Vụ Việc Tiêu Biểu */}
        <Testimonials />

        {/* 7. Phiếu Tiếp Nhận Hồ Sơ & Thông Tin Liên Hệ */}
        <ContactSection />
      </main>

      {/* 8. Chân Trang Pháp Lý */}
      <Footer />

      {/* Pop-up Modal Chi Tiết Dịch Vụ */}
      <DetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForConsult={handleSelectServiceForConsult}
      />

      {/* Nút Liên Hệ Khẩn Cấp 24/7 */}
      <FloatingContact />
    </div>
  );
}
