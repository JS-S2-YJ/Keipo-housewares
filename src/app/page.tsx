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
    <main style={{ opacity: 1, transition: 'opacity 0.5s ease' }}>
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
        <div className="max-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left: 3D Logo */}
          <div style={{ display: 'flex', alignItems: 'center', perspective: '500px' }}>
            <span className="logo-3d" style={{ fontSize: 'clamp(18px, 5vw, 24px)', fontWeight: '900', letterSpacing: '-0.05em' }}>
              KEIPO
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            <div className="nav-menu-desktop" style={{ gap: '28px', fontSize: '13px', fontWeight: '600', color: '#86868b', marginRight: '20px' }}>
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
                padding: '6px 12px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <Globe2 size={14} /> {lang.toUpperCase()}
            </button>

            <div className="menu-button-3d" onClick={toggleDrawer}>
              <div className="menu-bar" style={{ width: '18px' }} />
              <div className="menu-bar" style={{ width: '12px' }} />
              <div className="menu-bar" style={{ width: '18px' }} />
            </div>
          </div>
        </div>
      </nav>

      <section className="section-padding" style={{ textAlign: 'center', paddingTop: '150px' }}>
        <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="hero-title">{t('title')}</h1>
          <p style={{ fontSize: 'clamp(18px, 4.5vw, 26px)', color: '#86868b', fontWeight: '500', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.3', padding: '0 10px' }}>
            {t('slogan')}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button className="apple-button-primary" style={{ padding: '12px 30px' }}>{t('experience')}</button>
            <button className="apple-button-secondary" style={{ color: '#0066cc', fontWeight: '700', cursor: 'pointer', border: 'none', background: 'none' }}>{t('explore')} <ChevronRight size={18} /></button>
          </div>
        </SectionReveal>
      </section>

      <section id="history" className="section-padding" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="max-container" style={{ flexDirection: 'column', gap: '48px' }}>
          <div className="grid-stack" style={{ gap: '48px', alignItems: 'stretch' }}>
            <SectionReveal style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div>
                <span style={{ color: '#0066cc', fontWeight: '800', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{getSinceText().toUpperCase()}</span>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>{getHistoryText()}</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.5', color: '#86868b', marginBottom: '28px', fontWeight: '500' }}>
                  {t('historyDesc')}
                </p>
                <div style={{ display: 'flex', gap: '32px' }}>
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 'bold' }}>24+</div>
                    <div style={{ fontSize: '9px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>{t('verifiedShipments')}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '36px', fontWeight: 'bold' }}>{yearsActiveCount}+</div>
                    <div style={{ fontSize: '9px', color: '#86868b', fontWeight: '800', marginTop: '4px', letterSpacing: '0.05em' }}>{t('yearsActive')}</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ backgroundColor: 'white', borderRadius: '32px', width: '100%', padding: '15% 10%', textAlign: 'center', boxShadow: '0 15px 45px rgba(0,0,0,0.03)' }}>
                <Globe2 size={100} color="#f5f5f7" style={{ margin: '0 auto' }} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section id="logistics" className="section-padding" style={{ backgroundColor: '#fbfbfd' }}>
        <div className="max-container" style={{ flexDirection: 'column' }}>
          <SectionReveal style={{ marginBottom: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#0066cc', fontWeight: '800', fontSize: '11px', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>{t('tradeInsights')}</span>
            <h2 className="section-title">{t('mainRoutes')}</h2>
          </SectionReveal>

          <div className="perspective-container">
            <div className="grid-3" style={{ gap: '32px' }}>
              <SectionReveal delay={0.1} style={{ display: 'flex' }}>
                <div className="three-d-card" style={{ padding: '40px', width: '100%', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Anchor size={28} color="#0066cc" style={{ marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px' }}>{t('primaryHubs')}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8f8f8', paddingBottom: '10px' }}>
                        <span style={{ color: '#86868b', fontSize: '14px' }}>{t('origin')}</span>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>KR / CN</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f8f8f8', paddingBottom: '10px' }}>
                        <span style={{ color: '#86868b', fontSize: '14px' }}>{t('destination')}</span>
                        <span style={{ fontWeight: '600', fontSize: '14px' }}>USA (CT, CA)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2} style={{ display: 'flex' }}>
                <div className="three-d-card" style={{ padding: '40px', width: '100%', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <TrendingUp size={28} color="#0066cc" style={{ marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>{t('tradeVelocity')}</h3>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '7px', height: '80px', marginTop: '20px' }}>
                      {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                        <div key={i} style={{ flex: 1, backgroundColor: i === 6 ? '#0066cc' : '#f2f2f2', height: `${h}%`, borderRadius: '3px' }} />
                      ))}
                    </div>
                    <p style={{ fontSize: '10px', color: '#86868b', marginTop: '16px', fontWeight: '800', letterSpacing: '0.05em' }}>{t('verifiedBy')} // {ESTABLISHED_YEAR}-{currentYear}</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3} style={{ display: 'flex' }}>
                <div className="three-d-card" style={{ padding: '40px', width: '100%', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <BarChart3 size={28} color="#0066cc" style={{ marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>{t('topPartners')}</h3>
                    <p style={{ fontSize: '15px', color: '#86868b', lineHeight: '1.6', fontWeight: '500' }}>
                      {t('partnerDesc')}
                    </p>
                  </div>
                  <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '8px', color: '#0066cc', fontSize: '13px', fontWeight: '700' }}>
                    {t('viewNetwork')} <ArrowRight size={16} />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="section-padding">
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal style={{ textAlign: 'center', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="section-title" style={{ marginBottom: '10px' }}>{t('categories')}</h2>
            <p style={{ fontSize: '16px', color: '#86868b', fontWeight: '500' }}>{t('highVolume')}</p>
          </SectionReveal>
          
          <div className="grid-3" style={{ gap: '24px', width: '100%' }}>
            {[
              { title: t('brewingTitle'), desc: t('brewingDesc') },
              { title: t('smokingTitle'), desc: t('smokingDesc') },
              { title: t('culinaryTitle'), desc: t('culinaryDesc') }
            ].map((cat, idx) => (
              <SectionReveal key={cat.title} delay={idx * 0.1} style={{ display: 'flex' }}>
                <div className="apple-card" style={{ backgroundColor: '#f5f5f7', width: '100%', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Package size={28} style={{ marginBottom: '20px' }} />
                    <h3 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '12px', letterSpacing: '-0.02em' }}>{cat.title}</h3>
                    <p style={{ fontSize: '16px', color: '#86868b', lineHeight: '1.5' }}>{cat.desc}</p>
                  </div>
                  <div style={{ width: '44px', height: '44px', backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '28px' }}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding" style={{ backgroundColor: '#1d1d1f', color: 'white', textAlign: 'center' }}>
        <div className="max-container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <SectionReveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ fontSize: 'clamp(44px, 10vw, 80px)', fontWeight: 'bold', letterSpacing: '-0.04em', marginBottom: '28px', lineHeight: '1' }}>{t('letsConnect')}</h2>
            <button 
              className="apple-button-primary" 
              style={{ backgroundColor: 'white', color: 'black', padding: '18px 40px', fontSize: '18px' }}
              onClick={() => window.location.href = 'mailto:contact@keipo.com'}
            >
              {t('contact')}
            </button>
            <div style={{ marginTop: '56px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '28px', color: '#86868b', fontSize: '12px', fontWeight: '700' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> CONTACT@KEIPO.COM</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe2 size={16} /> {t('location').toUpperCase()}</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer style={{ padding: '40px 16px', borderTop: '1px solid #f2f2f2' }}>
        <div className="max-container" style={{ fontSize: '10px', color: '#86868b', fontWeight: '800', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
          <div>© {currentYear} KEIPO HOUSEWARES. {t('allRights')}</div>
        </div>
      </footer>
    </main>
  );
}
