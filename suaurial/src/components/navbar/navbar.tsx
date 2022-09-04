import React from "react";
import { Link as ReactLink } from "react-router-dom";
import styles from "./navbar.module.css";

import { galleries } from "../../site_data";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <h1 className={styles.name}>Su Yang</h1>
        <div className={styles.links}>
          {galleries.map((gallery, i) => (
            <ReactLink key={i} to={gallery.url} className={styles.link}>
              {gallery.name}
            </ReactLink>
          ))}
          <ReactLink to="/about" className={styles.link}>
            About
          </ReactLink>
        </div>
      </div>
    </div>
  );
};
