import React from "react";
import styles from "./Navbar.module.css";
// import "./Navbar.module.css";

const Navbar = ({selectedTab, setSelectedTab}) => {
  const navItems = ["Dashboard", "Profile", "DSA Sheets"];
  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
          <span className={`${styles.logoHex}`}></span>
          ProfileOrbit
        </div>
            <ul className={styles.navLinks}>
        {navItems.map((item) => (
          <li
            key={item}
            style={{
            color: selectedTab === item ? "#00d4ff" : "white",}}
            onClick={() => setSelectedTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default Navbar;
