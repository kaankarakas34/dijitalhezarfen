import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Newspaper,
  UserRound,
  Share2,
  Check,
  Copy,
  ExternalLink,
  List,
  ArrowUpRight,
  BookOpen
} from 'lucide-react';
import { articleCategories, articles, getArticleBySlug, localizedArticle } from '../data/articles';

const siteName = 'Dijital Hezarfen';
const siteBaseUrl = 'https://dijitalhezarfen.com';
const defaultTitle = 'Dijital Hezarfen | Girişimcilik Akademisi & Uygulama Ekosistemi';
const defaultDescription = 'Dijital Hezarfen; girişimcileri yetiştiren, fikirleri girişime dönüştüren ve şirketleri büyüten akademi, uygulama ve büyüme ekosistemidir.';

function setMetaAttribute(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'content') return;
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }
  element.setAttribute('content', attributes.content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function setJsonLd(article, categoryLabel, url, imageUrl) {
  let element = document.head.querySelector('#article-json-ld');
  if (!element) {
    element = document.createElement('script');
    element.id = 'article-json-ld';
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  const articleCanonical = `${siteBaseUrl}${article.path}`;

  const graph = [
    {
      '@type': 'TechArticle',
      '@id': `${articleCanonical}#article`,
      isPartOf: {
        '@type': 'WebPage',
        '@id': articleCanonical
      },
      headline: article.title,
      name: article.title,
      description: article.desc,
      image: [imageUrl],
      author: {
        '@type': 'Person',
        name: article.author,
        jobTitle: 'Kurucu & Teknoloji Girişimcisi',
        url: `${siteBaseUrl}/#/dijital-hezarfen`
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: siteBaseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteBaseUrl}/favicon.svg`,
          width: 60,
          height: 60
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleCanonical
      },
      datePublished: article.publishedAt,
      dateModified: article.modifiedAt || article.publishedAt,
      articleSection: categoryLabel || 'Analiz',
      keywords: article.keywords?.join(', '),
      inLanguage: 'tr-TR',
      citation: article.sources?.map((source) => source.url)
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${articleCanonical}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Ana Sayfa',
          item: `${siteBaseUrl}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Yayınlar',
          item: `${siteBaseUrl}/#/yayinlar`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: articleCanonical
        }
      ]
    }
  ];

  if (article.slug === 'gpt-6-astra-ve-agi-cagi') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${articleCanonical}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'GPT-6 Astra nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'GPT-6 Astra, OpenAI tarafından Eylül 2026’da duyurulan; tarayıcı kullanabilen, form doldurabilen, CRM güncelleyen, veri analiz eden ve uçtan uca otonom yazılım geliştirebilen yeni nesil agent modelidir.'
          }
        },
        {
          '@type': 'Question',
          name: 'AGI nedir ve Astra AGI sayılır mı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AGI (Yapay Genel Zekâ), ekonomik açıdan değerli işlerin çoğunda insanlardan daha iyi performans gösteren otonom sistemlerdir. Astra tek başına tam AGI olarak nitelendirilmese de, ARC-AGI-3 ve bilgisayar kullanım benchmarklarında dijital iş gücü eşiğine ulaşıldığını göstermektedir.'
          }
        },
        {
          '@type': 'Question',
          name: 'AI insanların yerini alacak mı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'İlk aşamada meslekler değil; işlerin içindeki ölçülebilir, yapılandırılmış ve dijital rutin görevler otomatikleşecektir. 1 uzman çalışan + güçlü AI agentlar ile çalışan daha küçük ve yüksek verimli ekipler öne çıkacaktır.'
          }
        },
        {
          '@type': 'Question',
          name: 'Yapay zekâ ekonomisinde cost per completed task neden önemlidir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Agent döneminde asıl rekabet token fiyatı (cost per token) değil, bir işin baştan sona hatasız tamamlanmasının şirkete toplam maliyetidir (cost per completed task).'
          }
        }
      ]
    });
  }

  element.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  });
}

