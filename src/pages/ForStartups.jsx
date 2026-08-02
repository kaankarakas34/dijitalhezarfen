import React from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ForStartups({ onOpenApplyModal, onNavigate, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Girişimler İçin' : 'For Startups',
    title: isTr ? 'Her girişimin ihtiyacı aynı değildir.' : 'Every startup\'s needs are different.',
    desc: isTr ? 'Fikir aşamasındaki bir girişimle Series A sonrası büyüyen bir şirketin soruları, kaynakları ve öncelikleri farklıdır. Desteği bulunduğunuz aşamaya göre tasarlarız.' : 'The challenges, resources, and priorities of an early idea stage venture versus a post-Series A scale-up differ significantly. We adapt our support to your current stage.',
    btnPrimary: isTr ? 'Girişim Diagnostiğine Başla' : 'Start Startup Diagnostics',
    btnSecondary: isTr ? 'Aşama Sayfalarını İncele' : 'Explore Stage Details',
    approachTitle: isTr ? 'Aşama Bazlı Yaklaşım' : 'Stage-Based Approach',
    approachDesc: isTr ? 'Dijital Hezarfen\'de bütün girişimlere aynı paket sunulmaz. Önce girişimin bulunduğu aşama ve büyüme darboğazı belirlenir. Eğitim, uygulama ve uzmanlık desteği buna göre bir araya getirilir.' : 'We do not offer generic packages. First, we identify your startup\'s current stage and operational bottlenecks. We then synthesize custom training, execution, and expert support.',
    diagnosticsTitle: isTr ? 'Girişim Diagnostik Görüşmesi' : 'Startup Diagnostic Session',
    diagnosticsDesc: isTr ? 'Başvuru sonrasında girişimin ürünü, müşterisi, geliri, ekibi, teknoloji altyapısı, satış sistemi, finansal görünümü ve büyüme hedefleri değerlendirilir. Görüşmenin amacı girişimciye daha fazla iş çıkarmak değil; doğru sırayı bulmaktır.' : 'Following your application, we evaluate your product, customer validation, revenue, team structure, tech stack, sales pipelines, and financials. The goal is to discover the right sequencing of priorities, not to create extra work.',
    btnApply: isTr ? 'Girişim Diagnostiğine Başvur' : 'Apply for Diagnostics',
    questionLabel: isTr ? 'Temel Soru' : 'Core Question',
    outputLabel: isTr ? 'Öncelikli Çıktı' : 'Key Deliverable',
    detailBtn: isTr ? 'Detayları İncele' : 'View Stage Details'
  };

  const stages = [
    { 
      name: isTr ? 'Fikir' : 'Idea', 
      question: isTr ? 'Gerçek ve değerli bir problem mi?' : 'Is it a real and valuable problem?', 
      output: isTr ? 'Doğrulanmış problem ve iş modeli hipotezi' : 'Validated problem statement and business model hypothesis', 
      path: '/girisimler/fikir-asamasi' 
    },
    { 
      name: 'Pre-seed', 
      question: isTr ? 'Çözüm çalışıyor ve kullanıcı değer görüyor mu?' : 'Is the solution working and creating user value?', 
      output: isTr ? 'Çalışan MVP, pilot ve çekirdek plan' : 'Working MVP, pilot cohort, and core plan', 
      path: '/girisimler/pre-seed' 
    },
    { 
      name: 'Seed', 
      question: isTr ? 'Büyüme tekrarlanabilir hâle geliyor mu?' : 'Is growth becoming repeatable?', 
      output: isTr ? 'Ürün-pazar uyumu, satış sistemi ve yatırım hazırlığı' : 'Product-market fit, scalable sales pipelines, and investor readiness', 
      path: '/girisimler/seed' 
    },
    { 
      name: 'Series A+', 
      question: isTr ? 'Ekip ve süreçler büyümeyi taşıyor mu?' : 'Are team structures and processes supporting growth?', 
      output: isTr ? 'RevOps, organizasyon, yönetişim ve sermaye verimliliği' : 'RevOps, organizational matrix, governance, and capital efficiency', 
      path: '/girisimler/series-a-ve-sonrasi' 
    },
    { 
      name: 'Scale-up', 
      question: isTr ? 'Yeni pazarlarda aynı başarı üretilebilir mi?' : 'Can the same success be replicated in international markets?', 
      output: isTr ? 'Uluslararasılaşma, liderlik ve ileri büyüme' : 'International expansion, leadership capabilities, and late-stage growth planning', 
      path: '/girisimler/scale-up' 
    }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText={t.btnSecondary}
        onSecondaryClick={() => {
          const element = document.querySelector('#asama-bazli');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Aşama Bazlı Yaklaşım */}
      <section id="asama-bazli" className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-5">{t.approachTitle}</h2>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-12 font-light">
            {t.approachDesc}
          </p>

          <div className="grid grid-cols-1 gap-4">
            {stages.map((st, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl glass border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-cyan-500/20 transition-all cursor-pointer"
                onClick={() => onNavigate(st.path)}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold text-cyber-cyan uppercase tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded font-sans">
                      {isTr ? `Aşama ${idx + 1}` : `Stage ${idx + 1}`}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">{st.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 font-light">
                    <strong className="text-gray-300 font-semibold">{t.questionLabel}:</strong> {st.question}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 font-light">
                    <strong className="text-gray-300 font-semibold">{t.outputLabel}:</strong> {st.output}
                  </p>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan group-hover:underline cursor-pointer font-sans">
                  <span>{t.detailBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Girişim Diagnostik Görüşmesi */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">{t.diagnosticsTitle}</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            {t.diagnosticsDesc}
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer font-sans"
            >
              {t.btnApply}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
