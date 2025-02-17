import { Button } from "@/components/Common/Button";
import styles from "./styles.module.css";

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.formContainer}`} id="contactForm">
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" name="name"></input>
        <input type="email" placeholder="Email" name="email"></input>
        <textarea name="textarea" placeholder="Escribe un mensaje" />
        <Button type={"submit"}>
          <span style={{ fontWeight: "bold" }}>Enviar mensaje</span>
        </Button>
      </form>
    </div>
  );
};
