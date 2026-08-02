import React from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';
import { Target, CheckCircle2 } from 'lucide-react';

export default function YatirimHazirlik({ onOpenApplyModal }) {
  const outputs = [
    'Yatırımcı odaklı pitch deck sunumu.',
    'One-pager (tek sayfalık özet) ve kısa yatırım özeti.',
    '3–5 yıllık detaylı finansal model ve gelecek senaryoları.',
    'Yatırım miktarı, runway süresi ve sermaye kullanım planı.',
    'Cap table (ortaklık yapısı) ve sulanma (dilution) senaryoları.',
    'Data room (veri odası) yapısı ve kontrol listesi.',
    'Yatırımcı hedef listesi ve görüşme akışı planı.',
    'Mock pitch (sunum simülasyonları) ve soru-cevap hazırlığı.'
  ];

  const faqItems = [
    {
      title: 'Yatırım garantisi veriliyor mu?',
      content: 'Hayır. Program girişimi hazırlar ve uygun erişim fırsatları geliştirebilir; nihai yatırım kararı tamamen yatırımcının bağımsız değerlendirmesine bağlıdır.'
    },
    {
      title: 'Fikrim varken başvurabilir miyim?',
      content: 'Başvurabilirsiniz; ancak yatırım hazırlığından önce problem/müşteri doğrulaması, MVP geliştirme veya traction (pazar ilgisi) çalışması yapılması önerilebilir.'
    },
    {
      title: 'Pitch deck tek başına hazırlanabilir mi?',
      content: 'Hazırlanabilir; fakat yatırımcı sunumunun finansal model, temel metrikler ve gerçekçi büyüme planıyla tam uyumlu olması başarı şansını ciddi oranda artırır.'
    }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Yatırıma Hazırlık"
        title="Yatırımcıya yalnızca fikir değil, güvenilir bir büyüme planı sunun."
        description="Güçlü bir sunum; müşteri kanıtını, büyüme verisini, ekonomiyi, kurucu ekibi ve sermaye kullanımını aynı hikâyede birleştirir."
        primaryCtaText="Yatırıma Hazırlık Başvurusu"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Pitch Değerlendirmesi İste"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* Program Çıktıları */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12 flex items-center justify-center gap-2">
            <Target className="w-8 h-8 text-cyber-cyan" />
            Program Çıktıları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {outputs.map((out, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-semibold">{out}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Sık Sorulan Sorular</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

    </div>
  );
}
