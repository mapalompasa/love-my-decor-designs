import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { 
  IconWhatsApp, 
  IconInstagram, 
  IconTikTok, 
  IconFacebook, 
  IconLinkedIn, 
  IconPhone, 
  IconMapPin, 
  IconDiagonalArrow 
} from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060606] text-white border-t border-white/10 pt-16 md:pt-24 pb-12 overflow-hidden select-none">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5px Solid Structural Divider Bar in Official Logo Purple */}
        <div className="h-[5px] w-full bg-[#83338a] mb-12 origin-left"></div>

        {/* 16-Column Footer Content Grid (Tablet: 8/8/16, Desktop: 6/4/6 untouched) */}
        <div className="grid grid-cols-8 md:grid-cols-16 gap-x-8 gap-y-12 mb-16 md:mb-24">
          
          {/* Col 1-6: Founder & Studio Profile with Official Logo */}
          <div className="col-span-8 md:col-span-8 lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Love My Decor Designs Official Logo"
                className="w-11 h-11 rounded-full border-2 border-[#83338a] object-cover shadow-md"
              />
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#d6bdda] block">
                  Founder &amp; Creative Scenographer
                </span>
                <h3 className="text-2xl sm:text-3xl font-[900] uppercase tracking-tighter text-white">
                  {brandConfig.founder}
                </h3>
              </div>
            </div>
            
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Curating high-contrast, couture event atmospheres across Southern Africa. Specializing in monumental floral installations, glass marquee architecture, and regal traditional bridal ceremonies.
            </p>

            <div className="pt-4 flex flex-col gap-2 font-mono text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <IconMapPin className="w-3.5 h-3.5 stroke-[#c966d4]" />
                <span>Lusaka, Zambia [{brandConfig.coordinates}]</span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="w-3.5 h-3.5 stroke-[#c966d4]" />
                <span>Concierge: {brandConfig.phone}</span>
              </div>
            </div>
          </div>

          {/* Col 7-10: Navigation & Catalog Categories */}
          <div className="col-span-8 sm:col-span-4 md:col-span-8 lg:col-span-4 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#d6bdda] block">
              Collections
            </span>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-tight text-neutral-300">
              <li>
                <a href="#portfolio" className="hover:text-[#c966d4] transition-colors flex items-center gap-1.5 min-h-[36px] sm:min-h-0">
                  <span>Luxury Weddings</span>
                  <IconDiagonalArrow className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#c966d4] transition-colors flex items-center gap-1.5 min-h-[36px] sm:min-h-0">
                  <span>Kitchen Parties &amp; Send-Offs</span>
                  <IconDiagonalArrow className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#c966d4] transition-colors flex items-center gap-1.5 min-h-[36px] sm:min-h-0">
                  <span>Corporate Galas &amp; Summits</span>
                  <IconDiagonalArrow className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#c966d4] transition-colors flex items-center gap-1.5 min-h-[36px] sm:min-h-0">
                  <span>Glass Marquee Architecture</span>
                  <IconDiagonalArrow className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#c966d4] transition-colors flex items-center gap-1.5 min-h-[36px] sm:min-h-0">
                  <span>Commission Inquiries</span>
                  <IconDiagonalArrow className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 11-16: Official Social Connect with Crisp Inline SVGs */}
          <div className="col-span-8 md:col-span-16 lg:col-span-6 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#d6bdda] block">
              Social Dispatches
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120d14] border border-[#2c1930] hover:border-[#83338a] hover:bg-[#83338a]/15 flex items-center justify-between text-xs font-bold uppercase tracking-tight transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <IconWhatsApp className="w-4 h-4 fill-[#c966d4]" />
                  <span>WhatsApp</span>
                </div>
                <IconDiagonalArrow className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={brandConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120d14] border border-[#2c1930] hover:border-[#83338a] hover:bg-[#83338a]/15 flex items-center justify-between text-xs font-bold uppercase tracking-tight transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <IconInstagram className="w-4 h-4 stroke-[#c966d4]" />
                  <span>Instagram</span>
                </div>
                <IconDiagonalArrow className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={brandConfig.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120d14] border border-[#2c1930] hover:border-[#83338a] hover:bg-[#83338a]/15 flex items-center justify-between text-xs font-bold uppercase tracking-tight transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <IconTikTok className="w-4 h-4 fill-[#c966d4]" />
                  <span>TikTok</span>
                </div>
                <IconDiagonalArrow className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={brandConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120d14] border border-[#2c1930] hover:border-[#83338a] hover:bg-[#83338a]/15 flex items-center justify-between text-xs font-bold uppercase tracking-tight transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <IconFacebook className="w-4 h-4 fill-[#c966d4]" />
                  <span>Facebook</span>
                </div>
                <IconDiagonalArrow className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href={brandConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#120d14] border border-[#2c1930] hover:border-[#83338a] hover:bg-[#83338a]/15 flex items-center justify-between text-xs font-bold uppercase tracking-tight transition-all group sm:col-span-2"
              >
                <div className="flex items-center gap-2.5">
                  <IconLinkedIn className="w-4 h-4 fill-[#c966d4]" />
                  <span>LinkedIn / Corporate Events</span>
                </div>
                <IconDiagonalArrow className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-4 w-full py-3 border border-[#2c1930] bg-[#120d14] text-neutral-400 hover:text-white hover:border-[#83338a] hover:bg-[#83338a]/15 text-xs font-mono uppercase tracking-widest transition-all"
            >
              ↑ Back to Top
            </button>
          </div>

        </div>

        {/* Massive Watermark Typography matching outfit.hellohello.is */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-[11.5vw] sm:text-[12.5vw] md:text-[13vw] font-[900] tracking-tighter uppercase leading-[0.85] text-white/10 hover:text-white/20 transition-colors cursor-default select-none text-center">
            LOVE MY DECOR
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
            <span>© {new Date().getFullYear()} Love My Decor Designs. All rights reserved.</span>
            <span>Created by <strong className="text-neutral-300 font-bold">Mapalo from Anomaly Digital</strong></span>
            <span className="text-[#c966d4]">Dark Luxury Scenography</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
