import React, { useState } from 'react';
import { ArrowRight, BookOpen, BrainCircuit, Search, HelpCircle, Laptop, Landmark, ShieldCheck, Users, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';

export default function EntrepreneurTunnel({ onOpenApplyModal }) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 1,
      title: 'Girişimci Zihniyeti',
      icon: BrainCircuit,
      items: ['Kişisel farkındalık', 'Problem çözme', 'Belirsizlik yönetimi', 'Karar verme', 'Disiplin ve sorumluluk', 'Girişimci psikolojisi']
    },
    {
      id: 2,
      title: 'Problem & Fikir Geliştirme',
      icon: Search,
      items: ['Problem keşfi', 'Müşteri görüşmeleri', 'Pazar araştırması', 'Fikir doğrulama', 'Değer önerisi', 'Rekabet analizi']
    },
    {
      id: 3,
      title: 'İş Modeli',
      icon: HelpCircle,
      items: ['Gelir modelleri', 'Müşteri segmentleri', 'Fiyatlandırma', 'Birim ekonomi', 'İş modeli tasarımı', 'Ölçeklenebilirlik']
    },
    {
      id: 4,
      title: 'Ürün & Teknoloji',
      icon: Laptop,
      items: ['Ürün yönetimi', 'Kullanıcı deneyimi (UX)', 'Yapay zekâ destekli MVP', 'Yazılım süreçleri', 'Veri ve analitik', 'Siber güvenlik']
    },
    {
      id: 5,
      title: 'Pazarlama & Satış',
      icon: TrendingUpIcon,
      items: ['Marka ve konumlandırma', 'Dijital pazarlama', 'Growth hacking', 'Sosyal medya yönetimi', 'Reklam operasyonları', 'Satış & CRM', 'Müşteri başarısı']
    },
    {
      id: 6,
      title: 'Finans, Hukuk & Muhasebe',
      icon: Landmark,
      items: ['Finansal okuryazarlık', 'Nakit akışı yönetimi', 'Bütçe planlama', 'Finansal modelleme', 'Şirket kuruluşu', 'Ticari sözleşmeler', 'Vergi ve muhasebe', 'Fikrî mülkiyet']
    },
    {
      id: 7,
      title: 'İnsan & Yönetim',
      icon: Users,
      items: ['Liderlik becerileri', 'İnsan kaynakları', 'Ekip yönetimi', 'Organizasyon tasarımı', 'Delegasyon', 'Performans yönetimi', 'Topluluk önünde konuşma', 'Müzakere']
    },
    {
      id: 8,
      title: 'Yatırım & Büyüme',
      icon: Briefcase,
      items: ['Pitch deck tasarımı', 'Yatırımcı sunumu', 'Data room hazırlığı', 'Şirket değerleme', 'Büyüme metrikleri', 'Yatırımcı görüşmeleri', 'Uluslararasılaşma']
    }
  ];

  // Help function for trending icon since we need dynamic icon imports
  function TrendingUpIcon(props) {
    return (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    );
  }

  const outcomes = [
    'Bir problemi doğrulamış,',
    'İş modelini oluşturmuş,',
    'Ürün veya MVP planını hazırlamış,',
    'Pazarlama ve satış sistemini tasarlamış,',
    'Finansal modelini oluşturmuş,',
    'Yatırım sunumunu hazırlamış,',
    'Kendi girişim yol haritasını çıkarmış'
  ];

  const methodology = [
    { title: 'Ders', desc: 'Teorik bilgi & strateji' },
    { title: 'Uygulama', desc: 'Gerçek araçlarla çalışma' },
    { title: 'Ödev & Proje', desc: 'Kendi girişimin için üretim' },
    { title: 'Mentorluk', desc: 'Birebir uzman geri bildirimi' },
    { title: 'Sunum', desc: 'Yatırımcı ve jüri karşısında Demo' }
  ];

  return (
    <section id="akademi" className="py-24 relative overflow-hidden bg-[#080B12]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Amiral Programımız</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-3">
            Girişimcilik Tüneli
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-gray-400">
            3–5 aylık yoğun girişimci yetiştirme programı.
          </h3>
          <div className="h-1 w-20 bg-gradient-cyber mx-auto rounded-full mt-6 mb-8"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 font-semibold mb-8 text-sm">
            <span>Üstün nitelikli insan gücü yetiştiriyoruz.</span>
          </div>

          <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              Bir girişimcinin ihtiyaç duyabileceği neredeyse her şeyi öğretiyoruz. Çünkü özellikle startup’ların ilk dönemlerinde herkes her işi yapar. Girişim sahibi; yalnızca ürününü değil, müşterisini, satışını, pazarlamasını, finansını, teknolojisini, ekibini ve şirketini de anlamak zorundadır.
            </p>
            <p>
              Bir girişimcinin bütün işleri uzman seviyesinde yapmasını beklemiyoruz. Ancak doğru karar verebilmesi, doğru insanları yönetebilmesi ve yapılan işin kalitesini değerlendirebilmesi için şirketin temel fonksiyonlarına hâkim olması gerektiğine inanıyoruz.
            </p>
          </div>
        </div>

        {/* 8-Stage Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Stage Sidebar List */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3 mb-4">Program Aşamaları</h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      activeStage === idx 
                        ? 'bg-gradient-cyber text-[#0B0F19] border-transparent font-semibold shadow-lg shadow-cyan-500/15'
                        : 'bg-white/3 text-gray-300 border-white/5 hover:bg-white/5 hover:border-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium leading-tight">{stage.id}. {stage.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Panel */}
          <div className="lg:col-span-8 rounded-2xl glass p-8 min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
            <div>
              <div className="flex items-center gap-4 border-b border-white/5 pb-5 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyber-cyan">
                  {React.createElement(stages[activeStage].icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-bold text-cyber-cyan uppercase tracking-wider">Aşama {stages[activeStage].id}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-0.5">{stages[activeStage].title}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stages[activeStage].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-gray-500">
              <span>* Her aşama teorik anlatım ve pratik uygulamalar içerir.</span>
              <button 
                onClick={() => onOpenApplyModal('tunel')}
                className="text-cyber-cyan font-semibold hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Bu Aşamaya Başvur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Methodology (Ders + Uygulama...) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h4 className="text-xl font-bold text-white font-sans">Eğitim Metodolojimiz</h4>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">Program yalnızca derslerden oluşmaz, aktif bir pratik süreçtir.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {methodology.map((m, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 text-center group hover:border-cyan-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyber-cyan font-bold text-sm flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h5 className="font-bold text-sm text-white">{m.title}</h5>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1 leading-snug">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program End Outcomes */}
        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-violet-900/10 via-purple-900/5 to-cyan-900/10 border border-white/5 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,0,255,0.06),transparent_50%)] pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 max-w-md lg:max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold">
                <FileCheck className="w-4 h-4" />
                <span>Programın Sonunda Neler Değişiyor?</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-white font-sans leading-tight">
                Katılımcının elde edeceği kazanımlar
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Tünelden geçen her girişimci, fikrini doğrulamış ve yatırımcı karşısına çıkmaya hazır eksiksiz bir paketle mezun olur.
              </p>
            </div>

            <div className="w-full lg:max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {outcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#080B12]/80 border border-white/5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyber-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 font-medium leading-snug">{out} <strong className="text-white">olmalı.</strong></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenApplyModal('tunel')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            Girişimcilik Tüneli’ne Başvur
          </button>
          
          <button
            onClick={() => onOpenApplyModal('egitim')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
          >
            Programı Ayrıntılı İncele
          </button>
        </div>

      </div>
    </section>
  );
}
