import { createContext, useEffect, useState } from "react";
import { languages } from "@/locales";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languageSelected, setLanguageSelected] = useState(languages.es); //"es" is the default language selected

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
      document.body.classList.add("fadeText"); //The first fade duration is .5s

      setTimeout(() => {
        setLanguageSelected(langSelected); //when the text is not visible, change the text to the language selected
      }, 500);

      //remove fade class for next using
      setTimeout(() => {
        document.body.classList.remove("fadeText");
      }, 1000); //The delay has to be the same as the total duration of the fadeText

      return;
    } else {
      return console.error(`Language "${lang}" is not available.`);
    }
  };

  //Check if localStorage has a saved lang
  useEffect(() => {
    let savedLanguage = localStorage.getItem("language");
    if (savedLanguage) selectLanguage(savedLanguage);
  });

  return <LanguageContext.Provider value={{ availableLanguages, isLangAvailable, selectLanguage, languageSelected }}>{children}</LanguageContext.Provider>;
};

export { LanguageContext };
