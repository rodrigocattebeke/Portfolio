import { MenuIcon } from "@/assets/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "@/components/Common/ThemeSwitch";

export const Header = () => {
  const onClick = (e) => {
    e.target.closest(".offcanvas").querySelector(".btn-close").click();
  };

  return (
    <>
      <header className={`${styles.header}`}>
        <nav>
          <div className="container-xl d-flex align-items-center h-100">
            <div className="row p-0 w-100">
              <div className="col-9 d-flex align-items-center">
                <h3 className={`${styles.headerTitle}`}>Rodrigo Cattebeke</h3>
              </div>
              <div className="col-3 p-0 d-flex align-items-center justify-content-end">
                <div className="d-none d-md-block">
                  <ThemeSwitch />
                </div>
                <button type="button" className={`${styles.menuButton}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                  <MenuIcon className="icon" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Offcanvas */}
      <div className={`${styles.offcanvas} offcanvas offcanvas-start`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className={`${styles.offcanvasBody}`}>
          <ul onClick={(e) => onClick(e)}>
            <li>
              <Link to={"#heroSection"}>Inicio</Link>
            </li>
            <li>
              <Link to={"#aboutMe"}>Sobre Mí</Link>
            </li>
            <li>
              <Link to={"#projects"}>Mis Proyectos</Link>
            </li>
            <li className="d-lg-none">
              <Link to={"#skills"}>Mis Habilidades</Link>
            </li>
            <li>
              <Link to={"#services"}>¿Qué te ofrezco?</Link>
            </li>
            <li>
              <Link to={"#interested"}>¿Interesado?</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
