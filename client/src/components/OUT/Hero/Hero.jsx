import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.leftSide}>
          <h1>Track Your Coding Journey</h1>

          <p>Analyze your coding progress across platforms.</p>

          <div className={styles.buttonInfo}>
            <button className={`${styles.btn} ${styles.btnBlack}`}>
              View Dashboard
            </button>

            <button className={`${styles.btn} ${styles.btnColor}`}>
              Get Started
            </button>
          </div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.codeFloatInner}>
            <div className={styles.codeTopbar}>
              <span className={`${styles.dot} ${styles.d1}`}></span>
              <span className={`${styles.dot} ${styles.d2}`}></span>
              <span className={`${styles.dot} ${styles.d3}`}></span>

              <span className={styles.codeFname}>dashboard.js</span>
            </div>

            <pre className={styles.pre}>
              <span className={styles.cm}>// Initialize dashboard</span>
              {"\n\n"}
              <span className={styles.kw}>import</span> {"{"}{" "}
              <span className={styles.va}>ProfileOrbit</span> {"}"}{" "}
              <span className={styles.kw}>from</span>{" "}
              <span className={styles.str}>'@Orbit/sdk'</span>
              {"\n\n"}
              <span className={styles.kw}>const</span>{" "}
              <span className={styles.va}>Profile</span> ={" "}
              <span className={styles.kw}>new</span>{" "}
              <span className={styles.fn}>ProfileOrbit</span>({"{"}
              {"\n  "}project: <span className={styles.str}>'my-app'</span>,
              {"\n  "}env: <span className={styles.str}>'production'</span>,
              {"\n  "}watch: <span className={styles.num}>true</span>
              {"\n"}
              {"}"}){"\n\n"}
              <span className={styles.va}>Profie</span>.
              <span className={styles.fn}>deploy</span>().
              <span className={styles.fn}>then</span>(
              <span className={styles.va}>res</span> =&gt; {"{"}
              {"\n  "}
              <span className={styles.va}>console</span>.
              <span className={styles.fn}>log</span>(
              <span className={styles.str}>`✓ deployed`</span>){"\n"}
              {"}"})
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
