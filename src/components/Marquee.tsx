
import React from 'react';

export const Marquee: React.FC = () => {
    const items = ["COLLEGE FESTS", "TECH SUMMITS", "MUSIC NIGHTS", "CORPORATE EVENTS", "WORKSHOPS", "SPORTS MEETS"];

    return (
        <div className="relative flex overflow-x-hidden bg-red-600 py-2 md:py-4 border-y border-red-400 rotate-[-1deg] w-[105%] md:w-[110%] -ml-[2.5%] md:-ml-[5%]">
            <div className="animate-marquee whitespace-nowrap flex">
                {[...items, ...items, ...items].map((item, i) => (
                    <span key={i} className="text-[clamp(1.5rem,4vw,3rem)] font-syncopate font-bold text-white mx-4 md:mx-8 uppercase">
                        {item} •
                    </span>
                ))}
            </div>
        </div>
    );
};
