import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Landmark, FileText, Scale, CheckCircle2 } from 'lucide-react';

export default function UygulamaFinans({ onOpenApplyModal }) {
  const financePoints = [
    'Bütçe, nakit akışı, runway (pist süresi) ve senaryo planlama.',
    'Birim ekonomi (unit economics), fiyatlandırma, brüt marj, CAC ve LTV analizi.',
    'Finansal model, yatırım fonu kullanım planı ve yönetim kurulu raporları.'
  ];

  const accountingPoints = [
    'Mali müşavir süreçlerinin ve yönetim raporlamasının düzenlenmesi.',
    'Belge takibi, vergi takvimi, nakit akışı ve yükümlülüklerin görünürlüğü.'
  ];

  const legalPoints = [
    'Kurucu ortaklık sözleşmesi, çalışan, müşteri, tedarikçi ve iş ortağı sözleşmeleri.',
    'Fikrî mülkiyet koruma, marka tescili, veri koruma, KVKK/GDPR ve ticari risk yönetimi.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Finans, Muhasebe & Hukuk"
        title="Büyümenin finansal ve hukuki temelini sağlam kurun."
        description="Gelir büyürken nakit akışı, sözleşmeler, vergi, fikrî mülkiyet ve raporlama kontrolleri asla sahipsiz kalmamalıdır."
        primaryCtaText="Finansal Diagnostik İste"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Uzman Görüşmesi Talep Et"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Main Grid */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Finans */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-white font-sans flex items-center gap-2">
              <Landmark className="w-5.5 h-5.5 text-cyber-cyan" />
              Finans
            </h3>
            <div className="space-y-3">
              {financePoints.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Muhasebe */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-white font-sans flex items-center gap-2">
              <FileText className="w-5.5 h-5.5 text-blue-400" />
              Muhasebe
            </h3>
            <div className="space-y-3">
              {accountingPoints.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hukuk */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-white font-sans flex items-center gap-2">
              <Scale className="w-5.5 h-5.5 text-violet-400" />
              Hukuk
            </h3>
            <div className="space-y-3">
              {legalPoints.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Note & Action */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <p className="text-gray-400 text-xs sm:text-sm italic leading-relaxed max-w-2xl mx-auto">
            * Muhasebe, hukuk ve düzenlemeye tabi konular, ekosistemimizin ilgili yetkiye sahip lisanslı uzmanları ve akredite çözüm ortakları üzerinden güvenle yürütülür.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Finans ve Hukuk İhtiyacını Anlat
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
