import React from 'react';

export default function CreatorBanner() {
  return (
    <div className="w-full bg-[#120815] border-b border-[#83338a]/50 text-neutral-200 py-1 sm:py-1.5 md:py-2 px-2.5 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2.5 text-center tracking-wide overflow-hidden">
      <div className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-[#83338a]/30 border border-[#c966d4]/40 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#f6eff8] flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c966d4] animate-pulse"></span>
        <span>Demo Mode</span>
      </div>
      <p className="font-medium text-[11px] sm:text-xs md:text-sm text-neutral-200 truncate">
        This website was created by{' '}
        <span className="font-extrabold text-white underline decoration-[#c966d4] decoration-2 underline-offset-2 sm:underline-offset-4">
          Mapalo from Anomaly Digital
        </span>
      </p>
    </div>
  );
}
