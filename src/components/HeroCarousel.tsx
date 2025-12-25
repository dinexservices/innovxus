
import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink } from 'lucide-react';

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1459749411177-042180ceea72?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop"
];

export const HeroCarousel: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  const getTransform = (idx: number) => {
    const diff = idx - activeIdx;

    // Calculate distance considering circular behavior
    let normalizedDiff = diff;
    if (diff > CAROUSEL_IMAGES.length / 2) normalizedDiff -= CAROUSEL_IMAGES.length;
    if (diff < -CAROUSEL_IMAGES.length / 2) normalizedDiff += CAROUSEL_IMAGES.length;

    const absDiff = Math.abs(normalizedDiff);

    // Position
    const translateX = normalizedDiff * 280; // Distance between items
    const translateZ = -absDiff * 150; // Push non-active items back

    // Rotation for "Cylindrical" effect
    // As items move away from center, they rotate towards the viewer
    const rotateY = normalizedDiff * -25;

    // Scale: Edges get slightly larger/wider to mimic the "fisheye" look
    const scale = 1 + (absDiff * 0.1);

    // Opacity
    const opacity = absDiff > 4 ? 0 : 1 - (absDiff * 0.3);

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: 10 - absDiff,
    };
  };

  return (
    <div className="relative w-full py-6 flex flex-col items-center">


      {/* 3D Perspective Wrapper */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {CAROUSEL_IMAGES.map((src, i) => {
            const style = getTransform(i);
            return (
              <div
                key={i}
                className="absolute w-[300px] h-[400px] md:w-[350px] md:h-[480px] rounded-[3rem] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] "
                style={style}
                onClick={() => setActiveIdx(i)}
              >
                <img
                  src={src}
                  alt={`Event ${i}`}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Visual enhancement on focus */}
                {i === activeIdx && (
                  <div className="absolute inset-0 border-4 border-red-600/50 rounded-[3rem] animate-pulse pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Manual Controls */}
      <div className="flex gap-4 mt-8">
        {CAROUSEL_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${i === activeIdx ? 'w-12 bg-red-600' : 'w-4 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>

      {/* Soft Side Fades */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </div>
  );
};
