import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onOpenApplyModal }) {
  
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
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Girişimcilik ve Büyüme Ekosistemi</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 font-sans leading-[1.1] animate-fade-in">
          Fikirden girişime,<br />
          <span className="text-gradient-cyan">girişimden küresel büyümeye.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in">
          Girişimcilerin yetişmesi, fikirlerin doğrulanması, çalışan ürünlerin geliştirilmesi ve şirketlerin sürdürülebilir biçimde büyümesi için gereken bilgi ve uygulama gücü tek ekosistemde.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <button
            onClick={() => onOpenApplyModal('girisim')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Girişimin İçin Başvur</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleScrollToExplore}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            Dijital Hezarfen’i Keşfet
          </button>
        </div>
      </div>

      {/* Floating Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-float cursor-pointer" onClick={handleScrollToExplore}>
        <span className="text-xs uppercase tracking-widest font-semibold">Keşfet</span>
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
