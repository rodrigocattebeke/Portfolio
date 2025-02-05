import { Carousel } from "@/components/Common/Carousel";
import styles from "./styles.module.css";

export const ProjectCard = () => {
  return (
    <div className={`${styles.cardContainer}`}>
      <div className={`${styles.cardCarousel}`}>
        <Carousel />
      </div>
    </div>
  );
};
