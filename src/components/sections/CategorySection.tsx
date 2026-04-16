'use client';

import { Coffee, Wind, ChefHat, ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';

const categoryIcons = [Coffee, Wind, ChefHat];

export const CategorySection = () => {
  const { t } = useLanguage();
  const categories = [
    { title: t('brewingTitle'), desc: t('brewingDesc') },
    { title: t('smokingTitle'), desc: t('smokingDesc') },
    { title: t('culinaryTitle'), desc: t('culinaryDesc') }
  ];

  return (
    <section id="categories" className="section-padding section-bg-tinted">
      <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <SectionReveal style={{ textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '8px' }}>{t('categories')}</h2>
          <p style={{ fontSize: '15px', color: '#86868b', fontWeight: '500' }}>{t('highVolume')}</p>
        </SectionReveal>

        {/* Bento: 2 small cards on top, 1 featured card on bottom */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>

          {/* Top row: Brewing + Smoking */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {categories.slice(0, 2).map((cat, idx) => {
              const Icon = categoryIcons[idx];
              return (
                <SectionReveal key={cat.title} delay={idx * 0.1} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="apple-card">
                    <div>
                      <Icon size={22} color="#0066cc" style={{ marginBottom: '16px' }} />
                      <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', letterSpacing: '-0.02em' }}>{cat.title}</h3>
                      <p style={{ fontSize: '14px', color: '#86868b', lineHeight: '1.6' }}>{cat.desc}</p>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      color: '#0066cc', fontSize: '12px', fontWeight: '700',
                      marginTop: '24px', cursor: 'pointer'
                    }}>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          {/* Bottom: Culinary — featured full-width dark card */}
          <SectionReveal delay={0.25}>
            <div className="bento-featured" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <ChefHat size={28} color="rgba(255,255,255,0.7)" style={{ marginBottom: '20px' }} />
                <h3 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: '800', marginBottom: '12px', letterSpacing: '-0.03em', color: 'white' }}>
                  {categories[2].title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: 'rgba(255,255,255,0.65)', maxWidth: '480px' }}>
                  {categories[2].desc}
                </p>
              </div>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <ArrowRight size={20} color="rgba(255,255,255,0.7)" />
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
};
