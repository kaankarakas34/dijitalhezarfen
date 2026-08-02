import React from 'react';
import { Layers, Activity, Cpu } from 'lucide-react';
import logoStacked from '../../logo/Dijital Hezarfen (7).png';

export default function AboutPillars() {
  const pillars = [
    {
      title: 'Scalable',
      subtitle: 'Ölçeklenebilir',
      icon: Layers,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      shadow: 'group-hover:shadow-cyan-500/10',
      description: 'Ölçeklenebilir ürünler, ekipler ve büyüme sistemleri tasarlıyoruz.'
    },
    {
      title: 'Sustainable',
      subtitle: 'Sürdürülebilir',
      icon: Activity,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      shadow: 'group-hover:shadow-violet-500/10',
      description: 'Geçici rüzgarlar yerine kalıcı ve sürdürülebilir şirketler inşa ediyoruz.'
    },
    {
      title: 'Smart',
      subtitle: 'Akıllı',
      icon: Cpu,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      shadow: 'group-hover:shadow-pink-500/10',
      description: 'Yapay zekâ, modern teknoloji, veri ve akıllı yönetim sistemlerini entegre ediyoruz.'
    }
  ];

  return (
    <section id="nedir" className="py-24 relative overflow-hidden bg-[#080B12]">
      {/* Background glow effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="mb-4">
              <img src={logoStacked} alt="Dijital Hezarfen" className="h-16 w-auto object-contain" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyber-cyan">Vizyonumuz</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans leading-tight">
              Akademiden<br />
              <span className="text-gradient-cyan">daha fazlası.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Dijital Hezarfen yalnızca girişimcilik eğitimi veren bir akademi değildir. Girişimcinin öğrendiği bilgiyi gerçek bir ürüne, müşteriye, gelire ve büyüyen bir şirkete dönüştürmesini sağlayan akademi ve uygulama ekosistemidir.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyber-cyan flex items-center justify-center text-xs font-bold text-cyber-cyan">S</div>
                <div className="w-9 h-9 rounded-full bg-violet-500/20 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400">S</div>
                <div className="w-9 h-9 rounded-full bg-pink-500/20 border border-pink-500/20 flex items-center justify-center text-xs font-bold text-pink-400">S</div>
              </div>
              <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Scalable · Sustainable · Smart</span>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((pil) => {
              const Icon = pil.icon;
              return (
                <div 
                  key={pil.title}
                  className="group flex flex-col justify-between p-6 rounded-2xl glass hover:border-white/15 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    {/* Icon container with glows */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pil.color} mb-6 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Text titles */}
                    <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                      {pil.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1 mb-4">
                      {pil.subtitle}
                    </h4>
                  </div>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                    {pil.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
