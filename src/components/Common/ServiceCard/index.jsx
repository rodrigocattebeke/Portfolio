import { useEffect, useState } from "react";
import { useElementObserver } from "../../../Helpers/useElementObserver";
import styles from "./styles.module.css";

export const ServiceCard = ({ icon: Icon, title = "", body = "" }) => {
  const [element, setElement] = useState(null);

  const { isVisible } = useElementObserver(element, { threshold: 0.3 });

  return (
    <div ref={setElement}>
      <div className={`${styles.card} ${isVisible ? styles.isVisible : ""}`}>
        <div className={`${styles.cardHead} `}>
          <Icon className="icon" />
          <h3>{title}</h3>
        </div>
        <div className={`${styles.cardBody}`}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};
