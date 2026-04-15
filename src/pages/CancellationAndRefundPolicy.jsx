import React, { useEffect } from "react";

const CancellationAndRefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Cancellation & Refund Policy – bookmyflightonline.com
      </h1>

      <p className="mb-6">
        At bookmyflightonline.com, we understand that travel plans can change
        due to unforeseen circumstances, and flexibility is an important factor
        for travelers. This Cancellation and Refund Policy is designed to
        provide clear and transparent information about how cancellations,
        modifications, and refunds are handled when you book flights through our
        platform.
      </p>

      <p className="mb-6">
        Since we operate as a third-party travel agency, all cancellations and
        refunds are primarily governed by the policies of the respective
        airlines. However, we aim to assist our customers throughout the process
        and ensure that all requests are handled efficiently and fairly.
      </p>

      <p className="mb-6">
        We strongly encourage users to review this policy carefully before
        making a booking to fully understand the applicable rules, charges, and
        timelines.
      </p>

      <h2 className="text-xl font-semibold mb-2">1. Cancellation Policy</h2>
      <p className="mb-6">
        All flight cancellations are governed by the fare rules and policies of
        the respective airline. Certain tickets, especially discounted or
        promotional fares, may be non-refundable or may carry heavy penalties.
      </p>
      <p className="mb-6">
        Customers must request cancellations through our official support
        channels. Cancellation requests are processed only after confirmation
        from the airline.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Modification Policy</h2>
      <p className="mb-6">
        Changes such as date, time, or passenger details are subject to airline
        policies. Additional charges, fare differences, and service fees may
        apply.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Service Charges</h2>
      <p className="mb-6">
        bookmyflightonline.com reserves the right to charge a service fee for
        handling cancellations, changes, or refunds. This fee is separate from
        airline penalties.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Refund Policy</h2>
      <p className="mb-6">
        Refund eligibility depends on the airline’s rules. If a ticket is
        refundable, the amount will be processed after deducting applicable
        airline charges and service fees. Refunds are generally processed within
        7–14 business days, but may take longer depending on the airline or
        payment provider.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. No-Show Policy</h2>
      <p className="mb-6">
        Failure to board a flight without prior cancellation (no-show) may
        result in complete forfeiture of the ticket amount.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        6. Special Circumstances
      </h2>
      <p>
        In cases such as medical emergencies or force majeure events, refunds or
        changes will be subject to airline approval only.
      </p>
    </div>
  );
};

export default CancellationAndRefundPolicy;