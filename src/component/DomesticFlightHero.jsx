import React from "react";

export default function DomesticFlightHero() {
  return (
    <section
      // animate-fade-in-down: standard tailwind transition (agar config me ho) 
      // ya fir simple opacity control use karein.
      className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 mt-16 shadow-lg overflow-visible"
    >
      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Simple CSS Transition for Smooth Loading without GSAP */}
        <div className="transition-all duration-700 ease-out transform translate-y-0 opacity-100">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Domestic Flight Booking
          </h1>

          <p className="opacity-90 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Find the best domestic flight deals with instant booking. 
            Enjoy seamless travel across India.
          </p>
          
          {/* Ek extra element for visual depth */}
          <div className="mt-6 flex gap-3">
             <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Fastest Booking</span>
             <span className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Lowest Price</span>
          </div>
        </div>

      </div>

      {/* Decorative Background Element (Optional - for look) */}
      <div className="absolute top-0 right-0 w-64 h-full bg-white/5 skew-x-12 transform translate-x-20 pointer-events-none"></div>
    </section>
  );
}