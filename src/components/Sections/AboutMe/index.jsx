import { Title } from "@/components/Common/Title";
import styles from "./styles.module.css";
import { SkillsCard } from "@/components/Common/SkillsCard";
import { AvatarImg } from "@/assets/img";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { useContext } from "react";

export const AboutMe = () => {
  const { languageSelected } = useContext(LanguageContext);

  return (
    <section id="aboutMe" className={`${styles.sectionContainer} container-xxl section bg-2`}>
      <Title>
        <h2>{languageSelected.translations.aboutMe.title}</h2>
      </Title>
      <div className="container-xl">
        <div className="row m-0">
          <div className={`${styles.textContainer} col-12 col-lg-4`}>
            {/* Loop through the array and return the paragraphs */}
            {languageSelected.translations.aboutMe.bodyParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Person image */}
          <div className="col-lg-4 d-none d-lg-flex justify-content-center align-items-top">
            <img src={AvatarImg} className={`${styles.personImg}`}></img>
          </div>

          {/* Skills  */}
          <div className={`${styles.skills} col-lg-4 d-none d-lg-flex flex-column align-items-center`}>
            <h3 className="mb-3">{languageSelected.translations.mySkills.title}</h3>
            <SkillsCard />
          </div>
        </div>
      </div>
    </section>
  );
};
