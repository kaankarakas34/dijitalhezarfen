import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Tag } from 'lucide-react';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: 'Yapay Zekâ Destekli MVP Geliştirme Rehberi',
      summary: 'Geleneksel yazılım süreçlerini geride bırakın. No-code ve AI araçları kullanarak 48 saatte çalışan bir ürünü nasıl yayına alırsınız?',
      category: 'Teknoloji & AI',
      readTime: '5 dk okuma',
      date: '02 Ağustos 2026',
      imageGradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Yatırımcı Sunumu (Pitch Deck) Hazırlama Sanatı',
      summary: 'Yatırımcıların ilk 30 saniyede neye baktığını biliyor musunuz? Sizi fonlamaya ikna edecek 10 slaytlık sunum şablonu ve detayları.',
      category: 'Yatırım Hazırlığı',
      readTime: '7 dk okuma',
      date: '28 Temmuz 2026',
      imageGradient: 'from-violet-600 to-fuchsia-600'
    },
    {
      id: 3,
      title: 'Birim Ekonomi (Unit Economics) Nedir ve Nasıl Hesaplanır?',
      summary: 'Bir girişimin batıp batmayacağını belirleyen en önemli metrik: LTV / CAC oranı. Reklam bütçenizi yakmadan önce mutlaka hesaplayın.',
      category: 'Finans & Büyüme',
      readTime: '6 dk okuma',
      date: '15 Temmuz 2026',
      imageGradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-violet-500/2 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Kütüphane</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            Dijital Hezarfen Blog
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Girişimcilik, yazılım, AI otomasyonları, pazarlama, satış ve finans konularında güncel rehberler ve uzman analizleri.
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
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-white font-sans leading-snug group-hover:text-cyber-cyan transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Action Read button */}
              <div className="p-6 pt-0 mt-4 border-t border-white/5 pt-4">
                <a
                  href="#"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-1 group/link"
                >
                  <span>Yazının Tamamını Oku</span>
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
