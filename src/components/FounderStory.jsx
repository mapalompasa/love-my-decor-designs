import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { IconDiagonalArrow, IconSparkles } from './Icons';

export default function FounderStory() {
  return (
    <section id="founder" className="py-16 md:py-28 border-t border-white/10 relative bg-[#080808]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#c966d4] flex items-center gap-2 mb-2">
                <IconSparkles className="w-3.5 h-3.5 stroke-[#c966d4]" />
                Haute Scenography Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tighter uppercase text-white leading-none">
                The Founder’s Vision
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Led by Selina Machima, Love My Decor Designs has established the benchmark for ultra-luxury weddings, high-fashion traditional celebrations, and diplomatic galas across Southern Africa.
            </p>
          </div>

          {/* 5px Solid Structural Divider Bar */}
          <div className="h-[5px] w-full bg-[#83338a] mb-8 origin-left"></div>
        </div>

        {/* 16-Column Layout (Tablet: 8/8 split, Desktop: 7/9 original) */}
        <div className="grid grid-cols-8 md:grid-cols-16 gap-8 md:gap-12 items-center">
          
          {/* Column 1-7: Editorial Portrait & Presence */}
          <div className="col-span-8 md:col-span-8 lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#120d14] border border-[#2c1930] group">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80"
                alt="Selina Machima - Founder & Creative Director"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c966d4] block mb-1">
                  Creative Direction &amp; Scenography
                </span>
                <p className="text-xl sm:text-3xl font-[900] uppercase tracking-tight text-white">
                  Selina Machima
                </p>
                <p className="text-xs text-neutral-400 font-mono mt-1">
                  Founder &amp; Chief Designer • Love My Decor Designs
                </p>
              </div>
            </div>
          </div>

          {/* Column 8-16: Manifesto & Three Pillars of Scenography */}
          <div className="col-span-8 md:col-span-8 lg:col-span-9 space-y-6 md:space-y-8">
            
            <div className="space-y-4">
              <blockquote className="text-base sm:text-2xl md:text-2xl lg:text-3xl font-[900] uppercase tracking-tight leading-snug text-neutral-100">
                "We do not merely drape tables or place flowers; we architect transcendent, emotionally charged atmospheres that leave guests breathless."
              </blockquote>
              <p className="text-xs sm:text-base text-neutral-400 leading-relaxed">
                Selina Machima founded Love My Decor Designs to liberate discerning couples from monotonous, repetitive event styling. By synthesizing European haute couture scenography with opulent African royal heritage, every commission is treated as a bespoke work of architectural art.
              </p>
            </div>

            {/* Three Pillars Grid - Fixed to 1-col on tablet half-width and 3-col on desktop full-width */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/10">
              <div className="p-4 bg-[#120d14] border border-[#2c1930]">
                <span className="text-[10px] font-mono text-[#c966d4] uppercase block mb-1">01. Architecture</span>
                <h4 className="text-sm font-[900] uppercase text-white mb-2">Structural Scale</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Custom-engineered cantilevered stages, mirrored runways, and clear-span glass marquees designed from raw ground.
                </p>
              </div>

              <div className="p-4 bg-[#120d14] border border-[#2c1930]">
                <span className="text-[10px] font-mono text-[#c966d4] uppercase block mb-1">02. Heritage</span>
                <h4 className="text-sm font-[900] uppercase text-white mb-2">Modern Royalty</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Elevating Zambian Kitchen Parties into royal pageantry with bespoke velvet thrones, gold brassware, and ceremonial grandeur.
                </p>
              </div>

              <div className="p-4 bg-[#120d14] border border-[#2c1930]">
                <span className="text-[10px] font-mono text-[#c966d4] uppercase block mb-1">03. Botanical</span>
                <h4 className="text-sm font-[900] uppercase text-white mb-2">Haute Florals</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Direct import Ecuadorian roses, Dutch hydrangeas, and fragrant orchids curated in massive sculptured installations.
                </p>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#83338a] text-white font-[900] text-xs uppercase tracking-tight hover:bg-[#993da3] border border-[#c966d4]/40 shadow-lg shadow-[#83338a]/20 transition-all group"
              >
                <span>Commission Selina Machima</span>
                <IconDiagonalArrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
