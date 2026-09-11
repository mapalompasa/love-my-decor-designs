import React from 'react';

export default function CreatorBanner() {
  return (
    <div className="w-full bg-[#120815] border-b border-[#83338a]/50 text-neutral-200 text-xs py-2 px-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center tracking-wide">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#83338a]/30 border border-[#c966d4]/40 text-[10px] font-mono uppercase tracking-widest text-[#f6eff8]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c966d4] animate-pulse"></span>
        <span>Demo Mode</span>
      </div>
      <p className="font-medium text-xs sm:text-sm text-neutral-200">
        This website was created by{' '}
        <span className="font-extrabold text-white underline decoration-[#c966d4] decoration-2 underline-offset-4">
          Mapalo from Anomaly Digital
        </span>
      </p>
    </div>
  );
}
