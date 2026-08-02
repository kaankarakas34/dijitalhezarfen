import React from 'react';
import { Target, Users, Landmark, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export default function GrowthInvestment({ onOpenApplyModal }) {
  
  const blocks = [
    {
      title: 'Yatırıma Hazırlık',
      icon: Target,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      items: [
        'Yatırımcı Pitch Deck tasarımı',
        'Finansal model & projeksiyonlar',
        'Çarpıcı yatırım hikâyesi yazımı',
        'Data Room altyapısının kurulması',
        'Finansal ve teknik değerleme hazırlığı',
        'Mock Pitch (Simüle yatırımcı sunumları)',
        'Due Diligence hazırlık koordinasyonu'
      ]
    },
    {
      title: 'Yatırımcı Erişimi',
      icon: Landmark,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      items: [
        'Bireysel Melek Yatırımcı ağları',
        'Girişim Sermayesi (VC) Fonları',
        'Aile Ofisleri (Family Offices) erişimi',
        'Kurumsal & Stratejik Yatırımcılar',
        'Özel Demo Day sunum fırsatları',
        'Yatırımcı birebir görüşme saatleri',
        'Küresel fon erişim ağları'
      ]
    },
    {
      title: 'Büyüme & Globalleşme',
      icon: Users,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      items: [
        'Growth Hacking stratejisi & testleri',
        'B2B/B2C Satış Sistemleri kurulumu',
        'Yeni gelir kanalları geliştirme',
        'Yeni coğrafi pazarlara giriş',
        'Kurumsallaşma & süreç yönetimi',
        'Uluslararasılaşma (Global scaling)',
        'Operasyonel verimlilik otomasyonları'
      ]
    }
  ];

  return (
    <section id="buyume" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Finansman & Ölçeklenme</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            Büyüme ve Yatırım
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base">
            Girişiminizi pay veya ortaklık oranlarından bahsetmeksizin, tamamen sunduğumuz operasyonel ve finansal faydalarla yatırıma ve global pazarlara hazırlıyoruz.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div 
                key={block.title}
                className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-white/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${block.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white font-sans group-hover:text-cyber-cyan transition-colors">
                      {block.title}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {block.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-400 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => onOpenApplyModal('girisim')}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyber-cyan/30 transition-all duration-200 cursor-pointer"
                  >
                    Bilgi ve Destek Talep Et
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Networking & Partnership Box */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-[#0C111F] to-[#0A0D17] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm sm:text-base text-white font-sans">İş Ağı & Stratejik Network</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                Girişimler yatırımcılar, diğer girişimciler ve ihtiyaç duydukları stratejik taraflarla buluşturulabilir. Daha geniş iş ağı ihtiyaçlarında <strong className="text-white">Event for Network</strong> ile iş birliği yapılabilir.
              </p>
            </div>
          </div>
          <button 
            onClick={() => onOpenApplyModal('egitim')}
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-violet-500/30 transition-all duration-200 shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Network Detayları</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
