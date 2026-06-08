import React from "react";
import styles from "./ActivitySection.module.css"
import AchievementCard from "./AchievementCard"
import ActivityChart from "./ActivityChart";
const ActivitySection = ({ data }) => {
  return (
    <>
      <div className={styles.bottomRow}>
        <AchievementCard />
        <ActivityChart/>
      </div>
    </>
  );
};

export default ActivitySection;
