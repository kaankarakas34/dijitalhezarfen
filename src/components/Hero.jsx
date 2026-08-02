import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onOpenApplyModal, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Girişimcilik ve Büyüme Ekosistemi' : 'Entrepreneurship & Growth Ecosystem',
    titleLine1: isTr ? 'Fikirden girişime,' : 'From idea to venture,',
    titleLine2: isTr ? 'girişimden küresel büyümeye.' : 'from venture to global growth.',
    description: isTr 
      ? 'Girişimcilerin yetişmesi, fikirlerin doğrulanması, çalışan ürünlerin geliştirilmesi ve şirketlerin sürdürülebilir biçimde büyümesi için gereken bilgi ve uygulama gücü tek ekosistemde.'
      : 'The knowledge and execution power needed to develop entrepreneurs, validate ideas, build working products, and grow companies sustainably in a single ecosystem.',
    btnPrimary: isTr ? 'Girişimin İçin Başvur' : 'Apply for Your Venture',
    btnSecondary: isTr ? "Dijital Hezarfen'i Keşfet" : 'Discover Dijital Hezarfen',
    trustLine: isTr 
      ? 'Akademi • Yapay zekâ destekli MVP • Yazılım • Growth • Satış • CRM • Finans • Yatırım hazırlığı • Yönetim'
      : 'Academy • AI-Assisted MVP • Software • Growth • Sales • CRM • Finance • Fundraising Prep • Management'
  };

  const handleScrollToExplore = () => {
    const element = document.querySelector('#nedir');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Mesh Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-[80px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full filter blur-[100px] animate-pulse-slow pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Sub-header badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in shadow-inner">
          <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">{t.badge}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-sans leading-[1.1] animate-fade-in">
          {t.titleLine1}<br />
          <span className="text-gradient-cyan">{t.titleLine2}</span>
        </h1>

        {/* Short value statement */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in delay-100">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200">
          <button
            onClick={() => onOpenApplyModal('girisim')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer font-sans"
          >
            <span>{t.btnPrimary}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleScrollToExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            {t.btnSecondary}
          </button>
        </div>

        {/* Trust Banner/Info */}
        <div className="mt-20 pt-10 border-t border-white/5 animate-fade-in delay-300">
          <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
            {isTr ? 'Ekosistem Gücü' : 'Ecosystem Scope'}
          </p>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold tracking-wide font-sans">
            {t.trustLine}
          </p>
        </div>

      </div>
    </section>
  );
}
