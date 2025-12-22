
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { UpcomingEvents } from '@/components/UpcomingEvents';
import { PastEventsTimeline } from '@/components/PastEventsTimeline';
import { Gallery } from '@/components/Gallery';

import { Contact } from '@/components/Contact';
import { CollegesSection } from '@/components/CollegesSection';

const Home: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      
      {/* Introduction Content with Background */}
      <section className="relative py-32 mt-[1rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop" 
            alt="Event Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-red-600 font-bold uppercase tracking-widest">Our Mission</h2>
              <h3 className="text-5xl md:text-6xl font-syncopate font-bold leading-tight">
                FUELING THE <span className="text-red-600 underline underline-offset-8">EXPERIENCE</span> ECONOMY
              </h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                Innovxus is not just an event planner. We are architects of moments. Since 2018, we have been transforming ordinary campus lawns and corporate ballrooms into high-octane stages of inspiration.
              </p>
              <div className="flex gap-12">
                <div>
                  <p className="text-5xl font-syncopate font-bold text-red-600 mb-2">50+</p>
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">College Fests</p>
                </div>
                <div>
                  <p className="text-5xl font-syncopate font-bold text-red-600 mb-2">200k</p>
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Attendees</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-[3rem] rotate-3 -z-10 shadow-[0_0_50px_rgba(220,38,38,0.3)]" />
              <img 
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop" 
                alt="Event Atmosphere" 
                className="w-full h-full object-cover rounded-[3rem] shadow-2xl transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </section>

      <CollegesSection />
      <UpcomingEvents />
      <PastEventsTimeline />
      <Gallery />
      <Contact />

      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-syncopate font-bold">
            INNOVXUS<span className="text-red-600">.</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Innovxus Events Organization. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-red-600 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
