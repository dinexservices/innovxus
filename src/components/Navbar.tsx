
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Events', href: '#events' },
        { name: 'Past', href: '#past-events' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#hero" className="text-xl md:text-3xl font-syncopate font-bold flex items-center gap-2">
                    <span className="w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-sm inline-block"></span>
                    INNOVXUS
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition-all">
                        BOOK NOW
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black border-b border-red-900/50 p-6 flex flex-col gap-6 md:hidden">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest">
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
