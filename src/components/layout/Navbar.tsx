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
            <a href="#logistics" style={{ textDecoration: 'none', color: 'inherit' }}>Logistics</a>
            <a href="#categories" style={{ textDecoration: 'none', color: 'inherit' }}>{t('navProducts')}</a>
          </div>

          <button 
            onClick={onMenuClick}
            style={{
              backgroundColor: '#f5faff',
              color: '#0066cc',
              border: '1px solid #0066cc15',
              padding: '5px 8px',
              borderRadius: '8px',
              fontSize: '10px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <Globe2 size={11} /> {lang.toUpperCase()}
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
