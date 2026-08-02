import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { BookOpen, Search, Clock, ArrowRight } from 'lucide-react';

export default function Blog() {
  const [filterCategory, setFilterCategory] = useState('hepsi');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'hepsi', label: 'Tüm Konular' },
    { id: 'girisimcilik', label: 'Girişimcilik' },
    { id: 'mvp-yazilim', label: 'MVP & Yazılım' },
    { id: 'pazarlama-growth', label: 'Pazarlama & Growth' },
    { id: 'satis-crm', label: 'Satış & CRM' },
    { id: 'finans-yatirim', label: 'Finans & Yatırım' },
    { id: 'ai-otomasyon', label: 'AI & Otomasyon' },
    { id: 'yonetim', label: 'Yönetim' },
    { id: 'globallesme', label: 'Globalleşme' }
  ];

  const articles = [
    { title: 'Bir fikrin gerçek bir probleme dönüştüğü nasıl anlaşılır?', cat: 'girisimcilik', time: '5 dk', desc: 'Fikir aşamasından problem keşfi ve müşteri görüşmelerine giden metodolojik yol.' },
    { title: 'Fikir aşamasında şirket kurmak neden erken olabilir?', cat: 'girisimcilik', time: '4 dk', desc: 'Erken şirketleşmenin getirdiği mali ve operasyonel yükler.' },
    { title: 'MVP nedir ve çalışan MVP hangi özellikleri taşımalıdır?', cat: 'mvp-yazilim', time: '6 dk', desc: 'Minimum değerli ürün inşasında kapsam belirleme ve varsayım testleri.' },
    { title: 'Yapay zekâ ile MVP geliştirirken yapılan 10 hata', cat: 'mvp-yazilim', time: '5 dk', desc: 'AI ve no-code araçlarıyla geliştirme yaparken düşülen popüler tuzaklar.' },
    { title: 'Product-market fit ölçmek için hangi metriklere bakılır?', cat: 'pazarlama-growth', time: '7 dk', desc: 'Retention, LTV/CAC ve NPS verileriyle PMF analizi.' },
    { title: 'Startup’lar için ilk 100 müşteriye ulaşma planı', cat: 'pazarlama-growth', time: '8 dk', desc: 'Sıfır bütçeyle ilk kitleyi yakalamanın pratik büyüme kanalları.' },
    { title: 'CAC ve LTV nasıl hesaplanır?', cat: 'pazarlama-growth', time: '5 dk', desc: 'Müşteri edinim maliyeti ve yaşam boyu değer hesap şablonu.' },
    { title: 'Growth hacking reklam vermekten neden farklıdır?', cat: 'pazarlama-growth', time: '6 dk', desc: 'Veri odaklı deney sistematiği ile ücretli pazarlama farkları.' },
    { title: 'CRM kurarken pipeline aşamaları nasıl belirlenir?', cat: 'satis-crm', time: '5 dk', desc: 'Satış hunisini netleştiren pipeline adımları ve veri tanımları.' },
    { title: 'B2B satışta ideal müşteri profili nasıl hazırlanır?', cat: 'satis-crm', time: '6 dk', desc: 'ICP (İdeal Müşteri Profili) matrisi ve hedef kitle tespiti.' },
    { title: 'Founder-led sales ne zaman bırakılmalıdır?', cat: 'satis-crm', time: '7 dk', desc: 'Kurucunun ilk satışları yapmasından profesyonel ekibe devir kriterleri.' },
    { title: 'Startup finansal modeli nasıl hazırlanır?', cat: 'finans-yatirim', time: '8 dk', desc: 'Gelir, gider ve nakit akışını tahminleyen 3 yıllık modelleme.' },
    { title: 'Runway nedir ve nasıl hesaplanır?', cat: 'finans-yatirim', time: '5 dk', desc: 'Nakit tüketim hızı (burn rate) ve pist süresi formülleri.' },
    { title: 'Pitch deck’te bulunması gereken 10 temel bölüm', cat: 'finans-yatirim', time: '6 dk', desc: 'Yatırımcıyı ikna edecek sunum slayt şablonu.' },
    { title: 'Data room hazırlık kontrol listesi', cat: 'finans-yatirim', time: '5 dk', desc: 'Due diligence öncesi toparlanması gereken yasal ve finansal dosyalar.' },
    { title: 'Yatırımcı görüşmesinde sorulan zor sorular ve cevapları', cat: 'finans-yatirim', time: '7 dk', desc: 'Valuation, cap table ve exit hedefleri sorularına hazırlık.' },
    { title: 'Kurucu ortaklar arasında rol dağılımı nasıl yapılır?', cat: 'yonetim', time: '6 dk', desc: 'Yetki matrisi, vesting modelleri ve co-founder ilişkileri.' },
    { title: 'Startup organizasyon şeması ne zaman kurulmalıdır?', cat: 'yonetim', time: '5 dk', desc: 'Series A öncesi departmanlaşma ve rol dağılımları.' },
    { title: 'OKR ve KPI arasındaki temel farklar nelerdir?', cat: 'yonetim', time: '6 dk', desc: 'Stratejik hedefler ile operasyonel göstergelerin yönetimi.' },
    { title: 'AI agent şirketlerde hangi süreçlerde kullanılabilir?', cat: 'ai-otomasyon', time: '6 dk', desc: 'Müşteri desteği, veri girişi ve lead eleme otomasyonu.' },
    { title: 'Chatbot ve voice agent arasındaki farklar', cat: 'ai-otomasyon', time: '5 dk', desc: 'Metin tabanlı asistanlar ile sesli arama ajanlarının altyapı farkları.' },
    { title: 'Yeni bir ülkeye girerken pazar seçimi nasıl yapılır?', cat: 'globallesme', time: '7 dk', desc: 'Global pazara giriş matrisi ve ülke puanlama.' },
    { title: 'Kurucu markası satışa ve yatırıma nasıl katkı sağlar?', cat: 'pazarlama-growth', time: '6 dk', desc: 'Sosyal medyada thought leadership (fikir liderliği) inşası.' },
    { title: 'İlk dönem startup kurucusu hangi alanları bilmelidir?', cat: 'girisimcilik', time: '8 dk', desc: 'Girişimcilik Tüneli kapsamında öğretilen çok disiplinli yetkinlik haritası.' }
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
        badge="İçerik Merkezi"
        title="Girişim kurmak ve büyütmek için uygulanabilir bilgi."
        description="Karmaşık kavramları sadeleştiren, yöntemleri açıklayan ve gerçek iş problemlerine çözüm sunan rehber içerikler."
        primaryCtaText="İçerikleri Keşfet"
        onPrimaryClick={() => {
          const element = document.querySelector('#icerik-listesi');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        secondaryCtaText="Bültene Katıl"
        onSecondaryClick={() => alert('Bülten kaydı başarılı!')}
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
              placeholder="İçeriklerde ara..."
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
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.time}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base text-white font-sans leading-snug group-hover:text-cyber-cyan transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-3">
                    {art.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 font-semibold">Dijital Hezarfen</span>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan hover:underline group/link">
                    <span>Oku</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            ))}

            {filteredArticles.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-500">
                Aradığınız kriterlere uygun içerik bulunamadı.
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
