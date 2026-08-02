import React from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function UygulamaHome({ onOpenApplyModal, onNavigate }) {
  
  const services = [
    { area: 'Ürün & Yazılım', sample: 'Çalışan MVP, web, mobil, SaaS, entegrasyon, ürün analitiği', path: '/uygulama/yazilim-mvp' },
    { area: 'AI & Otomasyon', sample: 'AI agent, chatbot, voice agent, iş akışı ve raporlama', path: '/uygulama/yapay-zeka-otomasyon' },
    { area: 'Pazarlama & Medya', sample: 'Marka kimliği, reklam yönetimi, SEO, sosyal medya, içerik, prodüksiyon', path: '/uygulama/medya-tasarim' },
    { area: 'Satış & CRM', sample: 'ICP, teklif tasarımı, pipeline, CRM kurulumu, otomasyon, RevOps', path: '/uygulama/satis-crm' },
    { area: 'Finans & Şirket', sample: 'Finansal model, bütçe, raporlama, hukuk ve muhasebe koordinasyonu', path: '/uygulama/finans-hukuk' },
    { area: 'Yönetim & Büyüme', sample: 'OKR, organizasyon tasarımı, süreç verimliliği, liderlik, globalleşme', path: '/uygulama/yonetim-organizasyon' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Uygulama Hizmetleri"
        title="Yalnızca ne yapılacağını söylemiyoruz, Yapılmasına da yardımcı oluyoruz."
        description="Stratejiyi çalışan ürüne, pazarlamayı talebe, satış sürecini gelire ve büyüme planını uygulanabilir sisteme dönüştürüyoruz."
        primaryCtaText="İhtiyacını Anlat"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Hizmetleri İncele"
        onSecondaryClick={() => {
          const element = document.querySelector('#hizmet-alanlari');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Uygulama Yaklaşımı */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Uygulama Yaklaşımı</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Her girişimin bütün hizmetlere aynı anda ihtiyacı yoktur. Önce en önemli darboğaz belirlenir. Proje, sprint, aylık çalışma veya kurum içi ekiple birlikte yürütülen hibrit model seçilir.
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            İhtiyaç hâlinde girişime uygun co-founder, uzman veya proje ekibi oluşturulmasına destek verilebilir. Bu hizmet ana konumlandırma değil, uygulamanın tamamlanmasını sağlayan destekleyici bir kapasitedir.
          </p>
        </div>
      </section>

      {/* Hizmet Alanları Table */}
      <section id="hizmet-alanlari" className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Hizmet Alanları & Örnek Çıktılar</h2>
          <div className="grid grid-cols-1 gap-4">
            {services.map((s, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl glass border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-cyan-500/20 transition-all cursor-pointer"
                onClick={() => onNavigate(s.path)}
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">{s.area}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    <strong className="text-gray-300">Örnek Çıktılar:</strong> {s.sample}
                  </p>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan group-hover:underline cursor-pointer shrink-0">
                  <span>Hizmeti İncele</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Uygulama Görüşmesi Talep Et
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
