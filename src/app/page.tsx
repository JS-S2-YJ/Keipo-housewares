'use client';

import { Globe2, Package, Mail, ChevronRight, ArrowRight, BarChart3, TrendingUp, Anchor } from 'lucide-react';
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
    { code: 'tr', label: 'TR' },
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
        <div className="max-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.03em' }}>KEIPO</span>
            <div className="hidden md:flex" style={{ display: 'flex', gap: '24px', fontSize: '13px', fontWeight: '500', color: '#86868b' }}>
              <a href="#history" style={{ textDecoration: 'none', color: 'inherit' }}>{t('history').split(' ')[0]}</a>
              <a href="#logistics" style={{ textDecoration: 'none', color: 'inherit' }}>Logistics</a>
              <a href="#categories" style={{ textDecoration: 'none', color: 'inherit' }}>{t('categories').split(' ')[0]}</a>
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
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '160px' }}>
        <SectionReveal>
          <h1 className="hero-title">{t('title')}</h1>
          <p style={{ fontSize: 'clamp(18px, 4vw, 28px)', color: '#86868b', fontWeight: '500', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.3' }}>
            {t('slogan')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="apple-button-primary">{t('experience')}</button>
            <button className="apple-button-secondary" style={{ color: '#0066cc', fontWeight: 'bold', cursor: 'pointer', border: 'none', background: 'none' }}>{t('explore')} <ChevronRight size={20} /></button>
          </div>
        </SectionReveal>
      </section>

      {/* History Section */}
      <section id="history" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <div className="grid-stack" style={{ alignItems: 'center' }}>
            <SectionReveal>
              <span style={{ color: '#0066cc', fontWeight: '700', fontSize: '12px', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>{t('since').toUpperCase()}</span>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>{t('history')}</h2>
              <p style={{ fontSize: '19px', lineHeight: '1.5', color: '#86868b', marginBottom: '32px', fontWeight: '500' }}>
                {t('historyDesc')}
              </p>
              <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                  <div style={{ fontSize: '40px', fontWeight: 'bold' }}>24+</div>
                  <div style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>{t('verifiedShipments')}</div>
                </div>
                <div>
                  <div style={{ fontSize: '40px', fontWeight: 'bold' }}>38+</div>
                  <div style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>{t('yearsActive')}</div>
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
      <section id="logistics" className="section-padding" style={{ backgroundColor: '#fbfbfd' }}>
        <div className="max-container" style={{ flexDirection: 'column' }}>
          <SectionReveal style={{ marginBottom: '64px', textAlign: 'center' }}>
            <span style={{ color: '#0066cc', fontWeight: '700', fontSize: '12px', letterSpacing: '0.12em', display: 'block', marginBottom: '16px' }}>{t('tradeInsights')}</span>
            <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: '700', letterSpacing: '-0.02em' }}>{t('mainRoutes')}</h2>
          </SectionReveal>

          <div className="perspective-container">
            <div className="grid-3">
              <SectionReveal delay={0.1}>
                <div className="three-d-card" style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Anchor size={32} color="#0066cc" style={{ marginBottom: '24px' }} />
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>{t('primaryHubs')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f2f2f2', paddingBottom: '12px' }}>
                        <span style={{ color: '#86868b', fontSize: '15px' }}>{t('origin')}</span>
                        <span style={{ fontWeight: '600', fontSize: '15px' }}>KR / CN</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f2f2f2', paddingBottom: '12px' }}>
                        <span style={{ color: '#86868b', fontSize: '15px' }}>{t('destination')}</span>
                        <span style={{ fontWeight: '600', fontSize: '15px' }}>USA (CT, CA)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="three-d-card" style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <TrendingUp size={32} color="#0066cc" style={{ marginBottom: '24px' }} />
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{t('tradeVelocity')}</h3>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', marginTop: '24px' }}>
                      {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                        <div key={i} style={{ flex: 1, backgroundColor: i === 6 ? '#0066cc' : '#f2f2f2', height: `${h}%`, borderRadius: '4px' }} />
                      ))}
                    </div>
                    <p style={{ fontSize: '11px', color: '#86868b', marginTop: '20px', fontWeight: '700', letterSpacing: '0.05em' }}>{t('verifiedBy')} // 1986-2026</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="three-d-card" style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <BarChart3 size={32} color="#0066cc" style={{ marginBottom: '24px' }} />
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{t('topPartners')}</h3>
                    <p style={{ fontSize: '17px', color: '#86868b', lineHeight: '1.6', fontWeight: '500' }}>
                      {t('partnerDesc')}
                    </p>
                  </div>
                  <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0066cc', fontSize: '14px', fontWeight: '600' }}>
                    {t('viewNetwork')} <ArrowRight size={16} />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="section-padding">
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(32px, 8vw, 56px)', fontWeight: '700', marginBottom: '12px' }}>{t('categories')}</h2>
            <p style={{ fontSize: '18px', color: '#86868b', fontWeight: '500' }}>{t('highVolume')}</p>
          </SectionReveal>
          
          <div className="grid-3" style={{ width: '100%' }}>
            {[
              { title: t('brewingTitle'), desc: t('brewingDesc') },
              { title: t('smokingTitle'), desc: t('smokingDesc') },
              { title: t('culinaryTitle'), desc: t('culinaryDesc') }
            ].map((cat, idx) => (
              <SectionReveal key={cat.title} delay={idx * 0.1}>
                <div className="apple-card" style={{ backgroundColor: '#f5f5f7', minHeight: '350px' }}>
                  <div>
                    <Package size={32} style={{ marginBottom: '24px' }} />
                    <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>{cat.title}</h3>
                    <p style={{ fontSize: '17px', color: '#86868b', lineHeight: '1.5' }}>{cat.desc}</p>
                  </div>
                  <div style={{ width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '32px' }}>
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
            <h2 style={{ fontSize: 'clamp(48px, 10vw, 80px)', fontWeight: 'bold', letterSpacing: '-0.04em', marginBottom: '32px', lineHeight: '1' }}>{t('letsConnect')}</h2>
            <p style={{ fontSize: 'clamp(18px, 4vw, 24px)', color: '#86868b', marginBottom: '48px', fontWeight: '500' }}>{t('connectDesc')}</p>
            <button 
              className="apple-button-primary" 
              style={{ backgroundColor: 'white', color: 'black', padding: '20px 48px', fontSize: '20px' }}
              onClick={() => window.location.href = 'mailto:contact@keipo.com'}
            >
              {t('contact')}
            </button>
            <div style={{ marginTop: '64px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', color: '#86868b', fontSize: '13px', fontWeight: '600' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> CONTACT@KEIPO.COM</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe2 size={16} /> {t('location').toUpperCase()}</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer style={{ padding: '48px 20px', borderTop: '1px solid #f2f2f2' }}>
        <div className="max-container" style={{ fontSize: '11px', color: '#86868b', fontWeight: '700', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
          <div>© 2026 KEIPO HOUSEWARES. {t('allRights')}</div>
        </div>
      </footer>
    </main>
  );
}
