import React, { useState } from 'react';
import { Award, Briefcase, Globe2, Lightbulb, Users, Network, TrendingUp, DollarSign } from 'lucide-react';

export default function PortfolioReferences() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceMetrics = [
    { title: 'Ekip Deneyimi', desc: '15+ yıl teknoloji ve girişimcilik ekosistemi tecrübesi.' },
    { title: 'Sektör Genişliği', desc: 'SaaS, FinTech, AI, EdTech, B2B ve E-ticaret başta olmak üzere 10+ dikey sektör.' },
    { title: 'Tamamlanan Projeler', desc: 'Sıfırdan tasarlanıp lansmanı yapılan 40+ yazılım ürünü.' },
    { title: 'Geliştirilen Teknolojiler', desc: 'Modern web, mobil, LLM entegrasyonlu yapay zeka ve API sistemleri.' },
    { title: 'Kurucu & Uzman Kadrosu', desc: 'Tecrübeli seri girişimciler, yazılım mimarları ve pazarlama uzmanları.' },
    { title: 'Küresel İş Ortakları', desc: 'AWS, Google Cloud, Stripe ve önde gelen melek yatırım ağları.' }
  ];

  const futureMetrics = [
    { label: 'Geliştirilen MVP Sayısı', value: '18+', desc: 'Yapay zeka destekli ve çalışan prototipler.' },
    { label: 'Kurulan Satış Sistemi', value: '25+', desc: 'CRM entegrasyonlu gelir kanalları.' },
    { label: 'Yatırıma Hazırlanan Girişim', value: '12', desc: 'Pitch deck ve finansal modellemesi tamamlanan ekipler.' },
    { label: 'Alınan Toplam Yatırım', value: '$3.2M+', desc: 'İş ortaklarımız aracılığıyla kapatılan turlar.' },
    { label: 'Açılan Yeni Pazarlar', value: '6', desc: 'Küresel pazarlara açılan yerli girişimler.' },
    { label: 'Yaratılan Ek Gelir', value: '₺12M+', desc: 'Startup\'ların satış sistemleriyle ürettiği ciro.' }
  ];

  return (
    <section id="hakkimizda" className="py-24 relative overflow-hidden bg-[#080B12]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-cyan-500/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Kabiliyetler & Sonuçlar</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            Referanslar ve Sonuçlar
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Ekibimizin geçmiş birikimi ve Dijital Hezarfen ekosisteminin ürettiği güncel çıktılar.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white/3 border border-white/5 p-1.5">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-cyber text-[#0B0F19] shadow-md shadow-cyan-500/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Ekibin Geçmiş Deneyimi & Gücü
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'results'
                  ? 'bg-gradient-cyber text-[#0B0F19] shadow-md shadow-cyan-500/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Ekosistem Büyüme Metrikleri
            </button>
          </div>
        </div>

        {/* Experience Tab Content */}
        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {experienceMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl glass hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyber-cyan flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-white font-sans group-hover:text-cyber-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Results Tab Content */}
        {activeTab === 'results' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {futureMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl glass border-violet-500/10 hover:border-violet-500/30 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-violet-600/3 rounded-full filter blur-xl"></div>
                <span className="text-4xl md:text-5xl font-extrabold text-gradient-violet block font-sans mb-3 group-hover:scale-105 transition-transform duration-300">
                  {item.value}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-white font-sans">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
