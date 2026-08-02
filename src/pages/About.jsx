import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Shield, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenApplyModal, onNavigate, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Dijital Hezarfen Nedir?' : 'What is Dijital Hezarfen?',
    title: isTr ? 'Bilgiyi girişime, girişimi büyümeye dönüştürüyoruz.' : 'We transform knowledge into venture, and venture into growth.',
    desc: isTr ? 'Dijital Hezarfen; eğitim, teknoloji, uygulama ve büyüme disiplinlerini tek bir girişimcilik ekosisteminde birleştirir.' : 'Dijital Hezarfen unites training, technology, execution, and growth disciplines in a single entrepreneurship ecosystem.',
    btnPrimary: isTr ? 'Girişimin İçin Başvur' : 'Apply for Your Venture',
    btnSecondary: isTr ? 'Programları İncele' : 'Explore Programs',
    whyTitle: isTr ? 'Neden Dijital Hezarfen?' : 'Why Dijital Hezarfen?',
    whyDesc1: isTr 
      ? 'Bir girişimin başarısı yalnızca iyi bir fikre bağlı değildir. Ürün, müşteri, teknoloji, satış, pazarlama, finans, hukuk, ekip ve yönetim aynı hedef etrafında çalışmadığında güçlü fikirler dahi büyüyemez. Girişimciler çoğu zaman bu alanların her biri için farklı kişi ve şirketlerle çalışmak zorunda kalır; süreç parçalanır, bilgi kaybolur ve kararların sorumluluğu belirsizleşir.'
      : 'A startup\'s success is not just about a good idea. Even strong ideas fail to grow when product, customer, technology, sales, marketing, finance, legal, team, and management are not aligned. Entrepreneurs often work with separate agencies for each domain, leading to fragmented processes, lost knowledge, and scattered responsibility.',
    whyDesc2: isTr
      ? 'Dijital Hezarfen bu parçaları aynı büyüme sistemi içinde birleştirir. Girişimci önce gerekli yetkinlikleri kazanır; ardından ihtiyacına göre uygulama desteği alır; ürününü, müşterisini, gelir modelini ve organizasyonunu geliştirir.'
      : 'Dijital Hezarfen unifies these fragments into a single growth system. The entrepreneur first gains the necessary skills, then receives hands-on execution support as needed to develop the product, customer base, revenue model, and organization.',
    whatTitle: isTr ? 'Ne Yapıyoruz?' : 'What We Do',
    howTitle: isTr ? 'Nasıl Çalışıyoruz?' : 'How We Work',
    diffTitle: isTr ? 'Neyi Farklı Yapıyoruz?' : 'What We Do Differently',
    diffClassic: isTr ? 'Klasik Yaklaşım' : 'Classic Approach',
    diffHezarfen: isTr ? 'Dijital Hezarfen Yaklaşımı' : 'Dijital Hezarfen Approach',
    btnExplain: isTr ? 'Girişiminin İhtiyacını Anlat' : 'Describe Your Startup\'s Needs'
  };

  const diffData = [
    { classic: isTr ? 'Genel eğitim' : 'General education', hezarfen: isTr ? 'Girişimin aşamasına ve gerçek ihtiyacına bağlı öğrenme' : 'Learning matched to startup stage and actual needs' },
    { classic: isTr ? 'Rapor ve tavsiye' : 'Reports and advice', hezarfen: isTr ? 'Yol haritası, uygulama, ölçüm ve tekrar' : 'Roadmap, execution, measurement, and repetition' },
    { classic: isTr ? 'Tek bir departmana odaklanma' : 'Focusing on a single department', hezarfen: isTr ? 'Ürün, satış, pazarlama, finans ve yönetimi birlikte ele alma' : 'Simultaneous handling of product, sales, marketing, finance & management' },
    { classic: isTr ? 'Teorik MVP anlatımı' : 'Theoretical MVP training', hezarfen: isTr ? 'Yapay zekâ destekli çalışan ürün geliştirme' : 'AI-assisted development of actual working products' },
    { classic: isTr ? 'Kısa vadeli kampanya' : 'Short-term campaigns', hezarfen: isTr ? 'Sürdürülebilir ve tekrarlanabilir büyüme sistemi' : 'Sustainable and repeatable growth system' }
  ];

  const works = [
    { 
      title: isTr ? 'Girişimci Adaylarını Yetiştiriyoruz' : 'We Train Entrepreneur Candidates', 
      desc: isTr ? 'Girişimci adaylarını ve yöneticileri kapsamlı eğitim programlarıyla yetiştiriyoruz.' : 'We train aspiring founders and managers through comprehensive curriculum programs.' 
    },
    { 
      title: isTr ? 'Fikir Doğrulama' : 'Idea Validation', 
      desc: isTr ? 'Fikirlerin problem, müşteri, pazar ve gelir modeli açısından doğrulanmasını sağlıyoruz.' : 'We ensure ideas are validated against real problems, customer segments, and revenue models.' 
    },
    { 
      title: isTr ? 'Yazılım & AI MVP' : 'Software & AI MVP', 
      desc: isTr ? 'Yapay zekâ destekli çalışan MVP, web, mobil, SaaS ve otomasyon çözümleri geliştiriyoruz.' : 'We build working MVPs, web/mobile apps, SaaS, and automation workflows using AI development.' 
    },
    { 
      title: isTr ? 'Büyüme Sistemleri' : 'Growth Systems', 
      desc: isTr ? 'Pazarlama, satış, CRM, growth, finans, yönetim ve operasyon sistemleri kuruyoruz.' : 'We deploy marketing, sales, CRM, RevOps, financial planning, and operational frameworks.' 
    },
    { 
      title: isTr ? 'Yatırım & Globalleşme' : 'Fundraising & Globalization', 
      desc: isTr ? 'Girişimleri yatırım görüşmelerine, yeni pazarlara ve uluslararası büyümeye hazırlıyoruz.' : 'We prepare startups for fundraising pitches, new markets, and international expansion.' 
    }
  ];

  const steps = [
    { step: '1', title: isTr ? 'Mevcut Durum Analizi' : 'Current State Analysis', text: isTr ? 'Girişimin aşaması, hedefi, kaynakları ve darboğazları analiz edilir.' : 'We analyze your startup\'s stage, targets, resources, and current bottleneck.' },
    { step: '2', title: isTr ? 'Önceliklendirme' : 'Prioritization', text: isTr ? 'Aynı anda her şey yerine en yüksek etkiyi yaratacak konular seçilir.' : 'We isolate high-impact action areas rather than attempting everything at once.' },
    { step: '3', title: isTr ? 'Yol Haritası Tasarımı' : 'Roadmap Design', text: isTr ? 'Çıktılar, sorumlular, süre, bütçe ve başarı ölçütleri tanımlanır.' : 'Deliverables, owners, duration, budget, and metrics are explicitly detailed.' },
    { step: '4', title: isTr ? 'Doğrudan Uygulama' : 'Direct Execution', text: isTr ? 'Eğitim, mentorluk, uzman desteği ve doğrudan uygulama birlikte kullanılır.' : 'We combine training, mentorship, expert support, and actual execution.' },
    { step: '5', title: isTr ? 'Ölçüm & Optimizasyon' : 'Measurement & Tuning', text: isTr ? 'Ürün, müşteri, satış, finans ve operasyon metrikleri takip edilir.' : 'We track product metrics, customer behavior, sales conversion, and financials.' },
    { step: '6', title: isTr ? 'Ölçeklenme & Büyüme' : 'Scale & Systemization', text: isTr ? 'Kanıtlanan süreçler sistemleştirilir, otomasyona ve ekibe aktarılır.' : 'Validated processes are structured, automated, and handed over to the team.' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText={t.btnSecondary}
        onSecondaryClick={() => onNavigate('/akademi')}
      />

      {/* Neden Dijital Hezarfen? */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">{t.whyTitle}</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            {t.whyDesc1}
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            {t.whyDesc2}
          </p>
        </div>
      </section>

      {/* Ne Yapıyoruz? */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">{t.whatTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 transition-all">
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyber-cyan flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışıyoruz? */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">{t.howTitle}</h2>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl glass border border-white/5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/15 text-cyber-cyan flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 font-sans">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed font-light">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neyi Farklı Yapıyoruz? */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">{t.diffTitle}</h2>
          <div className="rounded-2xl glass border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-gray-300 font-extrabold border-b border-white/5">
                <tr>
                  <th className="px-6 py-4">{t.diffClassic}</th>
                  <th className="px-6 py-4 text-cyber-cyan">{t.diffHezarfen}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400 font-light">
                {diffData.map((d, idx) => (
                  <tr key={idx} className="hover:bg-white/1 transition-colors">
                    <td className="px-6 py-4 font-medium">{d.classic}</td>
                    <td className="px-6 py-4 text-white font-semibold">{d.hezarfen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer font-sans"
            >
              {t.btnExplain}
            </button>
            <button
              onClick={() => onNavigate('/akademi')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer font-sans"
            >
              {t.btnSecondary}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
