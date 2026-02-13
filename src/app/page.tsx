'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { SectionReveal } from '@/components/SectionReveal';
import { CyberClock } from '@/components/CyberClock';
import { Language } from '@/translations';
import { 
  Globe2, 
  History, 
  Package, 
  MapPin, 
  ChevronRight,
  Monitor
} from 'lucide-react';

export default function Home() {
  const { lang, setLang, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'cn', label: 'CN' },
    { code: 'jp', label: 'JP' },
    { code: 'in', label: 'IN' },
  ];

  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cyber-cyan/20 border border-cyber-cyan flex items-center justify-center">
              <span className="font-black text-cyber-cyan text-xs">K</span>
            </div>
            <span className="font-bold tracking-tighter text-lg neon-text-cyan">KEIPO</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`cursor-pointer mx-1 px-3 py-1.5 text-[10px] font-bold tracking-widest transition-all duration-300 border uppercase`}
                  style={{ 
                    minWidth: '40px',
                    backgroundColor: lang === l.code ? 'var(--cyber-cyan)' : 'transparent',
                    color: lang === l.code ? '#000000' : 'rgba(255, 255, 255, 0.4)',
                    borderColor: lang === l.code ? 'var(--cyber-cyan)' : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: lang === l.code ? '0 0 15px rgba(0, 243, 255, 0.3)' : 'none'
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="hidden sm:block border-l border-white/10 pl-6">
              <CyberClock />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-cyber-purple/10 blur-[100px] rounded-full" />
        </div>
        
        <SectionReveal className="z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-[10px] tracking-[0.2em] uppercase mb-8">
            <Monitor size={12} />
            Transmission Established // 2006-2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent break-keep">
            {t('title').toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/60 tracking-widest mb-12 max-w-2xl mx-auto">
            {t('slogan')}
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-cyber-cyan text-black font-bold tracking-tighter hover:bg-white transition-colors flex items-center gap-2 group">
              {t('explore').toUpperCase()}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </SectionReveal>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-px h-12 bg-white" />
        </div>
      </section>

      {/* Trust & History */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-cyber-cyan font-mono text-xs mb-4 flex items-center gap-2">
                <History size={14} /> 01 // LEGACY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                {t('history')}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Since 2006, KEIPO Housewares has been the bridge between global manufacturers and wholesale markets. Two decades of expertise in international logistics and high-volume trade.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-cyber-cyan mb-1">20+</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyber-cyan mb-1">500+</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">Global Partners</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 border border-cyber-cyan/20 rotate-3 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-cyber-purple/20 -rotate-3 -translate-x-4 -translate-y-4" />
              <div className="absolute inset-0 glass flex items-center justify-center">
                <Globe2 size={120} className="text-cyber-cyan/20 animate-pulse" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="mb-20 text-center">
            <div className="text-cyber-cyan font-mono text-xs mb-4">02 // PORTFOLIO</div>
            <h2 className="text-4xl font-bold tracking-tight">{t('categories')}</h2>
          </SectionReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
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
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="glass p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/5 blur-[80px] rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">{t('contact')}</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="text-cyber-cyan shrink-0" />
                    <div>
                      <div className="text-white font-bold mb-1">Seoul Headquarters</div>
                      <div className="text-white/40 text-sm">10th Floor, Estaville 1, Gangseo-gu, Seoul, South Korea</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <History className="text-cyber-cyan shrink-0" />
                    <div>
                      <div className="text-white font-bold mb-1">CEO</div>
                      <div className="text-white/40 text-sm">Lee Chul-hee (이철희)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="p-6 border border-white/10 bg-black/50 font-mono text-[10px] leading-relaxed text-white/40">
                  <div className="text-cyber-cyan mb-2 tracking-widest uppercase tracking-widest">Terminal Output // Status OK</div>
                  &gt; INITIALIZING GLOBAL TRADE SEQUENCE...<br />
                  &gt; ESTABLISHING CONNECTION TO GERMANY, CHINA, JAPAN, INDIA...<br />
                  &gt; SECURITY PROTOCOLS ACTIVE.<br />
                  &gt; KEIPO_SYSTEM_v4.0.1 LOADED SUCCESSFULLY.
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="text-white/20 text-[10px] tracking-[0.5em] uppercase">
          © 2006-2026 KEIPO HOUSEWARES. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </main>
  );
}
