import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { YOUTUBE_CHANNEL_URL, youtubeVideos } from '../data/youtubeVideos';

export default function YoutubeShowcaseSection({ lang = 'tr', onNavigate }) {
  const isTr = lang === 'tr';
  const locale = isTr ? 'tr' : 'en';
  const [featuredId, setFeaturedId] = useState(youtubeVideos[0].id);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const featuredVideo = youtubeVideos.find((v) => v.id === featuredId) || youtubeVideos[0];
  const remainingVideos = youtubeVideos.filter((v) => v.id !== featuredVideo.id);
  const secondaryVideos = showAllVideos ? remainingVideos : remainingVideos.slice(0, 3);

  return (
    <section
      id="youtube-yayinlari"
      aria-labelledby="youtube-section-heading"
      className="bg-[#080A0F] py-20 border-b border-white/10 editorial-grain"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-10">
          <div className="space-y-1.5">
            <h2
              id="youtube-section-heading"
              className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F4F4F0] tracking-tight"
            >
              {isTr ? 'Video yayınları ve analizler' : 'Video episodes and briefings'}
            </h2>
            <p className="text-sm text-gray-400">
              {isTr
                ? 'Dijital Hezarfen YouTube kanalından seçili bölümleri doğrudan buradan izleyebilirsiniz.'
                : 'Watch selected episodes from the Dijital Hezarfen YouTube channel directly below.'}
            </p>
          </div>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold bg-[#121620] text-white border border-white/15 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <span>@dijitalhezarfen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Featured Video Iframe + Context Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/15 bg-black">
              <iframe
                key={featuredVideo.id}
                src={`https://www.youtube-nocookie.com/embed/${featuredVideo.id}?rel=0`}
                title={featuredVideo.title[locale]}
                className="w-full h-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-5 lg:border-l lg:border-white/10 lg:pl-8">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-mono-meta text-cyan-400 font-medium">
                  {featuredVideo.tag[locale]}
                </span>
                <span className="text-gray-600">/</span>
                <span className="text-gray-400 font-medium">{featuredVideo.author}</span>
                {featuredVideo.publishedAt && (
                  <>
                    <span className="text-gray-600">/</span>
                    <span className="font-mono-meta text-gray-500">{featuredVideo.publishedAt}</span>
                  </>
                )}
              </div>

              <h3 className="font-editorial text-2xl font-semibold text-[#F4F4F0] leading-snug">
                {featuredVideo.title[locale]}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {featuredVideo.summary[locale]}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href={`https://www.youtube.com/watch?v=${featuredVideo.id}`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md text-xs font-semibold bg-cyan-400 text-[#080A0F] hover:bg-cyan-300 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>{isTr ? 'YouTube’da Aç' : 'Watch on YouTube'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {featuredVideo.relatedSlug && (
                <a
                  href={`#/yayinlar/${featuredVideo.relatedSlug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(`/yayinlar/${featuredVideo.relatedSlug}`);
                  }}
                  className="px-4 py-2 rounded-md text-xs font-semibold bg-[#121620] text-gray-200 border border-white/15 hover:border-white/30 hover:text-white transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>{isTr ? 'Yazılı Dosyayı Oku' : 'Read Companion Essay'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Channel Video Iframes Grid */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryVideos.map((video) => (
              <article
                key={video.id}
                className="rounded-lg bg-[#10141C] border border-white/10 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full bg-black border-b border-white/10">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0`}
                      title={video.title[locale]}
                      className="w-full h-full border-0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono-meta text-cyan-400">{video.tag[locale]}</span>
                      <span className="font-mono-meta text-gray-500">{video.publishedAt || video.author}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#F4F4F0] leading-snug">
                      {video.title[locale]}
                    </h4>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-white/8">
                  <button
                    type="button"
                    onClick={() => setFeaturedId(video.id)}
                    className="text-xs font-semibold text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {isTr ? 'Üst Oynatıcıya Al' : 'Pin to Main Player'}
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-gray-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>YouTube</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {remainingVideos.length > 3 && (
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAllVideos((prev) => !prev)}
                className="px-4 py-2 rounded-md text-xs font-semibold bg-[#121620] text-gray-200 border border-white/15 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {showAllVideos
                  ? (isTr ? 'Daha Az Video Göster' : 'Show Fewer Videos')
                  : (isTr ? `Diğer Videoları Göster (${remainingVideos.length - 3})` : `Show More Videos (${remainingVideos.length - 3})`)}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
