'use client';

import { useEffect, useState } from 'react';

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
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'auto';
    
    // 메뉴가 열릴 때 history state 추가
    if (isDrawerOpen) {
      window.history.pushState({ drawerOpen: true }, '');
    }

    const handlePopState = () => {
      if (isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => { 
      document.body.style.overflow = 'auto';
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isDrawerOpen]);

  if (!mounted) return <div style={{ background: 'white', minHeight: '100vh' }} />;

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <main style={{ opacity: 1, transition: 'opacity 0.5s ease', width: '100%', overflowX: 'hidden' }}>
      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={closeDrawer} 
      />
      
      <Navbar 
        onMenuClick={toggleDrawer} 
      />

      <HeroSection />

      <HistorySection />

      <LogisticsSection />

      <CategorySection />

      <ContactSection />

      <Footer />
    </main>
  );
}
