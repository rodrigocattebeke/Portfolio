import { useEffect } from "react";
import { SkillBar } from "./SkillBar";
import styles from "./styles.module.css";
import { useState } from "react";
import { useElementObserver } from "@/Helpers/useElementObserver";

export const SkillsCard = () => {
  const [element, setElement] = useState(null);

  const { isVisible } = useElementObserver(element);

  return (
    <section className={`${styles.cardContainer}`} ref={setElement}>
      <SkillBar tecnology="React" percentage="45" isVisible={isVisible} />
      <SkillBar tecnology="JavaScript" percentage="60" isVisible={isVisible} />
      <SkillBar tecnology="CSS" percentage="60" isVisible={isVisible} />
    </section>
  );
};
