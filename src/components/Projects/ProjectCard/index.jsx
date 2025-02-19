import { Carousel } from "@/components/Common/Carousel";
import styles from "./styles.module.css";
import { Button } from "../../Common/Button";

export const ProjectCard = ({ projectInformation, openModal }) => {
  return (
    <div className="container mb-4">
      <div className={`${styles.cardContainer} row`}>
        {/* Project images carousel */}
        <div className={`d-flex align-items-center justify-content-center col-12 col-lg-6`}>
          <Carousel imgArray={projectInformation.images} />
        </div>

        {/* Project information */}
        <div className="col-12 col-lg-6">
          <div className={`${styles.cardBody}`}>
            <h2>{projectInformation.title}</h2>
            <div className={`${styles.cardDescription}`}>
              <p>{projectInformation.description}</p>
              <ul>
                <li>
                  <span>{projectInformation.type.title + ":"}</span> {projectInformation.type.description + "."}
                </li>
                <li>
                  <span>{projectInformation.technologies.title + ":"}</span> {projectInformation.technologies.description.join(", ") + "."}
                </li>
              </ul>
            </div>
          </div>

          {/* Actions buttons */}
          <div className={`${styles.cardButtons}`}>
            <a href={`${projectInformation.links.website.url}`} target="_blank" rel="noopener noreferrer">
              <Button>
                <span style={{ fontWeight: "bold" }}>{projectInformation.links.website.title}</span>
              </Button>
            </a>
            <Button onClick={() => openModal(projectInformation)}>
              <span style={{ fontWeight: "bold" }}>{projectInformation.links.details.title}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
