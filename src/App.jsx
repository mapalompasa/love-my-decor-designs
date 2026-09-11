import React, { useState } from 'react';
import TopNav from './components/TopNav';
import HeroSection from './components/HeroSection';
import MarqueeTicker from './components/MarqueeTicker';
import PortfolioGrid from './components/PortfolioGrid';
import ProjectModal from './components/ProjectModal';
import BookingPortal from './components/BookingPortal';
import FounderStory from './components/FounderStory';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import { useDevice } from './hooks/useDevice';

export default function App() {
  const device = useDevice();
  const [selectedProject, setSelectedProject] = useState(null);
  const [bookingPrefilledProject, setBookingPrefilledProject] = useState(null);

  const handleSelectForBooking = (project) => {
    setBookingPrefilledProject(project);
    // Smooth scroll to booking portal
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-luxury-cream selection:text-black">
      {/* Fixed Brutalist Header */}
      <TopNav />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Massive Typographic Hero */}
        <HeroSection />

        {/* Continuous Editorial Ticker */}
        <MarqueeTicker />

        {/* Curated Portfolio Grid (The Solution to Bride Social Media Fatigue) */}
        <PortfolioGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Founder & Scenography Pillars */}
        <FounderStory />

        {/* Integrated Brutalist WhatsApp Booking Portal */}
        <BookingPortal
          prefilledProject={bookingPrefilledProject}
          onClearPrefilledProject={() => setBookingPrefilledProject(null)}
        />

        {/* Direct Public Instagram Feed Preview */}
        <InstagramFeed />
      </main>

      {/* Editorial Brutalist Footer */}
      <Footer />

      {/* Interactive Lightbox / Project Specifications Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectForBooking={handleSelectForBooking}
        />
      )}
    </div>
  );
}
