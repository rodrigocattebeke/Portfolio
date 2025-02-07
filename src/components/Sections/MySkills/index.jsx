import { Title } from "@/components/Common/Title";
import { SkillsCard } from "@/components/Common/SkillsCard";

export const MySkills = () => {
  return (
    <section className="container-xl section mb-4 bg-2">
      <Title>
        <h2>Mis Habilidades</h2>
      </Title>
      <SkillsCard />
    </section>
  );
};
