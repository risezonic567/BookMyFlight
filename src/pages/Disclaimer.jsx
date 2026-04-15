import React, { useEffect } from "react";

const Disclaimer = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Disclaimer - bookmyflightonline.com content
      </h1>

      <p className="mb-6">
        The information provided on <b>bookmyflightonline.com</b> is for general
        informational and booking purposes only.
      </p>

      <p className="mb-6">
        bookmyflightonline.com acts solely as an <b>independent travel agency</b> and
        is not affiliated with, endorsed by, or officially connected to any
        airline. All airline names, logos, and trademarks belong to their
        respective owners.
      </p>

      <p className="mb-6">
        While we strive to ensure that all information on our website is
        accurate and up to date, we do not guarantee the completeness,
        reliability, or accuracy of flight schedules, pricing, or availability.
        Airline fares and schedules are subject to frequent changes and may vary
        at the time of booking.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        bookmyflightonline.com shall not be held responsible for:
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Flight delays, cancellations, or schedule changes by airlines</li>
        <li>Errors in pricing due to technical or system issues</li>
        <li>Baggage loss, damage, or delay handled by airlines</li>
        <li>Visa, passport, or immigration-related issues</li>
      </ul>

      <p className="mb-6">
        Users are strongly advised to verify all travel-related information
        directly with the airline prior to departure.
      </p>

      <p>
        All bookings made through our platform are subject to airline terms and
        conditions. By using our website, you acknowledge and accept that
        bookmyflightonline.com acts only as an intermediary between you and the
        airline.
      </p>
    </div>
  );
};

export default Disclaimer;