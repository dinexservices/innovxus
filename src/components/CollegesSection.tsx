
import React from 'react';
import { COLLEGE_PARTNERS } from '@/constants';

export const CollegesSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden border-y border-gray-100 bg-white">
      {/* Background visual element */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050335456-adaba4550a62?q=80&w=1920&auto=format&fit=crop"
          alt="College campus background"
          className="w-full h-full object-cover opacity-5 grayscale"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4">Our Presence</h2>
          <h3 className="text-4xl md:text-6xl font-syncopate font-bold text-black tracking-tighter">
            TRUSTED BY <span className="text-red-600">ELITE</span> CAMPUSES
          </h3>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We've set benchmarks in creativity and execution across the most prestigious institutions globally.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {COLLEGE_PARTNERS.map((college, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:border-red-600/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-20 h-20 mb-4 relative">
                <img
                  src={college.logo}
                  alt={college.name}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-xs font-bold text-gray-500 group-hover:text-red-600 text-center uppercase tracking-widest transition-colors">
                {college.name}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative stats bar */}
        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="text-center">
            <span className="block text-4xl font-syncopate font-bold text-black">120+</span>
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest">Institutions</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-syncopate font-bold text-black">15+</span>
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest">Countries</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-syncopate font-bold text-black">500+</span>
            <span className="text-red-600 text-xs font-bold uppercase tracking-widest">Global Brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};
