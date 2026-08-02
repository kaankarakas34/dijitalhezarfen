import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function UygulamaAI({ onOpenApplyModal }) {
  const areas = [
    'Web, WhatsApp ve sosyal medya chatbot’ları.',
    'Gelen ve giden aramalar için AI voice agent.',
    'Lead toplama, eleme, randevu ve CRM aktarımı.',
    'Teklif, rapor, özet, e-posta ve doküman otomasyonları.',
    'Bilgi tabanı, kurum içi asistan ve arama sistemleri.',
    'Veri işleme, sınıflandırma, tahmin ve dashboard.',
    'n8n, Make, Zapier, webhook ve API tabanlı iş akışları.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Yapay Zekâ & Otomasyon"
        title="Tekrarlanan işleri otomatikleştirin, insanı daha değerli işlere ayırın."
        description="Yapay zekâyı yalnızca içerik üretim aracı olarak değil; satış, müşteri hizmetleri, operasyon, veri ve karar sistemlerinin parçası olarak kullanın."
        primaryCtaText="AI Fırsat Analizi İste"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Otomasyon Görüşmesi Planla"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Çözüm Alanları */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12 flex items-center justify-center gap-2">
            <Cpu className="w-8 h-8 text-cyber-cyan" />
            Çözüm Alanlarımız
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yaklaşım */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Yaklaşımımız</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Önce kullanılacak AI aracı değil, işletme problemi seçilir. Süreç haritalanır; hata, maliyet, süre ve insan kontrolü ihtiyaçları belirlenir. Güvenlik ve veri erişimi planlandıktan sonra pilot uygulama geliştirilir.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              AI ve Otomasyon İhtiyacını Anlat
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
