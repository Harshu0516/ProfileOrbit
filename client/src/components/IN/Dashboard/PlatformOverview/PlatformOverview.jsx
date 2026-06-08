import React from "react";
import styles from "./PlatformOverview.module.css";

const PlatformOverview = () => {
  return (
    <>
      <div className={styles.heading}>
        <div className={styles.sectionTitle}>Quick Stats</div>
        <div className={styles.seperator}></div>
      </div>
      <div className={styles.grid4_2}>
        <div className={`${styles.platformCard} ${styles.leet}`}>
          <div className={styles.platHeader}>
            <div className={`${styles.platLogo} ${styles.leetLogo}`}>LC</div>
            <div>
              <div className={styles.platName}>LeetCode</div>
              <div className={styles.platSub}>Competitive coding platform</div>
            </div>
          </div>

          <div className={styles.platStats}>
            <div className={styles.platStat}>
              <div className={styles.v}>742</div>
              <div className={styles.k}>Problems</div>
            </div>

            <div className={styles.platStat}>
              <div className={styles.v}>1847</div>
              <div className={styles.k}>Rating</div>
            </div>
          </div>

          <div className={`${styles.platBadge} ${styles.gold}`}>
            🥇 Top 5% Globally
          </div>
        </div>

        <div className={`${styles.platformCard} ${styles.chef}`}>
          <div className={styles.platHeader}>
            <div className={`${styles.platLogo} ${styles.chefLogo}`}>CC</div>
            <div>
              <div className={styles.platName}>CodeChef</div>
              <div className={styles.platSub}>Competitive programming</div>
            </div>
          </div>

          <div className={styles.platStats}>
            <div className={styles.platStat}>
              <div className={styles.v}>321</div>
              <div className={styles.k}>Problems</div>
            </div>

            <div className={styles.platStat}>
              <div className={styles.v}>2145</div>
              <div className={styles.k}>Rating</div>
            </div>
          </div>

          <div className={`${styles.platBadge} ${styles.blue}`}>
            ⭐ 5 Star Coder
          </div>
        </div>

        <div className={`${styles.platformCard} ${styles.gfg}`}>
          <div className={styles.platHeader}>
            <div className={`${styles.platLogo} ${styles.gfgLogo}`}>GG</div>
            <div>
              <div className={styles.platName}>GeeksforGeeks</div>
              <div className={styles.platSub}>DSA & Interview Prep</div>
            </div>
          </div>

          <div className={styles.platStats}>
            <div className={styles.platStat}>
              <div className={styles.v}>184</div>
              <div className={styles.k}>Problems</div>
            </div>

            <div className={styles.platStat}>
              <div className={styles.v}>142</div>
              <div className={styles.k}>College Rank</div>
            </div>
          </div>

          <div className={`${styles.platBadge} ${styles.green}`}>
            🌟 Institute Topper
          </div>
        </div>

        <div className={`${styles.platformCard} ${styles.github}`}>
          <div className={styles.platHeader}>
            <div className={`${styles.platLogo} ${styles.githubLogo}`}>GH</div>
            <div>
              <div className={styles.platName}>GitHub</div>
              <div className={styles.platSub}>Open Source Contributions</div>
            </div>
          </div>

          <div className={styles.platStats}>
            <div className={styles.platStat}>
              <div className={styles.v}>1204</div>
              <div className={styles.k}>Commits</div>
            </div>

            <div className={styles.platStat}>
              <div className={styles.v}>47</div>
              <div className={styles.k}>Repos</div>
            </div>
          </div>

          <div className={`${styles.platBadge} ${styles.purple}`}>
            🔮 892 Contributions
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformOverview;
