import React from 'react'
import { FaPlaneDeparture, FaSearch, FaEdit, FaTimesCircle, FaDownload, FaInfoCircle, FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MyBookingContent() {
  return (
    <div className='w-full bg-gray-50 py-10 md:py-16 font-sans'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center md:text-start mb-12'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-blue-600 mb-6'>
            Manage Your Flight Booking Easily
          </h1>
          <div className='space-y-4 text-base md:text-lg text-gray-700 max-w-4xl'>
            <p>At <b>Book My Flight</b>, we make it simple for you to view, manage, and update your travel plans in one place.</p>
            <p>By entering your details below, you can instantly retrieve your itinerary and stay updated with the latest information.</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className='grid lg:grid-cols-3 gap-8'>
          
          {/* Left: Booking Access (Form Placeholder) */}
          <div className='lg:col-span-1 bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600'>
            <div className='flex items-center gap-3 mb-6 text-xl font-bold text-gray-800'>
              <FaPlaneDeparture className='text-blue-600' />
              <h2>Retrieve Your Booking</h2>
            </div>
            <ul className='space-y-3 text-sm text-gray-600 mb-6'>
              <li className='flex items-start gap-2'>• Booking Reference Number (PNR)</li>
              <li className='flex items-start gap-2'>• Registered Email or Phone Number</li>
            </ul>
            <Link to="/">
            <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 cursor-pointer'>
              <FaSearch /> Search Booking
            </button>
            </Link>
          </div>

          {/* Right: What You Can Do (Cards) */}
          <div className='lg:col-span-2 grid md:grid-cols-2 gap-4'>
            {[
              { icon: <FaSearch />, title: "View Booking", desc: "Check itinerary, departure time, and passenger info." },
              { icon: <FaEdit />, title: "Modify Booking", desc: "Submit date change requests (subject to airline rules)." },
              { icon: <FaTimesCircle />, title: "Cancel Booking", desc: "Request cancellation and check refund eligibility." },
              { icon: <FaDownload />, title: "Download E-Ticket", desc: "Access and save your e-ticket anytime." }
            ].map((item, index) => (
              <div key={index} className='bg-white p-5 rounded-xl border border-gray-200 flex gap-4 hover:shadow-md transition'>
                <div className='text-blue-500 text-2xl mt-1'>{item.icon}</div>
                <div>
                  <h3 className='font-bold text-gray-800'>{item.title}</h3>
                  <p className='text-sm text-gray-500'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info & Support Sections */}
        <div className='mt-12 grid md:grid-cols-2 gap-8'>
          
          {/* Important Info */}
          <div className='bg-blue-50 p-6 rounded-2xl border border-blue-100'>
            <div className='flex items-center gap-2 mb-4 text-blue-800 font-bold'>
              <FaInfoCircle /> <h3>Important Information</h3>
            </div>
            <ul className='text-sm text-blue-900 space-y-2 opacity-80'>
              <li>• Changes are subject to airline fare rules.</li>
              <li>• Additional charges or fare differences may apply.</li>
              <li>• Refunds processed within 7–14 business days.</li>
            </ul>
          </div>

          {/* Need Help? */}
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
            <div className='flex items-center gap-2 mb-4 text-gray-800 font-bold'>
              <FaHeadset className='text-green-500' /> <h3>Need Help?</h3>
            </div>
            <div className='text-sm space-y-2'>
              <p className='font-bold text-blue-600'>+1 818-772-6235 | +1 888-393-0526</p>
              <p className='text-gray-600'>support@bookmyflight.com</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-12 text-center bg-blue-600 text-white p-8 rounded-3xl'>
          <h2 className='text-2xl font-bold mb-2'>Need help with your booking?</h2>
          <p className='mb-6 opacity-90'>Contact Book My Flight support for quick assistance and hassle-free travel management.</p>
          <a className='bg-white text-blue-600 px-8 py-3 rounded-full font-extrabold hover:bg-gray-100 transition' href='tel:+1 818-772-6235'>
            Contact Support Now
          </a>
        </div>

      </div>
    </div>
  )
}

export default MyBookingContent