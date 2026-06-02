/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DesktopDashboardMockup from './components/DesktopDashboardMockup';
import VisionMission from './components/VisionMission';
import ProblemsSolutions from './components/ProblemsSolutions';
import InteractiveFeatureExplorer from './components/InteractiveFeatureExplorer';
import Testimonials from './components/Testimonials';
import PartnershipCTA from './components/PartnershipCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  
  // Custom scrolling function for CTAs
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-vintage-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-accent/30 selection:text-brand-primary">
      
      {/* 1. Header Navigation */}
      <Header 
        onPartnerClick={() => scrollToSection('partnership')} 
        onDemoClick={() => scrollToSection('features-explorer')}
      />

      <main>
        
        {/* 2. Hero Section */}
        <Hero 
          onPartnerClick={() => scrollToSection('partnership')} 
          onLearnMoreClick={() => scrollToSection('features-explorer')}
        />

        {/* 3. Problems and Solutions (The Why / Case Study) */}
        <ProblemsSolutions />

        {/* 4. About Section */}
        <About />

        {/* 5. Interactive Demo Playground (Features Explorer) */}
        <InteractiveFeatureExplorer />

        {/* 4.5 Desktop Laptop Dashboard Command Center */}
        <DesktopDashboardMockup />

        {/* 6. Vision and Mission Cards */}
        <VisionMission />

        {/* 7. Fictional / Realistic Testimonials Section */}
        <Testimonials />

        {/* 8. Accordion FAQ Segment */}
        <FAQ />

        {/* 9. Contact / Partnership Quote CTA */}
        <PartnershipCTA />

      </main>

      {/* 10. Footer Section */}
      <Footer />

    </div>
  );
}
