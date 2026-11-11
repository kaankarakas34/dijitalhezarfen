import React, { useMemo } from 'react';
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

  const leadStory = signatureEssays[0];
  const railStories = signatureEssays.slice(1, 5);
  const stripStories = signatureEssays.slice(5, 9);

  const labels = CATEGORY_LABELS[isTr ? 'tr' : 'en'];

  if (!leadStory) return null;

  return (
    <section
      id="yayinlar"
      aria-label={isTr ? 'Öne Çıkan Yazar Yayınları' : 'Featured Author Publications'}
      className="relative bg-[#070A12] pt-28 pb-16 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Frontpage Grid: 7 Col Lead + 5 Col Rail */}
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
              className="block focus-visible:outline-2 focus-visible:outline-cyber-cyan rounded-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10 mb-5">
                {leadStory.image && (
                  <img
                    src={leadStory.image}
                    alt={leadStory.imageAlt || leadStory.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B0F19]/85 backdrop-blur-sm border border-white/15 text-[11px] font-bold uppercase tracking-wider text-cyber-cyan">
                    {labels[leadStory.category] || leadStory.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="font-bold text-white">{leadStory.author}</span>
                  {leadStory.authorRole && (
                    <span className="text-gray-400">{leadStory.authorRole}</span>
                  )}
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{leadStory.date}</span>
                  <span className="inline-flex items-center gap-1 text-gray-400">
                    <Clock className="w-3.5 h-3.5 text-cyber-cyan" />
                    {leadStory.readTime}
                  </span>
                </div>

                <h1 className="font-sans text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-white leading-[1.15] tracking-tight group-hover:text-cyber-cyan transition-colors">
                  {leadStory.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-[65ch] line-clamp-3 font-light">
                  {leadStory.desc}
                </p>

                <div className="pt-1 inline-flex items-center gap-1.5 text-sm font-bold text-cyber-cyan group-hover:text-white transition-colors">
                  <span>{isTr ? 'Dosyayı Oku' : 'Read Dossier'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          </article>

          {/* Right Rail: Curated Author Spotlight List (5 Columns) */}
          <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8">
            <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/10">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                {isTr ? 'Öne Çıkan Yazar Yazıları' : 'Featured Author Essays'}
              </h2>
              <a
                href="#/yayinlar"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/yayinlar');
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-cyber-cyan hover:text-white transition-colors"
              >
                <span>{isTr ? 'Tümünü Gör' : 'View All'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
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
                    className="grid grid-cols-12 gap-4 items-start focus-visible:outline-2 focus-visible:outline-cyber-cyan rounded-lg"
                  >
                    <div className="col-span-8 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="font-bold text-cyber-cyan">{story.author}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{story.readTime}</span>
                      </div>
                      <h3 className="font-sans text-base sm:text-[17px] font-bold text-white leading-snug group-hover:text-cyber-cyan transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                        {story.desc}
                      </p>
                    </div>

                    <div className="col-span-4">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#0B0F19] border border-white/10">
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
              <h2 className="text-sm font-extrabold text-white tracking-tight uppercase">
                {isTr ? 'Yazarlardan Diğer İncelemeler' : 'More Essays from Authors'}
              </h2>
              <a
                href="#/yayinlar"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/yayinlar');
                }}
                className="text-xs font-semibold text-gray-400 hover:text-cyber-cyan transition-colors inline-flex items-center gap-1"
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
                    className="block space-y-3 focus-visible:outline-2 focus-visible:outline-cyber-cyan rounded-lg"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#0B0F19] border border-white/10">
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
                        <span className="font-bold text-cyber-cyan">{story.author}</span>
                        <span className="text-gray-500">{story.readTime}</span>
                      </div>
                      <h3 className="font-sans text-base font-bold text-white leading-snug group-hover:text-cyber-cyan transition-colors">
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
