import React from 'react';
import { ArrowUpRight, BarChart3, BookOpen, Clock, Newspaper, Tag, Video } from 'lucide-react';
import { articles, localizedArticle } from '../data/articles';

export default function BlogSection({ lang, onNavigate }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Yayınlarımız' : 'Publications',
    title: isTr ? 'Bilgiyi, uygulama ve büyüme pratiğiyle birlikte yayınlıyoruz.' : 'We publish knowledge with execution and growth practice.',
    desc: isTr 
      ? 'Haberler, rehberler, medya içerikleri ve analizler; Dijital Hezarfen’in akademi, uygulama ve yatırım hazırlığı yaklaşımını besleyen canlı bir yayın alanında birleşiyor.'
      : 'News, guides, media content, and analyses come together in a living publication hub that supports Dijital Hezarfen’s academy, execution, and fundraising approach.',
    btnRead: isTr ? 'Yayını İncele' : 'View Publication',
    btnAll: isTr ? 'Tüm Yayınları Gör' : 'View All Publications',
    authorLabel: isTr ? 'Yazar' : 'Author'
  };

  const iconMap = {
    haber: Newspaper,
    rehber: BookOpen,
    rapor: BarChart3,
    medya: Video
  };

  const categoryLabels = {
    haber: isTr ? 'Haber' : 'News',
    rehber: isTr ? 'Rehber' : 'Guide',
    rapor: isTr ? 'Analiz' : 'Analysis',
    medya: isTr ? 'Medya' : 'Media'
  };

  const posts = articles.slice(0, 3).map((article) => {
    const localized = localizedArticle(article, lang);
    return {
      id: article.slug,
      title: localized.title,
      summary: localized.desc,
      category: categoryLabels[article.category],
      readTime: localized.readTime,
      date: localized.date,
      author: localized.author,
      imageGradient: article.color?.replace('/20', '').replace('/25', '') || 'from-cyan-500 to-blue-600',
      icon: iconMap[article.category] || BookOpen,
      image: article.image,
      path: localized.path
    };
  });

  return (
    <section id="yayinlar" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,#000_20%,#000_80%,transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[
            { icon: BookOpen, label: isTr ? 'Rehberler' : 'Guides', text: isTr ? 'Kurucular için uygulanabilir bilgi.' : 'Actionable knowledge for founders.' },
            { icon: BarChart3, label: isTr ? 'Analizler' : 'Analyses', text: isTr ? 'Büyüme, finans ve pazar içgörüleri.' : 'Growth, finance, and market insights.' },
            { icon: Newspaper, label: isTr ? 'Haberler' : 'News', text: isTr ? 'Ekosistemden seçili gelişmeler.' : 'Selected ecosystem updates.' }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-xl border border-white/5 bg-white/3 px-5 py-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyber-cyan flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">{item.label}</h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-2xl glass overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
              <div>
                {/* Visual Image Banner with Gradients */}
                <div className={`h-48 bg-gradient-to-tr ${post.imageGradient} relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                  {post.image ? (
                    <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-75" />
                  ) : null}
                  <div className="absolute inset-0 bg-[#0B0F19]/20 backdrop-blur-[1px]"></div>

                  <Icon className="w-12 h-12 text-white relative z-10 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-[#0C1220]/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/5 text-[10px] font-bold uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5 text-cyber-cyan" />
                    <span>{post.category}</span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 font-light">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-semibold">{t.authorLabel}: {post.author}</p>

                  <h3 className="font-extrabold text-base sm:text-lg text-white font-sans leading-snug group-hover:text-cyber-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3 font-light">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action Read button */}
              <div className="p-6 pt-0 mt-4 border-t border-white/5 pt-4">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(post.path);
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-1 group/link font-sans"
                >
                  <span>{t.btnRead}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onNavigate?.('/yayinlar')}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>{t.btnAll}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
