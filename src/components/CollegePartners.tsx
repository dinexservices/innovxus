
import React from 'react';
import { School, GraduationCap } from 'lucide-react';

export const CollegePartners: React.FC = () => {
    const colleges = [
        "Lovely Professional University (LPU)",
        "Indian Institute of Technology Delhi",
        "Indian Institute of Technology Madras",
        "Indian Institute of Technology Ropar",
        "Noida Institute of Engineering and Technology, Greater Noida",
        "Vishveshwarya Group Of Institution, Greater Noida",
        "Keshav Memorial Institute of Technology (KMIT)",
        "Chandigarh University",
        "Chandigarh Group of Colleges, Landran",
        "Galgotias Institute"
    ];

    return (
        <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
                        Our Reach
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-syncopate font-bold leading-tight mb-8 text-black">
                        INSTITUTIONS ENGAGED THROUGH <span className="text-red-600">INNOVXUS</span> PROGRAMS
                    </h3>

                    {/* Intro Disclaimer */}
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl inline-block text-left">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            <span className="font-bold text-black">Note:</span> InnovXus has engaged with a diverse set of higher education institutions through academic programs, technical
                            events, innovation initiatives, workshops, and collaborative activities. Engagements may vary in nature and scope
                            and do not necessarily imply formal institutional partnerships unless explicitly stated.
                        </p>
                    </div>
                </div>

                {/* College List Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 font-medium">
                    {colleges.map((college, idx) => (
                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-100 md:border-none">
                            <div className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                            <span className="text-gray-800">{college}</span>
                        </div>
                    ))}
                </div>

                {/* Footer Line */}
                <div className="text-center border-t border-gray-100 pt-8">
                    <p className="text-gray-400 text-sm italic">
                        Detailed engagement references may be shared with authorized institutional representatives upon request.
                    </p>
                </div>
            </div>
        </section>
    );
};
