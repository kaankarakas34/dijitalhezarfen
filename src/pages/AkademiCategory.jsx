import React from 'react';
import PageHero from '../components/UI/PageHero';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function AkademiCategory({ type, onOpenApplyModal, onNavigate }) {
  const contentMap = {
    'pazarlama-satis': {
      badge: 'Pazarlama & Satış Eğitimleri',
      title: 'Talebi, satışı ve müşteri değerini birlikte yönetin.',
      desc: 'Pazarlama yalnızca görünürlük; satış yalnızca konuşma; CRM yalnızca yazılım değildir. Hepsi aynı gelir sisteminin parçalarıdır.',
      primaryCta: 'Eğitimleri Gör',
      secondaryCta: 'Kurumsal Program Talep Et',
      bullets: [
        'Pazarlama stratejisi ve konumlandırma.',
        'Dijital pazarlama ve performans reklamcılığı.',
        'SEO, içerik ve sosyal medya.',
        'Growth hacking ve deney yönetimi.',
        'B2B, B2C ve kurumsal satış.',
        'CRM, pipeline ve satış otomasyonu.',
        'Müzakere ve itiraz yönetimi.',
        'Müşteri başarısı, yenileme ve büyütme.'
      ],
      note: 'Bu programlarda yalnızca araç kullanımı değil; müşteri segmentasyonu, teklif, mesaj, kanal, metrik ve yönetim sistemi birlikte ele alınır.'
    },
    'teknoloji-yapay-zeka': {
      badge: 'Teknoloji & Yapay Zekâ Eğitimleri',
      title: 'Teknolojiyi yalnızca kullanan değil, yöneten olun.',
      desc: 'Girişimcinin her kodu yazması gerekmez; ancak ürün, veri, güvenlik ve teknoloji kararlarını anlayabilmesi gerekir.',
      primaryCta: 'Teknoloji Eğitimlerini Gör',
      secondaryCta: 'AI Programı Talep Et',
      bullets: [
        'Yapay zekâ okuryazarlığı ve iş kullanım senaryoları.',
        'Üretken AI, prompt sistemleri ve AI agent’lar.',
        'Yapay zekâ destekli çalışan MVP geliştirme.',
        'Yazılım geliştirme yaşam döngüsü ve ürün yönetimi.',
        'API, entegrasyon, CRM ve iş akışı otomasyonları.',
        'Veri analitiği, dashboard ve karar sistemleri.',
        'Siber güvenlik, veri güvenliği ve risk farkındalığı.'
      ],
      note: 'Teknik olmayan girişimcilerin teknoloji okuryazarlığını ve teknik ekiplerin iş anlayışını geliştirmek hedeflenir.'
    },
    'finans-hukuk-yonetim': {
      badge: 'Finans, Hukuk & Yönetim Eğitimleri',
      title: 'Şirketinizi yalnızca büyütmeyin; anlayarak yönetin.',
      desc: 'Nakit akışını, sözleşmeleri, vergiyi, ekibi ve performansı anlamayan bir kurucu büyümeyi sağlıklı yönetemez.',
      primaryCta: 'Programları İncele',
      secondaryCta: 'Kurumsal Eğitim İste',
      bullets: [
        'Finansal okuryazarlık ve finansal modelleme.',
        'Bütçe, nakit akışı, birim ekonomi ve değerleme.',
        'Muhasebe, vergi ve yönetim raporlaması.',
        'Şirketler hukuku, ticari sözleşmeler ve fikrî mülkiyet.',
        'Yatırım süreçleri, cap table ve data room.',
        'Liderlik, delegasyon ve yönetimsel beceriler.',
        'İnsan kaynakları, performans ve organizasyon tasarımı.',
        'İstatistik, veriyle karar verme ve tahminleme.'
      ],
      note: 'Kurucuların şirket yönetim okuryazarlığını geliştirmek üzere tasarlanmış kapsamlı dersler bütünüdür.'
    },
    'kurumsal': {
      badge: 'Kurumsal Akademi',
      title: 'Kurumunuza özel öğrenme sistemi kurun.',
      desc: 'Hazır eğitim kataloğundan seçim yapabilir veya kurumunuzun hedeflerine göre özel bir akademi programı tasarlayabilirsiniz.',
      primaryCta: 'Kurumsal Eğitim Talep Et',
      secondaryCta: 'Örnek Programları Gör',
      bullets: [
        'Yapay zekâ ve dijital dönüşüm.',
        'Satış, pazarlama, CRM ve müşteri deneyimi.',
        'Liderlik, yeni nesil yöneticilik ve delegasyon.',
        'Kurum içi girişimcilik ve inovasyon.',
        'Veri okuryazarlığı, istatistik ve karar verme.',
        'Siber güvenlik ve risk farkındalığı.'
      ],
      note: 'Müfredat, eğitmen, format ve uygulama projesi kuruma özel tasarlanır, jüri sunumu ve sonuç raporu ile teslim edilir.'
    }
  };

  const current = contentMap[type] || contentMap['pazarlama-satis'];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      <PageHero
        badge={current.badge}
        title={current.title}
        description={current.desc}
        primaryCtaText={current.primaryCta}
        onPrimaryClick={() => {
          if (type === 'kurumsal') {
            onOpenApplyModal('kurumsal');
          } else {
            onNavigate('/akademi/egitimler');
          }
        }}
        secondaryCtaText={current.secondaryCta}
        onSecondaryClick={() => onOpenApplyModal('kurumsal')}
      />

      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12 flex items-center justify-center gap-2">
            <BookOpen className="w-8 h-8 text-cyber-cyan" />
            Eğitim İçerikleri & Odak Alanları
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {current.bullets.map((b, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-semibold">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {current.note && (
        <section className="py-16 border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-gray-400 text-xs sm:text-sm sm:text-base leading-relaxed italic">
              {current.note}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
