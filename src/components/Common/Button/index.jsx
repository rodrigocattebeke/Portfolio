import styles from "./styles.module.css";

export const Button = ({ children, accentColor = "false", ...props }) => {
  return (
    <button className={`${styles.button} ${accentColor == "true" ? styles.accentColor : ""} `} {...props}>
      {children}
    </button>
  );
};
