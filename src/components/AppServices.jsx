import React from 'react';
import { Layers, ShieldCheck, Laptop, Database, Cpu, Megaphone, Target, ArrowRight, UserPlus } from 'lucide-react';

export default function AppServices({ onOpenApplyModal }) {
  const serviceGroups = [
    {
      title: 'Ürün, Yazılım & AI',
      icon: Laptop,
      color: 'from-cyan-400 to-blue-500',
      services: [
        'Yapay zekâ destekli MVP',
        'Web & mobil uygulama geliştirme',
        'SaaS ürün mimarisi',
        'CRM & ERP entegrasyonları',
        'AI chatbot & voice agent',
        'İş akışı otomasyonu (Workflow)',
        'Veri altyapısı & analitik',
        'Siber güvenlik denetimi'
      ]
    },
    {
      title: 'Pazarlama & Medya',
      icon: Megaphone,
      color: 'from-blue-400 to-indigo-500',
      services: [
        'Marka kimliği & konumlandırma',
        'Dijital pazarlama operasyonları',
        'Performans reklamları yönetimi',
        'Arama motoru optimizasyonu (SEO)',
        'Sosyal medya & topluluk yönetimi',
        'İçerik pazarlaması (Metin & görsel)',
        'Görsel tasarım (UI/UX)',
        'Video & reklam prodüksiyonu'
      ]
    },
    {
      title: 'Satış & Büyüme',
      icon: Target,
      color: 'from-violet-500 to-fuchsia-500',
      services: [
        'Satış sistemi kurulumu & optimizasyonu',
        'CRM kurulumu & veri akışları',
        'Potansiyel müşteri yaratma (Lead gen)',
        'B2B satış kanalları geliştirme',
        'Revenue Operations (RevOps)',
        'Growth hacking testleri',
        'Müşteri başarısı (CS) süreçleri',
        'Uluslararası satış stratejisi'
      ]
    },
    {
      title: 'Finans & Yönetim',
      icon: Database,
      color: 'from-pink-500 to-rose-500',
      services: [
        'Finansal modelleme & tahminler',
        'Bütçe yönetimi & raporlama',
        'Nakit akışı (Cashflow) yönetimi',
        'Muhasebe koordinasyon desteği',
        'Hukuki sözleşmeler & süreçler',
        'Süreç yönetimi (Operations)',
        'Organizasyon tasarımı',
        'Liderlik & yönetim mentorluğu'
      ]
    }
  ];

  return (
    <section id="uygulama" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      {/* Visual glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-cyan-500/2 rounded-full filter blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Ne Yapıyoruz?</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            Uygulama Hizmetleri
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Girişimlerin yalnızca stratejiye değil, işi hızlıca yapacak uzman ellere de ihtiyacı var. Tüm operasyonu sizin yerinize yürütüyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div 
                key={group.title}
                className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-6 border-b border-white/5 pb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${group.color} text-[#0B0F19] shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white font-sans group-hover:text-cyber-cyan transition-colors">
                      {group.title}
                    </h3>
                  </div>

                  {/* Bullet list of services */}
                  <div className="space-y-3">
                    {group.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => onOpenApplyModal('girisim')}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    Hizmet Talebi Oluştur
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Talent Callout note */}
        <div className="max-w-4xl mx-auto p-5 rounded-xl bg-[#080B12] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyber-cyan">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Yetenek & Ekip Desteği</h4>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                Gerektiğinde girişime uygun co-founder, uzman veya proje ekibi oluşturulmasına destek verilebilir.
              </p>
            </div>
          </div>
          <button 
            onClick={() => onOpenApplyModal('girisim')}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer shrink-0"
          >
            Ekip İhtiyacı Bildir
          </button>
        </div>

      </div>
    </section>
  );
}
