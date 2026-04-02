import React, { useEffect } from "react";

const GoogleTranslator = () => {
  useEffect(() => {
    // Ye function Google Translate ko initialize karta hai
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Aapki website ki asli language
          includedLanguages: "en,es,hi,fr,de", // Jo languages aapko chahiye (es = Spanish)
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md inline-block">
      {/* Is ID wale div mein Google apna dropdown dikhayega */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslator;