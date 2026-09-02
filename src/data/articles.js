export const articleCategories = [
  { id: 'hepsi', label: { tr: 'Tümü', en: 'All' } },
  { id: 'haber', label: { tr: 'Haberler', en: 'News' } },
  { id: 'rehber', label: { tr: 'Rehberler', en: 'Guides' } },
  { id: 'rapor', label: { tr: 'Raporlar', en: 'Reports' } },
  { id: 'medya', label: { tr: 'Medya', en: 'Media' } }
];

export const articles = [
  {
    slug: 'yapay-zeka-calisanlar-meta-project-ot',
    category: 'rapor',
    title: {
      tr: 'Yapay Zekâ Çalışanların Yerini Almaya Hazır mı? Meta’nın Project OT Deneyi Bize Ne Anlatıyor?',
      en: 'Is AI Ready to Replace Employees? What Meta’s Project OT Experiment Tells Us'
    },
    desc: {
      tr: 'Meta’nın Project OT deneyi üzerinden AI agentların çalışanları, görevleri ve şirket organizasyonlarını gerçekten ne ölçüde dönüştürebileceğini tartışan kapsamlı analiz.',
      en: 'A deep analysis of Meta’s Project OT experiment and what it reveals about AI agents, employees, workflows, and organizational redesign.'
    },
    date: {
      tr: '02 Eylül 2026',
      en: 'September 02, 2026'
    },
    readTime: {
      tr: '16 dk okuma',
      en: '16 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/yapay-zeka-calisanlar-meta-project-ot.png',
    imageAlt: 'AI agentlar ve insan ekiplerin birlikte çalıştığı yazısız teknoloji operasyon görseli',
    source: '/articles/yapay-zeka-calisanlar-meta-project-ot.txt',
    publishedAt: '2026-09-02T09:00:00+03:00',
    modifiedAt: '2026-09-02T15:30:00+03:00',
    keywords: [
      'yapay zeka çalışanların yerini alacak mı',
      'AI agent',
      'Meta Project OT',
      'agentic AI',
      'organizasyon dönüşümü',
      'AI otomasyon',
      'growth hacking',
      'iş gücü dönüşümü'
    ],
    color: 'from-cyan-500/20 to-violet-500/10',
    accent: 'text-cyber-cyan',
    featured: true,
    sources: [
      {
        label: 'Reuters - Mark Zuckerberg had a bold plan to replace Meta staff with AI. Here’s how it imploded',
        url: 'https://www.reuters.com/investigations/mark-zuckerberg-had-bold-plan-replace-meta-staff-with-ai-heres-how-it-imploded-2026-08-26/'
      },
      {
        label: 'Meta Engineering - Capacity Efficiency at Meta',
        url: 'https://engineering.fb.com/2026/04/16/developer-tools/capacity-efficiency-at-meta-how-unified-ai-agents-optimize-performance-at-hyperscale/'
      },
      {
        label: 'Meta Engineering - How Meta Used AI to Map Tribal Knowledge',
        url: 'https://engineering.fb.com/2026/04/06/developer-tools/how-meta-used-ai-to-map-tribal-knowledge-in-large-scale-data-pipelines/'
      },
      {
        label: 'Microsoft Research - CORPGEN advances AI agents for real work',
        url: 'https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/'
      },
      {
        label: 'Stanford HAI - 2026 AI Index Report',
        url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report'
      },
      {
        label: 'Deloitte - The State of AI in the Enterprise 2026',
        url: 'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html'
      },
      {
        label: 'Deloitte - Rethinking operating models for humans with agents',
        url: 'https://www.deloitte.com/us/en/insights/topics/talent/operating-models-for-humans-ai-agents.html'
      },
      {
        label: 'McKinsey - Building the foundations for agentic AI at scale',
        url: 'https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/building-the-foundations-for-agentic-ai-at-scale'
      }
    ]
  },
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
    imageAlt: 'Tim Cook ve Apple operasyon mirası için yazısız editorial teknoloji görseli',
    source: '/articles/tim-cook-apple-miras.txt',
    publishedAt: '2026-08-31T09:00:00+03:00',
    modifiedAt: '2026-09-02T15:30:00+03:00',
    keywords: [
      'Tim Cook Apple mirası',
      'Apple tedarik zinciri',
      'Apple operasyon yönetimi',
      'Apple supply chain',
      'Apple growth',
      'John Ternus',
      'Steve Jobs Tim Cook',
      'operational excellence'
    ],
    color: 'from-slate-500/25 to-cyan-500/10',
    accent: 'text-cyber-cyan',
    replaceTodayWithDate: true,
    sources: [
      {
        label: 'Apple Newsroom',
        url: 'https://www.apple.com/newsroom/'
      },
      {
        label: 'Reuters - Technology coverage',
        url: 'https://www.reuters.com/technology/'
      },
      {
        label: 'Financial Times - Apple coverage',
        url: 'https://www.ft.com/apple'
      },
      {
        label: 'MarketWatch - Apple market data and commentary',
        url: 'https://www.marketwatch.com/investing/stock/aapl'
      },
      {
        label: 'Apple Investor Relations - SEC filings',
        url: 'https://investor.apple.com/sec-filings/default.aspx'
      }
    ]
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
