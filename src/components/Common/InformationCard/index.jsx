import styles from "./styles.module.css";
import { GithubIcon, PhoneIcon, MailIcon, LinkedinIcon } from "@/assets/icons";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";
export const InformationCard = () => {
  const { languageSelected } = useContext(LanguageContext);

  const icons = {
    GithubIcon: <GithubIcon className="icon" />,
    PhoneIcon: <PhoneIcon className="icon" />,
    MailIcon: <MailIcon className="icon" />,
    LinkedinIcon: <LinkedinIcon className="icon" />,
  };

  return (
    <div className={`${styles.card}`}>
      <img src="#" className={`${styles.cardAvatar}`}></img>
      <div className={`${styles.cardBody}`}>
        <p>{languageSelected.translations.interested.cardInformation.title}</p>
        <small>{languageSelected.translations.interested.cardInformation.description}</small>
      </div>
      <div className={`${styles.cardContacts}`}>
        {/* For the icon to work, the icon name must be the same as the imported icon.  */}
        {languageSelected.translations.interested.cardInformation.icons.map((data, i) => (
          <a href={`${data.url}`} target="_blank" rel="noopener noreferrer" key={i}>
            {icons[data.icon]}
          </a>
        ))}
      </div>
    </div>
  );
};
