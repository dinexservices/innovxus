
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { UpcomingEvents } from '@/components/UpcomingEvents';
import { PastEventsTimeline } from '@/components/PastEventsTimeline';
import { Gallery } from '@/components/Gallery';

import { Contact } from '@/components/Contact';
import { CollegesSection } from '@/components/CollegesSection';
import { InstitutionalApproach } from '@/components/InstitutionalApproach';
import { EngagementMetrics } from '@/components/EngagementMetrics';
import { AboutInnovxus } from '@/components/AboutInnovxus';
import { InstitutionalEngagement } from '@/components/InstitutionalEngagement';
import { AcademicPrograms } from '@/components/AcademicPrograms';
import { CorporateCollaboration } from '@/components/CorporateCollaboration';
import { CollegePartners } from '@/components/CollegePartners';

const Home: React.FC = () => {
  return (
    <div className=" min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <InstitutionalApproach />
      <EngagementMetrics />
      <Marquee />
      <AboutInnovxus />
      <InstitutionalEngagement />
      <AcademicPrograms />
      <CorporateCollaboration />
      <CollegePartners />

      {/* <UpcomingEvents /> */}
      {/* <PastEventsTimeline /> */}
      
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
