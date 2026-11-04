import React from 'react';
import { PhoneIcon, ZaloIcon, ScaleIcon } from './Icons';

export default function FloatingContact() {
  const scrollToContact = () => {
    const el = document.getElementById('lien-he');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Nút Gọi Hotline khẩn cấp */}
      <a
        href="tel:0988886447"
        className="group flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-3 rounded-full shadow-xl shadow-amber-500/25 transition-all transform hover:scale-105"
        title="Gọi hotline luật sư 24/7"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
        </span>
        <PhoneIcon className="w-5 h-5 text-slate-950" />
        <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
          Hotline: 098.888.6447
        </span>
      </a>

      {/* Nút Chat Zalo */}
      <a
        href="https://zalo.me/0988886447"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105"
        title="Chat Zalo với luật sư"
      >
        <ZaloIcon className="w-6 h-6" />
      </a>

      {/* Nút Đặt lịch hẹn */}
      <button
        onClick={scrollToContact}
        className="group flex items-center justify-center w-12 h-12 bg-slate-900 hover:bg-slate-800 text-amber-400 rounded-full shadow-lg shadow-slate-900/30 transition-all transform hover:scale-105"
        title="Đặt lịch tư vấn"
      >
        <ScaleIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
