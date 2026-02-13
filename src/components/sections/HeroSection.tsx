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
      backgroundColor: '#000000',
      background: 'radial-gradient(circle at 50% 40%, #ffffff 0%, #1d1d1f 60%, #000000 100%)',
      backgroundSize: '100% 100%'
    }}>
      {/* Premium Atmospheric Layers */}
      <div style={{ 
        position: 'absolute', 
        top: '0', 
        left: '0', 
        width: '100%', 
        height: '100%', 
        background: 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.8) 0%, transparent 40%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      
      <div style={{ 
        position: 'absolute', 
        top: '20%', 
        left: '10%', 
        width: '40%', 
        height: '400px', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.12) 0%, transparent 70%)', 
        filter: 'blur(100px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      
      <div style={{ 
        position: 'absolute', 
        bottom: '10%', 
        right: '10%', 
        width: '50%', 
        height: '500px', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.08) 0%, transparent 70%)', 
        filter: 'blur(120px)', 
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
          letterSpacing: '0.3em', 
          color: '#0066cc', 
          marginBottom: '24px', 
          textTransform: 'uppercase',
          textShadow: '0 0 20px rgba(0, 102, 204, 0.3)'
        }}>
          {t('premiumQuality')}
        </span>
        
        {/* Brand Title: True Solid Black on a bright spotlight core */}
        <h1 className="hero-title-3d-glow" style={{ 
          marginBottom: '8px'
        }}>
          {t('brandLabel')}
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(18px, 4vw, 24px)', 
          color: 'rgba(29, 29, 31, 0.8)', /* Dark text on spotlight area */
          fontWeight: '600', 
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
          <button className="apple-button-secondary" style={{ 
            color: '#1d1d1f', 
            background: 'rgba(0, 0, 0, 0.05)', 
            borderColor: 'rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            {t('explore')} <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </SectionReveal>
    </section>
  );
};
