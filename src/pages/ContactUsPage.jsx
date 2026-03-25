import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <>
      <div className="bg-[#f4f7fe] min-h-screen py-16 px-4">
      <Helmet>
        <title>Contact Us | Flights Channel</title>
        <meta name="description" content="Get in touch with Flights Channel for your travel needs." />
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* Left Section: Contact Information Card */}
        <div className="w-full lg:w-[45%] bg-white rounded-lg shadow-sm p-8 border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            {/* Representative Image */}
            <div className="w-48 h-48 rounded-full border-4 border-[#a5e1ff] overflow-hidden flex-shrink-0">
              <img 
                src="https://img.freepik.com/free-photo/smiling-female-customer-service-representative-with-headset-office_23-2148296313.jpg" 
                alt="Support Representative" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black text-[#2e3d82] mb-6">Flights Channel</h2>
              
              <div className="space-y-4">
                {/* US Address */}
                <div className="flex items-start gap-2">
                  <img src="https://flagcdn.com/w20/us.png" alt="US Flag" className="mt-1" />
                  <div>
                    <h4 className="font-bold text-[#2e3d82]">US Address:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                      7260 W Azure Dr. STE 140-2212, Las Vegas, NV 89130, USA
                    </p>
                  </div>
                </div>

                {/* Canada Address */}
                <div className="flex items-start gap-2">
                  <img src="https://flagcdn.com/w20/ca.png" alt="Canada Flag" className="mt-1" />
                  <div>
                    <h4 className="font-bold text-[#2e3d82]">Canada Address:</h4>
                    <p className="text-gray-700 text-sm leading-relaxed font-semibold">
                      1918 Boul.Saint-Regid Dorval, QC, H9P 1H6 CANADA
                    </p>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="pt-2 space-y-2">
                  <div className="flex gap-2 text-sm font-semibold">
                    <span className="text-[#1a1a1a]">Email:</span>
                    <a href="mailto:support@flightschannel.com" className="text-blue-600 hover:underline">
                      support@flightschannel.com
                    </a>
                  </div>
                  <div className="flex gap-2 text-sm font-semibold">
                    <span className="text-[#1a1a1a]">Call us:</span>
                    <a href="tel:+18446099922" className="text-blue-600 hover:underline">
                      +1-844-609-9922
                    </a>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="pt-4">
                  <h4 className="font-bold text-[#1a1a1a] mb-2">Contact us on WhatsApp:</h4>
                  <a 
                    href="https://wa.me/18446099922" 
                    className="flex items-center gap-2 text-[#25d366] font-bold hover:opacity-80 transition-opacity"
                  >
                    <MessageSquare size={20} fill="#25d366" className="text-white" />
                    Contact us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Email Form */}
        <div className="w-full lg:w-[55%] bg-white rounded-lg shadow-sm p-8 border border-gray-100 flex flex-col">
          <h2 className="text-3xl font-black text-[#2e3d82] mb-8">Send us an Email</h2>
          
          <form onSubmit={handleSubmit} className="flex-grow flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 italic">Name *</label>
                <input 
                  type="text" 
                  required 
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 italic">Email *</label>
                <input 
                  type="email" 
                  required 
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 italic">subject</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 italic">phone *</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 outline-none" 
                />
              </div>
            </div>

            <div className="space-y-2 flex-grow">
              <label className="text-sm font-semibold text-gray-700 italic">Messages</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded h-48 md:h-full min-h-[150px] focus:border-blue-500 outline-none resize-none" 
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="bg-[#242f65] text-white px-8 py-3 font-bold hover:bg-blue-900 transition-colors text-sm"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
    <div className="w-full h-[450px]  overflow-hidden shadow-xl border-4 border-white  rounded-2xl">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2555156173057!2d77.0827245749552!3d28.592110485916162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bae6d0904b7%3A0x938fa4b31f997e05!2sAi.Risezonic!5e0!3m2!1sen!2sin!4v1774440130187!5m2!1sen!2sin" width="100%" height="450" style={{border:0 }}allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  );
};

export default ContactUsPage;