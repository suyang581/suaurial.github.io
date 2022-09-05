import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

import { galleries } from "../../site_data";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <h1>
          <NavLink to={"/"}>Su Yang</NavLink>
        </h1>
        <div className={styles.links}>
          {galleries.map((gallery, i) => (
            <NavLink
              key={i}
              to={gallery.url}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              {gallery.name}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};
