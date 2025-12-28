"use client";
import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Facebook, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white relative overflow-hidden border-t border-white/10">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10 pt-20 pb-10">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-5 flex flex-col items-start">
                        <div className="mb-6">
                            <Image src="/logo.png" alt="Innovxus Logo" width={140} height={50} className="object-contain" />
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                            Bridging the gap between academia and industry through structured innovation programs and world-class technical events.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div className="col-span-1 md:col-span-2 md:col-start-7">
                        <h4 className="font-bold text-lg mb-6 text-white">Platform</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-red-600 transition-colors">About Us</a></li>
                            <li><a href="#programs" className="text-gray-400 hover:text-red-600 transition-colors">Programs</a></li>
                            <li><a href="#process" className="text-gray-400 hover:text-red-600 transition-colors">Our Process</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#partners" className="text-gray-400 hover:text-red-600 transition-colors">Partners</a></li>
                            <li><a href="#corporate" className="text-gray-400 hover:text-red-600 transition-colors">Corporate</a></li>
                            <li><a href="#gallery" className="text-gray-400 hover:text-red-600 transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div className="col-span-2 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6 text-white">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/innovxus/" className="p-3 bg-white/5 rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-transparent group">
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="https://www.linkedin.com/company/innovxus" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-transparent group">
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>

                        </div>
                    </div>
                </div>

                {/* Big Text */}
                <div className="border-t border-white/10 pt-10 mb-10 text-center">
                    <h1 className="text-[12vw] leading-none font-syncopate font-black text-white/5 select-none tracking-tighter">
                        INNOVXUS
                    </h1>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 border-t border-white/5 pt-8">
                    <p>© 2026 InnovXus. All rights reserved.</p>

                    <p className="flex items-center gap-1">
                        Developed by <a href="https://dinestx.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-600 font-bold transition-colors">Dinex Services</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
