'use client';

import { X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/translations';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideDrawer = ({ isOpen, onClose }: SideDrawerProps) => {
  const { lang, setLang, t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      onClose();
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }, 50);
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'de', label: 'Deutsch' },
    { code: 'cn', label: '中文' },
    { code: 'jp', label: '日本語' },
    { code: 'in', label: 'हिन्दी' },
  ];

  const navLinks = [
    { key: 'navHistory' as const, id: 'history' },
    { key: 'navLogistics' as const, id: 'logistics' },
    { key: 'navProducts' as const, id: 'categories' },
  ];

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`side-drawer ${isOpen ? 'active' : ''}`}>

        {/* Close button — glass pill */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            border: '1px solid rgba(0,0,0,0.06)',
            background: 'rgba(0,0,0,0.03)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            cursor: 'pointer',
            color: '#86868b',
            padding: '6px',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        {/* Navigation links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontSize: '10px', fontWeight: '700', color: '#0066cc', letterSpacing: '0.18em', opacity: 0.8 }}>
            NAVIGATE
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '20px', fontWeight: '700' }}>
            {navLinks.map(({ key, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.stopPropagation(); scrollToSection(e, id); }}
                className="side-drawer-link"
                style={{
                  textDecoration: 'none',
                  color: '#1d1d1f',
                  cursor: 'pointer',
                  display: 'block',
                }}
              >
                {t(key)}
              </a>
            ))}
          </div>
        </div>

        {/* Language selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
          <span style={{ fontSize: '10px', fontWeight: '700', color: '#0066cc', letterSpacing: '0.18em', opacity: 0.8 }}>
            LANGUAGE
          </span>
          <div className={isOpen ? 'stagger-in' : ''} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); onClose(); }}
                style={{
                  border: lang === l.code
                    ? '1.5px solid rgba(0,102,204,0.4)'
                    : '1px solid rgba(0,0,0,0.06)',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backgroundColor: lang === l.code
                    ? 'rgba(0,102,204,0.08)'
                    : 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: lang === l.code ? '#0066cc' : '#1d1d1f',
                  textAlign: 'left',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: lang === l.code
                    ? 'inset 0 0 0 1px rgba(0,102,204,0.1)'
                    : 'inset 0 0 0 1px rgba(255,255,255,0.6)',
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
