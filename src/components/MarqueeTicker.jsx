import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "LUXURY WEDDINGS",
    "BESPOKE FLORAL ARCHITECTURE",
    "TRADITIONAL KITCHEN PARTIES",
    "CLEAR GLASS MARQUEES",
    "CORPORATE GALAS & SUMMITS",
    "MIRRORED RUNWAY STAGING",
    "LUSAKA, ZAMBIA & WORLDWIDE",
    "FOUNDER: SELINA MACHIMA",
    "WHATSAPP: +260 979 176 151",
  ];

  return (
    <div className="w-full border-y border-white/10 bg-[#0e0e0e] py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4">
            <span className="text-xs md:text-sm font-[900] tracking-widest uppercase text-neutral-300 hover:text-[#c966d4] transition-colors">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#83338a]"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
