'use client';

import { Mail, Globe2 } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { CONTACT_EMAIL } from '@/lib/constants';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="section-padding mesh-dark noise-overlay"
      style={{
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Gradient accent divider */}
          <div className="gradient-divider" />

          {/* Headline — cinematic scale */}
          <h2 style={{
            fontSize: 'clamp(40px, 11vw, 88px)',
            fontWeight: '800',
            letterSpacing: '-0.045em',
            marginBottom: '36px',
            lineHeight: '1.0',
            color: 'white',
            textWrap: 'balance',
          }}>
            {t('letsConnect')}
          </h2>

          {/* Sub-copy */}
          <p style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: 'rgba(255,255,255,0.45)',
            fontWeight: '500',
            maxWidth: '420px',
            lineHeight: '1.6',
            marginBottom: '40px',
            wordBreak: 'keep-all',
          }}>
            {t('connectDesc')}
          </p>

          {/* CTA button */}
          <button
            className="apple-button-primary"
            style={{
              padding: '18px 52px',
              fontSize: '17px',
              fontWeight: '700',
              borderRadius: '16px',
              boxShadow: '0 0 0 1px rgba(0,102,204,0.3), 0 8px 32px rgba(0,102,204,0.35)',
              letterSpacing: '-0.01em',
            }}
            onClick={() => window.location.href = `mailto:${CONTACT_EMAIL}`}
          >
            {t('contact')}
          </button>

          {/* Contact info pills */}
          <div style={{ marginTop: '56px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="contact-info-pill"
              style={{ textDecoration: 'none' }}
            >
              <Mail size={14} strokeWidth={2} />
              {CONTACT_EMAIL.toUpperCase()}
            </a>
            <div className="contact-info-pill">
              <Globe2 size={14} strokeWidth={2} />
              {t('location').toUpperCase()}
            </div>
          </div>

        </SectionReveal>
      </div>
    </section>
  );
};
