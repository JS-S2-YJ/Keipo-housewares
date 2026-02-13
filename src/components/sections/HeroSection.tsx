'use client';

import { ChevronRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';

import { TranslationKey } from '@/translations';

interface HeroSectionProps {
  t: (key: TranslationKey) => string;
}

export const HeroSection = ({ t }: HeroSectionProps) => {
  return (
    <section className="section-padding" style={{ textAlign: 'center', paddingTop: '150px', position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Dual-layer Atmospheric Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '140%', height: '500px', background: 'radial-gradient(circle, rgba(0, 102, 204, 0.03) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '600px', height: '300px', background: 'radial-gradient(circle, rgba(0, 102, 204, 0.06) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0, pointerEvents: 'none' }} />
      
      <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
        <span style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: '700', letterSpacing: '0.2em', color: '#0066cc', marginBottom: '16px', textTransform: 'uppercase', opacity: 0.8 }}>
          {t('premiumQuality')}
        </span>
        <h1 className="hero-title-3d-glow">
          {t('brandLabel')}
        </h1>
        <p style={{ 
          fontSize: 'clamp(18px, 4vw, 26px)', 
          color: '#86868b', 
          fontWeight: '500', 
          marginTop: '24px', 
          marginBottom: '40px', 
          maxWidth: '800px', 
          lineHeight: '1.3', 
          padding: '0 20px',
          letterSpacing: '-0.02em'
        }}>
          {t('slogan')}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button className="apple-button-primary">{t('experience')}</button>
          <button className="apple-button-secondary">
            {t('explore')} <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </SectionReveal>
    </section>
  );
};
