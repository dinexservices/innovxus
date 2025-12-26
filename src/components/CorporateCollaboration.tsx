"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Boxes, PenTool, AlertTriangle, ArrowUpRight, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

export const CorporateCollaboration: React.FC = () => {
    const models = [
        { title: "Corporate innovation challenges", icon: <Briefcase /> },
        { title: "Academic-aligned hackathons", icon: <Boxes /> },
        { title: "Skill assessment and exposure programs", icon: <PenTool /> },
    ];

    const organizations = [
        "IDFC First Bank",
        "Physics Wallah",
        "Perplexity AI",
        "Rotary International",
        "Interview Buddy",
        "Next Bench",
        "CodeUnia",
        "HiDevs",
        "DriftX"
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1; // Adjust speed here
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    // Duplicate logic for infinite scroll effect
    const displayOrgs = [...organizations, ...organizations, ...organizations];

    return (
        <section className="bg-black text-white py-24 relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mb-16">
                    <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
                        Industry Interface
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-syncopate font-bold leading-tight mb-8">
                        CORPORATE & <span className="text-red-600">INDUSTRY</span> COLLABORATION
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* 6.1 Collaboration Models */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 border-l-4 border-red-600 pl-4 uppercase tracking-wide">
                            6.1 Collaboration Models
                        </h4>

                        <div className="space-y-6">
                            {models.map((model, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-white/10 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all">
                                        {model.icon}
                                    </div>
                                    <h5 className="text-lg md:text-xl font-medium">{model.title}</h5>
                                </div>
                            ))}
                        </div>

                        {/* Mandatory Disclaimer */}
                        <div className="mt-8 flex items-start gap-4 p-4 bg-red-900/20 border border-red-900/30 rounded-xl">
                            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                            <p className="text-red-200 text-sm">
                                <span className="font-bold block mb-1 text-red-500">Important Disclaimer:</span>
                                Corporate participation does not influence academic evaluation, judging outcomes, or certification processes.
                            </p>
                        </div>
                    </div>

                    {/* 6.2 Organizations Engaged */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 border-l-4 border-white pl-4 uppercase tracking-wide">
                            6.2 Organizations Engaged
                        </h4>
                        <div className="mb-6">
                            <h5 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-widest">
                                Industry, Academic & Ecosystem Organizations
                            </h5>
                        </div>

                        {/* Swipeable Carousel */}
                        <div
                            className="relative -mx-6 px-6 lg:mx-0 lg:px-0"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            {/* Controls */}
                            <div className="absolute -top-12 right-6 lg:right-0 flex gap-2">
                                <button
                                    onClick={() => {
                                        if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                                    }}
                                    className="p-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-red-500 transition-colors group"
                                    aria-label="Scroll Left"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </button>
                                <button
                                    onClick={() => {
                                        if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                                    }}
                                    className="p-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-red-500 transition-colors group"
                                    aria-label="Scroll Right"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                </button>
                            </div>

                            <div
                                ref={scrollRef}
                                className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x cursor-grab active:cursor-grabbing"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {displayOrgs.map((org, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-none w-64 snap-center flex flex-col items-center justify-center text-center p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all group select-none"
                                    >
                                        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                                            <Building2 className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="font-bold text-sm md:text-base text-gray-200 group-hover:text-white transition-colors line-clamp-1">{org}</span>
                                        <ArrowUpRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-all mt-2" />
                                    </div>
                                ))}
                            </div>

                            {/* Swipe Hint Overlay (Visible only on mobile initially or implied) */}
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/80 to-transparent pointer-events-none lg:hidden" />
                        </div>

                        {/* Disclaimer */}
                        <p className="text-gray-500 text-xs mt-6 italic">
                            * Engagements vary in scope and nature and do not necessarily imply formal partnerships unless explicitly stated.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
