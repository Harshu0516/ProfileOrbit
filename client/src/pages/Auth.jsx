import React, { useState } from "react";
import styles from "../components/Authentication/Auth.module.css";
import AuthDesc from "../components/Authentication/AuthDesc";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

const Auth = () => {
  const [login, setLogin] = useState("true");

  return (
    <>
      <div className={styles.conatiner}>
        <AuthDesc />

        <div className={styles.rightSide}>
          <div className={styles.toogle}>
            <button
              className={`${styles.modeBtn} ${login ? styles.active : ""}`}
              id="loginBtn"
              onClick={() => setLogin(true)}
            >
              Login
            </button>
            <button
              className={`${styles.modeBtn} ${!login ? styles.active : ""}`}
              id="loginBtn"
              onClick={() => setLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {login ? (
            <Login setLogin={setLogin} />
          ) : (
            <SignUp setLogin={setLogin} />
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
