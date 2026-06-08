import React from "react";
import styles from "./Navbar.module.css";
// import "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
          <span className={`${styles.logoHex}`}></span>
          ProfileOrbit
        </div>
        <div className={`${styles.navLinks}`}>
          <li>
            <a href="/">FEATURES</a>
          </li>
          <li>
            <a href="/">DASHBOARD</a>
          </li>
          <li>
            <a href="/">DOCS</a>
          </li>
        </div>
        <div className={`${styles.navcta}`}>
          <a href="#" className={`${styles.btn} ${styles.btnOutline}`}>
            Sign In
          </a>
          <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
            Get Started
          </a>
        </div>

          
      </div>
    </>
  );
};

export default Navbar;
