import DomesticFlightHero from "../component/DomesticFlightHero";
import DomesticFlightResults from "../component/DomesticFlightResults";

export default function DomesticFlightPage() {
  return (
    <div className="bg-gray-50 min-h-screen">

      <DomesticFlightHero />
      <DomesticFlightResults />

    </div>
  );
}