import { Header } from "./components/Layout/Header";
import { AboutMe } from "./components/Sections/AboutMe";
import { HeroSection } from "./components/Sections/HeroSection";
import { MyProjects } from "./components/Sections/MyProjects";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <MyProjects />
    </>
  );
}

export default App;
