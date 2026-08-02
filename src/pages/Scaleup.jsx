import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Globe, CheckCircle2 } from 'lucide-react';

export default function Scaleup({ onOpenApplyModal, onNavigate }) {
  const agendas = [
    'Ülke ve pazar önceliklendirmesi, lokalizasyon ve pazara giriş modelleri.',
    'Çoklu ürün, çoklu kanal ve çoklu ülke portföyünün uçtan uca yönetilmesi.',
    'Bölgesel satış ekipleri, partnerlik ve kurumsal müşteri edinme sistemleri.',
    'Orta ve üst yönetim seviyesi liderlik kapasitesinin geliştirilmesi.',
    'Sermaye verimliliği, bütçe disiplini ve ileri seviye finansman senaryoları.',
    'Kurumsal marka, itibar, medya ilişkileri ve stratejik paydaş yönetimi.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Scale-up Aşaması"
        title="Yerel başarıyı küresel bir sisteme dönüştürün."
        description="Scale-up aşamasında büyümenin konusu yalnızca satış değildir. Organizasyon, liderlik, finans, teknoloji ve pazar stratejisi birlikte ölçeklenmelidir."
        primaryCtaText="Global Büyüme Görüşmesi"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Uluslararasılaşmayı İncele"
        onSecondaryClick={() => onNavigate('/buyume-yatirim/uluslararasilasma')}
      />

      {/* Scale-up Gündemi */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Scale-up Gündemi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agendas.map((agenda, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{agenda}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Globalleşme Yaklaşımı */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans flex items-center justify-center gap-2">
            <Globe className="w-8 h-8 text-cyber-cyan" />
            Globalleşme Yaklaşımı
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Her başarılı yerel model başka bir ülkede aynı şekilde çalışmaz. Dijital Hezarfen; ürünün, fiyatın, mesajın, kanalın, hukuki yapının ve müşteri edinme yönteminin hedef pazara göre yeniden tasarlanmasını sağlar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Globalleşme Planı Oluştur
            </button>
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Scale-up Desteği Al
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
