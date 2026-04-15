import React, { useState } from 'react';

const FAQSection = () => {
  // Default mein pehla index (0) open rakhne ke liye useState(0) kiya hai
  const [openIndex, setOpenIndex] = useState(false); 

  const faqs = [
    { 
      q: "1. How can I find cheap international flights from the USA?", 
      a: "Finding cheap international flights from the USA depends on booking at the right time, being flexible with travel dates, and comparing multiple options. At Book My Flight, we help you access discounted fares, special deals, and last-minute offers to get the best possible price." 
    },
    { q: "2. Do you offer last-minute flight deals from the USA?", a: "Yes, Book My Flight specializes in last minute flight deals in the USA. Whether it’s an emergency trip or sudden travel plan, we help you find affordable options even on short notice." },
    { q: "3. Can I book flights from the USA to India at discounted prices?", a: "Absolutely. We provide competitive pricing on flights from the USA to India, including seasonal offers and exclusive deals that are not always available on standard booking platforms." },
    { q: "4. Are business class flights available at lower prices?", a: "Yes, we offer affordable business class flights to the USA with special discounts on selected routes. You can enjoy premium comfort at reduced prices by booking through our platform." },
    { q: "5. What is the best time to book international flights from the USA?", a: "The best time to book international flights is usually 3–6 weeks in advance. However, deals may vary depending on the destination, season, and demand. Book My Flight helps you track and find the best timing for booking." },
    { q: "6. Are flight tickets refundable or changeable?", a: "Refund and change policies depend on the airline and ticket type. Some tickets are refundable, while others may have restrictions. We always guide you on fare rules before booking to avoid confusion." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-black text-[#395977] mb-12 text-center">
          FAQ (Frequently Asked Questions)
        </h2>
        
        {/* Yahan grid-cols-1 (mobile) aur md:grid-cols-2 (desktop) use kiya hai */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden h-fit ${
                  isOpen ? 'bg-[#2b59ff] border-[#2b59ff] shadow-xl scale-[1.02]' : 'bg-white border-gray-200 hover:border-blue-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left flex justify-between items-start gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Q Icon */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition-colors ${
                      isOpen ? 'bg-white text-[#2b59ff]' : 'bg-[#2b59ff] text-white'
                    }`}>
                      Q
                    </div>
                    <span className={`font-bold text-lg leading-tight ${
                      isOpen ? 'text-white' : 'text-[#0C2442]'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <span className={`mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </button>

                {/* Answer Area */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-2 flex gap-4">
                    <div className="w-8 shrink-0"></div> {/* Spacing adjustment */}
                    <p className={`text-sm leading-relaxed ${isOpen ? 'text-blue-50' : 'text-gray-600'}`}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;