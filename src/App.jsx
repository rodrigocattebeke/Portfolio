import { Header } from "./components/Layout/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { HeroSection } from "./components/Sections/HeroSection";
import { Interested } from "./components/Sections/Interested";
import { MyProjects } from "./components/Sections/MyProjects";
import { MySkills } from "./components/Sections/MySkills";
import { Services } from "./components/Sections/Services";

function App() {

  // Hacer una funcion que detecte cambios en el hash y haga scroll hasta el elemento que tiene el id
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
