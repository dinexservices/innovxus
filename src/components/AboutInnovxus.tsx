
import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const AboutInnovxus: React.FC = () => {
    const roles = [
        "Academic framework design",
        "Institutional liaison and coordination",
        "Program governance and documentation",
        "Post-event reporting and compliance alignment"
    ];

    return (
        <section id="about" className="py-12 lg:py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* Left Column: Organizational Overview */}
                    <div className="lg:w-1/2">
                        <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
                            About Innovxus
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-syncopate font-bold text-black mb-6 md:mb-8 leading-tight">
                            ORGANIZATIONAL <span className="text-red-600">OVERVIEW</span>
                        </h3>
                        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm">
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                                InnovXus is an <span className="text-black font-bold">academic and institutional engagement platform</span> focused on enabling structured collaboration
                                between higher education institutions, industry stakeholders, and innovation ecosystems.
                            </p>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                The organization functions as a <span className="text-black font-bold">program architect and institutional interface</span>, supporting universities in the design,
                                governance, and execution of compliant academic and technical initiatives.
                            </p>

                            {/* Mandatory Line */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg flex gap-4 items-start">
                                <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                <p className="text-red-900 font-bold text-sm md:text-base">
                                    InnovXus does not operate as a student club, informal community, or entertainment entity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Role of Innovxus */}
                    <div className="lg:w-1/2 pt-8 lg:pt-0">
                        <div className="relative">
                            {/* Visual Element behind */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-50 z-0" />

                            <h3 className="text-3xl md:text-5xl font-syncopate font-bold text-black mb-6 md:mb-8 relative z-10">
                                ROLE OF <span className="text-red-600">INNOVXUS</span>
                            </h3>

                            <div className="space-y-6 relative z-10">
                                {roles.map((role, idx) => (
                                    <div key={idx} className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-red-600/30 hover:shadow-md transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-black">{role}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
