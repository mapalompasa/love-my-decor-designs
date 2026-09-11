import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { IconDiagonalArrow, IconWhatsApp } from './Icons';

export default function HeroSection() {
  return (
    <section className="relative pt-36 sm:pt-36 md:pt-40 lg:pt-36 pb-12 md:pb-20 overflow-hidden">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sub-bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs md:text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 md:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-luxury-cream">Scenography &amp; Architecture</span>
            <span className="text-neutral-700">/</span>
            <span>Est. Lusaka</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:inline text-neutral-400">Direct Concierge:</span>
            <a
              href={`https://wa.me/${brandConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-luxury-cream underline underline-offset-4 flex items-center gap-1.5 font-mono text-xs sm:text-sm"
            >
              <IconWhatsApp className="w-3.5 h-3.5 fill-current flex-shrink-0" />
              <span>{brandConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Massive Full-Bleed Headline with Fluid Responsive Typography */}
        <div className="mb-6 md:mb-10 select-none">
          <h1 className="text-[9.8vw] sm:text-[9.5vw] md:text-[8.5vw] lg:text-[12.5vw] font-[900] tracking-tighter uppercase leading-[0.88] text-white break-normal">
            LOVE MY DECOR
          </h1>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mt-3 md:mt-4 gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-[900] tracking-tight uppercase text-neutral-300 leading-tight">
              Bespoke Event Design &amp; Luxury Styling
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm uppercase font-mono tracking-widest text-[#c966d4] flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#c966d4] animate-pulse"></span>
              2026 / 2027 CURATED CALENDAR
            </span>
          </div>
        </div>

        {/* 5px Solid Structural Divider Bar in Official Logo Purple */}
        <div className="h-[5px] w-full bg-[#83338a] mb-8 md:mb-12 origin-left transition-all duration-700"></div>

        {/* 16-Column Editorial Metadata Grid */}
        <div className="grid grid-cols-8 md:grid-cols-16 gap-x-6 gap-y-8 md:gap-y-10 text-sm">
          
          {/* Column 1-4: Founder & Location (Tablet: 8-col, Desktop: 4-col untouched) */}
          <div className="col-span-8 md:col-span-8 lg:col-span-4 flex flex-col justify-between border-b md:border-b-0 lg:border-b-0 border-white/10 pb-6 md:pb-0">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#d6bdda] font-bold mb-2">
                Founder &amp; Creative Director
              </p>
              <p className="text-2xl font-[900] uppercase tracking-tight text-white mb-1">
                {brandConfig.founder}
              </p>
              <p className="text-xs text-neutral-400 uppercase tracking-wider font-mono">
                Lusaka, Zambia — Serving SADC &amp; International
              </p>
            </div>

            <div className="mt-6 md:mt-8 pt-4 border-t border-white/10 flex items-center gap-6">
              <div>
                <span className="block text-2xl font-[900] text-white">350+</span>
                <span className="text-[11px] uppercase tracking-wider text-[#d6bdda]">Events Designed</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="block text-2xl font-[900] text-white">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#d6bdda]">Fresh Florals</span>
              </div>
            </div>
          </div>

          {/* Column 5-11: Manifesto (Tablet: 8-col, Desktop: 7-col untouched) */}
          <div className="col-span-8 md:col-span-8 lg:col-span-7 flex flex-col justify-between border-b md:border-b-0 lg:border-b-0 border-white/10 pb-6 md:pb-0">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#c966d4] font-bold">
                The Curated Alternative to Social Media Chaos
              </p>
              <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-neutral-200">
                Discerning brides and event hosts often get lost in chaotic Instagram saves and vague quotes. 
                <strong className="text-white font-[900]"> Love My Decor Designs </strong> provides an architectural, couture scenography studio in Lusaka.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                From monumental glass marquees and 10,000-stem floral canopies to opulent traditional Zambian Kitchen Parties with handcrafted velvet throne pavilions, every commission is executed with high-society precision.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#d6bdda]">
                Architectural Florals
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#d6bdda]">
                Glass Marquee Architecture
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#d6bdda]">
                Traditional Royalty Staging
              </span>
            </div>
          </div>

          {/* Column 12-16: Stark High-Contrast Action Triggers (Tablet: full-width 16-col, Desktop: 5-col untouched) */}
          <div className="col-span-8 md:col-span-16 lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-[#120d14] border border-[#2c1930] relative overflow-hidden group">
              <img
                src="/logo.jpg"
                alt="Love My Decor Logo Badge"
                className="absolute top-5 right-5 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#83338a] object-cover shadow-md opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="pr-14 md:pr-0 lg:pr-14">
                <p className="text-xs uppercase font-mono tracking-widest text-[#d6bdda] mb-2">
                  Commission Inquiries
                </p>
                <p className="text-base sm:text-lg font-bold text-white mb-4 leading-tight max-w-sm lg:max-w-[220px]">
                  Secure your 2026/2027 wedding or gala date with Selina Machima.
                </p>
              </div>

              {/* Action Buttons: Stacked on mobile/desktop, side-by-side on tablet full-width */}
              <div className="flex flex-col md:flex-row lg:flex-col gap-3">
                {/* Stark High-Contrast Primary CTA Button in Brand Violet */}
                <a
                  href="#booking"
                  className="w-full flex items-center justify-between px-5 py-3.5 sm:py-4 bg-[#83338a] text-white font-[900] text-xs uppercase tracking-tight hover:bg-[#993da3] transition-all shadow-lg shadow-[#83338a]/20 group border border-[#c966d4]/40"
                >
                  <span>Request a Consultation</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">
                    <IconDiagonalArrow className="w-3 h-3" />
                  </span>
                </a>

                {/* Secondary Button */}
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-between px-5 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-tight hover:bg-[#83338a]/15 transition-all group"
                >
                  <span>View Curated Works (12)</span>
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1.5">
                    <IconDiagonalArrow className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="flex items-center justify-between px-4 py-3 border border-white/10 bg-white/[0.02] text-xs">
              <span className="text-neutral-400">Direct WhatsApp Line:</span>
              <a
                href={`https://wa.me/${brandConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c966d4] font-bold hover:underline flex items-center gap-1.5 font-mono"
              >
                <IconWhatsApp className="w-3.5 h-3.5 fill-current" />
                <span>+260 979 176 151</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
