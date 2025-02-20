import { ArrowDownIcon, CloseIcon } from "@/assets/icons";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const ProjectInformationModal = ({ projectInformation = null, isActive, closeModal }) => {
  const [backgroundIsActive, setBackgroundIsActive] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false);

  useEffect(() => {
    if (isActive && !projectInformation) {
      console.warn("Modal do not have information");
    }

    if (isActive) {
      setBackgroundIsActive(true);
      setTimeout(() => {
        setModalIsActive(true);
      }, 500); //500 is the background entry time animation
    } else {
      setModalIsActive(false);
      setTimeout(() => {
        setBackgroundIsActive(false);
      }, 1000); //1000 is the modal close time animation
    }
  }, [isActive, projectInformation]);

  return projectInformation ? (
    <div className={`${styles.container} ${backgroundIsActive ? styles.active : ""}`}>
      <div className={`${styles.modal} ${modalIsActive ? styles.active : ""}`}>
        {/* Close Modal Button */}
        <div className={`${styles.closeContainer}`} onClick={closeModal}>
          <CloseIcon className="icon" />
        </div>

        <div className={`${styles.modalBody}`}>
          <div className={`${styles.modalTitle}`}>
            <h3>{projectInformation.title}</h3>
          </div>
          <div>
            {/* Project Description */}
            {projectInformation.moreInformation.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}

            {/* Collapsable Descriptions */}
            {projectInformation.moreInformation.collapsableDescriptions.map((description, i) => (
              <div key={i}>
                {/* Collapse activator  */}
                <div className={`${styles.collapsableActivator}`} data-bs-toggle="collapse" data-bs-target={`#collapseDescription${i}`} aria-expanded="false" aria-controls="collapsable description">
                  <p>
                    <span style={{ fontWeight: "bold" }}>{description.title}</span>
                  </p>
                  <ArrowDownIcon className="icon" />
                </div>

                {/* Collapsable description */}
                <div className={`${styles.collapsableDescContainer} collapse`} id={`collapseDescription${i}`}>
                  <div className="card card-body">
                    {/* Verify if the description is list, or simple paragraph */}
                    {description.isList ? (
                      <ul>
                        {description.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    ) : (
                      description.description.map((desc, i) => <p key={i}>{desc}</p>)
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
