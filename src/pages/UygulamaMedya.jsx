import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Camera, CheckCircle2 } from 'lucide-react';

export default function UygulamaMedya({ onOpenApplyModal }) {
  const services = [
    'Marka stratejisi, isim bulma, görsel kurumsal kimlik ve mesaj kılavuzu.',
    'Web sitesi, sunum şablonları, sosyal medya şablonları ve reklam görsel tasarımı.',
    'YouTube yayıncılığı, podcast serileri, kurucu röportajları ve video programları.',
    'Tanıtım ve reklam filmi, ürün kullanım videoları ve sosyal medya dikey videoları (Reels/Shorts).',
    'Kurucu kişisel markası (Thought leadership) ve LinkedIn içerik yönetimi.',
    'Veri raporları, pazar analizleri, sektörel e-kitaplar ve uzun format içerik tasarımları.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Medya, Tasarım & İçerik"
        title="Güçlü fikirleri görünür, anlaşılır ve hatırlanabilir hâle getirin."
        description="Markanızın ne söylediği kadar bunu nasıl gösterdiği, hangi formatta anlattığı ve kime ulaştırdığı da önemlidir."
        primaryCtaText="Medya Projesi Talep Et"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="İçerik İhtiyacını Anlat"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Hizmet Alanları */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12 flex items-center justify-center gap-2">
            <Camera className="w-8 h-8 text-cyber-cyan" />
            Yaratıcı Hizmet Alanlarımız
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Medya ve Tasarım Görüşmesi Planla
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
