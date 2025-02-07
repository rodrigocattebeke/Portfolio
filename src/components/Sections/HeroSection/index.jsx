import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className={`${styles.heroContainer} container-xl bg-1`}>
      <div className={`${styles.infoContainer}`}>
        <div className={`${styles.avatarContainer}`}>
          <img src="#"></img>
        </div>
        <div className={`${styles.textContainer} text-center`}>
          <h3>Hola, soy</h3>
          <h1>Rodrigo Cattebeke</h1>
          <h3>Desarrollador Frontend</h3>
        </div>
        <div>
          <Link to={"#contactForm"}>
            <Button accentColor={"true"}>¡Contáctame!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
