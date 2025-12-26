"use client"
import React from 'react';
import { Building2, GraduationCap, Users, Bookmark, FileBadge, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const InstitutionalApproach: React.FC = () => {

    const ecosystemItems = [
        { icon: <Building2 className="w-8 h-8" />, label: "Universities & Colleges" },
        { icon: <GraduationCap className="w-8 h-8" />, label: "Academic Departments" },
        { icon: <Users className="w-8 h-8" />, label: "Corporate Innovation Teams" },
        { icon: <Bookmark className="w-8 h-8" />, label: "Government & Skill Bodies" },
        { icon: <FileBadge className="w-8 h-8" />, label: "Authorized Student Bodies", sub: "(Execution Support)" },
    ];

    return (
        <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-8 leading-tight">
                            INSTITUTIONAL <span className="text-red-600">APPROACH</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        InnovXus operates with a <span className="text-white font-medium">governance-first approach</span>, ensuring that all academic and technical programs are
                        conducted under institutional approvals, faculty supervision, and clearly defined standard operating procedures.
                    </motion.p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <motion.h3
                        className="text-red-600 font-bold uppercase tracking-[0.2em] mb-12 text-center text-sm md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Institutional Ecosystem
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {ecosystemItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-full p-8 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm hover:bg-neutral-800/50 hover:border-red-600/50 transition-all duration-500 flex flex-col items-center text-center group-hover:-translate-y-2">
                                    <div className="mb-6 p-4 rounded-full bg-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-lg group-hover:shadow-red-900/20">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors mb-2">
                                        {item.label}
                                    </span>
                                    {item.sub && (
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-red-400 transition-colors">
                                            {item.sub}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Trust Indicators */}
                    <motion.div
                        className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.7 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {["Institutional SOPs", "Faculty Supervision", "Defined Protocols"].map((text, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-red-600" />
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{text}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
