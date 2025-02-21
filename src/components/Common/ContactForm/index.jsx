import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { sendEmail } from "@/services/sendEmail";

export const ContactForm = () => {
  const { languageSelected } = useContext(LanguageContext);
  const [isSuccess, setisSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [modalViewClass, setModalViewClass] = useState("");

  const handleSubmit = async (e) => {
    setIsSending(true);
    const response = await sendEmail(e);
    setisSuccess(response.isSuccess);
  };

  //Manage the modal view
  useEffect(() => {
    if (isSuccess && isSending) {
      setModalViewClass(styles.active);
      setTimeout(() => {
        setModalViewClass(styles.close);
      }, 1000);
    }
  }, [isSuccess, isSending]);

  return (
    <>
      <div className={`${styles.formContainer}`} id="contactForm">
        <form className={`${styles.form}`} onSubmit={handleSubmit}>
          <input type="text" placeholder={`${languageSelected.translations.interested.formTexts.name}`} name="from_name"></input>
          <input type="email" placeholder={`${languageSelected.translations.interested.formTexts.email}`} name="email"></input>
          <textarea name="message" placeholder={`${languageSelected.translations.interested.formTexts.textarea}`} />
          <Button type={"submit"}>
            <span style={{ fontWeight: "bold" }}>{`${languageSelected.translations.interested.formTexts.submitButton}`}</span>
          </Button>
        </form>
      </div>
      <div className={`${styles.container} ${modalViewClass}`}>
        <div className={`${styles.modal}`}>
          <div className={`${styles.modalTitle}`}>
            <p>{languageSelected.translations.interested.modalText}</p>
          </div>
          <div className={`${styles.modalBody}`}>
            <p>Muchas gracias por contactarme! Pronto me comunicaré con usted :)</p>
          </div>
        </div>
      </div>
    </>
  );
};
