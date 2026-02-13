'use client';

import { TranslationKey } from '@/translations';

interface FooterProps {
  currentYear: number;
  t: (key: TranslationKey) => string;
}

export const Footer = ({ currentYear, t }: FooterProps) => {
  return (
    <footer style={{ padding: '32px 16px', borderTop: '1px solid #f2f2f2' }}>
      <div className="max-container" style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
        <div>© {currentYear} KEIPO HOUSEWARES. {t('allRights')}</div>
      </div>
    </footer>
  );
};
