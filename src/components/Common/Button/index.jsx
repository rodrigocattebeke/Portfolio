import styles from "./styles.module.css";

export const Button = ({ children, accentColor = "false" }) => {
  return <button className={`${styles.button} ${accentColor == "true" ? styles.accentColor : ""} `}>{children}</button>;
};
