import FlightCard from "./FlightCard";

const flights = [
 {
  from: "Los Angeles",
  to: "Las Vegas",
  price: "$136.89",
  date: "07 Apr 26",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
 },
 {
  from: "New York",
  to: "Atlanta",
  price: "$313.90",
  date: "07 Apr 26",
  image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
 },
 {
  from: "Washington",
  to: "Miami",
  price: "$253.89",
  date: "07 Apr 26",
  image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
 }
];

export default function DomesticFlightResults() {

 return (
  <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">

   {flights.map((flight, i) => (
    <FlightCard key={i} flight={flight} index={i}/>
   ))}

  </section>
 );
}