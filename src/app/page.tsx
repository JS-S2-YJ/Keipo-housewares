'use client';

import { Globe2, Package, History, Mail, ExternalLink, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionReveal } from '@/components/SectionReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { Language } from '@/translations';

export default function Home() {
  const { t, lang, setLang } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'de', label: 'Deutsch' },
    { code: 'cn', label: '中文' },
    { code: 'jp', label: '日本語' },
    { code: 'in', label: 'हिन्दी' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Universal Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-100 px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-8">
            <span className="font-bold tracking-tight text-xl text-apple-black">KEIPO</span>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-apple-gray">
              <a href="#history" className="hover:text-apple-black transition-colors">History</a>
              <a href="#categories" className="hover:text-apple-black transition-colors">Products</a>
              <a href="#contact" className="hover:text-apple-black transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1 text-xs font-medium transition-all rounded-full ${
                    lang === l.code 
                      ? 'bg-apple-black text-white' 
                      : 'text-apple-gray hover:text-apple-black hover:bg-gray-100'
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center">
        <SectionReveal className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-apple-black">
            {t('title')}
          </h1>
          <p className="text-xl md:text-3xl font-medium text-apple-gray tracking-tight mb-12 max-w-3xl mx-auto leading-tight">
            {t('slogan')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="apple-button bg-apple-blue text-white hover:bg-[#0077ed]">
              {t('experience')}
            </button>
            <button className="apple-button bg-transparent text-apple-blue hover:underline flex items-center gap-1">
              {t('explore')} <ChevronRight size={18} />
            </button>
          </div>
        </SectionReveal>
      </section>

      {/* History Section */}
      <section id="history" className="py-40 px-6 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <span className="text-apple-blue font-semibold mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-apple-black">
                {t('history')}
              </h2>
              <p className="text-lg md:text-xl text-apple-gray leading-relaxed mb-10 font-medium">
                Since 2006, we've built a legacy of trust by connecting world-class manufacturers with global wholesale markets. Two decades of refined logistics, delivered with precision.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-bold text-apple-black mb-1">20+</div>
                  <div className="text-sm text-apple-gray font-medium uppercase tracking-wider text-[11px]">Years</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-apple-black mb-1">500+</div>
                  <div className="text-sm text-apple-gray font-medium uppercase tracking-wider text-[11px]">Partners</div>
                </div>
              </div>
            </SectionReveal>
            
            <SectionReveal delay={0.2} className="relative aspect-square">
              <div className="w-full h-full bg-white rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden">
                <Globe2 size={160} className="text-gray-100 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-apple-black mb-4">
              {t('categories')}
            </h2>
          </SectionReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Kitchenware', 'Dining', 'Smart Living'].map((cat, idx) => (
              <SectionReveal key={cat} delay={idx * 0.1}>
                <div className="apple-card p-12 h-[500px] flex flex-col justify-between group cursor-pointer">
                  <div>
                    <Package className="text-apple-black mb-8" size={32} />
                    <h3 className="text-3xl font-bold mb-4 tracking-tight">{cat}</h3>
                    <p className="text-apple-gray font-medium">Refined materials for modern spaces.</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-apple-black group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 bg-apple-black text-white text-center">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
              Let's work together.
            </h2>
            <p className="text-xl md:text-2xl text-apple-gray mb-16 font-medium">
              Join our global network of excellence.
            </p>
            <div className="flex flex-col items-center gap-8">
              <button className="apple-button bg-white text-apple-black hover:bg-gray-200 text-lg py-5 px-12">
                {t('contact')}
              </button>
              <div className="flex gap-10 text-sm font-medium text-apple-gray">
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                  <Mail size={16} /> contact@keipo.com
                </div>
                <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
                  <Globe2 size={16} /> {t('location')}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm font-medium text-apple-gray">
            Copyright © 2026 KEIPO Housewares. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-apple-gray">
            <span className="hover:text-apple-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-apple-black cursor-pointer">Terms of Use</span>
            <span className="hover:text-apple-black cursor-pointer">Sales and Refunds</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
