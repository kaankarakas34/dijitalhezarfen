import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowUpRight, BarChart3, BookOpen, Clock, FileText, Newspaper, Search, Sparkles, Video } from 'lucide-react';

export default function Yayinlar({ lang }) {
  const isTr = lang === 'tr';
  const [activeCategory, setActiveCategory] = useState('hepsi');
  const [searchQuery, setSearchQuery] = useState('');

  const t = {
    badge: isTr ? 'Yayınlarımız' : 'Publications',
    title: isTr ? 'Girişimcilik, teknoloji ve büyüme gündeminden seçili yayınlar.' : 'Selected publications from entrepreneurship, technology, and growth.',
    desc: isTr
      ? 'Dijital Hezarfen ekosisteminde üretilen haberler, rehberler, analizler ve medya içerikleri tek bir yayın merkezinde.'
      : 'News, guides, analyses, and media content produced inside the Dijital Hezarfen ecosystem in one publication hub.',
    primary: isTr ? 'Yayınları Gör' : 'View Publications',
    secondary: isTr ? 'Medya İçerikleri' : 'Media Content',
    search: isTr ? 'Yayınlarda ara...' : 'Search publications...',
    read: isTr ? 'İncele' : 'Read',
    featured: isTr ? 'Öne Çıkan Yayın' : 'Featured Publication',
    noResults: isTr ? 'Bu kritere uygun yayın bulunamadı.' : 'No publications match this criteria.',
    author: 'Kaan Karakaş'
  };

  const categories = [
    { id: 'hepsi', label: isTr ? 'Tümü' : 'All' },
    { id: 'haber', label: isTr ? 'Haberler' : 'News' },
    { id: 'rehber', label: isTr ? 'Rehberler' : 'Guides' },
    { id: 'rapor', label: isTr ? 'Raporlar' : 'Reports' },
    { id: 'medya', label: isTr ? 'Medya' : 'Media' }
  ];

  const iconMap = {
    haber: Newspaper,
    rehber: BookOpen,
    rapor: BarChart3,
    medya: Video
  };

  const publications = [
    {
      category: 'rapor',
      title: isTr ? 'Tim Cook’un Apple’a bıraktığı asıl miras: Ürünlerden daha büyük bir makine' : 'Tim Cook’s real Apple legacy: a machine bigger than products',
      desc: isTr
        ? 'Tim Cook dönemini yalnızca ürünler veya piyasa değeriyle değil; Apple’ın tedarik zinciri, sermaye kullanımı ve operasyonel mimarisi üzerinden okuyan kapsamlı analiz.'
        : 'A deep analysis of Tim Cook’s Apple era through supply chain, capital allocation, and operational architecture rather than products alone.',
      date: isTr ? '31 Ağustos 2026' : 'August 31, 2026',
      readTime: isTr ? '18 dk' : '18 min',
      color: 'from-slate-500/25 to-cyan-500/10',
      accent: 'text-cyber-cyan',
      image: '/images/tim-cook-apple-miras.png',
      path: '/yayinlar/tim-cook-apple-miras'
    },
    {
      category: 'rehber',
      title: isTr ? 'Yapay zekâ destekli MVP geliştirirken kapsam nasıl çizilir?' : 'How to scope an AI-assisted MVP',
      desc: isTr
        ? 'AI ve no-code araçlarıyla hızlı ürün çıkarırken teknik borç, müşteri doğrulama ve lansman sınırlarını birlikte düşünmek gerekir.'
        : 'When building quickly with AI and no-code tools, technical debt, customer validation, and launch limits should be considered together.',
      date: isTr ? '28 Temmuz 2026' : 'July 28, 2026',
      readTime: isTr ? '6 dk' : '6 min',
      color: 'from-violet-500/20 to-fuchsia-500/10',
      accent: 'text-violet-300',
      path: '/yayinlar'
    },
    {
      category: 'rapor',
      title: isTr ? 'Erken aşama girişimler için büyüme ve yatırım hazırlığı notları' : 'Growth and fundraising notes for early-stage startups',
      desc: isTr
        ? 'Pitch deck, finansal model, satış hunisi ve yatırımcı görüşmelerinde kurucuların en sık zorlandığı alanları özetleyen analiz.'
        : 'An analysis of the areas founders struggle with most across pitch decks, financial models, sales funnels, and investor meetings.',
      date: isTr ? '15 Temmuz 2026' : 'July 15, 2026',
      readTime: isTr ? '8 dk' : '8 min',
      color: 'from-emerald-500/20 to-cyan-500/10',
      accent: 'text-emerald-300',
      path: '/yayinlar'
    },
    {
      category: 'medya',
      title: isTr ? 'Kurucu sohbetleri: fikrin ürüne dönüştüğü ilk 90 gün' : 'Founder talks: the first 90 days from idea to product',
      desc: isTr
        ? 'Podcast ve video serilerinde kurucularla ürün, müşteri görüşmesi, satış ve ekip kurma pratiklerini konuşuyoruz.'
        : 'Our podcast and video series explore product, customer discovery, sales, and team-building practices with founders.',
      date: isTr ? '09 Temmuz 2026' : 'July 09, 2026',
      readTime: isTr ? '22 dk' : '22 min',
      color: 'from-rose-500/20 to-orange-500/10',
      accent: 'text-rose-300',
      path: '/yayinlar'
    },
    {
      category: 'rehber',
      title: isTr ? 'B2B satışta ilk pipeline nasıl kurulur?' : 'How to build the first B2B sales pipeline',
      desc: isTr
        ? 'ICP, lead kaynakları, CRM aşamaları ve founder-led sales düzeni için uygulanabilir bir başlangıç çerçevesi.'
        : 'A practical starting framework for ICP, lead sources, CRM stages, and founder-led sales rhythm.',
      date: isTr ? '01 Temmuz 2026' : 'July 01, 2026',
      readTime: isTr ? '7 dk' : '7 min',
      color: 'from-sky-500/20 to-indigo-500/10',
      accent: 'text-sky-300',
      path: '/yayinlar'
    },
    {
      category: 'haber',
      title: isTr ? 'Akademi ve uygulama ekipleri yeni içerik serilerini yayına alıyor' : 'Academy and execution teams launch new content series',
      desc: isTr
        ? 'Teknoloji, pazarlama, finans ve yönetim başlıklarında yeni yayın serileri kurucuların pratik ihtiyaçlarına göre planlandı.'
        : 'New publication series across technology, marketing, finance, and management were planned around practical founder needs.',
      date: isTr ? '24 Haziran 2026' : 'June 24, 2026',
      readTime: isTr ? '3 dk' : '3 min',
      color: 'from-amber-500/20 to-cyan-500/10',
      accent: 'text-amber-300',
      path: '/yayinlar'
    }
  ];

  const filteredPublications = publications.filter((publication) => {
    const matchesCategory = activeCategory === 'hepsi' || publication.category === activeCategory;
    const normalizedQuery = searchQuery.toLowerCase();
    const matchesSearch = publication.title.toLowerCase().includes(normalizedQuery) || publication.desc.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesSearch;
  });

  const featured = publications[0];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.primary}
        onPrimaryClick={() => document.querySelector('#yayin-listesi')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        secondaryCtaText={t.secondary}
        onSecondaryClick={() => document.querySelector('#medya-yayinlari')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      />

      <section className="py-10 border-y border-white/5 bg-[#080B12]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: '24+', label: isTr ? 'Yayın ve rehber' : 'Publications and guides' },
            { value: '6', label: isTr ? 'Ana içerik başlığı' : 'Core content themes' },
            { value: '3', label: isTr ? 'Format: haber, rehber, medya' : 'Formats: news, guides, media' }
          ].map((stat) => (
            <div key={stat.label} className="border border-white/5 bg-white/3 rounded-xl px-5 py-4">
              <div className="text-2xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="yayin-listesi" className="py-16 bg-[#0A0D17]">
        <div className="max-w-6xl mx-auto px-4">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-white/10 bg-white/3 mb-10">
            <div className={`lg:col-span-5 min-h-[300px] bg-gradient-to-br ${featured.color} relative overflow-hidden`}>
              {featured.image ? (
                <img src={featured.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/35 to-transparent"></div>
              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-black/25 border border-white/10">
                  <Sparkles className="w-6 h-6 text-cyber-cyan" />
                </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-cyber-cyan">{t.featured}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 leading-tight">{featured.title}</h2>
              </div>
              </div>
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-5">
                  <span className="text-cyber-cyan font-bold">{categories.find((category) => category.id === featured.category)?.label}</span>
                  <span>{featured.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{featured.desc}</p>
              </div>
              <a href={`#${featured.path}`} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyber-cyan transition-colors">
                {t.read}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-gradient-cyber text-[#0B0F19] border-transparent'
                      : 'bg-white/3 border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={t.search}
                className="w-full bg-white/3 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPublications.map((publication) => {
              const Icon = iconMap[publication.category] || FileText;
              return (
                <article
                  key={publication.title}
                  id={publication.category === 'medya' ? 'medya-yayinlari' : undefined}
                  className="group rounded-2xl border border-white/5 bg-white/3 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20"
                >
                  <div className={`h-36 bg-gradient-to-br ${publication.color} p-5 flex items-start justify-between relative overflow-hidden`}>
                    {publication.image ? (
                      <img src={publication.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70" />
                    ) : null}
                    <div className="absolute inset-0 bg-[#0B0F19]/20"></div>
                    <div className="relative z-10 w-11 h-11 rounded-xl bg-black/25 border border-white/10 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${publication.accent}`} />
                    </div>
                    <span className="relative z-10 rounded-lg bg-black/25 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-white">
                      {categories.find((category) => category.id === publication.category)?.label}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
                      <span>{publication.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {publication.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-white leading-snug group-hover:text-cyber-cyan transition-colors">
                      {publication.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mt-3 line-clamp-3">
                      {publication.desc}
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-gray-500">{t.author}</span>
                      <a href={`#${publication.path}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-cyber-cyan">
                        {t.read}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
            {filteredPublications.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-500">
                {t.noResults}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
