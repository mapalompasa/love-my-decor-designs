import React, { useState, useMemo } from 'react';
import { portfolioProjects } from '../data/portfolioData';
import { IconDiagonalArrow, IconSparkles } from './Icons';

export default function PortfolioGrid({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const categories = [
    { label: "All Works", count: portfolioProjects.length },
    { label: "Luxury Weddings", count: portfolioProjects.filter(p => p.category === "Luxury Weddings").length },
    { label: "Kitchen Parties", count: portfolioProjects.filter(p => p.category === "Kitchen Parties").length },
    { label: "Corporate Galas", count: portfolioProjects.filter(p => p.category === "Corporate Galas").length },
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Works") return portfolioProjects;
    return portfolioProjects.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-16 md:py-28 border-t border-white/10 relative scroll-mt-20">
      <div id="collections" className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Section Header & Editorial Context */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#c966d4] flex items-center gap-2 mb-2">
                <IconSparkles className="w-3.5 h-3.5 stroke-[#c966d4]" />
                Curated Scenography Archive
              </span>
              <h2 className="text-2xl sm:text-5xl md:text-6xl font-[900] tracking-tighter uppercase text-white leading-none">
                Portfolio &amp; Collections
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
              Designed to solve bride fatigue from unorganized social media grids. Select any commission to inspect structural details, florals used, and budget tiers.
            </p>
          </div>

          {/* 5px Solid Structural Divider Bar in Brand Violet */}
          <div className="h-[5px] w-full bg-[#83338a] mb-8 origin-left"></div>

          {/* Filter Tabs with mobile horizontal swipe and desktop wrap */}
          <div className="flex items-center gap-2 sm:gap-3 border-b border-white/10 pb-4 sm:pb-6 overflow-x-auto no-scrollbar sm:flex-wrap -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex-shrink-0 sm:flex-shrink px-3.5 sm:px-4 py-2.5 text-xs font-[900] uppercase tracking-tight transition-all flex items-center gap-2 border min-h-[44px] ${
                  activeCategory === cat.label
                    ? 'bg-[#83338a] text-white border-[#83338a] shadow-md shadow-[#83338a]/30'
                    : 'bg-transparent text-neutral-300 border-white/10 hover:border-[#83338a]/50 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${
                  activeCategory === cat.label ? 'bg-white/20 text-white' : 'bg-white/10 text-neutral-400'
                }`}>
                  ({String(cat.count).padStart(2, '0')})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 16-Column Asymmetric Card Grid (Mobile: 1-col, Tablet: 2-col, Desktop: original 16-col) */}
        <div className="grid grid-cols-8 md:grid-cols-16 gap-5 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => {
            // Map desktop spans reliably without dynamic string concatenation for Tailwind JIT
            let desktopSpan = 'lg:col-span-6';
            if (project.colSpan.includes('md:col-span-5')) desktopSpan = 'lg:col-span-5';
            else if (project.colSpan.includes('md:col-span-6')) desktopSpan = 'lg:col-span-6';
            else if (project.colSpan.includes('md:col-span-8')) desktopSpan = 'lg:col-span-8';

            const responsiveColSpan = `col-span-8 md:col-span-8 ${desktopSpan}`;
            
            // Align aspect ratio on tablet 2-column grid to prevent uneven row heights
            const responsiveAspect = `aspect-[4/5] md:aspect-[4/5] ${project.aspect === 'aspect-[4/5]' ? 'lg:aspect-[4/5]' : 'lg:aspect-[9/12]'}`;

            return (
              <div
                key={project.id}
                className={`${responsiveColSpan} group cursor-pointer flex flex-col active:scale-[0.99] transition-transform`}
                onClick={() => onSelectProject(project)}
              >
                {/* Image Container with Aspect Ratio and Parallax/Zoom Micro-animation */}
                <div className={`relative ${responsiveAspect} w-full overflow-hidden bg-[#141414] border border-white/10 mb-4`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={idx < 4 ? "eager" : "lazy"}
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 bg-black/85 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest uppercase border border-[#83338a]/50 text-[#f6eff8]">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase border border-white/10 text-neutral-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Subtle dark luxury gradient overlay on bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Quick inspect prompt (visible on touch/mobile/tablet, hover on desktop) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#f6eff8] bg-black/90 px-2 sm:px-2.5 py-1 border border-[#83338a]/40">
                      Inspect Blueprint
                    </span>
                    <span className="w-6 h-6 sm:w-7 sm:h-7 bg-[#83338a] text-white flex items-center justify-center shadow-md">
                      <IconDiagonalArrow className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              {/* Card Footer Info (Typography mimicking outfit.hellohello.is product cards) */}
              <div className="flex items-start justify-between gap-4 pt-1">
                <div className="flex-1 min-w-0">
                  <h3 className="font-[900] text-lg sm:text-xl tracking-tight uppercase text-white group-hover:text-[#c966d4] transition-colors truncate">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400 font-mono mt-1">
                    <span>{project.venue}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-[#c966d4] font-semibold">{project.budgetTier}</span>
                  </div>
                </div>

                {/* Dual Arrow Kinetic Glide matching outfit.hellohello.is */}
                <div className="flex-shrink-0 flex items-center text-[#c966d4] group-hover:text-white pt-1">
                  <span className="transition-transform duration-500 [transition-timing-function:cubic-bezier(0.8,-0.01,0.34,1.01)] group-hover:translate-x-[0.5em]">
                    <IconDiagonalArrow className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

        {/* Bottom Callout to Full WhatsApp Lookbook */}
        <div className="mt-16 md:mt-24 p-6 sm:p-8 bg-[#120d14] border border-[#2c1930] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h4 className="text-lg sm:text-2xl font-[900] uppercase tracking-tight text-white mb-2">
              Have a Specific Pinterest or Social Moodboard?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Send your private inspiration board directly to Selina Machima for an immediate architectural viability review and budget tier estimate.
            </p>
          </div>
          <a
            href="#booking"
            className="w-full md:w-auto flex-shrink-0 px-6 py-3.5 bg-[#83338a] text-white font-[900] text-xs uppercase tracking-tight hover:bg-[#993da3] transition-all flex items-center justify-center gap-2 border border-[#c966d4]/40 shadow-lg shadow-[#83338a]/25"
          >
            <span>Proceed to Booking Portal</span>
            <IconDiagonalArrow className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