function getAbsoluteImageUrl(image) {
  if (!image) return `${siteBaseUrl}/favicon.svg`;
  if (/^https?:\/\//.test(image)) return image;
  return `${siteBaseUrl}${image}`;
}

function normalizeArticle(rawText, article) {
  let normalizedText = rawText
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line, index) => !(index === 0 && (line === article.title || line.startsWith('Bugün Apple’da yalnızca bir CEO değişmiyor'))))
    .filter((line) => !(article.sources?.length && line.startsWith('Kaynaklar:')));

  if (article.replaceTodayWithDate) {
    normalizedText = normalizedText.map((line) =>
      line
        .replace(/^Bugün Apple’da/, '31 Ağustos’ta Apple’da')
        .replace(/^Bugün Apple’ın/, '31 Ağustos itibarıyla Apple’ın')
        .replace(/^Reuters bugün/, 'Reuters’ın 31 Ağustos değerlendirmesinde')
        .replace(/^Bugün\b/, '31 Ağustos itibarıyla')
        .replace(/\bbugün\b/g, '31 Ağustos itibarıyla')
    );
  }

  return normalizedText;
}

function isLegacySectionHeading(line) {
  if (/^!\[[^\]]*\]\([^)]+\)$/.test(line)) return false;
  if (line.length > 95) return false;
  if (/[.!?:]$/.test(line)) return false;
  const wordCount = line.split(/\s+/).length;
  if (wordCount >= 4 && wordCount <= 14) return true;
  return /^(Jobs|Asıl|Bir growth|Apple’ın|Cook’un|Daha da|Ama|Belki|Peki|Burası|Şimdi|Tim Cook’un|Jobs yaşasaydı|Bu kelime|MarketWatch|Ve bütün|Growth açısından)/.test(line);
}

function parseMarkdownImage(line) {
  const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (!match) return null;
  return {
    alt: match[1] || 'Makale içi görsel',
    src: match[2]
  };
}

