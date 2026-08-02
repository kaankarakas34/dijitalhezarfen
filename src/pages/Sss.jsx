import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';

export default function Sss({ onNavigate, lang }) {
  const isTr = lang === 'tr';
  const [activeCategory, setActiveCategory] = useState('genel');

  const t = {
    badge: isTr ? 'Yardım & Destek' : 'Help & Support',
    title: isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions',
    desc: isTr ? 'Başvuru öncesi aklınıza takılabilecek temel sorular, itirazlar ve belirsizlikleri gidermek için hazırladığımız cevaplar.' : 'Answers compiled to address common questions, concerns, and inquiries prior to your application.',
    btnPrimary: isTr ? 'Başvuru Merkezine Git' : 'Go to Application Center',
    btnSecondary: isTr ? 'İletişime Geç' : 'Contact Us',
    catGenel: isTr ? 'Genel Sorular' : 'General Questions',
    catProgramlar: isTr ? 'Programlar & Akademi' : 'Programs & Academy',
    catUygulama: isTr ? 'Uygulama Hizmetleri' : 'Execution Services'
  };

  const categories = [
    { id: 'genel', label: t.catGenel },
    { id: 'programlar', label: t.catProgramlar },
    { id: 'uygulama', label: t.catUygulama }
  ];

  const faqItems = {
    genel: [
      {
        title: isTr ? 'Dijital Hezarfen yalnızca eğitim mi veriyor?' : 'Does Dijital Hezarfen only offer training?',
        content: isTr 
          ? 'Hayır. Akademinin yanında yazılım, AI, pazarlama, satış, CRM, finans, hukuk ve yönetim alanlarında doğrudan uygulama hizmetleri de sunar.'
          : 'No. Alongside the academy, we provide hands-on execution services in software development, AI, marketing, sales pipelines, CRM setups, finance, legal, and organizational management.'
      },
      {
        title: isTr ? 'Şirketim olmadan başvurabilir miyim?' : 'Can I apply without an incorporated company?',
        content: isTr 
          ? 'Evet. Fikir aşaması ve Girişimcilik Tüneli programımız için şirket kurmuş olmanız gerekmez.'
          : 'Yes. You do not need to have a registered company to apply for the Idea stage diagnostics or the Entrepreneur Tunnel program.'
      },
      {
        title: isTr ? 'Her başvuru kabul ediliyor mu?' : 'Are all applications accepted?',
        content: isTr 
          ? 'Hayır. Program ve hizmet kapsamına uygunluk, çalışma disiplini, ihtiyaç duyulan alanlar ve ekibin kapasitesi detaylı değerlendirilir.'
          : 'No. Acceptance is based on scope alignment, discipline, commitment levels, needs, and current team capabilities.'
      },
      {
        title: isTr ? 'Etkinlikler herkese açık mı?' : 'Are events open to everyone?',
        content: isTr 
          ? 'Etkinliğe göre değişiklik gösterir. Bazı etkinliklerimiz açık kayıt modeliyle, bazıları ise başvuru veya özel davet modeliyle gerçekleştirilir.'
          : 'It depends. Some events are open-registration, while others are selection-based, requiring application or private invitation.'
      }
    ],
    programlar: [
      {
        title: isTr ? 'Yatırım garantisi veriliyor mu?' : 'Is fundraising/investment guaranteed?',
        content: isTr 
          ? 'Hayır. Hiçbir programımız doğrudan yatırım veya gelir garantisi vermez. Programlar girişimi yatırıma hazırlar ve yatırımcı erişim imkanları geliştirir.'
          : 'No. None of our programs offer direct funding or revenue guarantees. We prepare startups to pitch, construct their data rooms, and facilitate introductions to VC and angel networks.'
      },
      {
        title: isTr ? 'Eğitimler online mı?' : 'Are courses held online?',
        content: isTr 
          ? 'Programlar online, yüz yüze veya hibrit olarak açılabilir. Güncel kohortun formatı başvuru formlarında ve program duyurularında belirtilir.'
          : 'Programs can be online, in-person, or hybrid. The format of the active cohort is specified on the application forms and course pages.'
      },
      {
        title: isTr ? 'Sertifika verilecek mi?' : 'Is a certificate provided?',
        content: isTr 
          ? 'Devam, uygulama ve dönem sonu proje koşullarını başarıyla tamamlayan katılımcılara program belgesi veya sertifika verilebilir.'
          : 'Participants who successfully complete the attendance, execution tasks, and final project deliverables may receive a program certificate.'
      }
    ],
    uygulama: [
      {
        title: isTr ? 'Sadece tek bir hizmet alabilir miyim?' : 'Can I buy a single execution service?',
        content: isTr 
          ? 'Evet. İhtiyacınız yalnızca çalışan MVP yazılımı, CRM kurulumu, pazarlama optimizasyonu veya finansal modelleme olabilir. Kapsam ön görüşmeyle belirlenir.'
          : 'Yes. You can engage us specifically for an AI MVP build, CRM migration, growth marketing sprint, or financial model design. The scope is defined in an initial scoping call.'
      },
      {
        title: isTr ? 'Hizmetler startup dışındaki şirketlere açık mı?' : 'Are services open to non-startups?',
        content: isTr 
          ? 'Evet. KOBİ ve kurumsal şirketler de akademiden, dijital dönüşüm, AI otomasyonu, satış, pazarlama ve yönetim uygulama hizmetlerimizden yararlanabilir.'
          : 'Yes. SMEs and corporate enterprises can access our training programs, digital transformation sprints, AI automations, sales systems, marketing, and management services.'
      },
      {
        title: isTr ? 'Co-founder veya ekip buluyor musunuz?' : 'Do you source co-founders or team members?',
        content: isTr 
          ? 'Gerektiğinde destekleyici bir hizmet olarak rol/kurucu taraması yapılabilir; ancak bu konu Dijital Hezarfen’in ana hizmet konumlandırması değildir.'
          : 'When needed, we can facilitate recruitment or co-founder matching as a supportive service, but this is not Dijital Hezarfen\'s primary focus.'
      }
    ]
  };

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
        onPrimaryClick={() => onNavigate('/basvur')}
        secondaryCtaText={t.btnSecondary}
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
