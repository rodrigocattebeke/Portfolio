import { SkillBar } from "./SkillBar";
import styles from "./styles.module.css";

export const SkillsCard = () => {
  return (
    <section className={`${styles.cardContainer}`}>
      <SkillBar tecnology="React" percentage="45" />
      <SkillBar tecnology="JavaScript" percentage="60" />
      <SkillBar tecnology="CSS" percentage="60" />
    </section>
  );
};
