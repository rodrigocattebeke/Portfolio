import { SkillBar } from "./SkillBar";
import styles from "./styles.module.css";
import { useState } from "react";
import { useElementObserver } from "@/Helpers/useElementObserver";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { useContext } from "react";

export const SkillsCard = () => {
  const [element, setElement] = useState(null);
  const { languageSelected } = useContext(LanguageContext);

  const { isVisible } = useElementObserver(element);

  return (
    //isVisible prop is set tos active when the section enters the field of vision;
    <section className={`${styles.cardContainer}`} ref={setElement}>
      {languageSelected.translations.mySkills.skills.map((skill, i) => (
        <SkillBar tecnology={skill.skill} percentage={skill.percentage} isVisible={isVisible} key={i} />
      ))}
    </section>
  );
};
