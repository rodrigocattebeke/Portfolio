import { Title } from "@/components/Common/Title";
import { InformationCard } from "@/components/Common/InformationCard";
import { ContactForm } from "@/components/Common/ContactForm";

export const Interested = () => {
  return (
    <section className="container-xl section bg-2">
      <Title>
        <h2>¿Interesado?</h2>
      </Title>
      <InformationCard />
      <ContactForm />
    </section>
  );
};
