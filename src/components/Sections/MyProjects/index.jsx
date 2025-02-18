import { Title } from "../../Common/Title";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { useContext } from "react";

export const MyProjects = () => {
  const { languageSelected } = useContext(LanguageContext);

  return (
    <section id="projects" className={`container-xxl section bg-1`}>
      <Title>
        <h2>{languageSelected.translations.myProjects.title}</h2>
      </Title>

      {languageSelected.translations.myProjects.projects.map((project, i) => (
        <ProjectCard projectInformation={project} key={i} />
      ))}
    </section>
  );
};
