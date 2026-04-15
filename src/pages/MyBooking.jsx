import React, { useEffect } from 'react'
import { BsArrowLeftRight } from 'react-icons/bs';
import { SlCalender } from 'react-icons/sl';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTicketAlt, FaUser } from "react-icons/fa";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import MyBookingContent from '../component/mybooking/MyBookingContent';

const deals = [
  { id: 1, from: "New York", to: "Mumbai", img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000", airline: "Delta", price: 650, date: "May 15 - May 30" },
  { id: 2, from: "London", to: "New Delhi", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1000", airline: "British Airways", price: 580, date: "June 01 - June 10" },
  { id: 3, from: "Dubai", to: "Bangalore", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000", airline: "Emirates", price: 420, date: "May 20 - May 25" },
  { id: 4, from: "Toronto", to: "Chennai", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000", airline: "Air Canada", price: 790, date: "July 10 - July 20" }
];

function MyBooking() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className='w-full bg-white'>
      
      {/* --- NEW HERO SECTION (Replacing Old Slider) --- */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text & Brand */}
          <div className="text-white space-y-6">
            <span className="bg-blue-500/30 text-blue-200 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
              Manage Your Trip
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Ready for your <br /> <span className="text-blue-400">Next Adventure?</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-md">
              Access your itinerary, modify bookings, or download tickets in just a few clicks.
            </p>
          </div>

          {/* Right Side: Glassmorphism Search Card */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Retrieve Booking</h2>
            <div className="space-y-5">
              <div className="relative">
                <FaTicketAlt className="absolute left-4 top-4 text-blue-300" />
                <input 
                  type="text" 
                  placeholder="Booking ID / PNR" 
                  className="w-full bg-white/20 border border-white/30 p-3 pl-12 rounded-xl text-white placeholder:text-blue-200 focus:bg-white focus:text-blue-900 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-blue-300" />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-white/20 border border-white/30 p-3 pl-12 rounded-xl text-white placeholder:text-blue-200 focus:bg-white focus:text-blue-900 outline-none transition-all"
                />
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-black py-4 rounded-xl shadow-lg transition transform active:scale-95">
                SEARCH BOOKING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <MyBookingContent />

      {/* --- RE-DESIGNED TOP DEALS SECTION --- */}
      {/* <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Featured Destinations</h2>
              <p className="text-gray-500 mt-2">Handpicked flight deals for your perfect getaway.</p>
            </div>
            <div className="flex gap-3">
              <button className="prev-deal bg-white p-4 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <IoIosArrowBack size={24} />
              </button>
              <button className="next-deal bg-white p-4 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition cursor-pointer">
                <IoIosArrowForward size={24} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{ nextEl: ".next-deal", prevEl: ".prev-deal" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
          >
            {deals.map((deal) => (
              <SwiperSlide key={deal.id}>
                <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <img src={deal.img} alt={deal.to} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-900">
                      {deal.airline}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-gray-800">{deal.from}</div>
                      <BsArrowLeftRight className="text-blue-500" />
                      <div className="text-lg font-bold text-gray-800">{deal.to}</div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                      <SlCalender className="text-blue-400" />
                      {deal.date}
                    </div>
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <span className="text-sm text-gray-400 block uppercase font-bold text-[10px]">Total Price</span>
                        <span className="text-2xl font-black text-blue-600">${deal.price}</span>
                      </div>
                      <button className="bg-gray-900 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-600 transition">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </div>
  )
}

export default MyBooking;