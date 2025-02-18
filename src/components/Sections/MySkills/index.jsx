import { Title } from "@/components/Common/Title";
import { SkillsCard } from "@/components/Common/SkillsCard";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { useContext } from "react";

export const MySkills = () => {
  const { languageSelected } = useContext(LanguageContext);
  return (
    <section id="skills" className="container-xl section bg-2 d-lg-none">
      <Title>
        <h2>{languageSelected.translations.mySkills.title}</h2>
      </Title>
      <SkillsCard />
    </section>
  );
};
