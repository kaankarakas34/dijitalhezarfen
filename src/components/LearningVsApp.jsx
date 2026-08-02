import React from 'react';
import { BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LearningVsApp() {
  const academyPoints = [
    { title: 'Bilgi', desc: 'Sektör standartlarında güncel ve pratik teorik temel.' },
    { title: 'Araçlar', desc: 'İşinizi hızlandıracak yazılım ve otomasyon araçları.' },
    { title: 'Yöntemler', desc: 'Doğrulanmış çerçeveler ve metodolojik yaklaşımlar.' },
    { title: 'Yetkinlik', desc: 'Kritik süreçleri yönetebilecek pratik beceriler.' },
    { title: 'Karar Kalitesi', desc: 'Şirketin geleceğini yönlendirecek doğru muhakeme gücü.' }
  ];

  const appPoints = [
    { title: 'Çalışan MVP', desc: 'Fikrinizi hızlıca doğrulayacak fonksiyonel minimum ürün.' },
    { title: 'Web & Yazılım', desc: 'Ölçeklenebilir, modern ve güvenli yazılım altyapısı.' },
    { title: 'AI Otomasyonları', desc: 'Operasyonel verimliliği 10x artıracak yapay zekâ iş akışları.' },
    { title: 'Marka & Reklam', desc: 'Pazarda fark yaratacak konumlandırma ve reklam yönetimi.' },
    { title: 'Satış Sistemi & CRM', desc: 'Gelir üreten, ölçülebilir ve tekrarlanabilir satış hunileri.' },
    { title: 'Finansal Model', desc: 'Yatırımcıların dilinden konuşan, sürdürülebilir nakit akış modeli.' },
    { title: 'Yönetim Altyapısı', desc: 'Ekipleri hizalayan ve büyümeyi destekleyen süreç tasarımları.' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#080B12]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 to-violet-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3.5 py-1.5 rounded-full">Felsefemiz</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 leading-tight">
            Öğrenmek başlangıçtır.<br />
            <span className="text-gradient-cyan">Asıl değer uygulamada oluşur.</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-cyber mx-auto rounded-full mt-6"></div>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Academy Side */}
          <div className="lg:col-span-5 rounded-2xl glass p-8 border-violet-500/10 relative overflow-hidden group hover:border-violet-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/3 rounded-full filter blur-xl"></div>
            
            <div className="flex items-center gap-3.5 mb-8 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white font-sans">Akademi</h3>
                <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Teori ve Yetkinlik</span>
              </div>
            </div>

            <div className="space-y-6">
              {academyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none mb-1.5">{pt.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer/Arrow element in the middle */}
          <div className="lg:col-span-2 flex items-center justify-center py-4 lg:py-0">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan rotate-90 lg:rotate-0">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* Application Side */}
          <div className="lg:col-span-5 rounded-2xl glass p-8 border-cyan-500/10 relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/3 rounded-full filter blur-xl"></div>
            
            <div className="flex items-center gap-3.5 mb-8 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyber-cyan">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white font-sans">Uygulama</h3>
                <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Eyleme Dönüştürme</span>
              </div>
            </div>

            <div className="space-y-6">
              {appPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyber-cyan flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none mb-1.5">{pt.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Highlight Main Message */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-cyan-900/10 to-violet-900/10 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/1 to-violet-500/1 pointer-events-none"></div>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 leading-relaxed">
            "Girişimciye yalnızca ne yapması gerektiğini anlatmıyor, <strong className="text-cyber-cyan font-bold">ihtiyaç hâlinde yapılması gereken işleri uzman ekiplerle hayata geçiriyoruz.</strong>"
          </p>
        </div>

      </div>
    </section>
  );
}
