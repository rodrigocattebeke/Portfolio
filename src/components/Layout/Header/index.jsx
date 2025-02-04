import { MenuIcon } from "@/assets/icons";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <nav className={`${styles.navbar}`}>
      <div className="container-xl">
        <div className="row p-0">
          <div className="col-9 d-flex align-items-center">
            <h3 className={`${styles.headerTitle}`}>Rodrigo Cattebeke</h3>
          </div>
          <div className="col-3 p-0 d-flex align-items-center justify-contentr-end">
            {/* <MenuIcon /> */}
            <MenuIcon className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
