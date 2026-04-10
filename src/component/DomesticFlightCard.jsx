import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DomesticFlightCard({ flight, index }) {

 const cardRef = useRef();

 useEffect(() => {

  gsap.from(cardRef.current, {
   opacity: 0,
   y: 50,
   delay: index * 0.15,
   duration: 0.6,
   ease: "power3.out"
  });

 }, []);

 return (
  <div
   ref={cardRef}
   className="bg-white shadow-md rounded-xl p-5 flex items-center justify-between hover:shadow-xl transition"
  >

   <div className="flex items-center gap-4">

    <img
     src={flight.image}
     className="w-14 h-14 rounded-full object-cover"
    />

    <div>

     <h3 className="font-semibold text-lg">
      {flight.from} → {flight.to}
     </h3>

     <p className="text-gray-500 text-sm">
      {flight.date}
     </p>

    </div>

   </div>


   <div className="text-right">

    <div className="text-xl font-bold text-blue-600">
     {flight.price}
    </div>

    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
     Book Flight
    </button>

   </div>

  </div>
 );
}