
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const logo = '/logo.png'

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Engagement Model', href: '#process' },
        { name: 'Programs', href: '#programs' },
        { name: 'Corporate', href: '#corporate' },
        { name: 'Partners', href: '#partners' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={200} height={200} className='object-contain' />
                </Link>

                {/* Desktop Menu */}
                {/* Desktop Menu */}
                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="lg:text-sm font-bold uppercase lg:tracking-widest hover:text-red-600 transition-colors text-black whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`lg:px-6 lg:py-2 rounded-full font-bold lg:text-sm transition-all shadow-lg whitespace-nowrap ${isScrolled ? 'bg-red-600 text-white hover:bg-black' : 'bg-black text-white hover:bg-red-600'}`}
                    >
                        BOOK NOW
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-black z-50 relative">
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer (Right Side) */}
            <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-40 transition-transform duration-300 transform lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full justify-center items-start gap-8 p-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xl font-bold uppercase tracking-widest text-black hover:text-red-600 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
