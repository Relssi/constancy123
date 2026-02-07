
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VSLSection from './components/VSLSection';
import Benefits from './components/Benefits';
import Comparison from './components/Comparison';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Composition from './components/Composition';
import AppPromo from './components/AppPromo';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

const App: React.FC = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-black relative">
      {/* Linha de continuidade visual global */}
      <div className="continuity-line opacity-[0.07] md:opacity-20"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <VSLSection />
        <PainPoints />
        <Benefits />
        <Comparison />
        <HowItWorks />
        <Composition />
        <AppPromo />
        <FAQ />
        <Testimonials />
        <FinalCTA />
      </main>
      
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
