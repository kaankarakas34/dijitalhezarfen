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
import Etkinlikler from './pages/Etkinlikler';
import Blog from './pages/Blog';
import Basvur from './pages/Basvur';
import Iletisim from './pages/Iletisim';
import Sss from './pages/Sss';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalType, setModalType] = useState('genel');
  const [initialStageId, setInitialStageId] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.slice(1) || '/';
      setCurrentPath(path);
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
    switch (currentPath) {
      case '/':
        return <Home onOpenApplyModal={handleOpenApplyModal} onFocusSection={handleFocusSection} />;
      case '/dijital-hezarfen':
        return <About onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler':
        return <ForStartups onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/fikir-asamasi':
        return <Fikir onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/pre-seed':
        return <PreSeed onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/seed':
        return <Seed onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/series-a-ve-sonrasi':
        return <SeriesA onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/girisimler/scale-up':
        return <Scaleup onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi':
        return <AkademiHome onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/girisimcilik-tuneli':
        return <Tunnel onOpenApplyModal={handleOpenApplyModal} />;
      case '/akademi/egitimler':
        return <Egitimler onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/pazarlama-satis':
        return <AkademiCategory type="pazarlama-satis" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/teknoloji-yapay-zeka':
        return <AkademiCategory type="teknoloji-yapay-zeka" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/finans-hukuk-yonetim':
        return <AkademiCategory type="finans-hukuk-yonetim" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/akademi/kurumsal':
        return <AkademiCategory type="kurumsal" onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/uygulama':
        return <UygulamaHome onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/uygulama/yazilim-mvp':
        return <UygulamaMVP onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/yapay-zeka-otomasyon':
        return <UygulamaAI onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/dijital-pazarlama-growth':
        return <UygulamaGrowth onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/satis-crm':
        return <UygulamaSatis onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/finans-hukuk':
        return <UygulamaFinans onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/yonetim-organizasyon':
        return <UygulamaYonetim onOpenApplyModal={handleOpenApplyModal} />;
      case '/uygulama/medya-tasarim':
        return <UygulamaMedya onOpenApplyModal={handleOpenApplyModal} />;
      case '/buyume-yatirim':
        return <GrowthVenture onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />;
      case '/buyume-yatirim/yatirima-hazirlik':
        return <YatirimHazirlik onOpenApplyModal={handleOpenApplyModal} />;
      case '/buyume-yatirim/uluslararasilasma':
        return <Globallesme onOpenApplyModal={handleOpenApplyModal} />;
      case '/kurumsal':
        return <Kurumsal onOpenApplyModal={handleOpenApplyModal} />;
      case '/medya':
        return <Medya onNavigate={handleNavigate} />;
      case '/etkinlikler':
        return <Etkinlikler onOpenApplyModal={handleOpenApplyModal} />;
      case '/icerikler':
        return <Blog />;
      case '/basvur':
        return <Basvur onOpenApplyModal={handleOpenApplyModal} />;
      case '/iletisim':
        return <Iletisim onNavigate={handleNavigate} onOpenApplyModal={handleOpenApplyModal} />;
      case '/sik-sorulan-sorular':
        return <Sss onNavigate={handleNavigate} />;
      default:
        return <Home onOpenApplyModal={handleOpenApplyModal} onFocusSection={handleFocusSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-gray-100 flex flex-col justify-between font-sans selection:bg-cyan-500/30 selection:text-white relative">
      
      {/* Dynamic Navigation Header */}
      <Navbar onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />

      {/* Dynamic Routing Container */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer & Final CTA */}
      <Footer onOpenApplyModal={handleOpenApplyModal} onNavigate={handleNavigate} />

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
