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
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    setIsShort(window.matchMedia('(max-height: 720px)').matches);
  }, []);

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

  const primaryButton = (
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
  );

  const secondaryButton = (
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
  );

  if (isShort) {
    const afterStickyText = (
      <div
        style={{
          backgroundColor: '#030712',
          color: '#fff',
          padding: '64px 28px 72px',
          position: 'relative',
        }}
      >
        <SectionReveal>
          <h1
            style={{
              fontSize: 'clamp(38px, 11vw, 60px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.03,
              color: '#fff',
              textWrap: 'balance',
              marginBottom: 16,
            }}
          >
            KEIPO
            <br />
            Housewares
          </h1>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.78)',
              fontWeight: 500,
              lineHeight: 1.55,
              letterSpacing: '-0.01em',
              maxWidth: 360,
              wordBreak: 'keep-all',
              marginBottom: 24,
            }}
          >
            {t('slogan')}
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {primaryButton}
            {secondaryButton}
          </div>
          <div
            style={{
              marginTop: 32,
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
          </div>
        </SectionReveal>
      </div>
    );

    return (
      <ScrollVideo
        sectionRef={sectionRef}
        framePathPrefix={`${BASE_PATH}/videos/mobile-hero-frames/frame_`}
        frameCount={96}
        scrollMultiplier={1.3}
        mask="linear-gradient(180deg, rgba(3,7,18,0.5) 0%, rgba(3,7,18,0.1) 40%, rgba(3,7,18,0.25) 70%, rgba(3,7,18,0.95) 100%)"
        afterSticky={afterStickyText}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 'min(80px, 12vh) 28px 0',
            color: '#fff',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          <SectionReveal immediate style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src={`${BASE_PATH}/images/main_logo_v2.png`}
              alt="KEIPO Housewares"
              loading="eager"
              style={{
                width: 'clamp(72px, 18vh, 110px)',
                height: 'auto',
                display: 'block',
                borderRadius: 18,
                opacity: 0.95,
                filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.5))',
                pointerEvents: 'none',
              }}
            />
          </SectionReveal>

          <SectionReveal
            immediate
            style={{
              position: 'absolute',
              bottom: 20,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span>Scroll</span>
              <span style={{ width: 24, height: 1, background: 'currentColor' }} />
            </div>
          </SectionReveal>
        </div>
      </ScrollVideo>
    );
  }

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
            {primaryButton}
            {secondaryButton}
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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [eyebrowShown, setEyebrowShown] = useState(false);
  const [headlineShown, setHeadlineShown] = useState(false);
  const [sloganShown, setSloganShown] = useState(false);
  const [ctaShown, setCtaShown] = useState(false);
  const [heritageShown, setHeritageShown] = useState(false);
  const [fullyRevealed, setFullyRevealed] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (fullyRevealed) return;
    const eb = v >= 0.01;
    const h = v >= 0.04;
    const s = v >= 0.12;
    const c = v >= 0.20;
    const her = v >= 0.30;
    setEyebrowShown(eb);
    setHeadlineShown(h);
    setSloganShown(s);
    setCtaShown(c);
    setHeritageShown(her);
    if (eb && h && s && c && her) setFullyRevealed(true);
  });

  const revealSpring = { type: 'spring' as const, stiffness: 140, damping: 22, mass: 0.6 };

  return (
    <ScrollVideo
      sectionRef={sectionRef}
      framePathPrefix={`${BASE_PATH}/videos/desktop-hero-frames/frame_`}
      frameCount={192}
      scrollMultiplier={2}
      mask="linear-gradient(180deg, rgba(3,7,18,0.45) 0%, rgba(3,7,18,0.12) 28%, rgba(3,7,18,0.35) 65%, rgba(3,7,18,0.85) 100%)"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(56px, 13vh, 120px) clamp(48px, 7vw, 96px) clamp(40px, 8vh, 72px)',
          color: '#fff',
          userSelect: 'none',
          WebkitUserSelect: 'none',
        }}
      >
        <SectionReveal immediate>
          <img
            src={`${BASE_PATH}/images/main_logo_v2.png`}
            alt="KEIPO Housewares"
            loading="eager"
            style={{
              width: 'clamp(64px, min(6vw, 10vh), 120px)',
              height: 'auto',
              display: 'block',
              borderRadius: 20,
              opacity: 0.95,
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))',
              pointerEvents: 'none',
            }}
          />
        </SectionReveal>

        <div style={{ maxWidth: 760 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={eyebrowShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={revealSpring}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 100,
              padding: '6px 16px 6px 10px',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.9)',
              textTransform: 'uppercase',
              marginBottom: 'clamp(14px, 3vh, 28px)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%' }} />
            Precision Since 1988
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={headlineShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={revealSpring}
            style={{
              fontSize: 'clamp(40px, min(7vw, 11vh), 96px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              color: '#fff',
              textWrap: 'balance',
              marginBottom: 'clamp(12px, 2.6vh, 24px)',
              textShadow: '0 4px 40px rgba(0,0,0,0.4)',
            }}
          >
            KEIPO<br />Housewares
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={sloganShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={revealSpring}
            style={{
              fontSize: 'clamp(14px, min(1.4vw, 2.2vh), 19px)',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 500,
              lineHeight: 1.55,
              letterSpacing: '-0.01em',
              maxWidth: 520,
              wordBreak: 'keep-all',
              marginBottom: 'clamp(18px, 3.8vh, 36px)',
              textShadow: '0 2px 20px rgba(0,0,0,0.35)',
            }}
          >
            {t('slogan')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={ctaShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={revealSpring}
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
              marginBottom: 'clamp(20px, 4.4vh, 40px)',
            }}
          >
            <button
              className="apple-button-primary"
              style={{
                padding: 'clamp(11px, 1.8vh, 16px) clamp(24px, 3vw, 36px)',
                fontSize: 'clamp(14px, 1.7vh, 16px)',
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
                padding: 'clamp(11px, 1.8vh, 16px) clamp(18px, 2vw, 24px)',
                fontSize: 'clamp(14px, 1.7vh, 16px)',
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
              {t('explore')} <ChevronRight size={16} strokeWidth={2.5} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={heritageShown ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={revealSpring}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ flex: '0 0 32px', height: 1, background: 'currentColor' }} />
            Est. 1988 · Seoul, Korea
          </motion.div>
        </div>
      </div>
    </ScrollVideo>
  );
};
