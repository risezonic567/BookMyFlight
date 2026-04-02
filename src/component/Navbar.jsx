import { User, ChevronDown, Menu, X, Phone } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Language Dropdown
  const [currentLang, setCurrentLang] = useState("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Drawer
  const dropdownRef = useRef(null);

  const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ];

  // 1. Google Translate Logic (Hidden in Background)
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 2. Language Change Handler
  const handleLangChange = (langCode, label) => {
    const selectElem = document.querySelector(".goog-te-combo");
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    }
    setCurrentLang(label);
    setIsOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Hidden Google Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <div className="container mx-auto px-4 flex items-center justify-between h-20 max-w-7xl">
        
        {/* LEFT: Logo */}
        <div className="flex items-center shrink-0">
          <Link to="/" className="block">
            <img 
              src="/images/Book my Flight online logo png.png" 
              alt="Logo" 
              className="h-35 md:h-35 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* CENTER: Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-blue-950">
          <Link to="/my-booking" className="hover:text-blue-600 transition-colors">My Booking</Link>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <Link to="/packages" className="hover:text-blue-600 transition-colors">Packages</Link>
        </nav>

        {/* RIGHT SIDE: Actions */}
        <div className="flex items-center gap-2 md:gap-5">
          
          {/* Desktop Phone */}
          <a href="tel:+1-844-609-9922" className="hidden sm:flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100 hover:bg-blue-600 hover:text-white transition-all group">
            <Phone size={16} className="fill-current" />
            <span className="font-bold text-sm">+1-844-609-9922</span>
          </a>

          {/* User Icon */}
          <Link to="/login" className="p-2 text-gray-700 hover:text-blue-600 transition-colors">
            <User size={22} />
          </Link>

          {/* Language Selector (Custom Design) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 uppercase font-bold text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              {currentLang} 
              <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-2xl z-[110] overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code, lang.label)}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-blue-50 transition-colors text-gray-700 font-medium"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-blue-950 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- MOBILE DRAWER LAYOUT --- */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="p-6 flex justify-between items-center border-b">
              <span className="font-bold text-blue-900 text-xl">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="flex-1 p-6 space-y-4">
              <Link to="/my-booking" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-800 hover:text-blue-600 py-2 border-b border-gray-50">
                My Booking
              </Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-800 hover:text-blue-600 py-2 border-b border-gray-50">
                Blogs
              </Link>
              <Link to="/packages" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-semibold text-gray-800 hover:text-blue-600 py-2 border-b border-gray-50">
                Packages
              </Link>
            </nav>

            {/* Drawer Footer (Contact Info) */}
            <div className="p-6 bg-gray-50 mt-auto">
              <p className="text-xs font-bold text-gray-400 uppercase mb-4">Support 24/7</p>
              <a href="tel:+1-844-609-9922" className="flex items-center gap-3 text-blue-700 font-bold text-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone size={18} />
                </div>
                +1-844-609-9922
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;