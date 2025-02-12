import { Title } from "../../Common/Title";
import { ProjectCard } from "@/components/Projects/ProjectCard";

export const MyProjects = () => {
  return (
    <section id="projects" className={`container-xxl section bg-1`}>
      <Title>
        <h2>Mis Proyectos</h2>
      </Title>
      <ProjectCard />
    </section>
  );
};
