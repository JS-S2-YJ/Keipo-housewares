'use client';

import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SectionReveal } from '@/components/common/SectionReveal';
import { ScrollVideo } from '@/components/common/ScrollVideo';
import { useLanguage } from '@/hooks/useLanguage';
import { BASE_PATH } from '@/lib/constants';
import type { TranslationKey } from '@/translations';

type TranslateFn = (key: TranslationKey) => string;

export const HeroSection = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    setMounted(true);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  if (mounted && isMobile) {
    return <MobileHero t={t} />;
  }
  return <DesktopHero t={t} />;
};

const MobileHero = ({ t }: { t: TranslateFn }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [headlineShown, setHeadlineShown] = useState(false);
  const [sloganShown, setSloganShown] = useState(false);
  const [ctaShown, setCtaShown] = useState(false);
  const [heritageShown, setHeritageShown] = useState(false);
  const [fullyRevealed, setFullyRevealed] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (fullyRevealed) return;

    const h = v >= 0.03;
    const s = v >= 0.14;
    const c = v >= 0.26;
    const her = v >= 0.38;

    setHeadlineShown(h);
    setSloganShown(s);
    setCtaShown(c);
    setHeritageShown(her);

    if (h && s && c && her) setFullyRevealed(true);
  });

  const revealSpring = { type: 'spring' as const, stiffness: 140, damping: 22, mass: 0.6 };

  return (
    <ScrollVideo
      sectionRef={sectionRef}
      framePathPrefix={`${BASE_PATH}/videos/mobile-hero-frames/frame_`}
      frameCount={96}
      scrollMultiplier={1.5}
      mask="linear-gradient(180deg, rgba(3,7,18,0.55) 0%, rgba(3,7,18,0.15) 35%, rgba(3,7,18,0.35) 65%, rgba(3,7,18,0.85) 100%)"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '100px 28px 20px',
          color: '#fff',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <SectionReveal immediate style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${BASE_PATH}/images/main_logo_v2.png`}
            alt="KEIPO Housewares"
            loading="eager"
            style={{
              width: 120,
              height: 'auto',
              display: 'block',
              borderRadius: 20,
              opacity: 0.95,
              filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.5))',
              pointerEvents: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          />
        </SectionReveal>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={headlineShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={revealSpring}
            style={{
              fontSize: 'clamp(42px, 11vw, 64px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.03,
              color: '#fff',
              textWrap: 'balance',
              marginBottom: 14,
              textShadow: '0 4px 40px rgba(0,0,0,0.4)',
            }}
          >
            KEIPO
            <br />
            Housewares
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={sloganShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={revealSpring}
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.82)',
              fontWeight: 500,
              lineHeight: 1.55,
              letterSpacing: '-0.01em',
              maxWidth: 360,
              wordBreak: 'keep-all',
              marginBottom: 20,
              textShadow: '0 2px 20px rgba(0,0,0,0.35)',
            }}
          >
            {t('slogan')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ctaShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={revealSpring}
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
            }}
          >
            <button
              className="apple-button-primary"
              style={{
                padding: '14px 28px',
                fontSize: 15,
                borderRadius: 14,
                fontWeight: 700,
              }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('experience')}
            </button>
            <button
              style={{
                padding: '14px 20px',
                fontSize: 15,
                borderRadius: 14,
                fontWeight: 600,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.22)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                cursor: 'pointer',
              }}
              onClick={() => {
                const el = document.getElementById('history');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('explore')} <ChevronRight size={15} strokeWidth={2.5} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heritageShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={revealSpring}
            style={{
              marginTop: 22,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ flex: '0 0 28px', height: 1, background: 'currentColor' }} />
            Est. 1988 · Seoul, Korea
            <span style={{ flex: '0 0 28px', height: 1, background: 'currentColor' }} />
          </motion.div>
        </div>
      </div>
    </ScrollVideo>
  );
};

const DesktopHero = ({ t }: { t: TranslateFn }) => {
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

      <div className="max-container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
        <SectionReveal style={{ width: '100%' }}>
          <div className="hero-text-side">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Precision Since 1988
            </div>

            <h1 className="hero-headline">
              KEIPO<br />Housewares
            </h1>

            <p className="hero-slogan">{t('slogan')}</p>

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

            <div className="hero-heritage">
              <span className="hero-heritage-line" />
              Est. 1988 · Seoul, Korea
              <span className="hero-heritage-line" />
            </div>
          </div>
        </SectionReveal>

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
