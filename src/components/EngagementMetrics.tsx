"use client"
import React, { useEffect, useRef } from 'react';
import { Users, Award, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${Math.floor(latest)}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

export const EngagementMetrics: React.FC = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden border-t border-gray-100">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 skew-x-12 translate-x-32 z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-syncopate font-bold mb-6 text-black tracking-tight">
                        ENGAGEMENT & <span className="text-red-600">OUTREACH</span>
                    </h2>

                    {/* Disclaimer */}
                    <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                            <span className="text-red-600 font-bold uppercase mr-2">Disclaimer:</span>
                            InnovXus engagement metrics represent cumulative participation and outreach across academic programs,
                            institutional initiatives, and digital platforms. Metrics are indicative of scale and do not represent certification or
                            academic claims unless explicitly stated.
                        </p>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Major Cards */}
                    <div className="col-span-1 md:col-span-2 bg-black text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[200px] group hover:scale-[1.02] transition-transform duration-300">
                        <Users className="w-10 h-10 text-red-600 mb-4" />
                        <div>
                            <h3 className="text-5xl md:text-6xl font-syncopate font-bold text-white mb-2">
                                <Counter value={100} suffix="k+" />
                            </h3>
                            <p className="text-gray-400 font-medium">Learner interactions recorded through academic programs</p>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 bg-red-600 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between min-h-[200px] group hover:scale-[1.02] transition-transform duration-300">
                        <Award className="w-10 h-10 text-black mb-4" />
                        <div>
                            <h3 className="text-5xl md:text-6xl font-syncopate font-bold text-white mb-2">
                                <Counter value={50} suffix="k+" />
                            </h3>
                            <p className="text-white/80 font-medium">Participants across institutional events and competitions</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                    {/* Socials */}
                    <a href="https://www.instagram.com/innovxus/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-red-200 transition-colors group block">
                        <Instagram className="w-8 h-8 text-red-600 mb-4 group-hover:rotate-12 transition-transform" />
                        <h4 className="text-3xl font-bold text-black mb-1">
                            <Counter value={10} suffix="k+" />
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Instagram</p>
                    </a>
                    <a href="https://www.linkedin.com/company/innovxus" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors group block">
                        <Linkedin className="w-8 h-8 text-blue-700 mb-4 group-hover:rotate-12 transition-transform" />
                        <h4 className="text-3xl font-bold text-black mb-1">
                            <Counter value={2} suffix="k+" />
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">LinkedIn</p>
                    </a>
                    <a href="https://youtube.com/@InnovXus" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-red-600 transition-colors group block">
                        <Youtube className="w-8 h-8 text-red-600 mb-4 group-hover:rotate-12 transition-transform" />
                        <h4 className="text-3xl font-bold text-black mb-1">
                            <Counter value={22} suffix="k+" />
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">YouTube</p>
                    </a>
                    <a href="https://wa.me/+918949039159" target="_blank" rel="noopener noreferrer" className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-green-200 transition-colors group block">
                        <MessageCircle className="w-8 h-8 text-green-600 mb-4 group-hover:rotate-12 transition-transform" />
                        <h4 className="text-3xl font-bold text-black mb-1">
                            <Counter value={7} suffix="k+" />
                        </h4>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Community</p>
                    </a>
                </div>

                {/* Footnote */}
                <p className="text-xs text-gray-400 max-w-3xl border-t border-gray-100 pt-6">
                    * Metrics represent cumulative engagement across multiple programs and platforms and are subject to periodic review.
                </p>
            </div>
        </section>
    );
};
