import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Target, CheckCircle2 } from 'lucide-react';

export default function UygulamaGrowth({ onOpenApplyModal }) {
  const services = [
    'Pazarlama stratejisi, marka konumlandırma ve değer önerisi mesaj seti.',
    'Google, Meta, LinkedIn, TikTok ve programatik reklam yönetimleri.',
    'Arama motoru optimizasyonu (SEO), içerik pazarlaması ve organik büyüme.',
    'Sosyal medya hesap yönetimi, topluluk oluşturma ve kurucu markası (Founder brand).',
    'Landing page, CRO (Dönüşüm Oranı Optimizasyonu), onboarding ve huni optimizasyonu.',
    'E-posta, WhatsApp pazarlaması, lead nurturing (müşteri adayı besleme) ve yeniden hedefleme.',
    'Growth deney altyapısı, kohort analizi, CAC ve LTV analitiği.'
  ];

  const steps = [
    { num: '18', title: 'Metrik & Büyüme Denklemi', text: 'Büyüme denklemi kurulur ve North Star Metric (Kutup Yıldızı Metriği) belirlenir.' },
    { num: '19', title: 'Huni & Davranış Analizi', text: 'Mevcut pazarlama hunisi (funnel) ve müşteri davranışları detaylı analiz edilir.' },
    { num: '20', title: 'Deney Havuzu Kurulumu', text: 'Deney fikirleri havuzu oluşturulur ve tahmini etki/çabaya göre sıralanır (ICE score vb.).' },
    { num: '21', title: 'Kısa Büyüme Sprintleri', text: 'Kısa haftalık sprintlerle tasarlanan büyüme deneyleri canlıda uygulanır.' },
    { num: '22', title: 'Ölçümleme & Ölçekleme', text: 'Deney sonuçları ölçülür; başarıya ulaşan kanıtlanmış büyüme süreçleri ölçeklenir.' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Dijital Pazarlama & Growth"
        title="Reklam vermekle büyüme sistemi kurmak aynı şey değildir."
        description="Müşteri segmenti, teklif, ürün, kanal, içerik, satış ve retention birlikte çalışmadığında reklam bütçesi sürdürülebilir büyüme üretmez."
        primaryCtaText="Growth Analizi İste"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Pazarlama Görüşmesi Planla"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Hizmetler */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Growth & Pazarlama Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Metodolojisi */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Growth Metodolojimiz</h2>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl glass border border-white/5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/15 text-cyber-cyan flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Growth Diagnostiği Al
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
