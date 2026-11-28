import React, { useState, useEffect } from 'react';
import { PhoneIcon, ZaloIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isShortPage = document.documentElement.scrollHeight <= window.innerHeight * 1.3;
      setIsVisible(isShortPage || window.scrollY > 240);
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
      {/* Nút Gọi Hotline */}
      <a
        href="tel:0988886447"
        className="group flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-600/30 transition-all transform hover:scale-110 active:scale-95"
        title={lang === 'en' ? 'Call Hotline: +84 98.888.6447' : 'Gọi Hotline: 098.888.6447'}
        aria-label={lang === 'en' ? 'Call Hotline +84 98.888.6447' : 'Gọi Hotline 098.888.6447'}
      >
        <PhoneIcon className="w-5 h-5 text-white" />
      </a>

      {/* Nút Chat Zalo */}
      <a
        href="https://zalo.me/0988886447"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-[#0068FF] hover:bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30 transition-all transform hover:scale-110 active:scale-95"
        title={lang === 'en' ? 'Chat via Zalo with Attorney (+84 98.888.6447)' : 'Chat Zalo với luật sư (098.888.6447)'}
        aria-label={lang === 'en' ? 'Chat via Zalo with Attorney' : 'Chat Zalo với luật sư'}
      >
        <ZaloIcon className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
