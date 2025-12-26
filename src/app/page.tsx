
import React from 'react';
import Image from 'next/image';
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
            <Image src="/logo.png" alt="Innovxus Logo" width={120} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © 2024 Innovxus Events Organization. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Developed by <a href="https://dinestx.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors">Dinex Services</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
