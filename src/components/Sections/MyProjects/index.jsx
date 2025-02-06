import { Title } from "../../Common/Title";
import { ProjectCard } from "@/components/Projects/ProjectCard";

export const MyProjects = () => {
  return (
    <section className={`container section`}>
      <Title>
        <h2>Mis Proyectos</h2>
      </Title>
      <ProjectCard />
    </section>
  );
};
