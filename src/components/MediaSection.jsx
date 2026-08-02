import React from 'react';
import { Mic, Newspaper, PlayCircle, BarChart3, HelpCircle, ArrowUpRight } from 'lucide-react';

const Youtube = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function MediaSection() {
  const mediaItems = [
    {
      title: 'YouTube Programları',
      type: 'Video',
      icon: Youtube,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      description: 'Girişimcilik sohbetleri, canlı yayınlar ve sektörel incelemeler.',
      links: ['Kurucu röportajları', 'Eğitim videoları', 'Haftalık gündem analizleri']
    },
    {
      title: 'Podcasts',
      type: 'Ses',
      icon: Mic,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      description: 'Yolda, sporda veya çalışırken dinleyebileceğiniz girişimcilik dersleri.',
      links: ['Girişim Hikâyeleri', 'Scale-up Dersleri', 'Yatırımcı Perspektifi']
    },
    {
      title: 'Yazılı Yayınlar & Raporlar',
      type: 'Döküman',
      icon: Newspaper,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      description: 'Veri odaklı pazar araştırmaları, detaylı startup analizleri ve rehberler.',
      links: ['Girişimcilik Raporları', 'Teknoloji Trendleri', 'Sektörel İncelemeler']
    }
  ];

  return (
    <section id="medya" className="py-24 relative overflow-hidden bg-[#080B12]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-cyan-500/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Yayınlarımız</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            Medya & İçerik Dünyamız
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Bilgiyi yalnızca kapalı sınıflarda değil, herkes için erişilebilir medya içerikleriyle daha geniş kitlelere ulaştırıyoruz.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mediaItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.title}
                className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-white/10 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual glow on card hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/3 rounded-full filter blur-xl group-hover:scale-150 transition-transform"></div>
                
                <div>
                  {/* Category Type Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${item.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-white font-sans group-hover:text-cyber-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2.5 mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 border-t border-white/5 pt-5">
                    {item.links.map((link, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                        <span>{link}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href="#"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-1.5 group/link"
                  >
                    <span>İçerikleri İncele</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Thumbnail mockup */}
        <div className="max-w-5xl mx-auto rounded-2xl glass overflow-hidden border border-white/10 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/20 to-transparent z-10"></div>
          
          {/* Mock Video Graphic using SVGs */}
          <div className="h-[250px] sm:h-[350px] bg-gradient-to-tr from-cyan-950 via-slate-900 to-violet-950 flex items-center justify-center relative">
            
            {/* Ambient Background Circles */}
            <div className="absolute w-60 h-60 bg-cyan-500/10 rounded-full filter blur-[60px] animate-pulse"></div>
            <div className="absolute w-72 h-72 bg-violet-600/10 rounded-full filter blur-[70px] animate-pulse"></div>

            {/* Play overlay button */}
            <div className="relative z-20 w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center text-[#0B0F19] shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              <PlayCircle className="w-8 h-8 fill-current" />
            </div>

            {/* Graphic mock elements representing charts */}
            <div className="absolute bottom-6 left-6 z-20 text-left">
              <span className="text-[10px] font-bold text-cyber-cyan uppercase tracking-widest block mb-1">Yeni Bölüm Yayında</span>
              <h4 className="text-sm sm:text-lg font-bold text-white leading-tight">Yapay Zekâ ile Girişim Kurmak ve MVP Süreçleri</h4>
            </div>

            <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-[#0B0F19]/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">YouTube</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
