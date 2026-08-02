import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Globe, CheckCircle2 } from 'lucide-react';

export default function Globallesme({ onOpenApplyModal }) {
  const steps = [
    'Ülke seçimi, pazar önceliklendirmesi ve analiz raporları.',
    'Müşteri segmenti, yerel rekabet analizi ve satın alma davranışları.',
    'Ürün özellikleri, fiyatlama, pazarlama mesajı ve süreç lokalizasyonu.',
    'Doğrudan satış, yerel ortak, distribütör ve kanal ortaklık seçenekleri.',
    'Şirketleşme, yerel hukuk, vergi ve veri saklama (data privacy) gereksinimleri.',
    'İlk yerel müşterilerin kazanılması, pilot ve referans stratejisi.',
    'Global pazarlama, dijital reklam, satış ve medya planlaması.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Uluslararasılaşma"
        title="Globalleşmek, yalnızca ürünü başka dile çevirmek değildir."
        description="Hedef pazarın pazar dinamikleri, müşteri alışkanlıkları, fiyatlandırma, yasal yapılar, satış ve operasyon modeli hedef ülkeye göre yeniden tasarlanmalıdır."
        primaryCtaText="Globalleşme Analizi İste"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Yeni Pazar Görüşmesi Planla"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Pazara Giriş Çalışması */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12 flex items-center justify-center gap-2">
            <Globe className="w-8 h-8 text-cyber-cyan" />
            Pazara Giriş Çalışması
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{step}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Yeni Pazar Yol Haritası İste
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
