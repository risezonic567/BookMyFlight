import React, { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy – bookmyflightonline.com
      </h1>

      <p className="mb-6">
        At bookmyflightonline.com, we value your privacy and are committed to
        protecting your personal information with the highest level of care and
        transparency. This Privacy Policy explains how we collect, use, store,
        and safeguard your data when you interact with our website, make
        bookings, or use our services.
      </p>

      <p className="mb-6">
        We understand that sharing personal information requires trust, and we
        strive to maintain that trust by implementing appropriate security
        measures and following industry best practices. This policy also
        outlines your rights regarding your personal data and how you can manage
        or request changes to the information we hold.
      </p>

      <p className="mb-6">
        By using bookmyflightonline.com, you consent to the practices described
        in this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information including:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Travel details and identification (passport, if required)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        2. Use of Information
      </h2>
      <p className="mb-4">Your information is used to:</p>
      <ul className="list-disc pl-6 mb-6">
        <li>Process flight bookings</li>
        <li>Provide customer support</li>
        <li>Send booking confirmations and updates</li>
        <li>Improve our services and user experience</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        3. Cookies and Tracking Technologies
      </h2>
      <p className="mb-6">
        We use cookies and tracking tools (such as Google Analytics and
        advertising platforms) to enhance website functionality, analyze user
        behavior, and deliver relevant advertisements.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
      <p className="mb-4">
        We may share your information with:
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Airlines and travel service providers</li>
        <li>Payment gateways</li>
        <li>Technology and analytics partners</li>
      </ul>
      <p className="mb-6">
        This is strictly for service fulfillment and operational purposes.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
      <p className="mb-6">
        We implement reasonable technical and organizational measures to protect
        your personal data from unauthorized access, misuse, or disclosure.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. User Rights</h2>
      <p className="mb-6">
        You have the right to request access, correction, or deletion of your
        personal data by contacting us.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        7. Contact Information
      </h2>
      <p className="mb-2">bookmyflightonline.com</p>
      <p className="mb-2">
        30 N Gould St, Sheridan, WY 82801, USA
      </p>
      <p className="mb-2">+1 818-772-6235</p>
      <p className="mb-2">+1 888-393-0526</p>
      <p>support@bookmyflightonline.com</p>
    </div>
  );
};

export default PrivacyPolicy;