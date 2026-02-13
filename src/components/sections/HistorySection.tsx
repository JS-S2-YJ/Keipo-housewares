'use client';

import { SectionReveal } from '@/components/common/SectionReveal';
import { BASE_PATH } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export const HistorySection = () => {
  const { t, yearsActiveCount, historyText, sinceText } = useLanguage();

  return (
    <section id="history" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-container" style={{ flexDirection: 'column' }}>
        <div className="grid-3">
          <SectionReveal style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <span style={{ color: '#0066cc', fontWeight: '800', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{sinceText.toUpperCase()}</span>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>{historyText}</h2>
              <p style={{ fontSize: '17px', lineHeight: '1.5', color: '#86868b', marginBottom: '28px', fontWeight: '500' }}>
                {t('historyDesc')}
              </p>
              <div style={{ display: 'flex', gap: '32px' }}>
                <div>
                  <div className="stat-value">24+</div>
                  <div style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t('verifiedShipments')}</div>
                </div>
                <div>
                  <div className="stat-value">{yearsActiveCount}+</div>
                  <div style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t('yearsActive')}</div>
                </div>
              </div>
            </div>
          </SectionReveal>
          
          <SectionReveal delay={0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <div className="image-card-wrapper" style={{ 
              backgroundColor: 'white', 
              borderRadius: '32px', 
              width: '100%', 
              height: '400px', 
              overflow: 'hidden', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)', 
              position: 'relative',
              cursor: 'pointer',
              border: '1px solid rgba(0,0,0,0.03)'
            }}>
              <img 
                src={`${BASE_PATH}/images/knife.jpeg`} 
                alt={t('title')} 
                className="hover-zoom-image"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block',
                  transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px) saturate(160%)',
                WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                pointerEvents: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>{t('premiumQuality').toUpperCase()}</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
