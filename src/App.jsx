import { useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { HeroSection } from "./components/Sections/HeroSection";
import { Interested } from "./components/Sections/Interested";
import { MyProjects } from "./components/Sections/MyProjects";
import { MySkills } from "./components/Sections/MySkills";
import { Services } from "./components/Sections/Services";
import { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { PreferencesMenu } from "./components/Common/PreferencesMenu";
import { LanguageProvider } from "./contexts/LanguageProvider";

function App() {
  const location = useLocation();

  //Detect the hash and scrolling to the element
  useEffect(() => {
    if (!location.hash) return;
    const element = document.querySelector(`${location.hash}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <PreferencesMenu />
        </ThemeProvider>
        <HeroSection />
        <AboutMe />
        <MyProjects />
        <MySkills />
        <Services />
        <Interested />
      </LanguageProvider>
    </>
  );
}

export default App;
