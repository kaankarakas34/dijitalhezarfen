import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Calendar, Clock, Newspaper } from 'lucide-react';
import { articleCategories, getArticleBySlug, localizedArticle } from '../data/articles';

function normalizeArticle(rawText, article) {
  let normalizedText = rawText
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line, index) => !(index === 0 && (line === article.title || line.startsWith('Bugün Apple’da yalnızca bir CEO değişmiyor'))));

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
  if (line.length > 95) return false;
  if (/[.!?:]$/.test(line)) return false;
  return /^(Jobs|Asıl|Bir growth|Apple’ın|Cook’un|Daha da|Ama|Belki|Peki|Burası|Şimdi|Tim Cook’un|Jobs yaşasaydı|Bu kelime|MarketWatch|Ve bütün|Growth açısından)/.test(line);
}

export default function YayinDetay({ slug, lang, onNavigate }) {
  const [articleLines, setArticleLines] = useState([]);
  const rawArticle = getArticleBySlug(slug);
  const articleMeta = rawArticle ? localizedArticle(rawArticle, lang) : null;
  const categoryLabel = articleMeta
    ? articleCategories.find((category) => category.id === articleMeta.category)?.label[lang === 'en' ? 'en' : 'tr']
    : '';
  const firstParagraph = useMemo(() => articleLines[0] || articleMeta?.desc || '', [articleLines, articleMeta?.desc]);
  const bodyLines = useMemo(() => articleLines.slice(1), [articleLines]);

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
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-4xl">
              {articleMeta.title}
            </h1>
            <p className="text-gray-400 text-sm sm:text-lg leading-relaxed mt-6 max-w-3xl">
              {firstParagraph}
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/3">
            <img
              src={articleMeta.image}
              alt="Tim Cook ve Apple liderlik geçişi için yazısız makale görseli"
              className="w-full aspect-[16/7] object-cover"
            />
          </div>
        </div>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="mb-10 pb-8 border-b border-white/5">
            <p className="text-xs text-gray-500">
              Yazar: <span className="text-gray-300 font-semibold">{articleMeta.author}</span>
            </p>
          </div>

          <div className="space-y-5">
            {bodyLines.map((line, index) =>
              isSectionHeading(line) ? (
                <h2 key={`${line}-${index}`} className="text-2xl sm:text-3xl font-extrabold text-white leading-tight pt-8">
                  {line}
                </h2>
              ) : (
                <p key={`${line}-${index}`} className="text-sm sm:text-base text-gray-300 leading-8 font-light">
                  {line}
                </p>
              )
            )}
          </div>
        </section>
      </article>
    </div>
  );
}
