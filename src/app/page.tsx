'use client';

import { Globe2, Package, History, Mail, ChevronRight, ArrowRight, Ship, BarChart3, TrendingUp, Anchor } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/translations';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t, lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' },
    { code: 'de', label: 'DE' },
    { code: 'cn', label: 'CN' },
    { code: 'jp', label: 'JP' },
    { code: 'in', label: 'IN' },
  ];

  if (!mounted) return <div style={{ background: 'white', minHeight: '100vh' }} />;

  return (
    <main style={{ opacity: 1, transition: 'opacity 0.5s ease' }}>
      {/* Navigation */}
      <nav className="nav-glass">
        <div className="max-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <span style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.03em' }}>KEIPO</span>
            <div className="hidden md:flex" style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: '500', color: '#86868b' }}>
              <a href="#history" style={{ textDecoration: 'none', color: 'inherit' }}>History</a>
              <a href="#logistics" style={{ textDecoration: 'none', color: 'inherit' }}>Logistics</a>
              <a href="#categories" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a>
              <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '4px', background: '#f5f5f7', padding: '4px', borderRadius: '20px' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  border: 'none',
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  backgroundColor: lang === l.code ? 'white' : 'transparent',
                  color: lang === l.code ? '#1d1d1f' : '#86868b',
                  boxShadow: lang === l.code ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '180px' }}>
        <SectionReveal>
          <h1 className="hero-title">{t('title')}</h1>
          <p style={{ fontSize: '28px', color: '#86868b', fontWeight: '500', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
            {t('slogan')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <button className="apple-button-primary">{t('experience')}</button>
            <button className="apple-button-secondary">{t('explore')} <ChevronRight size={20} /></button>
          </div>
        </SectionReveal>
      </section>

      {/* History Section - Updated with Real Data */}
      <section id="history" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <SectionReveal>
            <span style={{ color: '#0066cc', fontWeight: '600', fontSize: '14px', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>ESTABLISHED 2006</span>
            <h2 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '32px', letterSpacing: '-0.02em' }}>{t('history')}</h2>
            <p style={{ fontSize: '21px', lineHeight: '1.5', color: '#86868b', marginBottom: '40px' }}>
              Specializing in the cross-border distribution of premium kitchenware and outdoor equipment, KEIPO has maintained strategic hubs in Seoul and China for nearly two decades.
            </p>
            <div style={{ display: 'flex', gap: '60px' }}>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 'bold' }}>24+</div>
                <div style={{ fontSize: '12px', color: '#86868b', fontWeight: 'bold', marginTop: '4px' }}>VERIFIED SHIPMENTS</div>
              </div>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 'bold' }}>17+</div>
                <div style={{ fontSize: '12px', color: '#86868b', fontWeight: 'bold', marginTop: '4px' }}>YEARS ACTIVE</div>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div style={{ backgroundColor: 'white', borderRadius: '50px', padding: '60px', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
              <Globe2 size={160} color="#f5f5f7" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Global Reach Section - NEW (ImportGenius Inspired) */}
      <section id="logistics" className="section-padding">
        <div className="max-container" style={{ flexDirection: 'column' }}>
          <SectionReveal style={{ marginBottom: '80px' }}>
            <span style={{ color: '#0066cc', fontWeight: '600', fontSize: '14px', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>TRADING INSIGHTS</span>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>{t('mainRoutes')}</h2>
          </SectionReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <SectionReveal delay={0.1}>
              <div className="apple-card" style={{ height: 'auto', minHeight: '300px' }}>
                <Anchor size={32} color="#0066cc" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Primary Hubs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e5e7', paddingBottom: '12px', marginBottom: '12px' }}>
                    <span style={{ color: '#86868b' }}>Origin</span>
                    <span style={{ fontWeight: '600' }}>South Korea / China</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e5e7', paddingBottom: '12px' }}>
                    <span style={{ color: '#86868b' }}>Destination</span>
                    <span style={{ fontWeight: '600' }}>USA (CT, CA)</span>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="apple-card" style={{ height: 'auto', minHeight: '300px' }}>
                <TrendingUp size={32} color="#0066cc" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Trade Velocity</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', marginTop: '20px' }}>
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, backgroundColor: i === 6 ? '#0066cc' : '#e5e5e7', height: `${h}%`, borderRadius: '4px' }} />
                  ))}
                </div>
                <p style={{ fontSize: '12px', color: '#86868b', marginTop: '16px', fontWeight: 'bold' }}>VERIFIED OPERATIONS // 2006-2026</p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="apple-card" style={{ height: 'auto', minHeight: '300px' }}>
                <BarChart3 size={32} color="#0066cc" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Top Partners</h3>
                <p style={{ fontSize: '16px', color: '#86868b', lineHeight: '1.6' }}>
                  Strategic supply chain integration with major US distributors including <strong>Camerons Products LLC</strong> and <strong>SCS Direct Inc.</strong>
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Categories Section - Updated with Real Commodities */}
      <section id="categories" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '56px', fontWeight: 'bold', marginBottom: '16px' }}>{t('categories')}</h2>
            <p style={{ fontSize: '21px', color: '#86868b' }}>High-Volume Verified Commodities</p>
          </SectionReveal>
          
          <div className="grid-3">
            {[
              { title: 'Brewing Systems', desc: 'Double Coffee Brewers and professional extraction equipment.' },
              { title: 'Smoking Gear', desc: 'Stovetop Smokers and patented wood chip sample systems.' },
              { title: 'Culinary Hardware', desc: 'Stainless Steel Cookers and precision meat mincers.' }
            ].map((cat, idx) => (
              <SectionReveal key={cat.title} delay={idx * 0.1}>
                <div className="apple-card" style={{ backgroundColor: 'white' }}>
                  <div>
                    <Package size={40} style={{ marginBottom: '32px' }} />
                    <h3 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>{cat.title}</h3>
                    <p style={{ fontSize: '18px', color: '#86868b', lineHeight: '1.4' }}>{cat.desc}</p>
                  </div>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    backgroundColor: '#f5f5f7', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginTop: '40px'
                  }}>
                    <ArrowRight size={24} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding" style={{ backgroundColor: '#1d1d1f', color: 'white', textAlign: 'center' }}>
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal>
            <h2 style={{ fontSize: '80px', fontWeight: 'bold', letterSpacing: '-0.04em', marginBottom: '40px' }}>Let's connect.</h2>
            <p style={{ fontSize: '24px', color: '#86868b', marginBottom: '64px' }}>Experience global trading, reimagined.</p>
            
            <button 
              className="apple-button-primary" 
              style={{ backgroundColor: 'white !important', color: 'black !important', padding: '20px 48px !important', fontSize: '20px !important' }}
              onClick={() => window.location.href = 'mailto:contact@keipo.com'}
            >
              {t('contact')}
            </button>
            
            <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', gap: '40px', color: '#86868b', fontSize: '14px', fontWeight: '600' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> CONTACT@KEIPO.COM</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe2 size={16} /> {t('location').toUpperCase()}</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer style={{ padding: '60px 24px', borderTop: '1px solid #f5f5f7' }}>
        <div className="max-container" style={{ fontSize: '12px', color: '#86868b', fontWeight: '600' }}>
          <div>© 2026 KEIPO Housewares. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
