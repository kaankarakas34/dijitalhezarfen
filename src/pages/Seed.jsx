import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Seed({ onOpenApplyModal, onNavigate }) {
  const focusAreas = [
    'Ürün-pazar uyumu (PMF) sinyalleri: aktivasyon, retention, tekrar kullanım ve referanslar.',
    'Fiyatlandırma, paketleme, müşteri segmentasyonu ve satış ekonomisi.',
    'Dijital pazarlama, outbound, partnerlik ve ürün içi büyüme kanalları.',
    'CRM, pipeline, lead scoring, satış tahmini ve müşteri başarısı (CS).',
    'CAC, LTV, brüt marj, geri ödeme süresi ve burn multiple hesaplamaları.',
    'Pitch deck, finansal model, data room ve yatırımcı görüşme hazırlığı.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Seed Aşaması"
        title="İlk sonuçları tekrarlanabilir büyümeye dönüştürün."
        description="Seed aşamasında amaç yalnızca daha fazla müşteri kazanmak değil; hangi müşterinin, hangi değer önerisiyle ve hangi kanaldan kârlı biçimde kazanıldığını anlamaktır."
        primaryCtaText="Seed Büyüme Görüşmesi"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Yatırıma Hazırlığı İncele"
        onSecondaryClick={() => onNavigate('/buyume-yatirim/yatirima-hazirlik')}
      />

      {/* Focus Areas */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Odak Alanlarımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Result */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Beklenen Sonuç</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Seed programı sonunda girişim; ölçülebilir bir büyüme denklemine, düzenli satış ritmine, takip edilen finansal metriklere ve yatırımcı karşısında savunulabilir bir büyüme hikâyesine sahip olmalıdır.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Büyüme Diagnostiği Al
            </button>
            <button
              onClick={() => onNavigate('/uygulama/dijital-pazarlama-growth')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Growth Hizmetlerini Gör
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
