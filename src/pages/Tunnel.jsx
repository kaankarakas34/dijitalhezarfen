import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';
import { CheckCircle2, AlertTriangle, PlayCircle, BookOpen, Layers } from 'lucide-react';

export default function Tunnel({ onOpenApplyModal }) {
  const [activeModuleTab, setActiveModuleTab] = useState(0);

  const targets = [
    'Bir fikri olan ancak nereden başlayacağını bilmeyen girişimci adayları.',
    'Henüz fikri olmayan fakat girişimcilik yetkinliği kazanmak isteyen profesyoneller.',
    'Pre-seed veya seed aşamasında olup eksiklerini sistemli biçimde tamamlamak isteyen kurucular.',
    'Aile şirketinde veya kurumsal yapıda yeni iş modeli geliştirmek isteyen yeni nesil yöneticiler.',
    'Teknik uzmanlığını ürüne ve şirkete dönüştürmek isteyen yazılımcı, akademisyen ve profesyoneller.'
  ];

  const nonTargets = [
    'Yalnızca motivasyon konuşması dinlemek isteyenler.',
    'Ödev, saha çalışması ve uygulama yapmak istemeyenler.',
    'Kısa sürede garanti yatırım veya garanti gelir bekleyenler.',
    'Geri bildirim almaya, fikrini değiştirmeye veya kanıtlarla düşünmeye kapalı olanlar.'
  ];

  const phases = [
    { id: '1', theme: 'Girişimci zihniyeti ve problem keşfi', output: 'Kişisel gelişim planı ve problem alanı' },
    { id: '2', theme: 'Müşteri, pazar ve iş modeli', output: 'Doğrulama kanıtı ve iş modeli' },
    { id: '3', theme: 'Ürün, yazılım ve AI destekli MVP', output: 'MVP kapsamı veya çalışan prototip' },
    { id: '4', theme: 'Pazarlama, satış ve CRM', output: 'İlk müşteri edinme sistemi' },
    { id: '5', theme: 'Finans, hukuk ve muhasebe', output: 'Finansal model ve şirket altyapısı' },
    { id: '6', theme: 'Liderlik, insan ve organizasyon', output: 'Rol, ekip ve yönetim sistemi' },
    { id: '7', theme: 'Growth, yatırım ve globalleşme', output: 'Pitch, büyüme ve 12 aylık yol haritası' }
  ];

  const modules = [
    {
      title: 'Modül 1: Girişimci Zihniyeti & Kişisel Kapasite',
      items: [
        'Kişisel güçlü yönler, gelişim alanları ve kurucu profili.',
        'Belirsizlik, risk, stres ve başarısızlıkla çalışma.',
        'Odaklanma, zaman yönetimi, disiplin ve sonuç üretme.',
        'Eleştirel düşünme, problem çözme ve karar verme.',
        'Etik, sorumluluk ve girişimci dayanıklılığı.'
      ]
    },
    {
      title: 'Modül 2: Problem, Müşteri & Pazar',
      items: [
        'Problem keşfi ve müşteri görüşmesi.',
        'Müşteri segmentasyonu, karar verici ve kullanıcı ayrımı.',
        'Pazar büyüklüğü, rekabet ve alternatif çözümler.',
        'Müşterinin ödeme isteği ve satın alma davranışı.',
        'Konumlandırma, değer önerisi ve neden şimdi sorusu.'
      ]
    },
    {
      title: 'Modül 3: İş Modelleri',
      items: [
        'SaaS, abonelik, e-ticaret, marketplace, hizmet, lisans, franchise ve platform modelleri.',
        'Fiyatlandırma, paketleme, gelir kanalları ve maliyet yapısı.',
        'Birim ekonomi, brüt marj, CAC, LTV ve geri ödeme süresi.',
        'Ölçeklenebilirlik, sürdürülebilirlik ve rekabet avantajı.',
        'İş modeli kanvası ve finansal varsayımlar.'
      ]
    },
    {
      title: 'Modül 4: Ürün, Yazılım & Yapay Zekâ',
      items: [
        'Ürün keşfi, kullanıcı akışı, önceliklendirme ve roadmap.',
        'MVP’nin amacı, kapsamı ve başarı ölçütleri.',
        'Yapay zekâ destekli hızlı yazılım geliştirme.',
        'Web, mobil, SaaS, entegrasyon ve API kavramları.',
        'AI agent, otomasyon, veri, analitik ve siber güvenlik.',
        'Teknik ekiplerle çalışma ve teknoloji kararlarını değerlendirme.'
      ]
    },
    {
      title: 'Modül 5: Pazarlama, Marka & Medya',
      items: [
        'Marka stratejisi, konumlandırma, mesaj ve görsel kimlik.',
        'Dijital pazarlama, SEO, performans reklamları ve içerik.',
        'Sosyal medya, topluluk, kurucu markası ve PR.',
        'Görsel tasarım, reklam kreatifi, video ve prodüksiyon okuryazarlığı.',
        'Pazarlama hunisi, dönüşüm optimizasyonu ve ölçümleme.'
      ]
    },
    {
      title: 'Modül 6: Satış, CRM & Müşteri Başarısı',
      items: [
        'ICP, segmentasyon, satış mesajı ve teklif.',
        'B2B, B2C, inbound, outbound, kanal ve kurumsal satış.',
        'CRM, pipeline, lead scoring, takip ve satış tahmini.',
        'Müzakere, itiraz yönetimi, teklif ve kapanış.',
        'Onboarding, customer success, yenileme, upsell ve churn.'
      ]
    },
    {
      title: 'Modül 7: Finans, Muhasebe & Hukuk',
      items: [
        'Finansal okuryazarlık, gelir tablosu, bilanço ve nakit akışı.',
        'Bütçe, runway, senaryo ve finansal modelleme.',
        'Şirket kuruluşu, ortaklık yapısı ve temel ticari sözleşmeler.',
        'Fikrî mülkiyet, veri koruma, KVKK/GDPR ve regülasyon farkındalığı.',
        'Muhasebe, vergi takvimi, mali müşavirle çalışma ve yönetim raporlaması.'
      ]
    },
    {
      title: 'Modül 8: İnsan, Liderlik & Organizasyon',
      items: [
        'Kurucu rolleri, sorumluluklar ve karar mekanizmaları.',
        'İşe alım, değerlendirme, onboarding ve performans.',
        'Liderlik, delegasyon, geri bildirim ve çatışma yönetimi.',
        'Organizasyon ve örgütlenme tasarımları.',
        'Topluluk önünde konuşma, sunum, hikâye anlatımı ve iletişim.'
      ]
    },
    {
      title: 'Modül 9: İstatistik, Veri & Growth',
      items: [
        'Veri okuryazarlığı, temel istatistik ve ölçüm hataları.',
        'Korelasyon, nedensellik, deney tasarımı ve A/B testleri.',
        'North Star Metric, metrik ağacı ve büyüme denklemi.',
        'Acquisition, activation, retention, revenue ve referral.',
        'Growth deney havuzu, önceliklendirme ve sprint yönetimi.'
      ]
    },
    {
      title: 'Modül 10: Yatırım & Uluslararasılaşma',
      items: [
        'Pitch deck, yatırım hikâyesi ve kurucu sunumu.',
        'Finansal model, değerleme, cap table ve data room.',
        'Yatırımcı türleri, görüşme süreci ve due diligence.',
        'Ülke seçimi, lokalizasyon, pazara giriş ve kanal ortaklıkları.',
        'Global satış, partnerlik ve uluslararası büyüme planı.'
      ]
    }
  ];

  const faqItems = [
    {
      title: 'Programa katılmak için girişim fikri gerekli mi?',
      content: 'Hayır. Fikri olmayan katılımcılar problem ve fırsat keşfi sürecinden başlayabilir.'
    },
    {
      title: 'Program ne kadar sürer?',
      content: 'Kohortun yoğunluğuna ve uygulama kapsamına göre yaklaşık 3–5 ay sürer.'
    },
    {
      title: 'Program yalnızca online mı?',
      content: 'Program çevrim içi, yüz yüze veya hibrit kohortlar şeklinde tasarlanabilir. Güncel format başvuru sayfasında belirtilir.'
    },
    {
      title: 'Sertifika verilecek mi?',
      content: 'Devam, uygulama ve proje koşullarını tamamlayan katılımcılara program belgesi veya sertifika verilebilir.'
    },
    {
      title: 'Yatırım garantisi var mı?',
      content: 'Hayır. Program girişimciyi ve girişimi yatırım görüşmelerine hazırlayabilir; yatırım kararı bağımsız yatırımcılara aittir.'
    }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Amiral Program"
        title="Girişimcilik Tüneli"
        description="3–5 aylık yoğun girişimci yetiştirme programı. Bir girişimcinin ihtiyaç duyabileceği neredeyse her şeyi öğretiyoruz. Üstün nitelikli insan gücü yetiştiriyoruz."
        primaryCtaText="Programa Başvur"
        onPrimaryClick={() => onOpenApplyModal('tunel')}
        secondaryCtaText="Müfredatı İncele"
        onSecondaryClick={() => {
          const element = document.querySelector('#müfredat');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Neden Girişimcilik Tüneli? */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Neden Girişimcilik Tüneli?</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Startup’ların ilk dönemlerinde büyük departmanlar ve kalabalık ekipler bulunmaz. Kurucu; müşteriyle konuşur, ürünü şekillendirir, satış yapar, reklamı değerlendirir, nakit akışını takip eder, sözleşme okur, ekip kurar ve yatırımcıya sunum yapar. Her işi uzman seviyesinde yapması gerekmez; ancak doğru karar verecek, doğru uzmanı seçecek ve yapılan işin kalitesini değerlendirecek kadar bilgi sahibi olması gerekir.
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Girişimcilik Tüneli bu çok yönlü kapasiteyi geliştirmek için tasarlanmıştır. Programın amacı yalnızca girişim fikri üretmek değil; belirsizlik altında düşünebilen, farklı disiplinleri birbirine bağlayabilen, uygulama yapabilen ve sorumluluk alabilen girişimciler yetiştirmektir.
          </p>
        </div>
      </section>

      {/* Kimler Katılabilir / Katılamaz */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Katılabilir */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-cyber-cyan" />
              Kimler Katılabilir?
            </h3>
            <div className="space-y-3">
              {targets.map((t, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Katılamaz */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-rose-500" />
              Kimler İçin Uygun Değildir?
            </h3>
            <div className="space-y-3">
              {nonTargets.map((nt, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-rose-500/10 bg-rose-500/1 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{nt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Yapısı */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Program Yapısı & Dönemler</h2>
          <div className="rounded-2xl glass border border-white/5 overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-gray-300 border-b border-white/5">
                <tr>
                  <th className="px-6 py-4">Dönem</th>
                  <th className="px-6 py-4">Ana Tema</th>
                  <th className="px-6 py-4">Temel Çıktı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {phases.map((p, idx) => (
                  <tr key={idx} className="hover:bg-white/1 transition-colors">
                    <td className="px-6 py-4 font-bold text-white shrink-0">{p.id}. Aşama</td>
                    <td className="px-6 py-4 leading-relaxed">{p.theme}</td>
                    <td className="px-6 py-4 font-semibold text-cyber-cyan">{p.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Modules Accordion list */}
      <section id="müfredat" className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-5">Detaylı Müfredat Modülleri</h2>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-12">
            10 ayrı modülde, bir kurucunun startup inşasında ihtiyaç duyacağı her disiplini derinlemesine öğretiyoruz.
          </p>

          {/* Module Tab Swaps */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {modules.map((mod, idx) => (
              <button
                key={idx}
                onClick={() => setActiveModuleTab(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  activeModuleTab === idx
                    ? 'bg-gradient-cyber text-[#0B0F19] border-transparent shadow'
                    : 'bg-white/3 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Modül {idx + 1}
              </button>
            ))}
          </div>

          {/* Active Module Panel */}
          <div className="rounded-2xl glass p-8 border-cyan-500/10 min-h-[250px] relative overflow-hidden animate-scale-in">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">{modules[activeModuleTab].title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {modules[activeModuleTab].items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/2 border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Öğrenme Modeli */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Öğrenme Modeli</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Canlı dersler ve konu anlatımları.',
              'Gerçek şirket ve girişim vakaları.',
              'Haftalık ödev, saha görüşmesi ve uygulama sprintleri.',
              'Mentor ve uzman geri bildirimi.',
              'Proje çalışması ve dönem sonu sunumu.',
              'Kişisel gelişim ve girişim yol haritası.'
            ].map((model, idx) => (
              <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 transition-all">
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{model}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Sonunda */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Program Sonunda</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Katılımcı; doğrulanmış bir problem alanı, açık bir iş modeli, MVP planı veya çalışan prototip, ilk müşteri edinme yaklaşımı, temel finansal model, şirket yönetim çerçevesi, yatırım sunumu ve 12 aylık yol haritası üretmiş olmalıdır.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('tunel')}
              className="px-8 py-4 rounded-xl font-bold text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all cursor-pointer"
            >
              Girişimcilik Tüneli’ne Başvur
            </button>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Sık Sorulan Sorular</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

    </div>
  );
}
