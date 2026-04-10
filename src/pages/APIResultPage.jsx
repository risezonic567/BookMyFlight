import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { searchFlights } from "./APIService";

const APIResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { departure_id, arrival_id, outbound_date, adults, travel_class } =
    location.state || {};

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFlights = async () => {
      try {
        setLoading(true);

        const res = await searchFlights({
          from: departure_id,
          to: arrival_id,
          date: outbound_date,
          adults,
          travelClass: travel_class,
        });

        setFlights(res?.data?.itineraries?.topFlights || []);
        console.log("FULL RES:", res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (departure_id && arrival_id) getFlights();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold mb-8">
        Flights {departure_id} → {arrival_id}
      </h2>

      {loading ? (
        <p>Loading flights...</p>
      ) : (
        flights.map((flight) => (
          <div key={flight.id || Math.random()} className="bg-slate-800 p-6 mb-4 rounded-xl">
            <h3>{flight?.legs?.[0]?.carriers?.marketing?.[0]?.name}</h3>

            <p>Duration: {flight?.legs?.[0]?.durationInMinutes} minutes</p>

            <p className="text-green-400 font-bold">
              {flight?.price?.formatted}
            </p>

            <button
              onClick={() => navigate(`/details/${flight.id}`)}
              className="bg-blue-600 px-6 py-2 rounded-lg"
            >
              Select
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default APIResultPage;
