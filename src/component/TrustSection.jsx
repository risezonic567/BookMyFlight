import React from 'react';
import { ShieldCheck, Headset, CheckCircle, Tag } from 'lucide-react';

const TrustCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl border border-blue-400 shadow-lg flex flex-col items-start hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <h3 className="font-bold text-[#1a2b48] text-lg leading-tight">{title}</h3>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

function TrustSection() {
  const trustData = [
    {
      icon: CheckCircle,
      title: "Trusted By 1M Travelers",
      description: "Join millions who've booked with confidence and ease."
    },
    {
      icon: Headset,
      title: "24/7* Customer Support",
      description: "We have flight booking experts ever ready to assist."
    },
    {
      icon: ShieldCheck,
      title: "100% Safe & Secure",
      description: "Online security is something you should not worry about with us."
    },
    {
      icon: Tag,
      title: "Best Price Guarantee",
      description: "At least that's something we believe in and stand for."
    }
  ];

  return (
    <section className="pt-12 px-6 max-w-7xl mx-auto font-sans">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustData.map((item, index) => (
          <TrustCard 
            key={index} 
            icon={item.icon} 
            title={item.title} 
            description={item.description} 
          />
        ))}
      </div>

    </section>
  );
}

export default TrustSection;