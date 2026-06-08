import React from "react";
import styles from "./PlatformHeading.module.css"
const PltatformHeading = ({data}) => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className={styles.title}>
          Coding
          <span className={styles.titleStats}> {data.label} Stats</span>
        </div>
      </div>
    </>
  );
};

export default PltatformHeading;
