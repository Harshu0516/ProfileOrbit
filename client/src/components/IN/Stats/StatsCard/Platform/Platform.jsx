import React from 'react'
import styles from"../StatsCard.module.css"

const Platform = ({handlePlatformChange ,activePlatform }) => {
  return (
    <>
       <div className={styles.tabBar}>
                <button
                  className={`${styles.tabActive} ${activePlatform === "leetcode" ? styles.active : ""}`}
                  onClick={() => handlePlatformChange("leetcode")}
                >
                  <div className={styles.dot}></div>
                  Leetcode
                </button>
                <button
                  className={`${styles.tabActive} ${activePlatform === "gfg" ? styles.active : ""}`}
                  onClick={() => handlePlatformChange("gfg")}
                >
                  <div className={styles.dot}></div>
                  GFG
                </button>
                <button
                  className={`${styles.tabActive} ${activePlatform === "code360" ? styles.active : ""}`}
                  onClick={() => handlePlatformChange("code360")}
                >
                  <div className={styles.dot}></div>
                  CODE360 STUDIO
                </button>
              </div>
    </>
  )
}

export default Platform
