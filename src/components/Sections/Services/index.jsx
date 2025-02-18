import { ServiceCard } from "@/components/Common/ServiceCard";
import { AutorenewIcon, EngineeringIcon, ForumIcon, WebIcon } from "@/assets/icons";
import { Title } from "../../Common/Title";
import styles from "./styles.module.css";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";

export const Services = () => {
  const { languageSelected } = useContext(LanguageContext);

  const icons = {
    AutorenewIcon,
    EngineeringIcon,
    ForumIcon,
    WebIcon,
  };

  return (
    <section id="services" className={`${styles.container} container-xxl section`}>
      <Title>
        <h2>{languageSelected.translations.services.title}</h2>
      </Title>

      {/* Services cards */}
      <div className="container">
        <div className="row" style={{ rowGap: "2.65rem" }}>
          {languageSelected.translations.services.servicesCards.map((service, i) => (
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-top" key={i}>
              {/* For the icon to work, the icon name must be the same as the imported icon.  */}
              <ServiceCard icon={icons[service.icon]} title={service.title} body={service.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
