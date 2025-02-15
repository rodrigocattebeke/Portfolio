import { useContext, useEffect, useRef, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { ThemeSwitch } from "@/components/Common/ThemeSwitch";
import styles from "./styles.module.css";

export const MobileThemeSwitch = () => {
  const { theme } = useContext(ThemeContext);
  const containerRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if ((containerRef && e.target == containerRef.current) || !containerRef.current.contains(e.target)) setIsActive(false);
      console.log(e.target, e.target.closest(`.${styles.container}`));
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  });

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""} d-md-none`} ref={containerRef}>
      <div className={`${styles.openBtn}`} onClick={() => setIsActive(!isActive)}>
        {theme == "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </div>
      <div className={`${styles.switchContainer}`}>
        <p>Cambiar Tema</p>
        <ThemeSwitch />
      </div>
    </div>
  );
};
