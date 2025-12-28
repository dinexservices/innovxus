
"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GALLERY_IMAGES } from '@/constants';
import { GalleryImage } from '@/types';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HIGHLIGHT_IMAGES = [
    { id: 'h1', url: '/media/img1.webp', caption: 'Mainstage Madness' },
    { id: 'h2', url: '/media/img2.webp', caption: 'Midnight Rhythms' },
    { id: 'h3', url: '/media/img3.webp', caption: 'The Grand Entrance' },
    { id: 'h4', url: '/media/img4.webp', caption: 'Crowd Connection' },
    { id: 'h5', url: '/media/img5.webp', caption: 'Electric Vibe' },
    { id: 'h6', url: '/media/img6.webp', caption: 'Unforgettable Nights' },
    { id: 'h7', url: '/media/img7.webp', caption: 'Unforgettable Nights' },
];

const GalleryCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % HIGHLIGHT_IMAGES.length);
    }, []);

    const prev = () => {
        setActiveIndex((prev) => (prev - 1 + HIGHLIGHT_IMAGES.length) % HIGHLIGHT_IMAGES.length);
    };

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <div className="relative w-full h-[60vw] md:h-[800px] max-h-[800px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden group shadow-2xl border border-white/10 mb-10 md:mb-14">
            <div
                className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {HIGHLIGHT_IMAGES.map((img) => (
                    <div key={img.id} className="min-w-full h-full relative">
                        <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-10 md:p-16">
                            <div className="max-w-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="p-2 bg-red-600 rounded-lg text-white">
                                        <Play size={16} fill="white" />
                                    </span>
                                    <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">Event Highlight</span>
                                </div>
                                {/* <h4 className="text-2xl md:text-5xl font-syncopate font-bold text-white tracking-tighter leading-none mb-2 md:mb-4">
                                    {img.caption}
                                </h4> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button onClick={prev} className="p-4 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 pointer-events-auto hover:bg-red-600 transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={next} className="p-4 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/10 pointer-events-auto hover:bg-red-600 transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-10 flex gap-3">
                {HIGHLIGHT_IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-12 bg-red-600' : 'w-4 bg-white/20'}`}
                    />
                ))}
            </div>
        </div>
    );
};

const GalleryItem: React.FC<{ img: GalleryImage; idx: number; onOpen: (img: GalleryImage) => void }> = ({ img, idx, onOpen }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState('translate(0, 0) scale(1)');

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / 12;
        const moveY = (y - centerY) / 12;
        setTransform(`translate(${moveX}px, ${moveY}px) scale(1.08)`);
    };

    const handleMouseLeave = () => {
        setTransform('translate(0, 0) scale(1)');
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpen(img)}
            className={`relative overflow-hidden rounded-3xl group cursor-pointer transition-all duration-500 ease-out hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] ${idx % 3 === 0 ? 'md:row-span-2 h-[450px]' : 'h-[215px]'}`}
            style={{ perspective: '1000px' }}
        >
            <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:brightness-110"
                style={{ transform }}
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-8">
                <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-white font-bold text-xl font-syncopate tracking-tighter mb-2">
                        {img.caption}
                    </p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-red-500 transition-all duration-700 mx-auto" />
                </div>
            </div>
            <div className="absolute inset-0 border border-white/5 group-hover:border-red-500/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
        </div>
    );
};

export const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        // Removed scroll listener for parallax
    }, []);

    const openModal = (img: GalleryImage) => {
        setSelectedImage(img);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="gallery" className="relative py-32 overflow-hidden bg-[#050505]">
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(220,38,38,0.2),transparent_70%)]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4">Archives</h2>
                    <h3 className="text-3xl md:text-5xl font-syncopate font-bold text-white tracking-tighter mb-6 md:mb-10">
                        VISUAL <span className="text-red-600">STORY</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A curated selection of moments that define the energy of our events. From the roaring crowds to the spotlighted stages.
                    </p>
                </div>

                {/* New Feature: Event Highlights Carousel */}
                <GalleryCarousel />


            </div>


        </section>
    );
};
