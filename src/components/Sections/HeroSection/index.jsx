import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { AvatarImg } from "@/assets/img";

export const HeroSection = () => {
  return (
    <section className={`${styles.heroContainer} container-xxl bg-1`}>
      <div className={`${styles.infoContainer}`}>
        <div className={`${styles.infoHeader}`}>
          <div className={`${styles.avatarContainer}`}>
            <img src={AvatarImg}></img>
          </div>
        </div>
        <div className={`${styles.textContainer} text-center`}>
          <h3>Hola, soy</h3>
          <h1>Rodrigo Cattebeke</h1>
          <h3>Desarrollador Frontend</h3>
        </div>
        <div className={`${styles.contactButton}`}>
          <Link to={"#contactForm"}>
            <Button accentColor={"true"}>¡Contáctame!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
