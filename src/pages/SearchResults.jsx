import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlightCard from "../component/FlightCard";
import { MoveRight, ArrowLeftRight, PlaneTakeoff, Calendar, Users, ChevronLeft } from "lucide-react";

// --- 1. DATA GENERATOR (No GSAP, Pure Static Logic) ---
const ALL_FLIGHTS = {
  "one-way": Array.from({ length: 25 }, (_, i) => ({
    id: `ow-${i}`,
    airline: ['IndiGo', 'Air India', 'Vistara', 'SpiceJet', 'Akasa Air'][i % 5],
    flightNumber: `6E-${100 + i}`,
    depTime: `${String(6 + (i % 6)).padStart(2, '0')}:00 AM`,
    arrTime: `${String(9 + (i % 6)).padStart(2, '0')}:30 AM`,
    duration: '2h 30m',
    stops: i % 3 === 0 ? '1 Stop' : 'Non-stop',
    price: (3500 + (i * 150)).toLocaleString('en-IN')
  })),
  "round-trip": {
    departure: Array.from({ length: 25 }, (_, i) => ({
      id: `rd-${i}`,
      airline: ['Emirates', 'Qatar', 'Etihad', 'Air India', 'Lufthansa'][i % 5],
      flightNumber: `EK-${200 + i}`,
      depTime: `${String(7 + (i % 5)).padStart(2, '0')}:00 AM`,
      arrTime: `${String(10 + (i % 5)).padStart(2, '0')}:00 AM`,
      duration: '3h 00m',
      stops: 'Non-stop',
      price: (12000 + (i * 200)).toLocaleString('en-IN')
    })),
    return: Array.from({ length: 25 }, (_, i) => ({
      id: `rr-${i}`,
      airline: ['Emirates', 'Qatar', 'Etihad', 'Air India', 'Lufthansa'][i % 5],
      flightNumber: `EK-${300 + i}`,
      depTime: `${String(8 + (i % 4)).padStart(2, '0')}:00 PM`,
      arrTime: `${String(11 + (i % 4)).padStart(2, '0')}:00 PM`,
      duration: '3h 00m',
      stops: 'Non-stop',
      price: (11500 + (i * 180)).toLocaleString('en-IN')
    }))
  },
  "multi-city": Array.from({ length: 25 }, (_, i) => ({
    id: `mc-${i}`,
    airline: ['British Airways', 'Swiss Air', 'Turkish', 'Air France', 'Vistara'][i % 5],
    flightNumber: `BA-${400 + i}`,
    depTime: `${String(5 + (i % 7)).padStart(2, '0')}:30 AM`,
    arrTime: `${String(10 + (i % 7)).padStart(2, '0')}:45 AM`,
    duration: '5h 15m',
    stops: i % 4 === 0 ? '2 Stops' : 'Non-stop',
    price: (22000 + (i * 500)).toLocaleString('en-IN')
  }))
};

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Safe Fallback to prevent crash if data is missing
  const searchData = location.state?.searchData || {
    type: 'one-way',
    origin: { city: 'New Delhi', code: 'DEL' },
    destination: { city: 'Mumbai', code: 'BOM' },
    departure: '2026-10-10',
    passengers: { adult: 1, child: 0, infant: 0 }
  };

  const [tripType, setTripType] = useState(searchData.type || "one-way");

  return (
    <div className="min-h-screen bg-[#f4f7fe] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- TOP BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-blue-600 font-bold px-4 py-2 hover:bg-white rounded-xl transition-colors"
          >
            <ChevronLeft size={20} /> Back to Search
          </button>
          
          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200">
            {['one-way', 'round-trip', 'multi-city'].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-6 py-2 rounded-xl capitalize text-sm font-black transition-all ${
                  tripType === type ? "bg-blue-600 text-white shadow-md" : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {type.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* --- HEADER INFO CARD --- */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
              <PlaneTakeoff size={36} />
            </div>
            <div>
              <div className="flex items-center gap-3 text-2xl md:text-3xl font-black text-gray-800">
                <span>{searchData.origin?.city}</span>
                {tripType === "round-trip" ? <ArrowLeftRight className="text-blue-500" size={24} /> : <MoveRight className="text-blue-500" size={24} />}
                <span>{searchData.destination?.city}</span>
              </div>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-500 font-bold text-xs uppercase tracking-widest">
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full"><Calendar size={14}/> {searchData.departure}</span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full"><Users size={14}/> {searchData.passengers?.adult} Adult</span>
              </div>
            </div>
          </div>
          <div className="text-right hidden md:block border-l pl-8 border-gray-100">
            <p className="text-xs text-gray-400 font-bold uppercase mb-1">Starting From</p>
            <h2 className="text-3xl font-black text-green-600">₹{tripType === 'round-trip' ? '11,500' : '3,500'}</h2>
          </div>
        </div>

        {/* --- RESULTS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filters Sidebar */}
          <div className="hidden lg:block">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm sticky top-28">
              <h4 className="font-black text-gray-800 mb-6 underline underline-offset-8 decoration-blue-500">Quick Filters</h4>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-3 tracking-widest">Stops</p>
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-600 mb-2 cursor-pointer"><input type="checkbox" className="w-4 h-4" /> Non-stop</label>
                  <label className="flex items-center gap-3 text-sm font-bold text-gray-600 cursor-pointer"><input type="checkbox" className="w-4 h-4" /> 1 Stop</label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Results Area */}
          <div className="lg:col-span-3">
            
            {tripType === "one-way" && (
              <div className="space-y-4">
                <h3 className="font-black text-gray-700">Recommended Flights (25)</h3>
                {ALL_FLIGHTS["one-way"].map((f) => (
                  <FlightCard key={f.id} flight={{...f, fromCode: searchData.origin?.code, toCode: searchData.destination?.code}} />
                ))}
              </div>
            )}

            {tripType === "round-trip" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-blue-600 text-white p-4 rounded-2xl font-black text-xs uppercase flex justify-between">
                    Departure Flights <PlaneTakeoff size={16} />
                  </div>
                  {ALL_FLIGHTS["round-trip"].departure.map((f) => (
                    <FlightCard key={f.id} flight={{...f, fromCode: searchData.origin?.code, toCode: searchData.destination?.code}} />
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-600 text-white p-4 rounded-2xl font-black text-xs uppercase flex justify-between">
                    Return Flights <PlaneTakeoff size={16} className="rotate-180" />
                  </div>
                  {ALL_FLIGHTS["round-trip"].return.map((f) => (
                    <FlightCard key={f.id} flight={{...f, fromCode: searchData.destination?.code, toCode: searchData.origin?.code}} />
                  ))}
                </div>
              </div>
            )}

            {tripType === "multi-city" && (
              <div className="space-y-6">
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
                  <h3 className="font-black text-orange-800 uppercase text-xs">Multi-City Route Specials</h3>
                </div>
                {ALL_FLIGHTS["multi-city"].map((f) => (
                  <FlightCard key={f.id} flight={{...f, fromCode: 'Multi', toCode: 'City'}} />
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;