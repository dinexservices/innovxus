
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

                {/* College List Carousel */}
                <div className="relative w-full overflow-hidden mask-gradient-x">
                    {/* Gradient Masks for smooth fade edges */}
                    <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex animate-marquee hover:pause whitespace-nowrap py-8 gap-8">
                        {[...colleges, ...colleges, ...colleges].map((college, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all w-64 md:w-72 shrink-0 group">
                                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                                    <School className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-sm font-bold text-center text-gray-800 whitespace-normal line-clamp-2 h-10 flex items-center justify-center">
                                    {college}
                                </h4>
                            </div>
                        ))}
                    </div>
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
