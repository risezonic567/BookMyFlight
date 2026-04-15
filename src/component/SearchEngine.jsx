import React, { useState, useEffect } from 'react';
import PassengerPicker from './PassengerPicker';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Trash2, MapPin, Plane } from 'lucide-react';

const AIRPORTS = [
  { city: 'Delhi', code: 'DEL', name: 'Indira Gandhi Intl' },
  { city: 'Mumbai', code: 'BOM', name: 'Chhatrapati Shivaji Intl' },
  { city: 'Bangalore', code: 'BLR', name: 'Kempegowda Intl' },
  { city: 'Dubai', code: 'DXB', name: 'Dubai International' },
  { city: 'London', code: 'LHR', name: 'Heathrow Airport' },
  { city: 'New York', code: 'JFK', name: 'John F. Kennedy Intl' },
];

const SearchEngine = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('round-trip');
  const [from, setFrom] = useState({ city: '', code: '' });
  const [to, setTo] = useState({ city: '', code: '' });
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [showFromSuggest, setShowFromSuggest] = useState(false);
  const [showToSuggest, setShowToSuggest] = useState(false);

  const [multiCityFlights, setMultiCityFlights] = useState([
    { from: '', to: '', date: '' },
    { from: '', to: '', date: '' }
  ]);

  const handleFinalSearch = (e) => {
    e.preventDefault();
    if (!from.code || !to.code || !departureDate) {
      alert("Please fill all details!");
      return;
    }

    const searchData = {
      type: tripType,
      origin: from,
      destination: to,
      departure: departureDate,
      return: tripType === 'round-trip' ? returnDate : null,
      passengers: JSON.parse(localStorage.getItem('passengers')) || { adult: 1, child: 0, infant: 0 },
      multiCity: tripType === 'multi-city' ? multiCityFlights : null
    };

    navigate('/search-results', { state: { searchData } });
  };

  const filteredAirports = (query) => 
    AIRPORTS.filter(a => a.city.toLowerCase().includes(query.toLowerCase()) || a.code.toLowerCase().includes(query.toLowerCase()));

  return (
    <section className="relative min-h-[600px] flex items-center justify-center py-12 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner (book myflight).jpg.jpeg')" }}>
      
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-7xl">
        <div className="mb-8 text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Cheap International Flights from USA  </h1>
          <p className="text-white/90 text-lg"> – Book & Save Big</p>
        </div>

        <div className="bg-black/60 backdrop-blur-xl rounded-3xl shadow-2xl p-5 md:p-8 border border-white/10 w-full">
          
          {/* Trip Type Tabs - Flex wrap ensures they don't break on mobile */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['one-way', 'round-trip', 'multi-city'].map((type) => (
              <button 
                key={type} 
                type="button"
                onClick={() => setTripType(type)}
                className={`px-5 py-2 capitalize transition-all font-bold text-xs md:text-sm rounded-full border
                  ${tripType === type ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
              >
                {type.replace('-', ' ')}
              </button>
            ))}
          </div>

          <form onSubmit={handleFinalSearch}>
            {tripType !== 'multi-city' ? (
              <div className="flex flex-col lg:flex-row gap-4 items-end">
                
                {/* FROM */}
                <div className="w-full lg:flex-1 relative">
                  <label className="text-[10px] text-white/70 font-bold uppercase mb-1 ml-1 block">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 text-blue-500 w-5 h-5" />
                    <input 
                      type="text" 
                      value={from.city}
                      onChange={(e) => {setFrom({city: e.target.value, code: ''}); setShowFromSuggest(true)}}
                      onFocus={() => setShowFromSuggest(true)}
                      placeholder="Departure City" 
                      className="w-full pl-10 pr-4 py-3 bg-white text-black font-bold rounded-xl outline-none text-sm md:text-base" 
                    />
                  </div>
                  {showFromSuggest && from.city.length > 0 && (
                    <div className="absolute z-50 w-full bg-white mt-1 rounded-xl shadow-2xl overflow-hidden">
                      {filteredAirports(from.city).map((air, i) => (
                        <div key={i} className="p-3 hover:bg-blue-50 cursor-pointer text-black border-b last:border-0"
                             onClick={() => {setFrom({city: air.city, code: air.code}); setShowFromSuggest(false)}}>
                          <div className="font-bold">{air.city} ({air.code})</div>
                          <div className="text-[10px] text-gray-500">{air.name}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* TO */}
                <div className="w-full lg:flex-1 relative">
                  <label className="text-[10px] text-white/70 font-bold uppercase mb-1 ml-1 block">To</label>
                  <div className="relative">
                    <Plane className="absolute left-3 top-3.5 text-blue-500 w-5 h-5 rotate-90" />
                    <input 
                      type="text" 
                      value={to.city}
                      onChange={(e) => {setTo({city: e.target.value, code: ''}); setShowToSuggest(true)}}
                      onFocus={() => setShowToSuggest(true)}
                      placeholder="Destination City" 
                      className="w-full pl-10 pr-4 py-3 bg-white text-black font-bold rounded-xl outline-none text-sm md:text-base" 
                    />
                  </div>
                  {showToSuggest && to.city.length > 0 && (
                    <div className="absolute z-50 w-full bg-white mt-1 rounded-xl shadow-2xl overflow-hidden">
                      {filteredAirports(to.city).map((air, i) => (
                        <div key={i} className="p-3 hover:bg-blue-50 cursor-pointer text-black border-b last:border-0"
                             onClick={() => {setTo({city: air.city, code: air.code}); setShowToSuggest(false)}}>
                          <div className="font-bold">{air.city} ({air.code})</div>
                          <div className="text-[10px] text-gray-500">{air.name}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DATES - Fixed Round Trip stretching */}
                <div className={`flex flex-row gap-3 w-full ${tripType === 'round-trip' ? 'lg:w-[350px]' : 'lg:w-[180px]'}`}>
                  <div className="flex-1">
                    <label className="text-[10px] text-white/70 font-bold uppercase mb-1 ml-1 block">Departure</label>
                    <input type="date" required value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="w-full p-3 bg-white text-black font-bold rounded-xl outline-none text-sm" />
                  </div>
                  {tripType === 'round-trip' && (
                    <div className="flex-1">
                      <label className="text-[10px] text-white/70 font-bold uppercase mb-1 ml-1 block">Return</label>
                      <input type="date" required value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="w-full p-3 bg-white text-black font-bold rounded-xl outline-none text-sm" />
                    </div>
                  )}
                </div>

                {/* TRAVELLERS */}
                <div className="w-full lg:w-[200px]">
                  <label className="text-[10px] text-white/70 font-bold uppercase mb-1 ml-1 block">Travellers</label>
                  <PassengerPicker />
                </div>

                {/* SEARCH BUTTON */}
                <button type="submit" className="w-full lg:w-[60px] h-[52px] bg-blue-600 text-white rounded-xl shadow-xl flex items-center justify-center hover:bg-blue-700 transition-all shrink-0">
                  <Search size={24} className="hidden lg:block" />
                  <span className="lg:hidden font-bold">Search Flights</span>
                </button>
              </div>

            ) : (
              /* MULTI-CITY */
              <div className="space-y-4">
                {multiCityFlights.map((flight, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 items-end">
                    <div className="w-full md:flex-[2]">
                       <input type="text" placeholder="From" className="w-full p-3 rounded-xl bg-white text-black font-bold text-sm" />
                    </div>
                    <div className="w-full md:flex-[2]">
                       <input type="text" placeholder="To" className="w-full p-3 rounded-xl bg-white text-black font-bold text-sm" />
                    </div>
                    <div className="w-full md:flex-1">
                       <input type="date" className="w-full p-3 rounded-xl bg-white text-black font-bold text-sm" />
                    </div>
                    {index > 1 && (
                      <button type="button" onClick={() => setMultiCityFlights(multiCityFlights.filter((_, i) => i !== index))} className="p-3 text-red-400 self-center md:self-end"><Trash2 size={20} /></button>
                    )}
                  </div>
                ))}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 pt-4">
                  <button type="button" onClick={() => setMultiCityFlights([...multiCityFlights, {from:'', to:'', date:''}])} className="text-white text-sm font-bold flex items-center gap-2"> <Plus size={16}/> Add City</button>
                  <button type="submit" className="w-full sm:w-auto bg-blue-600 px-8 py-3 rounded-xl text-white font-bold hover:bg-blue-700">Search Flights</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchEngine;