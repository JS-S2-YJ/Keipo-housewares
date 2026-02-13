'use client';

import { ChevronRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding" style={{ 
      textAlign: 'center', 
      paddingTop: 'clamp(140px, 20vh, 240px)', 
      paddingBottom: 'clamp(80px, 15vh, 160px)',
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Dynamic Atmospheric Glows */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', 
        right: '-5%', 
        width: '60%', 
        height: '80%', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.04) 0%, transparent 70%)', 
        filter: 'blur(120px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', 
        bottom: '-10%', 
        left: '-5%', 
        width: '50%', 
        height: '70%', 
        background: 'radial-gradient(circle, rgba(0, 102, 204, 0.03) 0%, transparent 70%)', 
        filter: 'blur(100px)', 
        zIndex: 0, 
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', 
        top: '40%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: '100%', 
        height: '100%', 
        background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(245, 245, 247, 0.4) 100%)', 
        zIndex: -1, 
        pointerEvents: 'none' 
      }} />
      
      <div className="max-container" style={{ 
        position: 'relative', 
        zIndex: 1, 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 24px', 
        maxWidth: '1440px' 
      }}>
        <SectionReveal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Minimal Badge */}
            <div style={{ 
              background: 'rgba(0, 102, 204, 0.05)', 
              padding: '6px 16px', 
              borderRadius: '100px', 
              marginBottom: '32px',
              border: '1px solid rgba(0, 102, 204, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
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
            
            {/* Main Hero Typography */}
            <h1 className="hero-title-3d-glow" style={{ 
              marginBottom: '24px',
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: '0.9',
              whiteSpace: 'normal'
            }}>
              <span style={{ display: 'block' }}>KEIPO</span>
              <span style={{ 
                display: 'block', 
                fontSize: '0.55em', 
                opacity: 0.9, 
                marginTop: '8px',
                letterSpacing: '0.05em'
              }}>HOUSEWARES</span>
            </h1>
            
            {/* Refined Slogan */}
            <p style={{ 
              fontSize: 'clamp(18px, 3.5vw, 26px)', 
              color: '#424245', 
              fontWeight: '500', 
              marginTop: '8px', 
              marginBottom: '56px', 
              maxWidth: '800px', 
              lineHeight: '1.4', 
              letterSpacing: '-0.02em',
              wordBreak: 'keep-all'
            }}>
              {t('slogan')}
            </p>
            
            {/* Modern CTA Group */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '24px', 
              flexWrap: 'wrap', 
              width: '100%' 
            }}>
              <button className="apple-button-primary" style={{ 
                padding: '18px 40px', 
                fontSize: '18px', 
                borderRadius: '20px', 
                minWidth: '180px' 
              }}>
                {t('experience')}
              </button>
              <button className="apple-button-secondary" style={{ 
                padding: '18px 40px', 
                fontSize: '18px',
                borderRadius: '20px',
                minWidth: '180px',
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                {t('explore')} <ChevronRight size={20} strokeWidth={2.5} style={{ marginLeft: '4px' }} />
              </button>
            </div>

            {/* Heritage Indicator */}
            <div style={{ 
              marginTop: '80px', 
              opacity: 0.4, 
              fontSize: '11px', 
              fontWeight: '700', 
              letterSpacing: '0.2em', 
              color: '#1d1d1f', 
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#1d1d1f', opacity: 0.2 }} />
              Precision Since 1988
              <div style={{ width: '40px', height: '1px', backgroundColor: '#1d1d1f', opacity: 0.2 }} />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
