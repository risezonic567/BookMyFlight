import React from "react";
import FlightCard from "./FlightCard";

// Updated Data with consistent fields for visibility
const flights = [
  {
    id: 1,
    from: "Los Angeles",
    to: "Las Vegas",
    price: "$136.89",
    date: "07 Apr 26",
    airline: "American Airlines", // Adding airline for better card UI
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: 2,
    from: "New York",
    to: "Atlanta",
    price: "$313.90",
    date: "07 Apr 26",
    airline: "Delta Air Lines",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
  },
  {
    id: 3,
    from: "Washington",
    to: "Miami",
    price: "$253.89",
    date: "07 Apr 26",
    airline: "United Airlines",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
];

export default function DomesticFlightResults() {
  return (
    // mt-8 ensures it's not sticking to the hero section above it
    <section className="relative block max-w-6xl mx-auto px-4 py-12 mt-8 overflow-visible">
      
      {/* Title for clarity that results have loaded */}
      <div className="mb-8 border-l-4 border-blue-600 pl-4">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tight">
          Available Domestic Flights
        </h2>
        <p className="text-gray-500 font-medium">Found {flights.length} amazing deals for your trip</p>
      </div>

      {/* Grid Layout: Stacked on mobile, Grid on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {flights.map((flight) => (
          <div key={flight.id} className="block transform transition-none">
            {/* CRITICAL: 
               Maine 'index' prop remove kar diya hai taaki FlightCard 
               ke andar koi puraana GSAP animation trigger na ho sake.
            */}
            <FlightCard flight={flight} />
          </div>
        ))}
      </div>

      {/* Empty State Fallback (Safety Check) */}
      {flights.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-inner">
           <p className="text-gray-400 font-bold">No flights visible? Check your connection.</p>
        </div>
      )}
    </section>
  );
}