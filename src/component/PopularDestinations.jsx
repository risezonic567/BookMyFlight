import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

const PopularDestinations = () => {
  const destinations = [
    { name: "London, United Kingdom", price:"$ 687",  img: "/images/London.jpg.jpeg", gridArea: "lg:col-start-1 lg:row-start-1" },
    { name: "Paris, France", price:"$ 967",  img: "/images/Paris, France.jpg.jpeg", gridArea: "lg:col-start-1 lg:row-start-2" },
    { name: "Cancun, Mexico", price:"$ 452",  img: "/images/Cancun, Mexico.jpg.jpeg", gridArea: "lg:col-start-2 lg:row-span-2" },
    { name: "Tokyo, Japan", price:"$ 1355",  img: "/images/Tokyo, Japan.jpg.jpeg", gridArea: "lg:col-start-3 lg:row-start-1" },
    { name: "San Juan, Puerto Rico", price:"$ 432",  img: "/images/San Juan, Puerto Rico.jpg.jpeg", gridArea: "lg:col-start-3 lg:row-start-2" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Popular Destination</h2>
          <Link to="/sitemap" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {destinations.map((dest, i) => (
            <div key={i} className={`relative overflow-hidden rounded-3xl group cursor-pointer ${dest.gridArea}`}>
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute  bottom-0 left-6 text-white transform transition-all duration-500 group-hover:bottom-12">
                <p className="text-lg font-medium pb-1 ">{dest.name}</p>
                <p className='text-3xl pb-1 opacity-0 group-hover:opacity-100'>Price {dest.price} <span className=' text-2xl text-white/80'>Starting from</span></p>
                <p className="text-3xl font-medium flex text-yellow-400 opacity-0 group-hover:opacity-100" ><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;