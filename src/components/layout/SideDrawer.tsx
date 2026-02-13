'use client';

import { X, Globe2 } from 'lucide-react';
import { Language } from '@/translations';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const SideDrawer = ({ isOpen, onClose, lang, setLang, t }: SideDrawerProps) => {
  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'de', label: 'Deutsch' },
    { code: 'cn', label: '中文' },
    { code: 'jp', label: '日本語' },
    { code: 'in', label: 'हिन्दी' },
  ];

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`side-drawer ${isOpen ? 'active' : ''}`}>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 border-none bg-transparent cursor-pointer text-[#86868b] hover:text-[#1d1d1f] transition-colors"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col gap-4 sm:gap-6">
          <span className="text-[11px] font-extrabold text-[#0066cc] tracking-[0.15em]">NAVIGATE</span>
          <div className="flex flex-col gap-3 sm:gap-4 text-xl sm:text-2xl font-bold">
            <a href="#history" onClick={onClose} className="no-underline text-[#1d1d1f] hover:text-[#0066cc] transition-colors">{t('navHistory')}</a>
            <a href="#logistics" onClick={onClose} className="no-underline text-[#1d1d1f] hover:text-[#0066cc] transition-colors">Logistics</a>
            <a href="#categories" onClick={onClose} className="no-underline text-[#1d1d1f] hover:text-[#0066cc] transition-colors">{t('navProducts')}</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 mt-2 sm:mt-8">
          <span className="text-[11px] font-extrabold text-[#0066cc] tracking-[0.15em]">REGIONAL SETTINGS</span>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); onClose(); }}
                className={`
                  border p-2.5 rounded-xl text-[13px] font-semibold cursor-pointer text-left transition-all
                  ${lang === l.code 
                    ? 'border-[#0066cc] bg-[#f5faff] text-[#0066cc] ring-1 ring-[#0066cc]' 
                    : 'border-[#f2f2f2] bg-white text-[#1d1d1f] hover:border-gray-300'}
                `}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
