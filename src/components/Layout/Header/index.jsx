import { MenuIcon } from "@/assets/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <nav>
          <div className="container-xl">
            <div className="row p-0">
              <div className="col-9 d-flex align-items-center">
                <h3 className={`${styles.headerTitle}`}>Rodrigo Cattebeke</h3>
              </div>
              <div className="col-3 p-0 d-flex align-items-center justify-content-end">
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
          <ul>
            <li>
              <Link>Inicio</Link>
            </li>
            <li>
              <Link>Sobre Mí</Link>
            </li>
            <li>
              <Link>Mis Proyectos</Link>
            </li>
            <li>
              <Link>Mis Habilidades</Link>
            </li>
            <li>
              <Link>¿Qué te ofrezco?</Link>
            </li>
            <li>
              <Link>Contáctame</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
