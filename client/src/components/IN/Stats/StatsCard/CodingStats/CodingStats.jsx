import React, { useContext } from "react";
import styles from "./CodingStats.module.css";
import Count from "./Count";
import { DataFromPlatform } from "../../../../../store/LoggedData";

const CodingStats = ({data}) => {


  let {CONFIG}=useContext(DataFromPlatform);
  return (
    <>
      <div className={styles.summaryRow}>
        {CONFIG.map(({ key, type, difficulty }) => (
          <Count
            key={key}
            type={type}
            value={data.solved[difficulty]}
            platform={data.label}
          />
        ))}
      </div>
    </>
  );
};

export default CodingStats;

/*
<div className={`${styles.statCard} ${styles.statCardTotal}`}>
          <div className={`${styles.scLabel} ${styles.Total}`}>Total</div>

          <div className={styles.scValue}>{data.solved.total}</div>

          <div className={styles.scSub}>solved on {data.label}</div>
        </div>

        <div className={`${styles.statCard} ${styles.statCardEasy}`}>
          <div className={`${styles.scLabel} ${styles.Easy}`}>Easy</div>

          <div className={styles.scValue}>{data.solved.easy}</div>

          <div className={styles.scSub}>solved on {data.label}</div>
        </div>

        <div className={`${styles.statCard} ${styles.statCardMedium}`}>
          <div className={`${styles.scLabel} ${styles.Medium}`}>Medium</div>

          <div className={styles.scValue}>{data.solved.medium}</div>

          <div className={styles.scSub}>solved on {data.label}</div>
        </div>

        <div className={`${styles.statCard} ${styles.statCardHard}`}>
          <div className={`${styles.scLabel} ${styles.Hard}`}>Hard</div>

          <div className={styles.scValue}>{data.solved.hard}</div>

          <div className={styles.scSub}>solved on {data.label}</div>
        </div>

*/
