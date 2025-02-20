import { Title } from "@/components/Common/Title";
import { InformationCard } from "@/components/Common/InformationCard";
import { ContactForm } from "@/components/Common/ContactForm";
import styles from "./styles.module.css";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";

export const Interested = () => {
  const { languageSelected } = useContext(LanguageContext);

  return (
    <section id="interested" className={`${styles.container} container-xxl section`}>
      <Title>
        <h2>{languageSelected.translations.interested.title}</h2>
      </Title>
      <InformationCard />
      <ContactForm />
    </section>
  );
};
