import React from "react";
import styles from "./ActivitySection.module.css";
const AchievementCard = () => {
  return (
    <>
      {/* DONUT CARD */}
      <div className={styles.activityInfo}>

        <div className={styles.extraCard}>
          <div className={`${styles.extraIcon} ${styles.fire}`}>🔥</div>

          <div>
            <div className={styles.extraLabel}>Current Streak</div>

            <div className={styles.extraVal}>
              34 days
            </div>
          </div>
        </div>

        <div className={styles.extraCard}>
          <div className={`${styles.extraIcon} ${styles.trophy}`}>🏆</div>

          <div>
            <div className={styles.extraLabel} id="ex-contest-label">
              Contests
            </div>

            <div className={styles.extraVal} id="ex-contest">
              28 joined
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementCard;
