import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Target, CheckCircle2 } from 'lucide-react';

export default function GrowthVenture({ onOpenApplyModal, onNavigate }) {
  const growthPoints = [
    'Ürün-pazar uyumu analizi ve kullanıcı retention oranlarının iyileştirilmesi.',
    'Tekrarlanabilir, ölçeklenebilir ve ölçülebilir müşteri edinme kanalları.',
    'Gelir operasyonları (RevOps) ve verimli satış sistemlerinin kurulması.',
    'Birim ekonomi varsayımları, LTV / CAC optimizasyonu ve sermaye verimliliği.',
    'Ekiplerin büyümesini destekleyen organizasyonel yapı ve liderlik kapasitesi.'
  ];

  const preparePoints = [
    'Yatırımcı odaklı pitch deck sunumu, tek sayfalık yönetici özeti ve demo.',
    'Finansal modelleme, değerleme yaklaşımı, bütçe ve yatırım fonu kullanım planı.',
    'Cap table (ortaklık tablosu) modelleme ve hisse seyrelme senaryolarının analizi.',
    'Data room (veri odası) yapısının kurulması, mock pitch simülasyonları.',
    'Hukuki ve teknik due diligence (durum tespiti) hazırlığı ve koordinasyonu.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Büyüme & Yatırım"
        title="Yatırım bir hedef değil, büyüme planının aracıdır."
        description="Önce girişimin neden sermayeye ihtiyaç duyduğu, sermayeyle hangi kilometre taşlarına ulaşacağı ve büyümenin nasıl ölçüleceği netleşmelidir."
        primaryCtaText="Yatırıma Hazırlık Görüşmesi"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Büyüme Diagnostiği Al"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Büyüme & Yatırıma Hazırlık */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Büyüme */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <span className="text-cyber-cyan text-3xl font-light">#</span>
              Büyüme
            </h3>
            <div className="space-y-3.5">
              {growthPoints.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Yatırıma Hazırlık */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <span className="text-cyber-cyan text-3xl font-light">#</span>
              Yatırıma Hazırlık
            </h3>
            <div className="space-y-3.5">
              {preparePoints.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{p}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Yatırımcı Erişimi */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Yatırımcı Erişimi</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Girişimin aşaması, sektörü, coğrafyası ve yatırım ihtiyacına uygun melek yatırımcılar, fonlar (VC), aile ofisleri, kurumlar ve stratejik ortaklarla görüşme fırsatları geliştirilebilir. Yatırım kararı tamamen yatırımcıların bağımsız değerlendirmesine bağlıdır.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Yatırıma Hazırlık Başvurusu Yap
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
