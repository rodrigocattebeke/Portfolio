import { MenuIcon } from "@/assets/icons";
import styles from "./styles.module.css";

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
                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                  <MenuIcon className="icon" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </>
  );
};
