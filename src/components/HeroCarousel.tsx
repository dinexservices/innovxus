
import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink } from 'lucide-react';

const CAROUSEL_IMAGES = [
  "/media/img1.webp",
  "/media/img2.webp",
  "/media/img3.webp",
  "/media/img4.webp",
  "/media/img5.webp",
  "/media/img6.webp",
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
    // For horizontal layout, we place them side-by-side
    // Card width is ~350px (md). We give them some spacing.
    // We want the active item centered.
    const translateX = normalizedDiff * 380; // Distance between items (350px + 30px gap)

    // Scale: Active item is largest, others smaller
    const scale = 1 - (absDiff * 0.1);

    // Opacity: Fade out items that are far away
    const opacity = absDiff > 3 ? 0 : 1 - (absDiff * 0.2);

    return {
      transform: `translateX(${translateX}px) scale(${Math.max(0, scale)})`,
      opacity,
      zIndex: 10 - absDiff,
    };
  };

  return (
    <div className="relative w-full py-6 flex flex-col items-center">
      {/* Container - Removed 3D perspective */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {CAROUSEL_IMAGES.map((src, i) => {
            const style = getTransform(i);
            return (
              <div
                key={i}
                className="absolute w-[400px] h-[300px] md:w-[500px] md:h-[400px] rounded-[3rem] overflow-hidden transition-all duration-700 ease-out shadow-lg"
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
