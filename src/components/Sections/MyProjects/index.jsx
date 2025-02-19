import { Title } from "@/components/Common/Title";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { LanguageContext } from "@/contexts/LanguageProvider";
import { useContext, useState } from "react";
import { ProjectInformationModal } from "./ProjectInformationModal";

export const MyProjects = () => {
  const { languageSelected } = useContext(LanguageContext);
  const [modalInformation, setModalInformation] = useState(null);
  const [modalIsActive, setModalIsActive] = useState(false);

  const closeModal = () => {
    setModalIsActive(false);
  };

  const openModal = (projectInformation) => {
    setModalInformation(projectInformation);
    setModalIsActive(true);
  };

  return (
    <section id="projects" className={`container-xxl section bg-1`}>
      <Title>
        <h2>{languageSelected.translations.myProjects.title}</h2>
      </Title>

      {languageSelected.translations.myProjects.projects.map((project, i) => (
        <ProjectCard projectInformation={project} openModal={openModal} key={i} />
      ))}

      <ProjectInformationModal projectInformation={modalInformation} isActive={modalIsActive} closeModal={closeModal} />
    </section>
  );
};
