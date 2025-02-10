import { Title } from "@/components/Common/Title";
import styles from "./styles.module.css";
import { SkillsCard } from "@/components/Common/SkillsCard";
export const AboutMe = () => {
  return (
    <section className={`${styles.sectionContainer} container-xxl section bg-2`}>
      <Title>
        <h2>Sobre Mí</h2>
      </Title>
      <div className="container-xl">
        <div className="row m-0">
          <div className={`${styles.textContainer} col-12 col-lg-4`}>
            <p>Hola, soy Rodrigo Cattebeke, un desarrollador front-end de Paraguay con una gran pasión por la creación de soluciones web.</p>
            <p>Aunque aún me encuentro en proceso de aprendizaje, he trabajado en proyectos personales, destacando un ecommerce realizado en React. Este proyecto me ha permitido aplicar mis conocimientos en tecnologías como JavaScript, CSS, HTML, y React, abarcando funcionalidades clave de un ecommerce real, como el manejo de productos y el flujo de compras.</p>
            <p>Me especializo en React, y tengo conocimientos en Bootstrap para diseñar interfaces modernas y responsivas. Además, me esfuerzo por mantener una comunicación clara y efectiva con clientes, buscando siempre entregar un trabajo de calidad.</p>
          </div>
          <div className="col-lg-4 d-none d-lg-flex justify-content-center align-items-top">
            <img src="..."></img>
          </div>
          <div className="col-lg-4 d-none d-lg-flex flex-column align-items-center">
            <h3 className="mb-3">Mis Habilidades</h3>
            <SkillsCard />
          </div>
        </div>
      </div>
    </section>
  );
};
