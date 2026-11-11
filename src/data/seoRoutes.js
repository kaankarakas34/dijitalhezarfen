export const SITE_ORIGIN = 'https://www.dijitalhezarfen.com';
export const SITE_NAME = 'Dijital Hezarfen';
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/enron-karin-nakdin-ve-guvenin-denetimi.png`;
export const YOUTUBE_CHANNEL = 'https://www.youtube.com/channel/UC0xVK9RzlDyFcVMm_iGiARA';

export const ORGANIZATION_SAME_AS = [
  YOUTUBE_CHANNEL
];

export const PERSON_ENTITIES = {
  'Kaan Karakaş': {
    name: 'Kaan Karakaş',
    jobTitle: 'Kurucu & Teknoloji Girişimcisi',
    bio: 'Dijital Hezarfen ekosisteminin kurucusu. Yapay zekâ destekli ürün geliştirme, büyüme stratejisi (RevOps), girişimcilik ve teknoloji ekonomisi alanlarında yayınlar hazırlamakta ve kuruculara mentorluk yapmaktadır.',
    url: `${SITE_ORIGIN}/dijital-hezarfen`,
    sameAs: [YOUTUBE_CHANNEL]
  },
  'Haydar Karakaş': {
    name: 'Haydar Karakaş',
    jobTitle: 'Finansal & Mali Denetçi',
    bio: 'Finansal raporlama, bağımsız denetim, muhasebe hileleri, bilanço ve nakit akış analizi ile kurumsal yönetişim üzerine uzmanlaşmış mali denetçi ve araştırmacı yazar.',
    url: `${SITE_ORIGIN}/dijital-hezarfen`,
    sameAs: []
  }
};

export const CORE_SEO_ROUTES = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'daily',
    title: 'Dijital Hezarfen | Girişimcilik Akademisi, Uygulama ve Medya Ekosistemi',
    description:
      'Kaan Karakaş ve Haydar Karakaş imzalı derinlemesine teknoloji, finans ve girişimcilik analizleri; Akademi, Uygulama ve Büyüme & Yatırım ekosistemi.',
    h1: 'Dijital Hezarfen: Teknoloji, Finans ve Girişimcilik Yayınları',
    lead:
      'Girişimcileri yetiştiren, fikirleri çalışan ürünlere dönüştüren ve şirketleri sürdürülebilir büyümeye taşıyan akademi, uygulama ve medya ekosistemi.',
    highlights: [
      'Öne Çıkan Yazar Yayınları (Kaan Karakaş & Haydar Karakaş)',
      'Yapay zekâ ekonomisi, kurumsal strateji ve uygulama rehberleri',
      'Dijital Hezarfen YouTube kanalı video analizleri',
      'Akademi, Uygulama ve Büyüme & Yatırım sütunları'
    ]
  },
  {
    path: '/yayinlar',
    priority: '0.9',
    changefreq: 'daily',
    title: 'Yayınlarımız | Makaleler, Analizler ve Rehberler — Dijital Hezarfen',
    description:
      'Yapay zekâ, finansal denetim, yazılım, growth stratejisi ve girişimcilik ekonomisi üzerine özgün dosya analizleri, haberler ve uygulama rehberleri.',
    h1: 'Dijital Hezarfen Yayınları: Analizler, Rehberler ve Teknoloji Gündemi',
    lead:
      'Teknoloji ekonomisi, finansal okuryazarlık, yapay zekâ otomasyonları ve startup stratejileri üzerine yayımlanan tüm içerikler.'
  },
  {
    path: '/dijital-hezarfen',
    priority: '0.85',
    changefreq: 'weekly',
    title: 'Dijital Hezarfen Nedir? Vizyon ve Ekosistem Modeli',
    description:
      'Bilgiyi girişime, girişimi sürdürülebilir büyümeye dönüştüren bütünleşik akademi, yazılım & AI MVP uygulama ve yatırım hazırlık ekosistemi.',
    h1: 'Bilgiyi girişime, girişimi küresel büyümeye dönüştüren ekosistem',
    lead:
      'Eğitim, teknoloji geliştirme, pazarlama, satış, finans ve yönetim disiplinlerini tek bir girişimcilik çatısında birleştiriyoruz.'
  },
  {
    path: '/hakkimizda',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Hakkımızda | Hikâyemiz, Vizyonumuz ve Ekip — Dijital Hezarfen',
    description:
      'Dijital Hezarfen kurucu kadrosu, hezarfen yaklaşımı, vizyonumuz, misyonumuz ve girişimlere sunduğumuz somut değer.',
    h1: 'Farklı disiplinleri aynı büyüme hedefinde birleştiriyoruz',
    lead:
      'Disiplinler arası bilgiyi ürüne ve gelire dönüştüren kurucu ekibimiz, mentorluk yapımız ve çalışma ilkelerimiz.'
  },
  {
    path: '/akademi',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Dijital Hezarfen Akademi | Girişimcilik Tüneli ve Modüler Eğitimler',
    description:
      'Teorinin ötesinde, gerçek vaka çalışmalarıyla kurucu refleksi kazandıran Girişimcilik Tüneli ve uygulamalı teknoloji, satış ve finans eğitimleri.',
    h1: 'Akademi: Öğrenmeden Üretime Geçiş Ekosistemi',
    lead:
      'Girişimci adaylarını ve ekipleri problem keşfi, ürün geliştirme, büyüme ve yatırım hazırlığı aşamalarında sahaya hazırlar.'
  },
  {
    path: '/akademi/girisimcilik-tuneli',
    priority: '0.85',
    changefreq: 'weekly',
    title: 'Girişimcilik Tüneli | 3-5 Aylık Yoğun Kurucu Yetiştirme Programı',
    description:
      'Fikir aşamasından çalışan ürüne ve ilk müşteriye uzanan 3-5 aylık uygulamalı Girişimcilik Tüneli müfredatı ve kabul kriterleri.',
    h1: 'Girişimcilik Tüneli: Fikirden Çalışan Girişime Yoğun Program',
    lead:
      '3-5 aylık program boyunca problem doğrulama, AI destekli MVP üretimi, müşteri kazanımı ve yatırımcı sunumu pratikleri.'
  },
  {
    path: '/akademi/egitimler',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Modüler Eğitimler | Teknoloji, Pazarlama, Finans ve Liderlik',
    description:
      'Girişimciler ve şirket ekipleri için özelleştirilmiş yazılım, yapay zekâ, B2B satış, finansal modelleme ve yönetim eğitim modülleri.',
    h1: 'Modüler Eğitimler ve Uygulamalı Atölyeler',
    lead:
      'İhtiyaca göre seçilebilen yoğun eğitim modülleri ile ürün, gelir ve operasyon kaslarını güçlendirin.'
  },
  {
    path: '/akademi/pazarlama-satis',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Pazarlama ve Satış Eğitimleri | Dijital Hezarfen Akademi',
    description:
      'Dijital pazarlama hunileri, marka konumlandırma, B2B satış pipeline yönetimi ve büyüme metrikleri üzerine uygulamalı eğitimler.',
    h1: 'Pazarlama, Büyüme ve B2B Satış Akademi Modülleri',
    lead: 'Sürdürülebilir müşteri edinme kanalları kurma ve satış dönüşüm oranlarını optimize etme eğitimi.'
  },
  {
    path: '/akademi/teknoloji-yapay-zeka',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Teknoloji ve Yapay Zekâ Eğitimleri | Dijital Hezarfen Akademi',
    description:
      'Yapay zekâ destekli ürün geliştirme, LLM iş akışları, otomasyon sistemleri ve teknik mimari okuryazarlığı eğitimleri.',
    h1: 'Teknoloji, Yazılım ve Yapay Zekâ Akademi Modülleri',
    lead: 'AI ajanları, otomasyon araçları ve hızlı MVP geliştirme pratiklerini sahaya indiriyoruz.'
  },
  {
    path: '/akademi/finans-hukuk-yonetim',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Finans, Hukuk ve Yönetim Eğitimleri | Dijital Hezarfen Akademi',
    description:
      'Girişimler için birim ekonomisi, nakit akışı yönetimi, şirketleşme hukuku, paydaş sözleşmeleri ve ekip liderliği eğitimleri.',
    h1: 'Finans, Hukuk ve Yönetim Akademi Modülleri',
    lead: 'Nakit akışı disiplini, yatırımcı sözleşmeleri ve ölçeklenen organizasyon yönetimi.'
  },
  {
    path: '/akademi/kurumsal',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Kurumsal Akademi ve İnovasyon Programları | Dijital Hezarfen',
    description:
      'Şirket içi girişimcilik (intrapreneurship), AI adaptasyonu ve yönetici geliştirme programları.',
    h1: 'Kurumsal Akademi ve Kurum İçi Girişimcilik',
    lead: 'Kurumsal ekiplere startup hızında ürünleştirme, yapay zekâ entegrasyonu ve yenilikçi yönetim kültürü.'
  },
  {
    path: '/uygulama',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Uygulama Hizmetleri | Yazılım, AI MVP, Pazarlama ve CRM Sistemleri',
    description:
      'Girişimlerin yanında bizzat inşa eden ekip: yazılım ve AI MVP geliştirme, otomasyon, büyüme pazarlaması, B2B satış, CRM ve finans altyapısı.',
    h1: 'Uygulama: Fikirden Çalışan Sisteme Ortak Üretim',
    lead:
      'Sadece danışmanlık raporu değil; çalışan ürün, otomasyon hattı, satış motoru ve finansal altyapıyı birlikte kuruyoruz.'
  },
  {
    path: '/uygulama/yazilim-mvp',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Yazılım & AI MVP Geliştirme | Dijital Hezarfen Uygulama',
    description:
      'Hızlı doğrulama odaklı web, mobil, SaaS ve yapay zekâ destekli çalışan MVP geliştirme hizmeti.',
    h1: 'Yazılım & Yapay Zekâ Destekli MVP Geliştirme',
    lead: 'Doğru kapsam ve modern teknoloji yığını ile haftalar içinde pazara hazır çalışan ürün geliştirin.'
  },
  {
    path: '/uygulama/yapay-zeka-otomasyon',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Yapay Zekâ ve İş Süreci Otomasyonu | Dijital Hezarfen',
    description:
      'LLM ajanları, WhatsApp/CRM otomasyonları ve operasyonel iş akışı entegrasyonları ile verimlilik mimarisi.',
    h1: 'Yapay Zekâ Ajanları ve Süreç Otomasyonu',
    lead: 'Tekrarlayan operasyonları otomatikleştiren ölçülebilir AI sistemleri ve özel entegrasyonlar.'
  },
  {
    path: '/uygulama/dijital-pazarlama-growth',
    priority: '0.75',
    changefreq: 'monthly',
    title: 'Dijital Pazarlama ve Growth Sistemleri | Dijital Hezarfen',
    description:
      'Veriye dayalı müşteri kazanımı, SEO/GEO büyümesi, performans kampanyaları ve içerik hunisi kurulumu.',
    h1: 'Dijital Pazarlama ve Sürdürülebilir Growth Altyapısı',
    lead: 'Deneysel growth döngüleri, SEO/GEO görünürlüğü ve ölçümlenebilir talep üretimi.'
  },
  {
    path: '/uygulama/satis-crm',
    priority: '0.75',
    changefreq: 'monthly',
    title: 'B2B Satış ve CRM Altyapısı Kurulumu | Dijital Hezarfen',
    description:
      'Gelir operasyonları (RevOps), pipeline yönetimi, CRM kurulumu ve tekrarlanabilir B2B satış süreçleri.',
    h1: 'B2B Satış Süreçleri ve CRM Operasyonları',
    lead: 'Lead yakalamadan kapanışa kadar izlenebilir ve ölçeklenebilir gelir makinesi kurun.'
  },
  {
    path: '/uygulama/finans-hukuk',
    priority: '0.75',
    changefreq: 'monthly',
    title: 'Finansal Modelleme ve Startup Hukuku Desteği | Dijital Hezarfen',
    description:
      'Birim ekonomisi, bütçe ve nakit akışı modelleme ile yatırım ve ticari sözleşme süreçleri için yapılandırma.',
    h1: 'Finansal Disiplin ve Hukuki Altyapı Hazırlığı',
    lead: 'Yatırımcı düzeyinde finansal projeksiyonlar ve sağlam kurumsal temel.'
  },
  {
    path: '/uygulama/yonetim-organizasyon',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Yönetim ve Organizasyon Tasarımı | Dijital Hezarfen',
    description:
      'OKR sistemleri, ekip yapılanması, rol tanımları ve ölçeklenme dönemi yönetim altyapısı.',
    h1: 'Yönetim, Liderlik ve Organizasyon Mimarisi',
    lead: 'Büyüyen girişimlerde operasyonel kaosu önleyen net karar ve takip mekanizmaları.'
  },
  {
    path: '/uygulama/medya-tasarim',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Marka Tasarımı ve Medya Üretimi | Dijital Hezarfen',
    description:
      'Kurumsal kimlik, ürün arayüz tasarımı, dijital yayın ve video içerik üretim sistemleri.',
    h1: 'Marka Tasarımı ve Stratejik Medya Üretimi',
    lead: 'Güven inşa eden ürün arayüzleri, marka dili ve yüksek otoriteye sahip içerik varlıkları.'
  },
  {
    path: '/buyume-yatirim',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Büyüme & Yatırım | Yatırıma Hazırlık ve Küresel Ölçeklenme',
    description:
      'Girişimleri finansal modelleme, pitch deck kurgusu, yatırımcı eşleştirmeleri ve uluslararası pazar açılımıyla bir sonraki faza hazırlıyoruz.',
    h1: 'Büyüme & Yatırım: Ölçekten Küresel Pazara Geçiş',
    lead:
      'Yatırımcı karşısına tam hazır çıkan girişimler ve tekrarlanabilir gelir modelleriyle uluslararası büyüme.'
  },
  {
    path: '/buyume-yatirim/yatirima-hazirlik',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Yatırıma Hazırlık Programı | Pitch Deck, Değerleme ve Veri Odası',
    description:
      'Melek yatırımcı ve VC fon görüşmeleri öncesinde finansal model, veri odası, hikâye kurgusu ve mock pitch hazırlığı.',
    h1: 'Yatırıma Hazırlık: Veri Odası, Değerleme ve Mock Pitch',
    lead: 'Yatırım sürecinde zaman kaybını önleyen eksiksiz sunum ve finansal hazırlık paketi.'
  },
  {
    path: '/buyume-yatirim/uluslararasilasma',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Küresel Büyüme ve Uluslararasılaşma | Dijital Hezarfen',
    description:
      'Türk girişimlerinin Avrupa, MENA ve ABD pazarlarına açılım stratejileri, konumlandırma ve ilk küresel müşteri kanalları.',
    h1: 'Uluslararasılaşma ve Küresel Pazarlara Açılım',
    lead: 'Doğru pazar seçimi, döviz bazlı fiyatlama ve sınır ötesi büyüme mimarisi.'
  },
  {
    path: '/girisimler',
    priority: '0.85',
    changefreq: 'weekly',
    title: 'Girişimler İçin Aşamaya Göre Yol Haritası | Dijital Hezarfen',
    description:
      'Fikir aşamasından Pre-Seed, Seed, Series A ve Scale-up evrelerine kadar girişiminizin bugünkü aşamasına özel destek mimarisi.',
    h1: 'Girişim Aşamanıza Özel Bütünleşik Destek Modeli',
    lead: 'Her aşamanın gerçek darboğazına uygun eğitim, uygulama ve büyüme desteği.'
  },
  {
    path: '/girisimler/fikir-asamasi',
    priority: '0.75',
    changefreq: 'monthly',
    title: 'Fikir Aşaması Girişimler | Problem Doğrulama ve İlk Prototip',
    description: 'Fikirden ilk müşteri doğrulamasına ve çalışan MVP’ye giden en güvenli yol haritası.',
    h1: 'Fikir Aşaması: Problem Keşfi ve İş Modeli Doğrulama',
    lead: 'Aylar kaybetmeden doğru problemi doğrulayın ve ilk çalışan prototipi ortaya çıkarın.'
  },
  {
    path: '/girisimler/pre-seed',
    priority: '0.75',
    changefreq: 'monthly',
    title: 'Pre-Seed Girişimler | İlk Gelir ve Erken Yatırım Hazırlığı',
    description: 'Çalışan ürüne sahip erken aşama girişimler için müşteri edinme ve ilk yatırım turu hazırlığı.',
    h1: 'Pre-Seed Aşaması: İlk Müşteri ve Pazar Uyumu',
    lead: 'İlk ödeme yapan kullanıcıları kazanın ve tohum öncesi yatırım anlatınızı kanıtlarla kurun.'
  },
  {
    path: '/girisimler/seed',
    priority: '0.75',
    changefreq: 'monthly',
    title: 'Seed Aşaması Girişimler | Ürün-Pazar Uyumu ve Büyüme Sistemi',
    description: 'Product-Market Fit sonrası satış hunisi, ekip kurulumu ve ölçeklenebilir gelir büyümesi.',
    h1: 'Seed Aşaması: Tekrarlanabilir Gelir ve Organizasyon',
    lead: 'Kurucu bağımlı satıştan sistemli büyüme ekibine ve sağlıklı birim ekonomisine geçin.'
  },
  {
    path: '/girisimler/series-a-ve-sonrasi',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Series A ve Sonrası | Kurumsal Ölçeklenme ve Global Pazarlar',
    description: 'Büyüme evresindeki şirketler için ileri RevOps, yönetim sistemleri ve sınır ötesi açılım.',
    h1: 'Series A ve Sonrası: Ölçeklenen Sistem ve Strateji',
    lead: 'Çok kanallı büyüme, departman liderliği ve kurumsal yatırım turları.'
  },
  {
    path: '/girisimler/scale-up',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Scale-up Programı | Yüksek Büyümeli Teknoloji Şirketleri',
    description: 'Hızlı ölçeklenen şirketler için AI verimlilik dönüşümü ve uluslararası büyüme hızlandırması.',
    h1: 'Scale-up: Yapay Zekâ Destekli Operasyon ve Küresel Ölçek',
    lead: 'Maliyetleri doğrusal artırmadan geliri katlayan modern organizasyon ve teknoloji mimarisi.'
  },
  {
    path: '/kurumsal',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Kurumsal Çözümler ve Girişim İş Birlikleri | Dijital Hezarfen',
    description:
      'Kurumlar için açık inovasyon, girişim stüdyosu iş birlikleri, AI dönüşüm atölyeleri ve sponsorlu hızlandırma programları.',
    h1: 'Kurumsal İş Birlikleri ve Kurum İçi Dönüşüm',
    lead: 'Şirketlerin teknoloji ve girişimcilik çevikliğini kurumsal operasyonlarına entegre ediyoruz.'
  },
  {
    path: '/medya',
    priority: '0.85',
    changefreq: 'weekly',
    title: 'Medya & Video Yayınları | Dijital Hezarfen YouTube ve Podcast',
    description:
      'Dijital Hezarfen YouTube kanalındaki vaka analizleri, strateji değerlendirmeleri, girişimcilik dosyaları ve medya serileri.',
    h1: 'Dijital Hezarfen Medya: Video Analizler ve Strateji Yayınları',
    lead: 'Gerçek şirket çöküşleri, yapay zekâ rekabeti ve kurucu hikâyeleri üzerine derinlemesine video içerikler.'
  },
  {
    path: '/iletisim',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'İletişim | İş Birliği, Başvuru ve Basın — Dijital Hezarfen',
    description:
      'Dijital Hezarfen ekibiyle akademi, uygulama hizmetleri, kurumsal iş birlikleri veya yayınlar hakkında doğrudan iletişime geçin.',
    h1: 'Dijital Hezarfen İletişim ve Başvuru Kanalları',
    lead: 'Girişiminiz veya kurumsal iş birliği talebiniz için bize ulaşın.'
  },
  {
    path: '/sik-sorulan-sorular',
    priority: '0.85',
    changefreq: 'weekly',
    title: 'Sık Sorulan Sorular (SSS) | Dijital Hezarfen Ekosistemi',
    description:
      'Girişimcilik Tüneli, eğitimler, AI MVP geliştirme, ücretlendirme, yatırım hazırlığı ve çalışma modeli hakkında tüm soruların yanıtları.',
    h1: 'Dijital Hezarfen Hakkında Sık Sorulan Sorular',
    lead: 'Program kabul şartları, uygulama süreçleri, teknoloji desteği ve büyüme modeliyle ilgili kapsamlı yanıtlar.'
  },
  {
    path: '/basvur',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Başvur | Girişimcilik Tüneli ve Ekosistem Başvuru Sayfası',
    description: 'Girişiminiz, iş birliği talebiniz veya Akademi/Uygulama programları için online başvuru adımları.',
    h1: 'Dijital Hezarfen Ekosistemine Başvur',
    lead: 'Girişiminizin aşamasını paylaşın, sizin için en doğru programı birlikte belirleyelim.'
  },
  {
    path: '/acik-kaynak-kutuphanesi',
    priority: '0.8',
    changefreq: 'weekly',
    title: 'Açık Kaynak Araç Kütüphanesi (199+ Araç) | Dijital Hezarfen',
    description:
      'Girişimciler ve ekipler için yapay zekâ, otomasyon, yazılım geliştirme, pazarlama ve analiz alanında derlenmiş açık kaynak araç kütüphanesi.',
    h1: 'Girişimciler İçin Açık Kaynak Araç Kütüphanesi',
    lead: 'Maliyeti düşüren ve üretim hızını artıran seçili açık kaynak yazılım ve AI araçları.'
  }
];

export function getRouteSeoMeta(pathname) {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';
  const aliasMap = {
    '/etkinlikler': '/yayinlar',
    '/icerikler': '/yayinlar',
    '/acik-kaynak-araclar': '/acik-kaynak-kutuphanesi'
  };
  const target = aliasMap[clean] || clean;
  return CORE_SEO_ROUTES.find((r) => r.path === target) || CORE_SEO_ROUTES[0];
}
