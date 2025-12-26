
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Event Visual - Made lighter/subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop"
          alt="Gala background"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-syncopate font-bold mb-6 leading-none text-black">
              LET'S <span className="text-red-600">COLLABORATE</span>
            </h3>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Ready to elevate your campus culture? Our team is waiting to design your next legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Email Card */}
            <div className="bg-white p-8 md:p-10 border border-gray-200 hover:border-red-600 transition-colors duration-300 group text-center">
              <div className="w-14 h-14 bg-gray-50 rounded-full text-black flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <h4 className="font-bold text-lg mb-3 text-black uppercase tracking-wide">Email Us</h4>
              <a href="mailto:hello@innovxus.io" className="text-gray-600 hover:text-red-600 transition-colors text-base md:text-lg">hello@innovxus.io</a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 md:p-10 border border-gray-200 hover:border-red-600 transition-colors duration-300 group text-center">
              <div className="w-14 h-14 bg-gray-50 rounded-full text-black flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <h4 className="font-bold text-lg mb-3 text-black uppercase tracking-wide">Call Us</h4>
              <p className="text-gray-600 text-base md:text-lg">+1 (555) 987-6543</p>
            </div>

            {/* Studio Card */}
            <div className="bg-white p-8 md:p-10 border border-gray-200 hover:border-red-600 transition-colors duration-300 group text-center">
              <div className="w-14 h-14 bg-gray-50 rounded-full text-black flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h4 className="font-bold text-lg mb-3 text-black uppercase tracking-wide">Visit Us</h4>
              <p className="text-gray-600 text-base md:text-lg">Creative District, London</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-12 border-t border-gray-100 pt-16">
            <div className="flex gap-4">
              <a href="#" className="p-4 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-black">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-4 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-black">
                <Twitter size={24} />
              </a>
              <a href="#" className="p-4 rounded-full text-gray-400 hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-black">
                <Facebook size={24} />
              </a>
            </div>

            <a
              href="mailto:hello@innovxus.io"
              className="group flex items-center gap-3 text-black font-bold text-sm tracking-[0.2em] hover:text-red-600 transition-colors"
            >
              <span>START YOUR PROJECT</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
