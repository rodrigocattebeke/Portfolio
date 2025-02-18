import es from "./es.json";
import en from "./en.json";

const languages = {
  availables: [
    { name: "Español", value: "es" },
    { name: "English", value: "en" },
  ],
  es: {
    name: "Español",
    value: "es",
    translations: es,
  },
  en: {
    name: "English",
    value: "en",
    translations: en,
  },
};

export { languages };
