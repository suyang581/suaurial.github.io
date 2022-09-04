import React from "react";
import styles from "./gallery.module.css";

export type Image = {
  url: string;
  alt: string;
};

export const Gallery = ({ images }: { images: Image[] }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={images[activeIndex].url}
          alt={images[activeIndex].alt}
        />
      </div>
      <div className={styles.filmStripContainer}>
        <div className={styles.filmStrip}>
          {images.map((image, i) => (
            <div key={i} className={styles.imagePreviewContainer}>
              <img
                key={i}
                className={`${styles.imagePreview} ${
                  activeIndex === i ? styles.activeImagePreview : undefined
                }`}
                src={image.url}
                onClick={() => {
                  setActiveIndex(i);
                }}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
