import { createContext, useEffect, useState } from "react";
import { languages } from "@/locales";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const availableLanguages = () => {
    return languages.availables;
  };

  //Function for check if the language is available.
  const isLangAvailable = (lang) => {
    if (languages.availables.some((language) => language.value == lang)) {
      return true;
    } else {
      console.error(`Availables languages: ${languages.availables.map((lang) => `"` + lang.value + `" `)}`);
      return false;
    }
  };

  //Function for select language
  const selectLanguage = (lang) => {
    if (isLangAvailable(lang)) {
      let langSelected = languages[`${lang}`];
      localStorage.setItem("language", lang);
      return setLanguage(langSelected);
    } else {
      return console.error(`Language "${lang}" is not available.`);
    }
  };

  //Check if localStorage has a saved lang
  useEffect(() => {
    let savedLanguage = localStorage.getItem("language");
    if (savedLanguage) selectLanguage(savedLanguage);
  });

  return <LanguageContext.Provider value={{ availableLanguages, isLangAvailable, language, selectLanguage }}>{children}</LanguageContext.Provider>;
};

export { LanguageContext };
