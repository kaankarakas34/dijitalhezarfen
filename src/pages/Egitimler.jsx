import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, BookOpen, SlidersHorizontal, Layers, Clock, Users } from 'lucide-react';

export default function Egitimler({ onOpenApplyModal, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('hepsi');
  const [activeLevel, setActiveLevel] = useState('hepsi');

  const categories = [
    { id: 'hepsi', label: 'Tüm Kategoriler' },
    { id: 'girisimcilik', label: 'Girişimcilik' },
    { id: 'pazarlama-satis', label: 'Pazarlama & Satış' },
    { id: 'teknoloji-ai', label: 'Teknoloji & AI' },
    { id: 'finans-hukuk', label: 'Finans & Hukuk' },
    { id: 'yonetim-insan', label: 'Yönetim & İnsan' }
  ];

  const levels = [
    { id: 'hepsi', label: 'Tüm Seviyeler' },
    { id: 'baslangic', label: 'Başlangıç' },
    { id: 'orta', label: 'Orta' },
    { id: 'ileri', label: 'İleri' }
  ];

  const programs = [
    {
      name: 'Girişimcilik Tüneli',
      cat: 'girisimcilik',
      level: 'baslangic',
      promise: '3-5 aylık yoğun girişimci yetiştirme programı.',
      duration: '16 Hafta / Online & Hibrit',
      date: 'Ekim 2026',
      target: 'Girişimci adayları, erken kurucular',
      path: '/akademi/girisimcilik-tuneli'
    },
    {
      name: 'Dijital Pazarlama & Growth Hacking',
      cat: 'pazarlama-satis',
      level: 'orta',
      promise: 'Performans reklamcılığı, SEO ve büyüme hunileri.',
      duration: '8 Hafta / Online',
      date: 'Kasım 2026',
      target: 'Pazarlamacılar, kurucular, büyüme ekipleri',
      path: '/akademi/pazarlama-satis'
    },
    {
      name: 'Yapay Zekâ ve Otomasyon Sistemleri',
      cat: 'teknoloji-ai',
      level: 'ileri',
      promise: 'AI agent, chatbot ve n8n/Make iş akış otomasyonları.',
      duration: '6 Hafta / Online',
      date: 'Kasım 2026',
      target: 'Teknik kurucular, IT yöneticileri',
      path: '/akademi/teknoloji-yapay-zeka'
    },
    {
      name: 'Finansal Modelleme ve Yatırım Süreçleri',
      cat: 'finans-hukuk',
      level: 'ileri',
      promise: '3-5 yıllık finansal projeksiyon ve cap table tasarımı.',
      duration: '4 Hafta / Online',
      date: 'Aralık 2026',
      target: 'Kurucular, CFO adayları',
      path: '/akademi/finans-hukuk-yonetim'
    },
    {
      name: 'Liderlik ve Organizasyon Yönetimi',
      cat: 'yonetim-insan',
      level: 'orta',
      promise: 'Ekip yönetimi, OKR, KPI ve delegasyon sistemleri.',
      duration: '4 Hafta / Online',
      date: 'Aralık 2026',
      target: 'Takım liderleri, kurucular, yöneticiler',
      path: '/akademi/finans-hukuk-yonetim'
    },
    {
      name: 'Kurumsal İnovasyon & Girişimcilik',
      cat: 'girisimcilik',
      level: 'orta',
      promise: 'Kurum içi girişimcilik ve yeni iş modelleri geliştirme.',
      duration: '12 Hafta / Kurumsal',
      date: 'Kuruma Özel',
      target: 'Kurumsal çalışanlar, inovasyon liderleri',
      path: '/akademi/kurumsal'
    }
  ];

  const filteredPrograms = programs.filter((p) => {
    const matchesCat = activeCategory === 'hepsi' || p.cat === activeCategory;
    const matchesLevel = activeLevel === 'hepsi' || p.level === activeLevel;
    return matchesCat && matchesLevel;
  });

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Akademi Eğitimleri"
        title="İhtiyacınız olan yetkinliği doğru programla geliştirin."
        description="Temel farkındalık eğitimlerinden yoğun uygulama programlarına kadar farklı seviyelerde ve formatlarda tasarlanmış öğrenme yolları."
        primaryCtaText="Programları Filtrele"
        onPrimaryClick={() => {
          const element = document.querySelector('#filtre-alani');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        secondaryCtaText="Eğitim Danışmanına Sor"
        onSecondaryClick={() => onOpenApplyModal('tunel')}
      />

      {/* Filters Sticky Panel */}
      <section id="filtre-alani" className="py-8 border-t border-white/5 bg-[#080B12] sticky top-20 z-20 shadow-md">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-gray-500 mr-2 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Kategori:
            </span>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-gradient-cyber text-[#0B0F19] border-transparent shadow'
                    : 'bg-white/3 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Levels */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-gray-500 mr-4 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              Seviye:
            </span>
            {levels.map((l) => (
              <button
                key={l.id}
                onClick={() => setActiveLevel(l.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  activeLevel === l.id
                    ? 'bg-gradient-cyber text-[#0B0F19] border-transparent shadow'
                    : 'bg-white/3 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((p, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl glass p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => onNavigate(p.path)}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-white/3">
                    <span className="text-cyber-cyan">{categories.find((c) => c.id === p.cat)?.label}</span>
                    <span className="bg-white/5 px-2 py-0.5 rounded text-gray-400">
                      {levels.find((l) => l.id === p.level)?.label}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base text-white font-sans leading-snug group-hover:text-cyber-cyan transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {p.promise}
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>{p.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 shrink-0" />
                      <span>{p.target}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">Başlangıç: {p.date}</span>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-cyber-cyan group-hover:underline cursor-pointer">
                    <span>İncele / Başvur</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}

            {filteredPrograms.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-500">
                Aradığınız filtre kriterlerine uygun program bulunamadı.
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
