import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Mic, PlayCircle, Newspaper, FileText, Share2, ArrowUpRight } from 'lucide-react';

export default function Medya({ onNavigate }) {
  const series = [
    { title: 'Dijital Hezarfen Analizleri', desc: 'Girişimcilik, growth, teknoloji ve yönetim üzerine detaylı incelemeler.', icon: FileText, color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5' },
    { title: 'İlk 1.000 Dolar', desc: 'Girişimlerin sıfırdan ilk gelirlerini elde etme ve doğrulama hikâyeleri.', icon: Share2, color: 'text-blue-400 border-blue-500/20 bg-blue-500/5' },
    { title: 'Kurucu Masası', desc: 'Kurucuların gerçek kararları, zorlu anları, yaptıkları hatalar ve dönüm noktaları.', icon: UsersIcon, color: 'text-violet-400 border-violet-500/20 bg-violet-500/5' },
    { title: 'AI Uygulamaları', desc: 'Şirketlerin yapay zekâ ve otomasyon araçlarını iş akışlarına entegre etme vakaları.', icon: PlayCircle, color: 'text-pink-400 border-pink-500/20 bg-pink-500/5' },
    { title: 'Büyüme Odası', desc: 'Pazarlama, satış, CRM ve büyüme süreçlerinde yaşanan kritik problemler ve çözümler.', icon: TrendingUpIcon, color: 'text-rose-400 border-rose-500/20 bg-rose-500/5' },
    { title: 'Hezarfen Akademi', desc: 'Kısa pratik dersler, girişimcilik kavramları ve adım adım uygulama rehberleri.', icon: BookOpen, color: 'text-amber-400 border-amber-500/20 bg-amber-500/5' }
  ];

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

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Medya & Yayınlar"
        title="Bilgiyi sınıfların dışına taşıyoruz."
        description="Girişimcilik, teknoloji, büyüme ve yönetim üzerine uygulanabilir pratik içerikler, kurucuların gerçek deneyimleri ve yeni fikirler."
        primaryCtaText="YouTube'u İzle"
        onPrimaryClick={() => window.open('https://youtube.com', '_blank')}
        secondaryCtaText="Tüm İçerikleri Gör"
        onSecondaryClick={() => onNavigate('/icerikler')}
      />

      {/* İçerik Serileri */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Yayın Serilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 transition-all">
                  <div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${s.color} mb-5`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2.5 leading-relaxed">{s.desc}</p>
                  </div>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan mt-6 hover:underline">
                    <span>Bölümleri İzle</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medya Sayfası Düzeni (Mock) */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Medya İş Birlikleri</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Sponsorlu içerik projeleri, canlı yayın sponsorlukları veya girişim ekosistemine özel rapor/makale yayın çalışmaları için medya ekibimizle iletişime geçebilirsiniz.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.open('https://youtube.com', '_blank')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              YouTube Kanalına Git
            </button>
            <button
              onClick={() => onNavigate('/iletisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Medya İş Birliği Yap
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
