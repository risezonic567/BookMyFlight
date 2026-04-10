import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const iconTag = [
  <FaFacebook />,
  <FaInstagram />,
  <FaXTwitter />,
  <FaLinkedin />,
];

const Footer = () => {
  return (
    <footer className="bg-[#4171ed] text-white pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
          {/* Column 1: Brand & Global Sites */}
          <div className="flex flex-col ">
            <div className="flex items-center  h-25 w-40">
              <Link to="/" className="">
                <img
                  src="/images/Book my Flight online logo png.png"
                  alt="Logo"
                  className="h-50  w-50 object-contain"
                />
              </Link>
            </div>

            <div className="mb-6">
              <p className="text-[10px] pl-10 font-bold uppercase opacity-70 mb-2 tracking-widest">
                Global Sites
              </p>
              {/* <select className="bg-transparent border border-white/30 text-sm p-2 rounded-md w-full outline-none cursor-pointer">
                <option className="text-black">🇺🇸 USA - Español</option>
                <option className="text-black">🇨🇦 Canada - English</option>
                <option className="text-black">🇲🇽 Mexico - Español</option>
              </select> */}
            </div>
            {/* <p className="text-[12px] opacity-80 mb-4 font-medium">FlSot No.: <span className="font-bold">FLST43760</span></p> */}
            <div className="flex gap-2">
              {iconTag.map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 cursor-pointer text-xs font-bold"
                >
                  {icon}
                </div>
              ))}
            </div>
            <div className="pt-5 pb-10">
            <h3 className="font-bold text-lg mb-4">Security & Payment</h3>
            <div className="flex justify-start lg:justify-end gap-2">
              {["MasterCard", "VISA", "American Express", "Discover"].map(
                (brand) => (
                  <div
                    key={brand}
                    className="bg-white px-3 py-1 rounded text-[10px] font-black text-blue-800"
                  >
                    {brand}
                  </div>
                ),
              )}
            </div>
          </div>
          </div>
          {/* <div className=""> */}
          
          {/* </div> */}

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-[14px] opacity-90 flex flex-col">
              <Link to="/my-booking">
                <li className="hover:underline cursor-pointer">My Booking</li>
              </Link>
              <Link to="/blog">
                <li className="hover:underline cursor-pointer">Blogs</li>
              </Link>
              <Link to="/about-us">
                <li className="hover:underline cursor-pointer">About Us</li>
              </Link>
              <Link to="/packages">
                <li className="hover:underline cursor-pointer">Packages</li>
              </Link>
              
              
              
            </ul>
          </div>

          {/* Column 3: Top Routes */}
          <div>
            <h3 className="font-bold text-lg mb-6">Menu</h3>
            <ul className="flex flex-col gap-3 text-[14px] opacity-90">
              
              <Link to="/contact-us">
                <li className="hover:underline cursor-pointer">Contact Us</li>
              </Link>
              <Link to="/sitemap">
                <li className="hover:underline cursor-pointer">Sitemap</li>
              </Link>
              <Link to="/">
                 <li className="hover:underline cursor-pointer">
                  Domestic Flights
                 </li>
              </Link>
              <Link to="/">
                <li className="hover:underline cursor-pointer">
                  International Flights
                </li>
              </Link>
              {/* <li className="hover:underline cursor-pointer">
                Chicago to Los Angeles
              </li>
              <li className="hover:underline cursor-pointer">
                Las Vegas to New York City
              </li>
              <li className="text-white font-bold mt-2 cursor-pointer hover:underline">
                View More →
              </li> */}
            </ul>
          </div>

          <div className="space-y-2 ">
            <h3 className="font-bold text-lg text-center">Contact Us</h3>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <span className="text-xl">✉️</span> support@flightschannel.com
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90 font-bold">
              <span className="text-xl">📞</span> Toll Free : +1-844-609-9922
            </div>
            <div className="flex items-center gap-3 text-sm opacity-90">
              <span className="text-xl">📞</span> International Phone :
              +1-702-637-7606, +52-55-7100-2034
            </div>
            <div className="flex items-start gap-3 text-sm opacity-90">
              <span className="text-xl">📍</span> 7260 W Azure Dr. STE 140-2212,
              Las Vegas, NV 89130, USA
            </div>
          </div>

          {/* Column 4: Top Special Deals */}
          {/* <div>
            <h3 className="font-bold text-lg mb-6">Top Special Deals</h3>
            <ul className="space-y-3 text-[14px] opacity-90">
              <li className="hover:underline cursor-pointer">International Flights Deals</li>
              <li className="hover:underline cursor-pointer">Domestic Flights Deals</li>
              <li className="hover:underline cursor-pointer">Round Trip Flights</li>
              <li className="hover:underline cursor-pointer">First Class Flights</li>
              <li className="hover:underline cursor-pointer">Business Class Flights</li>
              <li className="text-white font-bold mt-2 cursor-pointer hover:underline">View More →</li>
            </ul>
          </div> */}

          {/* Column 5: Top Airlines */}
          {/* <div>
            <h3 className="font-bold text-lg mb-6">Top Airlines</h3>
            <ul className="space-y-3 text-[14px] opacity-90">
              <li className="hover:underline cursor-pointer">American Airlines</li>
              <li className="hover:underline cursor-pointer">Delta Airlines</li>
              <li className="hover:underline cursor-pointer">Alaska Airlines</li>
              <li className="hover:underline cursor-pointer">Hawaiian Airlines</li>
              <li className="hover:underline cursor-pointer">United Airlines</li>
              <li className="text-white font-bold mt-2 cursor-pointer hover:underline">View More →</li>
            </ul>
          </div> */}
        </div>

        {/* Contact & Security Section */}

        {/* Bottom copyright */}
        <div className=" border-t border-white/10 flex flex-col md:flex-row justify-between items-center  text-[12px] opacity-70">
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Terms Of Use</span>
            <span className="hover:underline cursor-pointer">Disclaimer</span>
            <span className="hover:underline cursor-pointer">
              Cancellation Policy
            </span>
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </div>
          <p>Copyright © 2016-2025 FlightsChannel LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
