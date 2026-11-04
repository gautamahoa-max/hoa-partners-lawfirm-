import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../i18n/translations';

const LanguageContext = createContext({
  lang: 'vi',
  setLang: () => {},
  t: TRANSLATIONS.vi,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('site_lang');
      return saved === 'en' ? 'en' : 'vi';
    } catch {
      return 'vi';
    }
  });

  const setLang = (newLang) => {
    const validLang = newLang === 'en' ? 'en' : 'vi';
    setLangState(validLang);
    try {
      localStorage.setItem('site_lang', validLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.vi;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
