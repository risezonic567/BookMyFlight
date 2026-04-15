import React, { useEffect } from "react";
import FAQSection from "../component/FAQSection";
import Testimonial from "../component/Testimonial";
import { FaCheckCircle, FaAward, FaUsers, FaGlobe } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <div className="bg-white font-sans">
          <div className="relative w-full h-[450px] md:h-[450px] flex items-center justify-center">
            <img
              src="/about/About-us-Banner.jpg.jpeg"
              alt="About Us Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <h1 className="relative z-10 text-white text-4xl md:text-5xl font-normal">
              About Us
            </h1>
          </div>

          <div className="bg-white py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                {/* LEFT: Image Stack (Takes 5 columns) */}
                <div className="lg:col-span-5 relative">
                  {/* Main Image */}
                  <div className="relative z-20 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
                    <img
                      src="/about/About-us-image.jpg.jpeg"
                      alt="Book My Flight Team"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Background Decorative Box */}
                  <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-[3rem] z-0 opacity-10"></div>

                  {/* Experience Card Overlap */}
                  {/* <div className="absolute bottom-10 -left-10 z-30 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                    <h3 className="text-4xl font-black mb-1">12+</h3>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                      Years of Trust
                    </p>
                  </div> */}
                </div>

                {/* RIGHT: Content Section (Takes 7 columns) */}
                <div className="lg:col-span-7 lg:pl-10">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-3xl font-black text-[#0C2442]/90 ">
                      Book Affordable Flights &{" "}
                      <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
                        International Holiday Packages at the Best Prices
                      </span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed pt-4">
                      At <strong>Book My Flight Online</strong>, we believe that
                      travel is more than just reaching a destination—it's about
                      creating unforgettable experiences, exploring new
                      cultures, and making lifelong memories. As a growing and
                      customer-focused travel platform, our mission is to make
                      flight booking and holiday planning simple, affordable,
                      and reliable for every traveler.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed pt-4">
                      We specialize in offering{" "}
                      <strong>budget-friendly flight bookings</strong>,
                      customized holiday packages, and seamless travel solutions
                      designed to meet the needs of modern travelers. Whether
                      you're planning a quick domestic trip, an international
                      vacation, or a special honeymoon getaway, Book My Flight
                      is your trusted travel partner.
                    </p>

                    <div className="pt-2">
                      <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg cursor-pointer hover:bg-blue-900 transition-all duration-300 shadow-xl shadow-blue-200 flex items-center gap-3 group">
                        Start Your Journey
                        <div className="group-hover:translate-x-2 transition-transform">
                          →
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who We Are */}
          <section className="py-10 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* LEFT CONTENT: Text and Info */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="text-4xl text-center md:text-5xl font-black text-[#0C2442] leading-tight">
                    <span className="text-blue-600">Who We Are</span>
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    <strong className="text-[#0C2442]">
                      Book My Flight Online
                    </strong>{" "}
                    is a dedicated travel service provider committed to
                    delivering smooth and hassle-free travel experiences. As a
                    new-age travel brand, we understand that finding the right
                    flight or holiday package at the best price can be
                    overwhelming. That’s why we focus on simplifying the process
                    with user-friendly solutions and expert assistance.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our team works closely with leading airlines and global
                    travel partners to bring you the most competitive deals,
                    ensuring you get the best value for your journey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <div className="bg-white py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                {/* Left */}
                <div className="lg:col-span-7 lg:pl-10">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0C2442] ">
                      <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
                        Our Mission
                      </span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed pt-4">
                      Our mission is to make travel accessible and affordable
                      for everyone by offering:
                    </p>
                    <ul>
                      <li>● Easy flight booking solutions</li>
                      <li>
                        ● Affordable international and domestic travel options
                      </li>
                      <li>● Personalized holiday packages</li>
                      <li>● Reliable customer support at every step</li>
                    </ul>
                    <p className="text-gray-600 text-lg leading-relaxed pt-4">
                      We aim to remove the complexity from travel planning and
                      replace it with convenience and confidence.
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="lg:col-span-5 relative">
                  {/* Main Image */}
                  <div className="relative z-20 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
                    <img
                      src="/about/About-us-image.jpg.jpeg"
                      alt="Book My Flight Team"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>

                  {/* Background Decorative Box */}
                  <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-[3rem] z-0 opacity-10"></div>

                  {/* Experience Card Overlap */}
                  {/* <div className="absolute bottom-10 -left-10 z-30 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                    <h3 className="text-4xl font-black mb-1">12+</h3>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                      Years of Trust
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className="bg-white py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                {/* Left */}
                <div className="lg:col-span-5 relative">
                  {/* Main Image */}
                  <div className="relative z-20 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
                    <img
                      src="/about/About-us-image.jpg.jpeg"
                      alt="Book My Flight Team"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>

                  {/* Background Decorative Box */}
                  <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600 rounded-[3rem] z-0 opacity-10"></div>

                  {/* Experience Card Overlap */}
                  {/* <div className="absolute bottom-10 -left-10 z-30 bg-blue-900 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                    <h3 className="text-4xl font-black mb-1">12+</h3>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">
                      Years of Trust
                    </p>
                  </div> */}
                </div>

                {/* Right */}
                <div className="lg:col-span-7 lg:pl-10">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0C2442] ">
                      <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">
                        Our Vision
                      </span>
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed pt-4">
                      Our vision is to become a trusted name in the travel
                      industry by delivering consistent value, transparent
                      services, and exceptional customer satisfaction. We strive
                      to build long-term relationships with our customers by
                      ensuring every trip booked through us is smooth and
                      memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- What We Offer Section --- */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Content Area */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-[#0C2442]">
                    What We <span className="text-blue-600">Offer</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    At{" "}
                    <strong className="text-[#0C2442]/80">
                      Book My Flight Online,
                    </strong>{" "}
                    we provide a wide range of travel services:
                  </p>

                  {/* Services List */}
                  <div className="space-y-6">
                    {[
                      {
                        title: "Flight Bookings",
                        desc: "Find and book affordable domestic and international flights with ease. Compare prices and choose the best options.",
                      },
                      {
                        title: "Holiday Packages",
                        desc: "Explore customized holiday packages including international vacations, honeymoon trips, and family holidays.",
                      },
                      {
                        title: "Honeymoon Packages",
                        desc: "We create romantic and memorable honeymoon experiences with carefully curated destinations.",
                      },
                      {
                        title: "International Travel Solutions",
                        desc: "From visa guidance to complete travel planning, we help make your international trips stress-free.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-600 pl-4 py-1"
                      >
                        <h3 className="text-xl font-bold text-[#0C2442]">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Image (Visible on all screens, but scales properly) */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white">
                    <img
                      src="/about/About-us-image.jpg.jpeg"
                      alt="What we offer"
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Why Choose Us Section --- */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                {/* Content Area */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-[#0C2442]">
                    Why <span className="text-blue-600">Choose Us</span>
                  </h2>

                  <ul className="space-y-4">
                    {[
                      "Competitive pricing and best deals",
                      "Easy and secure booking process",
                      "Personalized travel planning",
                      "24/7 customer support",
                      "Trusted travel partnerships",
                    ].map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-lg font-semibold text-gray-700"
                      >
                        <span className="text-blue-600 text-xl">●</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Area */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-[8px] border-white">
                    <img
                      src="/about/About-us-image.jpg.jpeg"
                      alt="Why choose us"
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Our Commitment & Get In Touch --- */}
          <section className="py-20 px-6 bg-[#0C2442] text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col gap-12 text-center">
                {/* Commitment Content */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black">
                    Our <span className="text-blue-400">Commitment</span>
                  </h2>
                  <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
                  <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-6xl mx-auto w-full">
                    At <strong>Book My Flight</strong>, customer satisfaction is
                    at the core of everything we do. We are committed to
                    providing transparent services, reliable support, and travel
                    solutions that meet your expectations.
                  </p>
                  <p className="text-blue-200 text-lg leading-relaxed">
                    From the moment you search for a flight to the time you
                    complete your journey, we ensure a smooth and enjoyable
                    experience.
                  </p>
                </div>

                {/* Get In Touch Content */}
                <div className="bg-white/10 md:max-w-4xl md:mx-auto backdrop-blur-sm p-10 rounded-[3rem] border border-white/20 shadow-2xl space-y-8 mt-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">📞 Get in Touch</h3>
                    <p className="text-blue-100">
                      Have questions or need assistance with your travel plans?
                      Our team is always here to help.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-6">
                    {/* Email Link */}
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold bg-white/5 px-6 py-3 rounded-2xl">
                      <span className="text-blue-400">
                        <GoMail />
                      </span>
                      <a
                        href="mailto:Support@bookmyflight.com"
                        className="hover:text-blue-400 transition-colors"
                      >
                        Support@bookmyflight.com
                      </a>
                    </div>

                    {/* Contact Button */}
                    <Link to="/contact-us">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 shadow-lg shadow-blue-900/40 cursor-pointer active:scale-95">
                        Visit Contact Us Page →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <Testimonial /> */}
        <FAQSection />
      </section>
    </>
  );
}

export default AboutUs;
