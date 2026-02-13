'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/translations';
import { ESTABLISHED_YEAR } from '@/lib/constants';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  yearsActiveCount: number;
  historyText: string;
  sinceText: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');
  const currentYear = new Date().getFullYear();
  const yearsActiveCount = currentYear - ESTABLISHED_YEAR;

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && translations[savedLang]) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = (key: TranslationKey) => {
    return translations[lang][key] || translations['en'][key];
  };

  const getHistoryText = () => {
    if (lang === 'ko' || lang === 'cn' || lang === 'jp') return `${yearsActiveCount}${t('history')}`;
    return `${yearsActiveCount} ${t('history')}`;
  };

  const getSinceText = () => {
    if (lang === 'ko' || lang === 'jp') return `${ESTABLISHED_YEAR}${t('since')}`;
    if (lang === 'cn') return `${t('since')}${ESTABLISHED_YEAR} 年`;
    return `${t('since')} ${ESTABLISHED_YEAR}`;
  };

  return (
    <LanguageContext.Provider value={{ 
      lang, 
      setLang: handleSetLang, 
      t, 
      yearsActiveCount,
      historyText: getHistoryText(),
      sinceText: getSinceText()
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
