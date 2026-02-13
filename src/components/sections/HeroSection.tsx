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
      paddingTop: 'clamp(120px, 15vh, 200px)', 
      paddingBottom: 'clamp(60px, 10vh, 120px)',
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      backgroundColor: '#f5f5f7',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    }}>
      {/* Background Atmosphere */}
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '50%', height: '500px', background: 'radial-gradient(circle, rgba(0, 102, 204, 0.06) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none' }} />
      
      <div className="max-container" style={{ position: 'relative', zIndex: 1, justifyContent: 'center', padding: '0 12px', maxWidth: '1400px' }}>
        <SectionReveal style={{ width: '100%', maxWidth: '1240px' }}>
          {/* Refined Mobile-First Glass Card */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.4)', 
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            borderRadius: 'clamp(24px, 5vw, 40px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            padding: 'clamp(40px, 8vw, 80px) clamp(20px, 8vw, 120px)', /* Increased horizontal padding for wider feel */
            boxShadow: '0 20px 80px rgba(0, 0, 0, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div style={{ 
              background: 'rgba(0, 102, 204, 0.08)', 
              padding: '4px 14px', 
              borderRadius: '20px', 
              marginBottom: '24px',
              border: '1px solid rgba(0, 102, 204, 0.1)'
            }}>
              <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', color: '#0066cc', textTransform: 'uppercase' }}>
                {t('premiumQuality')}
              </span>
            </div>
            
            <h1 className="hero-title-3d-glow" style={{ 
              marginBottom: '16px',
              fontSize: 'clamp(32px, 10vw, 110px)',
              lineHeight: '1.0',
              textAlign: 'center',
              width: '100%',
              wordBreak: 'keep-all'
            }}>
              {t('brandLabel')}
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(16px, 4vw, 24px)', 
              color: '#1d1d1f', 
              fontWeight: '500', 
              marginTop: '16px', 
              marginBottom: '40px', 
              maxWidth: '600px', 
              lineHeight: '1.3', 
              padding: '0 10px',
              letterSpacing: '-0.01em',
              opacity: 0.8
            }}>
              {t('slogan')}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
              <button className="apple-button-primary" style={{ padding: '16px 32px', fontSize: '17px', borderRadius: '18px', minWidth: '160px' }}>
                {t('experience')}
              </button>
              <button className="apple-button-secondary" style={{ 
                padding: '16px 32px', 
                fontSize: '17px',
                background: 'rgba(0, 0, 0, 0.03)',
                borderRadius: '18px',
                minWidth: '160px'
              }}>
                {t('explore')} <ChevronRight size={20} strokeWidth={2.5} />
              </button>
            </div>

            <div style={{ marginTop: '60px', opacity: 0.3, fontSize: '10px', fontWeight: '800', letterSpacing: '0.15em', color: '#1d1d1f', textTransform: 'uppercase' }}>
              Precision Since 1988
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
