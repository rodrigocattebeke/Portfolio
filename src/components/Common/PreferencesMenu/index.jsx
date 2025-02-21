import { useContext, useEffect, useRef, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { ThemeSwitch } from "@/components/Common/ThemeSwitch";
import styles from "./styles.module.css";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { LanguageSwitch } from "@/components/Common/LanguageSwitch";

export const PreferencesMenu = () => {
  const { theme } = useContext(ThemeContext);
  const { languageSelected } = useContext(LanguageContext);
  const containerRef = useRef(null);

  const [isActive, setIsActive] = useState(null);
  const [isActiveClass, setIsActiveClass] = useState("");

  // If it is the first view, the isActive is null to not apply the closing menu animation
  useEffect(() => {
    if (isActive == null) return;
    if (isActive) setIsActiveClass(styles.active);
    if (!isActive) setIsActiveClass(styles.close);
  }, [isActive]);

  //If you click outside the menu, it closes
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if ((containerRef && e.target == containerRef.current) || !containerRef.current.contains(e.target)) setIsActive(false);
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  });

  return (
    <div className={`${styles.container} ${isActiveClass}`} ref={containerRef}>
      <div className={`${styles.openBtn}`} onClick={() => setIsActive(!isActive)}>
        {theme == "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
      <div className={`${styles.switchersContainer}`}>
        <div className={`${styles.switchContainer}`}>
          <p>{languageSelected.translations.preferencesMenu.language.title}</p>
          <LanguageSwitch />
        </div>
        <div className={`${styles.switchContainer}`}>
          <p>{languageSelected.translations.preferencesMenu.theme.title}</p>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};
