import React from "react";
import styles from "./about.module.css";
import image from "./images/image.jpg";

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.paragraphs}>
        <p className={styles.paragraph}>Hello! I’m Su.</p>
        <p className={styles.paragraph}>
          I’m a still life and travel photographer based out of Northern
          California. My photographs are inspired by natural light, movement,
          stillness, and culture.
        </p>
        <p className={styles.paragraph}>
          For all inquiries, please contact suyang581@gmail.com.
        </p>
      </div>
      <img className={styles.image} src={image} alt="Headshot" />
    </div>
  );
};
