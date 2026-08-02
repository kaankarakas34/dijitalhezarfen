import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Landmark, CheckCircle2 } from 'lucide-react';

export default function Kurumsal({ onOpenApplyModal }) {
  const areas = [
    'Kurumsal akademi ve dikey yetkinlik gelişim programları.',
    'Yapay zekâ benimseme, iş süreçleri otomasyonu ve dijitalleşme.',
    'Satış, pazarlama, CRM ve müşteri deneyimi (CX) sistemlerinin dönüşümü.',
    'Liderlik, yeni nesil yöneticilik ve organizasyonel tasarım.',
    'Kurum içi girişimcilik (intraprenörlük) ve inovasyon programları.',
    'Startup scouting (girişim tarama), pilot projeler ve teknoloji eşleştirme.',
    'Sponsorlu eğitim, ortak medya yayınları ve sektörel etkinlik projeleri.'
  ];

  const steps = [
    { num: '7', title: 'İhtiyaç Analizi', text: 'Kurumsal hedefler ve mevcut yetkinlik darboğazları analiz edilerek belirlenir.' },
    { num: '8', title: 'Yetkinlik Haritası', text: 'Katılımcı profilleri ve hedeflenen seviyeler için gelişim haritaları çıkarılır.' },
    { num: '9', title: 'Müfredat Tasarımı', text: 'Eğitmenler, format (online/yerinde) ve pratik uygulama projesi kuruma özel tasarlanır.' },
    { num: '10', title: 'Eğitim & Mentorluk', text: 'Ön test uygulamalarının ardından eğitimler, mentorluk ve uygulama süreci yürütülür.' },
    { num: '11', title: 'Proje Sunumu & Son Rapor', text: 'Son test uygulamaları yapılır, projeler jüriye sunulur ve çıktı raporu teslim edilir.' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Kurumsal Çözümler"
        title="Kurumunuzun insan, teknoloji ve girişimcilik kapasitesini birlikte geliştirin."
        description="Eğitimden uygulamaya uzanan kurumsal programlarımızla çalışan yetkinliğini ve yeni iş üretme kapasitesini en üst seviyeye yükseltin."
        primaryCtaText="Kurumsal Görüşme Planla"
        onPrimaryClick={() => onOpenApplyModal('kurumsal')}
        secondaryCtaText="Çözüm Alanlarını İncele"
        onSecondaryClick={() => {
          const element = document.querySelector('#cozum-alanlari');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Çözüm Alanları */}
      <section id="cozum-alanlari" className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12 flex items-center justify-center gap-2">
            <Landmark className="w-8 h-8 text-cyber-cyan" />
            Çözüm Alanlarımız
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((area, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Örnek Çalışma Modeli */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Örnek Çalışma Modelimiz</h2>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl glass border border-white/5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/15 text-cyber-cyan flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenApplyModal('kurumsal')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Kurumsal İhtiyaç Formunu Doldur
            </button>
            <button
              onClick={() => onOpenApplyModal('kurumsal')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Kurumsal Akademi Görüşmesi Planla
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
