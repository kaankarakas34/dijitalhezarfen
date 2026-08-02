import React, { useState } from 'react';
import { Award, Briefcase, Globe2, Lightbulb, Users, Network, TrendingUp, DollarSign } from 'lucide-react';

export default function PortfolioReferences({ lang }) {
  const [activeTab, setActiveTab] = useState('experience');
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Kabiliyetler & Sonuçlar' : 'Capabilities & Metrics',
    title: isTr ? 'Referanslar ve Sonuçlar' : 'Track Record & Metrics',
    desc: isTr 
      ? 'Ekibimizin geçmiş birikimi ve Dijital Hezarfen ekosisteminin ürettiği güncel çıktılar.'
      : 'Our team\'s background experience combined with Dijital Hezarfen\'s ecosystem output.',
    tabExp: isTr ? 'Ekibin Geçmiş Deneyimi & Gücü' : 'Team Background & Expertise',
    tabResults: isTr ? 'Ekosistem Büyüme Metrikleri' : 'Ecosystem Growth Metrics',

    // Exp items
    e1: isTr ? 'Ekip Deneyimi' : 'Team Experience',
    ed1: isTr ? '15+ yıl teknoloji ve girişimcilik ekosistemi tecrübesi.' : '15+ years technology & entrepreneurship experience.',
    e2: isTr ? 'Sektör Genişliği' : 'Sector Breadth',
    ed2: isTr ? 'SaaS, FinTech, AI, EdTech, B2B ve E-ticaret başta olmak üzere 10+ dikey sektör.' : '10+ verticals including SaaS, FinTech, GenAI, EdTech, and B2B.',
    e3: isTr ? 'Tamamlanan Projeler' : 'Software Shipped',
    ed3: isTr ? 'Sıfırdan tasarlanıp lansmanı yapılan 40+ yazılım ürünü.' : '40+ custom software products designed & launched from scratch.',
    e4: isTr ? 'Geliştirilen Teknolojiler' : 'Tech Stack Mastered',
    ed4: isTr ? 'Modern web, mobil, LLM entegrasyonlu yapay zeka ve API sistemleri.' : 'Modern web, mobile, LLM integrations, and custom database APIs.',
    e5: isTr ? 'Kurucu & Uzman Kadrosu' : 'Founders & Experts',
    ed5: isTr ? 'Tecrübeli seri girişimciler, yazılım mimarları ve pazarlama uzmanları.' : 'Experienced serial founders, software architects, and growth specialists.',
    e6: isTr ? 'Küresel İş Ortakları' : 'Global Partners',
    ed6: isTr ? 'AWS, Google Cloud, Stripe ve önde gelen melek yatırım ağları.' : 'AWS, Google Cloud, Stripe, and prominent angel VC networks.',

    // Results items
    r1: isTr ? 'Geliştirilen MVP Sayısı' : 'AI MVPs Launched',
    rd1: isTr ? 'Yapay zeka destekli ve çalışan prototipler.' : 'Functional AI-assisted working prototypes.',
    r2: isTr ? 'Kurulan Satış Sistemi' : 'Sales Systems Configured',
    rd2: isTr ? 'CRM entegrasyonlu gelir kanalları.' : 'CRM integrations & automated revenue streams.',
    r3: isTr ? 'Yatırıma Hazırlanan Girişim' : 'Investor Ready Startups',
    rd3: isTr ? 'Pitch deck ve finansal modellemesi tamamlanan ekipler.' : 'Pitch deck & financial modeling fully constructed.',
    r4: isTr ? 'Alınan Toplam Yatırım' : 'Total Funding Raised',
    rd4: isTr ? 'İş ortaklarımız aracılığıyla kapatılan turlar.' : 'Funding rounds closed via our ecosystem investor network.',
    r5: isTr ? 'Açılan Yeni Pazarlar' : 'Global Markets Entered',
    rd5: isTr ? 'Küresel pazarlara açılan yerli girişimler.' : 'Local startups successfully expanded cross-border.',
    r6: isTr ? 'Yaratılan Ek Gelir' : 'Incremental Sales Generated',
    rd6: isTr ? 'Startup\'ların satış sistemleriyle ürettiği ciro.' : 'Revenue generated via our deployed sales systems.'
  };

  const experienceMetrics = [
    { title: t.e1, desc: t.ed1 },
    { title: t.e2, desc: t.ed2 },
    { title: t.e3, desc: t.ed3 },
    { title: t.e4, desc: t.ed4 },
    { title: t.e5, desc: t.ed5 },
    { title: t.e6, desc: t.ed6 }
  ];

  const futureMetrics = [
    { label: t.r1, value: '18+', desc: t.rd1 },
    { label: t.r2, value: '25+', desc: t.rd2 },
    { label: t.r3, value: '12', desc: t.rd3 },
    { label: t.r4, value: '$3.2M+', desc: t.rd4 },
    { label: t.r5, value: '6', desc: t.rd5 },
    { label: t.r6, value: isTr ? '₺12M+' : '$400K+', desc: t.rd6 }
  ];

  return (
    <section id="hakkimizda" className="py-24 relative overflow-hidden bg-[#080B12]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-cyan-500/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white/3 border border-white/5 p-1.5 font-sans">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-gradient-cyber text-[#0B0F19] shadow-md shadow-cyan-500/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.tabExp}
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'results'
                  ? 'bg-gradient-cyber text-[#0B0F19] shadow-md shadow-cyan-500/10'
                  : 'text-gray-400 hover:text-white font-semibold'
              }`}
            >
              {t.tabResults}
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
                <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed font-light">
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
                <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-light">
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
