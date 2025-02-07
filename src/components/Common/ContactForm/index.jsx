import styles from "./styles.module.css";

export const ContactForm = () => {
  return (
    <div className={`${styles.formContainer}`} id="contactForm">
      <form className={`${styles.form}`}>
        <input type="text" placeholder="Nombre" name="name"></input>
        <input type="email" placeholder="Email" name="email"></input>
        <textarea name="textarea" rows={"6"} />
      </form>
    </div>
  );
};
