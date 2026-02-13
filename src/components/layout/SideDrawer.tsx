'use client';

import { X, Globe2 } from 'lucide-react';
import { Language, TranslationKey } from '@/translations';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
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
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: 'none', cursor: 'pointer', color: '#86868b' }}>
          <X size={28} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#0066cc', letterSpacing: '0.15em' }}>NAVIGATE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '22px', fontWeight: '700' }}>
            <a href="#history" onClick={onClose} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navHistory')}</a>
            <a href="#logistics" onClick={onClose} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navLogistics')}</a>
            <a href="#categories" onClick={onClose} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navProducts')}</a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#0066cc', letterSpacing: '0.15em' }}>REGIONAL SETTINGS</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); onClose(); }}
                style={{
                  border: lang === l.code ? '2px solid #0066cc' : '1px solid rgba(0,0,0,0.05)',
                  padding: '10px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backgroundColor: lang === l.code ? 'rgba(0, 102, 204, 0.08)' : 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: lang === l.code ? '#0066cc' : '#1d1d1f',
                  textAlign: 'left',
                  transition: 'all 0.2s ease'
                }}
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
