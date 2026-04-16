'use client';

import { Mail, Globe2 } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-padding" style={{ 
      backgroundColor: 'rgba(29, 29, 31, 0.98)', 
      backdropFilter: 'blur(40px)',
      WebkitBackdropFilter: 'blur(40px)',
      color: 'white', 
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Ambient Glow for Depth */}
      <div style={{ 
        position: 'absolute', 
        top: '-50%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '100%', 
        height: '100%', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, transparent 70%)', 
        filter: 'blur(80px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />

      <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ 
            fontSize: 'clamp(36px, 10vw, 80px)', 
            fontWeight: 'bold', 
            letterSpacing: '-0.04em', 
            marginBottom: '32px', 
            lineHeight: '1', 
            color: 'white',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}>
            {t('letsConnect')}
          </h2>
          <button
            className="apple-button-primary"
            style={{
              padding: '18px 48px',
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 102, 204, 0.35)',
              letterSpacing: '-0.01em'
            }}
            onClick={() => window.location.href = 'mailto:contact@keipo.com'}
          >
            {t('contact')}
          </button>
          <div style={{ marginTop: '56px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em' }}>
              <Mail size={14} strokeWidth={2} />
              CONTACT@KEIPO.COM
            </div>
            <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.15)', alignSelf: 'center' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.45)', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em' }}>
              <Globe2 size={14} strokeWidth={2} />
              {t('location').toUpperCase()}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
