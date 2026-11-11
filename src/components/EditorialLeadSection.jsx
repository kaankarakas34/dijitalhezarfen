import React, { useMemo, useState } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { articles, localizedArticle } from '../data/articles';

const CATEGORY_LABELS = {
  tr: {
    rapor: 'Analiz',
    rehber: 'Rehber',
    haber: 'Haber',
    medya: 'Medya'
  },
  en: {
    rapor: 'Analysis',
    rehber: 'Guide',
    haber: 'News',
    medya: 'Media'
  }
};

export default function EditorialLeadSection({ lang = 'tr', onNavigate }) {
  const isTr = lang === 'tr';
  const reduceMotion = useReducedMotion();
  const [selectedAuthor, setSelectedAuthor] = useState('all');

  const signatureEssays = useMemo(() => {
    const curatedOrder = [
      'enron-karin-nakdin-ve-guvenin-denetimi',
      'bir-sonraki-esiniz-humanoid-olabilir',
      'tim-cook-apple-miras',
      'gpt-6-astra-ve-agi-cagi',
      'bilgisayar-kavrami-degisiyor',
      'yapay-zekayi-kapatmakta-cok-mu-gec-kaldik',
      'insani-insan-yapan-sey-aslinda-zihnidir',
      'ben-bu-fikire-2-milyon-dolar-yatirim-alirim',
      'yapay-zeka-calisanlar-meta-project-ot'
    ];

    const authorArticles = articles
      .filter(
        (article) =>
          article.author !== 'Dijital Hezarfen' &&
          article.category !== 'haber' &&
          Boolean(article.source)
      )
      .map((article) => localizedArticle(article, lang));

    authorArticles.sort((a, b) => {
      const idxA = curatedOrder.indexOf(a.slug);
      const idxB = curatedOrder.indexOf(b.slug);
      const rankA = idxA === -1 ? 999 : idxA;
      const rankB = idxB === -1 ? 999 : idxB;
      return rankA - rankB;
    });

    return authorArticles;
  }, [lang]);

  const authors = useMemo(() => {
    const unique = Array.from(new Set(signatureEssays.map((a) => a.author)));
    return unique;
  }, [signatureEssays]);

  const visibleEssays = useMemo(() => {
    if (selectedAuthor === 'all') return signatureEssays;
    return signatureEssays.filter((a) => a.author === selectedAuthor);
  }, [signatureEssays, selectedAuthor]);

  const leadStory = visibleEssays[0];
  const railStories = visibleEssays.slice(1, 5);
  const stripStories = visibleEssays.slice(5, 9);

  const labels = CATEGORY_LABELS[isTr ? 'tr' : 'en'];

  if (!leadStory) return null;

  return (
    <section
      id="yayinlar"
      aria-labelledby="editorial-masthead-heading"
      className="relative bg-[#080A0F] pt-24 pb-16 border-b border-white/10 editorial-grain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/12 mb-8">
          <div>
            <p className="font-mono-meta text-[11px] uppercase tracking-[0.2em] text-cyan-400 mb-2">
              {isTr ? 'Dijital Hezarfen Yayınlar' : 'Dijital Hezarfen Publications'}
            </p>
            <h1
              id="editorial-masthead-heading"
              className="font-editorial text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#F4F4F0] tracking-tight leading-[1.1]"
            >
              {isTr
                ? 'Yazarlardan derin analizler ve dosyalar'
                : 'In-depth essays and dossiers from our authors'}
            </h1>
          </div>

          {/* Author Spotlight Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedAuthor('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                selectedAuthor === 'all'
                  ? 'bg-cyan-400 text-[#080A0F]'
                  : 'bg-[#10141D] text-gray-300 border border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              {isTr ? 'Tüm Yazarlar' : 'All Authors'}
            </button>
            {authors.map((authorName) => (
              <button
                key={authorName}
                type="button"
                onClick={() => setSelectedAuthor(authorName)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedAuthor === authorName
                    ? 'bg-cyan-400 text-[#080A0F]'
                    : 'bg-[#10141D] text-gray-300 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {authorName}
              </button>
            ))}
            <a
              href={`#${'/yayinlar'}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/yayinlar');
              }}
              className="ml-1 inline-flex items-center gap-1 text-xs font-semibold text-gray-300 hover:text-cyan-400 transition-colors whitespace-nowrap px-2 py-1.5"
            >
              <span>{isTr ? 'Tüm Arşiv' : 'Full Archive'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Asymmetric Broadsheet Grid: 7 Col Lead + 5 Col Rail */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          {/* Main Featured Author Story (Left 7 Columns) */}
          <article className="lg:col-span-7 group">
            <a
              href={`#${leadStory.path}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.(leadStory.path);
              }}
              className="block focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#10141D] border border-white/10 mb-5">
                {leadStory.image && (
                  <img
                    src={leadStory.image}
                    alt={leadStory.imageAlt || leadStory.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F]/65 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#080A0F]/85 backdrop-blur-sm border border-white/15 font-mono-meta text-[11px] font-medium text-cyan-400">
                    {labels[leadStory.category] || leadStory.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-white">{leadStory.author}</span>
                  {leadStory.authorRole && (
                    <span className="text-gray-400">{leadStory.authorRole}</span>
                  )}
                  <span className="text-gray-600">/</span>
                  <span className="font-mono-meta text-gray-400">{leadStory.date}</span>
                  <span className="inline-flex items-center gap-1 font-mono-meta text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {leadStory.readTime}
                  </span>
                </div>

                <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[2.15rem] font-semibold text-[#F4F4F0] leading-[1.15] tracking-tight group-hover:text-cyan-400 transition-colors">
                  {leadStory.title}
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-[65ch] line-clamp-3">
                  {leadStory.desc}
                </p>

                <div className="pt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 group-hover:text-white transition-colors">
                  <span>{isTr ? 'Dosyayı Oku' : 'Read Dossier'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          </article>

          {/* Right Rail: Curated Author Spotlight List (5 Columns) */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8">
            <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10">
              <h2 className="font-mono-meta text-[11px] uppercase tracking-[0.18em] text-gray-400">
                {isTr ? 'Öne Çıkan Yazar Yazıları' : 'Featured Author Essays'}
              </h2>
              <span className="font-mono-meta text-[11px] text-gray-500">
                {railStories.length} {isTr ? 'yazı' : 'essays'}
              </span>
            </div>

            <div className="divide-y divide-white/10">
              {railStories.map((story) => (
                <article key={story.slug} className="py-4 first:pt-3 last:pb-1 group">
                  <a
                    href={`#${story.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(story.path);
                    }}
                    className="grid grid-cols-12 gap-4 items-start focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-md"
                  >
                    <div className="col-span-8 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="font-semibold text-cyan-400">{story.author}</span>
                        <span className="text-gray-600">/</span>
                        <span className="font-mono-meta text-gray-400">{story.readTime}</span>
                      </div>
                      <h3 className="font-editorial text-lg font-medium text-[#F4F4F0] leading-snug group-hover:text-cyan-400 transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {story.desc}
                      </p>
                    </div>

                    <div className="col-span-4">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[#10141D] border border-white/10">
                        {story.image && (
                          <img
                            src={story.image}
                            alt={story.imageAlt || story.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Remaining Signature Author Essays Strip */}
        {stripStories.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold text-white tracking-tight">
                {isTr ? 'Yazarlardan Diğer İncelemeler' : 'More Essays from Authors'}
              </h2>
              <a
                href={`#${'/yayinlar'}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/yayinlar');
                }}
                className="text-xs font-semibold text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                <span>{isTr ? 'Tümünü Gör' : 'View All'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stripStories.map((story) => (
                <article key={story.slug} className="group flex flex-col justify-between">
                  <a
                    href={`#${story.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.(story.path);
                    }}
                    className="block space-y-3 focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-md"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#10141D] border border-white/10">
                      {story.image && (
                        <img
                          src={story.image}
                          alt={story.imageAlt || story.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-cyan-400">{story.author}</span>
                        <span className="font-mono-meta text-gray-500">{story.readTime}</span>
                      </div>
                      <h3 className="font-editorial text-lg font-medium text-[#F4F4F0] leading-snug group-hover:text-cyan-400 transition-colors">
                        {story.title}
                      </h3>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
