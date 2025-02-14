import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { LightModeIcon } from "@/assets/icons";
import { DarkModeIcon } from "@/assets/icons";
import styles from "./styles.module.css";

export const ThemeSwitch = () => {
  const { theme, setDark, setLight } = useContext(ThemeContext);

  //Hacer un botoncito flotante en modo mobile, que esté por encima del header en el bottom, y cuando se le de click, aparezca un slide del costado con el switch. El menu puede estar aparte ya que el switch en si lo usaria dentro del slide, el boton puede cambiar de icono dependiendo del tema.
  return (
    <div className={`${styles.container} ${theme == "light" ? styles.light : styles.dark}`}>
      <div className={`${styles.iconContainer} ${theme == "dark" ? styles.active : ""}`}>
        {theme == "light" ? (
          <div className={`${styles.iconLight}`} onClick={setDark}>
            <LightModeIcon />
          </div>
        ) : (
          <div className={`${styles.iconDark}`} onClick={setLight}>
            <DarkModeIcon />
          </div>
        )}
      </div>
    </div>
  );
};
