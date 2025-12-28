"use client";
import React, { useEffect, useState } from 'react';
import { HeroCarousel } from './HeroCarousel';

export const Hero: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="relative z-10 container mx-auto px-6 text-center mb-4">
                <h1
                    className="text-[clamp(2.5rem,8vw,8rem)] md:text-9xl font-syncopate font-extrabold mb-6 tracking-tighter animate-in slide-in-from-bottom duration-1000 leading-tight"
                >
                    <span className="text-red-600 block">INNOVXUS</span>
                    <span className="text-black block text-xl md:text-4xl mt-2 tracking-normal font-bold">ACADEMIC & INDUSTRY INTEGRATION PLATFORM</span>
                </h1>
                <p className="text-sm md:text-xl text-gray-500 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
                    InnovXus partners with higher education institutions to design, execute, and govern structured academic, innovation, and industry-aligned programs in compliance with university policies and institutional frameworks.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full px-4 md:px-0 mb-20">
                    <a href="#contact" className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-red-600 text-white font-bold rounded-full hover:bg-black transition-all transform hover:scale-105 shadow-xl  text-sm md:text-lg tracking-widest text-center whitespace-nowrap">
                        Partner With InnovXus
                    </a>
                    <a href="#programs" className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-xl text-sm md:text-lg tracking-widest text-center whitespace-nowrap">
                        View Academic Framework
                    </a>
                </div>
            </div>

            <div className="w-full">
                <HeroCarousel />
            </div>

        </section>
    );
};
