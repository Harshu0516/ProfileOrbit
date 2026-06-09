import React from "react";
import styles from "./Auth.module.css";

const AuthDesc = () => {
  return (
    <>
      <div className={styles.leftSide}>
        <div className={styles.Info}>
          <div className={styles.logo}>PROFILE ORBIT</div>

          <div className={styles.tagLine}>
            "Code smarter. Track better. Grow faster."
          </div>

          <div className={styles.overview}>
            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dot1}`}></div>
              <div className={styles.fsc}>Multi-Platform Tracking</div>
            </div>

            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dot2}`}></div>
              <div className={styles.fsc}>Coding Analytics</div>
            </div>

            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dot3}`}></div>
              <div className={styles.fsc}>Achievement Tracking</div>
            </div>

            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dot4}`}></div>
              <div className={styles.fsc}>Performance Insights</div>
            </div>

            <div className={styles.dots}>
              <div className={`${styles.dot} ${styles.dot5}`}></div>
              <div className={styles.fsc}>DSA Sheet Progress</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthDesc;
