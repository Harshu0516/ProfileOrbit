import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.profileCard}>
          <div className={styles.cardBanner}>
            <span className={styles.bannerText}>COMPETITIVE PROGRAMMER</span>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>🧑‍💻</div>
              <div className={styles.onlineDot}></div>
            </div>

            <div className={styles.profileName}>Harsh Pratap</div>

            <div className={styles.profileHandle}>
              @<span>harrr_sh</span> · since 2026
            </div>

            <p className={styles.profileBio}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              sit reprehenderit nemo? Aspernatur.
            </p>

            <div className={styles.profileMeta}>
              <div className={styles.metaItem}>
                <span>📍</span> Roorkee, India
              </div>

              <div className={styles.metaItem}>
                <span>🎓</span> COER · CSE
              </div>

              <div className={styles.metaItem}>
                <span>🔗</span> Harsh.dev
              </div>
            </div>

            <div className={styles.platforms}>
              <div className={styles.platformNameContainer}>
                <div className={styles.fPart}>
                  <div className={styles.dot}></div>
                  <div className={styles.platformName}>Leetcode</div>
                </div>
                <div className={styles.platformSolved}>697 Solved</div>
              </div>

              <div className={styles.platformNameContainer}>
                <div className={styles.fPart}>
                  <div className={styles.dot}></div>
                  <div className={styles.platformName}>Leetcode</div>
                </div>
                <div className={styles.platformSolved}>697 Solved</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProfileCard;
