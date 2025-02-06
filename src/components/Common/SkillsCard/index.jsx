import { SkillBar } from "./SkillBar";
import styles from "./styles.module.css";

export const SkillsCard = () => {
  return (
    <section className={`${styles.cardContainer}`}>
      <SkillBar tecnology="React" percentage="80" />
    </section>
  );
};
