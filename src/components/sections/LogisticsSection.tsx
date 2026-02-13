'use client';

import { Anchor, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/common/SectionReveal';
import { ESTABLISHED_YEAR } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export const LogisticsSection = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <section id="logistics" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="max-container" style={{ flexDirection: 'column' }}>
        <SectionReveal style={{ marginBottom: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ color: '#0066cc', fontWeight: '800', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{t('tradeInsights')}</span>
          <h2 className="section-title">{t('mainRoutes')}</h2>
        </SectionReveal>

        <div className="perspective-container">
          <div className="grid-3">
            <SectionReveal delay={0.1} style={{ display: 'flex' }}>
              <div className="three-d-card" style={{ padding: '32px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Anchor size={24} color="#0066cc" style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>{t('primaryHubs')}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8f8f8', paddingBottom: '8px' }}>
                      <span style={{ color: '#86868b', fontSize: '13px' }}>{t('origin')}</span>
                      <span style={{ fontWeight: '600', fontSize: '13px' }}>KR / CN</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8f8f8', paddingBottom: '8px' }}>
                      <span style={{ color: '#86868b', fontSize: '13px' }}>{t('destination')}</span>
                      <span style={{ fontWeight: '600', fontSize: '13px' }}>USA (CT, CA)</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} style={{ display: 'flex' }}>
              <div className="three-d-card" style={{ padding: '32px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <TrendingUp size={24} color="#0066cc" style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>{t('tradeVelocity')}</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '60px', marginTop: '16px' }}>
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: 1, backgroundColor: i === 6 ? '#0066cc' : '#e5e5ea', borderRadius: '3px 3px 0 0' }} 
                      />
                    ))}
                  </div>
                  <p style={{ fontSize: '10px', color: '#86868b', marginTop: '16px', fontWeight: '800', letterSpacing: '0.05em' }}>{t('verifiedBy')} // {ESTABLISHED_YEAR}-{currentYear}</p>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3} style={{ display: 'flex' }}>
              <div className="three-d-card" style={{ padding: '32px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <BarChart3 size={24} color="#0066cc" style={{ marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{t('topPartners')}</h3>
                  <p style={{ fontSize: '14px', color: '#86868b', lineHeight: '1.6', fontWeight: '500' }}>
                    {t('partnerDesc')}
                  </p>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '6px', color: '#0066cc', fontSize: '12px', fontWeight: '700' }}>
                  {t('viewNetwork')} <ArrowRight size={14} />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
