import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Accolades from './components/Accolades';
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

  // Khi thân chủ chọn dịch vụ để liên hệ tư vấn
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

  // Khi hoàn thành bài khảo sát sức khỏe pháp lý
  const handleFinishAssessment = (riskTitle, score) => {
    window.dispatchEvent(
      new CustomEvent('app-prefill-lead', {
        detail: {
          serviceType: 'Tư vấn Khắc phục Rủi ro Pháp lý Doanh nghiệp',
          disputeValue: '',
          note: `Khách hàng vừa hoàn thành bài test Sức Khỏe Pháp Lý.\nKết quả: ${riskTitle} (Điểm rủi ro: ${score}/12).\nCần Luật sư hỗ trợ rà soát các hợp đồng và văn bản nội bộ.`,
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
      {/* 1. Header & Navigation Bar */}
      <Navbar onOpenRiskModal={() => setIsRiskModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 2. Hero Proclamation */}
        <Hero onOpenRiskModal={() => setIsRiskModalOpen(true)} />

        {/* 3. Accolades & International Recognition (Chambers, Legal 500, IFLR1000) */}
        <Accolades />

        {/* 4. Dual Tab: Lĩnh Vực Tư Vấn & Ngành Nghề Chuyên Biệt */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 5. Bộ tính án phí Tòa án theo Nghị quyết 326/2016 */}
        <LegalCalculator />

        {/* 6. Gặp gỡ Đội ngũ Luật sư (Managing Partner Võ Văn Hoà) */}
        <LawyerBio onOpenConsultModal={() => setIsRiskModalOpen(true)} />

        {/* 7. Trình tự tố tụng & Quy trình tiếp nhận vụ việc */}
        <Process />

        {/* 8. Án lệ & Vụ việc tiêu biểu */}
        <Testimonials />

        {/* 9. Phiếu tiếp nhận hồ sơ & Văn phòng đại diện */}
        <ContactSection />
      </main>

      {/* 10. Chân trang pháp lý (Hà Nội, TP.HCM, Singapore) */}
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

      {/* Floating Action Buttons */}
      <FloatingContact />
    </div>
  );
}
