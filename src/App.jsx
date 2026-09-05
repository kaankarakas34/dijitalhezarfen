import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ForStartups from './pages/ForStartups';
import Fikir from './pages/Fikir';
import PreSeed from './pages/PreSeed';
import Seed from './pages/Seed';
import SeriesA from './pages/SeriesA';
import Scaleup from './pages/Scaleup';
import Tunnel from './pages/Tunnel';
import AkademiHome from './pages/AkademiHome';
import Egitimler from './pages/Egitimler';
import AkademiCategory from './pages/AkademiCategory';
import UygulamaHome from './pages/UygulamaHome';
import UygulamaMVP from './pages/UygulamaMVP';
import UygulamaAI from './pages/UygulamaAI';
import UygulamaGrowth from './pages/UygulamaGrowth';
import UygulamaSatis from './pages/UygulamaSatis';
import UygulamaFinans from './pages/UygulamaFinans';
import UygulamaYonetim from './pages/UygulamaYonetim';
import UygulamaMedya from './pages/UygulamaMedya';
import GrowthVenture from './pages/GrowthVenture';
import YatirimHazirlik from './pages/YatirimHazirlik';
import Globallesme from './pages/Globallesme';
import Kurumsal from './pages/Kurumsal';
import Medya from './pages/Medya';
import Yayinlar from './pages/Yayinlar';
import YayinDetay from './pages/YayinDetay';
import Basvur from './pages/Basvur';
import Iletisim from './pages/Iletisim';
import Sss from './pages/Sss';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalType, setModalType] = useState('genel');
  const [initialStageId, setInitialStageId] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  const [lang, setLang] = useState('tr');

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
    const handleHashChange = () => {
      const raw = window.location.hash.slice(1) || '/';

      // If it doesn't start with '/', it is an in-page anchor like #kaynak-1 or #section-id
      if (!raw.startsWith('/')) {
        const el = document.getElementById(raw);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      setCurrentPath(raw);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // If no hash present, default to #/
    if (!window.location.hash) {
      window.location.hash = '/';
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path) => {
    window.location.hash = path;
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
    if (currentPath.startsWith('/yayinlar/')) {
      return <YayinDetay slug={currentPath.replace('/yayinlar/', '')} lang={lang} onNavigate={handleNavigate} />;
    }

    switch (currentPath) {
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
        return <Yayinlar lang={lang} />;
      case '/etkinlikler':
        return <Yayinlar lang={lang} />;
      case '/icerikler':
        return <Yayinlar lang={lang} />;
      case '/basvur':
        return <Basvur lang={lang} onOpenApplyModal={handleOpenApplyModal} />;
      case '/iletisim':
        return <Iletisim lang={lang} onNavigate={handleNavigate} onOpenApplyModal={handleOpenApplyModal} />;
      case '/sik-sorulan-sorular':
        return <Sss lang={lang} onNavigate={handleNavigate} onOpenApplyModal={handleOpenApplyModal} />;
      default:
        return <Home lang={lang} onOpenApplyModal={handleOpenApplyModal} onFocusSection={handleFocusSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-gray-100 flex flex-col justify-between font-sans selection:bg-cyan-500/30 selection:text-white relative">
      
      {/* Dynamic Navigation Header */}
      <Navbar lang={lang} onLanguageChange={handleLanguageChange} onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />

      {/* Dynamic Routing Container */}
      <main className="flex-grow">
        {renderPage()}
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
