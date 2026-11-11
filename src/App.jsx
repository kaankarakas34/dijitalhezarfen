import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';
import Home from './pages/Home';
import { getArticleBySlug } from './data/articles';
import { SITE_ORIGIN, getRouteSeoMeta } from './data/seoRoutes';

// Lazy-loaded routes for lean initial JS bundle & fast homepage LCP
const About = lazy(() => import('./pages/About'));
const ForStartups = lazy(() => import('./pages/ForStartups'));
const Fikir = lazy(() => import('./pages/Fikir'));
const PreSeed = lazy(() => import('./pages/PreSeed'));
const Seed = lazy(() => import('./pages/Seed'));
const SeriesA = lazy(() => import('./pages/SeriesA'));
const Scaleup = lazy(() => import('./pages/Scaleup'));
const Tunnel = lazy(() => import('./pages/Tunnel'));
const AkademiHome = lazy(() => import('./pages/AkademiHome'));
const Egitimler = lazy(() => import('./pages/Egitimler'));
const AkademiCategory = lazy(() => import('./pages/AkademiCategory'));
const UygulamaHome = lazy(() => import('./pages/UygulamaHome'));
const UygulamaMVP = lazy(() => import('./pages/UygulamaMVP'));
const UygulamaAI = lazy(() => import('./pages/UygulamaAI'));
const UygulamaGrowth = lazy(() => import('./pages/UygulamaGrowth'));
const UygulamaSatis = lazy(() => import('./pages/UygulamaSatis'));
const UygulamaFinans = lazy(() => import('./pages/UygulamaFinans'));
const UygulamaYonetim = lazy(() => import('./pages/UygulamaYonetim'));
const UygulamaMedya = lazy(() => import('./pages/UygulamaMedya'));
const GrowthVenture = lazy(() => import('./pages/GrowthVenture'));
const YatirimHazirlik = lazy(() => import('./pages/YatirimHazirlik'));
const Globallesme = lazy(() => import('./pages/Globallesme'));
const Kurumsal = lazy(() => import('./pages/Kurumsal'));
const Medya = lazy(() => import('./pages/Medya'));
const Yayinlar = lazy(() => import('./pages/Yayinlar'));
const YayinDetay = lazy(() => import('./pages/YayinDetay'));
const Basvur = lazy(() => import('./pages/Basvur'));
const Iletisim = lazy(() => import('./pages/Iletisim'));
const Sss = lazy(() => import('./pages/Sss'));
const AcikKaynakKutuphanesi = lazy(() => import('./pages/AcikKaynakKutuphanesi'));

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalType, setModalType] = useState('genel');
  const [initialStageId, setInitialStageId] = useState('');
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.slice(1);
    if (hash && hash.startsWith('/')) {
      window.history.replaceState({}, '', hash);
      return hash;
    }
    const path = window.location.pathname;
    if (path && path !== '/') return path;
    return '/';
  };
  const [currentPath, setCurrentPath] = useState(getInitialPath);
  const [lang, setLang] = useState('tr');

  // Sync canonical, title, and description for non-article routes on SPA navigation
  useEffect(() => {
    const clean = currentPath.replace(/\/+$/, '') || '/';
    const isArticleRoute = clean.startsWith('/yayinlar/') || (clean !== '/' && Boolean(getArticleBySlug(clean.slice(1))));
    if (isArticleRoute) return;

    const meta = getRouteSeoMeta(clean);
    document.title = meta.title;
    const descEl = document.head.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', meta.description);

    const canonicalHref = `${SITE_ORIGIN}${clean === '/' ? '/' : clean}`;
    let canonicalEl = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalHref);
  }, [currentPath]);

  useEffect(() => {
    // 1. Check local storage
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setLang(savedLang);
    } else {
      // 2. Browser language check
      const browserLang = navigator.language || navigator.userLanguage;
      const isBrowserTr = browserLang && browserLang.toLowerCase().startsWith('tr');
      const initialLang = isBrowserTr ? 'tr' : 'en';
      setLang(initialLang);
      localStorage.setItem('lang', initialLang);
    }

    // 3. Geolocation IP check (hybrid fallback)
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          if (data.country_code !== 'TR' && !savedLang) {
            setLang('en');
            localStorage.setItem('lang', 'en');
          }
        }
      })
      .catch((err) => console.log('Geolocation detection failed:', err));
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const next = window.location.pathname || '/';
      setCurrentPath(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleHashChange = () => {
      const raw = window.location.hash.slice(1);
      if (!raw) return;

      // Backward support for legacy #/path links
      if (raw.startsWith('/')) {
        window.history.replaceState({}, '', raw);
        setCurrentPath(raw);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // In-page anchor like #kaynak-1 or #section-id
      const el = document.getElementById(raw);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavigate = (path) => {
    const targetPath = path?.startsWith('/') ? path : `/${path || ''}`;
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  const handleOpenApplyModal = (type = 'genel', stageId = '') => {
    setModalType(type);
    setInitialStageId(stageId);
    setIsApplyModalOpen(true);
  };

  const handleFocusSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderPage = () => {
    const cleanPath = currentPath.replace(/\/+$/, '') || '/';
    if (cleanPath.startsWith('/yayinlar/')) {
      return <YayinDetay slug={cleanPath.replace('/yayinlar/', '')} lang={lang} onNavigate={handleNavigate} />;
    }
    const directArticle = cleanPath !== '/' ? getArticleBySlug(cleanPath.slice(1)) : null;
    if (directArticle) {
      return <YayinDetay slug={directArticle.slug} lang={lang} onNavigate={handleNavigate} />;
    }

    switch (cleanPath) {
      case '/':
        return <Home lang={lang} onOpenApplyModal={handleOpenApplyModal} onFocusSection={handleFocusSection} onNavigate={handleNavigate} />;
      case '/dijital-hezarfen':
        return <About lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler':
        return <ForStartups lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/fikir-asamasi':
        return <Fikir lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/pre-seed':
        return <PreSeed lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/seed':
        return <Seed lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/series-a-ve-sonrasi':
        return <SeriesA lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/scale-up':
        return <Scaleup lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi':
        return <AkademiHome lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/girisimcilik-tuneli':
        return <Tunnel lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/akademi/egitimler':
        return <Egitimler lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/pazarlama-satis':
        return <AkademiCategory lang={lang} type="pazarlama-satis" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/teknoloji-yapay-zeka':
        return <AkademiCategory lang={lang} type="teknoloji-yapay-zeka" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/finans-hukuk-yonetim':
        return <AkademiCategory lang={lang} type="finans-hukuk-yonetim" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/kurumsal':
        return <AkademiCategory lang={lang} type="kurumsal" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/uygulama':
        return <UygulamaHome lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/uygulama/yazilim-mvp':
        return <UygulamaMVP lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/yapay-zeka-otomasyon':
        return <UygulamaAI lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/dijital-pazarlama-growth':
        return <UygulamaGrowth lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/satis-crm':
        return <UygulamaSatis lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/finans-hukuk':
        return <UygulamaFinans lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/yonetim-organizasyon':
        return <UygulamaYonetim lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/medya-tasarim':
        return <UygulamaMedya lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/buyume-yatirim':
        return <GrowthVenture lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/buyume-yatirim/yatirima-hazirlik':
        return <YatirimHazirlik lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/buyume-yatirim/uluslararasilasma':
        return <Globallesme lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/kurumsal':
        return <Kurumsal lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/medya':
        return <Medya lang={lang} onNavigate={handleNavigate} />;
      case '/yayinlar':
        return <Yayinlar lang={lang} onNavigate={handleNavigate} />;
      case '/etkinlikler':
        return <Yayinlar lang={lang} onNavigate={handleNavigate} />;
      case '/icerikler':
        return <Yayinlar lang={lang} onNavigate={handleNavigate} />;
      case '/basvur':
        return <Basvur lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/iletisim':
        return <Iletisim lang={lang} onNavigate={handleNavigate} onOpenApplyModal={handleOpenApplyModal} />;
      case '/sik-sorulan-sorular':
        return <Sss lang={lang} onNavigate={handleNavigate} onOpenApplyModal={handleOpenApplyModal} />;
      case '/acik-kaynak-kutuphanesi':
      case '/acik-kaynak-araclar':
        return <AcikKaynakKutuphanesi lang={lang} onNavigate={handleNavigate} onOpenApplyModal={handleOpenApplyModal} />;
      default:
        return <Home lang={lang} onOpenApplyModal={handleOpenApplyModal} onFocusSection={handleFocusSection} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-gray-100 flex flex-col justify-between font-sans selection:bg-cyan-500/30 selection:text-white relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-cyan-400 focus:text-[#080A0F] focus:font-semibold focus:text-xs"
      >
        {lang === 'tr' ? 'İçeriğe geç' : 'Skip to content'}
      </a>

      {/* Dynamic Navigation Header */}
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />

      {/* Dynamic Routing Container */}
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-[#000000]" />}>
          {renderPage()}
        </Suspense>
      </main>

      {/* Footer & Final CTA */}
      <Footer lang={lang} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />

      {/* Interactive Application Modal Wizard */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialType={modalType}
        initialStageId={initialStageId}
      />
      
    </div>
  );
}

export default App;
