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
      paddingTop: '160px', 
      paddingBottom: '160px',
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      backgroundColor: '#f5f5f7' /* Base Apple Gray */
    }}>
      {/* Dynamic Background Glows for Glass Interaction */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '20%', 
        width: '50%', 
        height: '500px', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.08) 0%, transparent 70%)', 
        filter: 'blur(100px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', 
        bottom: '10%', 
        right: '15%', 
        width: '40%', 
        height: '400px', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.05) 0%, transparent 70%)', 
        filter: 'blur(80px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      
      <div className="max-container" style={{ position: 'relative', zIndex: 1, justifyContent: 'center' }}>
        <SectionReveal style={{ width: '100%', maxWidth: '1000px' }}>
          {/* Main Floating Glass Card */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.4)', 
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            borderRadius: '40px',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            padding: '80px 40px',
            boxShadow: '0 30px 100px rgba(0, 0, 0, 0.04), 0 10px 40px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Inner Card Spotlight */}
            <div style={{ 
              position: 'absolute', 
              top: '-20%', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              width: '100%', 
              height: '100%', 
              background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)', 
              zIndex: -1,
              pointerEvents: 'none'
            }} />

            <div style={{ 
              background: 'rgba(0, 102, 204, 0.08)', 
              padding: '6px 18px', 
              borderRadius: '20px', 
              marginBottom: '32px',
              border: '1px solid rgba(0, 102, 204, 0.15)',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ 
                fontSize: '12px', 
                fontWeight: '800', 
                letterSpacing: '0.2em', 
                color: '#0066cc', 
                textTransform: 'uppercase'
              }}>
                {t('premiumQuality')}
              </span>
            </div>
            
            <h1 className="hero-title-3d-glow" style={{ 
              marginBottom: '24px',
              fontSize: 'clamp(40px, 8vw, 110px)' /* Slightly adjusted for card layout */
            }}>
              {t('brandLabel')}
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(18px, 3.5vw, 24px)', 
              color: '#1d1d1f', 
              fontWeight: '500', 
              marginTop: '16px', 
              marginBottom: '56px', 
              maxWidth: '650px', 
              lineHeight: '1.4', 
              padding: '0 20px',
              letterSpacing: '-0.02em',
              opacity: 0.85
            }}>
              {t('slogan')}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <button className="apple-button-primary" style={{ padding: '18px 48px', fontSize: '18px', borderRadius: '24px' }}>
                {t('experience')}
              </button>
              <button className="apple-button-secondary" style={{ 
                padding: '18px 48px', 
                fontSize: '18px',
                background: 'rgba(0, 0, 0, 0.03)',
                borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}>
                {t('explore')} <ChevronRight size={22} strokeWidth={2.5} style={{ marginLeft: '4px' }} />
              </button>
            </div>

            <div style={{ marginTop: '80px', opacity: 0.4, fontSize: '11px', fontWeight: '800', letterSpacing: '0.2em', color: '#1d1d1f', textTransform: 'uppercase' }}>
              Global Trade Precision Since 1988
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
