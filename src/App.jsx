import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMarquee from './components/TrustMarquee';
import Services from './components/Services';
import LegalCalculator from './components/LegalCalculator';
import LawyerBio from './components/LawyerBio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import LegalRiskCheckerModal from './components/LegalRiskCheckerModal';
import FloatingContact from './components/FloatingContact';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [isRiskModalOpen, setIsRiskModalOpen] = useState(false);

  // Khi người dùng chọn dịch vụ từ Modal để liên hệ tư vấn
  const handleSelectServiceForConsult = (service) => {
    window.dispatchEvent(
      new CustomEvent('app-prefill-lead', {
        detail: {
          serviceType: service.title,
          disputeValue: '',
          note: `Khách hàng quan tâm dịch vụ: ${service.title}.\nCăn cứ pháp lý liên quan: ${service.details?.basis}`,
        },
      })
    );

    const contactEl = document.getElementById('lien-he');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Khi người dùng hoàn thành bài kiểm tra rủi ro pháp lý
  const handleFinishAssessment = (riskTitle, score) => {
    window.dispatchEvent(
      new CustomEvent('app-prefill-lead', {
        detail: {
          serviceType: 'Tư vấn Khắc phục Rủi ro Pháp lý Doanh nghiệp',
          disputeValue: '',
          note: `Khách hàng vừa hoàn thành bài test Sức Khỏe Pháp Lý.\nKết quả: ${riskTitle} (Điểm rủi ro: ${score}/12).\nCần Luật sư hỗ trợ kiểm tra chi tiết các lỗ hổng hợp đồng và quản trị.`,
        },
      })
    );

    const contactEl = document.getElementById('lien-he');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 1. Header & Navigation */}
      <Navbar onOpenRiskModal={() => setIsRiskModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenRiskModal={() => setIsRiskModalOpen(true)} />

        {/* 3. Băng chuyền đối tác & tổ chức luật sư (Marquee) */}
        <TrustMarquee />

        {/* 4. Lĩnh vực hành nghề cốt lõi (Services & Modals) */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Bộ tính án phí & chi phí dịch vụ (Interactive Calculator) */}
        <LegalCalculator />

        {/* 6. Chân dung Luật sư sáng lập Võ Văn Hoà & Tầm nhìn */}
        <LawyerBio onOpenConsultModal={() => setIsRiskModalOpen(true)} />

        {/* 7. Quy trình giải quyết vụ việc 4 bước chuẩn mực */}
        <Process />

        {/* 8. Vụ việc tiêu biểu & Cảm nhận khách hàng */}
        <Testimonials />

        {/* 9. Form liên hệ & phễu chuyển đổi Event-Driven */}
        <ContactSection />
      </main>

      {/* 10. Chân trang pháp lý (Footer) */}
      <Footer onOpenRiskModal={() => setIsRiskModalOpen(true)} />

      {/* Pop-up Modals */}
      <DetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForConsult={handleSelectServiceForConsult}
      />

      <LegalRiskCheckerModal
        isOpen={isRiskModalOpen}
        onClose={() => setIsRiskModalOpen(false)}
        onFinishAssessment={handleFinishAssessment}
      />

      {/* Floating Action Button trên Mobile / Tablet */}
      <FloatingContact />
    </div>
  );
}
