import React from 'react';
import PageHero from '../components/UI/PageHero';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function UygulamaYonetim({ onOpenApplyModal }) {
  const fields = [
    'Vizyon, stratejik öncelikler, yıllık ve çeyreklik hedefler (OKR) planlama.',
    'OKR, KPI dashboard sistemleri ve haftalık/çeyreklik performans toplantıları.',
    'Organizasyon şeması, rol tanımları, sorumluluk ve yetki matrisi.',
    'Süreç haritalama, standart çalışma yönergeleri (SOP) ve otomasyon entegrasyonu.',
    'Liderlik gelişimi, delegasyon yetkinliği ve yönetici mentorluk programları.',
    'İnsan kaynakları süreçleri, işe alım planı ve performans değerlendirme sistemi.',
    'Yönetim kurulu raporlamaları ve yatırımcı ilişkileri koordinasyonu.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Yönetim & Organizasyon"
        title="Şirket büyürken yönetim sistemi de büyümelidir."
        description="Kurucunun zihninde çalışan şirket; ekip büyüdükçe görünür hedeflere, sorumluluklara, net süreçlere ve karar mekanizmalarına ihtiyaç duyar."
        primaryCtaText="Yönetim Diagnostiği İste"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Organizasyon Görüşmesi Planla"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Hizmet Alanları */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Hizmet Alanlarımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fields.map((field, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{field}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Yönetim Sistemini Değerlendir
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
