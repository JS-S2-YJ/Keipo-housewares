'use client';

import { useLanguage } from '@/hooks/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(0,0,0,0.05)', backgroundColor: '#fafafa' }}>
      <div className="max-container" style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '-0.01em', color: '#1a1a1c' }}>
          KEIPO
        </span>
        <span style={{ fontSize: '10px', color: '#b0b0b5', fontWeight: '600', letterSpacing: '0.05em' }}>
          © {currentYear} {t('brandLabel')} · {t('allRights')}
        </span>
      </div>
    </footer>
  );
};
