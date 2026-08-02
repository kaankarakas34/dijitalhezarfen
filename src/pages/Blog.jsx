import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';

export default function Blog({ lang }) {
  const isTr = lang === 'tr';
  const [filterCategory, setFilterCategory] = useState('hepsi');
  const [searchQuery, setSearchQuery] = useState('');

  const t = {
    badge: isTr ? 'İçerik Merkezi' : 'Knowledge Center',
    title: isTr ? 'Girişim kurmak ve büyütmek için uygulanabilir bilgi.' : 'Actionable knowledge to build and scale startups.',
    desc: isTr ? 'Karmaşık kavramları sadeleştiren, yöntemleri açıklayan ve gerçek iş problemlerine çözüm sunan rehber içerikler.' : 'Guide articles simplifying complex concepts, explaining methodologies, and solving real business problems.',
    btnPrimary: isTr ? 'İçerikleri Keşfet' : 'Explore Articles',
    btnSecondary: isTr ? 'Bültene Katıl' : 'Join Newsletter',
    searchPlaceholder: isTr ? 'İçeriklerde ara...' : 'Search articles...',
    readBtn: isTr ? 'Oku' : 'Read',
    author: isTr ? 'Dijital Hezarfen' : 'Dijital Hezarfen',
    noResults: isTr ? 'Aradığınız kriterlere uygun içerik bulunamadı.' : 'No articles found matching your criteria.'
  };

  const categories = [
    { id: 'hepsi', label: isTr ? 'Tüm Konular' : 'All Topics' },
    { id: 'girisimcilik', label: isTr ? 'Girişimcilik' : 'Entrepreneurship' },
    { id: 'mvp-yazilim', label: isTr ? 'MVP & Yazılım' : 'MVP & Tech' },
    { id: 'pazarlama-growth', label: isTr ? 'Pazarlama & Growth' : 'Marketing & Growth' },
    { id: 'satis-crm', label: isTr ? 'Satış & CRM' : 'Sales & CRM' },
    { id: 'finans-yatirim', label: isTr ? 'Finans & Yatırım' : 'Finance & Funding' },
    { id: 'ai-otomasyon', label: isTr ? 'AI & Otomasyon' : 'AI & Automation' },
    { id: 'yonetim', label: isTr ? 'Yönetim' : 'Management' },
    { id: 'globallesme', label: isTr ? 'Globalleşme' : 'Globalization' }
  ];

  const articles = [
    { title: isTr ? 'Bir fikrin gerçek bir probleme dönüştüğü nasıl anlaşılır?' : 'How do you know when an idea turns into a real problem?', cat: 'girisimcilik', time: '5 dk', desc: isTr ? 'Fikir aşamasından problem keşfi ve müşteri görüşmelerine giden metodolojik yol.' : 'The methodological path from idea stage to problem discovery and customer interviews.' },
    { title: isTr ? 'Fikir aşamasında şirket kurmak neden erken olabilir?' : 'Why incorporating in the idea stage might be too early?', cat: 'girisimcilik', time: '4 dk', desc: isTr ? 'Erken şirketleşmenin getirdiği mali ve operasyonel yükler.' : 'Financial and operational burdens associated with early incorporation.' },
    { title: isTr ? 'MVP nedir ve çalışan MVP hangi özellikleri taşımalıdır?' : 'What is an MVP and what features should a working MVP have?', cat: 'mvp-yazilim', time: '6 dk', desc: isTr ? 'Minimum değerli ürün inşasında kapsam belirleme ve varsayım testleri.' : 'Scoping and assumption testing in minimum viable product construction.' },
    { title: isTr ? 'Yapay zekâ ile MVP geliştirirken yapılan 10 hata' : '10 mistakes made when developing an MVP with AI', cat: 'mvp-yazilim', time: '5 dk', desc: isTr ? 'AI ve no-code araçlarıyla geliştirme yaparken düşülen popüler tuzaklar.' : 'Popular pitfalls encountered when developing with AI and no-code tools.' },
    { title: isTr ? 'Product-market fit ölçmek için hangi metriklere bakılır?' : 'Which metrics are measured to track product-market fit?', cat: 'pazarlama-growth', time: '7 dk', desc: isTr ? 'Retention, LTV/CAC ve NPS verileriyle PMF analizi.' : 'PMF analysis using retention, LTV/CAC, and NPS data.' },
    { title: isTr ? 'Startup’lar için ilk 100 müşteriye ulaşma planı' : 'Plan to reach the first 100 customers for startups', cat: 'pazarlama-growth', time: '8 dk', desc: isTr ? 'Sıfır bütçeyle ilk kitleyi yakalamanın pratik büyüme kanalları.' : 'Practical growth channels to capture the first audience with zero budget.' },
    { title: isTr ? 'CAC ve LTV nasıl hesaplanır?' : 'How are CAC and LTV calculated?', cat: 'pazarlama-growth', time: '5 dk', desc: isTr ? 'Müşteri edinim maliyeti ve yaşam boyu değer hesap şablonu.' : 'Customer acquisition cost and lifetime value calculation template.' },
    { title: isTr ? 'Growth hacking reklam vermekten neden farklıdır?' : 'Why is growth hacking different from paid advertising?', cat: 'pazarlama-growth', time: '6 dk', desc: isTr ? 'Veri odaklı deney sistematiği ile ücretli pazarlama farkları.' : 'Differences between paid marketing and data-driven experimental framework.' },
    { title: isTr ? 'CRM kurarken pipeline aşamaları nasıl belirlenir?' : 'How to define pipeline stages when setting up a CRM?', cat: 'satis-crm', time: '5 dk', desc: isTr ? 'Satış hunisini netleştiren pipeline adımları ve veri tanımları.' : 'Pipeline steps and data definitions that clarify the sales funnel.' },
    { title: isTr ? 'B2B satışta ideal müşteri profili nasıl hazırlanır?' : 'How to create an ideal customer profile in B2B sales?', cat: 'satis-crm', time: '6 dk', desc: isTr ? 'ICP (İdeal Müşteri Profili) matrisi ve hedef kitle tespiti.' : 'ICP (Ideal Customer Profile) matrix and target audience identification.' },
    { title: isTr ? 'Founder-led sales ne zaman bırakılmalıdır?' : 'When should founder-led sales be handed over?', cat: 'satis-crm', time: '7 dk', desc: isTr ? 'Kurucunun ilk satışları yapmasından profesyonel ekibe devir kriterleri.' : 'Criteria for handing over sales from the founder to a professional sales team.' },
    { title: isTr ? 'Startup finansal modeli nasıl hazırlanır?' : 'How is a startup financial model prepared?', cat: 'finans-yatirim', time: '8 dk', desc: isTr ? 'Gelir, gider ve nakit akışını tahminleyen 3 yıllık modelleme.' : '3-year projection forecasting revenue, expenses, and cash flow.' },
    { title: isTr ? 'Runway nedir ve nasıl hesaplanır?' : 'What is runway and how is it calculated?', cat: 'finans-yatirim', time: '5 dk', desc: isTr ? 'Nakit tüketim hızı (burn rate) ve pist süresi formülleri.' : 'Cash burn rate and runway duration formulas.' },
    { title: isTr ? 'Pitch deck’te bulunması gereken 10 temel bölüm' : '10 core sections to include in a pitch deck', cat: 'finans-yatirim', time: '6 dk', desc: isTr ? 'Yatırımcıyı ikna edecek sunum slayt şablonu.' : 'Presentation slide template to convince investors.' },
    { title: isTr ? 'Data room hazırlık kontrol listesi' : 'Data room prep checklist', cat: 'finans-yatirim', time: '5 dk', desc: isTr ? 'Due diligence öncesi toparlanması gereken yasal ve finansal dosyalar.' : 'Legal and financial files to compile prior to due diligence.' },
    { title: isTr ? 'Yatırımcı görüşmesinde sorulan zor sorular ve cevapları' : 'Hard questions asked in investor meetings and answers', cat: 'finans-yatirim', time: '7 dk', desc: isTr ? 'Valuation, cap table ve exit hedefleri sorularına hazırlık.' : 'Prep for valuation, cap table, and exit strategy questions.' },
    { title: isTr ? 'Kurucu ortaklar arasında rol dağılımı nasıl yapılır?' : 'How to distribute roles among co-founders?', cat: 'yonetim', time: '6 dk', desc: isTr ? 'Yetki matrisi, vesting modelleri ve co-founder ilişkileri.' : 'Authority matrix, vesting schedules, and co-founder relations.' },
    { title: isTr ? 'Startup organizasyon şeması ne zaman kurulmalıdır?' : 'When should a startup organization chart be set up?', cat: 'yonetim', time: '5 dk', desc: isTr ? 'Series A öncesi departmanlaşma ve rol dağılımları.' : 'Departmentalization and role distribution before Series A.' },
    { title: isTr ? 'OKR ve KPI arasındaki temel farklar nelerdir?' : 'What are the main differences between OKR and KPI?', cat: 'yonetim', time: '6 dk', desc: isTr ? 'Stratejik hedefler ile operasyonel göstergelerin yönetimi.' : 'Managing strategic objectives versus operational key performance indicators.' },
    { title: isTr ? 'AI agent şirketlerde hangi süreçlerde kullanılabilir?' : 'In which processes can AI agents be used in companies?', cat: 'ai-otomasyon', time: '6 dk', desc: isTr ? 'Müşteri desteği, veri girişi ve lead eleme otomasyonu.' : 'Automating customer support, data entry, and lead qualifying.' },
    { title: isTr ? 'Chatbot ve voice agent arasındaki farklar' : 'Differences between chatbots and voice agents', cat: 'ai-otomasyon', time: '5 dk', desc: isTr ? 'Metin tabanlı asistanlar ile sesli arama ajanlarının altyapı farkları.' : 'Infrastructure differences between text-based assistants and voice calling agents.' },
    { title: isTr ? 'Yeni bir ülkeye girerken pazar seçimi nasıl yapılır?' : 'How to choose a target market when expanding to a new country?', cat: 'globallesme', time: '7 dk', desc: isTr ? 'Global pazara giriş matrisi ve ülke puanlama.' : 'Global market entry matrix and country scoring model.' },
    { title: isTr ? 'Kurucu markası satışa ve yatırıma nasıl katkı sağlar?' : 'How does a founder brand contribute to sales and funding?', cat: 'pazarlama-growth', time: '6 dk', desc: isTr ? 'Sosyal medyada thought leadership (fikir liderliği) inşası.' : 'Building thought leadership on social media platforms.' },
    { title: isTr ? 'İlk dönem startup kurucusu hangi alanları bilmelidir?' : 'What fields should an early-stage founder master?', cat: 'girisimcilik', time: '8 dk', desc: isTr ? 'Girişimcilik Tüneli kapsamında öğretilen çok disiplinli yetkinlik haritası.' : 'The multi-disciplinary capability matrix taught in the Entrepreneur Tunnel.' }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesFilter = filterCategory === 'hepsi' || art.cat === filterCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
        onPrimaryClick={() => {
          const element = document.querySelector('#icerik-listesi');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        secondaryCtaText={t.btnSecondary}
        onSecondaryClick={() => alert(isTr ? 'Bülten kaydı başarılı!' : 'Successfully subscribed to newsletter!')}
      />

      {/* Filter and Search controls */}
      <section id="icerik-listesi" className="py-12 border-t border-white/5 bg-[#080B12] sticky top-20 z-20 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories select */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilterCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  filterCategory === c.id
                    ? 'bg-gradient-cyber text-[#0B0F19] border-transparent'
                    : 'bg-white/3 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-white/3 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/50"
            />
          </div>

        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art, idx) => (
              <article 
                key={idx}
                className="group flex flex-col justify-between rounded-2xl glass p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-white/3">
                    <span className="text-cyber-cyan">{categories.find((c) => c.id === art.cat)?.label}</span>
                    <span className="flex items-center gap-1 font-light">
                      <Clock className="w-3.5 h-3.5" />
                      {art.time.replace('dk', isTr ? 'dk' : 'min')}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base text-white font-sans leading-snug group-hover:text-cyber-cyan transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-3 font-light">
                    {art.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-semibold">{t.author}</span>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan hover:underline group/link font-sans">
                    <span>{t.readBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            ))}

            {filteredArticles.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-500 font-light">
                {t.noResults}
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
