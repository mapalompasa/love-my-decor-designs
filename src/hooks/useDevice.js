import { useState, useEffect } from 'react';

/**
 * Custom hook to detect device type (mobile, tablet, desktop)
 * and touch capabilities, keeping state synchronized across window resizes
 * and orientation changes.
 */
export function useDevice() {
  const [deviceInfo, setDeviceInfo] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        isTouch: false,
        deviceType: 'desktop',
        width: 1200,
        height: 800,
        orientation: 'landscape',
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;
    const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
    const orientation = width > height ? 'landscape' : 'portrait';

    return {
      isMobile,
      isTablet,
      isDesktop,
      isTouch,
      deviceType,
      width,
      height,
      orientation,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
      const orientation = width > height ? 'landscape' : 'portrait';

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        isTouch: Boolean(isTouch),
        deviceType,
        width,
        height,
        orientation,
      });

      // Update root attributes for CSS targeting without affecting desktop view
      const root = document.documentElement;
      root.dataset.device = deviceType;
      root.dataset.touch = isTouch ? 'true' : 'false';
      root.dataset.orientation = orientation;
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return deviceInfo;
}
