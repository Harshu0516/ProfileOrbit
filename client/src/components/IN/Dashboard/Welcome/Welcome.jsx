import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <div className={styles.heroLeft}>
          <h1>
            Welcome back, <span>Harsh</span> 👋
          </h1>

          <p>
            <em>"Code is like humor."</em> When you have to explain it, it's
            bad. — Cory House
          </p>
        </div>

        <div className={styles.streakBadge}>
          <div className={styles.streakIcon}>🔥</div>

          <div className={styles.streakInfo}>   
            <span className={styles.streakNum}>47</span>
            <span className={styles.label}> Day Streak</span>
          </div>
        </div>
      </div>

      {/* Hero Stats */}

      <div className={styles.heroStats}>
        <div className={styles.heroStat}>
          <div className={`${styles.dot} ${styles.c}`}></div>

          <div>
            <div className={styles.val}>1,284</div>
            <div className={styles.lbl}>Problems Solved</div>
          </div>
        </div>

        <div className={styles.heroStat}>
          <div className={`${styles.dot} ${styles.g}`}></div>

          <div>
            <div className={styles.val}>2,145</div>
            <div className={styles.lbl}>Current Rating</div>
          </div>
        </div>

        <div className={styles.heroStat}>
          <div className={`${styles.dot} ${styles.p}`}></div>

          <div>
            <div className={styles.val}>38</div>
            <div className={styles.lbl}>Contests Done</div>
          </div>
        </div>

        <div className={styles.heroStat}>
          <div className={`${styles.dot} ${styles.o}`}></div>

          <div>
            <div className={styles.val}>Top 4%</div>
            <div className={styles.lbl}>Global Rank</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
