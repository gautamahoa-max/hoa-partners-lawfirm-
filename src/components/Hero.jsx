import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="w-full bg-[#051329] overflow-hidden border-b border-slate-200/80">
      <h1 className="sr-only">
        {lang === 'en'
          ? 'Hoa & Associates Law Firm LLC — Civil Litigation & Legal Advisory'
          : 'Công ty Luật TNHH Hoà và Cộng sự — Hãng Luật Tranh Tụng & Tư Vấn Pháp Luật Dân Sự'}
      </h1>
      <div className="w-full">
        <picture>
          <source
            type="image/webp"
            srcSet="./hero-ykvn-shot-960.webp 960w, ./hero-ykvn-shot-1600.webp 1600w"
            sizes="100vw"
          />
          <img
            src="./hero-ykvn-shot.jpg"
            alt="Công ty Luật TNHH Hòa & Cộng sự - Điểm tựa pháp lý vững chắc tại Buôn Ma Thuột, Đắk Lắk"
            width="2048"
            height="1012"
            fetchPriority="high"
            decoding="async"
            className="w-full h-auto object-cover aspect-[2048/1012] block select-none"
          />
        </picture>
      </div>
    </section>
  );
}
