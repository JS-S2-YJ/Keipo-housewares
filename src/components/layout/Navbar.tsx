'use client';

import { Globe2 } from 'lucide-react';
import { Language, TranslationKey } from '@/translations';

interface NavbarProps {
  lang: Language;
  onMenuClick: () => void;
  t: (key: TranslationKey) => string;
}

export const Navbar = ({ lang, onMenuClick, t }: NavbarProps) => {
  return (
    <nav className="nav-glass">
      <div className="max-container" style={{ justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 1, minWidth: 0 }}>
          <span className="logo-3d" style={{ fontSize: 'clamp(15px, 4vw, 22px)', letterSpacing: '-0.04em', whiteSpace: 'nowrap', overflow: 'visible' }}>KEIPO</span>
        </div>
        
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
          <div className="nav-menu-desktop" style={{ gap: '20px', fontSize: '13px', fontWeight: '600', color: '#86868b', marginRight: '12px' }}>
            <a href="#history" style={{ textDecoration: 'none', color: 'inherit' }}>{t('navHistory')}</a>
            <a href="#logistics" style={{ textDecoration: 'none', color: 'inherit' }}>{t('navLogistics')}</a>
            <a href="#categories" style={{ textDecoration: 'none', color: 'inherit' }}>{t('navProducts')}</a>
          </div>

          <button 
            onClick={onMenuClick}
            style={{
              backgroundColor: 'rgba(0, 102, 204, 0.04)',
              color: '#0066cc',
              border: '1px solid rgba(0, 102, 204, 0.1)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 102, 204, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(0, 102, 204, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 102, 204, 0.04)';
              e.currentTarget.style.borderColor = 'rgba(0, 102, 204, 0.1)';
            }}
          >
            <Globe2 size={13} strokeWidth={2.5} /> {lang.toUpperCase()}
          </button>

          <div className="menu-button-3d" onClick={onMenuClick}>
            <div className="menu-bar" style={{ width: '14px' }} />
            <div className="menu-bar" style={{ width: '9px' }} />
            <div className="menu-bar" style={{ width: '14px' }} />
          </div>
        </div>
      </div>
    </nav>
  );
};
