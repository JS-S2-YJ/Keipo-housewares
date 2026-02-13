'use client';

import { Globe2, Package, Mail, ChevronRight, ArrowRight, BarChart3, TrendingUp, Anchor, X } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/translations';
import { useEffect, useState } from 'react';
import { ESTABLISHED_YEAR } from '@/lib/constants';

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
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'de', label: 'Deutsch' },
    { code: 'cn', label: '中文' },
    { code: 'jp', label: '日本語' },
    { code: 'in', label: 'हिन्दी' },
  ];

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
      <div className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`} onClick={toggleDrawer} />

      <div className={`side-drawer ${isDrawerOpen ? 'active' : ''}`}>
        <button onClick={toggleDrawer} style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: 'none', cursor: 'pointer', color: '#86868b' }}>
          <X size={28} />
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#0066cc', letterSpacing: '0.15em' }}>NAVIGATE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '22px', fontWeight: '700' }}>
            <a href="#history" onClick={toggleDrawer} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navHistory')}</a>
            <a href="#logistics" onClick={toggleDrawer} style={{ textDecoration: 'none', color: '#1d1d1f' }}>Logistics</a>
            <a href="#categories" onClick={toggleDrawer} style={{ textDecoration: 'none', color: '#1d1d1f' }}>{t('navProducts')}</a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '32px' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', color: '#0066cc', letterSpacing: '0.15em' }}>REGIONAL SETTINGS</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); toggleDrawer(); }}
                style={{
                  border: lang === l.code ? '2px solid #0066cc' : '1px solid #f2f2f2',
                  padding: '10px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backgroundColor: lang === l.code ? '#f5faff' : 'white',
                  color: lang === l.code ? '#0066cc' : '#1d1d1f',
                  textAlign: 'left'
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <nav className="nav-glass">
        <div className="max-container" style={{ justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 1, minWidth: 0 }}>
            <span className="logo-3d" style={{ fontSize: 'clamp(15px, 4vw, 22px)', letterSpacing: '-0.04em', whiteSpace: 'nowrap', overflow: 'visible' }}>KEIPO</span>
          </div>
          
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
            <div className="nav-menu-desktop" style={{ gap: '20px', fontSize: '13px', fontWeight: '600', color: '#86868b', marginRight: '12px' }}>
              <a href="#history" style={{ textDecoration: 'none', color: 'inherit' }}>{t('navHistory')}</a>
              <a href="#logistics" style={{ textDecoration: 'none', color: 'inherit' }}>Logistics</a>
              <a href="#categories" style={{ textDecoration: 'none', color: 'inherit' }}>{t('navProducts')}</a>
            </div>

            <button 
              onClick={toggleDrawer}
              style={{
                backgroundColor: '#f5faff',
                color: '#0066cc',
                border: '1px solid #0066cc15',
                padding: '5px 8px',
                borderRadius: '8px',
                fontSize: '10px',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <Globe2 size={11} /> {lang.toUpperCase()}
            </button>

            <div className="menu-button-3d" onClick={toggleDrawer}>
              <div className="menu-bar" style={{ width: '14px' }} />
              <div className="menu-bar" style={{ width: '9px' }} />
              <div className="menu-bar" style={{ width: '14px' }} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '150px', position: 'relative', width: '100%' }}>
        <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: '600px', height: '300px', background: 'radial-gradient(circle, rgba(0, 102, 204, 0.04) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
        
        <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
          <h1 className="hero-title-3d-glow">
            {t('title')}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 4vw, 24px)', color: '#86868b', fontWeight: '500', marginTop: '32px', marginBottom: '32px', maxWidth: '800px', margin: '32px auto', lineHeight: '1.4', padding: '0 20px' }}>
            {t('slogan')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button className="apple-button-primary" style={{ padding: '12px 24px' }}>{t('experience')}</button>
            <button className="apple-button-secondary" style={{ color: '#0066cc', fontWeight: '700', cursor: 'pointer', border: 'none', background: 'none' }}>{t('explore')} <ChevronRight size={18} /></button>
          </div>
        </SectionReveal>
      </section>

      {/* History Section */}
      <section id="history" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ flexDirection: 'column' }}>
          <div className="grid-3">
            <SectionReveal style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div>
                <span style={{ color: '#0066cc', fontWeight: '800', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{getSinceText().toUpperCase()}</span>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>{getHistoryText()}</h2>
                <p style={{ fontSize: '17px', lineHeight: '1.5', color: '#86868b', marginBottom: '28px', fontWeight: '500' }}>
                  {t('historyDesc')}
                </p>
                <div style={{ display: 'flex', gap: '32px' }}>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }}>24+</div>
                    <div style={{ fontSize: '9px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>{t('verifiedShipments')}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{yearsActiveCount}+</div>
                    <div style={{ fontSize: '9px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>{t('yearsActive')}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '32px', width: '100%', padding: '40px', textAlign: 'center', boxShadow: '0 15px 45px rgba(0,0,0,0.03)' }}>
                <Globe2 size={80} color="#f5f5f7" style={{ margin: '0 auto' }} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section id="logistics" className="section-padding" style={{ backgroundColor: '#fbfbfd' }}>
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
                        <div key={i} style={{ flex: 1, backgroundColor: i === 6 ? '#0066cc' : '#f2f2f2', height: `${h}%`, borderRadius: '3px' }} />
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

      {/* Categories Section - Improved Mobile Spacing */}
      <section id="categories" className="section-padding">
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>{t('categories')}</h2>
            <p style={{ fontSize: '15px', color: '#86868b', fontWeight: '500' }}>{t('highVolume')}</p>
          </SectionReveal>
          
          <div className="grid-3">
            {[
              { title: t('brewingTitle'), desc: t('brewingDesc') },
              { title: t('smokingTitle'), desc: t('smokingDesc') },
              { title: t('culinaryTitle'), desc: t('culinaryDesc') }
            ].map((cat, idx) => (
              <SectionReveal key={cat.title} delay={idx * 0.1} style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="apple-card">
                  <div>
                    <Package size={24} style={{ marginBottom: '16px' }} />
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', letterSpacing: '-0.02em' }}>{cat.title}</h3>
                    <p style={{ fontSize: '15px', color: '#86868b', lineHeight: '1.5' }}>{cat.desc}</p>
                  </div>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    <ArrowRight size={16} />
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
          <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: 'clamp(36px, 10vw, 80px)', fontWeight: 'bold', letterSpacing: '-0.04em', marginBottom: '24px', lineHeight: '1' }}>{t('letsConnect')}</h2>
            <button 
              className="apple-button-primary" 
              style={{ backgroundColor: 'white', color: 'black', padding: '16px 32px', fontSize: '17px' }}
              onClick={() => window.location.href = 'mailto:contact@keipo.com'}
            >
              {t('contact')}
            </button>
            <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', color: '#86868b', fontSize: '11px', fontWeight: '700' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mail size={14} /> CONTACT@KEIPO.COM</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Globe2 size={14} /> {t('location').toUpperCase()}</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer style={{ padding: '32px 16px', borderTop: '1px solid #f2f2f2' }}>
        <div className="max-container" style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
          <div>© {currentYear} KEIPO HOUSEWARES. {t('allRights')}</div>
        </div>
      </footer>
    </main>
  );
}
