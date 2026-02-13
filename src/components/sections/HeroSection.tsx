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
      paddingTop: '220px', 
      paddingBottom: '160px',
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      backgroundColor: '#fbfbfd', /* Apple's specific off-white */
      backgroundImage: 'radial-gradient(at 50% 0%, rgba(0, 102, 204, 0.03) 0%, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 102, 204, 0.02) 0%, transparent 30%)'
    }}>
      {/* High-Fidelity Atmospheric Elements */}
      <div style={{ 
        position: 'absolute', 
        top: '0', 
        left: '0', 
        width: '100%', 
        height: '100%', 
        background: 'url("https://www.transparenttextures.com/patterns/p6.png")', /* Subtle Grain Texture */
        opacity: 0.03,
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      
      <div style={{ 
        position: 'absolute', 
        top: '5%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '120%', 
        height: '800px', 
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 60%)', 
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
        <div style={{ 
          background: 'rgba(0, 102, 204, 0.05)', 
          padding: '6px 16px', 
          borderRadius: '20px', 
          marginBottom: '24px',
          border: '1px solid rgba(0, 102, 204, 0.1)'
        }}>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: '700', 
            letterSpacing: '0.15em', 
            color: '#0066cc', 
            textTransform: 'uppercase'
          }}>
            {t('premiumQuality')}
          </span>
        </div>
        
        <h1 className="hero-title-3d-glow" style={{ 
          marginBottom: '16px',
          textShadow: '1px 1px 0px #fff, 0 4px 12px rgba(0,0,0,0.08)' 
        }}>
          {t('brandLabel')}
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(20px, 4.5vw, 28px)', 
          color: '#1d1d1f', 
          fontWeight: '600', 
          marginTop: '24px', 
          marginBottom: '60px', 
          maxWidth: '720px', 
          lineHeight: '1.2', 
          padding: '0 24px',
          letterSpacing: '-0.03em',
          opacity: 0.9
        }}>
          {t('slogan')}
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button className="apple-button-primary" style={{ padding: '18px 44px', fontSize: '19px', boxShadow: '0 10px 30px rgba(0, 102, 204, 0.2)' }}>
            {t('experience')}
          </button>
          <button className="apple-button-secondary" style={{ padding: '18px 44px', fontSize: '19px' }}>
            {t('explore')} <ChevronRight size={22} strokeWidth={2.5} style={{ marginLeft: '4px' }} />
          </button>
        </div>

        {/* Floating Stat or Tagline for extra 'Apple' feel */}
        <div style={{ marginTop: '100px', opacity: 0.5, fontSize: '13px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b' }}>
          ESTABLISHED IN 1988 — SEOUL, KOREA
        </div>
      </SectionReveal>
    </section>
  );
};
