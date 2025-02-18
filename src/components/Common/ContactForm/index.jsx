import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";

export const ContactForm = () => {
  const { languageSelected } = useContext(LanguageContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.formContainer}`} id="contactForm">
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <input type="text" placeholder={`${languageSelected.translations.interested.formTexts.name}`} name="name"></input>
        <input type="email" placeholder={`${languageSelected.translations.interested.formTexts.email}`} name="email"></input>
        <textarea name="textarea" placeholder={`${languageSelected.translations.interested.formTexts.textarea}`} />
        <Button type={"submit"}>
          <span style={{ fontWeight: "bold" }}>{`${languageSelected.translations.interested.formTexts.submitButton}`}</span>
        </Button>
      </form>
    </div>
  );
};
