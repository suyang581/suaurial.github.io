import React from "react";
import styles from "./image.module.css";

export const FadeOnLoadImage = ({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) => {
  const [loaded, setLoaded] = React.useState(false);

  const onImageLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={src}
      className={`${className} ${loaded ? styles.imageLoaded : styles.image}`}
      onLoad={onImageLoad}
      onClick={onClick}
      alt={alt}
    />
  );
};
