import React from "react";
import styles from "./Auth.module.css";

const SignUp = ({ setLogin }) => {
  return (
    <>
      <div className={styles.logins}>
        <div className={styles.headers}>
          <div className={styles.title}>Join ProfileOrbit</div>
          <div className={styles.subtitle}>// track your grind, everywhere</div>
        </div>
      </div>

      <form action="">
        <div className={styles.formFields}>
          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>First Name</label>
              <input
                className={styles.fieldInput}
                type="text"
                placeholder="Enter Your First Name"
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel}>Last Name</label>
              <input
                className={styles.fieldInput}
                type="text"
                placeholder="Enter Your Last Name"
              />
            </div>
          </div>

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
            onClick={() => console.log("Buton inside from SignIn")}
          >
            <span>Create ProfileOrbit Account</span>
          </button>
        </div>
      </form>

      <div className={styles.formFooter}>
        <div className={styles.footerLine}></div>
        <div className={styles.footerText}>already have one?</div>
        <a className={styles.footerLink} onClick={() => setLogin(true)}>
          login →
        </a>
        <div className={styles.footerLine}></div>
      </div>
    </>
  );
};

export default SignUp;
