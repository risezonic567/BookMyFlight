import { User, ChevronDown, Menu, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [currentLang, setCurrentLang] = useState("EN");

  const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Spanish", code: "es", label: "ES" },
  ]; 

  // Language Change Logic (Cookies Based - Sabse Stable)
  const handleLangChange = (langCode, label) => {
    // 1. Cookie set karna jo Google Translate samajhta hai
    // Format: /pata-nahi/original_lang/target_lang
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; domain=.localhost; path=/`; // Localhost ke liye
    
    // 2. Page ko refresh karna taaki naya translation apply ho jaye
    // Ye 'Maximum call stack' error ko khatam kar deta hai
    window.location.reload();
  };

  useEffect(() => {
    // Google script ko load karna (Only once)
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    };

    // Current language label update karna cookie dekh kar
    const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (match) {
      const lang = languages.find(l => l.code === match[1]);
      if (lang) setCurrentLang(lang.label);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Google Container (Zaroori hai background execution ke liye) */}
      <div id="google_translate_element" style={{ visibility: 'hidden', position: 'absolute', zIndex: -1 }}></div>

      <div className="container mx-auto px-4 flex items-center justify-between h-20 max-w-7xl">
        {/* Logo Section - Original Size */}
        <div className="flex items-center shrink-0">
          <Link to="/" className="block">
            <img
              src="/images/Book my Flight online logo png.png"
              alt="Logo"
              className="h-30 md:h-55 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-7 font-semibold text-blue-950">
          <Link to="/my-booking" className="hover:text-blue-600 transition-colors">My Booking</Link>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blogs</Link>
          <Link to="/packages" className="hover:text-blue-600 transition-colors">Packages</Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            <User size={22} />
          </Link>

          {/* Language Dropdown (Original Design) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 uppercase font-bold text-sm text-gray-700"
            >
              {currentLang} <ChevronDown size={14} className={isOpen ? "rotate-180" : ""} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-2xl z-[110]">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleLangChange(lang.code, lang.label)}
                    className="px-4 py-3 text-sm cursor-pointer hover:bg-blue-50 font-medium"
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="lg:hidden p-1" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={30} />
          </button>
          <a className="font-semibold md:block hidden" href="tel:+1 818-772-6235">+1 818-772-6235</a>
        </div>
      </div>

      {/* MOBILE DRAWER (Original Style) */}
      <div className={`fixed inset-0 bg-black/40 z-[60] lg:hidden transition-opacity ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div className={`fixed top-0 right-0 h-full w-[280px] bg-white p-6 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-10 mr-9">
            <span className="font-bold text-blue-900 text-xl">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}><X size={28} /></button>
          </div>
          <nav className="flex flex-col space-y-6">
            <Link to="/my-booking" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold border-b pb-2">My Booking</Link>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold border-b pb-2">Blogs</Link>
            <Link to="/packages" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold border-b pb-2">Packages</Link>
            <a className="text-lg font-semibold border-b pb-2 " href="tel:+1 818-772-6235">+1 818-772-6235</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;