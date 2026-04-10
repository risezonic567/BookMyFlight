import React, { useState, useEffect } from "react";
import { getSuggestions } from "../pages/APIService";
import { useNavigate } from "react-router-dom";

const APISearchPage = () => {
  const navigate = useNavigate();

  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [adults, setAdults] = useState("1");
  const [travelClass, setTravelClass] = useState("ECONOMY");

  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const query = activeField === "from" ? fromQuery : toQuery;

      if (query.length > 1) {
        try {
          const data = await getSuggestions(query);
          setSuggestions(data);
          console.log("data",data);
          
        } catch (err) {
          console.error("Suggestions error:", err);
        }
      } else {
        setSuggestions([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [fromQuery, toQuery, activeField]);

  const handleSearch = () => {
    if (!fromQuery || !toQuery || !travelDate) {
      alert("Please fill From, To, and Date!");
      return;
    }

    navigate("/api-result-page", {
      state: {
        departure_id: fromQuery,
        arrival_id: toQuery,
        outbound_date: travelDate,
        adults,
        travel_class: travelClass,
      },
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-slate-800 p-8 rounded-3xl">

        <h2 className="text-3xl font-bold mb-8 text-blue-400">
          Book Your Flight ✈️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

{/* FROM */}
<div className="relative">
<label className="text-xs text-slate-400">From</label>

<input
type="text"
placeholder="Origin"
className="w-full bg-slate-700 p-3 rounded-xl"
value={fromQuery}
onFocus={() => setActiveField("from")}
onChange={(e) => setFromQuery(e.target.value.toUpperCase())}
/>

{activeField === "from" && suggestions.length > 0 && (

<ul className="absolute w-full mt-2 bg-slate-700 rounded-lg z-50 max-h-40 overflow-auto">

{suggestions.map((s, i) => (

<li
key={i}
onClick={() => {
setFromQuery(s.code);
setSuggestions([]);
}}
className="p-2 hover:bg-blue-600 cursor-pointer flex justify-between"
>

<span>{s.name}</span>
<span className="text-blue-300 font-bold">
{s.code}
</span>

</li>

))}

</ul>

)}

</div>

{/* TO */}
<div className="relative">
<label className="text-xs text-slate-400">To</label>

<input
type="text"
placeholder="Destination"
className="w-full bg-slate-700 p-3 rounded-xl"
value={toQuery}
onFocus={() => setActiveField("to")}
onChange={(e) => setToQuery(e.target.value.toUpperCase())}
/>

{activeField === "to" && suggestions.length > 0 && (

<ul className="absolute w-full mt-2 bg-slate-700 rounded-lg z-50 max-h-40 overflow-auto">

{suggestions.map((s, i) => (

<li
key={i}
onClick={() => {
setToQuery(s.code);
setSuggestions([]);
}}
className="p-2 hover:bg-blue-600 cursor-pointer flex justify-between"
>

<span>{s.name}</span>
<span className="text-blue-300 font-bold">
{s.code}
</span>

</li>

))}

</ul>

)}

</div>

{/* DATE */}

<div>

<label className="text-xs text-slate-400">Date</label>

<input
type="date"
className="w-full bg-slate-700 p-3 rounded-xl"
value={travelDate}
onChange={(e) => setTravelDate(e.target.value)}
/>

</div>

{/* ADULT */}

<div>

<label className="text-xs text-slate-400">Adults</label>

<select
className="w-full bg-slate-700 p-3 rounded-xl"
value={adults}
onChange={(e) => setAdults(e.target.value)}
>

{[1,2,3,4,5].map(n => (
<option key={n} value={n}>{n}</option>
))}

</select>

</div>

{/* CLASS */}

<div>

<label className="text-xs text-slate-400">Class</label>

<select
className="w-full bg-slate-700 p-3 rounded-xl"
value={travelClass}
onChange={(e)=>setTravelClass(e.target.value)}
>

<option value="ECONOMY">Economy</option>
<option value="BUSINESS">Business</option>
<option value="FIRST">First</option>

</select>

</div>

</div>

<button
onClick={handleSearch}
className="w-full mt-8 bg-blue-600 p-4 rounded-xl font-bold"
>

SEARCH FLIGHTS

</button>

</div>

</div>

);

};

export default APISearchPage;