import React from "react";
import styles from "./Auth.module.css";

const Login = ({ setLogin }) => {
  return (
    <>
      <div className={styles.logins}>
        <div className={styles.headers}>
          <div className={styles.title}>Welcome back</div>
          <div className={styles.subtitle}>// your stats await</div>
        </div>
      </div>

      <form action="">
        <div className={styles.formFields}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Email</label>
            <input
              className={styles.fieldInput}
              type="email"
              placeholder="you@example.com"
              name="email"
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>Password</label>

            <input
              className={styles.fieldInput}
              type="password"
              placeholder="••••••••"
              name="password"
              required
            />
          </div>

          <button
            className={styles.submitBtn}
            type="button"
            onClick={() => console.log("Butoon inside from Login")}
          >
            <span>Login To PO</span>
          </button>
        </div>
      </form>

      <div className={styles.formFooter}>
        <div className={styles.footerLine}></div>
        <div className={styles.footerText}>no account?</div>
        <a className={styles.footerLink} onClick={() => setLogin(false)}>
          sign up →
        </a>

        <div className={styles.footerLine}></div>
      </div>

      <div>
        <div className={styles.typeLabel}>
          aggregate your competitive programming across
        </div>
        <div className={styles.platformBadges}>
          <span className={`${styles.badge} ${styles.lc}`}>LEETCODE</span>
          <span className={`${styles.badge} ${styles.gfg}`}>GFG</span>
          <span className={`${styles.badge} ${styles.code360}`}>CODE360</span>
          <span className={`${styles.badge} ${styles.chef}`}>CODECHEF</span>
          <span className={`${styles.badge} ${styles.git}`}>GITHUB</span>
        </div>
      </div>
    </>
  );
};

export default Login;
