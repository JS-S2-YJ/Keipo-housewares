'use client';

import { Globe2, Package, Mail, ChevronRight, ArrowRight, Ship, BarChart3, TrendingUp, Anchor } from 'lucide-react';
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.03em' }}>KEIPO</span>
            <div className="hidden md:flex" style={{ display: 'flex', gap: '24px', fontSize: '13px', fontWeight: '500', color: '#86868b' }}>
              <a href="#history" style={{ textDecoration: 'none', color: 'inherit' }}>History</a>
              <a href="#logistics" style={{ textDecoration: 'none', color: 'inherit' }}>Logistics</a>
              <a href="#categories" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '2px', background: '#f5f5f7', padding: '2px', borderRadius: '20px' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '16px',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  backgroundColor: lang === l.code ? 'white' : 'transparent',
                  color: lang === l.code ? '#1d1d1f' : '#86868b',
                  boxShadow: lang === l.code ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '160px', overflow: 'hidden' }}>
        <SectionReveal>
          <h1 className="hero-title">{t('title')}</h1>
          <p style={{ fontSize: 'clamp(18px, 4vw, 28px)', color: '#86868b', fontWeight: '500', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.3', padding: '0 20px' }}>
            {t('slogan')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="apple-button-primary" style={{ padding: '12px 32px' }}>{t('experience')}</button>
            <button className="apple-button-secondary">{t('explore')} <ChevronRight size={20} /></button>
          </div>
        </SectionReveal>
      </section>

      {/* History Section */}
      <section id="history" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <div className="grid-stack" style={{ alignItems: 'center' }}>
            <SectionReveal>
              <span style={{ color: '#0066cc', fontWeight: '700', fontSize: '12px', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>ESTABLISHED 2006</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>{t('history')}</h2>
              <p style={{ fontSize: '19px', lineHeight: '1.5', color: '#86868b', marginBottom: '32px', fontWeight: '500' }}>
                A bridge between manufacturers and global wholesale markets. Two decades of refined logistics.
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div style={{ fontSize: '40px', fontWeight: 'bold' }}>24+</div>
                  <div style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>SHIPMENTS</div>
                </div>
                <div>
                  <div style={{ fontSize: '40px', fontWeight: 'bold' }}>17+</div>
                  <div style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>YEARS</div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div style={{ backgroundColor: 'white', borderRadius: '40px', padding: '15% 10%', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                <Globe2 size={120} color="#f5f5f7" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="logistics" className="section-padding">
        <div className="max-container" style={{ flexDirection: 'column' }}>
          <SectionReveal style={{ marginBottom: '48px', textAlign: 'center' }}>
            <span style={{ color: '#0066cc', fontWeight: '700', fontSize: '12px', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>TRADING INSIGHTS</span>
            <h2 className="section-title">{t('mainRoutes')}</h2>
          </SectionReveal>

          <div className="grid-stack" style={{ gridTemplateColumns: '1fr' }}>
            <div className="grid-stack" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <SectionReveal delay={0.1}>
                <div className="apple-card">
                  <Anchor size={28} color="#0066cc" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>Primary Hubs</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e5e7', paddingBottom: '12px' }}>
                      <span style={{ color: '#86868b', fontSize: '14px' }}>Origin</span>
                      <span style={{ fontWeight: '600', fontSize: '14px' }}>KR / CN</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e5e7', paddingBottom: '12px' }}>
                      <span style={{ color: '#86868b', fontSize: '14px' }}>Destination</span>
                      <span style={{ fontWeight: '600', fontSize: '14px' }}>USA (CT, CA)</span>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="apple-card">
                  <TrendingUp size={28} color="#0066cc" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Trade Velocity</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px', marginTop: '10px' }}>
                    {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                      <div key={i} style={{ flex: 1, backgroundColor: i === 6 ? '#0066cc' : '#e5e5e7', height: `${h}%`, borderRadius: '3px' }} />
                    ))}
                  </div>
                  <p style={{ fontSize: '10px', color: '#86868b', marginTop: '16px', fontWeight: 'bold' }}>OPERATIONS // 2006-2026</p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="apple-card">
                  <BarChart3 size={28} color="#0066cc" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>Top Partners</h3>
                  <p style={{ fontSize: '15px', color: '#86868b', lineHeight: '1.5', fontWeight: '500' }}>
                    Strategic supply chain integration with major US distributors.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>{t('categories')}</h2>
            <p style={{ fontSize: '17px', color: '#86868b', fontWeight: '500' }}>Verified Commodities</p>
          </SectionReveal>
          
          <div className="grid-stack" style={{ width: '100%' }}>
            {[
              { title: 'Brewing Systems', desc: 'Double Coffee Brewers and extraction equipment.' },
              { title: 'Smoking Gear', desc: 'Stovetop Smokers and patented wood chip systems.' },
              { title: 'Culinary Hardware', desc: 'Stainless Steel Cookers and precision tools.' }
            ].map((cat, idx) => (
              <SectionReveal key={cat.title} delay={idx * 0.1}>
                <div className="apple-card" style={{ backgroundColor: 'white', minHeight: '320px' }}>
                  <div>
                    <Package size={32} style={{ marginBottom: '24px' }} />
                    <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '-0.02em' }}>{cat.title}</h3>
                    <p style={{ fontSize: '16px', color: '#86868b', lineHeight: '1.4', fontWeight: '500' }}>{cat.desc}</p>
                  </div>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#f5f5f7', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginTop: '32px'
                  }}>
                    <ArrowRight size={20} />
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
            <h2 style={{ fontSize: 'clamp(48px, 10vw, 80px)', fontWeight: 'bold', letterSpacing: '-0.04em', marginBottom: '32px', lineHeight: '1' }}>Let's connect.</h2>
            <p style={{ fontSize: 'clamp(18px, 4vw, 24px)', color: '#86868b', marginBottom: '48px', fontWeight: '500' }}>Experience global trading, reimagined.</p>
            
            <button 
              className="apple-button-primary" 
              style={{ backgroundColor: 'white !important', color: 'black !important', padding: '18px 40px !important', fontSize: '18px !important' }}
              onClick={() => window.location.href = 'mailto:contact@keipo.com'}
            >
              {t('contact')}
            </button>
            
            <div style={{ marginTop: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', color: '#86868b', fontSize: '13px', fontWeight: '600' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> CONTACT@KEIPO.COM</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe2 size={16} /> {t('location').toUpperCase()}</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer style={{ padding: '48px 20px', borderTop: '1px solid #f5f5f7' }}>
        <div className="max-container" style={{ fontSize: '11px', color: '#86868b', fontWeight: '700', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div>© 2026 KEIPO HOUSEWARES. ALL RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>PRIVACY POLICY</span>
            <span>TERMS OF USE</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
