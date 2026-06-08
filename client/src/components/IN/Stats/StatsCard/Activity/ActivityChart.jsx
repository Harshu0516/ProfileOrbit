import React from "react";
import styles from "./ActivitySection.module.css";
const ActivityChart = () => {
  return (
    <>
     {/* HEATMAP CARD */}
      <div className={styles.heatmapCard}>
        <h3>Activity — Last 6 Months</h3>

        <div className={styles.heatGrid}>
          {Array.from({ length: 182 }).map((_, i) => {
            const levels = ["", "l1", "l2", "l3", "l4"];
            const random =
              levels[Math.floor(Math.random() * levels.length)];

            return (
              <div
                key={i}
                className={`${styles.heatCell} ${
                  random ? styles[random] : ""
                }`}
              />
            );
          })}
        </div>

        <div className={styles.heatFooter}>
          <div className={styles.heatMonths}>
            <span>Dec</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
          </div>

          <div className={styles.heatScale}>
            Less

            <div className={styles.scaleCell}></div>
            <div
              className={`${styles.scaleCell} ${styles.l1}`}
            ></div>
            <div
              className={`${styles.scaleCell} ${styles.l2}`}
            ></div>
            <div
              className={`${styles.scaleCell} ${styles.l3}`}
            ></div>
            <div
              className={`${styles.scaleCell} ${styles.l4}`}
            ></div>

            More
          </div>
        </div>
      </div>

    </>
  );
};

export default ActivityChart;
