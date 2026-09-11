import React, { useState, useEffect } from 'react';
import { brandConfig } from '../data/brandConfig';
import { IconWhatsApp, IconDiagonalArrow, IconMenu, IconClose } from './Icons';
import CreatorBanner from './CreatorBanner';
import { useDevice } from '../hooks/useDevice';

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lusakaTime, setLusakaTime] = useState('');
  const { isMobile, isTablet, isDesktop } = useDevice();

  // Update Central Africa Time (CAT / UTC+2 for Lusaka, Zambia)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // UTC + 2 hours for Central Africa Time
      const catTime = new Date(now.getTime() + (now.getTimezoneOffset() + 120) * 60000);
      const hours = String(catTime.getHours()).padStart(2, '0');
      const minutes = String(catTime.getMinutes()).padStart(2, '0');
      const seconds = String(catTime.getSeconds()).padStart(2, '0');
      setLusakaTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scrolling when mobile/tablet menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Collections", href: "#collections" },
    { label: "Founder", href: "#founder" },
    { label: "Instagram", href: "#instagram" },
    { label: "Book Consultation", href: "#booking" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/10 text-white transition-all duration-200">
      {/* Creator Announcement / Demo Mode Banner */}
      <CreatorBanner />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between relative">
        
        {/* Left: Brand Identity with Official Logo */}
        <div className="flex items-center gap-2.5 sm:gap-6">
          <a href="#" className="flex items-center gap-2 sm:gap-3.5 group">
            <img
              src="/logo.jpg"
              alt="Love My Decor Designs Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full object-cover border-2 border-[#83338a] shadow-lg shadow-[#83338a]/20 group-hover:border-[#c966d4] transition-all flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-[900] text-sm sm:text-lg md:text-xl tracking-tighter uppercase leading-none text-white group-hover:text-[#c966d4] transition-colors">
                {brandConfig.shortName}®
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#d6bdda] font-medium mt-1">
                Selina Machima
              </span>
            </div>
          </a>
        </div>

        {/* Center: Navigation Links Centered for Desktop (Untouched on Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-tight uppercase lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-300 hover:text-[#c966d4] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#83338a] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right: WhatsApp CTA & Mobile/Tablet Toggle */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Direct WhatsApp Concierge Button (Tablet and Desktop) */}
          <a
            href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent("Hello Selina Machima, I would like to inquire about Love My Decor Designs event styling.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 bg-[#83338a] text-white font-extrabold text-xs uppercase tracking-tight hover:bg-[#993da3] transition-all shadow-md shadow-[#83338a]/30 active:scale-95 border border-[#c966d4]/40"
          >
            <IconWhatsApp className="w-3.5 h-3.5 fill-white" />
            <span>Inquire</span>
            <span className="relative overflow-hidden w-2.5 h-2.5 flex items-center">
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <IconDiagonalArrow className="w-2.5 h-2.5" />
              </span>
            </span>
          </a>

          {/* Mobile & Tablet menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#c966d4] active:scale-95 transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconClose className="w-6 h-6 stroke-white" /> : <IconMenu className="w-6 h-6 stroke-white" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Full-Width Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Full-Screen Dimmed Backdrop Scrim */}
          <div
            className="lg:hidden fixed inset-0 bg-black/85 backdrop-blur-sm -z-10 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Opaque, distinct dark luxury dropdown container */}
          <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#120815] border-b-2 border-[#83338a] shadow-[0_25px_60px_rgba(0,0,0,0.98)] px-4 sm:px-8 py-5 sm:py-6 max-h-[calc(100dvh-75px)] overflow-y-auto overscroll-contain animate-fadeIn z-40">
            <div className="flex flex-col gap-2 text-sm sm:text-base font-[900] tracking-tight uppercase">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-100 hover:text-white hover:bg-[#25142b] active:bg-[#25142b] flex items-center justify-between px-4 py-3.5 bg-[#1c0f22] border border-[#83338a]/40 active:border-[#c966d4] min-h-[48px] transition-all shadow-sm"
                >
                  <span>{link.label}</span>
                  <IconDiagonalArrow className="w-3.5 h-3.5 text-[#c966d4]" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-[#83338a]/30 flex flex-col gap-3.5">
              <div className="text-xs text-neutral-300 font-mono flex items-center justify-between px-1">
                <span className="text-[#d6bdda]">LUSAKA [CAT]</span>
                <span className="text-white font-bold bg-[#1c0f22] px-2.5 py-1 border border-[#83338a]/40">{lusakaTime}</span>
              </div>

              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}?text=${encodeURIComponent("Hello Selina Machima, I am looking to book Love My Decor Designs for my upcoming event.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#83338a] hover:bg-[#993da3] text-white font-[900] text-xs sm:text-sm uppercase tracking-tight active:scale-[0.99] transition-all shadow-lg shadow-[#83338a]/30 min-h-[48px] border border-[#c966d4]/40"
              >
                <IconWhatsApp className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+260 979 176 151)</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
