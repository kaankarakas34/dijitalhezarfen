import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

const editorialBatch29Oct = [
  {
    slug: 'google-ai-mode-reklamlari-arama-ekonomisi',
    category: 'haber',
    topic: { tr: 'Dijital Pazarlama', en: 'Digital Marketing' },
    title: {
      tr: 'Google AI Mode reklamları: Arama motoru artık konuşmanın içinde satış yapıyor',
      en: 'Google AI Mode Ads: The Search Engine Now Sells Inside the Conversation'
    },
    seoTitle: 'Google AI Mode reklamları: Arama motoru artık konuşmanın içinde satış yapıyor | Dijital Hezarfen',
    lead: {
      tr: 'Google, AI Mode reklamlarını yeni ülkelere açarak arama ekonomisinin geleceğini konuşma tabanlı deneyimlerde arıyor.',
      en: 'Google expands AI Mode ads into new markets, seeking the future of the search economy in conversational experiences.'
    },
    desc: {
      tr: 'Google, AI Mode reklamlarını yeni ülkelere açarak arama ekonomisinin geleceğini konuşma tabanlı deneyimlerde arıyor. Arama artık birkaç kelimelik sorgudan ibaret değil.',
      en: 'Google expands AI Mode ads into new countries, reshaping the search economy around multi-turn conversational intent and sponsored discovery.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-01.webp',
    imageAlt: 'Konuşma tabanlı aramada reklam ve kullanıcı niyetinin birleşmesini simgeleyen görsel.',
    source: '/articles/google-ai-mode-reklamlari-arama-ekonomisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Google AI Mode reklamlari',
      'arama ekonomisi',
      'GEO',
      'SEO',
      'dijital pazarlama',
      'konusma tabanli arama'
    ],
    color: 'from-blue-600/25 to-amber-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ['target-ask-target-ai-alisveris', 'walmart-connect-ajanslar-reklam-olcumleme'],
    sources: [
      {
        label: 'Google Blog — Ads in AI Mode expand to new markets (Kaynak / Doğrulama Bağlantısı)',
        url: 'https://blog.google/intl/en-africa/products/ads-in-ai-mode-expand-to-new-markets/'
      }
    ],
    bodyText: `### Haberin arka planı

Google 28 Ekim’de AI Mode içindeki reklamları Avustralya, Kanada, Hindistan ve başka pazarlara genişlettiğini açıkladı. ABD’de çok aşamalı konuşmalarda reklam gösterimini de test ediyor. Türkiye ilk açıklanan ülkeler arasında bulunmuyor. Alphabet’in aynı gün açıkladığı üçüncü çeyrek geliri 127,6 milyar dolara ulaştı; Google Search ve diğer arama gelirleri yıllık yüzde 12 büyüdü.

### Haber bize ne anlatıyor?

Arama artık birkaç kelimelik sorgudan ibaret değil. Kullanıcı bir ihtiyacını anlatıyor, [seçenekleri karşılaştırıyor ve yeni sorular soruyor](/yayinlar/target-ask-target-ai-alisveris). Reklamın da bu yolculuğun içine girmesi, arama motorunun geleneksel bağlantı listesi modelinden uzaklaşması demek. Ancak sponsorlu yerleşim ile bir yapay zekânın bağımsız kaynaklara dayanarak marka önermesi aynı şey değil.

### İş modeline etkisi

Pazarlamacı için mesele yalnızca yeni reklam alanı satın almak olmayacak. Ürün bilgilerinin tutarlılığı, teklifin açık biçimde anlatılması, bağımsız kaynaklarda doğrulanabilir marka bilgisi ve [dönüşüm ölçümü birlikte ele alınmalı](/yayinlar/walmart-connect-ajanslar-reklam-olcumleme). GEO’yu reklama indirgemek, SEO’yu da yalnızca trafik hesabına çevirmek aynı yanılgının iki farklı biçimi.

### Buradan sonrası

Önümüzdeki asıl test, AI Mode içindeki sponsorlu önerilerin kullanıcı deneyimini bozup bozmadığı olacak. Reklam gelirleri büyürken kullanıcı güveni azalırsa Google yeni bir gelir kanalı açmış ama aramanın en değerli varlığını zayıflatmış olabilir.

**Kaynak / doğrulama başlangıç noktası:** [https://blog.google/intl/en-africa/products/ads-in-ai-mode-expand-to-new-markets/](https://blog.google/intl/en-africa/products/ads-in-ai-mode-expand-to-new-markets/)`
  },
  {
    slug: 'microsoft-openai-10-milyar-dolar-gelir',
    category: 'haber',
    topic: { tr: 'Yapay Zekâ Ekonomisi', en: 'AI Economy' },
    title: {
      tr: 'Microsoft–OpenAI ilişkisi: Bir yatırım nasıl dev bir gelir kanalına dönüşür?',
      en: 'The Microsoft–OpenAI Relationship: How an Investment Turns into a Massive Revenue Channel'
    },
    seoTitle: 'Microsoft–OpenAI ilişkisi: Bir yatırım nasıl dev bir gelir kanalına dönüşür? | Dijital Hezarfen',
    lead: {
      tr: 'Microsoft’un OpenAI ile ticari ilişkilerinden elde ettiği gelir, yapay zekâ ortaklıklarının ne kadar karmaşık bir ekonomiye dönüştüğünü gösteriyor.',
      en: 'Revenue generated from Microsoft’s commercial arrangements with OpenAI illustrates how complex AI partnerships have become.'
    },
    desc: {
      tr: 'Microsoft’un OpenAI ile ticari ilişkilerinden elde ettiği gelir, yapay zekâ ortaklıklarının ne kadar karmaşık bir ekonomiye dönüştüğünü gösteriyor. Klasik yatırım ilişkisi yerini karşılıklı bağımlılığa bırakıyor.',
      en: 'Microsoft’s commercial revenue from OpenAI demonstrates how strategic AI investments blend cloud infrastructure consumption, partnership, and competition.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-02.webp',
    imageAlt: 'Bulut altyapısı ile yapay zekâ şirketi arasındaki stratejik ortaklık ve bağımlılık.',
    source: '/articles/microsoft-openai-10-milyar-dolar-gelir.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Microsoft OpenAI gelir',
      'yapay zeka ekonomisi',
      'bulut altyapisi',
      'stratejik ortaklik',
      'musteri yogunlasmasi'
    ],
    color: 'from-sky-600/25 to-amber-600/15',
    accent: 'text-sky-400',
    featured: false,
    relatedSlugs: ['meta-ai-yatirimlari-sermaye-verimliligi', 'nebius-ai-veri-merkezi-finansmani'],
    sources: [
      {
        label: 'Microsoft Source (28 Ekim 2026) — Microsoft announces first-quarter results (Kaynak / Doğrulama Bağlantısı)',
        url: 'https://news.microsoft.com/source/2026/10/28/microsoft-announces-first-quarter-results-2/'
      }
    ],
    bodyText: `### Haberin arka planı

Microsoft’un 28 Ekim tarihli finansal açıklamalarının ardından yayımlanan haberlere göre şirket, eylül sonunda biten üç aylık dönemde OpenAI ile ticari düzenlemelerinden yaklaşık 10 milyar dolar gelir kaydetti. Aynı dönemde Microsoft’un toplam geliri 92,3 milyar dolardı. Ticari gelir ile [yatırımın muhasebesel etkilerini](/yayinlar/meta-ai-yatirimlari-sermaye-verimliligi) birbirinden ayırmak gerekiyor.

### Haber bize ne anlatıyor?

Klasik bir yatırım ilişkisinde şirket sermaye koyar ve değer artışı bekler. Burada yatırım yapılan girişim aynı zamanda [altyapı müşterisi](/yayinlar/nebius-ai-veri-merkezi-finansmani), teknoloji ortağı ve bazı pazarlarda rakip. Bu yapı hızlı ölçeklenme sağlasa da karşılıklı bağımlılık yaratıyor. Büyümenin ne kadarının bağımsız son müşteri talebinden geldiğini anlamak önemli.

### İş modeline etkisi

Girişimler için güçlü platform ortaklığı dağıtımı hızlandırabilir; fakat gelir, veri ve işlem gücü tek bir ortağa bağlanıyorsa pazarlık gücü de değişir. İş modelini değerlendirirken ciro kadar müşteri yoğunlaşmasını ve sözleşme koşullarını sorgulamak gerekiyor.

### Buradan sonrası

Bu ilişkinin sağlığını anlamak için iki şeye bakmak gerekir: OpenAI’ın Microsoft dışındaki altyapı seçenekleri gerçekten çeşitleniyor mu ve Microsoft’un AI gelirleri birkaç büyük müşteriye mi dayanıyor? İki şirketin ortaklığı kadar ayrışma kapasitesi de önemli.

**Kaynak / doğrulama başlangıç noktası:** [https://news.microsoft.com/source/2026/10/28/microsoft-announces-first-quarter-results-2/](https://news.microsoft.com/source/2026/10/28/microsoft-announces-first-quarter-results-2/)`
  },
  {
    slug: 'sap-model-routing-ai-maliyet-optimizasyonu',
    category: 'haber',
    topic: { tr: 'Kurumsal Yazılım', en: 'Enterprise Software' },
    title: {
      tr: 'SAP neden en güçlü yapay zekâ modelini kullanmak istemiyor?',
      en: 'Why SAP Does Not Want to Use the Most Powerful AI Model for Everything'
    },
    seoTitle: 'SAP neden en güçlü yapay zekâ modelini kullanmak istemiyor? | Dijital Hezarfen',
    lead: {
      tr: 'Kurumsal yapay zekâda başarı, en büyük modeli her işte çalıştırmak değil; doğru işi doğru maliyetle tamamlamak olabilir.',
      en: 'Success in enterprise AI may not mean running the largest model on every task, but completing the right job at the right cost.'
    },
    desc: {
      tr: 'Kurumsal yapay zekâda başarı, en büyük modeli her işte çalıştırmak değil; doğru işi doğru maliyetle tamamlamak olabilir. Bir müşteri faturasının sınıflandırılması ile tedarik zinciri problemi aynı modeli gerektirmez.',
      en: 'SAP’s multi-model routing strategy highlights why enterprise software focuses on cost per completed task rather than raw model size.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-03.webp',
    imageAlt: 'Farklı yapay zekâ modelleri arasında maliyet ve performans optimizasyonu.',
    source: '/articles/sap-model-routing-ai-maliyet-optimizasyonu.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'SAP model routing',
      'AI maliyet optimizasyonu',
      'kurumsal yazilim',
      'birim ekonomi',
      'token maliyeti'
    ],
    color: 'from-teal-600/25 to-amber-500/15',
    accent: 'text-teal-400',
    featured: false,
    relatedSlugs: ['gpt-6-astra-ve-agi-cagi', 'yapay-zeka-calisanlar-meta-project-ot'],
    sources: [
      {
        label: 'Reuters — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)',
        url: 'https://www.reuters.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

SAP’nin 28 Ekim’de gündeme gelen model stratejisi, farklı görevlerde farklı yapay zekâ sağlayıcılarının kullanılmasına dayanıyor. Şirket çok sayıda modeli değerlendirebiliyor ve bazı iş akışlarında daha ekonomik seçeneklere yöneliyor. Bu, kurumsal yazılımın token maliyetinden çok [tamamlanan işin değerine](/yayinlar/gpt-6-astra-ve-agi-cagi) odaklandığı bir döneme işaret ediyor.

### Haber bize ne anlatıyor?

Bir müşteri faturanın sınıflandırılmasını, talep tahminini veya karmaşık bir tedarik zinciri sorununu aynı zekâ seviyesiyle çözmek zorunda değil. Bütün görevleri en pahalı modele yönlendirmek, ürünün maliyet yapısını bozabilir. Üstelik yüksek model puanı, her sektörel görevde daha iyi sonuç anlamına gelmiyor.

### İş modeline etkisi

Bir [AI ajanı geliştirirken](/yayinlar/yapay-zeka-calisanlar-meta-project-ot) görevleri zorluk, hata maliyeti ve veri hassasiyetine göre sınıflandırmak gerekiyor. Model yönlendirme, değerlendirme setleri ve başarısız görev başına maliyet ölçümü artık ürün stratejisinin parçası. Girişimcilikte teknoloji kadar birim ekonomi de önemlidir.

### Buradan sonrası

Bence kurumsal AI pazarında yeni ölçü birimi modelin zekâ puanı değil, başarıyla tamamlanan işin toplam maliyeti olacak. En ucuz modeli seçmek de çözüm değil; hatalı sonuçların insan denetimi maliyeti de hesabın içinde bulunmalı.

**Kaynak / doğrulama başlangıç noktası:** [https://www.reuters.com/](https://www.reuters.com/)`
  },
  {
    slug: 'nvidia-hugging-face-satin-alma-rekabet',
    category: 'haber',
    topic: { tr: 'Yapay Zekâ ve Platformlar', en: 'AI & Platforms' },
    title: {
      tr: 'Nvidia ve Hugging Face: Açık yapay zekânın kapısı kimin elinde?',
      en: 'Nvidia and Hugging Face: Who Holds the Gate to Open AI?'
    },
    seoTitle: 'Nvidia ve Hugging Face: Açık yapay zekânın kapısı kimin elinde? | Dijital Hezarfen',
    lead: {
      tr: 'Nvidia’nın Hugging Face’i satın alma anlaşması, açık modellerin dağıtımında güç yoğunlaşması tartışmasını yeniden açtı.',
      en: 'Nvidia’s deal to acquire Hugging Face reopens the debate over power concentration in the distribution of open AI models.'
    },
    desc: {
      tr: 'Nvidia’nın Hugging Face’i satın alma anlaşması, açık modellerin dağıtımında güç yoğunlaşması tartışmasını yeniden açtı. Hugging Face’in değeri yalnızca barındırdığı dosyalarda değil, ekosisteminde.',
      en: 'Regulatory scrutiny over Nvidia’s reported Hugging Face deal highlights concerns around platform neutrality and open model distribution.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-04.webp',
    imageAlt: 'Açık yapay zekâ modellerinin dağıtım altyapısında kontrol tartışması.',
    source: '/articles/nvidia-hugging-face-satin-alma-rekabet.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Nvidia Hugging Face',
      'acik kaynak yapay zeka',
      'rekabet incelemesi',
      'AI dagitim kanali',
      'platform bagimliligi'
    ],
    color: 'from-emerald-600/25 to-slate-600/15',
    accent: 'text-emerald-400',
    featured: false,
    relatedSlugs: ['nvidia-agile-robots-humanoid-platform', 'abd-cin-teknoloji-yatirim-kisitlamalari'],
    sources: [
      {
        label: 'Reuters (28 Ekim 2026) — US DOJ inquiry on Nvidia Hugging Face deal (Kaynak / Doğrulama Başlangıç Noktası)',
        url: 'https://www.reuters.com/world/us-doj-is-inquiring-about-nvidias-purchase-hugging-face-sources-say-2026-10-28/'
      }
    ],
    bodyText: `### Haberin arka planı

Nvidia’nın Hugging Face için açıkladığı yaklaşık 12,93 milyar dolarlık işlem ABD Adalet Bakanlığının [rekabet incelemesine](/yayinlar/abd-cin-teknoloji-yatirim-kisitlamalari) konu oldu. Reuters’ın 28 Ekim haberine göre yetkililer, bu anlaşmanın AI modellerinin dağıtıldığı önemli bir kanalı tek bir altyapı sağlayıcısının kontrolüne verip vermeyeceğini sorguluyor. İnceleme, ihlal kararı verildiği anlamına gelmiyor.

### Haber bize ne anlatıyor?

Hugging Face’in değeri yalnızca barındırdığı dosyalarda değil; araştırmacıların, şirketlerin ve geliştiricilerin birbirini bulduğu ekosistemde. Nvidia [işlemciler ve yazılım altyapısında](/yayinlar/nvidia-agile-robots-humanoid-platform) güçlü. Dağıtım kanalı da aynı grubun parçası olduğunda açık ekosistemin tarafsızlığı daha fazla tartışılacaktır.

### İş modeline etkisi

Girişimlerin bir platformun API’sine, model deposuna veya donanımına ne kadar bağımlı olduğunu haritalaması gerekiyor. Açık ağırlıklı olmak ile dağıtım altyapısının bağımsız olması aynı şey değil.

### Buradan sonrası

Bu dosyada takip edilmesi gereken asıl soru satın alma bedeli değil: Hugging Face üzerindeki geliştirici güveni ve rakip donanımlara eşit erişim korunabilecek mi? Açık ekosistemin ticari bir şirkete ait olması tek başına sorun değil; kuralların kimin lehine değiştiği belirleyici.

**Kaynak / doğrulama başlangıç noktası:** [https://www.reuters.com/world/us-doj-is-inquiring-about-nvidias-purchase-hugging-face-sources-say-2026-10-28/](https://www.reuters.com/world/us-doj-is-inquiring-about-nvidias-purchase-hugging-face-sources-say-2026-10-28/)`
  },
  {
    slug: 'upwind-400-milyon-dolar-bulut-guvenligi',
    category: 'haber',
    topic: { tr: 'Startup ve VC', en: 'Startups & VC' },
    title: {
      tr: 'Upwind 400 milyon dolar topladı: Güvenlik neden AI çağının temel altyapısı?',
      en: 'Upwind Raises $400 Million: Why Runtime Security Is Core Infrastructure in the AI Era'
    },
    seoTitle: 'Upwind 400 milyon dolar topladı: Güvenlik neden AI çağının temel altyapısı? | Dijital Hezarfen',
    lead: {
      tr: 'Bulut güvenliğinde yeni yatırımlar, çalışan yazılımı izleme ihtiyacının büyüdüğünü gösteriyor.',
      en: 'New investments in cloud security show the growing need for real-time runtime monitoring.'
    },
    desc: {
      tr: 'Bulut güvenliğinde yeni yatırımlar, çalışan yazılımı izleme ihtiyacının büyüdüğünü gösteriyor. Güvenlik yalnızca kod yazılırken yapılan testlerden ibaret değil.',
      en: 'Upwind’s $400M Series C round underscores why runtime cloud security and anomaly detection are critical as AI agents gain production permissions.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-05.webp',
    imageAlt: 'Bulut ortamındaki tehditleri çalışma anında tespit eden güvenlik teknolojisi.',
    source: '/articles/upwind-400-milyon-dolar-bulut-guvenligi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Upwind 400 milyon dolar',
      'bulut guvenligi',
      'Series C yatirim',
      'runtime security',
      'AI ajan guvenligi'
    ],
    color: 'from-indigo-600/25 to-rose-600/15',
    accent: 'text-rose-400',
    featured: false,
    relatedSlugs: ['nvidia-openshell-ai-agent-guvenligi', 'yapay-zekayi-kapatmakta-cok-mu-gec-kaldik'],
    sources: [
      {
        label: 'TechCrunch — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)',
        url: 'https://techcrunch.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Upwind, 28 Ekim’de duyurulan Series C turunda 400 milyon dolar yatırım aldı. Haberlerde şirketin değerlemesi yaklaşık 3,8 milyar dolar olarak aktarıldı. Upwind’in odağı, bulut ortamlarında çalışan uygulamaların gerçek davranışını izleyerek riskleri tespit etmek.

### Haber bize ne anlatıyor?

Güvenlik yalnızca kod yazılırken yapılan testlerden ibaret değil. Bir uygulamanın üretim ortamında hangi verilere eriştiği, nasıl haberleştiği ve [beklenmedik davranış gösterip göstermediği](/yayinlar/yapay-zekayi-kapatmakta-cok-mu-gec-kaldik) de önemli. [AI ajanları sisteme daha fazla işlem yetkisi kazandıkça](/yayinlar/nvidia-openshell-ai-agent-guvenligi) bu ihtiyaç büyüyor.

### İş modeline etkisi

B2B girişimlerin güvenliği sonradan eklenen bir özellik değil, ürünün temel tasarım koşulu olarak ele alması gerekiyor. Müşterinin hangi riski azaltmak için ödeme yaptığını net biçimde ortaya koyan dikey güvenlik ürünleri yatırımcıların ilgisini çekebiliyor.

### Buradan sonrası

Güvenlik yazılımında hızlı büyümenin kalıcı olup olmayacağı, müşterilerin ürünü ilk kurulumdan sonra ne kadar aktif kullandığına bağlı. Özellikle AI ajanlarının sisteme erişimi arttıkça görünürlük ve müdahale yeteneği ayrı bir bütçe kalemine dönüşebilir.

**Kaynak / doğrulama başlangıç noktası:** [https://techcrunch.com/](https://techcrunch.com/)`
  },
  {
    slug: 'guidewire-hyperexponential-sigorta-yapay-zeka',
    category: 'haber',
    topic: { tr: 'InsurTech', en: 'InsurTech' },
    title: {
      tr: 'Guidewire–Hyperexponential: Sigortacılıkta yapay zekâ neden milyarlar ediyor?',
      en: 'Guidewire–Hyperexponential: Why AI in Insurance Pricing Commands Billions'
    },
    seoTitle: 'Guidewire–Hyperexponential: Sigortacılıkta yapay zekâ neden milyarlar ediyor? | Dijital Hezarfen',
    lead: {
      tr: 'Sigorta fiyatlandırma yazılımlarına yapılan büyük yatırımlar, dikey yazılımın ekonomik değerini yeniden hatırlatıyor.',
      en: 'Major acquisitions in insurance pricing software remind the market of the enduring economic value of vertical software.'
    },
    desc: {
      tr: 'Sigorta fiyatlandırma yazılımlarına yapılan büyük yatırımlar, dikey yazılımın ekonomik değerini yeniden hatırlatıyor. Bir sigorta teklifinin arkasında onlarca değişken ve risk modeli bulunuyor.',
      en: 'Guidewire’s agreement to acquire Hyperexponential highlights why domain-specific decision and risk pricing software creates deep enterprise value.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-06.webp',
    imageAlt: 'Sigorta risk fiyatlandırmasında yapay zekâ destekli karar sistemleri.',
    source: '/articles/guidewire-hyperexponential-sigorta-yapay-zeka.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Guidewire Hyperexponential',
      'InsurTech',
      'sigorta yapay zeka',
      'dikey yazilim',
      'risk fiyatlandirma'
    ],
    color: 'from-emerald-600/25 to-blue-900/20',
    accent: 'text-emerald-400',
    featured: false,
    relatedSlugs: ['lseg-octus-ozel-veri-ai', 'mach9-ai-cad-pivot'],
    sources: [
      {
        label: 'Guidewire — Kurumsal Ana Sayfa / Doğrulama Başlangıç Noktası (Özgül duyuru URL’si ayrıca teyit edilmelidir)',
        url: 'https://www.guidewire.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Guidewire, Hyperexponential’ı 1,7 milyar dolar nakit karşılığında satın almak üzere anlaşma açıkladı; hedeflere bağlı ek ödeme hükümleri de bulunuyor. Hyperexponential, ticari sigortalarda karmaşık risklerin fiyatlandırılmasına yardımcı olan yazılımlar geliştiriyor.

### Haber bize ne anlatıyor?

Bir sigorta teklifinin arkasında onlarca değişken, geçmiş veri, risk modeli ve denetim gerekliliği bulunuyor. Bu nedenle [sektöre özel yazılım](/yayinlar/mach9-ai-cad-pivot), genel amaçlı bir sohbet arayüzünden çok daha fazla değer yaratabiliyor. AI’ın katkısı ancak [doğru veri ve kontrol süreçleriyle](/yayinlar/lseg-octus-ozel-veri-ai) anlam kazanıyor.

### İş modeline etkisi

Girişimciler için iyi bir dikey AI fikri, sektörün en pahalı ve en kritik karar adımlarından birini hedeflemeli. Ürün, müşteri verisine bağlanmıyorsa ve ölçülebilir zaman ya da risk tasarrufu sağlamıyorsa yalnızca AI etiketi yeterli değil.

### Buradan sonrası

Sigortada fiyatlama hatası yalnızca kötü bir kullanıcı deneyimi değil, doğrudan finansal kayıp anlamına gelir. Bu yüzden burada kazanan AI, en yaratıcı yanıtı veren değil, kararını açıklayabilen ve denetlenebilir biçimde çalışan sistem olabilir.

**Kaynak / doğrulama başlangıç noktası:** [https://www.guidewire.com/](https://www.guidewire.com/)`
  },
  {
    slug: 'rebuild-venture-studio-ileri-uretim',
    category: 'haber',
    topic: { tr: 'Girişimcilik', en: 'Entrepreneurship' },
    title: {
      tr: 'Re:Build ve 2,1 milyar dolar: Venture Studio modeli fabrikaya taşınır mı?',
      en: 'Re:Build and $2.1 Billion: Can the Venture Studio Model Move to the Factory Floor?'
    },
    seoTitle: 'Re:Build ve 2,1 milyar dolar: Venture Studio modeli fabrikaya taşınır mı? | Dijital Hezarfen',
    lead: {
      tr: 'Re:Build’in yeni finansmanı, girişim kurma becerisinin üretim altyapısıyla birleşebileceğini gösteriyor.',
      en: 'Re:Build’s new financing shows how venture-building capabilities can merge with shared industrial manufacturing infrastructure.'
    },
    desc: {
      tr: 'Re:Build’in yeni finansmanı, girişim kurma becerisinin üretim altyapısıyla birleşebileceğini gösteriyor. Yazılım girişimi kurarken bulut altyapısı kiralayabilirsiniz; fiziksel üretimde ise ortak altyapı kritik.',
      en: 'Re:Build Manufacturing’s $2.1B financing tests whether a shared industrial platform can reduce the capital burden of launching hardware ventures.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '27 Ekim 2026', en: 'October 27, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-07.webp',
    imageAlt: 'Ortak üretim altyapısından yeni girişimlerin doğduğu endüstriyel model.',
    source: '/articles/rebuild-venture-studio-ileri-uretim.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'ReBuild Manufacturing',
      'venture studio',
      'ileri uretim',
      'endustriyel girisimcilik',
      'donanim girisimi'
    ],
    color: 'from-orange-600/25 to-slate-600/15',
    accent: 'text-orange-400',
    featured: false,
    relatedSlugs: ['tim-cook-apple-miras', 'ben-bu-fikire-2-milyon-dolar-yatirim-alirim'],
    sources: [
      {
        label: 'Re:Build Manufacturing Newsroom (27 Ekim 2026) — $2.1B financing announcement (Kaynak / Doğrulama Bağlantısı)',
        url: 'https://rebuildmanufacturing.com/newsroom/news/rebuild-2-1-billion-reindustrialize-america/'
      }
    ],
    bodyText: `### Haberin arka planı

Re:Build Manufacturing, 27 Ekim’de General Catalyst ve JPMorganChase öncülüğünde 2,1 milyar dolar yeni finansman sağladığını duyurdu. Kaynağın amacı ileri üretim kapasitesini büyütmek ve yeni endüstriyel girişimleri hayata geçirmek.

### Haber bize ne anlatıyor?

Yazılım girişimi kurarken bulut altyapısı kiralayabilirsiniz; fiziksel ürün geliştiren bir şirket için fabrika, kalite kontrol, [tedarik ve mühendislik](/yayinlar/tim-cook-apple-miras) aynı kolaylıkta erişilebilir değil. Re:Build modeli, bu yetenekleri ortak bir platformda toplama iddiası taşıyor. Venture Studio mantığı burada yalnızca fikir üretmek değil, üretim engelini de ortadan kaldırmak anlamına geliyor.

### İş modeline etkisi

Her kurulan işin startup olmadığı gibi her üretim tesisinin de venture studio olmadığını ayırmak gerekiyor. Değerlendirme ölçütü; yeni şirket oluşturma tekrarlanabilirliği, ortak altyapıdan doğan maliyet avantajı ve ürünlerin gerçek pazar talebi olmalı.

### Buradan sonrası

Re:Build örneğinde cevaplanması gereken soru şu: Ortak üretim altyapısı gerçekten [yeni şirketlerin kuruluş maliyetini](/yayinlar/ben-bu-fikire-2-milyon-dolar-yatirim-alirim) azaltıyor mu, yoksa holdingin bilançosuna yeni bir sermaye yükü mü ekliyor? Venture Studio modelinin başarısı şirket sayısıyla değil, sürdürülebilir çıkış ve nakit üretimiyle ölçülmeli.

**Kaynak / doğrulama başlangıç noktası:** [https://rebuildmanufacturing.com/newsroom/news/rebuild-2-1-billion-reindustrialize-america/](https://rebuildmanufacturing.com/newsroom/news/rebuild-2-1-billion-reindustrialize-america/)`
  },
  {
    slug: 'jio-platforms-halka-arz-platform-ekonomisi',
    category: 'haber',
    topic: { tr: 'Global Markalar', en: 'Global Brands' },
    title: {
      tr: 'Jio Platforms: Önce dağıtım, sonra dijital ekosistem',
      en: 'Jio Platforms: Distribution First, Digital Ecosystem Second'
    },
    seoTitle: 'Jio Platforms: Önce dağıtım, sonra dijital ekosistem | Dijital Hezarfen',
    lead: {
      tr: 'Jio’nun halka arzı, altyapı ve müşteri erişiminin nasıl çok ürünlü bir platforma dönüşebildiğini tartışmaya açıyor.',
      en: 'Jio’s IPO opens a discussion on how telecom infrastructure and customer reach can evolve into a multi-product digital platform.'
    },
    desc: {
      tr: 'Jio’nun halka arzı, altyapı ve müşteri erişiminin nasıl çok ürünlü bir platforma dönüşebildiğini tartışmaya açıyor. İnternet bağlantısı başlangıçta tek başına bir ürün gibi görünür.',
      en: 'Jio Platforms’ IPO highlights how direct customer distribution can anchor cloud, media, financial services, and AI products.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-08.webp',
    imageAlt: 'Telekom altyapısından geniş dijital hizmet ekosistemine uzanan platform modeli.',
    source: '/articles/jio-platforms-halka-arz-platform-ekonomisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Jio Platforms halka arz',
      'platform ekonomisi',
      'dagitim agi',
      'dijital ekosistem',
      'musteri edinme maliyeti'
    ],
    color: 'from-violet-600/25 to-amber-500/15',
    accent: 'text-violet-400',
    featured: false,
    relatedSlugs: ['bilgisayar-kavrami-degisiyor', 'target-ask-target-ai-alisveris'],
    sources: [
      {
        label: 'TechCrunch — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)',
        url: 'https://techcrunch.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Jio Platforms’ın 28 Ekim’de gündeme gelen halka arzı yaklaşık 3,2 milyar dolarlık büyüklüğüyle dikkat çekti. Şirketin telekomünikasyon hizmetleri etrafında kurduğu dijital ürün ekosistemi, Hindistan pazarının ölçeğiyle birleşiyor. İlk gün fiyat hareketleri kalıcı başarı göstergesi olarak görülmemeli.

### Haber bize ne anlatıyor?

İnternet bağlantısı başlangıçta tek başına bir ürün gibi görünür. Oysa milyonlarca müşteriye doğrudan erişim sağlayan şirket için bulut, içerik, finansal hizmetler ve AI ürünleri aynı dağıtım ağı üzerinden sunulabilir. Bu, [platform ekonomisinin temel avantajlarından](/yayinlar/bilgisayar-kavrami-degisiyor) biri.

### İş modeline etkisi

Bir girişim için en kritik varlık bazen ilk ürün değil, [müşteriye tekrar ulaşabilme kapasitesidir](/yayinlar/target-ask-target-ai-alisveris). Fakat ucuz müşteri edinme stratejisi ancak uzun vadeli müşteri değeri ve sermaye maliyetiyle birlikte anlamlıdır.

### Buradan sonrası

Jio örneği bize dağıtımın da bir ürün olduğunu hatırlatıyor. Milyonlarca kullanıcıya erişim, yeni bir servisi büyütmeyi kolaylaştırabilir; fakat aynı büyüklük veri güvenliği, müşteri hizmetleri ve regülasyon bakımından ciddi sorumluluk getirir.

**Kaynak / doğrulama başlangıç noktası:** [https://techcrunch.com/](https://techcrunch.com/)`
  },
  {
    slug: 'ai-veri-merkezleri-nukleer-enerji',
    category: 'haber',
    topic: { tr: 'Enerji ve Teknoloji', en: 'Energy & Technology' },
    title: {
      tr: 'Nükleer enerji neden yapay zekâ şirketlerinin gündeminde?',
      en: 'Why Is Nuclear Energy at the Top of AI Companies’ Agendas?'
    },
    seoTitle: 'Nükleer enerji neden yapay zekâ şirketlerinin gündeminde? | Dijital Hezarfen',
    lead: {
      tr: 'AI veri merkezlerinin elektrik talebi, mevcut nükleer santrallerin modernizasyonunu teknoloji gündeminin merkezine taşıyor.',
      en: 'Electricity demand from AI data centers puts the modernization and uprating of existing nuclear power plants at the center of the tech agenda.'
    },
    desc: {
      tr: 'AI veri merkezlerinin elektrik talebi, mevcut nükleer santrallerin modernizasyonunu teknoloji gündeminin merkezine taşıyor. Bir veri merkezinin ekonomik değeri yalnızca işlemci sayısıyla ölçülemez.',
      en: 'Conditional loan support for nuclear capacity uprates highlights how uninterrupted baseload power has become a strategic bottleneck for AI data centers.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-09.webp',
    imageAlt: 'Nükleer enerji üretimi ile yapay zekâ veri merkezlerinin artan elektrik ihtiyacı.',
    source: '/articles/ai-veri-merkezleri-nukleer-enerji.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'AI veri merkezleri nukleer enerji',
      'Constellation Energy',
      'elektrik talebi',
      'veri merkezi altyapisi',
      'enerji teknolojileri'
    ],
    color: 'from-cyan-600/25 to-amber-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ['ai-veri-merkezi-elektrik-kablo-darbogazi', 'nebius-ai-veri-merkezi-finansmani'],
    sources: [
      {
        label: 'U.S. Department of Energy (energy.gov) — Kurumsal Ana Sayfa / Doğrulama Başlangıç Noktası',
        url: 'https://www.energy.gov/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

ABD Enerji Bakanlığı, Constellation Energy’nin bazı nükleer santrallerindeki kapasite artırımı projeleri için 5 milyar dolara kadar koşullu kredi desteği açıkladı. Hedeflenen ek üretim kapasitesi yaklaşık 1,1 gigavat. Koşullu finansman, kredinin tamamının kullanıldığı veya bütün projelerin tamamlandığı anlamına gelmiyor.

### Haber bize ne anlatıyor?

Bir veri merkezinin ekonomik değeri yalnızca işlemci sayısıyla ölçülemez. Kesintisiz elektrik, [şebeke bağlantısı](/yayinlar/ai-veri-merkezi-elektrik-kablo-darbogazi), soğutma ve uzun vadeli fiyat anlaşmaları da belirleyici. Mevcut santralin üretimini artırmak, bazı durumlarda sıfırdan tesis inşa etmekten daha hızlı olabilir.

### İş modeline etkisi

AI girişimleri [bulut maliyetini değerlendirirken](/yayinlar/nebius-ai-veri-merkezi-finansmani) enerji fiyatlarını da dolaylı olarak takip etmeli. Enerji yönetimi, depolama ve şebeke yazılımları AI ekosisteminin görünmeyen ama kritik katmanları.

### Buradan sonrası

Elektriği yalnızca gider kalemi olarak görmek artık yetersiz. AI veri merkezleri için enerjiye erişim, kimi bölgelerde yazılım veya çip seçimi kadar belirleyici olabilir. Fakat nükleer projelerde açıklanan kredi tutarı ile gerçekten üretilecek elektrik arasındaki uzun zaman farkını unutmamak gerekiyor.

**Kaynak / doğrulama başlangıç noktası:** [https://www.energy.gov/](https://www.energy.gov/)`
  },
  {
    slug: 'samsung-hbm-yapay-zeka-bellek',
    category: 'haber',
    topic: { tr: 'Çipler', en: 'Semiconductors & Chips' },
    title: {
      tr: 'Samsung ve HBM yarışı: Yapay zekânın görünmeyen darboğazı bellek',
      en: 'Samsung and the HBM Race: Memory as the Invisible Bottleneck of AI'
    },
    seoTitle: 'Samsung ve HBM yarışı: Yapay zekânın görünmeyen darboğazı bellek | Dijital Hezarfen',
    lead: {
      tr: 'Yapay zekâ altyapısında işlemci kadar bellek teknolojileri de rekabeti belirliyor.',
      en: 'In AI infrastructure, high-bandwidth memory technologies shape competition just as much as compute processors.'
    },
    desc: {
      tr: 'Yapay zekâ altyapısında işlemci kadar bellek teknolojileri de rekabeti belirliyor. Büyük modeller yalnızca hesaplama birimi kullanmıyor; verinin hızlı taşınmasına ve yeterli belleğe ihtiyaç duyuyor.',
      en: 'Samsung’s third-quarter semiconductor results underscore why HBM capacity and advanced packaging remain critical bottlenecks for AI servers.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-10.webp',
    imageAlt: 'Yapay zekâ işlemcileri için yüksek bant genişlikli bellek teknolojisi.',
    source: '/articles/samsung-hbm-yapay-zeka-bellek.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Samsung HBM',
      'yuksek bant genislikli bellek',
      'yapay zeka cipleri',
      'yari iletken',
      'bellek darbogazi'
    ],
    color: 'from-indigo-600/25 to-cyan-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ['meta-ai-yatirimlari-sermaye-verimliligi', 'flapping-airplanes-bir-milyar-dolar-yatirim'],
    sources: [
      {
        label: 'Samsung Investor Relations — Yatırımcı İlişkileri Sayfası / Doğrulama Başlangıç Noktası',
        url: 'https://www.samsung.com/global/ir/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Samsung’un 29 Ekim’de yayımlanan üçüncü çeyrek finansal sonuçları, yarı iletken faaliyetlerinde güçlü büyümeye işaret etti. Şirketin yüksek bant genişlikli bellek kapasitesine ilişkin açıklamaları, [AI sunucularındaki arz baskısının](/yayinlar/meta-ai-yatirimlari-sermaye-verimliligi) sürebileceğini gösteriyor. Finansal büyüme rakamları raporlanırken para birimi ve bölüm tanımları resmî tabloyla birebir eşleştirilmeli.

### Haber bize ne anlatıyor?

Büyük modeller yalnızca hesaplama birimi kullanmıyor; verinin hızlı taşınmasına ve yeterli belleğe ihtiyaç duyuyor. Bu nedenle AI donanım rekabetini yalnızca GPU sayısı üzerinden okumak eksik kalır. HBM kapasitesi ve paketleme teknolojileri de kritik darboğaz olabilir.

### İş modeline etkisi

Girişimlerin donanım satın alma kararında toplam sahip olma maliyeti, bellek kapasitesi, enerji tüketimi ve tedarik süresi birlikte incelenmeli.

### Buradan sonrası

Bellek kıtlığı, AI şirketlerinin donanım yol haritalarını yeniden yazabilir. [Model optimizasyonu ve daha verimli bellek kullanımı](/yayinlar/flapping-airplanes-bir-milyar-dolar-yatirim) bu yüzden yalnızca mühendislik başarısı değil, tedarik riskine karşı ticari bir önlem.

**Kaynak / doğrulama başlangıç noktası:** [https://www.samsung.com/global/ir/](https://www.samsung.com/global/ir/)`
  },
  {
    slug: 'unitree-robotik-buyume-karlilik',
    category: 'haber',
    topic: { tr: 'Robotik', en: 'Robotics' },
    title: {
      tr: 'Unitree: Robot satışları büyürken kârlılık neden zorlaşıyor?',
      en: 'Unitree: Why Profitability Gets Harder Even as Robot Sales Grow'
    },
    seoTitle: 'Unitree: Robot satışları büyürken kârlılık neden zorlaşıyor? | Dijital Hezarfen',
    lead: {
      tr: 'Robotik sektörünün gerçek sınavı etkileyici gösterilerden sürdürülebilir birim ekonomiye geçmek.',
      en: 'The real test for the robotics industry is moving from impressive demos to sustainable unit economics.'
    },
    desc: {
      tr: 'Robotik sektörünün gerçek sınavı etkileyici gösterilerden sürdürülebilir birim ekonomiye geçmek. Robot üretmek; tedarik zinciri, fiziksel güvenlik, servis ağı ve donanım geliştirme gerektirir.',
      en: 'Unitree’s quarterly performance highlights the gap between growing robot shipments and sustainable field profitability.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-11.webp',
    imageAlt: 'İnsansı ve dört ayaklı robotların gerçek üretim ortamındaki ticari kullanımı.',
    source: '/articles/unitree-robotik-buyume-karlilik.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Unitree robotik',
      'insansi robot',
      'robotik birim ekonomi',
      'donanim karliligi',
      'endustriyel robot'
    ],
    color: 'from-slate-500/25 to-cyan-500/15',
    accent: 'text-cyan-400',
    featured: false,
    relatedSlugs: ['nvidia-agile-robots-humanoid-platform', 'mach9-ai-cad-pivot'],
    sources: [
      {
        label: 'Reuters — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)',
        url: 'https://www.reuters.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Unitree’nin 28 Ekim’de haberleştirilen çeyrek sonuçları, satış büyümesiyle araştırma harcamalarının aynı anda artabildiğini gösteriyor. Şirket [insansı ve dört ayaklı robotlarıyla](/yayinlar/nvidia-agile-robots-humanoid-platform) biliniyor. Ancak robotik işinde ciro, teslimat, bakım ve saha kullanımı aynı şey değil.

### Haber bize ne anlatıyor?

Robot üretmek; tedarik zinciri, fiziksel güvenlik, servis ağı ve [donanım geliştirme gerektirir](/yayinlar/mach9-ai-cad-pivot). Yazılım ürününde bir güncellemeyi dağıtmak kolayken fiziksel cihazda hatanın maliyeti çok daha yüksek olabilir. Bu yüzden yüksek satış büyümesi tek başına kârlılığın kanıtı değildir.

### İş modeline etkisi

Robotik girişimleri incelerken robot başına brüt marj, servis maliyeti, gerçek kullanım saati ve müşterinin geri ödeme süresi sorulmalı. Geleceğin kazananı yalnızca yürüyen robot değil, ekonomik olarak çalıştırılabilen robot olabilir.

### Buradan sonrası

Robot satışlarının artması iyi haber; ama robotların kaç saat üretken çalıştığı, kaç kez arıza verdiği ve bakım masrafı bilinmeden gerçek ekonomi anlaşılamaz. Gösteri videosu ile ölçeklenebilir işletme arasında hâlâ uzun bir mesafe var.

**Kaynak / doğrulama başlangıç noktası:** [https://www.reuters.com/](https://www.reuters.com/)`
  },
  {
    slug: 'nvidia-nemotron-sesli-yapay-zeka',
    category: 'haber',
    topic: { tr: 'Voice AI', en: 'Voice AI' },
    title: {
      tr: 'Nvidia Nemotron: Çok dilli sesli yapay zekâda açık modellerin yükselişi',
      en: 'Nvidia Nemotron: The Rise of Open Models in Multilingual Voice AI'
    },
    seoTitle: 'Nvidia Nemotron: Çok dilli sesli yapay zekâda açık modellerin yükselişi | Dijital Hezarfen',
    lead: {
      tr: 'Çok dilli konuşma teknolojileri, sesli AI ürünlerinin maliyet ve dağıtım seçeneklerini genişletiyor.',
      en: 'Multilingual speech technologies expand cost and deployment options for voice AI products.'
    },
    desc: {
      tr: 'Çok dilli konuşma teknolojileri, sesli AI ürünlerinin maliyet ve dağıtım seçeneklerini genişletiyor. Sesli AI sistemlerinde konuşma tanıma, dil anlama, yanıt üretme ve konuşma sentezi farklı katmanlar.',
      en: 'Nvidia’s Nemotron 3.5 Transcribe release highlights how open-weight speech recognition models impact enterprise voice AI unit economics.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-12.webp',
    imageAlt: 'Çok dilli seslerin yapay zekâ ile yazıya dönüştürülmesini simgeleyen görsel.',
    source: '/articles/nvidia-nemotron-sesli-yapay-zeka.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Nvidia Nemotron',
      'sesli yapay zeka',
      'Voice AI',
      'cok dilli transkripsiyon',
      'acik agirlikli modeller'
    ],
    color: 'from-violet-600/25 to-teal-500/15',
    accent: 'text-teal-400',
    featured: false,
    relatedSlugs: ['yapay-zeka-calisanlar-meta-project-ot', 'sap-model-routing-ai-maliyet-optimizasyonu'],
    sources: [
      {
        label: 'NVIDIA Developer — Geliştirici Portalı / Doğrulama Başlangıç Noktası',
        url: 'https://developer.nvidia.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Nvidia, Nemotron 3.5 Transcribe model ailesini ve ilgili ses verisi kaynaklarını duyurdu. Modelin çok dilli transkripsiyon ve belirli çeviri görevlerini desteklediği belirtiliyor. Duyurulan sürümün kayıtlı ses odaklı olması, canlı telefon görüşmelerinde doğrudan uçtan uca çözüm sayılmaması gerektiği anlamına geliyor.

### Haber bize ne anlatıyor?

Sesli AI sistemlerinde konuşma tanıma, dil anlama, yanıt üretme ve konuşma sentezi farklı katmanlar. Bunlardan birinin açık ağırlıklı olması, tüm sistemin maliyetini ve veri kontrolünü etkileyebilir. Ancak gecikme, aksan doğruluğu ve gerçek zamanlı kullanım ayrıca test edilmelidir.

### İş modeline etkisi

[Müşteri hizmetleri ve satış ajanları geliştiren ekipler](/yayinlar/yapay-zeka-calisanlar-meta-project-ot), yalnızca demo kalitesini değil; dil başına hata oranını, gecikmeyi, konuşmacı ayrımını ve [görüşme başına maliyeti](/yayinlar/sap-model-routing-ai-maliyet-optimizasyonu) ölçmeli.

### Buradan sonrası

Çok dilli ses teknolojilerinde asıl eşik, laboratuvar doğruluğunu gerçek müşteri konuşmalarına taşıyabilmek. Gürültü, aksan, kesintiler ve gecikme bir çağrı merkezinde model kartındaki başarı oranından daha fazla şey söyleyebilir.

**Kaynak / doğrulama başlangıç noktası:** [https://developer.nvidia.com/](https://developer.nvidia.com/)`
  },
  {
    slug: 'harmonic-aristotle-formal-verification',
    category: 'haber',
    topic: { tr: 'Yazılım ve Araştırma', en: 'Software & Research' },
    title: {
      tr: 'Harmonic Aristotle: Yapay zekâ kodu üretmekten doğrulamaya geçiyor',
      en: 'Harmonic Aristotle: AI Moves from Generating Code to Mathematically Verifying It'
    },
    seoTitle: 'Harmonic Aristotle: Yapay zekâ kodu üretmekten doğrulamaya geçiyor | Dijital Hezarfen',
    lead: {
      tr: 'Kod yazan AI kadar, yazılan kodun belirli koşullarda doğru olduğunu kanıtlayan sistemler de önem kazanıyor.',
      en: 'Systems that mathematically prove generated code is correct under defined conditions are becoming just as important as code-writing AI.'
    },
    desc: {
      tr: 'Kod yazan AI kadar, yazılan kodun belirli koşullarda doğru olduğunu kanıtlayan sistemler de önem kazanıyor. Üretken modeller çoğu zaman çalışır görünen kod üretebiliyor.',
      en: 'Harmonic’s Aristotle formal verification capabilities for C and Verilog highlight why mathematical proof is a growing layer in the AI software stack.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-13.webp',
    imageAlt: 'Yazılım ve çip tasarımlarında matematiksel doğrulama yapan yapay zekâ.',
    source: '/articles/harmonic-aristotle-formal-verification.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Harmonic Aristotle',
      'formal verification',
      'bicimsel dogrulama',
      'kod dogrulama',
      'Verilog C dogrulama'
    ],
    color: 'from-slate-600/25 to-cyan-500/15',
    accent: 'text-gray-200',
    featured: false,
    relatedSlugs: ['nvidia-openshell-ai-agent-guvenligi', 'enron-karin-nakdin-ve-guvenin-denetimi'],
    sources: [
      {
        label: 'Reuters — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)',
        url: 'https://www.reuters.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Harmonic’in Aristotle modelinin C programları ve Verilog tabanlı çip tasarımları için doğrulama yeteneklerini genişlettiği açıklandı. Biçimsel doğrulama, yazılımın belirli özellikleri sağladığını matematiksel yöntemlerle test etmeye dayanıyor. Bu, her türlü [hata ve güvenlik riskinin](/yayinlar/nvidia-openshell-ai-agent-guvenligi) ortadan kalktığı anlamına gelmiyor.

### Haber bize ne anlatıyor?

Üretken modeller çoğu zaman çalışır görünen kod üretebiliyor. Ancak ödeme sistemleri, tıbbi cihazlar veya işlemci tasarımı gibi alanlarda görünürde çalışması yeterli değil. Doğrulanabilirlik, yazılımın üretim sürecinde ayrı bir değer katmanı oluşturabilir.

### İş modeline etkisi

Girişimler için yeni ürün alanı yalnızca kod üretimi değil; test, ispat, denetim ve değişikliklerin güvenli biçimde dağıtılması. AI geliştirme hızlandıkça doğrulama araçlarına ihtiyaç da artabilir.

### Buradan sonrası

Yapay zekânın ürettiği kodu yine başka bir yapay zekâya kontrol ettirmek tek başına güvence sağlamaz. Biçimsel doğrulamanın değeri, [denetimin bağımsız kurallara](/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi) ve matematiksel olarak sınanabilir koşullara dayanmasında.

**Kaynak / doğrulama başlangıç noktası:** [https://www.reuters.com/](https://www.reuters.com/)`
  },
  {
    slug: 'gsk-onkoloji-klinik-arastirma-stratejisi',
    category: 'haber',
    topic: { tr: 'Biyoteknoloji', en: 'Biotechnology' },
    title: {
      tr: 'GSK ve onkoloji yarışı: Daha fazla klinik program daha fazla başarı demek mi?',
      en: 'GSK and the Oncology Race: Do More Clinical Programs Automatically Mean More Success?'
    },
    seoTitle: 'GSK ve onkoloji yarışı: Daha fazla klinik program daha fazla başarı demek mi? | Dijital Hezarfen',
    lead: {
      tr: 'İlaç şirketlerinin araştırma portföylerini genişletmesi, bilimsel fırsatlarla ticari riskin birlikte yönetildiğini gösteriyor.',
      en: 'Pharmaceutical companies expanding their oncology pipelines illustrate how scientific opportunity and commercial risk are managed together.'
    },
    desc: {
      tr: 'İlaç şirketlerinin araştırma portföylerini genişletmesi, bilimsel fırsatlarla ticari riskin birlikte yönetildiğini gösteriyor. Biyoteknolojide bir programın başarılı olması yıllar sürebilir.',
      en: 'GSK’s oncology clinical development goals highlight the distinction between pipeline expansion and regulatory approval rates in biotech.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-14.webp',
    imageAlt: 'Hedefli kanser tedavilerinin klinik araştırma sürecini anlatan biyomedikal görsel.',
    source: '/articles/gsk-onkoloji-klinik-arastirma-stratejisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'GSK onkoloji',
      'klinik arastirma',
      'biyoteknoloji yatirimlari',
      'ilac gelistirme',
      'kanser arastirmalari'
    ],
    color: 'from-rose-600/25 to-violet-600/15',
    accent: 'text-rose-400',
    featured: false,
    relatedSlugs: ['moderna-merck-mrna-melanom-faz-3', 'gilead-pepstar-ilac-teknoloji-satin-alma'],
    sources: [
      {
        label: 'GSK Innovation Pipeline — Resmi Araştırma Portföyü Sayfası (Kaynak / Doğrulama Bağlantısı)',
        url: 'https://www.gsk.com/en-gb/innovation/pipeline/'
      }
    ],
    bodyText: `### Haberin arka planı

GSK, onkoloji alanındaki klinik geliştirme programlarını büyütmeye yönelik hedeflerini açıkladı. Şirketin [araştırma portföyü ve satın almaları](/yayinlar/gilead-pepstar-ilac-teknoloji-satin-alma), [kanser tedavilerinde daha güçlü bir konum](/yayinlar/moderna-merck-mrna-melanom-faz-3) oluşturma çabasının parçası. Ancak hedeflenen klinik çalışma sayısı, onaylanacak ilaç sayısıyla karıştırılmamalı.

### Haber bize ne anlatıyor?

Biyoteknolojide bir programın başarılı olması yıllar sürebilir; güvenlik, etkinlik, üretim ve düzenleyici onay aşamalarının her biri ayrı risk taşır. Çok sayıda aday üzerinde çalışmak portföy riskini dağıtabilir ama geliştirme maliyetini de artırır.

### İş modeline etkisi

Sağlık girişimlerini değerlendirirken yalnızca potansiyel pazar büyüklüğünü değil, klinik kanıt düzeyini, fikrî mülkiyeti, düzenleyici yol haritasını ve ortaklık kapasitesini incelemek gerekiyor.

### Buradan sonrası

Onkolojide daha geniş araştırma portföyü daha fazla olasılık yaratır; fakat başarı oranını otomatik artırmaz. Klinik çalışmaların hasta yararı, yan etki profili ve gerçek yaşam koşullarındaki etkisi açıklanmadan yatırım büyüklüğünü tıbbi ilerlemeyle eşitlememek gerekir.

**Kaynak / doğrulama başlangıç noktası:** [https://www.gsk.com/en-gb/innovation/pipeline/](https://www.gsk.com/en-gb/innovation/pipeline/)`
  },
  {
    slug: 'lush-sosyal-medya-reklamsiz-marka-stratejisi',
    category: 'haber',
    topic: { tr: 'Marka ve Tüketici', en: 'Brand & Consumer' },
    title: {
      tr: 'Lush sosyal medya reklamlarını bırakınca ne oldu?',
      en: 'What Happened After Lush Walked Away from Social Media Ads?'
    },
    seoTitle: 'Lush sosyal medya reklamlarını bırakınca ne oldu? | Dijital Hezarfen',
    lead: {
      tr: 'Lush örneği, markanın müşteriye ulaşma kanalını kimin kontrol ettiği sorusunu yeniden gündeme getiriyor.',
      en: 'The Lush case brings back a critical question: who controls the channel through which a brand reaches its customers?'
    },
    desc: {
      tr: 'Lush örneği, markanın müşteriye ulaşma kanalını kimin kontrol ettiği sorusunu yeniden gündeme getiriyor. Sosyal platformlar büyümeyi hızlandırabilir ama müşteri ilişkisini algoritmaya bağımlı kılabilir.',
      en: 'Lush’s investment in owned apps, email, community, and physical retail examines the balance between paid social acquisition and direct brand loyalty.'
    },
    date: { tr: '29 Ekim 2026', en: 'October 29, 2026' },
    eventDate: { tr: '28 Ekim 2026', en: 'October 28, 2026' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    author: 'Dijital Hezarfen',
    hideAuthorBio: true,
    image: '/images/dijital-hezarfen-kapak-15.webp',
    imageAlt: 'Markanın sosyal medya reklamları yerine kendi müşteri kanallarına yatırım yapması.',
    source: '/articles/lush-sosyal-medya-reklamsiz-marka-stratejisi.txt',
    publishedAt: '2026-10-29T10:15:00+03:00',
    modifiedAt: '2026-10-29T10:15:00+03:00',
    keywords: [
      'Lush sosyal medya stratejisi',
      'reklamsiz marka buyumesi',
      'dogrudan musteri kanallari',
      'marka sadakati',
      'musteri edinimi'
    ],
    color: 'from-emerald-600/25 to-amber-500/15',
    accent: 'text-emerald-400',
    featured: false,
    relatedSlugs: ['walmart-connect-ajanslar-reklam-olcumleme', 'google-ai-mode-reklamlari-arama-ekonomisi'],
    sources: [
      {
        label: 'Digiday — Yayıncı Ana Sayfası / Doğrulama Başlangıç Noktası (Özgül haber URL’si ayrıca teyit edilmelidir)',
        url: 'https://digiday.com/',
        isHomepage: true
      }
    ],
    bodyText: `### Haberin arka planı

Lush, 2021’de bazı büyük sosyal platformlardaki kurumsal faaliyetlerini sonlandırma kararı almıştı. Digiday’in 28 Ekim tarihli değerlendirmesi, markanın uygulama, e-posta, topluluk ve fiziksel deneyim gibi doğrudan kanallara yatırımını inceliyor. Bu, markanın internet üzerindeki tüm görünürlüğünü veya bütün iş birliklerini bıraktığı anlamına gelmiyor.

### Haber bize ne anlatıyor?

Sosyal platformlar büyümeyi hızlandırabilir ama müşteri ilişkisini [algoritmanın kurallarına bağımlı](/yayinlar/google-ai-mode-reklamlari-arama-ekonomisi) hale de getirebilir. Kendi uygulaması, e-posta listesi ve topluluğu olan marka müşteriye yeniden ulaşmak için her seferinde aynı [reklam ücretini ödemek](/yayinlar/walmart-connect-ajanslar-reklam-olcumleme) zorunda kalmayabilir. Bununla birlikte bu kanalların kurulması da maliyetlidir.

### İş modeline etkisi

Lush’un stratejisini küçük markalara doğrudan reçete gibi sunmak yanlış olur. Doğru soru reklamı kapatmak değil; müşteri edinimi, sadakat ve doğrudan iletişim kanalları arasında sürdürülebilir denge kurmaktır.

### Buradan sonrası

Lush’un stratejisinden çıkarılacak ders “reklamları kapatın” değil. Bir marka müşterisiyle doğrudan ilişki kuracak kadar güçlü bir neden yaratabiliyorsa platformlara olan bağımlılığını azaltabilir. Asıl soru: İnsanlar algoritma hatırlatmasa da o markayı arar mı?

**Kaynak / doğrulama başlangıç noktası:** [https://digiday.com/](https://digiday.com/)`
  }
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

console.log('--- 1. Writing 15 article text files to public/articles/ ---');
const articlesDir = path.join(projectRoot, 'public', 'articles');
if (!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir, { recursive: true });

for (const art of editorialBatch29Oct) {
  const filePath = path.join(articlesDir, `${art.slug}.txt`);
  fs.writeFileSync(filePath, art.bodyText.trim() + '\n', 'utf8');
  console.log(`Saved: public/articles/${art.slug}.txt`);
}

console.log('\n--- 2. Updating src/data/articles.js ---');
const articlesJsPath = path.join(projectRoot, 'src', 'data', 'articles.js');
const currentArticlesJs = fs.readFileSync(articlesJsPath, 'utf8');

const newArticlesJsCode = editorialBatch29Oct.map((art) => {
  return `  {
    slug: '${art.slug}',
    category: '${art.category}',
    topic: {
      tr: ${JSON.stringify(art.topic.tr)},
      en: ${JSON.stringify(art.topic.en)}
    },
    title: {
      tr: ${JSON.stringify(art.title.tr)},
      en: ${JSON.stringify(art.title.en)}
    },
    seoTitle: ${JSON.stringify(art.seoTitle)},
    lead: {
      tr: ${JSON.stringify(art.lead.tr)},
      en: ${JSON.stringify(art.lead.en)}
    },
    desc: {
      tr: ${JSON.stringify(art.desc.tr)},
      en: ${JSON.stringify(art.desc.en)}
    },
    date: {
      tr: '${art.date.tr}',
      en: '${art.date.en}'
    },
    eventDate: {
      tr: '${art.eventDate.tr}',
      en: '${art.eventDate.en}'
    },
    readTime: {
      tr: '${art.readTime.tr}',
      en: '${art.readTime.en}'
    },
    author: '${art.author}',
    hideAuthorBio: true,
    image: '${art.image}',
    imageAlt: ${JSON.stringify(art.imageAlt)},
    source: '${art.source}',
    publishedAt: '${art.publishedAt}',
    modifiedAt: '${art.modifiedAt}',
    keywords: ${JSON.stringify(art.keywords, null, 6).replace(/\n/g, '\n    ')},
    color: '${art.color}',
    accent: '${art.accent}',
    featured: ${art.featured},
    relatedSlugs: ${JSON.stringify(art.relatedSlugs)},
    sources: ${JSON.stringify(art.sources, null, 6).replace(/\n/g, '\n    ')}
  }`;
}).join(',\n');

if (!currentArticlesJs.includes('google-ai-mode-reklamlari-arama-ekonomisi')) {
  const updatedArticlesJs = currentArticlesJs.replace(
    'export const articles = [',
    `export const articles = [\n${newArticlesJsCode},`
  );
  fs.writeFileSync(articlesJsPath, updatedArticlesJs, 'utf8');
  console.log('Successfully updated src/data/articles.js with 15 new articles (29 Ekim 2026)!');
} else {
  console.log('articles.js already contains 29 Ekim 2026 batch, skipping insert.');
}

console.log('\n--- 3. Updating public/sitemap.xml ---');
const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
let currentSitemap = fs.readFileSync(sitemapPath, 'utf8');

const newSitemapEntries = editorialBatch29Oct.map((art) => `  <url>
    <loc>https://dijitalhezarfen.com/yayinlar/${art.slug}</loc>
    <lastmod>2026-10-29</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://dijitalhezarfen.com${art.image}</image:loc>
      <image:title>${escapeXml(art.title.tr)}</image:title>
      <image:caption>${escapeXml(art.imageAlt)}</image:caption>
    </image:image>
  </url>`).join('\n');

if (!currentSitemap.includes('google-ai-mode-reklamlari-arama-ekonomisi')) {
  currentSitemap = currentSitemap.replace(
    '  <url>\n    <loc>https://dijitalhezarfen.com/</loc>\n    <lastmod>2026-09-15</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>',
    `  <url>\n    <loc>https://dijitalhezarfen.com/</loc>\n    <lastmod>2026-10-29</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n${newSitemapEntries}`
  );
  fs.writeFileSync(sitemapPath, currentSitemap, 'utf8');
  console.log('Updated public/sitemap.xml with 15 new articles!');
} else {
  console.log('sitemap.xml already contains 29 Ekim 2026 batch, skipping.');
}

console.log('\nAll 29 Ekim 2026 setup tasks completed successfully!');
