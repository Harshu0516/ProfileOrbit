import styles from "./CodingStats.module.css";

const Count = ({ type, value, platform }) => {
  return (
    <div className={`${styles.statCard} ${styles[`statCard${type}`]}`}>
      <div className={`${styles.scLabel} ${styles[type]}`}>
        {type}
      </div>

      <div className={styles.scValue}>
        {value}
      </div>

      <div className={styles.scSub}>
        solved on {platform}
      </div>
    </div>
  );
};

export default Count;