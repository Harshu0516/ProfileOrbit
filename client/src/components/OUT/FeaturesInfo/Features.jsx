import React from "react";
import styles from "./Features.module.css";
// import bg from '../assets/bg.png'

import { GiProgression } from "react-icons/gi";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Features</h1>
      </div>

      <div className={styles.features}>
        <div className={styles.box}>
          <div className="icon">
            <GiProgression />
          </div>

          <div className={styles.featuresHead}>Track Progress</div>

          <div className={styles.featuresDesc}>Execute snippets in 30+ languages instantly. Real-time output, stdin support, and persistent environment variables.</div>
        </div>
        <div className={styles.box}>
          <div className="icon">
            <GiProgression />
          </div>

          <div className={styles.featuresHead}>Track Progress</div>

          <div className={styles.featuresDesc}>Context-aware suggestions, automated refactoring, and intelligent debugging — right inside your workflow.</div>
        </div>
        <div className={styles.box}>
          <div className="icon">
            <GiProgression />
          </div>

          <div className={styles.featuresHead}>Track Progress</div>

          <div className={styles.featuresDesc}>Automated test and deployment pipelines with GitHub, GitLab, or Bitbucket integration out of the box.</div>
        </div>

        <div className={styles.box}>
          <div className="icon">
            <GiProgression />
          </div>

          <div className={styles.featuresHead}>Track Progress</div>

          <div className={styles.featuresDesc}>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque officiis consequatur dolorum. Inventore esse vitae similique libero quos hic!
          </div>
        </div>

        <div className={styles.box}>
          <div className="icon">
            <GiProgression />
          </div>

          <div className={styles.featuresHead}>Track Progress</div>

          <div className={styles.featuresDesc}>Shared workspaces, inline code reviews, and real-time pair programming — built for async-first teams.</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
