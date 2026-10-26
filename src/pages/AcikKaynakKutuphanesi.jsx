import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Code2,
  Layers,
  Filter,
  Scale,
  Briefcase,
  Terminal,
  LayoutGrid,
  List,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Info,
  Compass,
  Coins
} from 'lucide-react';
import {
  openSourceMeta,
  softwareCategories,
  skillCategories,
  openSourceTools
} from '../data/openSourceTools';

const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function AcikKaynakKutuphanesi({ lang = 'tr', onOpenApplyModal, onNavigate }) {
  const isTr = lang === 'tr';

  const [activeSection, setActiveSection] = useState('all'); // 'all' | 'software' | 'skill'
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLicenseGroup, setActiveLicenseGroup] = useState('all'); // 'all' | 'esnek' | 'kosullu' | 'dogrulanmali'
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'compact'
  const [isGuideExpanded, setIsGuideExpanded] = useState(true);

  useEffect(() => {
    const savedCat = sessionStorage.getItem('dh_os_category');
    const savedSec = sessionStorage.getItem('dh_os_section');
    if (savedSec) {
      setActiveSection(savedSec);
      sessionStorage.removeItem('dh_os_section');
    }
    if (savedCat) {
      setActiveCategory(savedCat);
      sessionStorage.removeItem('dh_os_category');
      setTimeout(() => {
        document.getElementById('katalog-filtre')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, []);

  const availableCategories = useMemo(() => {
    if (activeSection === 'software') return softwareCategories;
    if (activeSection === 'skill') return skillCategories;
    return [...softwareCategories, ...skillCategories];
  }, [activeSection]);

  const handleSectionChange = (sec) => {
    setActiveSection(sec);
    setActiveCategory('all');
  };

  const filteredTools = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return openSourceTools.filter((item) => {
      if (activeSection !== 'all' && item.section !== activeSection) return false;
      if (activeCategory !== 'all' && item.categoryId !== activeCategory) return false;
      if (activeLicenseGroup !== 'all' && item.licenseGroup !== activeLicenseGroup) return false;

      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.repoPath.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.whereToUse.toLowerCase().includes(q) ||
        item.businessIdea.toLowerCase().includes(q) ||
        item.license.toLowerCase().includes(q)
      );
    });
  }, [activeSection, activeCategory, activeLicenseGroup, searchQuery]);

  // Group filtered tools by section and category so headings match the original structure
  const groupedSections = useMemo(() => {
    const sections = [];
    const secTypes = activeSection === 'all' ? ['software', 'skill'] : [activeSection];

    for (const secType of secTypes) {
      const secItems = filteredTools.filter((t) => t.section === secType);
      if (secItems.length === 0) continue;

      const cats = secType === 'software' ? softwareCategories : skillCategories;
      const catGroups = [];

      for (const cat of cats) {
        const catItems = secItems.filter((t) => t.categoryId === cat.id);
        if (catItems.length > 0) {
          catGroups.push({
            ...cat,
            items: catItems
          });
        }
      }

      sections.push({
        type: secType,
        meta: openSourceMeta.sectionIntros[secType],
        totalInFilter: secItems.length,
        categories: catGroups
      });
    }

    return sections;
  }, [filteredTools, activeSection]);

  const getLicenseBadgeStyle = (group) => {
    if (group === 'esnek') {
      return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25';
    }
    if (group === 'kosullu') {
      return 'bg-amber-500/10 text-amber-300 border-amber-500/25';
    }
    return 'bg-rose-500/10 text-rose-300 border-rose-500/25';
  };

  const resetFilters = () => {
    setActiveSection('all');
    setActiveCategory('all');
    setActiveLicenseGroup('all');
    setSearchQuery('');
  };

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen pb-24">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#080D1A] via-[#050811] to-[#000000]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-gray-400">
              <button
                onClick={() => onNavigate?.('/')}
                className="hover:text-cyber-cyan transition-colors cursor-pointer"
              >
                {isTr ? 'Ana Sayfa' : 'Home'}
              </button>
              <span>/</span>
              <span className="text-cyber-cyan font-semibold">
                {isTr ? 'Açık Kaynak Girişimcilik Kütüphanesi' : 'Open Source Entrepreneurship Library'}
              </span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyber-cyan text-xs font-bold">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Güncellenme: {openSourceMeta.updatedAt}</span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-sans max-w-5xl">
            Açık Kaynak Girişimcilik Kütüphanesi:{' '}
            <span className="text-gradient-cyan">Startup ve Vibe Coding için 199 Araç</span>
          </h1>

          {/* Lead Quote Block */}
          <blockquote className="mt-8 rounded-2xl border-l-4 border-cyber-cyan bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-transparent p-6 sm:p-8 border border-white/10 shadow-2xl">
            <p className="text-base sm:text-xl text-gray-100 leading-relaxed font-light">
              <strong className="font-extrabold text-cyber-cyan">
                {openSourceMeta.heroQuote.bold.tr}
              </strong>{' '}
              {openSourceMeta.heroQuote.text.tr}
            </p>
          </blockquote>

          {/* Intro Narrative Paragraphs */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p>
                Bir startup kurarken asıl avantajın, başkalarının da çözdüğü her teknik problemi tekrar çözmen değil;{' '}
                <strong className="text-white font-semibold">müşterinin sorununu benzersiz biçimde çözmen</strong> olmalı. Özellikle yapay zekâ ile{' '}
                <em className="text-cyan-300 not-italic font-medium">vibe coding</em> yapan kurucular, birkaç promptla CRM, ERP, abonelik sistemi, chatbot veya e-ticaret sitesi üretmeye başlayabiliyor. Fakat demo çalıştıktan sonra başlayan kullanıcı rolleri, ödeme istisnaları, veri bütünlüğü, güvenlik, testler, ölçeklendirme, bakım ve entegrasyon sorunları aylar sürebiliyor.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p>
                Olgun bir yazılımı veya kütüphaneyi doğru yerde kullanmak; geliştirme süresini kısaltabilir, mühendislik riskini azaltabilir, tekrar edilen kod üretimini ve gereksiz token tüketimini düşürebilir.{' '}
                <strong className="text-white font-semibold">
                  Hazır çözüm kullanmak otomatik olarak daha az token harcamak demek değildir:
                </strong>{' '}
                entegrasyon maliyeti de vardır. Buradaki hedef, kendi uzmanlığını ve yapay zekâyı{' '}
                <strong className="text-cyber-cyan font-semibold">gerçek farklılaştırıcı özelliğe</strong> ayırmaktır.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <p>
                Bu rehber, <strong className="text-white font-semibold">26 Ekim 2026 itibarıyla derlenmiş 171 yazılım ve 28 AI agent skill</strong> içerir. Her kayıtta aracın ne yaptığı, nerede kullanılabileceği, nasıl bir ürün veya hizmete dönüşebileceği, lisansı ve ücretsiz kullanım sınırları yer alır. Katalog, yalnızca programlardan değil; API, altyapı bileşenleri, framework ve örnek projelerden de oluşur.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cyber-cyan font-bold">
                <span>Bölüm 1: 171 Açık Kaynak Yazılım</span>
                <span>•</span>
                <span>Bölüm 2: 28 AI Agent Skill</span>
              </div>
            </div>
          </div>

          {/* Stats & Quick Action Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">199</div>
              <div className="text-xs text-gray-400 mt-1">Toplam İncelenen Repo & Araç</div>
            </div>
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.04] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyber-cyan">171</div>
              <div className="text-xs text-gray-300 mt-1">Açık Kaynak Yazılım & Altyapı</div>
            </div>
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-400">28</div>
              <div className="text-xs text-gray-300 mt-1">AI Coding & Operasyon Skill’i</div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 sm:p-5">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">17</div>
              <div className="text-xs text-gray-300 mt-1">Sektörel & Teknik Kategori</div>
            </div>
          </div>
        </div>
      </section>

      {/* USAGE GUIDE & LICENSE MATRIX SECTION */}
      <section className="py-12 bg-[#050811] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyber-cyan">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                  Kataloğu Nasıl Kullanmalısın & Lisans Rehberi
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  Ticarileştirme, SaaS’a dönüştürme ve lisans yükümlülüklerini değerlendirme çerçevesi
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsGuideExpanded(!isGuideExpanded)}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>{isGuideExpanded ? 'Rehberi Daralt' : 'Rehberi Aç'}</span>
              {isGuideExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {isGuideExpanded && (
            <div className="space-y-8 animate-fade-in">
              {/* 5 Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {openSourceMeta.howToUseSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-white/10 bg-[#0B101E] p-5 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
                  >
                    <div>
                      <span className="inline-block text-xs font-mono font-extrabold text-cyber-cyan bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 mb-3">
                        ADIM {item.step}
                      </span>
                      <h3 className="text-sm font-extrabold text-white leading-snug mb-2">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* License Table & TOC */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#0B101E] overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                    <h3 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                      <Scale className="w-4 h-4 text-cyber-cyan" />
                      <span>Lisans İşaretlerini Nasıl Yorumlamalı?</span>
                    </h3>
                    <span className="text-[11px] text-gray-400">Hızlı Ticari Değerlendirme Tablosu</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-black/20">
                          <th className="py-3.5 px-4 sm:px-6">Lisans / Durum</th>
                          <th className="py-3.5 px-4">Genel Değerlendirme</th>
                          <th className="py-3.5 px-4 sm:px-6">Pratik Not</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                        {openSourceMeta.licenseGuide.map((row) => (
                          <tr key={row.license} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3.5 px-4 sm:px-6 font-bold text-white whitespace-nowrap">
                              <span
                                className={`inline-block px-2.5 py-1 rounded-lg text-xs border ${
                                  row.badgeColor === 'emerald'
                                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25'
                                    : row.badgeColor === 'amber'
                                    ? 'bg-amber-500/10 text-amber-300 border-amber-500/25'
                                    : row.badgeColor === 'rose'
                                    ? 'bg-rose-500/10 text-rose-300 border-rose-500/25'
                                    : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/25'
                                }`}
                              >
                                {row.license}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 text-gray-200 font-medium">{row.evaluation}</td>
                            <td className="py-3.5 px-4 sm:px-6 text-gray-400 font-light leading-relaxed">
                              {row.note}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* İçindekiler & Önemli Not */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0B101E] p-5 space-y-3">
                    <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <Compass className="w-4 h-4 text-cyber-cyan" />
                      <span>İçindekiler Özeti</span>
                    </h3>
                    <div className="text-xs text-gray-300 space-y-2.5 leading-relaxed font-light">
                      <p>
                        <strong className="text-cyber-cyan font-bold">Bölüm 1 — Açık kaynak yazılımlar (171):</strong>{' '}
                        CRM ve satış, ERP ve operasyon, e-ticaret ve marketplace, üyelik/abonelik/SaaS, chatbot ve müşteri desteği, lead generation, scraping/browser agent, AI agent ve local AI, sesli AI/telefon, WhatsApp, pazarlama/SEO/GEO, video üretimi, platform ve güvenlik altyapısı.
                      </p>
                      <p>
                        <strong className="text-violet-400 font-bold">Bölüm 2 — AI agent skills (28):</strong>{' '}
                        Video ve kreatif üretimi, marketing/SEO, pazarlama/satış, kod/tasarım/test. Skills, bir uygulamanın yerine geçen ayrı bir ürün değil; AI agent’ın tekrarlanan işleri daha tutarlı yapması için hazırlanan uzmanlaşmış yönerge ve araç paketleridir.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5">
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div className="text-xs text-amber-100/90 leading-relaxed space-y-1">
                        <span className="font-extrabold text-amber-300 uppercase tracking-wider block">
                          Önemli Hukuki ve Operasyonel Not
                        </span>
                        <p className="font-light">{openSourceMeta.importantDisclaimer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* STICKY / INTERACTIVE FILTER BAR */}
      <section id="katalog-filtre" className="pt-12 pb-6 bg-[#000000]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-[#0B101E] p-5 sm:p-6 shadow-2xl space-y-6">
            {/* Top Row: Section Tabs + Search + View Toggle */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Section Switcher */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleSectionChange('all')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeSection === 'all'
                      ? 'bg-gradient-cyber text-[#0B0F19] shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Tüm Katalog (199)</span>
                </button>
                <button
                  onClick={() => handleSectionChange('software')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeSection === 'software'
                      ? 'bg-gradient-cyber text-[#0B0F19] shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  <span>Bölüm 1: Açık Kaynak Yazılımlar (171)</span>
                </button>
                <button
                  onClick={() => handleSectionChange('skill')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    activeSection === 'skill'
                      ? 'bg-gradient-violet text-white shadow-lg shadow-violet-500/20'
                      : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Bölüm 2: AI Agent Skills (28)</span>
                </button>
              </div>

              {/* Search & View Mode */}
              <div className="flex items-center gap-3">
                <div className="relative flex-grow lg:w-80">
                  <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Araç adı, CRM, sesli AI, iş fikri, MIT ara..."
                    className="w-full bg-black/50 border border-white/15 rounded-xl pl-10 pr-8 py-2.5 text-xs sm:text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-cyber-cyan transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-xs text-gray-400 hover:text-white cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="flex items-center rounded-xl bg-black/40 border border-white/10 p-1 shrink-0">
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Kart Görünümü"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'grid' ? 'bg-cyan-500/20 text-cyber-cyan' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('compact')}
                    title="Kompakt Tablo Görünümü"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      viewMode === 'compact' ? 'bg-cyan-500/20 text-cyber-cyan' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Second Row: License Filter */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5 text-cyber-cyan" />
                  Lisans Durumu:
                </span>
                {[
                  { id: 'all', label: 'Tüm Lisanslar' },
                  { id: 'esnek', label: 'Ticari Esnek (MIT / Apache / BSD)', dot: 'bg-emerald-400' },
                  { id: 'kosullu', label: 'Koşullu / Copyleft (AGPL / GPL / LGPL)', dot: 'bg-amber-400' },
                  { id: 'dogrulanmali', label: 'Özel Lisans / Teyit Gerekli', dot: 'bg-rose-400' }
                ].map((lic) => (
                  <button
                    key={lic.id}
                    onClick={() => setActiveLicenseGroup(lic.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeLicenseGroup === lic.id
                        ? 'bg-white/15 text-white border-cyber-cyan'
                        : 'bg-white/[0.03] text-gray-400 border-white/10 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {lic.dot && <span className={`w-2 h-2 rounded-full ${lic.dot}`}></span>}
                    <span>{lic.label}</span>
                  </button>
                ))}
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Gösterilen: <strong className="text-cyber-cyan font-extrabold">{filteredTools.length}</strong> / 199 kayıt
                {(activeSection !== 'all' || activeCategory !== 'all' || activeLicenseGroup !== 'all' || searchQuery) && (
                  <button
                    onClick={resetFilters}
                    className="ml-3 text-cyber-cyan hover:underline font-bold cursor-pointer"
                  >
                    Filtreleri Sıfırla
                  </button>
                )}
              </div>
            </div>

            {/* Third Row: Category Pills */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                Kategoriler ({availableCategories.length}):
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    activeCategory === 'all'
                      ? 'bg-cyber-cyan text-[#0B0F19] border-transparent'
                      : 'bg-white/[0.03] border-white/10 text-gray-300 hover:text-white hover:border-white/25'
                  }`}
                >
                  Tüm Kategoriler
                </button>
                {availableCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? cat.section === 'skill'
                          ? 'bg-violet-500 text-white border-transparent'
                          : 'bg-cyber-cyan text-[#0B0F19] border-transparent font-bold'
                        : 'bg-white/[0.03] border-white/10 text-gray-300 hover:text-white hover:border-white/25'
                    }`}
                  >
                    {activeSection === 'all' && (
                      <span
                        className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-extrabold ${
                          cat.section === 'skill'
                            ? 'bg-violet-500/20 text-violet-300'
                            : 'bg-cyan-500/20 text-cyan-300'
                        }`}
                      >
                        {cat.section === 'skill' ? 'Skill' : 'Yazılım'}
                      </span>
                    )}
                    <span>{cat.name}</span>
                    <span className="opacity-60 text-[10px]">({cat.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG SECTIONS & TOOLS LISTING */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {groupedSections.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-[#0B101E] p-12 text-center space-y-4">
              <Search className="w-10 h-10 text-gray-500 mx-auto" />
              <h3 className="text-xl font-bold text-white">Aramanızla eşleşen araç bulunamadı</h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Farklı bir anahtar kelime deneyebilir veya tüm 199 aracı görmek için filtreleri sıfırlayabilirsiniz.
              </p>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-gradient-cyber text-[#0B0F19] font-bold text-xs cursor-pointer"
              >
                Tüm Kataloğu Göster (199)
              </button>
            </div>
          ) : (
            groupedSections.map((sec) => (
              <div key={sec.type} className="space-y-10">
                {/* Section Header Banner */}
                <div
                  className={`rounded-2xl p-6 sm:p-8 border ${
                    sec.type === 'software'
                      ? 'bg-gradient-to-r from-cyan-950/40 via-[#0B101E] to-[#0B101E] border-cyan-500/25'
                      : 'bg-gradient-to-r from-violet-950/40 via-[#0B101E] to-[#0B101E] border-violet-500/25'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        sec.type === 'software'
                          ? 'bg-cyan-500/10 text-cyber-cyan border-cyan-500/20'
                          : 'bg-violet-500/10 text-violet-300 border-violet-500/20'
                      }`}
                    >
                      {sec.type === 'software' ? 'Bölüm 1 · 171 Kayıt' : 'Bölüm 2 · 28 Kayıt'}
                    </span>
                    <span className="text-xs text-gray-400">
                      Bu bölümde filtrelenen: <strong className="text-white">{sec.totalInFilter}</strong> araç
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{sec.meta.title}</h2>
                  <p className="text-sm sm:text-base text-gray-300 mt-2 leading-relaxed font-light max-w-4xl">
                    {sec.meta.desc}
                  </p>
                </div>

                {/* Categories inside Section */}
                {sec.categories.map((cat) => (
                  <div key={cat.id} id={cat.id} className="space-y-5 scroll-mt-28">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            sec.type === 'software' ? 'bg-cyber-cyan' : 'bg-violet-400'
                          }`}
                        ></div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">{cat.name}</h3>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                          {cat.items.length} araç
                        </span>
                      </div>
                    </div>

                    {viewMode === 'grid' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cat.items.map((tool) => (
                          <article
                            key={tool.id}
                            className="group rounded-2xl border border-white/10 bg-[#0A0F1D] hover:border-cyan-500/35 transition-all duration-300 flex flex-col justify-between p-6 shadow-lg"
                          >
                            <div className="space-y-4">
                              {/* Card Top Meta */}
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                    <span className="text-[10px] font-mono font-bold text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                      #{String(tool.index).padStart(3, '0')}
                                    </span>
                                    <span
                                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded border ${
                                        tool.section === 'software'
                                          ? 'bg-cyan-500/10 text-cyber-cyan border-cyan-500/20'
                                          : 'bg-violet-500/10 text-violet-300 border-violet-500/20'
                                      }`}
                                    >
                                      {tool.category}
                                    </span>
                                  </div>
                                  <h4 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-cyber-cyan transition-colors">
                                    <a
                                      href={tool.url}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      className="inline-flex items-center gap-2 hover:underline"
                                    >
                                      <span>{tool.name}</span>
                                      <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100" />
                                    </a>
                                  </h4>
                                  <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="text-[11px] font-mono text-gray-400 hover:text-cyber-cyan flex items-center gap-1 mt-0.5"
                                  >
                                    <GithubIcon className="w-3 h-3" />
                                    <span>{tool.repoPath}</span>
                                  </a>
                                </div>

                                <a
                                  href={tool.url}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  className="shrink-0 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-cyber-cyan hover:text-[#0B0F19] text-gray-200 border border-white/10 text-xs font-bold transition-all flex items-center gap-1"
                                >
                                  <GithubIcon className="w-3.5 h-3.5" />
                                  <span>GitHub</span>
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                              </div>

                              {/* Tool Summary Description */}
                              <p className="text-sm text-gray-200 leading-relaxed font-normal bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                                {tool.description}
                              </p>

                              {/* Use Case & Business Model Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="rounded-xl bg-white/[0.02] border border-white/10 p-3.5 space-y-1">
                                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-cyber-cyan flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5" />
                                    <span>Nerede kullanılır?</span>
                                  </div>
                                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                                    {tool.whereToUse}
                                  </p>
                                </div>

                                <div className="rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 p-3.5 space-y-1">
                                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    <span>Bundan ne iş çıkar?</span>
                                  </div>
                                  <p className="text-xs text-emerald-100/90 leading-relaxed font-medium">
                                    {tool.businessIdea}
                                  </p>
                                </div>
                              </div>

                              {/* Free usage & Caution */}
                              {tool.freeUsage && (
                                <div className="text-xs text-gray-300 flex items-start gap-2 bg-white/[0.015] px-3.5 py-2.5 rounded-xl border border-white/5">
                                  <Coins className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                  <div>
                                    <strong className="text-white font-semibold">Ücretsiz kullanım ve sınırlar: </strong>
                                    <span className="font-light">{tool.freeUsage}</span>
                                  </div>
                                </div>
                              )}

                              {tool.caution && (
                                <div className="text-xs text-amber-200/90 flex items-start gap-2 bg-amber-500/[0.07] px-3.5 py-2.5 rounded-xl border border-amber-500/20">
                                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                  <div>
                                    <strong className="text-amber-300 font-bold">Dikkat: </strong>
                                    <span className="font-light">{tool.caution}</span>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Card Footer: License & Verification Status */}
                            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                              <div className="flex items-center gap-1.5">
                                <span className="text-gray-400 font-semibold">
                                  {tool.section === 'skill' ? 'Skill/Lisans:' : 'Lisans:'}
                                </span>
                                <span
                                  className={`px-2.5 py-0.5 rounded-md font-bold border ${getLicenseBadgeStyle(
                                    tool.licenseGroup
                                  )}`}
                                >
                                  {tool.license}
                                </span>
                              </div>

                              <div className="flex items-center gap-1 text-gray-400">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0" />
                                <span>{tool.verificationStatus}</span>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : (
                      /* COMPACT TABLE VIEW */
                      <div className="rounded-2xl border border-white/10 bg-[#0A0F1D] overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-white/10 text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-black/30">
                                <th className="py-3 px-4"># / Araç</th>
                                <th className="py-3 px-4">Ne Yapar & Nerede Kullanılır?</th>
                                <th className="py-3 px-4">Bundan Ne İş Çıkar?</th>
                                <th className="py-3 px-4">Lisans & Durum</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-xs">
                              {cat.items.map((tool) => (
                                <tr key={tool.id} className="hover:bg-white/[0.02] transition-colors">
                                  <td className="py-3.5 px-4 align-top w-52">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[10px] font-mono text-gray-500">
                                        #{String(tool.index).padStart(3, '0')}
                                      </span>
                                      <a
                                        href={tool.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="font-extrabold text-white hover:text-cyber-cyan inline-flex items-center gap-1"
                                      >
                                        <span>{tool.name}</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-500 mt-0.5">{tool.repoPath}</div>
                                  </td>
                                  <td className="py-3.5 px-4 align-top space-y-1 max-w-md">
                                    <p className="text-gray-200 font-medium">{tool.description}</p>
                                    <p className="text-gray-400 font-light">
                                      <strong className="text-cyber-cyan">Kullanım:</strong> {tool.whereToUse}
                                    </p>
                                    {tool.caution && (
                                      <p className="text-amber-300/90 text-[11px]">
                                        <strong>Dikkat:</strong> {tool.caution}
                                      </p>
                                    )}
                                  </td>
                                  <td className="py-3.5 px-4 align-top text-emerald-200 font-medium max-w-xs">
                                    {tool.businessIdea}
                                  </td>
                                  <td className="py-3.5 px-4 align-top w-64 space-y-1.5">
                                    <span
                                      className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold border ${getLicenseBadgeStyle(
                                        tool.licenseGroup
                                      )}`}
                                    >
                                      {tool.license}
                                    </span>
                                    {tool.freeUsage && (
                                      <div className="text-[11px] text-gray-400 font-light">{tool.freeUsage}</div>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </section>

      {/* EDITORIAL & USAGE NOTES SECTION */}
      <section className="pt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-[#0B101E] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Info className="w-5 h-5 text-cyber-cyan" />
              <h2 className="text-xl font-extrabold text-white">Yayın ve Kullanım Notları</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
              <div className="space-y-3">
                <div>
                  <strong className="text-white font-bold block mb-1">Editoryal amaç:</strong>
                  <p>{openSourceMeta.editorialNotes.purpose}</p>
                </div>
                <div>
                  <strong className="text-white font-bold block mb-1">Güncellenme tarihi:</strong>
                  <p>{openSourceMeta.editorialNotes.updatedAt}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <strong className="text-white font-bold block mb-1">Doğrulama seviyesi:</strong>
                  <p>{openSourceMeta.editorialNotes.verification}</p>
                </div>
                <div>
                  <strong className="text-white font-bold block mb-1">Lisans ve haklar:</strong>
                  <p>{openSourceMeta.editorialNotes.rights}</p>
                </div>
              </div>
            </div>

            {/* Bottom CTA inside Library */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-extrabold text-white">
                  Bu açık kaynak araçları kendi girişiminize veya kurumsal yapınıza entegre etmek mi istiyorsunuz?
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Dijital Hezarfen Yazılım & AI MVP uygulama ekibiyle doğru mimariyi seçip hızla ürünleştirin.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onNavigate?.('/uygulama/yazilim-mvp')}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white cursor-pointer transition-colors"
                >
                  Yazılım & AI MVP Hizmeti
                </button>
                <button
                  onClick={() => onOpenApplyModal?.('girisim')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-cyber text-[#0B0F19] text-xs font-extrabold cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  Projen İçin Başvur
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
