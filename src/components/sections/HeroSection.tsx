'use client';

import { ChevronRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { BASE_PATH } from '@/lib/constants';

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
            {/* Main Hero Logo */}
            <div style={{ 
              marginBottom: 'clamp(32px, 5vh, 60px)',
              position: 'relative'
            }}>
              <img 
                src={`${BASE_PATH}/images/main_logo.png`} 
                alt="KEIPO Housewares" 
                style={{ 
                  height: 'clamp(140px, 25vh, 280px)', 
                  width: 'auto',
                  objectFit: 'contain',
                  borderRadius: '24px',
                  filter: 'drop-shadow(0 20px 45px rgba(0, 102, 204, 0.15))'
                }} 
              />
            </div>
            
            {/* Refined Slogan */}
            <p style={{ 
              fontSize: 'clamp(16px, 3vw, 22px)', 
              color: '#424245', 
              fontWeight: '500', 
              marginTop: '4px', 
              marginBottom: '48px', 
              maxWidth: '700px', 
              lineHeight: '1.4', 
              letterSpacing: '-0.01em',
              wordBreak: 'keep-all',
              opacity: 0.9
            }}>
              {t('slogan')}
            </p>
            
            {/* Modern CTA Group */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              flexWrap: 'wrap', 
              width: '100%' 
            }}>
              <button className="apple-button-primary" style={{ 
                padding: '12px 28px', 
                fontSize: '16px', 
                borderRadius: '14px', 
                minWidth: '140px' 
              }}>
                {t('experience')}
              </button>
              <button className="apple-button-secondary" style={{ 
                padding: '12px 28px', 
                fontSize: '16px',
                borderRadius: '14px',
                minWidth: '140px',
                backgroundColor: 'rgba(0, 0, 0, 0.02)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                {t('explore')} <ChevronRight size={18} strokeWidth={2.5} style={{ marginLeft: '2px' }} />
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
