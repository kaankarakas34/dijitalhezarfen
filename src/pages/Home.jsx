import React from 'react';
import Hero from '../components/Hero';
import AboutPillars from '../components/AboutPillars';
import Audiences from '../components/Audiences';
import Ecosystem from '../components/Ecosystem';
import EntrepreneurTunnel from '../components/EntrepreneurTunnel';
import AppServices from '../components/AppServices';
import OtherPrograms from '../components/OtherPrograms';
import StartupStages from '../components/StartupStages';
import BlogSection from '../components/BlogSection';

export default function Home({ onOpenApplyModal, onFocusSection, onNavigate, lang }) {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Section 1: Hero */}
      <Hero lang={lang} onOpenApplyModal={onOpenApplyModal} />
      
      {/* Section 3: Pillars */}
      <AboutPillars lang={lang} />

      {/* Section 3: Featured Publications */}
      <BlogSection lang={lang} onNavigate={onNavigate} />

      {/* Section 2: Audiences */}
      <Audiences lang={lang} onOpenApplyModal={onOpenApplyModal} onFocusSection={onFocusSection} />

      {/* Section 3 cont: Ecosystem */}
      <Ecosystem lang={lang} />

      {/* Section 4: Entrepreneur Tunnel */}
      <EntrepreneurTunnel lang={lang} onOpenApplyModal={onOpenApplyModal} />

      {/* Section 7: Application Services */}
      <AppServices lang={lang} onOpenApplyModal={onOpenApplyModal} />

      {/* Section 5: Modular Academy Programs */}
      <OtherPrograms lang={lang} onOpenApplyModal={onOpenApplyModal} />

      {/* Section 8: Startup Stages progress */}
      <StartupStages lang={lang} onOpenApplyModal={onOpenApplyModal} />

    </div>
  );
}
