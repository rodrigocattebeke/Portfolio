import { Title } from "@/components/Common/Title";
import { InformationCard } from "@/components/Common/InformationCard";
import { ContactForm } from "@/components/Common/ContactForm";
import styles from "./styles.module.css";

export const Interested = () => {
  return (
    <section id="interested" className={`${styles.container} container-xl section`}>
      <Title>
        <h2>¿Interesado?</h2>
      </Title>
      <InformationCard />
      <ContactForm />
    </section>
  );
};
