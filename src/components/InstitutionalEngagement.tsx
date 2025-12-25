
import React from 'react';
import { ArrowRight, ShieldCheck, Cog, ClipboardCheck } from 'lucide-react';

export const InstitutionalEngagement: React.FC = () => {
    const steps = [
        "Institutional discussion and approval",
        "Academic framework alignment",
        "Program design and scheduling",
        "Controlled execution via authorized operations partner",
        "Post-event reporting and documentation"
    ];

    const roles = [
        {
            title: "InnovXus",
            icon: <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />,
            items: ["Academic design", "Governance oversight", "Documentation and reporting"]
        },
        {
            title: "Operations Partner",
            icon: <Cog className="w-8 h-8 text-gray-400 mb-4" />,
            items: ["On-ground execution only", "Logistics and coordination"]
        },
        {
            title: "Institution",
            icon: <ClipboardCheck className="w-8 h-8 text-white mb-4" />,
            items: ["Oversight and supervision", "Discipline and compliance"]
        }
    ];

    return (
        <section className="bg-[#0b0b0b] py-24 relative overflow-hidden text-white">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
                        Our Process
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-syncopate font-bold leading-tight">
                        INSTITUTIONAL <span className="text-red-600">ENGAGEMENT</span> MODEL
                    </h3>
                </div>

                {/* 4.1 Engagement Flow */}
                <div className="mb-24">
                    <h4 className="text-xl font-bold mb-10 text-center md:text-left border-l-4 border-red-600 pl-4">
                        4.1 ENGAGEMENT FLOW
                    </h4>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-red-600 flex items-center justify-center text-xl font-bold mb-6 relative transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                                        {idx + 1}
                                    </div>
                                    <h5 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors max-w-[180px]">
                                        {step}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4.2 Roles & Responsibilities */}
                <div>
                    <h4 className="text-xl font-bold mb-10 text-center md:text-left border-l-4 border-red-600 pl-4">
                        4.2 ROLES & RESPONSIBILITIES
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {roles.map((role, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                                <div className="mb-6">{role.icon}</div>
                                <h5 className="text-2xl font-bold mb-6 font-syncopate">{role.title}</h5>
                                <ul className="space-y-4">
                                    {role.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                                            <span className="text-sm md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
