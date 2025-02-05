import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";

export const HeroSection = () => {
  return (
    <section className={`${styles.heroContainer}`}>
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
          <Button accentColor={"true"}>¡Contáctame!</Button>
        </div>
      </div>
    </section>
  );
};
