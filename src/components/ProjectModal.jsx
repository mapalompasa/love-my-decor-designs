import React, { useEffect, useState } from 'react';
import { brandConfig } from '../data/brandConfig';
import { IconClose, IconWhatsApp, IconDiagonalArrow, IconMapPin, IconUsers, IconCalendar, IconSparkles } from './Icons';

export default function ProjectModal({ project, onClose, onSelectForBooking }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const images = [project.image, project.secondaryImage].filter(Boolean);

  const directWhatsAppUrl = `https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hello Selina Machima, I am captivated by the design for "${project.title}" (${project.category}, ${project.venue}). I would love to discuss a similar luxury setup for my upcoming event.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#111111] border border-white/20 text-white overflow-y-auto flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-[#140e16] border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#c966d4] px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 border border-[#83338a]/40">
              {project.category}
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-[11px] sm:text-xs text-neutral-400 font-mono">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95"
            aria-label="Close project specifications"
          >
            <IconClose className="w-5 h-5 stroke-white" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[#110c13]">
          
          {/* Main Title & Venue info */}
          <div>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-[900] tracking-tighter uppercase leading-tight mb-2 sm:mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-300 font-medium">
              <span className="flex items-center gap-1.5 text-[#f6eff8]">
                <IconMapPin className="w-4 h-4 stroke-[#c966d4]" />
                <span>{project.venue}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <IconUsers className="w-4 h-4 stroke-neutral-400" />
                <span>{project.guestCount}</span>
              </span>
              <span className="flex items-center gap-1.5 text-[#c966d4]">
                <IconSparkles className="w-4 h-4 stroke-[#c966d4]" />
                <span>{project.budgetTier} Tier</span>
              </span>
            </div>
          </div>

          {/* Photo Showcase (Primary & Secondary views) */}
          <div className="space-y-3">
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden bg-black border border-white/10">
              <img
                src={images[activeImageIdx]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500"
                loading="eager"
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/80 backdrop-blur-md text-[11px] font-mono tracking-widest uppercase border border-white/10 text-neutral-300">
                Photo {activeImageIdx + 1} of {images.length}
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-20 sm:w-24 h-16 sm:h-20 overflow-hidden border transition-all ${
                      activeImageIdx === idx ? 'border-[#83338a] ring-1 ring-[#83338a]' : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Scenography Description */}
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">
              Architectural Concept &amp; Styling
            </h3>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Florals & Materials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#c966d4] mb-3 flex items-center gap-2">
                <span>Curated Floral Architecture</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.florals.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#f6eff8] mb-3 flex items-center gap-2">
                <span>Key Scenography Elements</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.elements.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Society Note */}
          {project.clientNote && (
            <div className="p-4 bg-white/[0.03] border-l-2 border-[#83338a] text-xs sm:text-sm text-neutral-300 italic">
              "{project.clientNote}"
            </div>
          )}

          {/* Demo Mode Restriction Notice */}
          {showDemoNotice && (
            <div className="p-4 bg-[#251029] border border-[#c966d4]/50 text-white text-xs sm:text-sm font-semibold flex items-center justify-between gap-3 animate-fadeIn">
              <span>This step would usually take you to WhatsApp, but it is currently restricted in demo mode</span>
              <button
                type="button"
                onClick={() => setShowDemoNotice(false)}
                className="text-neutral-400 hover:text-white p-1 text-xs uppercase font-mono"
              >
                ✕
              </button>
            </div>
          )}

          {/* Action Triggers */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => setShowDemoNotice(true)}
              className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#83338a] text-white font-[900] text-xs uppercase tracking-tight hover:bg-[#993da3] transition-all group shadow-lg shadow-[#83338a]/30 border border-[#c966d4]/40"
            >
              <IconWhatsApp className="w-4 h-4 fill-white" />
              <span>Inquire on WhatsApp (+260 979 176 151)</span>
              <IconDiagonalArrow className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                onClose();
                if (onSelectForBooking) {
                  onSelectForBooking(project);
                }
              }}
              className="flex-1 flex items-center justify-center gap-3 py-4 border border-white/20 hover:border-[#83338a] hover:bg-[#83338a]/15 text-white font-[900] text-xs uppercase tracking-tight transition-all"
            >
              <span>Pre-fill in Booking Portal</span>
              <IconDiagonalArrow className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
