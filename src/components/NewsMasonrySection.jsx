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
      className="bg-[#0A0D17] py-20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div className="space-y-2 max-w-2xl">
            <h2
              id="news-masonry-heading"
              className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
            >
              {isTr
                ? 'Haberler, teknoloji gündemi ve uygulama rehberleri'
                : 'News, technology dispatches, and practical guides'}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
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
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  filterMode === f.id
                    ? 'bg-gradient-cyber text-[#0B0F19]'
                    : 'bg-[#0F1424] text-gray-300 border border-white/10 hover:border-white/25 hover:text-white'
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
                className="break-inside-avoid mb-6 rounded-2xl bg-[#0F1424]/80 border border-white/10 hover:border-cyan-500/40 transition-colors duration-200 overflow-hidden group"
              >
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(item.path);
                  }}
                  className="block focus-visible:outline-2 focus-visible:outline-cyber-cyan"
                >
                  {item.image && (
                    <div
                      className={`w-full overflow-hidden border-b border-white/8 bg-[#0B0F19] ${
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

                  <div className={`p-5 space-y-3 ${isCompactText ? 'border-l-2 border-cyber-cyan/70' : ''}`}>
                    <div className="flex items-center justify-between gap-2 text-[11px]">
                      <span className="font-bold text-cyber-cyan uppercase tracking-wider">
                        {item.topic || categoryLabels[item.category] || item.category}
                      </span>
                      <span className="text-gray-500">{item.date}</span>
                    </div>

                    <h3 className="font-sans text-base sm:text-[17px] font-bold text-white leading-snug group-hover:text-cyber-cyan transition-colors">
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm text-gray-400 leading-relaxed font-light ${
                        idx % 3 === 1 ? 'line-clamp-4' : 'line-clamp-2'
                      }`}
                    >
                      {item.desc}
                    </p>

                    <div className="pt-3 border-t border-white/8 flex items-center justify-between text-[11px] text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-300">{item.author}</span>
                        <span className="text-gray-600">•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.readTime}
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyber-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </a>
              </article>
            );
          })}
        </div>

        {/* Empty state */}
        {displayedItems.length === 0 && (
          <div className="py-14 text-center rounded-2xl border border-white/10 bg-[#0F1424] text-sm text-gray-400">
            {isTr ? 'Bu filtrede yayın bulunamadı.' : 'No publications found for this filter.'}
          </div>
        )}

        {/* Load More / Full Archive Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-500 font-medium">
            {isTr
              ? `${displayedItems.length} / ${filteredItems.length} kayıt gösteriliyor`
              : `Showing ${displayedItems.length} of ${filteredItems.length} items`}
          </p>

          <div className="flex items-center gap-3">
            {hasMore && (
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0F1424] text-white border border-white/15 hover:border-cyan-500/40 hover:text-cyber-cyan transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                {isTr ? 'Daha Fazla Göster' : 'Load More'}
              </button>
            )}
            <a
              href="/yayinlar"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/yayinlar');
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all inline-flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
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
