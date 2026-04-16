'use client';

import { ChevronRight } from 'lucide-react';
import { SectionReveal } from '@/components/common/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { BASE_PATH } from '@/lib/constants';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      style={{
        minHeight: '100dvh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fafafa',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '60px',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Ambient glows — repositioned for split layout */}
      <div style={{
        position: 'absolute', top: '-15%', right: '0',
        width: '55%', height: '90%',
        background: 'radial-gradient(circle, rgba(0,102,204,0.05) 0%, transparent 70%)',
        filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0', left: '-5%',
        width: '40%', height: '60%',
        background: 'radial-gradient(circle, rgba(0,102,204,0.03) 0%, transparent 70%)',
        filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Editorial Split Grid */}
      <div className="max-container hero-grid" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Left: Text side ── */}
        <SectionReveal style={{ width: '100%' }}>
          <div className="hero-text-side">
            {/* Eyebrow pill */}
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Precision Since 1988
            </div>

            {/* Display headline */}
            <h1 className="hero-headline">
              KEIPO<br />Housewares
            </h1>

            {/* Slogan */}
            <p className="hero-slogan">{t('slogan')}</p>

            {/* CTA group */}
            <div className="hero-cta-group">
              <button
                className="apple-button-primary"
                style={{ padding: '16px 36px', fontSize: '16px', borderRadius: '14px', fontWeight: '700' }}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('experience')}
              </button>
              <button
                className="apple-button-secondary"
                style={{
                  padding: '16px 24px', fontSize: '16px', borderRadius: '14px',
                  backgroundColor: 'rgba(0,0,0,0.03)', backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)', fontWeight: '600',
                  display: 'flex', alignItems: 'center', gap: '4px',
                }}
                onClick={() => {
                  const el = document.getElementById('history');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('explore')} <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>

            {/* Heritage indicator */}
            <div className="hero-heritage">
              <span className="hero-heritage-line" />
              Est. 1988 · Seoul, Korea
              <span className="hero-heritage-line" />
            </div>
          </div>
        </SectionReveal>

        {/* ── Right: Logo image ── */}
        <SectionReveal delay={0.18} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '560px',
            borderRadius: '36px',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: `
              inset 0 0 0 1px rgba(255,255,255,0.7),
              0 8px 24px rgba(0,0,0,0.04),
              0 40px 80px rgba(0,102,204,0.08),
              0 80px 160px rgba(0,0,0,0.06)
            `,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '24px',
          }}>
            <img
              src={`${BASE_PATH}/images/main_logo_v2.png`}
              alt="KEIPO Housewares"
              loading="eager"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                borderRadius: '20px',
                filter: 'drop-shadow(0 20px 40px rgba(0,102,204,0.15))',
              }}
            />
          </div>
        </SectionReveal>

      </div>
    </section>
  );
};
