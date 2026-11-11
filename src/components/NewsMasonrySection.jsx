import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { articles, localizedArticle } from '../data/articles';

export default function NewsMasonrySection({ lang = 'tr', onNavigate }) {
  const isTr = lang === 'tr';
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'haber' | 'rehber' | 'dh' | 'kaan'
  const [visibleCount, setVisibleCount] = useState(12);

  const feedItems = useMemo(() => {
    const others = articles
      .filter(
        (article) =>
          article.author === 'Dijital Hezarfen' ||
          article.category === 'haber' ||
          !article.source
      )
      .map((article) => localizedArticle(article, lang));

    // Put full-body articles before short summaries without source
    others.sort((a, b) => Number(Boolean(b.source)) - Number(Boolean(a.source)));
    return others;
  }, [lang]);

  const filteredItems = useMemo(() => {
    return feedItems.filter((item) => {
      if (filterMode === 'haber') return item.category === 'haber';
      if (filterMode === 'rehber') return item.category === 'rehber' || item.category === 'rapor' || item.category === 'medya';
      if (filterMode === 'dh') return item.author === 'Dijital Hezarfen';
      if (filterMode === 'kaan') return item.author === 'Kaan Karakaş';
      return true;
    });
  }, [feedItems, filterMode]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const categoryLabels = {
    haber: isTr ? 'Haber' : 'News',
    rehber: isTr ? 'Rehber' : 'Guide',
    rapor: isTr ? 'Analiz' : 'Analysis',
    medya: isTr ? 'Medya' : 'Media'
  };

  const filters = [
    { id: 'all', label: isTr ? 'Tümü' : 'All' },
    { id: 'haber', label: isTr ? 'Haberler' : 'News' },
    { id: 'rehber', label: isTr ? 'Rehber & Notlar' : 'Guides & Briefs' },
    { id: 'dh', label: 'Dijital Hezarfen' },
    { id: 'kaan', label: 'Kaan Karakaş' }
  ];

  return (
    <section
      id="haberler-akis"
      aria-labelledby="news-masonry-heading"
      className="bg-[#0B0E14] py-20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2
              id="news-masonry-heading"
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F4F4F0] tracking-tight"
            >
              {isTr
                ? 'Haberler, teknoloji gündemi ve uygulama rehberleri'
                : 'News, technology dispatches, and practical guides'}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              {isTr
                ? 'Yapay zekâ ekonomisi, şirket stratejileri, araç kurulumları ve ekosistem gelişmelerinden derlenen akış.'
                : 'Curated dispatches covering the AI economy, corporate strategy, tool setups, and startup ecosystem moves.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setFilterMode(f.id);
                  setVisibleCount(12);
                }}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  filterMode === f.id
                    ? 'bg-white text-[#080A0F]'
                    : 'bg-[#121620] text-gray-300 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* True Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {displayedItems.map((item, idx) => {
            const isSvg = item.image?.endsWith('.svg');
            const isCompactText = !item.image;
            const tallImage = !isSvg && idx % 4 === 0;

            return (
              <article
                key={item.slug}
                className="break-inside-avoid mb-6 rounded-lg bg-[#10141C] border border-white/10 hover:border-cyan-400/40 transition-colors duration-200 overflow-hidden group"
              >
                <a
                  href={`#${item.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(item.path);
                  }}
                  className="block focus-visible:outline-2 focus-visible:outline-cyan-400"
                >
                  {item.image && (
                    <div
                      className={`w-full overflow-hidden border-b border-white/8 bg-[#0C1017] ${
                        isSvg
                          ? 'aspect-[16/9] p-3 flex items-center justify-center'
                          : tallImage
                            ? 'aspect-[4/3]'
                            : 'aspect-[16/10]'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                          isSvg ? 'object-contain' : 'object-cover object-center'
                        }`}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className={`p-5 space-y-3 ${isCompactText ? 'border-l-2 border-cyan-400/70' : ''}`}>
                    <div className="flex items-center justify-between gap-2 text-[11px]">
                      <span className="font-mono-meta text-cyan-400 font-medium">
                        {item.topic || categoryLabels[item.category] || item.category}
                      </span>
                      <span className="font-mono-meta text-gray-500">{item.date}</span>
                    </div>

                    <h3 className="text-base sm:text-[17px] font-bold text-[#F4F4F0] leading-snug group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm text-gray-400 leading-relaxed ${
                        idx % 3 === 1 ? 'line-clamp-4' : 'line-clamp-2'
                      }`}
                    >
                      {item.desc}
                    </p>

                    <div className="pt-3 border-t border-white/8 flex items-center justify-between text-[11px] text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-300">{item.author}</span>
                        <span className="text-gray-600">·</span>
                        <span className="inline-flex items-center gap-1 font-mono-meta">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {displayedItems.length === 0 && (
          <div className="py-14 text-center rounded-lg border border-white/10 bg-[#10141C] text-sm text-gray-400">
            {isTr ? 'Bu filtrede yayın bulunamadı.' : 'No publications found for this filter.'}
          </div>
        )}

        {/* Load More / Full Archive Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="font-mono-meta text-xs text-gray-500">
            {isTr
              ? `${displayedItems.length} / ${filteredItems.length} kayıt gösteriliyor`
              : `Showing ${displayedItems.length} of ${filteredItems.length} items`}
          </p>

          <div className="flex items-center gap-3">
            {hasMore && (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-4 py-2 rounded-md text-xs font-semibold bg-[#141923] text-white border border-white/15 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                {isTr ? 'Daha Fazla Göster' : 'Load More'}
              </button>
            )}
            <a
              href={`#${'/yayinlar'}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/yayinlar');
              }}
              className="px-4 py-2 rounded-md text-xs font-semibold bg-cyan-400 text-[#080A0F] hover:bg-cyan-300 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
            >
              <span>{isTr ? 'Tüm Yayınları Aç' : 'Open All Publications'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
