import React from "react";
import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.info}>
          <ul>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <a href="/">
            <FaLinkedin />
          </a>
          <a href="/">
            <FaGithub />
          </a>
          <a href="/">
            <FaLinkedin />
          </a>
        </div>
        <div className={styles.copyright}>
          © 2026 ProfileOrbit, Inc. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
