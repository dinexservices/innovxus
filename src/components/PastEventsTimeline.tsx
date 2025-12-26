
"use client";
import React, { useEffect, useRef, useState } from 'react';
import { PAST_EVENTS } from '@/constants';
import { Calendar, MapPin, Award } from 'lucide-react';


const TimelineItem: React.FC<{ event: typeof PAST_EVENTS[0], index: number }> = ({ event, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-center justify-between mb-32 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
    >
      {/* Date Pillar (Large text) */}
      <div className={`w-full md:w-1/3 flex ${isEven ? 'md:justify-end' : 'md:justify-start md:order-last'} mb-8 md:mb-0 px-4`}>
        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-center`}>
          <span className="text-red-600 font-syncopate font-bold text-7xl md:text-8xl leading-none opacity-40">
            {event.day}
          </span>
          <span className="text-white font-syncopate font-bold text-4xl md:text-5xl mt-[-1rem]">
            {event.month}
          </span>
          <div className="h-1 w-20 bg-red-600 mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
        </div>
      </div>

      {/* Center Line Dot */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-4 h-4 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,1)] border-4 border-black"></div>
      </div>

      {/* Event Card */}
      <div className={`w-full md:w-[45%] group`}>
        <div className="glass relative rounded-[2.5rem] overflow-hidden border-white/5 group-hover:border-red-600/30 transition-all duration-500 shadow-2xl">
          <div className="h-64 relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
              {event.category}
            </div>
          </div>

          <div className="p-8 md:p-10">
            <h4 className="text-2xl md:text-3xl font-syncopate font-bold mb-4 group-hover:text-red-500 transition-colors">
              {event.title}
            </h4>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-light">
              {event.description}
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <MapPin size={14} className="text-red-600" />
                {event.location}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <Award size={14} className="text-red-600" />
                {event.goingCount}+ Reached
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PastEventsTimeline: React.FC = () => {
  return (
    <section id="past-events" className="relative py-32 overflow-hidden bg-[#050505]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-red-600 to-transparent"></div>
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop"
          alt="Timeline Background"
          className="w-full h-full object-cover blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.4em] mb-4">The Chronicles</h2>
          <h3 className="text-5xl md:text-8xl font-syncopate font-bold text-white tracking-tighter">
            OUR <span className="text-red-600">JOURNEY</span>
          </h3>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Tracing the path of electrifying moments we've created across the globe. Scroll to relive the energy.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-12">
            {PAST_EVENTS.map((event, idx) => (
              <TimelineItem key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>

        {/* Closing Highlight */}
        {/* Closing Highlight */}
        <div className="mt-20 text-center">
          <div className="inline-block p-10 glass rounded-[3rem] border-red-500/20 max-w-xl">
            <h4 className="text-2xl font-syncopate font-bold mb-4">AND THE STORY CONTINUES...</h4>
            <p className="text-gray-400 mb-8">Every event is a chapter. We are just getting started. Are you ready to be part of the next one?</p>
            <a href="#contact" className="px-10 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all red-glow inline-block">
              JOIN THE LEGACY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
