export const articleCategories = [
  { id: 'hepsi', label: { tr: 'Tümü', en: 'All' } },
  { id: 'haber', label: { tr: 'Haberler', en: 'News' } },
  { id: 'rehber', label: { tr: 'Rehberler', en: 'Guides' } },
  { id: 'rapor', label: { tr: 'Raporlar', en: 'Reports' } },
  { id: 'medya', label: { tr: 'Medya', en: 'Media' } }
];

export const articles = [
  {
    slug: 'tim-cook-apple-miras',
    category: 'rapor',
    title: {
      tr: 'Tim Cook’un Apple’a bıraktığı asıl miras: Ürünlerden daha büyük bir makine',
      en: 'Tim Cook’s real Apple legacy: a machine bigger than products'
    },
    desc: {
      tr: 'Tim Cook dönemini yalnızca ürünler veya piyasa değeriyle değil; Apple’ın tedarik zinciri, sermaye kullanımı ve operasyonel mimarisi üzerinden okuyan kapsamlı analiz.',
      en: 'A deep analysis of Tim Cook’s Apple era through supply chain, capital allocation, and operational architecture rather than products alone.'
    },
    date: {
      tr: '31 Ağustos 2026',
      en: 'August 31, 2026'
    },
    readTime: {
      tr: '18 dk okuma',
      en: '18 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/tim-cook-apple-miras.png',
    source: '/articles/tim-cook-apple-miras.txt',
    color: 'from-slate-500/25 to-cyan-500/10',
    accent: 'text-cyber-cyan',
    featured: true,
    replaceTodayWithDate: true
  },
  {
    slug: 'ai-mvp-kapsam',
    category: 'rehber',
    title: {
      tr: 'Yapay zekâ destekli MVP geliştirirken kapsam nasıl çizilir?',
      en: 'How to scope an AI-assisted MVP'
    },
    desc: {
      tr: 'AI ve no-code araçlarıyla hızlı ürün çıkarırken teknik borç, müşteri doğrulama ve lansman sınırlarını birlikte düşünmek gerekir.',
      en: 'When building quickly with AI and no-code tools, technical debt, customer validation, and launch limits should be considered together.'
    },
    date: {
      tr: '28 Temmuz 2026',
      en: 'July 28, 2026'
    },
    readTime: {
      tr: '6 dk',
      en: '6 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-violet-500/20 to-fuchsia-500/10',
    accent: 'text-violet-300'
  },
  {
    slug: 'erken-asama-buyume-yatirim-notlari',
    category: 'rapor',
    title: {
      tr: 'Erken aşama girişimler için büyüme ve yatırım hazırlığı notları',
      en: 'Growth and fundraising notes for early-stage startups'
    },
    desc: {
      tr: 'Pitch deck, finansal model, satış hunisi ve yatırımcı görüşmelerinde kurucuların en sık zorlandığı alanları özetleyen analiz.',
      en: 'An analysis of the areas founders struggle with most across pitch decks, financial models, sales funnels, and investor meetings.'
    },
    date: {
      tr: '15 Temmuz 2026',
      en: 'July 15, 2026'
    },
    readTime: {
      tr: '8 dk',
      en: '8 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-emerald-500/20 to-cyan-500/10',
    accent: 'text-emerald-300'
  },
  {
    slug: 'kurucu-sohbetleri-ilk-90-gun',
    category: 'medya',
    title: {
      tr: 'Kurucu sohbetleri: fikrin ürüne dönüştüğü ilk 90 gün',
      en: 'Founder talks: the first 90 days from idea to product'
    },
    desc: {
      tr: 'Podcast ve video serilerinde kurucularla ürün, müşteri görüşmesi, satış ve ekip kurma pratiklerini konuşuyoruz.',
      en: 'Our podcast and video series explore product, customer discovery, sales, and team-building practices with founders.'
    },
    date: {
      tr: '09 Temmuz 2026',
      en: 'July 09, 2026'
    },
    readTime: {
      tr: '22 dk',
      en: '22 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-rose-500/20 to-orange-500/10',
    accent: 'text-rose-300'
  },
  {
    slug: 'b2b-satis-pipeline',
    category: 'rehber',
    title: {
      tr: 'B2B satışta ilk pipeline nasıl kurulur?',
      en: 'How to build the first B2B sales pipeline'
    },
    desc: {
      tr: 'ICP, lead kaynakları, CRM aşamaları ve founder-led sales düzeni için uygulanabilir bir başlangıç çerçevesi.',
      en: 'A practical starting framework for ICP, lead sources, CRM stages, and founder-led sales rhythm.'
    },
    date: {
      tr: '01 Temmuz 2026',
      en: 'July 01, 2026'
    },
    readTime: {
      tr: '7 dk',
      en: '7 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-sky-500/20 to-indigo-500/10',
    accent: 'text-sky-300'
  },
  {
    slug: 'akademi-uygulama-yeni-seriler',
    category: 'haber',
    title: {
      tr: 'Akademi ve uygulama ekipleri yeni içerik serilerini yayına alıyor',
      en: 'Academy and execution teams launch new content series'
    },
    desc: {
      tr: 'Teknoloji, pazarlama, finans ve yönetim başlıklarında yeni yayın serileri kurucuların pratik ihtiyaçlarına göre planlandı.',
      en: 'New publication series across technology, marketing, finance, and management were planned around practical founder needs.'
    },
    date: {
      tr: '24 Haziran 2026',
      en: 'June 24, 2026'
    },
    readTime: {
      tr: '3 dk',
      en: '3 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-amber-500/20 to-cyan-500/10',
    accent: 'text-amber-300'
  }
];

export function localizedArticle(article, lang = 'tr') {
  const locale = lang === 'en' ? 'en' : 'tr';
  return {
    ...article,
    title: article.title[locale],
    desc: article.desc[locale],
    date: article.date[locale],
    readTime: article.readTime[locale],
    path: article.source ? `/yayinlar/${article.slug}` : '/yayinlar'
  };
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
