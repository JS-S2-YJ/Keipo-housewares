'use client';

import { Globe2, Monitor, Package, History, Mail, ExternalLink, ChevronRight, MessageSquare } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';
import { CyberClock } from '@/components/CyberClock';
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
    <main className="min-h-screen bg-cyber-black text-white selection:bg-cyber-cyan/30 cyber-grid">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyber-cyan/10 border border-cyber-cyan flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyber-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="font-black text-cyber-cyan text-sm relative z-10">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tighter text-xl neon-text-cyan leading-none">KEIPO</span>
              <span className="text-[8px] text-cyber-cyan/50 tracking-[0.3em] uppercase">Housewares</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">
            {['history', 'categories', 'contact'].map((item, i) => (
              <a key={item} href={`#${item}`} className="hover:text-cyber-cyan transition-all flex items-center gap-2 group">
                <span className="text-cyber-cyan/30 group-hover:text-cyber-cyan">0{i+1} //</span> {item}
              </a>
            ))}
          </div>

          <div className="flex bg-white/5 p-1 border border-white/10" style={{ display: 'flex', gap: '2px' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 text-[10px] font-black transition-all duration-300 ${
                  lang === l.code 
                    ? 'bg-cyber-cyan text-black' 
                    : 'text-white/30 hover:text-white'
                }`}
                style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-cyan/5 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyber-purple/5 blur-[120px] rounded-full" />
        </div>
        
        <SectionReveal className="z-10 max-w-5xl flex flex-col items-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-cyber-cyan/5 border border-cyber-cyan/30 text-cyber-cyan text-[10px] tracking-[0.4em] uppercase mb-10 neon-border-cyan">
            <div className="w-1.5 h-1.5 bg-cyber-cyan animate-ping rounded-full" />
            Core Protocol Active // v20.06
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            <span className="block text-white">KEIPO</span>
            <span className="block bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple bg-clip-text text-transparent">HOUSEWARES</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/50 tracking-[0.2em] mb-16 max-w-2xl uppercase">
            {t('slogan')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ display: 'flex', gap: '24px' }}>
            <button className="relative px-10 py-5 bg-cyber-cyan text-black font-black uppercase tracking-[0.2em] text-[11px] flex items-center gap-3 transition-transform hover:-translate-y-1 active:scale-95 shadow-[0_0_20px_rgba(0,243,255,0.4)]" style={{ clipPath: 'polygon(0 0, 90% 0, 100% 30%, 100% 100%, 10% 100%, 0 70%)' }}>
              {t('experience')} <ChevronRight size={16} />
            </button>
            <button className="relative px-10 py-5 border border-white/20 hover:border-cyber-cyan text-white font-black uppercase tracking-[0.2em] text-[11px] transition-all hover:bg-white/5" style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
              {t('explore')}
            </button>
          </div>
        </SectionReveal>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <CyberClock />
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-40 px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <SectionReveal>
              <div className="flex items-center gap-3 text-cyber-cyan font-bold text-[10px] tracking-[0.3em] mb-6">
                <div className="w-8 h-px bg-cyber-cyan" /> 01 // ORIGIN
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight italic">
                {t('history').toUpperCase()}
              </h2>
              <p className="text-white/40 text-xl leading-relaxed mb-12 font-light">
                Since 2006, KEIPO Housewares has been the bridge between global manufacturers and wholesale markets. Two decades of expertise in international logistics and high-volume trade.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-6 border-l-2 border-l-cyber-cyan bg-cyber-cyan/5">
                  <div className="text-4xl font-black text-cyber-cyan mb-1">20+</div>
                  <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Years established</div>
                </div>
                <div className="glass p-6 border-l-2 border-l-cyber-purple bg-cyber-purple/5">
                  <div className="text-4xl font-black text-cyber-purple mb-1">500+</div>
                  <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Global Network</div>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2} className="relative">
              <div className="relative aspect-square">
                <div className="absolute inset-0 border border-cyber-cyan/10 rotate-6 translate-x-8 translate-y-8" />
                <div className="absolute inset-0 border border-cyber-purple/10 -rotate-6 -translate-x-8 -translate-y-8" />
                <div className="absolute inset-0 glass flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-cyan/5 animate-pulse" />
                  <Globe2 size={160} className="text-cyber-cyan/20 relative z-10" />
                  <div className="absolute bottom-6 left-6 text-[8px] font-mono text-white/20 tracking-tighter">
                    COORDINATES: 37.5665° N, 126.9780° E
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-40 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="mb-24 flex flex-col items-center text-center">
            <div className="text-cyber-cyan font-bold text-[10px] tracking-[0.4em] mb-4 uppercase">02 // PORTFOLIO</div>
            <h2 className="text-5xl font-black tracking-tight mb-6 italic">{t('categories').toUpperCase()}</h2>
            <div className="w-20 h-1 bg-cyber-cyan" />
          </SectionReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Kitchenware', 'Dining', 'Smart Living'].map((cat, idx) => (
              <SectionReveal key={cat} delay={idx * 0.1}>
                <div className="group relative overflow-hidden glass p-10 hover:bg-cyber-cyan/[0.03] transition-all border-white/5 hover:border-cyber-cyan/40 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-cyber-cyan/5 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-cyber-cyan/20 transition-colors" />
                  <Package className="text-cyber-cyan mb-8" size={40} />
                  <h3 className="text-2xl font-black mb-4 tracking-tighter italic">{cat.toUpperCase()}</h3>
                  <p className="text-white/30 text-sm leading-relaxed mb-8">Industrial grade materials curated for contemporary global markets.</p>
                  <div className="flex items-center gap-2 text-cyber-cyan text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW SPECS <ChevronRight size={12} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - 정비된 본사 문의 버튼 */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="relative p-12 md:p-24 overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyber-purple/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-cyber-cyan font-bold text-[10px] tracking-[0.4em] mb-6 uppercase">03 // CONNECTION</div>
                <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none italic">GET IN<br/><span className="text-cyber-cyan">TOUCH</span></h2>
                <p className="text-white/40 mb-12 text-lg font-light max-w-md">Our global headquarters in Seoul is operational 24/7 for strategic logistics and partnership inquiries.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-5 text-white/60 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyber-cyan group-hover:bg-cyber-cyan/5 transition-all">
                      <Mail size={18} className="group-hover:text-cyber-cyan" />
                    </div>
                    <span className="text-sm tracking-widest group-hover:text-white transition-colors">CONTACT@KEIPO.COM</span>
                  </div>
                  <div className="flex items-center gap-5 text-white/60 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyber-cyan group-hover:bg-cyber-cyan/5 transition-all">
                      <Globe2 size={18} className="group-hover:text-cyber-cyan" />
                    </div>
                    <span className="text-sm tracking-widest group-hover:text-white transition-colors">{t('location').toUpperCase()}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                {/* 본사 문의 버튼 - 스타일 대폭 강화 */}
                <button className="contact-button w-full py-10 px-10 group flex justify-between items-center transition-all">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-cyber-cyan/20 border border-cyber-cyan neon-border-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-all">
                      <MessageSquare size={24} />
                    </div>
                    <div className="text-left">
                      <span className="block text-white font-black tracking-[0.3em] text-sm mb-1 group-hover:text-cyber-cyan transition-colors">{t('contact').toUpperCase()}</span>
                      <span className="block text-white/30 text-[9px] tracking-widest uppercase">Secure Channel Established</span>
                    </div>
                  </div>
                  <ExternalLink size={20} className="text-white/20 group-hover:text-cyber-cyan group-hover:translate-x-1 transition-all" />
                </button>
                
                <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-[9px] text-white/20 uppercase tracking-[0.4em]">
                    © 2006-2026 KEIPO Housewares // Global Trade Core
                  </div>
                  <div className="flex gap-6 text-[9px] text-white/20 uppercase tracking-[0.2em]">
                    <span className="hover:text-cyber-cyan cursor-pointer transition-colors">Privacy</span>
                    <span className="hover:text-cyber-cyan cursor-pointer transition-colors">Terms</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
