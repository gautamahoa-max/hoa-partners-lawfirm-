import React, { useState, useEffect } from 'react';
import { PhoneIcon, ZaloIcon } from './Icons';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const contactEl = document.getElementById('lien-he');

      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // Hiện ra khi kéo gần tới phần chân trang (cách 500px) hoặc đã vào phần chân trang
        setIsVisible(rect.top <= window.innerHeight + 500);
      } else {
        // Dự phòng khi chưa mount DOM id: khi cuộn qua 70% chiều dài trang hoặc cách đáy dưới 1000px
        setIsVisible(totalHeight - scrollPosition < 1000 || (scrollPosition / totalHeight) > 0.7);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 transition-all duration-300 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Nút Gọi Hotline (hình tròn tương tự Zalo, không có text dài) */}
      <a
        href="tel:0988886447"
        className="group flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-600/30 transition-all transform hover:scale-110 active:scale-95"
        title="Gọi Hotline: 098.888.6447"
        aria-label="Gọi Hotline 098.888.6447"
      >
        <PhoneIcon className="w-5 h-5 text-white" />
      </a>

      {/* Nút Chat Zalo */}
      <a
        href="https://zalo.me/0988886447"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-[#0068FF] hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-110 active:scale-95"
        title="Chat Zalo với luật sư (098.888.6447)"
        aria-label="Chat Zalo với luật sư"
      >
        <ZaloIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
