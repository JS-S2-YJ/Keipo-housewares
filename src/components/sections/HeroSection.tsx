'use client';

import { ChevronRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';

import { TranslationKey } from '@/translations';

interface HeroSectionProps {
  t: (key: TranslationKey) => string;
}

export const HeroSection = ({ t }: HeroSectionProps) => {
  return (
    <section className="section-padding" style={{ 
      textAlign: 'center', 
      paddingTop: '200px', 
      paddingBottom: '140px',
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      backgroundColor: '#ffffff' /* Apple Standard White */
    }}>
      {/* Subtle Light-themed Atmospheric Glows */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '140%', 
        height: '600px', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.04) 0%, transparent 60%)', 
        filter: 'blur(80px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '30%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '100%', 
        maxWidth: '600px', 
        height: '300px', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.06) 0%, transparent 70%)', 
        filter: 'blur(60px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      
      <SectionReveal style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        position: 'relative', 
        zIndex: 1, 
        width: '100%' 
      }}>
        <span style={{ 
          fontSize: 'clamp(12px, 2vw, 14px)', 
          fontWeight: '700', 
          letterSpacing: '0.25em', 
          color: '#0066cc', 
          marginBottom: '20px', 
          textTransform: 'uppercase'
        }}>
          {t('premiumQuality')}
        </span>
        
        {/* Brand Title: Solid Black 3D remains, optimized for white bg */}
        <h1 className="hero-title-3d-glow" style={{ 
          marginBottom: '8px'
        }}>
          {t('brandLabel')}
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(18px, 4vw, 24px)', 
          color: '#86868b', /* Standard Apple Gray */
          fontWeight: '500', 
          marginTop: '32px', 
          marginBottom: '56px', 
          maxWidth: '750px', 
          lineHeight: '1.4', 
          padding: '0 24px',
          letterSpacing: '-0.01em'
        }}>
          {t('slogan')}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <button className="apple-button-primary" style={{ padding: '16px 40px', fontSize: '18px' }}>
            {t('experience')}
          </button>
          <button className="apple-button-secondary">
            {t('explore')} <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </SectionReveal>
    </section>
  );
};
