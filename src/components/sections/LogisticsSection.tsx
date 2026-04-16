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
    <section id="logistics" className="section-padding section-bg-white">
      <div className="max-container" style={{ flexDirection: 'column' }}>
        <SectionReveal style={{ marginBottom: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ color: '#0066cc', fontWeight: '800', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{t('tradeInsights')}</span>
          <h2 className="section-title">{t('mainRoutes')}</h2>
        </SectionReveal>

        {/* Bento Grid: 2-up top + full-width bottom */}
        <div className="perspective-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>

            {/* Top row: 2 equal cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <SectionReveal delay={0.1} style={{ display: 'flex' }}>
                <div className="three-d-card" style={{ padding: '36px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <Anchor size={22} color="#0066cc" />
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-0.02em' }}>{t('primaryHubs')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
                        <span style={{ color: '#86868b', fontSize: '13px', fontWeight: '500' }}>{t('origin')}</span>
                        <span style={{ fontWeight: '700', fontSize: '13px', letterSpacing: '0.04em' }}>KR / CN</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
                        <span style={{ color: '#86868b', fontSize: '13px', fontWeight: '500' }}>{t('destination')}</span>
                        <span style={{ fontWeight: '700', fontSize: '13px', letterSpacing: '0.04em' }}>USA (CT, CA)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2} style={{ display: 'flex' }}>
                <div className="three-d-card" style={{ padding: '36px', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <TrendingUp size={22} color="#0066cc" />
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', letterSpacing: '-0.02em' }}>{t('tradeVelocity')}</h3>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px', height: '56px' }}>
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
                    <p style={{ fontSize: '10px', color: '#86868b', marginTop: '12px', fontWeight: '700', letterSpacing: '0.06em' }}>
                      {t('verifiedBy')} · {ESTABLISHED_YEAR}–{currentYear}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Bottom row: full-width partners card (horizontal layout) */}
            <SectionReveal delay={0.3}>
              <div className="three-d-card" style={{ padding: '36px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: 'rgba(0,102,204,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BarChart3 size={22} color="#0066cc" />
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{t('topPartners')}</h3>
                </div>
                <p style={{ fontSize: '14px', color: '#86868b', lineHeight: '1.6', fontWeight: '500', flex: 1, minWidth: '200px' }}>
                  {t('partnerDesc')}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0066cc', fontSize: '12px', fontWeight: '700', flexShrink: 0, cursor: 'pointer' }}>
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
