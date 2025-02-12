import { useLocation } from "react-router-dom";
import { Header } from "./components/Layout/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { HeroSection } from "./components/Sections/HeroSection";
import { Interested } from "./components/Sections/Interested";
import { MyProjects } from "./components/Sections/MyProjects";
import { MySkills } from "./components/Sections/MySkills";
import { Services } from "./components/Sections/Services";
import { useEffect } from "react";

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
      <Header />
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <Services />
      <Interested />
    </>
  );
}

export default App;
