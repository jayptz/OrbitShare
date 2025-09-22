'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with error boundary
const Galaxy = dynamic(() => import('./Galaxy'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 w-full h-full bg-black" />
});

interface GalaxyWrapperProps {
  hueShift?: number;
  saturation?: number;
  glowIntensity?: number;
  density?: number;
  starSpeed?: number;
  twinkleIntensity?: number;
  speed?: number;
  mouseInteraction?: boolean;
}

export default function GalaxyWrapper(props: GalaxyWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Only render on client side to prevent hydration issues
  if (!isClient) {
    return <div className="absolute inset-0 w-full h-full bg-black" />;
  }

  return <Galaxy {...props} />;
}
