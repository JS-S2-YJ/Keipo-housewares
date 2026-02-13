'use client';

import { Mail, Globe2 } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';

interface ContactSectionProps {
  t: (key: string) => string;
}

export const ContactSection = ({ t }: ContactSectionProps) => {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#1d1d1f', color: 'white', textAlign: 'center' }}>
      <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: 'clamp(36px, 10vw, 80px)', fontWeight: 'bold', letterSpacing: '-0.04em', marginBottom: '24px', lineHeight: '1' }}>{t('letsConnect')}</h2>
          <button 
            className="apple-button-primary" 
            style={{ backgroundColor: 'white', color: 'black', padding: '16px 32px', fontSize: '17px' }}
            onClick={() => window.location.href = 'mailto:contact@keipo.com'}
          >
            {t('contact')}
          </button>
          <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', color: '#86868b', fontSize: '11px', fontWeight: '700' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mail size={14} /> CONTACT@KEIPO.COM</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Globe2 size={14} /> {t('location').toUpperCase()}</div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
