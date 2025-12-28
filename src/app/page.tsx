
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
import { Footer } from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className=" min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <InstitutionalApproach />
      <CollegePartners />
      <Marquee />
      <AboutInnovxus />
      <InstitutionalEngagement />
      <AcademicPrograms />
      <CorporateCollaboration />

      <EngagementMetrics />

      {/* <UpcomingEvents /> */}
      {/* <PastEventsTimeline /> */}

      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
