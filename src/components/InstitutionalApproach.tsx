
import { Building2, GraduationCap, Users, Bookmark, FileBadge } from 'lucide-react';

export const InstitutionalApproach: React.FC = () => {

    const ecosystemItems = [
        { icon: <Building2 className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-4" />, label: "Universities & Colleges" },
        { icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-4" />, label: "Academic Departments" },
        { icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-4" />, label: "Corporate Innovation Teams" },
        { icon: <Bookmark className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-4" />, label: "Government & Skill Bodies" },
        { icon: <FileBadge className="w-8 h-8 md:w-10 md:h-10 text-red-600 mb-4" />, label: "Authorized Student Technical Bodies", sub: "(Execution support only)" },
    ];

    return (
        <section className="bg-[#050505] text-white py-24 md:py-32 relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-syncopate font-bold mb-8 leading-tight">
                        Institutional <span className="text-red-600">Approach</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl leading-relaxed font-light">
                        InnovXus operates with a governance-first approach, ensuring that all academic and technical programs are
                        conducted under institutional approvals, faculty supervision, and clearly defined operational standard operating
                        procedures (SOPs).
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <h3 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-10 text-center text-sm md:text-base">Our Institutional Ecosystem</h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {ecosystemItems.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 mb-4 transition-all duration-300 group-hover:bg-red-600/10 group-hover:border-red-600/30 group-hover:-translate-y-2">
                                    {item.icon}
                                </div>
                                <span className="text-sm md:text-base font-bold leading-tight max-w-[150px]">{item.label}</span>
                                {item.sub && <span className="text-xs text-gray-500 mt-2 block">{item.sub}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