// Helper to parse inline markdown: bold, markdown links, citations
function renderFormattedContent(text, onNavigate, sources = []) {
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\[\d+\]|\*\*([^*]+)\*\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const fullMatch = match[0];

    if (fullMatch.startsWith('**')) {
      parts.push(
        <strong key={`b-${match.index}`} className="text-white font-semibold">
          {match[4]}
        </strong>
      );
    } else if (fullMatch.startsWith('[') && fullMatch.includes('](')) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isInternal = linkUrl.startsWith('/') || linkUrl.startsWith('#');

      parts.push(
        <a
          key={`l-${match.index}`}
          href={isInternal ? `#${linkUrl.replace(/^#/, '')}` : linkUrl}
          onClick={(e) => {
            if (isInternal) {
              e.preventDefault();
              onNavigate(linkUrl.replace(/^#/, ''));
            }
          }}
          target={isInternal ? undefined : '_blank'}
          rel={isInternal ? undefined : 'noreferrer noopener'}
          className="text-cyber-cyan underline underline-offset-4 decoration-cyan-500/40 hover:decoration-cyan-400 font-medium transition-all"
        >
          {linkText}
        </a>
      );
    } else if (/^\[\d+\]$/.test(fullMatch)) {
      const citationNum = parseInt(fullMatch.replace(/[^\d]/g, ''), 10);
      const sourceObj = sources?.[citationNum - 1];
      const targetUrl = sourceObj?.url;

      parts.push(
        <a
          key={`c-${match.index}`}
          href={targetUrl || '#kaynaklar'}
          target={targetUrl ? '_blank' : undefined}
          rel={targetUrl ? 'noreferrer noopener' : undefined}
          onClick={(e) => {
            if (!targetUrl) {
              e.preventDefault();
              const el = document.getElementById(`kaynak-${citationNum}`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('ring-2', 'ring-cyan-400', 'bg-cyan-500/25');
                setTimeout(() => {
                  el.classList.remove('ring-2', 'ring-cyan-400', 'bg-cyan-500/25');
                }, 2500);
              }
            }
          }}
          className="inline-flex items-center gap-0.5 text-cyber-cyan hover:text-white font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-cyan-500/15 hover:bg-cyan-500/30 border border-cyan-500/30 transition-all mx-0.5 align-baseline hover:scale-105 shadow-sm shadow-cyan-500/20 cursor-pointer group/cite"
          title={sourceObj ? `[${citationNum}] ${sourceObj.label}\nKaynağı yeni sekmede açmak için tıklayın` : `Kaynak [${citationNum}]`}
        >
          <span>[{citationNum}]</span>
          {targetUrl ? (
            <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/cite:opacity-100 transition-opacity shrink-0" />
          ) : null}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function YayinDetay({ slug, lang, onNavigate }) {
  const [articleLines, setArticleLines] = useState([]);
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  const rawArticle = getArticleBySlug(slug);
  const articleMeta = rawArticle ? localizedArticle(rawArticle, lang) : null;
  const categoryLabel = articleMeta
    ? articleCategories.find((category) => category.id === articleMeta.category)?.label[lang === 'en' ? 'en' : 'tr']
    : '';
  const firstParagraph = useMemo(() => articleMeta?.desc || articleLines[0] || '', [articleLines, articleMeta?.desc]);
  const bodyLines = useMemo(() => articleLines, [articleLines]);

  const relatedArticles = useMemo(() => {
    return articles
      .filter((a) => a.slug !== slug)
      .slice(0, 2)
      .map((a) => localizedArticle(a, lang));
  }, [slug, lang]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tocHeadings = useMemo(() => {
    const list = [];
    bodyLines.forEach((line) => {
      if (line.startsWith('## ')) {
        const title = line.replace(/^##\s+/, '');
        list.push({ title, slug: slugify(title), level: 2 });
      } else if (line.startsWith('### ')) {
        const title = line.replace(/^###\s+/, '');
        list.push({ title, slug: slugify(title), level: 3 });
      } else if (isLegacySectionHeading(line)) {
        list.push({ title: line, slug: slugify(line), level: 2 });
      }
    });
    return list;
  }, [bodyLines]);

  useEffect(() => {
    if (!articleMeta) {
      document.title = defaultTitle;
      setMetaAttribute('meta[name="description"]', { name: 'description', content: defaultDescription });
      return;
    }

    const canonicalUrl = `${siteBaseUrl}${articleMeta.path}`;
    const imageUrl = getAbsoluteImageUrl(articleMeta.image);
    const seoTitle = `${articleMeta.title} | ${siteName}`;

    document.title = seoTitle;
    setCanonical(canonicalUrl);

    setMetaAttribute('meta[name="description"]', { name: 'description', content: articleMeta.desc });
    setMetaAttribute('meta[name="author"]', { name: 'author', content: articleMeta.author });
    setMetaAttribute('meta[name="keywords"]', { name: 'keywords', content: articleMeta.keywords?.join(', ') || articleMeta.title });
    setMetaAttribute('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });

    setMetaAttribute('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    setMetaAttribute('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    setMetaAttribute('meta[property="og:title"]', { property: 'og:title', content: seoTitle });
    setMetaAttribute('meta[property="og:description"]', { property: 'og:description', content: articleMeta.desc });
    setMetaAttribute('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMetaAttribute('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    setMetaAttribute('meta[property="og:image:alt"]', { property: 'og:image:alt', content: articleMeta.imageAlt || articleMeta.title });
    setMetaAttribute('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' });
    setMetaAttribute('meta[property="og:image:height"]', { property: 'og:image:height', content: '675' });
    setMetaAttribute('meta[property="og:locale"]', { property: 'og:locale', content: 'tr_TR' });
    setMetaAttribute('meta[property="article:author"]', { property: 'article:author', content: articleMeta.author });
    setMetaAttribute('meta[property="article:section"]', { property: 'article:section', content: categoryLabel });
    setMetaAttribute('meta[property="article:published_time"]', { property: 'article:published_time', content: articleMeta.publishedAt });
    setMetaAttribute('meta[property="article:modified_time"]', { property: 'article:modified_time', content: articleMeta.modifiedAt || articleMeta.publishedAt });

    setMetaAttribute('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMetaAttribute('meta[name="twitter:title"]', { name: 'twitter:title', content: seoTitle });
    setMetaAttribute('meta[name="twitter:description"]', { name: 'twitter:description', content: articleMeta.desc });
    setMetaAttribute('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    setMetaAttribute('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: articleMeta.imageAlt || articleMeta.title });

    setJsonLd(articleMeta, categoryLabel, canonicalUrl, imageUrl);
  }, [articleMeta, categoryLabel]);

  useEffect(() => {
    if (!articleMeta?.source) return;

    fetch(articleMeta.source)
      .then((response) => response.text())
      .then((text) => setArticleLines(normalizeArticle(text, articleMeta)))
      .catch(() => setArticleLines([]));
  }, [articleMeta]);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${articleMeta?.title}\n\n`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${articleMeta?.title} - ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  if (!articleMeta) {
    return (
      <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen pt-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold text-white">Yayın bulunamadı</h1>
          <button
            onClick={() => onNavigate('/yayinlar')}
            className="mt-8 px-5 py-3 rounded-xl bg-gradient-cyber text-[#0B0F19] text-sm font-bold cursor-pointer"
          >
            Yayınlara dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-white">
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      <article className="pt-28">
        <header className="border-b border-white/5 bg-[#080B12] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
            <button
              onClick={() => onNavigate('/yayinlar')}
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Yayınlara dön
            </button>

            {/* Semantic Breadcrumbs */}
            <nav aria-label="Ekmek kırıntısı" className="flex items-center gap-2 text-xs text-gray-500 mb-4">
              <a href="#/" onClick={(e) => { e.preventDefault(); onNavigate('/'); }} className="hover:text-cyber-cyan transition-colors">
                Ana Sayfa
              </a>
              <span>/</span>
              <a href="#/yayinlar" onClick={(e) => { e.preventDefault(); onNavigate('/yayinlar'); }} className="hover:text-cyber-cyan transition-colors">
                Yayınlar
              </a>
              <span>/</span>
              <span className="text-gray-400 truncate max-w-xs">{categoryLabel}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 text-cyber-cyan px-2.5 py-1 font-bold border border-cyan-500/20">
                <Newspaper className="w-3.5 h-3.5" />
                {categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <time dateTime={articleMeta.publishedAt}>{articleMeta.date}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                {articleMeta.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5 text-gray-300">
                <UserRound className="w-3.5 h-3.5 text-cyan-400" />
                Yazar: <span className="font-semibold text-white">{articleMeta.author}</span>
              </span>
              {articleMeta.sources?.length ? (
                <button
                  type="button"
                  onClick={() => document.getElementById('kaynaklar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-cyber-cyan transition-colors cursor-pointer"
                  title="Kaynaklar bölümüne git"
                >
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="underline underline-offset-2 decoration-cyan-500/30 hover:decoration-cyan-400 font-semibold text-gray-300 hover:text-white">
                    {articleMeta.sources.length} Kaynak
                  </span>
                </button>
              ) : null}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl tracking-tight">
              {articleMeta.title}
            </h1>

            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed mt-6 max-w-3xl font-light border-l-2 border-cyan-500/40 pl-4 bg-white/[0.01]">
              {firstParagraph}
            </p>

            {/* Social Share Bar */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 flex items-center gap-1.5 mr-2">
                  <Share2 className="w-3.5 h-3.5 text-cyber-cyan" /> Paylaş:
                </span>
                <button
                  onClick={handleShareTwitter}
                  title="X (Twitter) ile Paylaş"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  X (Twitter)
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  title="LinkedIn ile Paylaş"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  LinkedIn
                </button>
                <button
                  onClick={handleShareWhatsApp}
                  title="WhatsApp ile Paylaş"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  WhatsApp
                </button>
                <button
                  onClick={handleCopyLink}
                  title="Bağlantıyı Kopyala"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1 text-xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>

              {articleMeta.keywords?.length ? (
                <div className="flex flex-wrap gap-1.5">
                  {articleMeta.keywords.slice(0, 3).map((kw) => (
                    <span key={kw} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                      #{kw}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </header>

        {/* Featured Hero Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <figure className="rounded-2xl overflow-hidden border border-white/10 bg-white/3 shadow-2xl shadow-cyan-500/5">
            <img
              src={articleMeta.image}
              alt={articleMeta.imageAlt || articleMeta.title}
              className="w-full aspect-[16/9] sm:aspect-[16/8] object-cover"
              loading="eager"
              fetchPriority="high"
            />
            {articleMeta.imageAlt ? (
              <figcaption className="text-center text-[11px] text-gray-500 py-2.5 px-4 bg-[#080B12] border-t border-white/5">
                {articleMeta.imageAlt}
              </figcaption>
            ) : null}
          </figure>
        </div>

        {/* Article Body Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {/* Table of Contents (İçindekiler) */}
          {tocHeadings.length > 3 ? (
            <div className="mb-12 rounded-2xl border border-white/10 bg-[#0A0E17]/80 backdrop-blur-sm p-6 sm:p-7">
              <div className="flex items-center gap-2.5 text-white font-extrabold text-sm sm:text-base mb-4">
                <List className="w-4 h-4 text-cyber-cyan" />
                <span>İçindekiler</span>
              </div>
              <nav aria-label="İçindekiler Tablosu">
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-light grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {tocHeadings.map((h, i) => (
                    <li key={`${h.slug}-${i}`} className={h.level === 3 ? 'pl-4 text-gray-500' : ''}>
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById(h.slug);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="text-left hover:text-cyber-cyan transition-colors line-clamp-1 inline-flex items-center gap-1.5 cursor-pointer w-full group/toc"
                      >
                        <span className="text-[10px] text-cyan-500/60 font-mono group-hover/toc:text-cyber-cyan transition-colors">{(i + 1).toString().padStart(2, '0')}.</span>
                        <span className="truncate">{h.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : null}

          {/* Body Lines */}
          <div className="space-y-6">
            {bodyLines.map((line, index) => {
              const markdownImage = parseMarkdownImage(line);

              if (markdownImage) {
                return (
                  <figure key={`${markdownImage.src}-${index}`} className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-white/3">
                    <img src={markdownImage.src} alt={markdownImage.alt} className="w-full h-auto object-contain bg-[#080B12]" loading="lazy" />
                  </figure>
                );
              }

              // Heading Level 2 (##)
              if (line.startsWith('## ')) {
                const title = line.replace(/^##\s+/, '');
                const headingId = slugify(title);
                return (
                  <h2
                    key={`${title}-${index}`}
                    id={headingId}
                    className="text-2xl sm:text-3xl font-extrabold text-white leading-tight pt-10 pb-2 scroll-mt-24 border-t border-white/5 flex items-center justify-between group"
                  >
                    <span>{title}</span>
                    <a href={`#${headingId}`} className="text-gray-600 hover:text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity text-sm ml-2 font-mono">
                      #
                    </a>
                  </h2>
                );
              }

              // Heading Level 3 (###)
              if (line.startsWith('### ')) {
                const title = line.replace(/^###\s+/, '');
                const headingId = slugify(title);
                return (
                  <h3
                    key={`${title}-${index}`}
                    id={headingId}
                    className="text-lg sm:text-xl font-bold text-gray-100 leading-snug pt-6 pb-1 scroll-mt-24"
                  >
                    {title}
                  </h3>
                );
              }

              // Legacy Heading Support
              if (isLegacySectionHeading(line)) {
                const headingId = slugify(line);
                return (
                  <h2
                    key={`${line}-${index}`}
                    id={headingId}
                    className="text-2xl sm:text-3xl font-extrabold text-white leading-tight pt-10 pb-2 scroll-mt-24 border-t border-white/5"
                  >
                    {line}
                  </h2>
                );
              }

              // Callout / Blockquote (> )
              if (line.startsWith('> ')) {
                const quoteContent = line.replace(/^>\s*/, '');
                return (
                  <aside
                    key={`quote-${index}`}
                    className="my-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-cyan-900/10 to-transparent p-5 sm:p-6 text-sm sm:text-base text-cyan-200/90 leading-relaxed font-normal shadow-lg shadow-cyan-950/20 relative"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-cyber rounded-l-2xl" />
                    <p className="pl-3">{renderFormattedContent(quoteContent, onNavigate, articleMeta.sources)}</p>
                  </aside>
                );
              }

              // Bullet List Item (- or *)
              if (line.startsWith('- ') || line.startsWith('* ')) {
                const itemContent = line.replace(/^[-*]\s+/, '');
                return (
                  <div key={`li-${index}`} className="flex items-start gap-3 pl-2 sm:pl-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-2.5 shrink-0" />
                    <p>{renderFormattedContent(itemContent, onNavigate, articleMeta.sources)}</p>
                  </div>
                );
              }

              // Standard Paragraph
              return (
                <p key={`${line.slice(0, 30)}-${index}`} className="text-sm sm:text-base text-gray-300 leading-8 font-light">
                  {renderFormattedContent(line, onNavigate, articleMeta.sources)}
                </p>
              );
            })}
          </div>

          {/* Sources Section */}
          {articleMeta.sources?.length ? (
            <div id="kaynaklar" className="mt-20 pt-10 border-t border-white/10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-cyber-cyan" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">Kaynaklar & Referanslar</h2>
              </div>
              <p className="text-xs text-gray-400 mb-6 font-light">
                Bu analizdeki teknik veriler, benchmarklar, kurumsal dokümanlar ve uzman görüşleri için başvurulan kaynaklar aşağıda listelenmiştir. Bağlantılara tıklayarak orijinal kaynakları inceleyebilirsiniz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {articleMeta.sources.map((source, sIndex) => {
                  let cleanUrl = '';
                  try {
                    const parsed = new URL(source.url);
                    cleanUrl = parsed.hostname + (parsed.pathname.length > 1 ? parsed.pathname.slice(0, 24) + '...' : '');
                  } catch {
                    cleanUrl = source.url.replace(/^https?:\/\//, '');
                  }

                  return (
                    <a
                      key={source.url}
                      id={`kaynak-${sIndex + 1}`}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/3 p-3.5 text-xs text-gray-300 hover:text-white hover:border-cyan-500/30 hover:bg-white/5 transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center font-mono text-[11px] text-cyber-cyan shrink-0 font-bold group-hover:bg-cyan-500/20 transition-colors">
                          {sIndex + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="truncate font-medium text-white group-hover:text-cyber-cyan transition-colors">{source.label}</div>
                          <div className="text-[10px] text-gray-500 truncate font-mono mt-0.5">{cleanUrl}</div>
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyber-cyan shrink-0 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          ) : null}

          {/* Author E-E-A-T Bio Box */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0C1220] to-[#080B12] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-cyber p-0.5 shrink-0 shadow-lg shadow-cyan-500/10">
              <div className="w-full h-full rounded-2xl bg-[#0B0F19] flex items-center justify-center text-cyber-cyan font-bold text-2xl font-mono">
                KK
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-lg font-extrabold text-white">{articleMeta.author}</h3>
                <span className="text-[10px] text-cyber-cyan bg-cyan-500/10 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  Kurucu & Yazar
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4">
                Dijital Hezarfen ekosisteminde girişimcilik, yapay zekâ otomasyonu, büyüme stratejileri ve teknoloji ekonomisi üzerine yayınlar hazırlamakta ve girişimcilere mentorluk yapmaktadır.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-cyber-cyan font-semibold">
                <a
                  href="#/dijital-hezarfen"
                  onClick={(e) => { e.preventDefault(); onNavigate('/dijital-hezarfen'); }}
                  className="hover:underline flex items-center gap-1"
                >
                  Hakkında <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="#/yayinlar"
                  onClick={(e) => { e.preventDefault(); onNavigate('/yayinlar'); }}
                  className="hover:underline flex items-center gap-1"
                >
                  Tüm Yayınları <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 ? (
            <div className="mt-20 pt-10 border-t border-white/10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-2.5 py-1 rounded">
                    Önerilen Okumalar
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">İlgili Analiz & Rehberler</h3>
                </div>
                <button
                  onClick={() => onNavigate('/yayinlar')}
                  className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Tümünü Gör <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    onClick={() => onNavigate(rel.path)}
                    className="rounded-2xl border border-white/5 bg-white/3 hover:border-cyan-500/30 hover:bg-white/5 transition-all p-6 cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="text-cyber-cyan font-bold uppercase text-[10px]">
                          {articleCategories.find((c) => c.id === rel.category)?.label[lang === 'en' ? 'en' : 'tr']}
                        </span>
                        <span>•</span>
                        <span>{rel.date}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-3 font-light leading-relaxed">
                        {rel.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-cyber-cyan font-semibold">
                      <span>Analizi İncele</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </article>
    </div>
  );
}
