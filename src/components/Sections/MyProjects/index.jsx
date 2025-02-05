import { Title } from "../../Common/Title";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import styles from "./styles.module.css";

export const MyProjects = () => {
  return (
    <section className={`${styles.sectionContainer} container section`}>
      <Title>
        <h2>Mis Proyectos</h2>
      </Title>

      <ProjectCard />
    </section>
  );
};
