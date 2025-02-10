import styles from "./styles.module.css";

export const Carousel = ({ imgArray = [] }) => {
  return (
    <div id="carouselCaptions" className={`${styles.carousel} carousel slide`}>
      <div className="carousel-indicators">
        {imgArray.map((imgObj, i) => (
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={`${i}`} className={i == 0 ? "active" : ""} aria-current={`${i == 0 ? "true" : ""}`} aria-label={`Slide ${i + 1}`} key={i}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imgArray.map((imgObj, i) => (
          <div className={`${styles.imgContainer} carousel-item ${i == 0 ? "active" : ""}`} key={i}>
            <img src={imgObj.img} className="d-block w-100" alt={`${imgObj.name}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
