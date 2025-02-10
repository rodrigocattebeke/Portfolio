import { ServiceCard } from "@/components/Common/ServiceCard";
import { AutorenewIcon, EngineeringIcon, ForumIcon, WebIcon } from "@/assets/icons";
import { Title } from "../../Common/Title";
import styles from "./styles.module.css";

export const Services = () => {
  const devProjects = {
    icon: EngineeringIcon,
    title: "Desarrollo de Proyectos Personalizados",
    body: "Creo soluciones a medida que se adaptan a las necesidades de cada cliente, desde e-commerce funcionales hasta interfaces interactivas y modernas.",
  };

  const responsiveDev = {
    icon: WebIcon,
    title: "Desarrollo Frontend Responsivo",
    body: "Construyo soluciones hechas a medida, como aplicaciones web dinámicas y e-commerce funcionales. Diseño inicial en herramientas como Figma para prototipos y wireframes.",
  };

  const update = {
    icon: AutorenewIcon,
    title: "Mantenimiento y Actualización de Sitios",
    body: "Ofrezco soporte y actualizaciones para mantener tu sitio web seguro, optimizado y en funcionamiento sin problemas. (Icono recomendado: update o support.",
  };

  const comunication = {
    icon: ForumIcon,
    title: "Colaboración y Comunicación Efectiva",
    body: "Mantengo una comunicación abierta y constante con mis clientes, asegurando que el resultado cumpla con sus expectativas.",
  };

  return (
    <section className={`${styles.container} container-xl section`}>
      <Title>
        <h2>¿Qué te ofrezco?</h2>
      </Title>

      <div className="container">
        <div className="row" style={{ rowGap: "2.65rem" }}>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-top">
            <ServiceCard icon={devProjects.icon} title={devProjects.title} body={devProjects.body} />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-top">
            <ServiceCard icon={responsiveDev.icon} title={responsiveDev.title} body={responsiveDev.body} />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-top">
            <ServiceCard icon={update.icon} title={update.title} body={update.body} />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-top">
            <ServiceCard icon={comunication.icon} title={comunication.title} body={comunication.body} />
          </div>
        </div>
      </div>
    </section>
  );
};
