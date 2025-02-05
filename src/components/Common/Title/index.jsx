import styles from "./styles.module.css";

export const Title = ({ children }) => {
  return <div className={`${styles.titleContainer}`}>{children}</div>;
};
