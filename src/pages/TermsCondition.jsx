import React, { useEffect } from "react";

const TermsCondition = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Terms & Conditions – Book My Flight Online
      </h1>

      <p className="mb-6">
        Welcome to Book My Flight Online. By accessing and using <b>bookmyflightonline.com</b>, you
        agree to comply with and be legally bound by the following Terms and
        Conditions. Please read them carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Nature of Services</h2>
      <p className="mb-6">
        Book My Flight Online operates as an independent third-party travel agency
        providing flight booking services for domestic and international travel.
        We do not own, operate, or control any airlines. All flight services are
        provided by third-party airlines and are subject to their respective
        terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        2. Booking and Payment Terms
      </h2>
      <p className="mb-6">
        All bookings made through our platform are subject to availability and
        confirmation from the airline. Airfares are dynamic and may change at
        any time without prior notice until the booking is confirmed. Full
        payment is required to secure any reservation. Failure to complete
        payment may result in automatic cancellation of the booking.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
      <p className="mb-6">
        Users are responsible for providing accurate and complete information,
        including full name (as per government ID or passport), contact details,
        and travel documents. Any errors in booking details may lead to
        additional charges, denial of boarding, or cancellation without refund.
        It is also the traveler’s responsibility to check visa, passport
        validity, and health requirements before travel.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        4. Changes, Cancellations, and Refunds
      </h2>
      <p className="mb-6">
        All changes and cancellations are subject to airline fare rules and
        policies. Book My Flight Online may charge a service fee in addition to airline
        penalties. Refunds, if applicable, will be processed as per airline
        timelines and policies.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        5. Pricing and Fare Rules
      </h2>
      <p className="mb-6">
        Prices displayed on the website may include base fare, taxes, and
        applicable fees. However, final pricing is confirmed only after
        successful payment. Special or discounted fares may have stricter
        cancellation or modification rules.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        6. Limitation of Liability
      </h2>
      <ul className="list-disc pl-6 mb-6">
        <li>Flight delays, cancellations, or rescheduling</li>
        <li>Denied boarding by airlines</li>
        <li>Loss of baggage or personal belongings</li>
        <li>Any indirect or consequential losses</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        7. Intellectual Property
      </h2>
      <p className="mb-6">
        All content, logos, and materials on this website are the property of
        Book My Flight Online and are protected by applicable copyright laws.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
      <p>
        These Terms shall be governed by and interpreted under the laws of the
        United States, specifically Wyoming jurisdiction.
      </p>
    </div>
  );
};

export default TermsCondition;