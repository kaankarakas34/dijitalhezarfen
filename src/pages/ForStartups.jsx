import React from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ForStartups({ onOpenApplyModal, onNavigate }) {
  
  const stages = [
    { name: 'Fikir', question: 'Gerçek ve değerli bir problem mi?', output: 'Doğrulanmış problem ve iş modeli hipotezi', path: '/girisimler/fikir-asamasi' },
    { name: 'Pre-seed', question: 'Çözüm çalışıyor ve kullanıcı değer görüyor mu?', output: 'Çalışan MVP, pilot ve çekirdek plan', path: '/girisimler/pre-seed' },
    { name: 'Seed', question: 'Büyüme tekrarlanabilir hâle geliyor mu?', output: 'Ürün-pazar uyumu, satış sistemi ve yatırım hazırlığı', path: '/girisimler/seed' },
    { name: 'Series A+', question: 'Ekip ve süreçler büyümeyi taşıyor mu?', output: 'RevOps, organizasyon, yönetişim ve sermaye verimliliği', path: '/girisimler/series-a-ve-sonrasi' },
    { name: 'Scale-up', question: 'Yeni pazarlarda aynı başarı üretilebilir mi?', output: 'Uluslararasılaşma, liderlik ve ileri büyüme', path: '/girisimler/scale-up' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Girişimler İçin"
        title="Her girişimin ihtiyacı aynı değildir."
        description="Fikir aşamasındaki bir girişimle Series A sonrası büyüyen bir şirketin soruları, kaynakları ve öncelikleri farklıdır. Desteği bulunduğunuz aşamaya göre tasarlarız."
        primaryCtaText="Girişim Diagnostiğine Başla"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Aşama Sayfalarını İncele"
        onSecondaryClick={() => {
          const element = document.querySelector('#asama-bazli');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Aşama Bazlı Yaklaşım */}
      <section id="asama-bazli" className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-5">Aşama Bazlı Yaklaşım</h2>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-12">
            Dijital Hezarfen'de bütün girişimlere aynı paket sunulmaz. Önce girişimin bulunduğu aşama ve büyüme darboğazı belirlenir. Eğitim, uygulama ve uzmanlık desteği buna göre bir araya getirilir.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {stages.map((st, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl glass border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-cyan-500/20 transition-all cursor-pointer"
                onClick={() => onNavigate(st.path)}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-extrabold text-cyber-cyan uppercase tracking-wider bg-cyan-500/10 px-2.5 py-1 rounded">Aşama {idx + 1}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors">{st.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">
                    <strong className="text-gray-300">Temel Soru:</strong> {st.question}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    <strong className="text-gray-300">Öncelikli Çıktı:</strong> {st.output}
                  </p>
                </div>
                <button className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan group-hover:underline cursor-pointer">
                  <span>Detayları İncele</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Girişim Diagnostik Görüşmesi */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Girişim Diagnostik Görüşmesi</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Başvuru sonrasında girişimin ürünü, müşterisi, geliri, ekibi, teknoloji altyapısı, satış sistemi, finansal görünümü ve büyüme hedefleri değerlendirilir. Görüşmenin amacı girişimciye daha fazla iş çıkarmak değil; doğru sırayı bulmaktır.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Girişim Diagnostiğine Başvur
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
