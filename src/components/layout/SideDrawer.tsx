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
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
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

  return (
    <>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`side-drawer ${isOpen ? 'active' : ''}`} style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(80px)',
        WebkitBackdropFilter: 'blur(80px)',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: 'none', cursor: 'pointer', color: '#86868b' }}>
          <X size={28} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#0066cc', letterSpacing: '0.15em' }}>NAVIGATE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '22px', fontWeight: '700' }}>
            <a href="#history" onClick={(e) => scrollToSection(e, 'history')} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navHistory')}</a>
            <a href="#logistics" onClick={(e) => scrollToSection(e, 'logistics')} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navLogistics')}</a>
            <a href="#categories" onClick={(e) => scrollToSection(e, 'categories')} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navProducts')}</a>
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
