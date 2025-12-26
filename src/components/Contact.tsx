
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-white">
      {/* Background Event Visual - Made lighter/subtle */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop"
          alt="Gala background"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-6xl font-syncopate font-bold mb-10 leading-tight text-black">
            LET'S <span className="text-red-600">COLLABORATE</span>
          </h3>
          <p className="text-gray-600 text-xl mb-20 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your campus culture? Our team of architects is waiting to design your next legacy. Connect with us through any of our channels below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl group hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-50 rounded-2xl text-red-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Mail size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">Email Us</h4>
              <p className="text-gray-500">hello@innovxus.io</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl group hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-50 rounded-2xl text-red-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <Phone size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">Call Us</h4>
              <p className="text-gray-500">+1 (555) 987-6543</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl group hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-50 rounded-2xl text-red-600 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                <MapPin size={32} />
              </div>
              <h4 className="font-bold text-xl mb-2 text-black">Our Studio</h4>
              <p className="text-gray-500">Creative District, London</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex gap-6">
              <a href="#" className="p-5 bg-gray-100 rounded-full text-black hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 border border-gray-200">
                <Instagram size={28} />
              </a>
              <a href="#" className="p-5 bg-gray-100 rounded-full text-black hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 border border-gray-200">
                <Twitter size={28} />
              </a>
              <a href="#" className="p-5 bg-gray-100 rounded-full text-black hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 border border-gray-200">
                <Facebook size={28} />
              </a>
            </div>

            <a
              href="mailto:hello@innovxus.io"
              className="px-12 py-6 bg-red-600 text-white font-bold rounded-full flex items-center gap-3 hover:bg-black transition-all transform hover:scale-105 shadow-2xl red-glow font-syncopate text-sm"
            >
              START YOUR PROJECT <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
