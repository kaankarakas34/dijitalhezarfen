import React from 'react';
import PageHero from '../components/UI/PageHero';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function SeriesA({ onOpenApplyModal, onNavigate }) {
  const workspaces = [
    'Marketing, satış ve müşteri başarısının (CS) ortak gelir sistemi altında hizalanması.',
    'Yönetim dashboard’ları, KPI, bütçe, tahmin ve performans ritmi.',
    'Organizasyon şeması, yetki matrisi, liderlik rolleri ve delegasyon sistemleri.',
    'Süreç otomasyonu, veri altyapısı, kalite ve operasyonel verimlilik iyileştirmesi.',
    'Yeni ürün, segment, kanal ve ülke büyümesinin önceliklendirilmesi.',
    'Yönetim kurulu raporlaması ve ileri yatırım turu (Series B+) hazırlığı.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Series A ve Sonrası"
        title="Büyüme hızınız, şirket kapasitenizin önüne geçmesin."
        description="Series A ve sonrasında sorun çoğu zaman talep eksikliği değil; ekiplerin, verinin, finansın ve yönetim sistemlerinin büyümeyi taşıyamamasıdır."
        primaryCtaText="Ölçeklenme Görüşmesi"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="RevOps Çözümlerini İncele"
        onSecondaryClick={() => onNavigate('/uygulama/satis-crm')}
      />

      {/* Workspaces */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Çalışma Alanlarımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workspaces.map((space, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{space}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurucudan Kuruma Geçiş */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Kurucudan Kuruma Geçiş</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Şirket büyürken kurucunun bütün kararların merkezinde kalması büyümeyi yavaşlatır. Amaç kurucuyu şirketten uzaklaştırmak değil; kurucunun vizyon, sermaye, liderlik ve stratejik ilişkiler gibi en yüksek değer ürettiği alanlara odaklanmasını sağlamaktır.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Ölçeklenme Yol Haritası İste
            </button>
            <button
              onClick={() => onNavigate('/uygulama/yonetim-organizasyon')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Yönetim Hizmetlerini İncele
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
