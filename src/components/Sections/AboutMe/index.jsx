import { Title } from "@/components/Common/Title";
import styles from "./styles.module.css";
export const AboutMe = () => {
  return (
    <section className={`${styles.sectionContainer} container-xl section bg-2`}>
      <Title>
        <h2>Sobre Mí</h2>
      </Title>
      <div className={`${styles.textContainer}`}>
        <p>Hola, soy Rodrigo Cattebeke, un desarrollador front-end de Paraguay con una gran pasión por la creación de soluciones web.</p>
        <p>Aunque aún me encuentro en proceso de aprendizaje, he trabajado en proyectos personales, destacando un ecommerce realizado en React. Este proyecto me ha permitido aplicar mis conocimientos en tecnologías como JavaScript, CSS, HTML, y React, abarcando funcionalidades clave de un ecommerce real, como el manejo de productos y el flujo de compras.</p>
        <p>Me especializo en React, y tengo conocimientos en Bootstrap para diseñar interfaces modernas y responsivas. Además, me esfuerzo por mantener una comunicación clara y efectiva con clientes, buscando siempre entregar un trabajo de calidad.</p>
      </div>
    </section>
  );
};
