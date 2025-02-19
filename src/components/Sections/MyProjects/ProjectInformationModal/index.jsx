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
      <div className={`${styles.modalContainer} ${modalIsActive ? styles.active : ""}`}>
        <div className={`${styles.modal}`}>
          {/* Close Modal Button */}
          <div className={`${styles.closeContainer}`}>
            <div onClick={closeModal}>
              <CloseIcon className="icon" />
            </div>
          </div>

          <div className={`${styles.modalTitle}`}>
            <h3>{projectInformation.title}</h3>
          </div>
          <div className={`${styles.modalBody}`}>
            {/* Project Description */}
            {projectInformation.moreInformation.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}

            {/* Collapsable Descriptions */}
            {projectInformation.moreInformation.collapsableDescriptions.map((desc, i) => (
              <div key={i}>
                {/* Collapse activator  */}
                <div className={`${styles.collapsableActivator}`} data-bs-toggle="collapse" data-bs-target={`#collapseDescription${i}`} aria-expanded="false" aria-controls="collapsable description">
                  <p>
                    <span style={{ fontWeight: "bold" }}>{desc.title}</span>
                  </p>
                  <ArrowDownIcon className="icon" />
                </div>

                {/* Collapsable description */}
                <div className={`${styles.collapsableDescContainer} collapse`} id={`collapseDescription${i}`}>
                  <div className="card card-body">{desc.description}</div>
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
