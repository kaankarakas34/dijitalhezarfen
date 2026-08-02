import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';

export default function Sss({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('genel');

  const categories = [
    { id: 'genel', label: 'Genel Sorular' },
    { id: 'programlar', label: 'Programlar & Akademi' },
    { id: 'uygulama', label: 'Uygulama Hizmetleri' }
  ];

  const faqItems = {
    genel: [
      {
        title: 'Dijital Hezarfen yalnızca eğitim mi veriyor?',
        content: 'Hayır. Akademinin yanında yazılım, AI, pazarlama, satış, CRM, finans, hukuk ve yönetim alanlarında doğrudan uygulama hizmetleri de sunar.'
      },
      {
        title: 'Şirketim olmadan başvurabilir miyim?',
        content: 'Evet. Fikir aşaması ve Girişimcilik Tüneli programımız için şirket kurmuş olmanız gerekmez.'
      },
      {
        title: 'Her başvuru kabul ediliyor mu?',
        content: 'Hayır. Program ve hizmet kapsamına uygunluk, çalışma disiplini, ihtiyaç duyulan alanlar ve ekibin kapasitesi detaylı değerlendirilir.'
      },
      {
        title: 'Etkinlikler herkese açık mı?',
        content: 'Etkinliğe göre değişiklik gösterir. Bazı etkinliklerimiz açık kayıt modeliyle, bazıları ise başvuru veya özel davet modeliyle gerçekleştirilir.'
      }
    ],
    programlar: [
      {
        title: 'Yatırım garantisi veriliyor mu?',
        content: 'Hayır. Hiçbir programımız doğrudan yatırım veya gelir garantisi vermez. Programlar girişimi yatırıma hazırlar ve yatırımcı erişim imkanları geliştirir.'
      },
      {
        title: 'Eğitimler online mı?',
        content: 'Programlar online, yüz yüze veya hibrit olarak açılabilir. Güncel kohortun formatı başvuru formlarında ve program duyurularında belirtilir.'
      },
      {
        title: 'Sertifika verilecek mi?',
        content: 'Devam, uygulama ve dönem sonu proje koşullarını başarıyla tamamlayan katılımcılara program belgesi veya sertifika verilebilir.'
      }
    ],
    uygulama: [
      {
        title: 'Sadece tek bir hizmet alabilir miyim?',
        content: 'Evet. İhtiyacınız yalnızca çalışan MVP yazılımı, CRM kurulumu, pazarlama optimizasyonu veya finansal modelleme olabilir. Kapsam ön görüşmeyle belirlenir.'
      },
      {
        title: 'Hizmetler startup dışındaki şirketlere açık mı?',
        content: 'Evet. KOBİ ve kurumsal şirketler de akademiden, dijital dönüşüm, AI otomasyonu, satış, pazarlama ve yönetim uygulama hizmetlerimizden yararlanabilir.'
      },
      {
        title: 'Co-founder veya ekip buluyor musunuz?',
        content: 'Gerektiğinde destekleyici bir hizmet olarak rol/kurucu taraması yapılabilir; ancak bu konu Dijital Hezarfen’in ana hizmet konumlandırması değildir.'
      }
    ]
  };

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Yardım & Destek"
        title="Sık Sorulan Sorular"
        description="Başvuru öncesi aklınıza takılabilecek temel sorular, itirazlar ve belirsizlikleri gidermek için hazırladığımız cevaplar."
        primaryCtaText="Başvuru Merkezine Git"
        onPrimaryClick={() => onNavigate('/basvur')}
        secondaryCtaText="İletişime Geç"
        onSecondaryClick={() => onNavigate('/iletisim')}
      />

      {/* Categorized Tabs */}
      <section className="py-12 border-t border-white/5 bg-[#080B12] sticky top-20 z-20 shadow-md">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-1.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-gradient-cyber text-[#0B0F19] border-transparent shadow'
                  : 'bg-white/3 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Accordions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-scale-in">
            <Accordion items={faqItems[activeCategory]} />
          </div>
        </div>
      </section>

    </div>
  );
}
