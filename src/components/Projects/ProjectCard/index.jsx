import { Carousel } from "@/components/Common/Carousel";
import { MobileMockup, TabletMockup, DesktopMockup } from "@/assets/img";
import styles from "./styles.module.css";
import { Button } from "../../Common/Button";
import { Link } from "react-router-dom";

export const ProjectCard = () => {
  return (
    <div className="container mb-4">
      <div className={`${styles.cardContainer} row`}>
        <div className={`d-flex align-items-center justify-content-center col-12 col-lg-6`}>
          <Carousel
            imgArray={[
              { img: DesktopMockup, name: "Site Desktop Mockup" },
              { img: MobileMockup, name: "Site Mobile Mockup" },
              { img: TabletMockup, name: "Site Tablet Mockup" },
            ]}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className={`${styles.cardBody}`}>
            <h2>LyR Express</h2>
            <div className={`${styles.cardDescription}`}>
              <p>LyR Express es un ecommerce completo, con carrito de compras y un flujo de checkout intuitivo, todo construido con React y Bootstrap.</p>
              <ul>
                <li>
                  <span>Tipo:</span> Ecomerce
                </li>
                <li>
                  <span>Tecnologías:</span> React, JavaScript, Bootstrap, CSS.{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.cardButtons}`}>
            <Link to={"#verproyecto"}>
              <Button>
                <span style={{ fontWeight: "bold" }}>Ver Proyecto</span>
              </Button>
            </Link>
            <Link to={"#masinformacion"}>
              <Button>
                <span style={{ fontWeight: "bold" }}>Más Inforación</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
