import { useContext, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { ThemeSwitch } from "@/components/Common/ThemeSwitch";
import styles from "./styles.module.css";

export const MobileThemeSwitch = () => {
  const { theme } = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
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
