import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-6 text-sm">Get In Touch</h2>
          <h3 className="text-5xl md:text-7xl font-syncopate font-bold leading-none text-black mb-10">
            HAVE AN <br /><span className="text-red-600">IDEA?</span>
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl font-medium">
            We are always looking for the next big collaboration. Whether you represent a university, a corporation, or a student body, let's build something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Email */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300 shadow-sm group-hover:shadow-red-200">
              <Mail className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">General Inquiries</h4>
            <a href="mailto:hello@innovxus.io" className="text-2xl font-bold text-black hover:text-red-600 transition-colors break-all">hello@innovxus.io</a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300 shadow-sm group-hover:shadow-red-200">
              <Phone className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">Direct Line</h4>
            <p className="text-2xl font-bold text-black">+91 98765 43210</p>
          </div>

          {/* Office */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300 shadow-sm group-hover:shadow-red-200">
              <MapPin className="w-8 h-8 text-black group-hover:text-white transition-colors" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">Office</h4>
            <p className="text-xl font-bold text-black leading-tight">InnovXus HQ, Tech Park,<br />Sector 62, Noida</p>
          </div>
        </div>
      </div>
    </section>
  );
};
