import React from "react";
import styles from"./QuickStats.module.css";
const QuickStats = () => {
  return (
    <>
    <div className={styles.heading}>
    <div className={styles.sectionTitle}>Quick Stats</div>
    <div className={styles.seperator}></div>
    </div>
      <div className={styles.grid4}>
        <div className={`${styles.statCard} ${styles.c1}`}>
          <span className={styles.statCardIcon}>🧩</span>
          <div className={styles.statCardValue}>1,284</div>
          <div className={styles.statCardDesc}>Problems Solved</div>
         
        </div>

        <div className={`${styles.statCard} ${styles.c2}`}>
          <span className={styles.statCardIcon}>⭐</span>
          <div className={styles.statCardValue}>2,145</div>
          <div className={styles.statCardDesc}>Current Rating</div>
         
        </div>

        <div className={`${styles.statCard} ${styles.c3}`}>
          <span className={styles.statCardIcon}>🏆</span>
          <div className={styles.statCardValue}>38</div>
          <div className={styles.statCardDesc}>Contests Participated</div>
          
        </div>

        <div className={`${styles.statCard} ${styles.c4}`}>
          <span className={styles.statCardIcon}>🔥</span>
          <div className={styles.statCardValue}>47</div>
          <div className={styles.statCardDesc}>Current Streak (days)</div>
          
        </div>
      </div>
    </>
  );
};

export default QuickStats;
