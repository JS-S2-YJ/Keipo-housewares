'use client';

import { SectionReveal } from '@/components/common/SectionReveal';
import { BASE_PATH } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export const HistorySection = () => {
  const { t, yearsActiveCount, historyText, sinceText } = useLanguage();

  return (
    <section id="history" className="section-padding section-bg-tinted">
      <div className="max-container" style={{ flexDirection: 'column' }}>
        <div className="grid-2">
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
              borderRadius: '32px',
              width: '100%',
              height: '420px',
              overflow: 'hidden',
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.8),
                0 2px 4px rgba(0,0,0,0.03),
                0 20px 48px rgba(0,0,0,0.08),
                0 60px 100px rgba(0,0,0,0.05)
              `,
              position: 'relative',
              cursor: 'pointer',
              border: '1px solid rgba(0,0,0,0.04)',
            }}>
              <img
                src={`${BASE_PATH}/images/knife.jpeg`}
                alt={t('title')}
                loading="lazy"
                className="hover-zoom-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Double-bezel glass overlay */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                padding: '3px',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(1px)',
                WebkitBackdropFilter: 'blur(1px)',
                borderRadius: '22px',
                border: '1px solid rgba(255,255,255,0.2)',
                pointerEvents: 'none',
              }}>
                <div style={{
                  padding: '14px 20px',
                  background: 'rgba(0,0,0,0.35)',
                  backdropFilter: 'blur(24px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                  borderRadius: '19px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.9)' }}>
                    {t('premiumQuality').toUpperCase()}
                  </span>
                  <span style={{ fontSize: '10px', fontWeight: '600', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    Est. 1988
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};
