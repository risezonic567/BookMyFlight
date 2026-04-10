import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DomesticFlightHero() {

 const heroRef = useRef();

 useEffect(() => {

  gsap.from(heroRef.current, {
   opacity: 0,
   y: -80,
   duration: 1,
   ease: "power3.out"
  });

 }, []);

 return (
  <section
   ref={heroRef}
   className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6"
  >

   <div className="max-w-6xl mx-auto">

    <h1 className="text-4xl font-bold mb-3">
     Domestic Flight Booking
    </h1>

    <p className="opacity-90 text-lg">
     Find the best domestic flight deals with instant booking.
    </p>

   </div>

  </section>
 );
}