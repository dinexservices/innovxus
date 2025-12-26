
'use client'
import React, { useState } from 'react';
import { Terminal, Cpu, Shield, Lightbulb, Presentation, Code2, Database, PenTool, GitBranch, Trophy, Rocket, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

export const AcademicPrograms: React.FC = () => {
    const [openCategory, setOpenCategory] = useState<string | null>("Competitive Coding & Hackathons");

    const categories = [
        {
            title: "Competitive Coding & Hackathons",
            items: [
                { name: "National Hackathons", icon: <Terminal className="w-5 h-5" /> },
                { name: "AI Buildathons", icon: <Cpu className="w-5 h-5" /> },
                { name: "Cybersecurity Capture-The-Flag (CTF)", icon: <Shield className="w-5 h-5" /> },
                { name: "Industry-Aligned Coding Challenges", icon: <Code2 className="w-5 h-5" /> },
            ]
        },
        {
            title: "Innovation & Research",
            items: [
                { name: "Ideathons & Problem-Solving Challenges", icon: <Lightbulb className="w-5 h-5" /> },
                { name: "Research & Innovation Showcases", icon: <Presentation className="w-5 h-5" /> },
                { name: "Product Design & UX Challenges", icon: <PenTool className="w-5 h-5" /> },
                { name: "Startup & Innovation Pitch Challenges", icon: <Rocket className="w-5 h-5" /> },
            ]
        },
        {
            title: "Skill Development & Workshops",
            items: [
                { name: "Data Science & Analytics Competitions", icon: <Database className="w-5 h-5" /> },
                { name: "Open-Source Contribution Sprints", icon: <GitBranch className="w-5 h-5" /> },
                { name: "Technology Awareness & Applied Workshops", icon: <GraduationCap className="w-5 h-5" /> },
            ]
        },
        {
            title: "Institutional Events",
            items: [
                { name: "Department-level Innovation Challenges", icon: <Lightbulb className="w-5 h-5" /> },
                { name: "Inter-Departmental Technical Competitions", icon: <Trophy className="w-5 h-5" /> },
            ]
        }
    ];

    const toggleCategory = (title: string) => {
        setOpenCategory(prev => prev === title ? null : title);
    };

    return (
        <section id="programs" className="bg-white py-24 relative overflow-hidden text-black border-t border-gray-100">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
                        What We Do
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-syncopate font-bold leading-tight">
                        ACADEMIC <span className="text-red-600">PROGRAMS</span> & EVENTS
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* 5.1 Technical & Innovation Programs (Accordion) */}
                    <div className="lg:w-2/3 w-full">
                        <h4 className="text-xl font-bold mb-8 border-l-4 border-red-600 pl-4 uppercase tracking-wide">
                            5.1 Technical & Innovation Programs
                        </h4>

                        <div className="space-y-4">
                            {categories.map((category, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                    <button
                                        onClick={() => toggleCategory(category.title)}
                                        className={`w-full flex items-center justify-between p-5 text-left font-bold text-lg md:text-xl transition-colors duration-300 ${openCategory === category.title ? 'bg-red-50 text-red-700' : 'bg-white hover:bg-gray-50 text-gray-800'}`}
                                    >
                                        <span>{category.title}</span>
                                        {openCategory === category.title ? (
                                            <ChevronUp className="w-6 h-6 shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 shrink-0 text-gray-400" />
                                        )}
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openCategory === category.title ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100">
                                            {category.items.map((prog, pIdx) => (
                                                <div key={pIdx} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50/50 border border-transparent hover:border-red-100 hover:bg-red-50/30 transition-all">
                                                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm shrink-0">
                                                        {prog.icon}
                                                    </div>
                                                    <span className="font-medium text-gray-700 text-sm md:text-base">{prog.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-red-50 text-red-800 text-sm font-medium rounded-lg inline-block border border-red-100">
                            Note: All programs are aligned with academic learning objectives and conducted under faculty supervision.
                        </div>
                    </div>

                    {/* 5.2 Experience & Engagement Zones */}
                    <div className="lg:w-1/3 w-full">
                        <div className="sticky top-24">
                            <h4 className="text-xl font-bold mb-8 border-l-4 border-black pl-4 uppercase tracking-wide">
                                5.2 Experience & Engagement Zones
                            </h4>

                            <div className="bg-black text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />

                                <p className="text-lg leading-relaxed font-light mb-6">
                                    Experience and engagement activities are designed to <span className="text-red-500 font-bold">enhance learning exposure</span> and <span className="text-red-500 font-bold">campus interaction</span> while
                                    operating strictly within university-approved time slots and guidelines.
                                </p>

                                <div className="w-full h-1 bg-gradient-to-r from-red-600 to-transparent opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
