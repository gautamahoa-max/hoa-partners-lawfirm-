import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

function WorkflowStepCard({ step, index, isLeft }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Fallback nếu trình duyệt không hỗ trợ IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Khi đã xuất hiện thì giữ nguyên trạng thái hiển thị
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative mb-10 sm:mb-14 last:mb-0"
    >
      {/* Nốt mốc điểm xuyến trên trục dòng thời gian (Spine Node) */}
      <div
        className={`absolute z-10 w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-500 ease-out
          top-7 -translate-y-1/2
          left-5 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2
          ${isVisible ? 'bg-[#0F2144] ring-4 ring-blue-100/90 scale-100 opacity-100' : 'bg-slate-300 scale-75 opacity-40'}
        `}
      />

      {/* Bố cục hàng: Trái / Phải xen kẽ trên Desktop, xếp dọc thẳng hàng trên Mobile */}
      <div className="flex flex-col md:flex-row items-stretch">
        
        {/* Cột Bên Trái: Hiển thị Thẻ nếu isLeft=true, để trống spacer nếu isLeft=false */}
        <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-10 lg:pr-12' : 'hidden md:block'}`}>
          {isLeft && (
            <div
              className={`relative pl-12 md:pl-0 transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0 scale-100' : 'opacity-0 translate-y-8 md:-translate-x-8 scale-[0.98]'}
              `}
            >
              <div className="relative bg-[#EFEFF3] rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,33,68,0.04)] border border-slate-200/50 hover:shadow-md transition-shadow">
                {/* Mũi tên chỉ hướng sang phải (về trục chính giữa) trên Desktop */}
                <div
                  className="hidden md:block absolute top-7 -right-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-l-[#EFEFF3]"
                  aria-hidden="true"
                />
                {/* Mũi tên chỉ hướng sang trái (về trục bên trái) trên Mobile */}
                <div
                  className="md:hidden absolute top-7 -left-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-[#EFEFF3]"
                  aria-hidden="true"
                />

                <h3 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cột Bên Phải: Hiển thị Thẻ nếu isLeft=false, để trống spacer nếu isLeft=true */}
        <div className={`w-full md:w-1/2 ${!isLeft ? 'md:pl-10 lg:pl-12' : 'hidden md:block'}`}>
          {!isLeft && (
            <div
              className={`relative pl-12 md:pl-0 transition-all duration-700 ease-out transform
                ${isVisible ? 'opacity-100 translate-y-0 md:translate-x-0 scale-100' : 'opacity-0 translate-y-8 md:translate-x-8 scale-[0.98]'}
              `}
            >
              <div className="relative bg-[#EFEFF3] rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,33,68,0.04)] border border-slate-200/50 hover:shadow-md transition-shadow">
                {/* Mũi tên chỉ hướng sang trái (về trục chính giữa) trên Desktop */}
                <div
                  className="hidden md:block absolute top-7 -left-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-[#EFEFF3]"
                  aria-hidden="true"
                />
                {/* Mũi tên chỉ hướng sang trái (về trục bên trái) trên Mobile */}
                <div
                  className="md:hidden absolute top-7 -left-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-r-[12px] border-r-[#EFEFF3]"
                  aria-hidden="true"
                />

                <h3 className="text-base sm:text-lg font-bold text-[#0F2144] tracking-tight leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function CaseWorkflowTimeline() {
  const { t } = useLanguage();
  const workflow = t.workflow || {
    badge: 'Quy Trình',
    title: 'QUY TRÌNH TIẾP NHẬN VÀ GIẢI QUYẾT VỤ VIỆC',
    steps: [],
  };

  return (
    <div className="w-full">
      {/* Tiêu đề & Huy hiệu Quy trình */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2144] tracking-tight uppercase leading-snug mb-5">
          {workflow.title}
        </h2>
        <div className="inline-block bg-[#0F2144] text-white text-xs sm:text-sm font-semibold px-6 py-2 rounded-full shadow-sm">
          {workflow.badge}
        </div>
      </div>

      {/* Trục Dòng Thời Gian và Các Bước */}
      <div className="relative max-w-4xl mx-auto pt-2 pb-6">
        {/* Trục dọc trung tâm trên Desktop */}
        <div
          className="hidden md:block absolute left-1/2 top-4 bottom-8 w-0.5 bg-slate-300/80 -translate-x-1/2"
          aria-hidden="true"
        />

        {/* Trục dọc bên trái trên Mobile */}
        <div
          className="md:hidden absolute left-5 top-4 bottom-8 w-0.5 bg-slate-300/80"
          aria-hidden="true"
        />

        {/* Danh sách 5 bước với hiệu ứng Scroll-Reveal */}
        {workflow.steps.map((step, index) => (
          <WorkflowStepCard
            key={step.num || index}
            step={step}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
