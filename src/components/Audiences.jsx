import React from 'react';
import { UserCheck, Star, LineChart, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Audiences({ onOpenApplyModal, onFocusSection, lang }) {
  const isTr = lang === 'tr';

  const t = {
    title: isTr ? 'Kimin İçin Çalışıyoruz?' : 'Who We Work With',
    subtitle: isTr 
      ? 'Fikirden küresel pazara uzanan yolculuğun her aşamasında girişimcinin, ekibin ve kurumun yanındayız.'
      : 'We stand by founders, teams, and enterprises at every step from idea validation to international markets.',
    supportLabel: isTr ? 'Sağlanan Destekler:' : 'Support Provided:',
    
    // Adaylar
    t1: isTr ? 'Girişimci Adayları' : 'Aspiring Founders',
    d1: isTr ? 'Henüz şirketi olmayan ancak bir fikri, uzmanlığı veya girişimcilik hedefi bulunan kişiler.' : 'Individuals who do not have a company yet, but have an idea, expertise, or a startup goal.',
    s1: [
      isTr ? 'Girişimcilik eğitimi' : 'Entrepreneurship training',
      isTr ? 'Problem ve fikir geliştirme' : 'Problem & idea discovery',
      isTr ? 'İş modeli oluşturma' : 'Business modeling',
      isTr ? 'Yapay zekâ destekli MVP' : 'AI-assisted MVP build',
      isTr ? 'İlk müşteri hazırlığı' : 'Early customer readiness'
    ],
    c1: isTr ? 'Girişimcilik Tüneli’ni İncele' : 'Explore Entrepreneur Tunnel',

    // Erken
    t2: isTr ? 'Erken Aşama Girişimler' : 'Early Stage Startups',
    d2: isTr ? 'Fikir, pre-seed ve seed aşamasındaki startup’lar.' : 'Startups in idea, pre-seed, and seed stages.',
    s2: [
      isTr ? 'Ürün ve müşteri doğrulama' : 'Product & customer validation',
      isTr ? 'MVP ve yazılım geliştirme' : 'MVP & software development',
      isTr ? 'Marka ve konumlandırma' : 'Branding & positioning',
      isTr ? 'Satış ve CRM kurulumları' : 'Sales & CRM setups',
      isTr ? 'Dijital pazarlama operasyonu' : 'Digital marketing operations',
      isTr ? 'Finansal model tasarımı' : 'Financial model design',
      isTr ? 'Yatırıma hazırlık süreçleri' : 'Fundraising preparation'
    ],
    c2: isTr ? 'Girişimini Geliştir' : 'Develop Your Venture',

    // Büyüyen
    t3: isTr ? 'Büyüyen Girişimler & Şirketler' : 'Scale-ups & Growing Companies',
    d3: isTr ? 'Ürünü, müşterisi veya geliri bulunan; ancak daha hızlı ve sistemli büyümek isteyen yapılar.' : 'Entities with an active product, customers, or revenues seeking structured and accelerated growth.',
    s3: [
      isTr ? 'Growth hacking altyapısı' : 'Growth hacking infrastructure',
      isTr ? 'Satış sistemi optimizasyonu' : 'Sales system optimization',
      isTr ? 'Revenue Operations (RevOps)' : 'Revenue Operations (RevOps)',
      isTr ? 'Süreç otomasyonu ve yapay zeka' : 'Process automation & AI',
      isTr ? 'Organizasyon tasarımı ve liderlik' : 'Organizational design & leadership',
      isTr ? 'Yeni pazarlara açılma stratejisi' : 'International expansion strategy',
      isTr ? 'Yatırım ve uluslararasılaşma' : 'Funding & globalization'
    ],
    c3: isTr ? 'Büyüme Programlarını İncele' : 'Explore Growth Programs',

    // Kurumsal
    t4: isTr ? 'Kurumlar' : 'Corporates',
    d4: isTr ? 'Çalışanlarını geliştirmek, inovasyon programı kurmak veya girişimlerle çalışmak isteyen şirketler.' : 'Enterprises seeking internal training, innovation frameworks, or startup integrations.',
    s4: [
      isTr ? 'Kurumsal akademi kurulumu' : 'Corporate academy setup',
      isTr ? 'Yapay zekâ ve dijital dönüşüm eğitimleri' : 'AI & digital transformation training',
      isTr ? 'Yönetici gelişim programları' : 'Executive development programs',
      isTr ? 'Kurum içi girişimcilik (intraprenörlük)' : 'Intrapreneurship frameworks',
      isTr ? 'Startup iş birlikleri yönetimi' : 'Startup engagement management',
      isTr ? 'Özel eğitim ve kurumsal etkinlikler' : 'Custom training & corporate events'
    ],
    c4: isTr ? 'Kurumsal Çözümleri İncele' : 'Explore Corporate Solutions'
  };

  const sections = [
    {
      id: 'adaylar',
      title: t.t1,
      icon: UserCheck,
      color: 'from-cyan-400 to-blue-500',
      description: t.d1,
      supports: t.s1,
      ctaText: t.c1,
      action: () => onFocusSection('#akademi')
    },
    {
      id: 'erken',
      title: t.t2,
      icon: Star,
      color: 'from-blue-400 to-indigo-500',
      description: t.d2,
      supports: t.s2,
      ctaText: t.c2,
      action: () => onOpenApplyModal('girisim')
    },
    {
      id: 'buyuyen',
      title: t.t3,
      icon: LineChart,
      color: 'from-violet-500 to-fuchsia-500',
      description: t.d3,
      supports: t.s3,
      ctaText: t.c3,
      action: () => onFocusSection('#buyume')
    },
    {
      id: 'kurumlar',
      title: t.t4,
      icon: Building2,
      color: 'from-pink-500 to-rose-500',
      description: t.d4,
      supports: t.s4,
      ctaText: t.c4,
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
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-base sm:text-lg">
            {t.subtitle}
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
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.supportLabel}</h4>
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
