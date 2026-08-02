import React from 'react';
import { BookOpen, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LearningVsApp({ lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Felsefemiz' : 'Our Philosophy',
    titleLine1: isTr ? 'Öğrenmek başlangıçtır.' : 'Learning is just the beginning.',
    titleLine2: isTr ? 'Asıl değer uygulamada oluşur.' : 'The real value is created in execution.',
    academyTitle: isTr ? 'Akademi' : 'Academy',
    academySub: isTr ? 'Teori ve Yetkinlik' : 'Theory & Capability',
    appTitle: isTr ? 'Uygulama' : 'Execution',
    appSub: isTr ? 'Eyleme Dönüştürme' : 'Turning into Action',
    highlightText: isTr 
      ? '"Girişimciye yalnızca ne yapması gerektiğini anlatmıyor, ihtiyaç hâlinde yapılması gereken işleri uzman ekiplerle hayata geçiriyoruz."'
      : '"We do not just tell the founder what to do; when needed, we roll up our sleeves and execute the tasks with our team of specialists."'
  };

  const academyPoints = [
    { 
      title: isTr ? 'Bilgi' : 'Knowledge', 
      desc: isTr ? 'Sektör standartlarında güncel ve pratik teorik temel.' : 'Modern & practical theoretical foundations meeting industry standards.' 
    },
    { 
      title: isTr ? 'Araçlar' : 'Tech Stack', 
      desc: isTr ? 'İşinizi hızlandıracak yazılım ve otomasyon araçları.' : 'Software & automation tools to accelerate your execution speed.' 
    },
    { 
      title: isTr ? 'Yöntemler' : 'Frameworks', 
      desc: isTr ? 'Doğrulanmış çerçeveler ve metodolojik yaklaşımlar.' : 'Validated framework methodologies and standard approaches.' 
    },
    { 
      title: isTr ? 'Yetkinlik' : 'Skills', 
      desc: isTr ? 'Kritik süreçleri yönetebilecek pratik beceriler.' : 'Practical competencies to run critical workflow processes.' 
    },
    { 
      title: isTr ? 'Karar Kalitesi' : 'Decision Quality', 
      desc: isTr ? 'Şirketin geleceğini yönlendirecek doğru muhakeme gücü.' : 'Sound operational judgement to guide the company\'s future.' 
    }
  ];

  const appPoints = [
    { 
      title: isTr ? 'Çalışan MVP' : 'Working MVP', 
      desc: isTr ? 'Fikrinizi hızlıca doğrulayacak fonksiyonel minimum ürün.' : 'Functional minimum viable product to validate core assumptions fast.' 
    },
    { 
      title: isTr ? 'Web & Yazılım' : 'Web & Software', 
      desc: isTr ? 'Ölçeklenebilir, modern ve güvenli yazılım altyapısı.' : 'Scalable, secure, and modern custom software architectures.' 
    },
    { 
      title: isTr ? 'AI Otomasyonları' : 'AI Automations', 
      desc: isTr ? 'Operasyonel verimliliği 10x artıracak yapay zekâ iş akışları.' : 'AI agent workflows boosting internal operations speed by 10x.' 
    },
    { 
      title: isTr ? 'Marka & Reklam' : 'Brand & Ads', 
      desc: isTr ? 'Pazarda fark yaratacak konumlandırma ve reklam yönetimi.' : 'Brand positioning, creatives, and ad account optimizations.' 
    },
    { 
      title: isTr ? 'Satış Sistemi & CRM' : 'Sales & CRM', 
      desc: isTr ? 'Gelir üreten, ölçülebilir ve tekrarlanabilir satış hunileri.' : 'Revenue-generating, measurable, and repeatable sales pipelines.' 
    },
    { 
      title: isTr ? 'Finansal Model' : 'Financial Model', 
      desc: isTr ? 'Yatırımcıların dilinden konuşan, sürdürülebilir nakit akış modeli.' : '3-year cash flow projections structured for venture capital investors.' 
    },
    { 
      title: isTr ? 'Yönetim Altyapısı' : 'Operations', 
      desc: isTr ? 'Ekipleri hizalayan ve büyümeyi destekleyen süreç tasarımları.' : 'Internal workflow designs to align team members with KPIs.' 
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#080B12]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/5 to-violet-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 leading-tight">
            {t.titleLine1}<br />
            <span className="text-gradient-cyan">{t.titleLine2}</span>
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
                <h3 className="text-2xl font-extrabold text-white font-sans">{t.academyTitle}</h3>
                <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">{t.academySub}</span>
              </div>
            </div>

            <div className="space-y-6">
              {academyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 animate-pulse-slow">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none mb-1.5">{pt.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{pt.desc}</p>
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
                <h3 className="text-2xl font-extrabold text-white font-sans">{t.appTitle}</h3>
                <span className="text-xs text-gray-500 font-semibold tracking-wider uppercase">{t.appSub}</span>
              </div>
            </div>

            <div className="space-y-6">
              {appPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyber-cyan flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 animate-pulse-slow">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none mb-1.5">{pt.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{pt.desc}</p>
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
            {t.highlightText}
          </p>
        </div>

      </div>
    </section>
  );
}
