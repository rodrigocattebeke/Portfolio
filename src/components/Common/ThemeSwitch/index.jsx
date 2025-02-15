import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { LightModeIcon } from "@/assets/icons";
import { DarkModeIcon } from "@/assets/icons";
import styles from "./styles.module.css";

export const ThemeSwitch = () => {
  const { theme, setDark, setLight } = useContext(ThemeContext);

  return (
    <div className={`${styles.container} ${theme == "light" ? styles.light : styles.dark}`}>
      <div className={`${styles.iconContainer} ${theme == "dark" ? styles.active : ""}`}>
        <div className={`${styles.iconLight} ${theme == "light" ? styles.active : ""}`} onClick={setDark}>
          <LightModeIcon />
        </div>
        <div className={`${styles.iconDark} ${theme == "dark" ? styles.active : ""}`} onClick={setLight}>
          <DarkModeIcon />
        </div>
      </div>
    </div>
  );
};
