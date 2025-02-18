import { MenuIcon } from "@/assets/icons";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "@/components/Common/ThemeSwitch";
import { CloseIcon } from "@/assets/icons";
import { LanguageSwitch } from "@/components/Common/LanguageSwitch";
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageProvider";

export const Header = () => {
  const { languageSelected } = useContext(LanguageContext);

  const onClick = (e) => {
    e.target.closest(".offcanvas").querySelector(".button-close").click();
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
              <div className="col-3 p-0 d-flex gap-2 align-items-center justify-content-end">
                <div>
                  <LanguageSwitch />
                </div>
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
          <button className={`${styles.btnClose} button-close`} data-bs-dismiss="offcanvas" aria-label="Close">
            <CloseIcon className={`${styles.closeIcon} icon`} />
          </button>
        </div>
        <div className={`${styles.offcanvasBody}`}>
          <ul onClick={(e) => onClick(e)}>
            {languageSelected.translations.menuSections.map((section, i) => (
              <li className={`${section.url == "#skills" ? "d-lg-none" : ""}`} key={i}>
                <Link to={`${section.url}`}>{section.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
