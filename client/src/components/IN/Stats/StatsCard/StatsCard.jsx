import { useContext, useState } from "react";
import styles from "./StatsCard.module.css";
import Platform from "./Platform/Platform";
import PlatformHeading from "./PlatformHeading/PltatformHeading";
import CodingStats from "./CodingStats/CodingStats";
import ActivitySection from "./Activity/ActivitySection";
import ProblemChart from "./ChartProblem/ProblemChart";
import { DataFromPlatform } from "../../../../store/LoggedData";

const StatsCard = () => {
  let {
    data,
    setData,
    activePlatform,
    setActivePlatform,
    handlePlatformChange,
  } = useContext(DataFromPlatform);

  return (
    <>
      <section className={styles.section}>
        <PlatformHeading data={data} />

        <Platform
          handlePlatformChange={handlePlatformChange}
          activePlatform={activePlatform}
        />
        <CodingStats data={data} />
        <ActivitySection />
        <ProblemChart data={data} />
      </section>
    </>
  );
};

export default StatsCard;

// const STATS_CONFIG = [
//   { key: "total",  label: "Total Solved", difficulty: "total",  solved: "totalSolved",  total: "totalQuestions" },
//   { key: "easy",   label: "Easy",         difficulty: "easy",   solved: "easySolved",   total: "totalEasy" },
//   { key: "medium", label: "Medium",       difficulty: "medium", solved: "mediumSolved", total: "totalMedium" },
//   { key: "hard",   label: "Hard",         difficulty: "hard",   solved: "hardSolved",   total: "totalHard" },
// ];

// const StatsCard = () => {
//   const username='harshdrax0516';
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(`https://leetcode-stats.tashif.codes/${username}`)
//     .then(r => r.json())
//     .then(setData);
//   }, [username]);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div className={styles.summaryRow}>
//       {STATS_CONFIG.map(({ key, label, solved, total }) => (
//         <div key={key} className={`${styles.statCard} ${styles[`statCard_${key}`]}`}>
//           <div className={styles.scLabel}>{label}</div>
//           <div className={styles.scValue}>{data[solved]}</div>
//           <div className={styles.scSub}>of {data[total]} on LeetCode</div>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default StatsCard
