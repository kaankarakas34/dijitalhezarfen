import React from 'react';
import { BookOpen, Code, LineChart, PlayCircle, Users } from 'lucide-react';

export default function Ecosystem({ lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Bileşenler' : 'Components',
    title: isTr ? 'Ekosistemin Ana Güçleri' : 'Core Forces of the Ecosystem',
    desc: isTr 
      ? 'Dijital Hezarfen; eğitimi, tasarımı, teknolojiyi ve büyümeyi tek bir çatı altında birleştirerek parçalı yapıları ortadan kaldırır.'
      : 'Dijital Hezarfen eliminates fragmented structures by combining training, design, technology, and growth under a single roof.',
    talentLabel: isTr ? 'Yetenek Desteği:' : 'Talent Support:',
    
    // Elements
    t1: isTr ? 'Akademi' : 'Academy',
    d1: isTr ? 'Girişimcilik, yönetim, teknoloji ve büyüme yetkinlikleri.' : 'Entrepreneurship, management, tech, and growth capabilities.',
    b1: [
      isTr ? 'Girişimcilik Tüneli programı' : 'Entrepreneur Tunnel program',
      isTr ? 'Uygulamalı ve proje tabanlı öğrenim' : 'Applied & project-based learning',
      isTr ? 'Zihniyet ve liderlik eğitimleri' : 'Mindset & leadership workshops',
      isTr ? 'Alanında uzman mentor desteği' : 'Expert advisory & mentor support'
    ],

    t2: isTr ? 'Uygulama' : 'Execution',
    d2: isTr ? 'Girişimin ihtiyaç duyduğu işlerin uzman ekiplerle hayata geçirilmesi.' : 'Hands-on execution of startup tasks by specialized teams.',
    b2: [
      isTr ? 'Yazılım ve çalışan MVP geliştirme' : 'Software & working MVP development',
      isTr ? 'Yapay zekâ otomasyonları & entegrasyonlar' : 'AI automations & API integrations',
      isTr ? 'Pazarlama, satış ve finans altyapısı' : 'Marketing, sales & financial setups'
    ],
    e2: isTr ? 'İhtiyaç hâlinde co-founder, uzman ve proje ekibi desteği.' : 'Optional co-founder, expert, and task force matching.',

    t3: isTr ? 'Büyüme ve Yatırım' : 'Growth & Venture',
    d3: isTr ? 'Girişimi müşteriye, yatırıma ve küresel pazarlara hazırlama.' : 'Preparing the startup for customers, funding, and global markets.',
    b3: [
      isTr ? 'Growth hacking ve gelir operasyonları' : 'Growth hacking & revenue operations',
      isTr ? 'Finansal modelleme & pitch deck tasarımı' : 'Financial models & pitch deck design',
      isTr ? 'Data room & due diligence hazırlığı' : 'Data room & due diligence preparation',
      isTr ? 'Yatırımcı ve stratejik network erişimi' : 'Access to investor & strategic networks'
    ],

    t4: isTr ? 'Medya ve Etkinlikler' : 'Media & Events',
    d4: isTr ? 'Ekosistemi besleyen, birleştiren ve büyüten iletişim platformları.' : 'Communication channels that nourish, connect, and scale the ecosystem.',
    b4: [
      isTr ? 'YouTube programları ve podcast serileri' : 'YouTube programs & podcast series',
      isTr ? 'Sektörel raporlar, analizler ve makaleler' : 'Sector reports, analyses & guides',
      isTr ? 'Demo Day, konferanslar ve meetup\'lar' : 'Demo Days, conferences & meetups',
      isTr ? 'Girişimci & Yatırımcı buluşma saatleri' : 'Founder & Investor networking hours'
    ]
  };

  const elements = [
    {
      title: t.t1,
      icon: BookOpen,
      color: 'from-cyan-400 to-blue-500',
      description: t.d1,
      bullets: t.b1
    },
    {
      title: t.t2,
      icon: Code,
      color: 'from-blue-400 to-indigo-500',
      description: t.d2,
      bullets: t.b2,
      extra: t.e2
    },
    {
      title: t.t3,
      icon: LineChart,
      color: 'from-violet-500 to-fuchsia-500',
      description: t.d3,
      bullets: t.b3
    },
    {
      title: t.t4,
      icon: PlayCircle,
      color: 'from-pink-500 to-rose-500',
      description: t.d4,
      bullets: t.b4
    }
  ];

  return (
    <section id="ekosistem" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {elements.map((el) => {
            const Icon = el.icon;
            return (
              <div 
                key={el.title}
                className="group flex flex-col justify-between rounded-2xl glass p-8 hover:border-cyan-500/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual gradient backdrop link */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/5 text-cyber-cyan group-hover:bg-gradient-cyber group-hover:text-[#0B0F19] transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-sans">{el.title}</h3>
                  </div>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {el.description}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {el.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra note for Talent inside Uygulama */}
                {el.extra && (
                  <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                    <Users className="w-4.5 h-4.5 text-cyber-cyan shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-400 leading-normal">
                      <strong className="text-gray-300">{t.talentLabel}</strong> {el.extra}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
