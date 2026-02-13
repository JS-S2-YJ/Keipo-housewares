'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ESTABLISHED_YEAR } from '@/lib/constants';

// Layout & Sections
import { Navbar } from '@/components/layout/Navbar';
import { SideDrawer } from '@/components/layout/SideDrawer';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { HistorySection } from '@/components/sections/HistorySection';
import { LogisticsSection } from '@/components/sections/LogisticsSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const { t, lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const yearsActiveCount = currentYear - ESTABLISHED_YEAR;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isDrawerOpen]);

  if (!mounted) return <div style={{ background: 'white', minHeight: '100vh' }} />;

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const getHistoryText = () => {
    if (lang === 'ko' || lang === 'cn' || lang === 'jp') return `${yearsActiveCount}${t('history')}`;
    return `${yearsActiveCount} ${t('history')}`;
  };

  const getSinceText = () => {
    if (lang === 'ko' || lang === 'jp') return `${ESTABLISHED_YEAR}${t('since')}`;
    if (lang === 'cn') return `${t('since')}${ESTABLISHED_YEAR} 年`;
    return `${t('since')} ${ESTABLISHED_YEAR}`;
  };

  return (
    <main style={{ opacity: 1, transition: 'opacity 0.5s ease', width: '100%', overflowX: 'hidden' }}>
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={toggleDrawer} 
        lang={lang} 
        setLang={setLang} 
        t={t} 
      />
      
      <Navbar 
        lang={lang} 
        onMenuClick={toggleDrawer} 
        t={t} 
      />

      <HeroSection t={t} />

      <HistorySection 
        t={t} 
        yearsActiveCount={yearsActiveCount} 
        historyText={getHistoryText()} 
        sinceText={getSinceText()} 
      />

      <LogisticsSection 
        t={t} 
        currentYear={currentYear} 
      />

      <CategorySection t={t} />

      <ContactSection t={t} />

      <Footer 
        currentYear={currentYear} 
        t={t} 
      />
    </main>
  );
}
