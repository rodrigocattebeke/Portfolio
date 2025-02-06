import styles from "./styles.module.css";

export const SkillBar = ({ tecnology = undefined, percentage = 0 }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.barContainer}`} style={{ width: `${percentage}%` }}>
        <div className={`${styles.textContainer}`}>
          <p>{tecnology}</p>
          <p>{percentage}%</p>
        </div>
      </div>
    </div>
  );
};
