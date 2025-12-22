
import React from 'react';
import { UPCOMING_EVENTS } from '@/constants';
import { MapPin, ArrowUpRight, Bookmark } from 'lucide-react';

export const UpcomingEvents: React.FC = () => {
  return (
    <section id="events" className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1920&auto=format&fit=crop" 
          alt="Concert background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-red-600 font-bold uppercase tracking-widest mb-2">Happening Soon</h2>
            <h3 className="text-4xl md:text-5xl font-syncopate font-bold mb-4 text-white">ON THE HORIZON</h3>
            <p className="text-gray-400">Join us for our next round of world-class experiences. Limited seats available for each show.</p>
          </div>
          <button className="flex items-center gap-2 text-white font-bold group border-b-2 border-red-600 pb-2 hover:text-red-500 transition-colors">
            VIEW FULL CALENDAR <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="group flex flex-col bg-[#111111]/80 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-red-600/30">
              {/* Card Image Wrapper */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                
                {/* Floating Date Badge (Dark Mode) */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl flex flex-col items-center justify-center shadow-2xl border border-white/10">
                  <span className="text-red-500 font-bold text-xl leading-none">{event.day}</span>
                  <span className="text-gray-300 text-[10px] font-bold uppercase tracking-tighter mt-1">{event.month}</span>
                </div>

                {/* Floating Bookmark/Category Icon (Dark Mode) */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xl p-2.5 rounded-xl shadow-2xl border border-white/10 text-red-500 transition-all hover:scale-110 cursor-pointer hover:bg-red-600 hover:text-white">
                  <Bookmark size={18} fill="currentColor" />
                </div>

                {/* Overlay Gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                  {event.title}
                </h4>

                {/* Attendees / Going Section */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-3">
                    {event.attendees.map((avatar, i) => (
                      <img 
                        key={i} 
                        src={avatar} 
                        className="w-9 h-9 rounded-full border-2 border-[#111] object-cover" 
                        alt="Attendee"
                      />
                    ))}
                  </div>
                  <span className="text-red-400 text-sm font-semibold tracking-wide">
                    +{event.goingCount} Interested
                  </span>
                </div>

                {/* Location (Dark Mode) */}
                <div className="flex items-center gap-2 text-gray-500 mb-8 mt-auto">
                  <MapPin size={16} className="text-red-600" />
                  <span className="text-xs font-medium truncate tracking-wider">{event.location}</span>
                </div>

                {/* Action Button (Dark Mode) */}
                <button className="w-full py-4 bg-white/5 text-white rounded-2xl font-bold border border-white/10 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 transform active:scale-95 shadow-inner">
                  Get Tickets
                </button>
              </div>
            </div>
          ))}

          {/* Special "Plan Your Own" Card - Kept Red for accent */}
          <div className="group flex flex-col bg-red-600 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-500 relative">
             {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="p-10 flex flex-col h-full justify-between text-white relative z-10">
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                  <ArrowUpRight size={28} />
                </div>
                <h4 className="text-3xl font-syncopate font-bold mb-4 leading-tight tracking-tighter">
                  HOST YOUR <br />EVENT NEXT
                </h4>
                <p className="text-red-100 text-sm opacity-90 leading-relaxed mb-8 font-medium">
                  Partner with Innovxus to bring your wildest campus event ideas to life with professional execution.
                </p>
              </div>
              
              <button className="w-full py-5 bg-white text-red-600 rounded-2xl font-bold shadow-xl transition-all hover:bg-black hover:text-white transform group-hover:scale-105">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
