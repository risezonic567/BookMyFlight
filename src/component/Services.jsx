import React from "react";
import { FaClock, FaPlaneDeparture } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaPlaneDeparture />,
      color:"text-blue-600",
      title: "Flights from USA to India",
      desc: "Book affordable flights from the USA to India with competitive pricing and flexible options. We help travelers find convenient routes and budget-friendly fares for international travel.",
    },
    {
      icon: <FaClock />,
      color: "text-blue-800",
      title: "Last Minute Flight Deals USA",
      desc: "Need to travel urgently? Explore last minute flight deals in the USA and secure tickets at competitive prices even during peak seasons.",
    },
    {
      icon: "💼",
      color: "text-red-500",
      title: "Business Class Flight Deals",
      desc: "Enjoy premium comfort with affordable business class flights USA. Get access to discounted fares on top airlines for international routes.",
    },
    {
      icon: "🌍",
      color: "text-red-500",
      title: "Cheap One Way International Flights",
      desc: "Looking for one-way travel? Find cheap one way international flights with flexible booking options and great savings.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-3xl font-semibold text-start mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-blue-400 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className={`text-3xl mb-4 ${item.color} flex justify-center ${item.text}`}>{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;