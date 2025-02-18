import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { AvatarImg } from "@/assets/img";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";

export const HeroSection = () => {
  const { languageSelected } = useContext(LanguageContext);

  return (
    <section id="heroSection" className={`${styles.heroContainer} section container-xxl bg-1`}>
      <div className={`${styles.infoContainer}`}>
        <div className={`${styles.infoHeader}`}>
          <div className={`${styles.avatarContainer}`}>
            <img src={AvatarImg} />
          </div>
        </div>
        <div className={`${styles.textContainer} text-center`}>
          <h3>{languageSelected.translations.heroSection.greeting}</h3>
          <h1>{languageSelected.translations.heroSection.name}</h1>
          <h3>{languageSelected.translations.heroSection.rol}</h3>
        </div>
        <div className={`${styles.contactButton}`}>
          <Link to={"#contactForm"}>
            <Button accentColor={"true"}>
              <span style={{ fontWeight: "bold" }}>{languageSelected.translations.heroSection.buttonText}</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
