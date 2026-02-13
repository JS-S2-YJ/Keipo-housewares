'use client';

import { Globe2, Package, History, Mail, ExternalLink, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/translations';
import { useEffect, useState } from 'react';

export default function Home() {
  const { t, lang, setLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // FOUC 방지: 마운트된 후에만 특정 인터랙션 노출
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

  return (
    <main className={`min-h-screen bg-white transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            <span className="font-bold tracking-tight text-2xl text-apple-black">KEIPO</span>
            <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-apple-gray uppercase tracking-wider">
              <a href="#history" className="hover:text-apple-black transition-colors">History</a>
              <a href="#categories" className="hover:text-apple-black transition-colors">Products</a>
              <a href="#contact" className="hover:text-apple-black transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1 text-[10px] font-bold transition-all rounded-full ${
                  lang === l.code 
                    ? 'bg-white text-apple-black shadow-sm' 
                    : 'text-apple-gray hover:text-apple-black'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-32 px-6 flex flex-col items-center text-center">
        <SectionReveal className="max-w-5xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-10 text-apple-black leading-[0.9]">
            {t('title')}
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-apple-gray tracking-tight mb-16 max-w-3xl mx-auto leading-tight">
            {t('slogan')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
            <button className="apple-button bg-apple-blue text-white hover:bg-[#0077ed] text-lg px-12 py-5">
              {t('experience')}
            </button>
            <button className="apple-button bg-transparent text-apple-blue hover:underline flex items-center gap-2 text-lg font-bold">
              {t('explore')} <ChevronRight size={20} />
            </button>
          </div>
        </SectionReveal>
      </section>

      {/* History Section */}
      <section id="history" className="py-48 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
            <SectionReveal>
              <span className="text-apple-blue font-bold tracking-widest uppercase text-xs mb-6 block">Our Legacy</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-apple-black leading-tight">
                {t('history')}
              </h2>
              <p className="text-xl md:text-2xl text-apple-gray leading-relaxed mb-12 font-medium">
                Since 2006, we've bridged the gap between global manufacturers and wholesale markets through precision and trust.
              </p>
              <div className="flex gap-16">
                <div>
                  <div className="text-5xl font-bold text-apple-black mb-2">20+</div>
                  <div className="text-xs text-apple-gray font-bold uppercase tracking-widest">Years of Trust</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-apple-black mb-2">500+</div>
                  <div className="text-xs text-apple-gray font-bold uppercase tracking-widest">Global Partners</div>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2} className="relative aspect-square">
              <div className="w-full h-full bg-white rounded-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden border border-gray-100">
                <Globe2 size={200} className="text-gray-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/30" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-48 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-apple-black mb-6">
              {t('categories')}
            </h2>
            <p className="text-xl text-apple-gray font-medium uppercase tracking-widest">Premium Selection</p>
          </SectionReveal>
          
          <div className="grid md:grid-cols-3 gap-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {['Kitchenware', 'Dining', 'Smart Living'].map((cat, idx) => (
              <SectionReveal key={cat} delay={idx * 0.1}>
                <div className="apple-card p-16 h-[600px] flex flex-col justify-between group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700">
                  <div>
                    <Package className="text-apple-black mb-10" size={40} />
                    <h3 className="text-4xl font-bold mb-6 tracking-tight">{cat}</h3>
                    <p className="text-xl text-apple-gray font-medium leading-relaxed">Precision-engineered for the modern global lifestyle.</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-apple-black group-hover:text-white transition-all duration-500">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6 bg-apple-black text-white text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionReveal>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-16 leading-[0.85]">
              Let's build<br/>the future.
            </h2>
            <p className="text-2xl md:text-3xl text-apple-gray mb-20 font-medium">
              Operational excellence, global scale.
            </p>
            <div className="flex flex-col items-center gap-10">
              <button className="apple-button bg-white text-apple-black hover:bg-gray-100 text-xl py-6 px-16 shadow-xl">
                {t('contact')}
              </button>
              <div className="flex flex-col md:flex-row gap-12 text-sm font-bold tracking-widest text-apple-gray uppercase">
                <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                  <Mail size={18} /> CONTACT@KEIPO.COM
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                  <Globe2 size={18} /> {t('location').toUpperCase()}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-xs font-bold text-apple-gray uppercase tracking-widest">
            © 2026 KEIPO Housewares. All rights reserved.
          </div>
          <div className="flex gap-10 text-xs font-bold text-apple-gray uppercase tracking-widest">
            <span className="hover:text-apple-black cursor-pointer">Privacy</span>
            <span className="hover:text-apple-black cursor-pointer">Terms</span>
            <span className="hover:text-apple-black cursor-pointer">Network</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
