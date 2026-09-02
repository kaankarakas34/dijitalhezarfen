import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Calendar, Clock, Newspaper, UserRound } from 'lucide-react';
import { articleCategories, getArticleBySlug, localizedArticle } from '../data/articles';

const siteName = 'Dijital Hezarfen';
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

function setJsonLd(article, categoryLabel, url, imageUrl) {
  let element = document.head.querySelector('#article-json-ld');
  if (!element) {
    element = document.createElement('script');
    element.id = 'article-json-ld';
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.desc,
    image: [imageUrl],
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${window.location.origin}/favicon.svg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    articleSection: categoryLabel,
    keywords: article.keywords?.join(', '),
    citation: article.sources?.map((source) => source.url)
  });
}

function getAbsoluteImageUrl(image) {
  if (!image) return `${window.location.origin}/favicon.svg`;
  if (/^https?:\/\//.test(image)) return image;
  return `${window.location.origin}${image}`;
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

function isSectionHeading(line) {
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

export default function YayinDetay({ slug, lang, onNavigate }) {
  const [articleLines, setArticleLines] = useState([]);
  const rawArticle = getArticleBySlug(slug);
  const articleMeta = rawArticle ? localizedArticle(rawArticle, lang) : null;
  const categoryLabel = articleMeta
    ? articleCategories.find((category) => category.id === articleMeta.category)?.label[lang === 'en' ? 'en' : 'tr']
    : '';
  const firstParagraph = useMemo(() => articleMeta?.desc || articleLines[0] || '', [articleLines, articleMeta?.desc]);
  const bodyLines = useMemo(() => articleLines, [articleLines]);

  useEffect(() => {
    if (!articleMeta) {
      document.title = defaultTitle;
      setMetaAttribute('meta[name="description"]', { name: 'description', content: defaultDescription });
      return;
    }

    const canonicalUrl = `${window.location.origin}/#${articleMeta.path}`;
    const imageUrl = getAbsoluteImageUrl(articleMeta.image);
    const seoTitle = `${articleMeta.title} | ${siteName}`;

    document.title = seoTitle;
    setCanonical(canonicalUrl);
    setMetaAttribute('meta[name="description"]', { name: 'description', content: articleMeta.desc });
    setMetaAttribute('meta[name="author"]', { name: 'author', content: articleMeta.author });
    setMetaAttribute('meta[name="keywords"]', { name: 'keywords', content: articleMeta.keywords?.join(', ') || articleMeta.title });
    setMetaAttribute('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    setMetaAttribute('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName });
    setMetaAttribute('meta[property="og:title"]', { property: 'og:title', content: seoTitle });
    setMetaAttribute('meta[property="og:description"]', { property: 'og:description', content: articleMeta.desc });
    setMetaAttribute('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMetaAttribute('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    setMetaAttribute('meta[property="article:author"]', { property: 'article:author', content: articleMeta.author });
    setMetaAttribute('meta[property="article:published_time"]', { property: 'article:published_time', content: articleMeta.publishedAt });
    setMetaAttribute('meta[property="article:modified_time"]', { property: 'article:modified_time', content: articleMeta.modifiedAt || articleMeta.publishedAt });
    setMetaAttribute('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMetaAttribute('meta[name="twitter:title"]', { name: 'twitter:title', content: seoTitle });
    setMetaAttribute('meta[name="twitter:description"]', { name: 'twitter:description', content: articleMeta.desc });
    setMetaAttribute('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });
    setJsonLd(articleMeta, categoryLabel, canonicalUrl, imageUrl);
  }, [articleMeta, categoryLabel]);

  useEffect(() => {
    if (!articleMeta?.source) return;

    fetch(articleMeta.source)
      .then((response) => response.text())
      .then((text) => setArticleLines(normalizeArticle(text, articleMeta)))
      .catch(() => setArticleLines([]));
  }, [articleMeta?.source, articleMeta?.title, articleMeta?.replaceTodayWithDate]);

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
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      <article className="pt-28">
        <header className="border-b border-white/5 bg-[#080B12]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <button
              onClick={() => onNavigate('/yayinlar')}
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Yayınlara dön
            </button>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-5">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 text-cyber-cyan px-2.5 py-1 font-bold">
                <Newspaper className="w-3.5 h-3.5" />
                {categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {articleMeta.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {articleMeta.readTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="w-3.5 h-3.5" />
                Yazar: {articleMeta.author}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl">
              {articleMeta.title}
            </h1>
            <p className="text-sm text-gray-300 font-semibold mt-5">
              Yazar: {articleMeta.author}
            </p>
            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mt-6 max-w-3xl">
              {firstParagraph}
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/3">
            <img src={articleMeta.image} alt={articleMeta.imageAlt || articleMeta.title} className="w-full aspect-[16/7] object-cover" />
          </div>
        </div>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mb-10 pb-8 border-b border-white/5">
            <p className="text-xs text-gray-500">
              Yazar: <span className="text-gray-300 font-semibold">{articleMeta.author}</span>
            </p>
          </div>

          <div className="space-y-5">
            {bodyLines.map((line, index) => {
              const markdownImage = parseMarkdownImage(line);

              if (markdownImage) {
                return (
                  <figure key={`${markdownImage.src}-${index}`} className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-white/3">
                    <img src={markdownImage.src} alt={markdownImage.alt} className="w-full h-auto object-contain bg-[#080B12]" loading="lazy" />
                  </figure>
                );
              }

              return isSectionHeading(line) ? (
                <h2 key={`${line}-${index}`} className="text-2xl sm:text-3xl font-extrabold text-white leading-tight pt-8">
                  {line}
                </h2>
              ) : (
                <p key={`${line}-${index}`} className="text-sm sm:text-base text-gray-300 leading-8 font-light">
                  {line}
                </p>
              );
            })}
          </div>

          {articleMeta.sources?.length ? (
            <div className="mt-16 pt-8 border-t border-white/5">
              <h2 className="text-xl font-extrabold text-white mb-5">Kaynaklar</h2>
              <div className="space-y-3">
                {articleMeta.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-white/5 bg-white/3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:border-cyan-500/20 transition-colors"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </article>
    </div>
  );
}
