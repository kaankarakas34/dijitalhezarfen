import React from 'react';
import PageHero from '../components/UI/PageHero';
import YoutubeShowcaseSection from '../components/YoutubeShowcaseSection';
import { BookOpen, PlayCircle, FileText, Share2, ArrowUpRight } from 'lucide-react';
import { YOUTUBE_CHANNEL_URL } from '../data/youtubeVideos';

function UsersIcon(props) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export default function Medya({ lang = 'tr', onNavigate }) {
  const series = [
    { title: 'Dijital Hezarfen Analizleri', desc: 'Girişimcilik, growth, teknoloji ve yönetim üzerine detaylı incelemeler.', icon: FileText },
    { title: 'İlk 1.000 Dolar', desc: 'Girişimlerin sıfırdan ilk gelirlerini elde etme ve doğrulama hikâyeleri.', icon: Share2 },
    { title: 'Kurucu Masası', desc: 'Kurucuların gerçek kararları, zorlu anları, yaptıkları hatalar ve dönüm noktaları.', icon: UsersIcon },
    { title: 'AI Uygulamaları', desc: 'Şirketlerin yapay zekâ ve otomasyon araçlarını iş akışlarına entegre etme vakaları.', icon: PlayCircle },
    { title: 'Büyüme Odası', desc: 'Pazarlama, satış, CRM ve büyüme süreçlerinde yaşanan kritik problemler ve çözümler.', icon: TrendingUpIcon },
    { title: 'Hezarfen Akademi', desc: 'Kısa pratik dersler, girişimcilik kavramları ve adım adım uygulama rehberleri.', icon: BookOpen }
  ];

  return (
    <div className="bg-[#000000] text-gray-100 min-h-screen">
      <PageHero
        badge="Medya & Yayınlar"
        title="Bilgiyi sınıfların dışına taşıyoruz."
        description="Girişimcilik, teknoloji, büyüme ve yönetim üzerine uygulanabilir pratik içerikler, video analizler ve yazılı dosyalar."
        primaryCtaText="YouTube’u İzle"
        onPrimaryClick={() => window.open(YOUTUBE_CHANNEL_URL, '_blank', 'noopener,noreferrer')}
        secondaryCtaText="Tüm Yayınları Gör"
        onSecondaryClick={() => onNavigate('/yayinlar')}
      />

      <YoutubeShowcaseSection lang={lang} onNavigate={onNavigate} />

      <section className="py-20 border-b border-white/10 bg-[#0A0D17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-extrabold text-white mb-10">Yayın Serilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-6 rounded-2xl bg-[#0F1424] border border-white/10 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-cyan-500/20 bg-cyan-500/10 text-cyber-cyan mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-white">{s.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed font-light">{s.desc}</p>
                  </div>
                  <a
                    href="#/yayinlar"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/yayinlar');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyber-cyan mt-6 hover:text-white transition-colors"
                  >
                    <span>Yayınları İncele</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#070A12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-sans text-3xl font-extrabold text-white">Medya İş Birlikleri</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Sponsorlu içerik projeleri, canlı yayınlar veya girişim ekosistemine özel rapor/makale yayın çalışmaları için medya ekibimizle iletişime geçebilirsiniz.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => window.open(YOUTUBE_CHANNEL_URL, '_blank', 'noopener,noreferrer')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              YouTube Kanalına Git
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/iletisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-[#0F1424] border border-white/15 hover:border-white/30 text-white transition-colors cursor-pointer"
            >
              Medya İş Birliği Yap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
