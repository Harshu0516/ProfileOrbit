import React from "react";
import styles from "./Stats.module.css";
import ProfileCard from './ProfileCard/ProfileCard'
import StatsCard from './StatsCard/StatsCard'


const Stats = () => {
  return (
    <main className={styles.main}>
      <ProfileCard/>
      <StatsCard/>
    </main>
  );
};

export default Stats;
