
import React from 'react';

export const Marquee: React.FC = () => {
  const items = ["COLLEGE FESTS", "TECH SUMMITS", "MUSIC NIGHTS", "CORPORATE EVENTS", "WORKSHOPS", "SPORTS MEETS"];
  
  return (
    <div className="relative flex overflow-x-hidden bg-red-600 py-4 border-y border-red-400 rotate-[-1deg] w-[110%] -ml-[5%]">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-3xl font-syncopate font-bold text-white mx-8 uppercase">
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
};
