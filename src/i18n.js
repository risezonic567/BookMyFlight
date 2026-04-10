import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // General Buttons
      btn_book_now: "Book Now",
      btn_call_now: "Call Now",

      // Navbar & Sidebar
      nav_my_booking: "My Booking",
      nav_blogs: "Blogs",
      nav_packages: "Packages",
      select_lang_region: "Select Language & Region",

      // Top Flight Deals
      btn_top_domestic: "Top Domestic Flight",
      btn_intl_deals: "International Flight Deals",
      route_la_lv: "Los Angeles to Las Vegas",
      route_ny_atl: "New York to Atlanta",
      route_wash_mia: "Washington to Miami",
      route_ny_orl: "New York to Orlando",
      route_atl_lv: "Atlanta to Las Vegas",
      route_chi_dub: "Chicago to Dublin",
      route_ny_lon: "New York to London",
      route_la_tok: "Los Angeles to Tokyo",
      route_lv_can: "Las Vegas to Cancun",
      route_atl_dubai: "Atlanta to Dubai",

      // Trust Section
      trust_title_1: "Trusted By 1M Travelers",
      trust_desc_1: "Join millions who've booked with confidence and ease.",
      trust_title_2: "24/7* Customer Support",
      trust_desc_2: "We have flight booking experts ever ready to assist.",
      trust_title_3: "100% Safe & Secure",
      trust_desc_3: "Online security is something you should not worry about.",
      trust_title_4: "Best Price Guarantee",
      trust_desc_4: "At least that's something we believe in and stand for.",

      // Popular Deals
      deals_main_title: "Popular Deals",
      deal_discount_30: "Up To 30% Off",
      deal_description: "You choose a flight, we take off the price",
      label_coupon: "Coupon",

      // Newsletter
      newsletter_title: "Subscribe to Get Notified About Latest Deals & Offers",
      newsletter_placeholder: "Your Email",
      newsletter_button: "Subscribe",

      // Blog Slider
      blog_main_title: "Our Blog and Articles",
      blog_read_more: "Read More",

      // FAQ
      faq_main_title: "FAQ About Air Ticket Reservation",
      
      // Footer
      footer_copyright: "Copyright © 2016-2025 FlightsChannel LLC. All Rights Reserved."
    }
  },
  es: {
    translation: {
      btn_book_now: "Reservar ahora",
      btn_call_now: "Llamar ahora",
      nav_my_booking: "Mi reserva",
      
      // Top Flight Deals (Spanish)
      btn_top_domestic: "Vuelos nacionales",
      btn_intl_deals: "Ofertas internacionales",
      route_la_lv: "Los Ángeles a Las Vegas",
      route_ny_atl: "Nueva York a Atlanta",
      route_wash_mia: "Washington a Miami",
      route_ny_orl: "Nueva York a Orlando",
      route_atl_lv: "Atlanta a Las Vegas",
      route_chi_dub: "Chicago a Dublín",
      route_ny_lon: "Nueva York a Londres",
      route_la_tok: "Los Ángeles a Tokio",
      route_lv_can: "Las Vegas a Cancún",
      route_atl_dubai: "Atlanta a Dubái",

      trust_title_1: "Confiado por 1M de viajeros",
      deals_main_title: "Ofertas populares",
      newsletter_title: "Suscríbete para recibir ofertas",
      blog_main_title: "Nuestro blog",
      footer_copyright: "Copyright © 2016-2025 FlightsChannel LLC. Todos los derechos reservados."
    }
  },
  fr: {
    translation: {
      btn_book_now: "Réserver maintenant",
      btn_top_domestic: "Vols Intérieurs",
      btn_intl_deals: "Offres Internationales",
      route_la_lv: "Los Angeles à Las Vegas",
      route_ny_atl: "New York à Atlanta",
      route_chi_dub: "Chicago à Dublin",
      route_ny_lon: "New York à Londres",
      
      trust_title_1: "Approuvé par 1M de voyageurs",
      deals_main_title: "Offres Populaires",
      newsletter_title: "Abonnez-vous aux offres",
      footer_copyright: "Copyright © 2016-2025 FlightsChannel LLC. Tous droits réservés."
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;