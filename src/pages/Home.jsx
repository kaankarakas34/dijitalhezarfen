import React from 'react';
import Hero from '../components/Hero';
import AboutPillars from '../components/AboutPillars';
import Audiences from '../components/Audiences';
import Ecosystem from '../components/Ecosystem';
import EntrepreneurTunnel from '../components/EntrepreneurTunnel';
import LearningVsApp from '../components/LearningVsApp';
import AppServices from '../components/AppServices';
import OtherPrograms from '../components/OtherPrograms';
import StartupStages from '../components/StartupStages';
import GrowthInvestment from '../components/GrowthInvestment';
import MediaSection from '../components/MediaSection';
import BlogSection from '../components/BlogSection';
import EventsSection from '../components/EventsSection';
import PortfolioReferences from '../components/PortfolioReferences';

export default function Home({ onOpenApplyModal, onFocusSection }) {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Section 1: Hero */}
      <Hero onOpenApplyModal={onOpenApplyModal} />
      
      {/* Section 3: Pillars */}
      <AboutPillars />

      {/* Section 2: Audiences */}
      <Audiences onOpenApplyModal={onOpenApplyModal} onFocusSection={onFocusSection} />

      {/* Section 3 cont: Ecosystem */}
      <Ecosystem />

      {/* Section 4: Entrepreneur Tunnel */}
      <EntrepreneurTunnel onOpenApplyModal={onOpenApplyModal} />

      {/* Section 6: Learning vs Application */}
      <LearningVsApp />

      {/* Section 7: Application Services */}
      <AppServices onOpenApplyModal={onOpenApplyModal} />

      {/* Section 5: Modular Academy Programs */}
      <OtherPrograms onOpenApplyModal={onOpenApplyModal} />

      {/* Section 8: Startup Stages progress */}
      <StartupStages onOpenApplyModal={onOpenApplyModal} />

      {/* Section 9: Growth & Venture */}
      <GrowthInvestment onOpenApplyModal={onOpenApplyModal} />

      {/* Section 10: Media */}
      <MediaSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Section 11: Events */}
      <EventsSection onOpenApplyModal={onOpenApplyModal} />

      {/* Section 12: Team & Portfolio Results */}
      <PortfolioReferences />
    </div>
  );
}
