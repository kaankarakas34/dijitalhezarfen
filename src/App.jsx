import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audiences from './components/Audiences';
import AboutPillars from './components/AboutPillars';
import Ecosystem from './components/Ecosystem';
import EntrepreneurTunnel from './components/EntrepreneurTunnel';
import OtherPrograms from './components/OtherPrograms';
import LearningVsApp from './components/LearningVsApp';
import AppServices from './components/AppServices';
import StartupStages from './components/StartupStages';
import GrowthInvestment from './components/GrowthInvestment';
import MediaSection from './components/MediaSection';
import EventsSection from './components/EventsSection';
import PortfolioReferences from './components/PortfolioReferences';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModal';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalType, setModalType] = useState('genel');
  const [initialStageId, setInitialStageId] = useState('');

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

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col justify-between font-sans selection:bg-cyan-500/30 selection:text-white">
      
      {/* Dynamic Navigation Header */}
      <Navbar onOpenApplyModal={handleOpenApplyModal} />

      {/* Main Home Page Sections */}
      <main className="flex-grow">
        
        {/* Section 1: Hero area */}
        <Hero onOpenApplyModal={handleOpenApplyModal} />
        
        {/* Section 3: Pillars (Scalable, Sustainable, Smart) */}
        <AboutPillars />

        {/* Section 2: Kimler İçin (4 target segments) */}
        <Audiences onOpenApplyModal={handleOpenApplyModal} onFocusSection={handleFocusSection} />

        {/* Section 3 cont: Ecosystem main components */}
        <Ecosystem />

        {/* Section 4: Entrepreneur Tunnel curriculum */}
        <EntrepreneurTunnel onOpenApplyModal={handleOpenApplyModal} />

        {/* Section 6: Öğrenmek Yetmez (Academy vs App comparison) */}
        <LearningVsApp />

        {/* Section 7: Application Services */}
        <AppServices onOpenApplyModal={handleOpenApplyModal} />

        {/* Section 5: Modular Academy Programs */}
        <OtherPrograms onOpenApplyModal={handleOpenApplyModal} />

        {/* Section 8: Startup stages roadmap */}
        <StartupStages onOpenApplyModal={handleOpenApplyModal} />

        {/* Section 9: Growth & Venture/Investment */}
        <GrowthInvestment onOpenApplyModal={handleOpenApplyModal} />

        {/* Section 10: YouTube/Podcast Media */}
        <MediaSection />

        {/* New Blog Section */}
        <BlogSection />

        {/* Section 11: Events Slider */}
        <EventsSection onOpenApplyModal={handleOpenApplyModal} />

        {/* Section 12: Team & Portfolio Results */}
        <PortfolioReferences />
        
      </main>

      {/* Footer & Final CTA (Section 13) */}
      <Footer onOpenApplyModal={handleOpenApplyModal} />

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
