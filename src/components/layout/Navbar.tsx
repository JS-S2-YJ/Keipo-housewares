'use client';

import { Globe2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  const { lang, t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav-glass" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.72)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    }}>
      <div className="max-container" style={{ 
        justifyContent: 'space-between', 
        width: '100%',
        padding: '0 clamp(16px, 5vw, 40px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 1, minWidth: 0 }}>
          <span className="logo-3d" style={{ fontSize: 'clamp(15px, 4vw, 22px)', whiteSpace: 'nowrap' }}>KEIPO</span>
        </div>
        
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
          <div className="nav-menu-desktop" style={{ gap: '4px', fontSize: '13px', fontWeight: '600', color: '#86868b', marginRight: '12px' }}>
            {[
              { key: 'navHistory', id: 'history' },
              { key: 'navLogistics', id: 'logistics' },
              { key: 'navProducts', id: 'categories' },
            ].map(({ key, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-block',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#1a1a1c';
                  e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#86868b';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {t(key as Parameters<typeof t>[0])}
              </a>
            ))}
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
