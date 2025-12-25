
import React from 'react';
import { Briefcase, Boxes, PenTool, AlertTriangle, ArrowUpRight } from 'lucide-react';

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

    return (
        <section className="bg-black text-white py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />

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

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {organizations.map((org, idx) => (
                                <div key={idx} className="flex flex-col justify-center items-center text-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all aspect-[3/2] group cursor-default">
                                    <span className="font-bold text-sm md:text-base group-hover:text-red-500 transition-colors">{org}</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-all mt-2" />
                                </div>
                            ))}
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
