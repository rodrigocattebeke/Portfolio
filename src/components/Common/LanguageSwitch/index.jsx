import { LanguageIcon } from "@/assets/icons";
import styles from "./styles.module.css";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../contexts/LanguageProvider";

export const LanguageSwitch = () => {
  const { availableLanguages, selectLanguage } = useContext(LanguageContext);
  const languages = availableLanguages();
  const [langSelected, setLangSelected] = useState(null);

  const handleSelectChange = (e) => {
    setLangSelected(e.target.value);
  };

  useEffect(() => {
    if (!langSelected) return;
    selectLanguage(langSelected);
  }, [selectLanguage, langSelected]);

  return languages ? (
    <div className={`${styles.switchContainer}`}>
      <div className={`${styles.iconContainer}`}>
        <LanguageIcon className="icon" />
      </div>
      <div className={`${styles.selectContainer}`}>
        <select value={langSelected} onChange={handleSelectChange}>
          {languages.map((lang, i) => (
            <option value={`${lang.value}`} key={i}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  ) : (
    ""
  );
};
