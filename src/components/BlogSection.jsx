import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';

export default function BlogSection({ lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Kütüphane' : 'Library',
    title: isTr ? 'Dijital Hezarfen Blog' : 'Dijital Hezarfen Blog',
    desc: isTr 
      ? 'Girişimcilik, yazılım, AI otomasyonları, pazarlama, satış ve finans konularında güncel rehberler ve uzman analizleri.'
      : 'Guides, frameworks, and expert analyses covering software engineering, growth hacking, RevOps, and startup fundraising.',
    btnRead: isTr ? 'Yazının Tamamını Oku' : 'Read Full Article',
    
    // Post 1
    t1: isTr ? 'Yapay Zekâ Destekli MVP Geliştirme Rehberi' : 'AI-Assisted MVP Development Guide',
    s1: isTr
      ? 'Geleneksel yazılım süreçlerini geride bırakın. No-code ve AI araçları kullanarak 48 saatte çalışan bir ürünü nasıl yayına alırsınız?'
      : 'Move beyond legacy software dev cycles. How to build and deploy a working MVP in 48 hours using AI and no-code tools.',
    cat1: isTr ? 'Teknoloji & AI' : 'Tech & AI',
    time1: isTr ? '5 dk okuma' : '5 min read',
    date1: isTr ? '02 Ağustos 2026' : 'August 02, 2026',

    // Post 2
    t2: isTr ? 'Yatırımcı Sunumu (Pitch Deck) Hazırlama Sanatı' : 'The Art of Pitch Deck Preparation',
    s2: isTr
      ? 'Yatırımcıların ilk 30 saniyede neye baktığını biliyor musunuz? Sizi fonlamaya ikna edecek 10 slaytlık sunum şablonu ve detayları.'
      : 'Do you know what VCs look for in the first 30 seconds? A 10-slide template designed to convince investors.',
    cat2: isTr ? 'Yatırım Hazırlığı' : 'Fundraising Prep',
    time2: isTr ? '7 dk okuma' : '7 min read',
    date2: isTr ? '28 Temmuz 2026' : 'July 28, 2026',

    // Post 3
    t3: isTr ? 'Birim Ekonomi (Unit Economics) Nedir ve Nasıl Hesaplanır?' : 'What is Unit Economics & How to Track It?',
    s3: isTr
      ? 'Bir girişimin batıp batmayacağını belirleyen en önemli metrik: LTV / CAC oranı. Reklam bütçenizi yakmadan önce mutlaka hesaplayın.'
      : 'The metric that predicts whether a startup will fail: LTV/CAC ratio. Make sure to model this before spending your marketing budget.',
    cat3: isTr ? 'Finans & Büyüme' : 'Finance & Growth',
    time3: isTr ? '6 dk okuma' : '6 min read',
    date3: isTr ? '15 Temmuz 2026' : 'July 15, 2026'
  };

  const posts = [
    {
      id: 1,
      title: t.t1,
      summary: t.s1,
      category: t.cat1,
      readTime: t.time1,
      date: t.date1,
      imageGradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: t.t2,
      summary: t.s2,
      category: t.cat2,
      readTime: t.time2,
      date: t.date2,
      imageGradient: 'from-violet-600 to-fuchsia-600'
    },
    {
      id: 3,
      title: t.t3,
      summary: t.s3,
      category: t.cat3,
      readTime: t.time3,
      date: t.date3,
      imageGradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-violet-500/2 rounded-full filter blur-[120px] pointer-events-none"></div>

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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col justify-between rounded-2xl glass overflow-hidden border border-white/5 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Banner with Gradients */}
                <div className={`h-48 bg-gradient-to-tr ${post.imageGradient} relative flex items-center justify-center p-6 text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#0B0F19]/20 backdrop-blur-[1px]"></div>
                  
                  {/* Decorative background vectors */}
                  <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-white/10 rounded-full filter blur-md"></div>
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-black/10 rounded-full filter blur-md"></div>

                  <BookOpen className="w-12 h-12 text-white relative z-10 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                  
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
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-1 group/link font-sans"
                >
                  <span>{t.btnRead}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
