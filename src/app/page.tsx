'use client';

import { Globe2, Monitor, Package, History, Mail, ExternalLink, ChevronRight, Languages } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';
import CyberClock from '@/components/CyberClock';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/translations';

export default function Home() {
  const { t, lang, setLang } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' },
    { code: 'de', label: 'DE' },
    { code: 'cn', label: 'CN' },
    { code: 'jp', label: 'JP' },
    { code: 'in', label: 'IN' },
  ];

  return (
    <main className="min-h-screen bg-cyber-black text-white selection:bg-cyber-cyan/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="w-8 h-8 bg-cyber-cyan/20 border border-cyber-cyan flex items-center justify-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="font-black text-cyber-cyan text-xs">K</span>
            </div>
            <span className="font-bold tracking-tighter text-lg neon-text-cyan">KEIPO</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.2em] uppercase font-medium text-white/40">
            <a href="#history" className="hover:text-cyber-cyan transition-colors">01 // History</a>
            <a href="#categories" className="hover:text-cyber-cyan transition-colors">02 // Categories</a>
            <a href="#contact" className="hover:text-cyber-cyan transition-colors">03 // Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/5 p-1 rounded-sm border border-white/10" style={{ display: 'flex', gap: '2px' }}>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 text-[9px] font-bold transition-all duration-300 ${
                    lang === l.code 
                      ? 'bg-cyber-cyan text-black shadow-[0_0_10px_rgba(0,243,255,0.5)]' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 blur-[120px] rounded-full" />
        </div>
        
        <SectionReveal className="z-10 max-w-4xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] tracking-[0.2em] uppercase mb-8" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Monitor size={12} />
            Transmission Established // 2006-2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent break-keep">
            {t('title').toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/60 tracking-widest mb-12 max-w-2xl mx-auto" style={{ margin: '0 auto 48px' }}>
            {t('slogan')}
          </p>
          <div className="flex gap-4 justify-center" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button className="cyber-button-primary group px-8 py-4 bg-cyber-cyan text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              {t('experience')} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 hover:border-white/30 transition-all font-bold uppercase tracking-widest text-xs">
              {t('explore')}
            </button>
          </div>
        </SectionReveal>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <CyberClock />
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <SectionReveal>
              <div className="text-cyber-cyan font-mono text-xs mb-4 flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <History size={14} /> 01 // LEGACY
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                {t('history')}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Since 2006, KEIPO Housewares has been the bridge between global manufacturers and wholesale markets. Two decades of expertise in international logistics and high-volume trade.
              </p>
              <div className="flex gap-4">
                <div className="glass p-4 border-cyber-cyan/20">
                  <div className="text-2xl font-bold text-cyber-cyan">20+</div>
                  <div className="text-[10px] text-white/40 uppercase">Years</div>
                </div>
                <div className="glass p-4 border-cyber-purple/20">
                  <div className="text-2xl font-bold text-cyber-purple">500+</div>
                  <div className="text-[10px] text-white/40 uppercase">Partners</div>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 border border-cyber-cyan/20 rotate-3 translate-x-4 translate-y-4" />
                <div className="absolute inset-0 border border-cyber-purple/20 -rotate-3 -translate-x-4 -translate-y-4" />
                <div className="absolute inset-0 glass flex items-center justify-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Globe2 size={120} className="text-cyber-cyan/20 animate-pulse" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="mb-20 text-center" style={{ textAlign: 'center' }}>
            <div className="text-cyber-cyan font-mono text-xs mb-4">02 // PORTFOLIO</div>
            <h2 className="text-4xl font-bold tracking-tight">{t('categories')}</h2>
          </SectionReveal>
          
          <div className="grid md:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {['Kitchenware', 'Dining', 'Smart Living'].map((cat, idx) => (
              <SectionReveal key={cat} delay={idx * 0.1}>
                <div className="group relative overflow-hidden glass p-8 hover:bg-cyber-cyan/[0.05] transition-colors border-white/5 hover:border-cyber-cyan/30">
                  <Package className="text-cyber-cyan mb-6" size={32} />
                  <h3 className="text-xl font-bold mb-4">{cat}</h3>
                  <p className="text-white/40 text-sm mb-6">High-performance industrial grade materials for the modern lifestyle.</p>
                  <div className="w-full h-px bg-white/10 group-hover:bg-cyber-cyan/50 transition-colors" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HQ */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="glass p-12 md:p-20 relative overflow-hidden border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
              <div>
                <div className="text-cyber-cyan font-mono text-[10px] tracking-[0.2em] mb-4 uppercase">03 // CONNECTION</div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter italic">READY TO<br/>TRANSACT?</h2>
                <p className="text-white/40 mb-8 max-w-sm">Connect with our global distribution network. Headquarters operational in KST timezone.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-white/60">
                    <Mail size={18} className="text-cyber-cyan" />
                    <span>contact@keipo.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/60">
                    <Globe2 size={18} className="text-cyber-cyan" />
                    <span>{t('location')}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="w-full py-6 border border-white/10 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/5 transition-all text-left px-8 group flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-bold tracking-widest text-xs uppercase">{t('contact')}</span>
                  <ExternalLink size={16} className="text-white/20 group-hover:text-cyber-cyan transition-colors" />
                </button>
                <div className="text-[9px] text-white/20 uppercase tracking-[0.3em] text-center mt-4">
                  All rights reserved © 2006-2026 KEIPO Housewares
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
