import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, User, CreditCard } from "lucide-react";

const BookingDetail = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    title: "Mr.",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.firstName || !formData.lastName) {
      alert("Please fill all details ✈️");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    console.log("Booking Details:", formData);
    navigate("/success");
  };

  return (
  <div className="min-h-screen bg-gray-100 pt-24 pb-16">

    <div className="max-w-7xl mx-auto px-6">

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">

        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6">

          <div className="bg-white shadow-lg rounded-xl overflow-hidden">

            <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-6 py-4 font-bold text-lg">
              Passenger Details
            </div>

            <div className="p-8 space-y-8">

              {/* CONTACT DETAILS */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-blue-600" />
                  Contact Details
                </h3>

                <div className="grid md:grid-cols-2 gap-5">

                  <div className="relative">
                    <Mail className="absolute top-3.5 left-3 text-gray-400" size={18}/>
                    <input
                      name="email"
                      placeholder="Email Address"
                      onChange={handleInput}
                      className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute top-3.5 left-3 text-gray-400" size={18}/>
                    <input
                      name="phone"
                      placeholder="+91 00000 00000"
                      onChange={handleInput}
                      className="w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                  </div>

                </div>
              </div>

              {/* PASSENGER INFO */}

              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  Passenger Information
                </h3>

                <div className="grid md:grid-cols-4 gap-5">

                  <select
                    name="title"
                    onChange={handleInput}
                    className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>

                  <input
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleInput}
                    className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-200"
                  />

                  <input
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleInput}
                    className="md:col-span-2 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-200"
                  />

                </div>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
              >
                Confirm Booking & Proceed
              </button>

            </div>
          </div>

        </div>


        {/* RIGHT SECTION */}

        <div className="w-full lg:w-[350px]">

          <div className="bg-white shadow-lg rounded-xl border h-full flex flex-col">

            <div className="px-6 py-4 border-b font-semibold flex items-center gap-2 text-xl">
              <CreditCard size={18} className="text-blue-600"/>
              Fare Summary
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">

              <div className="space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Base Fare</span>
                  <span className="font-semibold">$350</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Taxes & Fees</span>
                  <span className="font-semibold">$45</span>
                </div>

                <div className="border-t pt-4 flex justify-between items-center">

                  <span className="font-bold text-gray-700">
                    Total Amount
                  </span>

                  <span className="text-2xl font-bold text-blue-700">
                    $395
                  </span>

                </div>

              </div>

              <div className="mt-8 bg-blue-50 text-blue-600 text-xs text-center p-3 rounded-lg">
                🔒 Secure Checkout • SSL Protected
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
);
};

export default BookingDetail;