
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const logo='/logo.png'

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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="  flex items-center gap-2">
                   
                        <Image src={logo} alt="Logo" width={200} height={200} className='object-contain ' />
                   
                
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest hover:text-red-600 transition-colors text-black"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled ? 'bg-red-600 text-white hover:bg-black' : 'bg-black text-white hover:bg-red-600'}`}
                    >
                        BOOK NOW
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-black">
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-white transition-all duration-300 transform md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full justify-center items-center gap-8 p-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-black">
                        <X size={32} />
                    </button>
                </div>
            </div>
        </nav>
    );
};
