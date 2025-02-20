import { Carousel } from "@/components/Common/Carousel";
import { GithubIcon, InfoIcon, WebIcon } from "@/assets/icons";
import { DesktopMockup, MobileMockup, TabletMockup } from "@/assets/img";
import styles from "./styles.module.css";

export const ProjectCard = ({ projectInformation, openModal }) => {
  const images = {
    DesktopMockup,
    MobileMockup,
    TabletMockup,
  };

  //Set the array with the correct img path
  const imgArray = projectInformation.images.map((obj) => ({ ...obj, img: images[`${obj.img}`] }));

  return (
    <div className="container mb-4">
      <div className={`${styles.cardContainer} row`}>
        {/* Project images carousel */}
        <div className={`d-flex align-items-center justify-content-center col-12 col-lg-6`}>
          <Carousel imgArray={imgArray} />
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
            <a href={`${projectInformation.links.website.url}`} title={`${projectInformation.links.website.title}`} target="_blank" rel="noopener noreferrer">
              {/* <Button>
                <span style={{ fontWeight: "bold" }}>{projectInformation.links.website.title}</span>
              </Button> */}
              <WebIcon className="icon" />
            </a>
            <a href={`${projectInformation.links.github.url}`} target="_blank" rel="noopener noreferrer" title={`${projectInformation.links.github.title}`}>
              <GithubIcon className="icon" />
            </a>
            <span title={`${projectInformation.links.details.title}`}>
              <InfoIcon className="icon" onClick={() => openModal(projectInformation)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
