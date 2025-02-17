import { LanguageIcon } from "@/assets/icons";
import styles from "./styles.module.css";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../contexts/LanguageProvider";

export const LanguageSwitch = () => {
  const { availableLanguages } = useContext(LanguageContext);
  const [languages, setLanguages] = useState(null);

  useEffect(() => {
    let languages = availableLanguages();
    setLanguages(languages);
  }, [availableLanguages]);

  return languages ? (
    <div className={`${styles.switchContainer}`}>
      <div className={`${styles.iconContainer}`}>
        <LanguageIcon className="icon" />
      </div>
      <div className={`${styles.selectContainer}`}>
        <select>
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
