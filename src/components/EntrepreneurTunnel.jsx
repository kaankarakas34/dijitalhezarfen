import React, { useState } from 'react';
import { ArrowRight, BookOpen, BrainCircuit, Search, HelpCircle, Laptop, Landmark, ShieldCheck, Users, Briefcase, FileCheck, CheckCircle2 } from 'lucide-react';

export default function EntrepreneurTunnel({ onOpenApplyModal, lang }) {
  const [activeStage, setActiveStage] = useState(0);
  const isTr = lang === 'tr';

  // Help function for trending icon
  function TrendingUpIcon(props) {
    return (
      <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
      </svg>
    );
  }

  const t = {
    badge: isTr ? 'Amiral Programımız' : 'Our Flagship Program',
    title: isTr ? 'Girişimcilik Tüneli' : 'Entrepreneur Tunnel',
    subtitle: isTr ? '3–5 aylık yoğun girişimci yetiştirme programı.' : '3–5 months intensive founder development program.',
    introBadge: isTr ? 'Üstün nitelikli insan gücü yetiştiriyoruz.' : 'We train highly qualified human capital.',
    desc1: isTr
      ? 'Bir girişimcinin ihtiyaç duyabileceği neredeyse her şeyi öğretiyoruz. Çünkü özellikle startup’ların ilk dönemlerinde herkes her işi yapar. Girişim sahibi; yalnızca ürününü değil, müşterisini, satışını, pazarlamasını, finansını, teknolojisini, ekibini ve şirketini de anlamak zorundadır.'
      : 'We teach almost everything a founder might need. In early-stage startups, everyone wears multiple hats. A founder must master not only the product but also the customer base, sales pipelines, growth loops, financials, tech stack, team, and organization.',
    desc2: isTr
      ? 'Bir girişimcinin bütün işleri uzman seviyesinde yapmasını beklemiyoruz. Ancak doğru karar verebilmesi, doğru insanları yönetebilmesi ve yapılan işin kalitesini değerlendirebilmesi için şirketin temel fonksiyonlarına hâkim olması gerektiğine inanıyoruz.'
      : 'We do not expect a founder to execute every task at an expert level. However, to make sound decisions, manage teams effectively, and evaluate work quality, mastering the core functions of a company is critical.',
    stagesLabel: isTr ? 'Program Aşamaları' : 'Program Stages',
    stageLabel: isTr ? 'Aşama' : 'Stage',
    applyStageBtn: isTr ? 'Bu Aşamaya Başvur' : 'Apply to this Stage',
    noteText: isTr ? '* Her aşama teorik anlatım ve pratik uygulamalar içerir.' : '* Each stage contains theoretical strategies and practical execution.',
    
    // Methodology
    methodologyTitle: isTr ? 'Eğitim Metodolojimiz' : 'Our Training Methodology',
    methodologyDesc: isTr ? 'Program yalnızca derslerden oluşmaz, aktif bir pratik süreçtir.' : 'The program goes beyond standard lectures; it is an active practical sprint.',
    m1: isTr ? 'Ders' : 'Lecture',
    md1: isTr ? 'Teorik bilgi & strateji' : 'Theory & strategy',
    m2: isTr ? 'Uygulama' : 'Execution',
    md2: isTr ? 'Gerçek araçlarla çalışma' : 'Working with real tools',
    m3: isTr ? 'Ödev & Proje' : 'Project Sprints',
    md3: isTr ? 'Kendi girişimin için üretim' : 'Producing for your startup',
    m4: isTr ? 'Mentorluk' : 'Mentorship',
    md4: isTr ? 'Birebir uzman geri bildirimi' : '1-on-1 expert feedback',
    m5: isTr ? 'Sunum' : 'Pitching',
    md5: isTr ? 'Yatırımcı ve jüri karşısında Demo' : 'Demo in front of investors',

    // Outcomes
    outcomeBadge: isTr ? 'Programın Sonunda Neler Değişiyor?' : 'What Changes at the End?',
    outcomeTitle: isTr ? 'Katılımcının elde edeceği kazanımlar' : 'Outcomes and Key Takeaways',
    outcomeDesc: isTr ? 'Tünelden geçen her girişimci, fikrini doğrulamış ve yatırımcı karşısına çıkmaya hazır eksiksiz bir paketle mezun olur.' : 'Every founder graduating from the tunnel finishes with a validated business model and a complete data room ready for investors.',
    outcomeSuffix: isTr ? 'olmalı.' : 'must be achieved.',

    // CTA
    ctaApply: isTr ? 'Girişimcilik Tüneli’ne Başvur' : 'Apply to Entrepreneur Tunnel',
    ctaDetail: isTr ? 'Programı Ayrıntılı İncele' : 'View Program Details'
  };

  const stages = [
    {
      id: 1,
      title: isTr ? 'Girişimci Zihniyeti' : 'Entrepreneur Mindset',
      icon: BrainCircuit,
      items: isTr
        ? ['Kişisel farkındalık', 'Problem çözme', 'Belirsizlik yönetimi', 'Karar verme', 'Disiplin ve sorumluluk', 'Girişimci psikolojisi']
        : ['Personal awareness', 'Problem solving', 'Uncertainty management', 'Decision making', 'Discipline & responsibility', 'Founder psychology']
    },
    {
      id: 2,
      title: isTr ? 'Problem & Fikir Geliştirme' : 'Problem & Idea Discovery',
      icon: Search,
      items: isTr
        ? ['Problem keşfi', 'Müşteri görüşmeleri', 'Pazar araştırması', 'Fikir doğrulama', 'Değer önerisi', 'Rekabet analizi']
        : ['Problem discovery', 'Customer interviews', 'Market research', 'Idea validation', 'Value proposition', 'Competitive analysis']
    },
    {
      id: 3,
      title: isTr ? 'İş Modeli' : 'Business Model Design',
      icon: HelpCircle,
      items: isTr
        ? ['Gelir modelleri', 'Müşteri segmentleri', 'Fiyatlandırma', 'Birim ekonomi', 'İş modeli tasarımı', 'Ölçeklenebilirlik']
        : ['Revenue models', 'Customer segments', 'Pricing strategies', 'Unit economics', 'Business model canvas', 'Scalability']
    },
    {
      id: 4,
      title: isTr ? 'Ürün & Teknoloji' : 'Product & Technology',
      icon: Laptop,
      items: isTr
        ? ['Ürün yönetimi', 'Kullanıcı deneyimi (UX)', 'Yapay zekâ destekli MVP', 'Yazılım süreçleri', 'Veri ve analitik', 'Siber güvenlik']
        : ['Product management', 'User experience (UX)', 'AI-assisted MVP', 'Dev cycles & workflows', 'Data & analytics', 'Cybersecurity']
    },
    {
      id: 5,
      title: isTr ? 'Pazarlama & Satış' : 'Marketing & Sales',
      icon: TrendingUpIcon,
      items: isTr
        ? ['Marka ve konumlandırma', 'Dijital pazarlama', 'Growth hacking', 'Sosyal medya yönetimi', 'Reklam operasyonları', 'Satış & CRM', 'Müşteri başarısı']
        : ['Brand & positioning', 'Digital marketing', 'Growth hacking', 'Social media', 'Ad operations', 'Sales & CRM', 'Customer success']
    },
    {
      id: 6,
      title: isTr ? 'Finans, Hukuk & Muhasebe' : 'Finance, Legal & Accounting',
      icon: Landmark,
      items: isTr
        ? ['Finansal okuryazarlık', 'Nakit akışı yönetimi', 'Bütçe planlama', 'Finansal modelleme', 'Şirket kuruluşu', 'Ticari sözleşmeler', 'Vergi ve muhasebe', 'Fikrî mülkiyet']
        : ['Financial literacy', 'Cash flow management', 'Budget planning', 'Financial modeling', 'Company incorporation', 'Commercial agreements', 'Taxes & accounting', 'Intellectual property (IP)']
    },
    {
      id: 7,
      title: isTr ? 'İnsan & Yönetim' : 'People & Management',
      icon: Users,
      items: isTr
        ? ['Liderlik becerileri', 'İnsan kaynakları', 'Ekip yönetimi', 'Organizasyon tasarımı', 'Delegasyon', 'Performans yönetimi', 'Topluluk önünde konuşma', 'Müzakere']
        : ['Leadership skills', 'Human resources', 'Team management', 'Organizational design', 'Delegation', 'Performance reviews', 'Public speaking', 'Negotiation']
    },
    {
      id: 8,
      title: isTr ? 'Yatırım & Büyüme' : 'Fundraising & Growth',
      icon: Briefcase,
      items: isTr
        ? ['Pitch deck tasarımı', 'Yatırımcı sunumu', 'Data room hazırlığı', 'Şirket değerleme', 'Büyüme metrikleri', 'Yatırımcı görüşmeleri', 'Uluslararasılaşma']
        : ['Pitch deck design', 'Investor pitching', 'Data room preparation', 'Startup valuation', 'Growth metrics', 'Investor meetings', 'Globalization']
    }
  ];

  const outcomes = [
    isTr ? 'Bir problemi doğrulamış' : 'Have validated a core problem',
    isTr ? 'İş modelini oluşturmuş' : 'Have structured the business model',
    isTr ? 'Ürün veya MVP planını hazırlamış' : 'Have defined the product/MVP plan',
    isTr ? 'Pazarlama ve satış sistemini tasarlamış' : 'Have designed marketing & sales',
    isTr ? 'Finansal modelini oluşturmuş' : 'Have built a 3-year financial model',
    isTr ? 'Yatırım sunumunu hazırlamış' : 'Have finalized the pitch deck',
    isTr ? 'Kendi girişim yol haritasını çıkarmış' : 'Have mapped out the roadmap'
  ];

  const methodology = [
    { title: t.m1, desc: t.md1 },
    { title: t.m2, desc: t.md2 },
    { title: t.m3, desc: t.md3 },
    { title: t.m4, desc: t.md4 },
    { title: t.m5, desc: t.md5 }
  ];

  return (
    <section id="akademi" className="py-24 relative overflow-hidden bg-[#080B12]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-3">
            {t.title}
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-gray-400">
            {t.subtitle}
          </h3>
          <div className="h-1 w-20 bg-gradient-cyber mx-auto rounded-full mt-6 mb-8"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 font-semibold mb-8 text-sm">
            <span>{t.introBadge}</span>
          </div>

          <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4 max-w-3xl mx-auto font-light">
            <p>{t.desc1}</p>
            <p>{t.desc2}</p>
          </div>
        </div>

        {/* 8-Stage Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Stage Sidebar List */}
          <div className="lg:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3 mb-4">{t.stagesLabel}</h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 font-sans">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      activeStage === idx 
                        ? 'bg-gradient-cyber text-[#0B0F19] border-transparent font-bold shadow-lg shadow-cyan-500/15'
                        : 'bg-white/3 text-gray-300 border-white/5 hover:bg-white/5 hover:border-white/10 font-semibold'
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
                  <span className="text-xs font-bold text-cyber-cyan uppercase tracking-wider">{t.stageLabel} {stages[activeStage].id}</span>
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
              <span>{t.noteText}</span>
              <button 
                onClick={() => onOpenApplyModal('tunel')}
                className="text-cyber-cyan font-bold hover:underline flex items-center gap-1.5 cursor-pointer font-sans"
              >
                <span>{t.applyStageBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h4 className="text-xl font-bold text-white font-sans">{t.methodologyTitle}</h4>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">{t.methodologyDesc}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {methodology.map((m, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 text-center group hover:border-cyan-500/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyber-cyan font-bold text-sm flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h5 className="font-bold text-sm text-white">{m.title}</h5>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1 leading-snug font-light">{m.desc}</p>
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
                <span>{t.outcomeBadge}</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-extrabold text-white font-sans leading-tight">
                {t.outcomeTitle}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                {t.outcomeDesc}
              </p>
            </div>

            <div className="w-full lg:max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {outcomes.map((out, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#080B12]/80 border border-white/5">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyber-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-300 font-medium leading-snug">{out} <strong className="text-white">{t.outcomeSuffix}</strong></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
          <button
            onClick={() => onOpenApplyModal('tunel')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            {t.ctaApply}
          </button>
          
          <button
            onClick={() => onOpenApplyModal('egitim')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center cursor-pointer"
          >
            {t.ctaDetail}
          </button>
        </div>

      </div>
    </section>
  );
}
