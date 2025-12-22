
"use client";
import React, { useEffect, useState } from 'react';
import { UPCOMING_EVENTS } from '@/constants';

export const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop')`,
          transform: `translateY(${offsetY * 0.4}px)`
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-9xl font-syncopate font-extrabold mb-6 tracking-tighter animate-in slide-in-from-bottom duration-1000">
          WE ARE <span className="text-red-600">INNOVXUS</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide">
          Redefining event experiences through high-voltage energy, precision planning, and creative storytelling.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#events" className="px-10 py-5 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:scale-105 red-glow font-syncopate text-xs tracking-widest">
            EXPLORE EVENTS
          </a>
          <a href="#contact" className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all font-syncopate text-xs tracking-widest">
            GET IN TOUCH
          </a>
        </div>

        {/* Featured Upcoming Event Mini-Card */}
        <div className="mt-20 glass p-8 rounded-[2.5rem] max-w-lg mx-auto border-red-500/30 shadow-[0_0_40px_rgba(220,38,38,0.15)] animate-in fade-in zoom-in duration-1000 delay-500">
          <span className="text-red-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Next Highlight</span>
          <h3 className="text-3xl font-bold mb-2 font-syncopate tracking-tight">{UPCOMING_EVENTS[0].title}</h3>
          <p className="text-gray-400 text-sm font-medium tracking-wide">{UPCOMING_EVENTS[0].date} • {UPCOMING_EVENTS[0].location}</p>
        </div>
      </div>
    </section>
  );
};
