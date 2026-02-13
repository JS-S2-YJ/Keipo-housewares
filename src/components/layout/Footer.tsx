'use client';

import { useLanguage } from '@/hooks/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '32px 16px', borderTop: '1px solid #f2f2f2' }}>
      <div className="max-container" style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
        <div>© {currentYear} {t('brandLabel')}. {t('allRights')}</div>
      </div>
    </footer>
  );
};
