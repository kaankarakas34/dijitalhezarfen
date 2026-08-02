import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Target, CheckCircle2 } from 'lucide-react';

export default function UygulamaSatis({ onOpenApplyModal }) {
  const systems = [
    'Ideal Customer Profile (İdeal Müşteri Profili - ICP) ve pazar segmentasyonu.',
    'Değer önerisi mesajları, satış pitch tasarımı, teklif ve fiyat paketleri oluşturma.',
    'Inbound, outbound, kanal satışları ve kurumsal B2B satış süreçlerinin tasarımı.',
    'CRM seçimi, pipeline (satış hunisi) aşamaları, veri alanları ve otomasyon kurulumları.',
    'Lead scoring (müşteri adayı puanlama), görev yönetimi, takip ve satış tahmini.',
    'SDR/BDR satış senaryoları (cold outreach), arama, toplantı ve itiraz yönetimleri.',
    'Müşteri onboarding (işe alım), customer success, lisans yenileme, upsell ve churn azaltma.',
    'Pazarlama, satış ve customer success verilerini bağlayan RevOps (Revenue Operations) raporlaması.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Satış & CRM Altyapısı"
        title="Satışı kişilere bağlı faaliyetten ölçülebilir sisteme dönüştürün."
        description="Doğru müşteri, doğru teklif, disiplinli takip, görünür pipeline ve pazarlamayla hizalanmış satış operasyonu inşa ediyoruz."
        primaryCtaText="Satış Sistemi Analizi"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="CRM Kurulumu Talep Et"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Kurulan Sistem */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Kurulan Sistem & Altyapı</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {systems.map((sys, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{sys}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Satış ve CRM Görüşmesi Planla
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
