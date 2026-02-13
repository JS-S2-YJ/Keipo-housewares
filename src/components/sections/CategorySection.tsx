'use client';

import { Package, ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';

import { TranslationKey } from '@/translations';

interface CategorySectionProps {
  t: (key: TranslationKey) => string;
}

export const CategorySection = ({ t }: CategorySectionProps) => {
  const categories = [
    { title: t('brewingTitle'), desc: t('brewingDesc') },
    { title: t('smokingTitle'), desc: t('smokingDesc') },
    { title: t('culinaryTitle'), desc: t('culinaryDesc') }
  ];

  return (
    <section id="categories" className="section-padding">
      <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <SectionReveal style={{ textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '8px' }}>{t('categories')}</h2>
          <p style={{ fontSize: '15px', color: '#86868b', fontWeight: '500' }}>{t('highVolume')}</p>
        </SectionReveal>
        
        <div className="grid-3">
          {categories.map((cat, idx) => (
            <SectionReveal key={cat.title} delay={idx * 0.1} style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="apple-card">
                <div>
                  <Package size={24} style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '-0.02em' }}>{cat.title}</h3>
                  <p style={{ fontSize: '15px', color: '#86868b', lineHeight: '1.5' }}>{cat.desc}</p>
                </div>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  backgroundColor: '#f5f5f7', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginTop: '24px',
                  border: '1px solid rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}>
                  <ArrowRight size={18} color="#0066cc" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
