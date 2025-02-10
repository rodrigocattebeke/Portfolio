import { Title } from "@/components/Common/Title";
import { SkillsCard } from "@/components/Common/SkillsCard";

export const MySkills = () => {
  return (
    <section className="container-xl section bg-2 d-lg-none">
      <Title>
        <h2>Mis Habilidades</h2>
      </Title>
      <SkillsCard />
    </section>
  );
};
