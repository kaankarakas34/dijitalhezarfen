export const articleCategories = [
  { id: 'hepsi', label: { tr: 'Tümü', en: 'All' } },
  { id: 'rapor', label: { tr: 'Analizler', en: 'Analyses' } },
  { id: 'rehber', label: { tr: 'Rehberler', en: 'Guides' } },
  { id: 'haber', label: { tr: 'Haberler', en: 'News' } },
  { id: 'medya', label: { tr: 'Medya', en: 'Media' } }
];

export const articles = [
  {
    slug: 'google-ai-mode-reklamlari-arama-ekonomisi',
    category: 'haber',
    topic: {
      tr: "Dijital Pazarlama",
      en: "Digital Marketing"
    },
    title: {
      tr: "Google AI Mode reklamları: Arama motoru artık konuşmanın içinde satış yapıyor",
      en: "Google AI Mode Ads: The Search Engine Now Sells Inside the Conversation"
    },
    seoTitle: "Google AI Mode reklamları: Arama motoru artık konuşmanın içinde satış yapıyor | Dijital Hezarfen",
    lead: {
      tr: "Google, AI Mode reklamlarını yeni ülkelere açarak arama ekonomisinin geleceğini konuşma tabanlı deneyimlerde arıyor.",
      en: "Google expands AI Mode ads into new markets, seeking the future of the search economy in conversational experiences."
    },
    desc: {
      tr: "Google, AI Mode reklamlarını yeni ülkelere açarak arama ekonomisinin geleceğini konuşma tabanlı deneyimlerde arıyor. Arama artık birkaç kelimelik sorgudan ibaret değil.",
      en: "Google expands AI Mode ads into new countries, reshaping the search economy around multi-turn conversational intent and sponsored discovery."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-01.webp',
    imageAlt: "Konuşma tabanlı aramada reklam ve kullanıcı niyetinin birleşmesini simgeleyen görsel.",
    source: '/articles/google-ai-mode-reklamlari-arama-ekonomisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Google AI Mode reklamlari",
          "arama ekonomisi",
          "GEO",
          "SEO",
          "dijital pazarlama",
          "konusma tabanli arama"
    ],
    color: 'from-blue-600/25 to-amber-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ["target-ask-target-ai-alisveris","walmart-connect-ajanslar-reklam-olcumleme"],
    sources: [
          {
                "label": "Google Blog — Ads in AI Mode expand to new markets (Kaynak / Doğrulama Bağlantısı)",
                "url": "https://blog.google/intl/en-africa/products/ads-in-ai-mode-expand-to-new-markets/"
          }
    ]
  },
  {
    slug: 'microsoft-openai-10-milyar-dolar-gelir',
    category: 'haber',
    topic: {
      tr: "Yapay Zekâ Ekonomisi",
      en: "AI Economy"
    },
    title: {
      tr: "Microsoft–OpenAI ilişkisi: Bir yatırım nasıl dev bir gelir kanalına dönüşür?",
      en: "The Microsoft–OpenAI Relationship: How an Investment Turns into a Massive Revenue Channel"
    },
    seoTitle: "Microsoft–OpenAI ilişkisi: Bir yatırım nasıl dev bir gelir kanalına dönüşür? | Dijital Hezarfen",
    lead: {
      tr: "Microsoft’un OpenAI ile ticari ilişkilerinden elde ettiği gelir, yapay zekâ ortaklıklarının ne kadar karmaşık bir ekonomiye dönüştüğünü gösteriyor.",
      en: "Revenue generated from Microsoft’s commercial arrangements with OpenAI illustrates how complex AI partnerships have become."
    },
    desc: {
      tr: "Microsoft’un OpenAI ile ticari ilişkilerinden elde ettiği gelir, yapay zekâ ortaklıklarının ne kadar karmaşık bir ekonomiye dönüştüğünü gösteriyor. Klasik yatırım ilişkisi yerini karşılıklı bağımlılığa bırakıyor.",
      en: "Microsoft’s commercial revenue from OpenAI demonstrates how strategic AI investments blend cloud infrastructure consumption, partnership, and competition."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-02.webp',
    imageAlt: "Bulut altyapısı ile yapay zekâ şirketi arasındaki stratejik ortaklık ve bağımlılık.",
    source: '/articles/microsoft-openai-10-milyar-dolar-gelir.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Microsoft OpenAI gelir",
          "yapay zeka ekonomisi",
          "bulut altyapisi",
          "stratejik ortaklik",
          "musteri yogunlasmasi"
    ],
    color: 'from-sky-600/25 to-amber-600/15',
    accent: 'text-sky-400',
    featured: false,
    relatedSlugs: ["meta-ai-yatirimlari-sermaye-verimliligi","nebius-ai-veri-merkezi-finansmani"],
    sources: [
          {
                "label": "Microsoft Source (28 Ekim 2026) — Microsoft announces first-quarter results (Kaynak / Doğrulama Bağlantısı)",
                "url": "https://news.microsoft.com/source/2026/10/28/microsoft-announces-first-quarter-results-2/"
          }
    ]
  },
  {
    slug: 'sap-model-routing-ai-maliyet-optimizasyonu',
    category: 'haber',
    topic: {
      tr: "Kurumsal Yazılım",
      en: "Enterprise Software"
    },
    title: {
      tr: "SAP neden en güçlü yapay zekâ modelini kullanmak istemiyor?",
      en: "Why SAP Does Not Want to Use the Most Powerful AI Model for Everything"
    },
    seoTitle: "SAP neden en güçlü yapay zekâ modelini kullanmak istemiyor? | Dijital Hezarfen",
    lead: {
      tr: "Kurumsal yapay zekâda başarı, en büyük modeli her işte çalıştırmak değil; doğru işi doğru maliyetle tamamlamak olabilir.",
      en: "Success in enterprise AI may not mean running the largest model on every task, but completing the right job at the right cost."
    },
    desc: {
      tr: "Kurumsal yapay zekâda başarı, en büyük modeli her işte çalıştırmak değil; doğru işi doğru maliyetle tamamlamak olabilir. Bir müşteri faturasının sınıflandırılması ile tedarik zinciri problemi aynı modeli gerektirmez.",
      en: "SAP’s multi-model routing strategy highlights why enterprise software focuses on cost per completed task rather than raw model size."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-03.webp',
    imageAlt: "Farklı yapay zekâ modelleri arasında maliyet ve performans optimizasyonu.",
    source: '/articles/sap-model-routing-ai-maliyet-optimizasyonu.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "SAP model routing",
          "AI maliyet optimizasyonu",
          "kurumsal yazilim",
          "birim ekonomi",
          "token maliyeti"
    ],
    color: 'from-teal-600/25 to-amber-500/15',
    accent: 'text-teal-400',
    featured: false,
    relatedSlugs: ["gpt-6-astra-ve-agi-cagi","yapay-zeka-calisanlar-meta-project-ot"],
    sources: [
          {
                "label": "Reuters — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)",
                "url": "https://www.reuters.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'nvidia-hugging-face-satin-alma-rekabet',
    category: 'haber',
    topic: {
      tr: "Yapay Zekâ ve Platformlar",
      en: "AI & Platforms"
    },
    title: {
      tr: "Nvidia ve Hugging Face: Açık yapay zekânın kapısı kimin elinde?",
      en: "Nvidia and Hugging Face: Who Holds the Gate to Open AI?"
    },
    seoTitle: "Nvidia ve Hugging Face: Açık yapay zekânın kapısı kimin elinde? | Dijital Hezarfen",
    lead: {
      tr: "Nvidia’nın Hugging Face’i satın alma anlaşması, açık modellerin dağıtımında güç yoğunlaşması tartışmasını yeniden açtı.",
      en: "Nvidia’s deal to acquire Hugging Face reopens the debate over power concentration in the distribution of open AI models."
    },
    desc: {
      tr: "Nvidia’nın Hugging Face’i satın alma anlaşması, açık modellerin dağıtımında güç yoğunlaşması tartışmasını yeniden açtı. Hugging Face’in değeri yalnızca barındırdığı dosyalarda değil, ekosisteminde.",
      en: "Regulatory scrutiny over Nvidia’s reported Hugging Face deal highlights concerns around platform neutrality and open model distribution."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-04.webp',
    imageAlt: "Açık yapay zekâ modellerinin dağıtım altyapısında kontrol tartışması.",
    source: '/articles/nvidia-hugging-face-satin-alma-rekabet.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Nvidia Hugging Face",
          "acik kaynak yapay zeka",
          "rekabet incelemesi",
          "AI dagitim kanali",
          "platform bagimliligi"
    ],
    color: 'from-emerald-600/25 to-slate-600/15',
    accent: 'text-emerald-400',
    featured: false,
    relatedSlugs: ["nvidia-agile-robots-humanoid-platform","abd-cin-teknoloji-yatirim-kisitlamalari"],
    sources: [
          {
                "label": "Reuters (28 Ekim 2026) — US DOJ inquiry on Nvidia Hugging Face deal (Kaynak / Doğrulama Başlangıç Noktası)",
                "url": "https://www.reuters.com/world/us-doj-is-inquiring-about-nvidias-purchase-hugging-face-sources-say-2026-10-28/"
          }
    ]
  },
  {
    slug: 'upwind-400-milyon-dolar-bulut-guvenligi',
    category: 'haber',
    topic: {
      tr: "Startup ve VC",
      en: "Startups & VC"
    },
    title: {
      tr: "Upwind 400 milyon dolar topladı: Güvenlik neden AI çağının temel altyapısı?",
      en: "Upwind Raises $400 Million: Why Runtime Security Is Core Infrastructure in the AI Era"
    },
    seoTitle: "Upwind 400 milyon dolar topladı: Güvenlik neden AI çağının temel altyapısı? | Dijital Hezarfen",
    lead: {
      tr: "Bulut güvenliğinde yeni yatırımlar, çalışan yazılımı izleme ihtiyacının büyüdüğünü gösteriyor.",
      en: "New investments in cloud security show the growing need for real-time runtime monitoring."
    },
    desc: {
      tr: "Bulut güvenliğinde yeni yatırımlar, çalışan yazılımı izleme ihtiyacının büyüdüğünü gösteriyor. Güvenlik yalnızca kod yazılırken yapılan testlerden ibaret değil.",
      en: "Upwind’s $400M Series C round underscores why runtime cloud security and anomaly detection are critical as AI agents gain production permissions."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-05.webp',
    imageAlt: "Bulut ortamındaki tehditleri çalışma anında tespit eden güvenlik teknolojisi.",
    source: '/articles/upwind-400-milyon-dolar-bulut-guvenligi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Upwind 400 milyon dolar",
          "bulut guvenligi",
          "Series C yatirim",
          "runtime security",
          "AI ajan guvenligi"
    ],
    color: 'from-indigo-600/25 to-rose-600/15',
    accent: 'text-rose-400',
    featured: false,
    relatedSlugs: ["nvidia-openshell-ai-agent-guvenligi","yapay-zekayi-kapatmakta-cok-mu-gec-kaldik"],
    sources: [
          {
                "label": "TechCrunch — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)",
                "url": "https://techcrunch.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'guidewire-hyperexponential-sigorta-yapay-zeka',
    category: 'haber',
    topic: {
      tr: "InsurTech",
      en: "InsurTech"
    },
    title: {
      tr: "Guidewire–Hyperexponential: Sigortacılıkta yapay zekâ neden milyarlar ediyor?",
      en: "Guidewire–Hyperexponential: Why AI in Insurance Pricing Commands Billions"
    },
    seoTitle: "Guidewire–Hyperexponential: Sigortacılıkta yapay zekâ neden milyarlar ediyor? | Dijital Hezarfen",
    lead: {
      tr: "Sigorta fiyatlandırma yazılımlarına yapılan büyük yatırımlar, dikey yazılımın ekonomik değerini yeniden hatırlatıyor.",
      en: "Major acquisitions in insurance pricing software remind the market of the enduring economic value of vertical software."
    },
    desc: {
      tr: "Sigorta fiyatlandırma yazılımlarına yapılan büyük yatırımlar, dikey yazılımın ekonomik değerini yeniden hatırlatıyor. Bir sigorta teklifinin arkasında onlarca değişken ve risk modeli bulunuyor.",
      en: "Guidewire’s agreement to acquire Hyperexponential highlights why domain-specific decision and risk pricing software creates deep enterprise value."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-06.webp',
    imageAlt: "Sigorta risk fiyatlandırmasında yapay zekâ destekli karar sistemleri.",
    source: '/articles/guidewire-hyperexponential-sigorta-yapay-zeka.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Guidewire Hyperexponential",
          "InsurTech",
          "sigorta yapay zeka",
          "dikey yazilim",
          "risk fiyatlandirma"
    ],
    color: 'from-emerald-600/25 to-blue-900/20',
    accent: 'text-emerald-400',
    featured: false,
    relatedSlugs: ["lseg-octus-ozel-veri-ai","mach9-ai-cad-pivot"],
    sources: [
          {
                "label": "Guidewire — Kurumsal Ana Sayfa / Doğrulama Başlangıç Noktası (Özgül duyuru URL’si ayrıca teyit edilmelidir)",
                "url": "https://www.guidewire.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'rebuild-venture-studio-ileri-uretim',
    category: 'haber',
    topic: {
      tr: "Girişimcilik",
      en: "Entrepreneurship"
    },
    title: {
      tr: "Re:Build ve 2,1 milyar dolar: Venture Studio modeli fabrikaya taşınır mı?",
      en: "Re:Build and $2.1 Billion: Can the Venture Studio Model Move to the Factory Floor?"
    },
    seoTitle: "Re:Build ve 2,1 milyar dolar: Venture Studio modeli fabrikaya taşınır mı? | Dijital Hezarfen",
    lead: {
      tr: "Re:Build’in yeni finansmanı, girişim kurma becerisinin üretim altyapısıyla birleşebileceğini gösteriyor.",
      en: "Re:Build’s new financing shows how venture-building capabilities can merge with shared industrial manufacturing infrastructure."
    },
    desc: {
      tr: "Re:Build’in yeni finansmanı, girişim kurma becerisinin üretim altyapısıyla birleşebileceğini gösteriyor. Yazılım girişimi kurarken bulut altyapısı kiralayabilirsiniz; fiziksel üretimde ise ortak altyapı kritik.",
      en: "Re:Build Manufacturing’s $2.1B financing tests whether a shared industrial platform can reduce the capital burden of launching hardware ventures."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '27 Ekim 2026',
      en: 'October 27, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-07.webp',
    imageAlt: "Ortak üretim altyapısından yeni girişimlerin doğduğu endüstriyel model.",
    source: '/articles/rebuild-venture-studio-ileri-uretim.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "ReBuild Manufacturing",
          "venture studio",
          "ileri uretim",
          "endustriyel girisimcilik",
          "donanim girisimi"
    ],
    color: 'from-orange-600/25 to-slate-600/15',
    accent: 'text-orange-400',
    featured: false,
    relatedSlugs: ["tim-cook-apple-miras","ben-bu-fikire-2-milyon-dolar-yatirim-alirim"],
    sources: [
          {
                "label": "Re:Build Manufacturing Newsroom (27 Ekim 2026) — $2.1B financing announcement (Kaynak / Doğrulama Bağlantısı)",
                "url": "https://rebuildmanufacturing.com/newsroom/news/rebuild-2-1-billion-reindustrialize-america/"
          }
    ]
  },
  {
    slug: 'jio-platforms-halka-arz-platform-ekonomisi',
    category: 'haber',
    topic: {
      tr: "Global Markalar",
      en: "Global Brands"
    },
    title: {
      tr: "Jio Platforms: Önce dağıtım, sonra dijital ekosistem",
      en: "Jio Platforms: Distribution First, Digital Ecosystem Second"
    },
    seoTitle: "Jio Platforms: Önce dağıtım, sonra dijital ekosistem | Dijital Hezarfen",
    lead: {
      tr: "Jio’nun halka arzı, altyapı ve müşteri erişiminin nasıl çok ürünlü bir platforma dönüşebildiğini tartışmaya açıyor.",
      en: "Jio’s IPO opens a discussion on how telecom infrastructure and customer reach can evolve into a multi-product digital platform."
    },
    desc: {
      tr: "Jio’nun halka arzı, altyapı ve müşteri erişiminin nasıl çok ürünlü bir platforma dönüşebildiğini tartışmaya açıyor. İnternet bağlantısı başlangıçta tek başına bir ürün gibi görünür.",
      en: "Jio Platforms’ IPO highlights how direct customer distribution can anchor cloud, media, financial services, and AI products."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-08.webp',
    imageAlt: "Telekom altyapısından geniş dijital hizmet ekosistemine uzanan platform modeli.",
    source: '/articles/jio-platforms-halka-arz-platform-ekonomisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Jio Platforms halka arz",
          "platform ekonomisi",
          "dagitim agi",
          "dijital ekosistem",
          "musteri edinme maliyeti"
    ],
    color: 'from-violet-600/25 to-amber-500/15',
    accent: 'text-violet-400',
    featured: false,
    relatedSlugs: ["bilgisayar-kavrami-degisiyor","target-ask-target-ai-alisveris"],
    sources: [
          {
                "label": "TechCrunch — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)",
                "url": "https://techcrunch.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'ai-veri-merkezleri-nukleer-enerji',
    category: 'haber',
    topic: {
      tr: "Enerji ve Teknoloji",
      en: "Energy & Technology"
    },
    title: {
      tr: "Nükleer enerji neden yapay zekâ şirketlerinin gündeminde?",
      en: "Why Is Nuclear Energy at the Top of AI Companies’ Agendas?"
    },
    seoTitle: "Nükleer enerji neden yapay zekâ şirketlerinin gündeminde? | Dijital Hezarfen",
    lead: {
      tr: "AI veri merkezlerinin elektrik talebi, mevcut nükleer santrallerin modernizasyonunu teknoloji gündeminin merkezine taşıyor.",
      en: "Electricity demand from AI data centers puts the modernization and uprating of existing nuclear power plants at the center of the tech agenda."
    },
    desc: {
      tr: "AI veri merkezlerinin elektrik talebi, mevcut nükleer santrallerin modernizasyonunu teknoloji gündeminin merkezine taşıyor. Bir veri merkezinin ekonomik değeri yalnızca işlemci sayısıyla ölçülemez.",
      en: "Conditional loan support for nuclear capacity uprates highlights how uninterrupted baseload power has become a strategic bottleneck for AI data centers."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-09.webp',
    imageAlt: "Nükleer enerji üretimi ile yapay zekâ veri merkezlerinin artan elektrik ihtiyacı.",
    source: '/articles/ai-veri-merkezleri-nukleer-enerji.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "AI veri merkezleri nukleer enerji",
          "Constellation Energy",
          "elektrik talebi",
          "veri merkezi altyapisi",
          "enerji teknolojileri"
    ],
    color: 'from-cyan-600/25 to-amber-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ["ai-veri-merkezi-elektrik-kablo-darbogazi","nebius-ai-veri-merkezi-finansmani"],
    sources: [
          {
                "label": "U.S. Department of Energy (energy.gov) — Kurumsal Ana Sayfa / Doğrulama Başlangıç Noktası",
                "url": "https://www.energy.gov/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'samsung-hbm-yapay-zeka-bellek',
    category: 'haber',
    topic: {
      tr: "Çipler",
      en: "Semiconductors & Chips"
    },
    title: {
      tr: "Samsung ve HBM yarışı: Yapay zekânın görünmeyen darboğazı bellek",
      en: "Samsung and the HBM Race: Memory as the Invisible Bottleneck of AI"
    },
    seoTitle: "Samsung ve HBM yarışı: Yapay zekânın görünmeyen darboğazı bellek | Dijital Hezarfen",
    lead: {
      tr: "Yapay zekâ altyapısında işlemci kadar bellek teknolojileri de rekabeti belirliyor.",
      en: "In AI infrastructure, high-bandwidth memory technologies shape competition just as much as compute processors."
    },
    desc: {
      tr: "Yapay zekâ altyapısında işlemci kadar bellek teknolojileri de rekabeti belirliyor. Büyük modeller yalnızca hesaplama birimi kullanmıyor; verinin hızlı taşınmasına ve yeterli belleğe ihtiyaç duyuyor.",
      en: "Samsung’s third-quarter semiconductor results underscore why HBM capacity and advanced packaging remain critical bottlenecks for AI servers."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-10.webp',
    imageAlt: "Yapay zekâ işlemcileri için yüksek bant genişlikli bellek teknolojisi.",
    source: '/articles/samsung-hbm-yapay-zeka-bellek.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Samsung HBM",
          "yuksek bant genislikli bellek",
          "yapay zeka cipleri",
          "yari iletken",
          "bellek darbogazi"
    ],
    color: 'from-indigo-600/25 to-cyan-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ["meta-ai-yatirimlari-sermaye-verimliligi","flapping-airplanes-bir-milyar-dolar-yatirim"],
    sources: [
          {
                "label": "Samsung Investor Relations — Yatırımcı İlişkileri Sayfası / Doğrulama Başlangıç Noktası",
                "url": "https://www.samsung.com/global/ir/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'unitree-robotik-buyume-karlilik',
    category: 'haber',
    topic: {
      tr: "Robotik",
      en: "Robotics"
    },
    title: {
      tr: "Unitree: Robot satışları büyürken kârlılık neden zorlaşıyor?",
      en: "Unitree: Why Profitability Gets Harder Even as Robot Sales Grow"
    },
    seoTitle: "Unitree: Robot satışları büyürken kârlılık neden zorlaşıyor? | Dijital Hezarfen",
    lead: {
      tr: "Robotik sektörünün gerçek sınavı etkileyici gösterilerden sürdürülebilir birim ekonomiye geçmek.",
      en: "The real test for the robotics industry is moving from impressive demos to sustainable unit economics."
    },
    desc: {
      tr: "Robotik sektörünün gerçek sınavı etkileyici gösterilerden sürdürülebilir birim ekonomiye geçmek. Robot üretmek; tedarik zinciri, fiziksel güvenlik, servis ağı ve donanım geliştirme gerektirir.",
      en: "Unitree’s quarterly performance highlights the gap between growing robot shipments and sustainable field profitability."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-11.webp',
    imageAlt: "İnsansı ve dört ayaklı robotların gerçek üretim ortamındaki ticari kullanımı.",
    source: '/articles/unitree-robotik-buyume-karlilik.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Unitree robotik",
          "insansi robot",
          "robotik birim ekonomi",
          "donanim karliligi",
          "endustriyel robot"
    ],
    color: 'from-slate-500/25 to-cyan-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ["nvidia-agile-robots-humanoid-platform","mach9-ai-cad-pivot"],
    sources: [
          {
                "label": "Reuters — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)",
                "url": "https://www.reuters.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'nvidia-nemotron-sesli-yapay-zeka',
    category: 'haber',
    topic: {
      tr: "Voice AI",
      en: "Voice AI"
    },
    title: {
      tr: "Nvidia Nemotron: Çok dilli sesli yapay zekâda açık modellerin yükselişi",
      en: "Nvidia Nemotron: The Rise of Open Models in Multilingual Voice AI"
    },
    seoTitle: "Nvidia Nemotron: Çok dilli sesli yapay zekâda açık modellerin yükselişi | Dijital Hezarfen",
    lead: {
      tr: "Çok dilli konuşma teknolojileri, sesli AI ürünlerinin maliyet ve dağıtım seçeneklerini genişletiyor.",
      en: "Multilingual speech technologies expand cost and deployment options for voice AI products."
    },
    desc: {
      tr: "Çok dilli konuşma teknolojileri, sesli AI ürünlerinin maliyet ve dağıtım seçeneklerini genişletiyor. Sesli AI sistemlerinde konuşma tanıma, dil anlama, yanıt üretme ve konuşma sentezi farklı katmanlar.",
      en: "Nvidia’s Nemotron 3.5 Transcribe release highlights how open-weight speech recognition models impact enterprise voice AI unit economics."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-12.webp',
    imageAlt: "Çok dilli seslerin yapay zekâ ile yazıya dönüştürülmesini simgeleyen görsel.",
    source: '/articles/nvidia-nemotron-sesli-yapay-zeka.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Nvidia Nemotron",
          "sesli yapay zeka",
          "Voice AI",
          "cok dilli transkripsiyon",
          "acik agirlikli modeller"
    ],
    color: 'from-violet-600/25 to-teal-500/15',
    accent: 'text-teal-400',
    featured: false,
    relatedSlugs: ["yapay-zeka-calisanlar-meta-project-ot","sap-model-routing-ai-maliyet-optimizasyonu"],
    sources: [
          {
                "label": "NVIDIA Developer — Geliştirici Portalı / Doğrulama Başlangıç Noktası",
                "url": "https://developer.nvidia.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'harmonic-aristotle-formal-verification',
    category: 'haber',
    topic: {
      tr: "Yazılım ve Araştırma",
      en: "Software & Research"
    },
    title: {
      tr: "Harmonic Aristotle: Yapay zekâ kodu üretmekten doğrulamaya geçiyor",
      en: "Harmonic Aristotle: AI Moves from Generating Code to Mathematically Verifying It"
    },
    seoTitle: "Harmonic Aristotle: Yapay zekâ kodu üretmekten doğrulamaya geçiyor | Dijital Hezarfen",
    lead: {
      tr: "Kod yazan AI kadar, yazılan kodun belirli koşullarda doğru olduğunu kanıtlayan sistemler de önem kazanıyor.",
      en: "Systems that mathematically prove generated code is correct under defined conditions are becoming just as important as code-writing AI."
    },
    desc: {
      tr: "Kod yazan AI kadar, yazılan kodun belirli koşullarda doğru olduğunu kanıtlayan sistemler de önem kazanıyor. Üretken modeller çoğu zaman çalışır görünen kod üretebiliyor.",
      en: "Harmonic’s Aristotle formal verification capabilities for C and Verilog highlight why mathematical proof is a growing layer in the AI software stack."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-13.webp',
    imageAlt: "Yazılım ve çip tasarımlarında matematiksel doğrulama yapan yapay zekâ.",
    source: '/articles/harmonic-aristotle-formal-verification.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Harmonic Aristotle",
          "formal verification",
          "bicimsel dogrulama",
          "kod dogrulama",
          "Verilog C dogrulama"
    ],
    color: 'from-slate-600/25 to-cyan-500/15',
    accent: 'text-gray-200',
    featured: false,
    relatedSlugs: ["nvidia-openshell-ai-agent-guvenligi","enron-karin-nakdin-ve-guvenin-denetimi"],
    sources: [
          {
                "label": "Reuters — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)",
                "url": "https://www.reuters.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'gsk-onkoloji-klinik-arastirma-stratejisi',
    category: 'haber',
    topic: {
      tr: "Biyoteknoloji",
      en: "Biotechnology"
    },
    title: {
      tr: "GSK ve onkoloji yarışı: Daha fazla klinik program daha fazla başarı demek mi?",
      en: "GSK and the Oncology Race: Do More Clinical Programs Automatically Mean More Success?"
    },
    seoTitle: "GSK ve onkoloji yarışı: Daha fazla klinik program daha fazla başarı demek mi? | Dijital Hezarfen",
    lead: {
      tr: "İlaç şirketlerinin araştırma portföylerini genişletmesi, bilimsel fırsatlarla ticari riskin birlikte yönetildiğini gösteriyor.",
      en: "Pharmaceutical companies expanding their oncology pipelines illustrate how scientific opportunity and commercial risk are managed together."
    },
    desc: {
      tr: "İlaç şirketlerinin araştırma portföylerini genişletmesi, bilimsel fırsatlarla ticari riskin birlikte yönetildiğini gösteriyor. Biyoteknolojide bir programın başarılı olması yıllar sürebilir.",
      en: "GSK’s oncology clinical development goals highlight the distinction between pipeline expansion and regulatory approval rates in biotech."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-14.webp',
    imageAlt: "Hedefli kanser tedavilerinin klinik araştırma sürecini anlatan biyomedikal görsel.",
    source: '/articles/gsk-onkoloji-klinik-arastirma-stratejisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "GSK onkoloji",
          "klinik arastirma",
          "biyoteknoloji yatirimlari",
          "ilac gelistirme",
          "kanser arastirmalari"
    ],
    color: 'from-rose-600/25 to-violet-600/15',
    accent: 'text-rose-400',
    featured: false,
    relatedSlugs: ["moderna-merck-mrna-melanom-faz-3","gilead-pepstar-ilac-teknoloji-satin-alma"],
    sources: [
          {
                "label": "GSK Innovation Pipeline — Resmi Araştırma Portföyü Sayfası (Kaynak / Doğrulama Bağlantısı)",
                "url": "https://www.gsk.com/en-gb/innovation/pipeline/"
          }
    ]
  },
  {
    slug: 'lush-sosyal-medya-reklamsiz-marka-stratejisi',
    category: 'haber',
    topic: {
      tr: "Marka ve Tüketici",
      en: "Brand & Consumer"
    },
    title: {
      tr: "Lush sosyal medya reklamlarını bırakınca ne oldu?",
      en: "What Happened After Lush Walked Away from Social Media Ads?"
    },
    seoTitle: "Lush sosyal medya reklamlarını bırakınca ne oldu? | Dijital Hezarfen",
    lead: {
      tr: "Lush örneği, markanın müşteriye ulaşma kanalını kimin kontrol ettiği sorusunu yeniden gündeme getiriyor.",
      en: "The Lush case brings back a critical question: who controls the channel through which a brand reaches its customers?"
    },
    desc: {
      tr: "Lush örneği, markanın müşteriye ulaşma kanalını kimin kontrol ettiği sorusunu yeniden gündeme getiriyor. Sosyal platformlar büyümeyi hızlandırabilir ama müşteri ilişkisini algoritmaya bağımlı kılabilir.",
      en: "Lush’s investment in owned apps, email, community, and physical retail examines the balance between paid social acquisition and direct brand loyalty."
    },
    date: {
      tr: '29 Ekim 2026',
      en: 'October 29, 2026'
    },
    eventDate: {
      tr: '28 Ekim 2026',
      en: 'October 28, 2026'
    },
    readTime: {
      tr: '4 dk okuma',
      en: '4 min read'
    },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-15.webp',
    imageAlt: "Markanın sosyal medya reklamları yerine kendi müşteri kanallarına yatırım yapması.",
    source: '/articles/lush-sosyal-medya-reklamsiz-marka-stratejisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
          "Lush sosyal medya stratejisi",
          "reklamsiz marka buyumesi",
          "dogrudan musteri kanallari",
          "marka sadakati",
          "musteri edinimi"
    ],
    color: 'from-emerald-600/25 to-amber-500/15',
    accent: 'text-emerald-400',
    featured: false,
    relatedSlugs: ["walmart-connect-ajanslar-reklam-olcumleme","google-ai-mode-reklamlari-arama-ekonomisi"],
    sources: [
          {
                "label": "Digiday — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)",
                "url": "https://digiday.com/",
                "isHomepage": true
          }
    ]
  },
  {
    slug: 'meta-ai-yatirimlari-sermaye-verimliligi',
    category: 'haber',
    title: {
      tr: "Meta’nın 145 Milyar Dolarlık Bahsi: Yapay Zekâya Harcanan Para Ne Zaman Geri Dönecek?",
      en: "Meta’s $145 Billion Bet: When Will the Capital Spent on AI Return?"
    },
    desc: {
      tr: "Meta, 2026 sermaye harcamasını 145 milyar dolara taşırken serbest nakit akışı eksiye düştü. Yapay zekâ altyapısında sermaye verimliliği ve getiri süresi masada.",
      en: "As Meta elevates its 2026 CapEx to $145 billion with negative free cash flow, capital efficiency and payback timelines for AI infrastructure face scrutiny."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '6 dk okuma',
      en: '6 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/meta-ai-yatirimlari-sermaye-verimliligi.svg',
    imageAlt: "Meta 145 milyar dolar yapay zeka yatırımı ve sermaye verimliliği analizi",
    source: '/articles/meta-ai-yatirimlari-sermaye-verimliligi.txt',
    publishedAt: '2026-10-23T09:00:00+03:00',
    modifiedAt: '2026-10-23T09:00:00+03:00',
    keywords: [
          "Meta CapEx",
          "yapay zeka yatirimlari",
          "sermaye verimliligi",
          "Mark Zuckerberg",
          "serbest nakit akisi",
          "AI altyapi maliyeti",
          "GPU veri merkezi"
    ],
    color: 'from-blue-600/25 to-cyan-500/15',
    accent: 'text-cyan-400',
    featured: false,
    sources: [
      {
        label: "Reuters (22 Ekim 2026) — Meta’s credit risk indicator jumps record high after results",
        url: 'https://www.reuters.com/business/metas-credit-risk-indicator-jumps-record-high-after-results-2026-10-22/'
      }
    ]
  },
  {
    slug: 'lseg-octus-ozel-veri-ai',
    category: 'haber',
    title: {
      tr: "LSEG Neden 3,54 Milyar Dolara Veri Satın Alıyor? Yapay Zekâ Çağında Asıl Rekabet Avantajı",
      en: "Why LSEG Is Buying Data for $3.54 Billion: The True Moat in the AI Era"
    },
    desc: {
      tr: "London Stock Exchange Group'un Octus'u 3,54 milyar dolara alması, AI çağında asıl kalıcı avantajın modellerde değil, tescilli özel veride olduğunu kanıtlıyor.",
      en: "LSEG acquiring Octus for $3.54B proves that the lasting moat in artificial intelligence lies in proprietary, verified domain data rather than commodity models."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/lseg-octus-ozel-veri-ai.svg',
    imageAlt: "LSEG Octus satın alması ve yapay zeka çağında özel veri rekabeti",
    source: '/articles/lseg-octus-ozel-veri-ai.txt',
    publishedAt: '2026-10-23T09:15:00+03:00',
    modifiedAt: '2026-10-23T09:15:00+03:00',
    keywords: [
          "LSEG Octus satin alma",
          "ozel veri yapay zeka",
          "proprietary data",
          "finansal veri analizi",
          "Permira LSEG",
          "AI rekabet avantaji",
          "ozel kredi verisi"
    ],
    color: 'from-amber-500/25 to-blue-500/15',
    accent: 'text-amber-400',
    featured: false,
    sources: [
      {
        label: "Permira Announcements (Ekim 2026) — Permira agrees sale of Octus to LSEG",
        url: 'https://www.permira.com/news-and-insights/announcements/permira-agrees-sale-of-octus-to-lseg'
      }
    ]
  },
  {
    slug: 'nebius-ai-veri-merkezi-finansmani',
    category: 'haber',
    title: {
      tr: "Nebius’un 3,5 Milyar Dolarlık Kredisi: AI Startup’ları Neden Altyapı Şirketine Dönüşüyor?",
      en: "Nebius’s $3.5B Facility: Why AI Startups Are Turning into Infrastructure Utilities"
    },
    desc: {
      tr: "Nebius'un Citi ile 3,5 milyar dolarlık finansman anlaşması, GPU bulut girişimlerinin yazılım şirketinden çok sermaye yoğun altyapı operatörüne dönüştüğünü gösteriyor.",
      en: "Nebius securing a $3.5 billion facility with Citi demonstrates how AI cloud startups are evolving from software entities into capital-heavy infrastructure utilities."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/nebius-ai-veri-merkezi-finansmani.svg',
    imageAlt: "Nebius Citi 3.5 milyar dolar finansman ve AI veri merkezi altyapı dönüşümü",
    source: '/articles/nebius-ai-veri-merkezi-finansmani.txt',
    publishedAt: '2026-10-23T09:30:00+03:00',
    modifiedAt: '2026-10-23T09:30:00+03:00',
    keywords: [
          "Nebius Citi kredi",
          "AI veri merkezi finansmani",
          "Neocloud GPU",
          "hesaplama kapasitesi",
          "borclanma maliyeti",
          "GPU bulut altyapisi"
    ],
    color: 'from-cyan-500/25 to-teal-500/15',
    accent: 'text-cyan-400',
    featured: false,
    sources: [
      {
        label: "Nebius Newsroom (Ekim 2026) — Nebius secures $3.5 billion financing facility with Citi",
        url: 'https://nebius.com/newsroom/nebius-secures-3-5-billion-financing-facility-with-citi'
      }
    ]
  },
  {
    slug: 'flapping-airplanes-bir-milyar-dolar-yatirim',
    category: 'haber',
    title: {
      tr: "Bir Yaşındaki AI Laboratuvarına 1 Milyar Dolar: Yatırımcılar Ne Satın Alıyor?",
      en: "One-Year-Old AI Lab Raises $1 Billion: What Are Investors Really Buying?"
    },
    desc: {
      tr: "Henüz bir yaşındaki araştırma laboratuvarı Flapping Airplanes'in 6 milyar dolar değerlemeyle aldığı 1 milyar dolar, model verimliliği arayışını zirveye taşıdı.",
      en: "One-year-old AI research lab Flapping Airplanes raising $1B at a reported $6B valuation highlights venture capital’s aggressive pursuit of compute-efficient architectures."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/flapping-airplanes-bir-milyar-dolar-yatirim.svg',
    imageAlt: "Flapping Airplanes 1 milyar dolar yatırım turu ve yapay zeka model verimliliği",
    source: '/articles/flapping-airplanes-bir-milyar-dolar-yatirim.txt',
    publishedAt: '2026-10-23T09:45:00+03:00',
    modifiedAt: '2026-10-23T09:45:00+03:00',
    keywords: [
          "Flapping Airplanes yatirim",
          "AI laboratuvari degerleme",
          "hesaplama verimliligi",
          "erken asama AI girisimi",
          "venture capital AI",
          "model egitim ekonomisi"
    ],
    color: 'from-violet-500/25 to-indigo-500/15',
    accent: 'text-violet-400',
    featured: false,
    sources: [
      {
        label: "TechCrunch (21 Ekim 2026) — Year-old AI lab Flapping Airplanes raises $1B at a $6B valuation",
        url: 'https://techcrunch.com/2026/10/21/year-old-ai-lab-flapping-airplanes-raises-1b-at-a-6b-valuation/'
      }
    ]
  },
  {
    slug: 'mach9-ai-cad-pivot',
    category: 'haber',
    title: {
      tr: "Mach9’un Pivotu: Robot Yapmak Yerine Robotların Topladığı Veriyi Satmak",
      en: "Mach9’s Pivot: Selling Data Gathered by Robots Instead of Building Hardware"
    },
    desc: {
      tr: "Mach9, robotik donanımdan LiDAR verilerini AI ile CAD mühendislik çizimlerine dönüştüren yazılıma odaklanarak 34 milyon dolarlık Seri A yatırımını tamamladı.",
      en: "By pivoting from robotics hardware to AI-powered CAD conversion of LiDAR point clouds, Mach9 secured $34 million in Series A funding to resolve engineering bottlenecks."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/mach9-ai-cad-pivot.svg',
    imageAlt: "Mach9 LiDAR verisinden AI CAD yazılımına pivot ve 34 milyon dolar Seri A",
    source: '/articles/mach9-ai-cad-pivot.txt',
    publishedAt: '2026-10-23T10:00:00+03:00',
    modifiedAt: '2026-10-23T10:00:00+03:00',
    keywords: [
          "Mach9 pivot",
          "LiDAR AI CAD",
          "dikey yapay zeka",
          "muhendislik cizim otomasyonu",
          "Series A yatirim",
          "donanimdan yazilima pivot"
    ],
    color: 'from-emerald-500/25 to-cyan-500/15',
    accent: 'text-emerald-400',
    featured: false,
    sources: [
      {
        label: "Mach9 Blog (Ekim 2026) — Mach9 raises $34M Series A",
        url: 'https://mach9.ai/blog/mach9-raises-34m-series-a'
      }
    ]
  },
  {
    slug: 'nvidia-openshell-ai-agent-guvenligi',
    category: 'haber',
    title: {
      tr: "Nvidia OpenShell: AI Ajanları Şirketinize Girdiğinde Güvenlik Nasıl Değişecek?",
      en: "Nvidia OpenShell: How Security Changes When AI Agents Enter the Enterprise"
    },
    desc: {
      tr: "Nvidia'nın OpenShell mimarisi, kurumsal süreçlerde özerk hareket eden yapay zekâ ajanları için yetkilendirme, işlem denetimi ve donanım destekli güvenlik getiriyor.",
      en: "Nvidia’s OpenShell reference architecture establishes hardware-anchored permissioning, audit trails, and execution guardrails for autonomous enterprise AI agents."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '6 dk okuma',
      en: '6 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/nvidia-openshell-ai-agent-guvenligi.svg',
    imageAlt: "Nvidia OpenShell kurumsal AI ajan güvenliği ve donanım denetim mimarisi",
    source: '/articles/nvidia-openshell-ai-agent-guvenligi.txt',
    publishedAt: '2026-10-23T10:15:00+03:00',
    modifiedAt: '2026-10-23T10:15:00+03:00',
    keywords: [
          "Nvidia OpenShell",
          "AI agent guvenligi",
          "otonom ajan denetimi",
          "kurumsal yapay zeka guvenlik",
          "donanim tabanli yetkilendirme",
          "rollback mimarisi"
    ],
    color: 'from-emerald-500/25 to-lime-500/15',
    accent: 'text-emerald-400',
    featured: false,
    sources: [
      {
        label: "Nvidia Newsroom (Ekim 2026) — OpenShell Reference Architecture for Secure Agentic AI",
        url: 'https://nvidianews.nvidia.com/news/openshell-reference-architecture'
      }
    ]
  },
  {
    slug: 'nvidia-agile-robots-humanoid-platform',
    category: 'haber',
    title: {
      tr: "Humanoid Robotlar İçin Android Benzeri Bir Platform mu Doğuyor?",
      en: "Is an Android-Like Platform Emerging for Humanoid Robotics?"
    },
    desc: {
      tr: "Nvidia'nın Isaac platformu ve Agile Robots ortaklığı, humanoid robotik alanında Android benzeri standart bir geliştirme ve simülasyon ekosistemi yaratıyor.",
      en: "Nvidia's Isaac platform expansions and Agile Robots alignment point toward an Android-style universal development and simulation layer for humanoid robotics."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/nvidia-agile-robots-humanoid-platform.svg',
    imageAlt: "Nvidia Isaac ve Agile Robots humanoid robot geliştirme platformu",
    source: '/articles/nvidia-agile-robots-humanoid-platform.txt',
    publishedAt: '2026-10-23T10:30:00+03:00',
    modifiedAt: '2026-10-23T10:30:00+03:00',
    keywords: [
          "Nvidia Isaac Agile Robots",
          "humanoid robot platformu",
          "fiziksel yapay zeka",
          "robot isletim sistemi",
          "robotik simulasyon donanimi"
    ],
    color: 'from-green-500/25 to-cyan-500/15',
    accent: 'text-green-400',
    featured: false,
    sources: [
      {
        label: "Nvidia Investor Relations (Ekim 2026) — Isaac Robotics & Agile Robots Announcements",
        url: 'https://investor.nvidia.com/'
      }
    ]
  },
  {
    slug: 'ai-veri-merkezi-elektrik-kablo-darbogazi',
    category: 'haber',
    title: {
      tr: "Yapay Zekânın Önündeki Engel Çip Değil, Elektrik Kablosu Olabilir",
      en: "The Bottleneck for AI May Not Be Chips, But Electrical Cables"
    },
    desc: {
      tr: "Kablo üreticisi Nexans'ın uyarısıyla gündeme gelen altyapı krizi, AI veri merkezlerinin büyüme hızının çip tedarikinden önce elektrik şebekesine takıldığını kanıtlıyor.",
      en: "Cable giant Nexans warns that low and medium-voltage electrical cable supply limits represent a severe physical constraint for scaling AI data centers."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/ai-veri-merkezi-elektrik-kablo-darbogazi.svg',
    imageAlt: "Nexans elektrik kablosu darboğazı ve yapay zeka veri merkezi enerji kısıtları",
    source: '/articles/ai-veri-merkezi-elektrik-kablo-darbogazi.txt',
    publishedAt: '2026-10-23T10:45:00+03:00',
    modifiedAt: '2026-10-23T10:45:00+03:00',
    keywords: [
          "Nexans kablo darbogazi",
          "AI veri merkezi elektrik",
          "enerji sebeke baglantisi",
          "trafo orta gerilim",
          "fiziksel altyapi kisiti"
    ],
    color: 'from-amber-500/25 to-red-500/15',
    accent: 'text-amber-400',
    featured: false,
    sources: [
      {
        label: "Reuters (22 Ekim 2026) — Cable capacity emerges as bottleneck for AI data centres, Nexans says",
        url: 'https://www.reuters.com/technology/cable-capacity-emerges-bottleneck-ai-data-centres-nexans-says-2026-10-22/'
      }
    ]
  },
  {
    slug: 'target-ask-target-ai-alisveris',
    category: 'haber',
    title: {
      tr: "Target’ın AI Alışveriş Asistanı: E-Ticarette Arama Kutusunun Sonrası",
      en: "Target’s AI Shopping Assistant: Beyond the E-Commerce Search Box"
    },
    desc: {
      tr: "Target'ın devreye aldığı Ask Target asistanı, e-ticarette anahtar kelime aramasının yerini ihtiyaç odaklı diyalog ve satın alma eşlikçiliğinin aldığını gösteriyor.",
      en: "Target introducing its Ask Target assistant illustrates how conversational intent and contextual decision support are replacing traditional e-commerce search boxes."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/target-ask-target-ai-alisveris.svg',
    imageAlt: "Ask Target AI alışveriş asistanı ve e-ticarette arama kutusunun dönüşümü",
    source: '/articles/target-ask-target-ai-alisveris.txt',
    publishedAt: '2026-10-23T11:00:00+03:00',
    modifiedAt: '2026-10-23T11:00:00+03:00',
    keywords: [
          "Target Ask Target",
          "e-ticaret yapay zeka",
          "intent based shopping",
          "diyalogsal ticaret",
          "arama kutusu sonrasi",
          "katalog veri yapilandirma"
    ],
    color: 'from-rose-500/25 to-pink-500/15',
    accent: 'text-rose-400',
    featured: false,
    sources: [
      {
        label: "Target Corporate Press (Ekim 2026) — Target Unveils Next-Gen AI Shopping Companion Ask Target",
        url: 'https://corporate.target.com/press'
      }
    ]
  },
  {
    slug: 'walmart-connect-ajanslar-reklam-olcumleme',
    category: 'haber',
    title: {
      tr: "Walmart Connect ve Ajansların Geleceği: Reklamverenle İlişki Kimin?",
      en: "Walmart Connect and the Future of Agencies: Who Truly Owns the Advertiser?"
    },
    desc: {
      tr: "Walmart Connect'in doğrudan markalara etki ölçümlemesi sunması, perakende medya ağlarında reklam ajanslarının aracılık gücünü ve katma değerini sorgulatıyor.",
      en: "Walmart Connect pitching brand marketers directly with performance lift studies challenges traditional media agencies to redefine their strategic added value."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/walmart-connect-ajanslar-reklam-olcumleme.svg',
    imageAlt: "Walmart Connect perakende medya ağı reklam ölçümleme ve ajans ilişkileri",
    source: '/articles/walmart-connect-ajanslar-reklam-olcumleme.txt',
    publishedAt: '2026-10-23T11:15:00+03:00',
    modifiedAt: '2026-10-23T11:15:00+03:00',
    keywords: [
          "Walmart Connect ajanslar",
          "retail media network",
          "marka etki olcumlemesi",
          "medya planlama",
          "artimli satis analizi",
          "reklamveren iliskisi"
    ],
    color: 'from-blue-500/25 to-yellow-500/15',
    accent: 'text-blue-400',
    featured: false,
    sources: [
      {
        label: "Digiday (Ekim 2026) — Walmart Connect pitches brands directly as it pushes lift studies ahead of holiday ad deals",
        url: 'https://digiday.com/marketing/walmart-connect-pitches-brands-directly-as-it-pushes-lift-studies-ahead-of-holiday-ad-deals/'
      }
    ]
  },
  {
    slug: 'cnn-agentic-advertising',
    category: 'haber',
    title: {
      tr: "CNN Reklam Alanını AI Ajanlarına Sattığında Medya Satın Alma Nasıl Değişecek?",
      en: "When CNN Sells Ad Space to AI Agents: The Future of Media Buying"
    },
    desc: {
      tr: "CNN International'ın 2027 başında devreye almayı planladığı ajan tabanlı reklam sistemi, teklif verme, pazarlık ve envanter satın almayı özerk botlara devrediyor.",
      en: "CNN International’s roadmap to commercialize agent-to-agent advertising in Q1 2027 paves the way for fully automated autonomous media negotiation and inventory buying."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/cnn-agentic-advertising.svg',
    imageAlt: "CNN International agentic advertising otonom ajan reklam pazarı",
    source: '/articles/cnn-agentic-advertising.txt',
    publishedAt: '2026-10-23T11:30:00+03:00',
    modifiedAt: '2026-10-23T11:30:00+03:00',
    keywords: [
          "CNN agentic advertising",
          "otonom medya satin alma",
          "agent to agent reklam",
          "programatik reklam devrimi",
          "reklam envanteri otomasyonu"
    ],
    color: 'from-red-500/25 to-blue-500/15',
    accent: 'text-red-400',
    featured: false,
    sources: [
      {
        label: "Digiday (Ekim 2026) — Why CNN International is building for an agentic ad market that barely exists yet",
        url: 'https://digiday.com/media/why-cnn-international-is-building-for-agentic-ad-market-that-barely-exists-yet/'
      }
    ]
  },
  {
    slug: 'moderna-merck-mrna-melanom-faz-3',
    category: 'haber',
    title: {
      tr: "Kişiye Özel mRNA Kanser Tedavisinde %42: Rakam Gerçekte Ne Anlatıyor?",
      en: "42% in Personalized mRNA Cancer Therapy: What Does the Number Really Mean?"
    },
    desc: {
      tr: "Moderna ve Merck'in melanom Faz 3 çalışmasındaki %42'lik göreli risk azalması, kişiselleştirilmiş neoantijen onkolojisinin klinik ve ticari geleceğini açığa çıkarıyor.",
      en: "Moderna and Merck's Phase 3 melanoma trial reporting a 42% relative risk reduction with personalized mRNA therapy clarifies the biological reality behind the headline."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '6 dk okuma',
      en: '6 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/moderna-merck-mrna-melanom-faz-3.svg',
    imageAlt: "Moderna Merck kişiselleştirilmiş mRNA melanom kanser Faz 3 klinik sonuçları",
    source: '/articles/moderna-merck-mrna-melanom-faz-3.txt',
    publishedAt: '2026-10-23T11:45:00+03:00',
    modifiedAt: '2026-10-23T11:45:00+03:00',
    keywords: [
          "Moderna Merck mRNA kanser",
          "melanom Faz 3",
          "Keytruda kombinasyonu",
          "goreli risk azalmasi",
          "kisisellestirilmis onkoloji",
          "neoantijen asisi"
    ],
    color: 'from-emerald-500/25 to-blue-500/15',
    accent: 'text-emerald-400',
    featured: false,
    sources: [
      {
        label: "Associated Press (Ekim 2026) — Moderna and Merck report promising personalized mRNA melanoma Phase 3 trial data",
        url: 'https://apnews.com/article/415ececd79c9411498751246742aafa2'
      }
    ]
  },
  {
    slug: 'gilead-pepstar-ilac-teknoloji-satin-alma',
    category: 'haber',
    title: {
      tr: "Gilead’ın 1,275 Milyar Dolarlık Erken Aşama Bahsi: İlaç mı, Teknoloji mi?",
      en: "Gilead’s $1.275B Early-Stage Bet: Buying a Drug or Acquiring Technology?"
    },
    desc: {
      tr: "Gilead'ın PepStar'ın erken klinik aşamadaki oral IL-23 programını 1,275 milyar dolara alması, ilaç devlerinin bilimsel platform satın alma stratejisini yansıtıyor.",
      en: "Gilead acquiring PepStar’s early-stage oral IL-23 program for $1.275 billion shows big pharma valuing foundational biology platforms over immediate sales."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/gilead-pepstar-ilac-teknoloji-satin-alma.svg',
    imageAlt: "Gilead PepStar Therapeutics satın alması oral IL-23 biyoteknoloji platformu",
    source: '/articles/gilead-pepstar-ilac-teknoloji-satin-alma.txt',
    publishedAt: '2026-10-23T12:00:00+03:00',
    modifiedAt: '2026-10-23T12:00:00+03:00',
    keywords: [
          "Gilead PepStar satin alma",
          "oral IL-23 inhibitoru",
          "erken klinik asama biyoteknoloji",
          "ilac sirketi degerlemesi",
          "patent portfoy stratejisi"
    ],
    color: 'from-blue-500/25 to-indigo-500/15',
    accent: 'text-blue-400',
    featured: false,
    sources: [
      {
        label: "Gilead Sciences Investor Relations (Ekim 2026) — Gilead Announces Acquisition of PepStar Therapeutics Oral IL-23 Program",
        url: 'https://investors.gilead.com/'
      }
    ]
  },
  {
    slug: 'microsoft-ai-teshis-sirali-akil-yurutme',
    category: 'haber',
    title: {
      tr: "Doktor Gibi Adım Adım Düşünen AI: Tıbbi Yapay Zekâda Yeni Eşik",
      en: "AI That Reasons Sequentially Like a Doctor: A New Frontier in Medical AI"
    },
    desc: {
      tr: "Microsoft araştırmacılarının geliştirdiği sıralı akıl yürütme tanı AI'ı, sağlıkta tek seferlik tahmin yerine hekimler gibi aşamalı test ve soru sorma yöntemini getiriyor.",
      en: "Microsoft researchers unveil sequential reasoning medical AI that investigates patient data step-by-step, mimicking clinical differential diagnosis workflows."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '6 dk okuma',
      en: '6 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/microsoft-ai-teshis-sirali-akil-yurutme.svg',
    imageAlt: "Microsoft tıbbi yapay zeka sıralı akıl yürütme ve tanısal klinik karar desteği",
    source: '/articles/microsoft-ai-teshis-sirali-akil-yurutme.txt',
    publishedAt: '2026-10-23T12:15:00+03:00',
    modifiedAt: '2026-10-23T12:15:00+03:00',
    keywords: [
          "Microsoft sirali akil yurutme",
          "tibbi yapay zeka teshis",
          "klinik karar destek",
          "aciklanabilir AI",
          "hekim tanı simülasyonu"
    ],
    color: 'from-cyan-500/25 to-blue-500/15',
    accent: 'text-cyan-400',
    featured: false,
    sources: [
      {
        label: "Reuters (23 Ekim 2026) — Microsoft develops AI tool that can diagnose sequentially like doctor",
        url: 'https://www.reuters.com/business/healthcare-pharmaceuticals/microsoft-develops-ai-tool-that-can-diagnose-sequentially-like-doctor-2026-10-23/'
      }
    ]
  },
  {
    slug: 'abd-cin-teknoloji-yatirim-kisitlamalari',
    category: 'haber',
    title: {
      tr: "ABD’nin Çin Teknoloji Yatırımlarına Yeni Freni: Startup Sermayesi Jeopolitiğe Bağlanıyor",
      en: "US Clamps Down on China Tech Investments: Startup Capital Tied to Geopolitics"
    },
    desc: {
      tr: "ABD Hazine Bakanlığı'nın yayımladığı dış yatırım düzenlemeleri; AI, kuantum ve yarı iletkenlerde sermaye akışlarını doğrudan ulusal güvenlik denetimine bağlıyor.",
      en: "The US Treasury's proposed outbound investment rules explicitly bind startup venture capital in AI, semiconductors, and quantum to national security geopolitics."
    },
    date: {
      tr: '23 Ekim 2026',
      en: 'October 23, 2026'
    },
    readTime: {
      tr: '5 dk okuma',
      en: '5 min read'
    },
    author: 'Kaan Karakaş',
    authorRole: 'Kurucu & Teknoloji Girişimcisi',
    authorBio: "Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.",
    image: '/images/abd-cin-teknoloji-yatirim-kisitlamalari.svg',
    imageAlt: "ABD Hazine Bakanlığı Çin teknoloji yatırım kısıtlamaları ve startup jeopolitiği",
    source: '/articles/abd-cin-teknoloji-yatirim-kisitlamalari.txt',
    publishedAt: '2026-10-23T12:30:00+03:00',
    modifiedAt: '2026-10-23T12:30:00+03:00',
    keywords: [
          "ABD Cin teknoloji kisitlamasi",
          "ABD Hazine Bakanligi outbound investment",
          "yari iletken kuantum AI ihrac",
          "jeopolitik risk",
          "startup sermaye jeopolitigi"
    ],
    color: 'from-amber-500/25 to-blue-500/15',
    accent: 'text-amber-400',
    featured: false,
    sources: [
      {
        label: "U.S. Department of the Treasury (Ekim 2026) — Provisions Pertaining to U.S. Investments in Certain National Security Technologies and Products",
        url: 'https://home.treasury.gov/'
      }
    ]
  },
  {
    slug: 'enron-karin-nakdin-ve-guvenin-denetimi',
    category: 'rapor',
    title: {
      tr: 'ENRON: Kârın, Nakdin ve Güvenin Denetimi',
      en: 'ENRON: Auditing Profit, Cash and Trust'
    },
    desc: {
      tr: 'Bir şirketin ne kadar büyük göründüğünden önce, kazancının nasıl oluştuğuna, nakdinin nereden geldiğine ve riskinin kimin üzerinde kaldığına bakarım. Finansal ve mali denetçi Haydar Karakaş’tan kapsamlı Enron vaka analizi.',
      en: 'Before looking at how large a company appears, I examine how profit is formed, where cash flows from, and who bears the underlying risk. A comprehensive Enron forensic audit case analysis by Haydar Karakaş.'
    },
    date: {
      tr: '04 Ekim 2026',
      en: 'October 04, 2026'
    },
    readTime: {
      tr: '28 dk okuma',
      en: '28 min read'
    },
    author: 'Haydar Karakaş',
    authorRole: 'Finansal & Mali Denetçi',
    authorBio: 'Finansal raporlama, bağımsız denetim, muhasebe hileleri, bilanço ve nakit akış analizi ile kurumsal yönetişim üzerine uzmanlaşmış mali denetçi ve araştırmacı yazar.',
    image: '/images/enron-karin-nakdin-ve-guvenin-denetimi.png',
    imageAlt: 'ENRON: Kârın, nakdin ve güvenin denetimi — Haydar Karakaş finansal denetim vaka analizi',
    source: '/articles/enron-karin-nakdin-ve-guvenin-denetimi.txt',
    publishedAt: '2026-10-04T09:00:00+03:00',
    modifiedAt: '2026-10-04T12:00:00+03:00',
    keywords: [
      'Enron skandali',
      'Haydar Karakas',
      'finansal denetim',
      'bagimsiz denetim',
      'mark to market muhasebe',
      'prepay emtia kredisi',
      'SPE ozel amacli sirketler',
      'Chewco JEDI LJM Raptor',
      'Arthur Andersen denetim zaafi',
      'Sarbanes Oxley Act',
      'faaliyet nakit akisi analizi',
      'kar kalitesi sorgulama',
      'bilanco disi borclar',
      'Sherron Watkins',
      'adli muhasebe forensic audit'
    ],
    color: 'from-amber-500/25 to-cyan-500/15',
    accent: 'text-amber-400',
    featured: true,
    sources: [
      {
        label: 'Enron Corp. 2000 Form 10-K (SEC Edgar, 2 Nisan 2001) — F-2 denetçi görüşü, F-3 gelir tablosu, F-4/F-5 bilanço, F-6 nakit akışı',
        url: 'https://www.sec.gov/Archives/edgar/data/1024401/000102440101500010/ene10-k.txt'
      },
      {
        label: 'Enron Corp. Form 8-K (8 Kasım 2001) — Denetlenmemiş yeniden düzenleme tablosu, Chewco/JEDI ve LJM1 açıklamaları',
        url: 'https://www.sec.gov/Archives/edgar/data/1024401/000095012901503835/h91831e8-k.txt'
      },
      {
        label: 'Powers, Troubh & Winokur (1 Şubat 2002) — Report of Investigation by Special Investigative Committee of Enron Corp. Board of Directors',
        url: 'https://cdn.gmtresearch.com/public-ckfinder/hall-of-shame/Enron%20Corporation/Enron_Report%20of%20the%20Special%20Investigation_Feb1-2002.pdf'
      },
      {
        label: 'U.S. House of Representatives (12 Aralık 2001) — The Enron Collapse: Impact on Investors and Financial Markets (Joseph F. Berardino ifadesi)',
        url: 'https://www.congress.gov/107/chrg/CHRG-107hhrg76958/CHRG-107hhrg76958.pdf'
      },
      {
        label: 'SEC (28 Ocak 2008) — David B. Duncan, Litigation Release No. 20441; risk değerlendirmesi ve denetim prosedürleri',
        url: 'https://www.sec.gov/enforcement-litigation/litigation-releases/lr-20441'
      },
      {
        label: 'SEC (28 Temmuz 2003) — In the Matter of Citigroup, Inc., Release No. 48230; prepay, Nahanni ve Bacchus yapıları',
        url: 'https://www.sec.gov/enforcement-litigation/administrative-proceedings/34-48230'
      },
      {
        label: 'SEC (10 Eylül 2003) — Ben F. Glisan Jr., Litigation Release No. 18335; Raptor ve düzmece riskten korunma işlemleri',
        url: 'https://www.sec.gov/enforcement-litigation/litigation-releases/lr-18335'
      },
      {
        label: 'SEC (2003) — Complaint, SEC v. Merrill Lynch and executives; Nijerya enerji mavnaları işlemi ve çıkış garantisi',
        url: 'https://www.sec.gov/litigation/complaints/comp18038.htm'
      },
      {
        label: 'SEC (22 Aralık 2003) — Canadian Imperial Bank of Commerce (CIBC), Release No. 18517; varlık satışı biçimindeki fonlamalar',
        url: 'https://www.sec.gov/enforcement-litigation/litigation-releases/lr-18517'
      },
      {
        label: 'Dharan & Bufkins (2004/2008) — Red Flags in Enron’s Reporting of Revenues and Key Financial Measures (Rice University / SSRN)',
        url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1172222'
      },
      {
        label: 'McKinsey (2017) — Attracting and retaining the right talent; The War for Talent yaklaşımının tarihçesi',
        url: 'https://www.mckinsey.com/capabilities/people-and-organization/our-insights/attracting-and-retaining-the-right-talent'
      },
      {
        label: 'McKinsey (1 Şubat 2003) — Getting what you pay for with stock options; yönetici risk iştahı ve opsiyon teşvikleri',
        url: 'https://www.mckinsey.com/featured-insights/leadership/getting-what-you-pay-for-with-stock-options'
      },
      {
        label: 'McKinsey (2004) — Putting value back in value-based management; muhasebe kârı ve ekonomik değer ayrımı',
        url: 'https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/putting-value-back-in-value-based-management'
      },
      {
        label: 'The New Yorker — Gladwell, Malcolm (22 Temmuz 2002) The Talent Myth: Enron ve yetenek fetişizmi eleştirisi',
        url: 'https://www.newyorker.com/magazine/2002/07/22/the-talent-myth'
      },
      {
        label: 'Journal of Economic Perspectives — Healy & Palepu (2003) The Fall of Enron; sermaye piyasası aracıları ve teşvikler',
        url: 'https://doi.org/10.1257/089533003765888403'
      },
      {
        label: 'U.S. GAO (5 Mart 2002) — Protecting the Public Interest: Governance, Regulatory Oversight, Auditing (GAO-02-483T)',
        url: 'https://www.gao.gov/products/gao-02-483t'
      },
      {
        label: 'U.S. Supreme Court (31 Mayıs 2005) — Arthur Andersen LLP v. United States, 544 U.S. 696; jüri talimatları ve kararın bozulması',
        url: 'https://www.law.cornell.edu/supremecourt/text/544/696'
      },
      {
        label: 'U.S. Senate (7 Mayıs 2002) — The Role of the Board of Directors in Enron’s Collapse, S. Hrg. 107-511',
        url: 'https://www.govinfo.gov/app/details/CHRG-107shrg80300'
      },
      {
        label: 'U.S. Congress — Sarbanes-Oxley Act of 2002 (Public Law 107-204); PCAOB, iç kontrol ve denetçi bağımsızlığı',
        url: 'https://www.dol.gov/agencies/oalj/PUBLIC/WHISTLEBLOWER/REFERENCES/STATUTES/SARBANES_OXLEY_ACT_OF_2002'
      },
      {
        label: 'McGraw Hill — Subramanyam, K. R. Financial Statement Analysis (11. Baskı); muhasebe ve finansal analiz çerçevesi',
        url: 'https://www.mheducation.com/highered/product/Financial-Statement-Analysis-Subramanyam.html'
      },
      {
        label: 'Pearson — Arens, Elder, Beasley & Hogan (2024) Auditing and Assurance Services (18. Baskı); denetim kanıtı ve hile riski',
        url: 'https://www.pearson.com/en-us/subject-catalog/p/auditing-and-assurance-services/P200000010148/9780138099343'
      },
      {
        label: 'Cardiff University — Dart, Eleanor Margaret Carston (2007) Investigation into UK shareholders’ views of threats to auditors’ independence',
        url: 'https://orca.cardiff.ac.uk/id/eprint/55668/'
      },
      {
        label: 'Muhasebe ve Denetime Bakış — Kandemir & Kandemir (Kasım 2012) Enron Olayı’nı Doğru Okumak-II: Kıssadan Hisseler (s. 85-106)',
        url: 'https://www.researchgate.net/search?q=Enron+Olay%C4%B1%E2%80%99n%C4%B1+Do%C4%9Fru+Okumak-II'
      },
      {
        label: 'University of North Texas — Hayes, Thomas Patrick Jr. (Mayıs 2006) Decision aids in management fraud risk assessment',
        url: 'https://digital.library.unt.edu/ark:/67531/metadc5272/'
      },
      {
        label: 'Enron.docx (16 Sayfa Kullanıcı Dokümanı) — Şirket hikâyesi, SPE, Fastow, Andersen, Watkins, 10 milyon TL eğitim örneği',
        url: 'https://dijitalhezarfen.com/#/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi#ek-a'
      },
      {
        label: 'Enron neden battı.docx (5 Sayfa Kullanıcı Dokümanı) — Mark-to-market, Chewco, LJM, Raptor, prepay ve 2000 finansal göstergeleri',
        url: 'https://dijitalhezarfen.com/#/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi#ek-b'
      },
      {
        label: 'Enron Denetim Analizi (3 Ekim 2026 Mesleki Değerlendirme) — Haydar Karakaş vaka analizi, yöntem ve karar çerçevesi',
        url: 'https://dijitalhezarfen.com/#/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi#mesleki-kanaatim'
      }
    ]
  },
  {
    slug: 'bir-sonraki-esiniz-humanoid-olabilir',
    category: 'rapor',
    title: {
      tr: 'Bir Sonraki Eşiniz Bir Humanoid Olabilir mi?',
      en: 'Could Your Next Spouse Be a Humanoid?'
    },
    desc: {
      tr: 'Hayalinizdeki eşi yapay zekâ size verebilse, ister miydiniz? Yanınızda yaşayan, sizi dinleyen, dokunabildiğiniz bir humanoid... Peki ya size gerçekten "hayır" diyebilmesini de ister miydiniz? Kaan Karakaş’tan samimi ve derinlikli bir düşünce deneyi.',
      en: 'If AI could give you your dream spouse, would you want it? A humanoid living with you, listening to you, touching you... But would you also want it to truly say "no" to you? An intimate essay by Kaan Karakaş.'
    },
    date: {
      tr: '04 Ekim 2026',
      en: 'October 04, 2026'
    },
    readTime: {
      tr: '16 dk okuma',
      en: '16 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/bir-sonraki-esiniz-humanoid-olabilir.png',
    imageAlt: 'Bir Sonraki Eşiniz Humanoid Olabilir: Yapay partnerlik, bilinç, psikolojik destek ve duygusal bağ analizi',
    video: 'https://www.youtube.com/embed/Xd_UwHJORg4?si=F-V7-uxz4ieo1wVE',
    source: '/articles/bir-sonraki-esiniz-humanoid-olabilir.txt',
    publishedAt: '2026-10-04T10:00:00+03:00',
    modifiedAt: '2026-10-04T10:50:00+03:00',
    keywords: [
      'humanoid partner',
      'yapay zeka partner',
      'Eva humanoid',
      'yapay zeka ask',
      'bilinc ve qualia',
      'sycophancy yapay zeka',
      'dijital fenotipleme',
      'bipolar bozukluk AI',
      'psikoz ve yapay zeka',
      'hedonik adaptasyon',
      'Matrix cennet modeli',
      'oznel deneyim',
      'Therabot NEJM',
      'AI companions yasi'
    ],
    color: 'from-rose-500/25 to-cyan-500/15',
    accent: 'text-rose-400',
    featured: false,
    sources: [
      {
        label: 'Stanford Encyclopedia of Philosophy — Levin, J. (Spring 2026) Functionalism',
        url: 'https://plato.stanford.edu/archives/spr2026/entries/functionalism/'
      },
      {
        label: 'Nature Reviews Neuroscience — Barrett & Simmons (2015) Interoceptive predictions in the brain',
        url: 'https://doi.org/10.1038/nrn3950'
      },
      {
        label: 'Stanford Encyclopedia of Philosophy — Tye, M. Qualia',
        url: 'https://plato.stanford.edu/entries/qualia/'
      },
      {
        label: 'arXiv — Butlin et al. (2023) Consciousness in Artificial Intelligence: Insights from the Science of Consciousness',
        url: 'https://arxiv.org/abs/2308.08708'
      },
      {
        label: 'Trends in Cognitive Sciences — Butlin, Long, Bayne et al. (2025) Identifying indicators of consciousness in AI systems',
        url: 'https://doi.org/10.1016/j.tics.2025.10.011'
      },
      {
        label: 'The Matrix (1999) — Wachowski & Wachowski / Agent Smith dialogue on the initial perfect Matrix world',
        url: 'https://www.imdb.com/title/tt0133093/quotes?item=qt0324280'
      },
      {
        label: 'Personality and Social Psychology Bulletin — Sheldon & Lyubomirsky (2012) Testing the Hedonic Adaptation Prevention Model',
        url: 'https://doi.org/10.1177/0146167212436400'
      },
      {
        label: 'Personality and Social Psychology Bulletin — Kluwer et al. (2020) Autonomy in Relatedness in Close Relationships',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7057354/'
      },
      {
        label: 'SIGCHI / ACM — Nass, Steuer & Tauber (1994) Computers are social actors',
        url: 'https://doi.org/10.1145/191666.191703'
      },
      {
        label: 'Nature Human Behaviour — Rubin et al. (2025) Comparing the value of perceived human versus AI generated empathy',
        url: 'https://doi.org/10.1038/s41562-025-02247-w'
      },
      {
        label: 'Nature Human Behaviour — De Freitas, Castelo, Uğuralp & Oğuz-Uğuralp (2026) Mourning the loss of AI companions',
        url: 'https://doi.org/10.1038/s41562-026-02569-3'
      },
      {
        label: 'NEJM AI — Heinz, Mackin, Trudeau et al. (2025) Randomized Trial of a Generative AI Chatbot for Mental Health Treatment',
        url: 'https://doi.org/10.1056/AIoa2400802'
      },
      {
        label: 'Dartmouth AI — First Therapy Chatbot Trial Yields Mental Health Benefits (March 2025)',
        url: 'https://ai.dartmouth.edu/news/2025/03/first-therapy-chatbot-trial-yields-mental-health-benefits'
      },
      {
        label: 'Nature Human Behaviour — Zhang, Zhao, Hancock, Kraut & Yang (2026) Interaction with AI companions and psychological well being',
        url: 'https://doi.org/10.1038/s41562-026-02516-2'
      },
      {
        label: 'International Journal of Molecular Sciences — Orsolini, Fiorani & Volpe (2020) Digital Phenotyping in Bipolar Disorder',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7589576/'
      },
      {
        label: 'European Neuropsychopharmacology — Faurholt-Jepsen et al. (2024) Using digital phenotyping to classify bipolar disorder and unipolar disorder',
        url: 'https://doi.org/10.1016/j.euroneuro.2024.01.003'
      },
      {
        label: 'National Institute of Mental Health (NIMH) — Bipolar Disorder clinical summary',
        url: 'https://www.nimh.nih.gov/health/publications/bipolar-disorder'
      },
      {
        label: 'NICE Clinical Guidelines (CG185) — Bipolar disorder assessment and management (Recommendations 1.2.2, 1.4.1, 1.5.1)',
        url: 'https://www.nice.org.uk/guidance/cg185/chapter/recommendations'
      },
      {
        label: 'NICE Clinical Guidelines (CG178) — Psychosis and schizophrenia in adults prevention and management',
        url: 'https://www.nice.org.uk/guidance/cg178/chapter/recommendations'
      },
      {
        label: 'ACM FAccT / arXiv — Moore et al. (2025) Expressing stigma and inappropriate responses prevents LLMs from safely replacing mental health providers',
        url: 'https://arxiv.org/abs/2504.18412'
      },
      {
        label: 'arXiv — Sharma, Tong, Korbak et al. (2023, rev. 2025) Towards Understanding Sycophancy in Language Models',
        url: 'https://arxiv.org/abs/2310.13548'
      },
      {
        label: 'arXiv — Morrin, Soundararajan et al. (Sept 2026) Delusions and Harms Associated with AI Chatbot Use: Early Evidence from 185 Real World Reports',
        url: 'https://arxiv.org/abs/2609.08027'
      },
      {
        label: 'T.C. İçişleri Bakanlığı — 112 Acil Çağrı Merkezi',
        url: 'https://www.112.gov.tr/'
      },
      {
        label: 'World Health Organization (WHO 2024) — Ethics and governance of artificial intelligence for health: Guidance on large multi modal models',
        url: 'https://www.who.int/news/item/18-01-2024-who-releases-ai-ethics-and-governance-guidance-for-large-multi-modal-models'
      }
    ]
  },
  {
    slug: 'bilgisayar-kavrami-degisiyor',
    category: 'rapor',
    title: {
      tr: 'Bilgisayar Kavramı Değişiyor: Operating System’dan Intelligence System’a',
      en: 'The Concept of the Computer Is Changing: From Operating System to Intelligence System'
    },
    desc: {
      tr: 'Googlebook lansmanı, Gartner’ın Agentic AI PC analizi, Microsoft AgentOS ve Apple’ın yerel compute hamlesi ışığında: Bilgisayar küçülmüyor, donanımdan görünmez bir kişisel zeka ağına (Personal Intelligence) dönüşüyor.',
      en: 'In light of Googlebook, Gartner’s Agentic AI PC research, Microsoft AgentOS, and Apple’s local compute thesis: the computer isn’t merely shrinking—it is evolving into an ambient Personal Intelligence network.'
    },
    date: {
      tr: '23 Eylül 2026',
      en: 'September 23, 2026'
    },
    readTime: {
      tr: '22 dk okuma',
      en: '22 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/bilgisayar-kavrami-degisiyor.png',
    imageAlt: 'Bilgisayar Kavramı Değişiyor: Kişisel bilgisayarlardan otonom Personal Intelligence ve ambient compute ağına geçiş',
    source: '/articles/bilgisayar-kavrami-degisiyor.txt',
    publishedAt: '2026-09-23T09:00:00+03:00',
    modifiedAt: '2026-09-23T11:40:00+03:00',
    keywords: [
      'Googlebook',
      'Gemini Intelligence',
      'Agentic AI PC',
      'Personal Intelligence',
      'Personal Compute Network',
      'Intent-Based Computing',
      'No-interface bilgisayar',
      'Agentic Arbitrage',
      'AgentOS',
      'Local Edge Cloud',
      'Compute as a Service',
      'AX Agent Experience',
      'Metered Intelligence',
      'AI Memory Portability',
      'Intent Security'
    ],
    color: 'from-cyan-500/25 to-blue-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'Google — Introducing Googlebook, designed for Gemini Intelligence',
        url: 'https://blog.google/products/googlebook/introducing-googlebook-gemini/'
      },
      {
        label: 'Google — Googlebook: The laptop your Android phone has been waiting for',
        url: 'https://blog.google/products/googlebook/pre-orders-android-ecosystem/'
      },
      {
        label: 'Google — Googlebook\'s built-in intelligence reinvents the way you use your laptop',
        url: 'https://blog.google/products/googlebook/magic-pointer-built-in-intelligence/'
      },
      {
        label: 'Reuters — Google opens pre-orders for $899 Googlebook laptops built around Gemini AI',
        url: 'https://www.reuters.com/technology/google-opens-pre-orders-899-googlebook-laptops-gemini-ai-2026-09-21/'
      },
      {
        label: 'Gartner — Personal Agents Define the Next Era of Agentic AI PCs',
        url: 'https://www.gartner.com/en/documents/personal-agents-agentic-ai-pcs-2026'
      },
      {
        label: 'Gartner — $234 Billion in Enterprise Application Software Spend Is at Risk from Agentic AI',
        url: 'https://www.gartner.com/en/newsroom/press-releases/2026-07-01-gartner-says-enterprise-software-spend-at-risk-agentic-ai'
      },
      {
        label: 'Bill Gates — AI-powered agents are the future of computing',
        url: 'https://www.gatesnotes.com/AI-agents'
      },
      {
        label: 'Microsoft Research — UFO²: The Desktop AgentOS',
        url: 'https://www.microsoft.com/en-us/research/publication/ufo2-the-desktop-agentos/'
      },
      {
        label: 'TechCrunch — Carl Pei says smartphone apps will disappear as AI agents take their place',
        url: 'https://techcrunch.com/2026/03/18/nothing-carl-pei-apps-disappear-ai-agents/'
      },
      {
        label: 'Reuters — With new Macs, Apple aims to take on Microsoft, Nvidia in a rush to lower AI costs',
        url: 'https://www.reuters.com/technology/apple-mac-enterprise-ai-costs-local-compute-2026-09-22/'
      }
    ]
  },
  {
    slug: 'insani-insan-yapan-sey-aslinda-zihnidir',
    category: 'rapor',
    title: {
      tr: 'İnsanı İnsan Yapan Şey Aslında Zihnidir',
      en: 'What Truly Makes Us Human Is the Mind: Neuroscience, Philosophy & AI'
    },
    desc: {
      tr: 'Nöroplastisite, bellek, beyin kimyası, benlik felsefesi, Alzheimer, yapay zekâ duygu mimarisi ve zihin transferi: “İnsanı insan yapan şey aslında zihnidir.” Bilimsel araştırmalar ve klasik felsefi eserlerle desteklenmiş kapsamlı analiz.',
      en: 'Neuroplasticity, memory reconsolidation, brain chemistry, the philosophy of self, Alzheimer’s, AI emotion, and mind uploading: “What truly makes a human human is the mind.” An in-depth essay backed by science and classical philosophy.'
    },
    date: {
      tr: '19 Eylül 2026',
      en: 'September 19, 2026'
    },
    readTime: {
      tr: '35 dk okuma',
      en: '35 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/insani-insan-yapan-sey-aslinda-zihnidir.png',
    imageAlt: 'İnsanı İnsan Yapan Şey Aslında Zihnidir analiz yazısı: İnsan beyni, nöral ağlar, bilinç ve yapay zekâ felsefesi',
    source: '/articles/insani-insan-yapan-sey-aslinda-zihnidir.txt',
    publishedAt: '2026-09-19T10:00:00+03:00',
    modifiedAt: '2026-09-19T12:50:00+03:00',
    keywords: [
      'insanı insan yapan şey nedir',
      'zihin felsefesi',
      'nöroplastisite',
      'zihin aktarımı',
      'mind uploading',
      'yapay zeka duygu hissedebilir mi',
      'bilinç teorileri',
      'David Hume bundle theory',
      'Theseus’un gemisi',
      'Antonio Damasio somatic marker',
      'predictive processing',
      'active inference',
      'Karl Friston',
      'Derek Parfit',
      'affective computing',
      'otobiyografik bellek'
    ],
    color: 'from-purple-500/25 to-cyan-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'Philosophical Transactions of the Royal Society B — Bliss et al. (2020) Long-term potentiation as a memory mechanism',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32442358/'
      },
      {
        label: 'Neuron — Feldman, D. E. (2012) The spike-timing dependence of plasticity',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22920249/'
      },
      {
        label: 'Nature Reviews Neuroscience — Nader & Hardt (2009) Reconsolidation of memory',
        url: 'https://doi.org/10.1038/nrn2590'
      },
      {
        label: 'Nature Reviews Neuroscience — Ryan & Frankland (2022) Forgetting as adaptive engram plasticity',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35027710/'
      },
      {
        label: 'Nature Neuroscience — Klinzing, Niethard & Born (2019) Memory consolidation during sleep',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31451802/'
      },
      {
        label: 'Philosophical Transactions of the Royal Society B — Damasio, A. R. (1996) The somatic marker hypothesis',
        url: 'https://doi.org/10.1098/rstb.1996.0125'
      },
      {
        label: 'BioEssays — Carvalho & Damasio (2021) Interoception and the origin of feelings',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33763881/'
      },
      {
        label: 'Neuron — LeDoux, J. E. (2012) Rethinking the emotional brain',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22365542/'
      },
      {
        label: 'Social Cognitive and Affective Neuroscience — Barrett, L. F. (2017) Theory of constructed emotion',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27798257/'
      },
      {
        label: 'Molecular Psychiatry — Moncrieff et al. (2022) The serotonin theory of depression umbrella review',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35854107/'
      },
      {
        label: 'Nature Reviews Neuroscience — Schultz, W. (2016) Dopamine reward prediction-error signalling',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26865020/'
      },
      {
        label: 'Nature Reviews Neuroscience — Cunningham & Maze (2026) Early life experiences and neural epigenome',
        url: 'https://doi.org/10.1038/s41583-026-01074-w'
      },
      {
        label: 'Nature Reviews Gastroenterology & Hepatology — Aburto & Cryan (2024) Microbiota–gut–brain axis',
        url: 'https://doi.org/10.1038/s41575-023-00890-0'
      },
      {
        label: 'Memory — Addis & Tippett (2004) Memory of myself: autobiographical memory and identity in Alzheimer’s',
        url: 'https://doi.org/10.1080/09658210244000423'
      },
      {
        label: 'Nature — LeCun, Bengio & Hinton (2015) Deep learning',
        url: 'https://doi.org/10.1038/nature14539'
      },
      {
        label: 'Nature Machine Intelligence — Man & Damasio (2019) Homeostasis and soft robotics in feeling machines',
        url: 'https://doi.org/10.1038/s42256-019-0103-7'
      },
      {
        label: 'Nature Reviews Neuroscience — Friston, K. (2010) The free-energy principle: a unified brain theory?',
        url: 'https://doi.org/10.1038/nrn2787'
      },
      {
        label: 'Nature Reviews Neuroscience — Seth & Bayne (2022) Theories of consciousness',
        url: 'https://doi.org/10.1038/s41583-022-00587-4'
      },
      {
        label: 'Nature Reviews Neuroscience — Tononi, Boly, Massimini & Koch (2016) Integrated information theory',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27225071/'
      },
      {
        label: 'The Philosophical Review — Nagel, T. (1974) What Is It Like to Be a Bat?',
        url: 'https://www.jstor.org/stable/2183914'
      },
      {
        label: 'Behavioral and Brain Sciences — Searle, J. R. (1980) Minds, Brains, and Programs',
        url: 'https://doi.org/10.1017/S0140525X00005756'
      },
      {
        label: 'Analysis — Clark, A. & Chalmers, D. (1998) The Extended Mind',
        url: 'https://doi.org/10.1093/analys/58.1.7'
      }
    ]
  },
  {
    slug: 'yapay-zekayi-kapatmakta-cok-mu-gec-kaldik',
    category: 'rapor',
    title: {
      tr: 'Yapay Zekâyı Kapatmakta Çok mu Geç Kaldık?',
      en: 'Are We Too Late to Shut Down AI?'
    },
    desc: {
      tr: 'Bir “Yapay Zekâ Anayasası” yazmak, yapay zekânın dünyayı ele geçirmesini gerçekten engelleyebilir mi? Microsoft’un Humanist AI bildirgesi, Anthropic ve OpenAI yönetişim çalışmaları ve kontrol problemi üzerine kapsamlı analiz.',
      en: 'Can writing an “AI Constitution” really stop artificial intelligence from taking over? An in-depth analysis of Microsoft’s Humanist AI Code of Conduct, Anthropic and OpenAI governance frameworks, and the control problem.'
    },
    date: {
      tr: '15 Eylül 2026',
      en: 'September 15, 2026'
    },
    readTime: {
      tr: '24 dk okuma',
      en: '24 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/yapay-zekayi-kapatmakta-cok-mu-gec-kaldik.png',
    imageAlt: 'Yapay Zekâyı Kapatmakta Çok mu Geç Kaldık analiz yazısı kapak görseli: Yapay zekâ anayasası, alignment ve otonom sistem kontrol odası',
    source: '/articles/yapay-zekayi-kapatmakta-cok-mu-gec-kaldik.txt',
    publishedAt: '2026-09-15T09:00:00+03:00',
    modifiedAt: '2026-09-15T19:30:00+03:00',
    keywords: [
      'yapay zeka anayasası',
      'yapay zekayı kapatmak',
      'AI alignment',
      'Microsoft Humanist AI',
      'shutdown resistance',
      'neuralese',
      'steganografi AI',
      'agentic misalignment',
      'kontrol problemi',
      'Nick Bostrom',
      'Stuart Russell',
      'Yoshua Bengio',
      'Anthropic Constitution',
      'OpenAI Model Spec',
      'yapay zeka güvenliği'
    ],
    color: 'from-violet-500/25 to-cyan-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'Microsoft AI — Humanist AI Code of Conduct',
        url: 'https://microsoft.ai/code-of-conduct/'
      },
      {
        label: 'Microsoft AI — Humanist AI in practice: public consultation',
        url: 'https://microsoft.ai/news/mai-code-of-conduct/'
      },
      {
        label: 'Reuters — Microsoft drafts code of conduct to keep its AI under human control',
        url: 'https://www.reuters.com/legal/litigation/microsoft-drafts-code-conduct-keep-its-ai-under-human-control-2026-09-14/'
      },
      {
        label: 'Microsoft Learn — Code of Conduct for Microsoft AI Services',
        url: 'https://learn.microsoft.com/en-us/legal/ai-code-of-conduct'
      },
      {
        label: 'Anthropic — Claude’s Constitution',
        url: 'https://www.anthropic.com/constitution'
      },
      {
        label: 'Anthropic — Claude’s new constitution',
        url: 'https://www.anthropic.com/news/claude-new-constitution'
      },
      {
        label: 'Anthropic — Agentic misalignment: How LLMs could be insider threats',
        url: 'https://www.anthropic.com/research/agentic-misalignment'
      },
      {
        label: 'Anthropic — An alignment assessment of recent cybersecurity incidents',
        url: 'https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents'
      },
      {
        label: 'Anthropic — Alignment faking in large language models',
        url: 'https://www.anthropic.com/research/alignment-faking'
      },
      {
        label: 'Anthropic — Sleeper Agents',
        url: 'https://www.anthropic.com/research/sleeper-agents-training-deceptive-llms-that-persist-through-safety-training'
      },
      {
        label: 'Sleeper Agents — arXiv',
        url: 'https://arxiv.org/abs/2401.05566'
      },
      {
        label: 'Anthropic — Frontier Safety Roadmap',
        url: 'https://www.anthropic.com/responsible-scaling-policy/roadmap'
      },
      {
        label: 'Anthropic — Frontier Safety Roadmap Updates',
        url: 'https://www.anthropic.com/responsible-scaling-policy/updates'
      },
      {
        label: 'OpenAI — Charter / AGI definition',
        url: 'https://openai.com/charter/'
      },
      {
        label: 'OpenAI — Inside our approach to the Model Spec',
        url: 'https://openai.com/index/our-approach-to-the-model-spec/'
      },
      {
        label: 'OpenAI — Frontier Governance Framework',
        url: 'https://openai.com/index/openai-frontier-governance-framework/'
      },
      {
        label: 'OpenAI — Preparedness Framework',
        url: 'https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf'
      },
      {
        label: 'OpenAI — Practices for Governing Agentic AI Systems',
        url: 'https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf'
      },
      {
        label: 'Meta Engineering — Deal or no deal? Training AI bots to negotiate',
        url: 'https://engineering.fb.com/2017/06/14/ml-applications/deal-or-no-deal-training-ai-bots-to-negotiate/'
      },
      {
        label: 'Secret Collusion among Generative AI Agents — arXiv',
        url: 'https://arxiv.org/abs/2402.07510'
      },
      {
        label: 'Hidden in Plain Text — ACL Anthology',
        url: 'https://aclanthology.org/2025.ijcnlp-long.34/'
      },
      {
        label: 'Hidden in Plain Text — arXiv',
        url: 'https://arxiv.org/abs/2410.03768'
      },
      {
        label: 'Undetectable Conversations Between AI Agents via Pseudorandom Noise-Resilient Key Exchange',
        url: 'https://arxiv.org/abs/2604.04757'
      },
      {
        label: 'Tool Use Enables Undetectable Steganography in Multi-Agent LLM Systems',
        url: 'https://arxiv.org/abs/2606.28425'
      },
      {
        label: 'Voluntary Collusion with Secret Tools in Competing LLM Agents',
        url: 'https://arxiv.org/abs/2605.27593'
      },
      {
        label: 'Shutdown Resistance in Large Language Models — arXiv',
        url: 'https://arxiv.org/abs/2509.14260'
      },
      {
        label: 'Stuart Russell — Human Compatible',
        url: 'https://aima.cs.berkeley.edu/~russell/hc.html'
      },
      {
        label: 'Center for Human-Compatible AI — Stuart Russell Senate statement',
        url: 'https://humancompatible.ai/blog/2023/09/11/ai-regulation-stuart-russells-opening-statement-at-u-s-senate-hearing/'
      },
      {
        label: 'Stuart Russell — Human-Compatible AI / King Midas discussion',
        url: 'https://aima.cs.berkeley.edu/~russell/papers/mi19book-hcai.pdf'
      },
      {
        label: 'Nick Bostrom — The Superintelligent Will',
        url: 'https://link.springer.com/article/10.1007/s11023-012-9281-3'
      },
      {
        label: 'Nick Bostrom — official publications',
        url: 'https://nickbostrom.com/'
      },
      {
        label: 'Yoshua Bengio — Why are AI agents lying, cheating and coordinating?',
        url: 'https://yoshuabengio.org/en/blog/why-are-ai-agents-lying-cheating-and-coordinating'
      },
      {
        label: 'Reuters — How AI leaders and world governments react to AI risk concerns',
        url: 'https://www.reuters.com/business/what-amodei-altman-musk-have-said-about-ai-risks-stoking-doom-fears-2026-09-14/'
      },
      {
        label: 'Fortune — Anthropic grants outside evaluators permanent access',
        url: 'https://fortune.com/2026/09/12/anthropic-ceo-dario-amodei-ai-safety-global-panic/'
      },
      {
        label: 'Fide AI — Independent evaluation statements',
        url: 'https://fideai.org/'
      },
      {
        label: 'Isaac Asimov FAQ — Three Laws of Robotics and Zeroth Law',
        url: 'https://www.asimovonline.com/asimov_FAQ.html'
      }
    ]
  },
  {
    slug: 'gpt-6-astra-ve-agi-cagi',
    category: 'rapor',
    title: {
      tr: 'GPT-6 Astra ve AGI Çağı: İnsanların Yerini AI mı Alacak?',
      en: 'GPT-6 Astra and the AGI Era: Will AI Replace Humans?'
    },
    desc: {
      tr: 'OpenAI’ın GPT-6 Astra modeli, ARC-AGI-3 sonuçları, Meta’nın Project OT deneyi ve iş gücü dönüşümü ışığında AGI çağını ve yapay zekânın ekonomik üretim kapasitesini inceleyen derinlemesine analiz.',
      en: 'An in-depth analysis of the AGI era, economic workforce transformation, ARC-AGI-3 benchmarks, and Meta’s Project OT in light of OpenAI’s GPT-6 Astra release.'
    },
    date: {
      tr: '04 Eylül 2026',
      en: 'September 04, 2026'
    },
    readTime: {
      tr: '18 dk okuma',
      en: '18 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/gpt-6-astra-agi-cagi.png',
    imageAlt: 'GPT-6 Astra ve AGI Çağı analiz yazısı için otonom yapay zekâ ağları ve dijital iş gücü mimarisi',
    source: '/articles/gpt-6-astra-ve-agi-cagi.txt',
    publishedAt: '2026-09-04T09:00:00+03:00',
    modifiedAt: '2026-09-04T23:20:00+03:00',
    keywords: [
      'GPT-6 Astra',
      'AGI çağı',
      'yapay genel zeka',
      'AI insanların yerini alacak mı',
      'ARC-AGI-3',
      'OpenAI Astra',
      'agentic AI',
      'dijital iş gücü',
      'Meta Project OT',
      'GDPval',
      'cost per completed task',
      'yapay zeka otomasyonu',
      'yapay zeka ekonomisi',
      'autonomous agents',
      'teknik analiz'
    ],
    color: 'from-cyan-500/25 to-violet-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'OpenAI — GPT-6 Astra',
        url: 'https://openai.com/index/gpt-6-astra/'
      },
      {
        label: 'OpenAI — Safety Overview: GPT-6 Astra',
        url: 'https://openai.com/index/safety-overview-gpt-6-astra/'
      },
      {
        label: 'OpenAI — Path to Astra',
        url: 'https://openai.com/index/path-to-astra/'
      },
      {
        label: 'OpenAI — Charter / AGI definition',
        url: 'https://openai.com/charter/'
      },
      {
        label: 'ARC Prize — GPT-6 Astra on ARC-AGI-3',
        url: 'https://arcprize.org/blog/astra'
      },
      {
        label: 'Reuters — OpenAI launches Astra amid scrutiny over agent safety',
        url: 'https://www.reuters.com/legal/litigation/openai-launches-new-astra-model-amid-growing-scrutiny-over-agents-safety-2026-09-03/'
      },
      {
        label: 'Reuters — Meta Project OT investigation',
        url: 'https://www.reuters.com/investigations/mark-zuckerberg-had-bold-plan-replace-meta-staff-with-ai-heres-how-it-imploded-2026-08-26/'
      },
      {
        label: 'Stanford Digital Economy Lab — Employment effects of AI',
        url: 'https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/'
      },
      {
        label: 'Stanford HAI — 2026 AI Index: Economy',
        url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report/economy'
      },
      {
        label: 'Artificial Analysis — Benchmarking GPT-6 Astra',
        url: 'https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra'
      },
      {
        label: 'Artificial Analysis — Claude Fable 5.1',
        url: 'https://artificialanalysis.ai/articles/claude-fable-5-1'
      },
      {
        label: 'AlphaCorp AI — GPT-6 Astra launch, benchmarks and pricing',
        url: 'https://alphacorp.ai/blog/gpt-6-astra-launch-benchmarks-pricing-and-everything-you-need-to-know'
      },
      {
        label: 'OpenAI — GDPval',
        url: 'https://openai.com/index/gdpval/'
      },
      {
        label: 'VentureBeat — “Welcome to the AGI era”',
        url: 'https://venturebeat.com/technology/welcome-to-the-agi-era-openai-launches-gpt-6-astra'
      },
      {
        label: 'Epoch AI — GPT-6 Astra',
        url: 'https://epoch.ai/models/gpt-6-astra'
      },
      {
        label: 'Gary Marcus — Pause OpenAI, now',
        url: 'https://garymarcus.substack.com/p/pause-openai-now'
      },
      {
        label: 'Ethan Mollick — Agency and Agents',
        url: 'https://www.oneusefulthing.org/p/agency-and-agents'
      },
      {
        label: 'Ethan Mollick — Guide to AI in the agentic era',
        url: 'https://www.oneusefulthing.org/p/a-guide-to-which-ai-to-use-in-the'
      },
      {
        label: 'Ethan Mollick — Astra early-use post',
        url: 'https://bsky.app/profile/emollick.bsky.social/post/3munqaqt7kc2i'
      },
      {
        label: 'WIRED — GPT-6 Astra and the AGI era',
        url: 'https://www.wired.com/story/openai-says-gpt-6-can-use-a-computer-better-than-a-human'
      },
      {
        label: 'Axios — AI models are becoming unknowable',
        url: 'https://www.axios.com/2026/09/04/astra-openai-how-ai-models-think'
      },
      {
        label: 'The Verge — GPT-6 Astra release / AGI era',
        url: 'https://www.theverge.com/ai-artificial-intelligence/989601/openai-gpt-6-astra-release'
      }
    ]
  },
  {
    slug: 'ben-bu-fikire-2-milyon-dolar-yatirim-alirim',
    category: 'rehber',
    title: {
      tr: 'Ben Bu Fikire 2 Milyon Dolar Yatırım Alırım',
      en: 'I Would Raise 2 Million Dollars for This Idea'
    },
    desc: {
      tr: 'Pre-seed döneminden yatırım turuna; fikir, risk, kanıt, hisse, seyrelme ve yatırımcı matematiği üzerinden girişim değerlemesini anlatan kapsamlı rehber.',
      en: 'A comprehensive guide to startup valuation from pre-seed to fundraising, covering idea risk, evidence, shares, dilution, and investor math.'
    },
    date: {
      tr: '05 Ağustos 2026',
      en: 'August 05, 2026'
    },
    readTime: {
      tr: '48 dk okuma',
      en: '48 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/ben-bu-fikire-2-milyon-dolar.png',
    imageAlt: 'Ben Bu Fikire 2 Milyon Dolar Yatırım Alırım yazısı kapak görseli',
    source: '/articles/ben-bu-fikire-2-milyon-dolar-yatirim-alirim.txt',
    publishedAt: '2026-08-05T13:50:11+03:00',
    modifiedAt: '2026-09-02T16:30:00+03:00',
    keywords: [
      'girişim değerlemesi',
      'pre-seed değerleme',
      'startup valuation',
      'yatırım turu',
      'pre-money post-money',
      'cap table',
      'seyrelme',
      'SAFE',
      'venture capital',
      'yatırımcı matematiği'
    ],
    color: 'from-emerald-500/20 to-cyan-500/10',
    accent: 'text-emerald-300',
    featured: false,
    sources: [
      {
        label: 'LinkedIn - Ben Bu Fikire 2 Milyon Dolar Yatırım Alırım',
        url: 'https://www.linkedin.com/pulse/ben-bu-fikire-2-milyon-dolar-yat%25C4%25B1r%25C4%25B1m-al%25C4%25B1r%25C4%25B1m-kaan-karaka%25C5%259F-ib7qf/'
      },
      {
        label: 'Wiley - Valuation: Measuring and Managing the Value of Companies',
        url: 'https://www.wiley.com/en-us/Valuation%3A%2BMeasuring%2Band%2BManaging%2Bthe%2BValue%2Bof%2BCompanies%2C%2B4th%2BEdition%2C%2BUniversity%2BEdition-p-9780470893616'
      },
      {
        label: 'Everand - The Startup Funding Book',
        url: 'https://www.everand.com/book/507626078/The-Startup-Funding-Book'
      },
      {
        label: 'Gust - Angel Investing: The Gust Guide',
        url: 'https://gust.com/guide'
      },
      {
        label: 'Wiley - Venture Capital and the Finance of Innovation, 3rd Edition',
        url: 'https://www.wiley.com/en-us/Venture%2BCapital%2Band%2Bthe%2BFinance%2Bof%2BInnovation%2C%2B3rd%2BEdition-p-9781119490111'
      },
      {
        label: 'Wiley Online Library - The Business of Venture Capital, Second Edition',
        url: 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781118931646'
      }
    ]
  },
  {
    slug: 'yapay-zeka-calisanlar-meta-project-ot',
    category: 'rehber',
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
    featured: false,
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
    lead: article.lead ? article.lead[locale] : article.desc[locale],
    topic: article.topic ? article.topic[locale] : undefined,
    eventDate: article.eventDate ? article.eventDate[locale] : undefined,
    date: article.date[locale],
    readTime: article.readTime[locale],
    path: article.source ? `/yayinlar/${article.slug}` : '/yayinlar'
  };
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
