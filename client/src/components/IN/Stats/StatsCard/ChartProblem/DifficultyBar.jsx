import React from "react";
import styles from "./ProblemChart.module.css";

const DifficultyBar = ({ labelClass, barClass, type, total, solved }) => {
  const progress = (solved / total) * 100;
  return (
    <>
      <div className={styles.diffBar}>
        <div className={styles.diffTop}>
          <span className={`${styles.diffName} ${styles[labelClass]}`}>{type}</span>

          <span className={styles.diffCount}>
            {solved}/{total}
          </span>
        </div>

        <div className={styles.barTrack}>
          <div
            className={`${styles.barFill} ${styles[barClass]}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default DifficultyBar;
