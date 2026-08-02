import React from 'react';
import { UserCheck, Star, LineChart, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Audiences({ onOpenApplyModal, onFocusSection }) {
  
  const sections = [
    {
      id: 'adaylar',
      title: 'Girişimci Adayları',
      icon: UserCheck,
      color: 'from-cyan-400 to-blue-500',
      description: 'Henüz şirketi olmayan ancak bir fikri, uzmanlığı veya girişimcilik hedefi bulunan kişiler.',
      supports: [
        'Girişimcilik eğitimi',
        'Problem ve fikir geliştirme',
        'İş modeli oluşturma',
        'Yapay zekâ destekli MVP',
        'İlk müşteri hazırlığı'
      ],
      ctaText: 'Girişimcilik Tüneli’ni İncele',
      action: () => onFocusSection('#akademi')
    },
    {
      id: 'erken',
      title: 'Erken Aşama Girişimler',
      icon: Star,
      color: 'from-blue-400 to-indigo-500',
      description: 'Fikir, pre-seed ve seed aşamasındaki startup’lar.',
      supports: [
        'Ürün ve müşteri doğrulama',
        'MVP ve yazılım geliştirme',
        'Marka ve konumlandırma',
        'Satış ve CRM kurulumları',
        'Dijital pazarlama operasyonu',
        'Finansal model tasarımı',
        'Yatırıma hazırlık süreçleri'
      ],
      ctaText: 'Girişimini Geliştir',
      action: () => onOpenApplyModal('girisim')
    },
    {
      id: 'buyuyen',
      title: 'Büyüyen Girişimler & Şirketler',
      icon: LineChart,
      color: 'from-violet-500 to-fuchsia-500',
      description: 'Ürünü, müşterisi veya geliri bulunan; ancak daha hızlı ve sistemli büyümek isteyen yapılar.',
      supports: [
        'Growth hacking altyapısı',
        'Satış sistemi optimizasyonu',
        'Revenue Operations (RevOps)',
        'Süreç otomasyonu ve yapay zeka',
        'Organizasyon tasarımı ve liderlik',
        'Yeni pazarlara açılma stratejisi',
        'Yatırım ve uluslararasılaşma'
      ],
      ctaText: 'Büyüme Programlarını İncele',
      action: () => onFocusSection('#buyume')
    },
    {
      id: 'kurumlar',
      title: 'Kurumlar',
      icon: Building2,
      color: 'from-pink-500 to-rose-500',
      description: 'Çalışanlarını geliştirmek, inovasyon programı kurmak veya girişimlerle çalışmak isteyen şirketler.',
      supports: [
        'Kurumsal akademi kurulumu',
        'Yapay zekâ ve dijital dönüşüm eğitimleri',
        'Yönetici gelişim programları',
        'Kurum içi girişimcilik (intraprenörlük)',
        'Startup iş birlikleri yönetimi',
        'Özel eğitim ve kurumsal etkinlikler'
      ],
      ctaText: 'Kurumsal Çözümleri İncele',
      action: () => onOpenApplyModal('kurumsal')
    }
  ];

  return (
    <section id="kimler-icin" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-cyan-500/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans leading-tight mb-5">
            Kimin İçin Çalışıyoruz?
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            Fikirden küresel pazara uzanan yolculuğun her aşamasında girişimcinin, ekibin ve kurumun yanındayız.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div 
                key={sec.id}
                className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/5"
              >
                <div>
                  {/* Card Icon Header */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sec.color} flex items-center justify-center text-[#0B0F19] shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-cyber-cyan transition-colors">
                    {sec.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {sec.description}
                  </p>

                  {/* Support points list */}
                  <div className="border-t border-white/5 pt-5 mb-8">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Sağlanan Destekler:</h4>
                    <ul className="space-y-2.5">
                      {sec.supports.map((sup, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-300 leading-snug">{sup}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={sec.action}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyber-cyan bg-white/3 hover:bg-cyan-500/5 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>{sec.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
