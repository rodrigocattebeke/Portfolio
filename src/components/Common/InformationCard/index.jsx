import styles from "./styles.module.css";
import { GithubIcon, PhoneIcon, MailIcon, LinkedinIcon } from "@/assets/icons";

export const InformationCard = () => {
  return (
    <div className={`${styles.card}`}>
      <img src="#" className={`${styles.cardAvatar}`}></img>
      <div className={`${styles.cardBody}`}>
        <p>Rodrigo Cattebeke</p>
        <small>Desarrollador Frontend</small>
      </div>
      <div className={`${styles.cardContacts}`}>
        <a href="">
          <LinkedinIcon className="icon" />
        </a>
        <a href="">
          <GithubIcon className="icon" />
        </a>
        <a href="">
          <MailIcon className="icon" />
        </a>
        <a href="">
          <PhoneIcon className="icon" />
        </a>
      </div>
    </div>
  );
};
