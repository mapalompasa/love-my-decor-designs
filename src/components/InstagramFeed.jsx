import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { IconInstagram, IconDiagonalArrow } from './Icons';

export default function InstagramFeed() {
  const feedItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      caption: "Monumental ivory floral arch in full bloom. 8,000 Ecuadorian white roses staged for this weekend's luxury nuptials at Ciela Resort.",
      likes: "2,410",
      tags: "#LoveMyDecorDesigns #ZambianWeddings #LuxuryFlorals",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
      caption: "Royal throne pavilion designed for Chilufya’s Kitchen Party. Gold velvet drapery and handcrafted brass candelabras.",
      likes: "1,890",
      tags: "#KitchenPartyDecor #Zambia #HauteScenography",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      caption: "Under the stars inside our custom clear-span glass marquee. 24 Maria Theresa crystal chandeliers casting pure magic.",
      likes: "3,120",
      tags: "#GlassMarquee #LeopardsHill #WeddingAesthetic",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      caption: "Emerald & gold bridal send-off staging. Celebrating cultural roots with modern international grandeur.",
      likes: "1,670",
      tags: "#AfricanWeddings #KitchenParty #LusakaEvents",
    },
  ];

  return (
    <section id="instagram" className="py-16 md:py-24 border-t border-white/10 bg-[#0c0c0c] relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#c966d4] flex items-center gap-2 mb-2">
              <IconInstagram className="w-3.5 h-3.5 stroke-[#c966d4]" />
              Live Instagram Dispatch
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-[900] tracking-tighter uppercase text-white leading-none">
              {brandConfig.socials.instagram.handle}
            </h2>
          </div>

          <a
            href={brandConfig.socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#83338a]/10 border border-[#83338a]/40 hover:border-[#c966d4] hover:bg-[#83338a]/20 text-white font-bold text-xs uppercase tracking-tight transition-all group self-start md:self-auto"
          >
            <IconInstagram className="w-4 h-4 stroke-white" />
            <span>Follow on Instagram</span>
            <IconDiagonalArrow className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 5px Solid Structural Divider Bar */}
        <div className="h-[5px] w-full bg-[#83338a] mb-8 origin-left"></div>

        {/* 4-Card Instagram Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href={brandConfig.socials.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#120d14] border border-[#2c1930] hover:border-[#83338a] transition-colors overflow-hidden relative"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Always-visible compact indicator on mobile/tablet touch */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-black/80 backdrop-blur-md px-2.5 py-1.5 text-[10px] font-mono text-neutral-300 border border-white/10 lg:hidden pointer-events-none">
                  <span className="text-[#c966d4] truncate max-w-[140px]">{brandConfig.socials.instagram.handle}</span>
                  <span>♥ {item.likes}</span>
                </div>

                {/* Hover overlay with caption & likes */}
                <div className="absolute inset-0 bg-[#120d14]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-xs text-white">
                  <div className="flex items-center justify-between font-mono text-[11px] text-[#c966d4]">
                    <span className="flex items-center gap-1.5">
                      <IconInstagram className="w-3.5 h-3.5 stroke-[#c966d4]" />
                      <span>{brandConfig.socials.instagram.handle}</span>
                    </span>
                    <span>♥ {item.likes}</span>
                  </div>

                  <p className="line-clamp-4 text-neutral-300 leading-relaxed font-medium">
                    {item.caption}
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-mono">
                    <span className="text-[#f6eff8] uppercase tracking-wider">View on Instagram</span>
                    <IconDiagonalArrow className="w-3 h-3 text-[#c966d4]" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
