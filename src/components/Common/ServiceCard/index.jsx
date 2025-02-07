import styles from "./styles.module.css";

export const ServiceCard = ({ icon: Icon, title = "", body = "" }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.cardHead}`}>
        <Icon className="icon" />
        <h3>{title}</h3>
      </div>
      <div className={`${styles.cardBody}`}>
        <p>{body}</p>
      </div>
    </div>
  );
};
