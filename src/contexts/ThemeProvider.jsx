import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, changeTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) changeTheme(savedTheme);
  }, [changeTheme]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const setLight = () => {
    changeTheme("light");
    localStorage.setItem("theme", "light");
  };

  const setDark = () => {
    changeTheme("dark");
    localStorage.setItem("theme", "dark");
  };

  return <ThemeContext.Provider value={{ theme, setDark, setLight }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext };
