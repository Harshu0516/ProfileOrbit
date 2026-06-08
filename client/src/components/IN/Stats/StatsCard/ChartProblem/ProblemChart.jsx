import React, { useContext } from "react";
import styles from "./ProblemChart.module.css";
import DifficultyBar from "./DifficultyBar";
import { DataFromPlatform } from "../../../../../store/LoggedData";


const ProblemChart = ({ data }) => {
  
  let {DIFFICULTIES}=useContext(DataFromPlatform)

  

  
  return (
    <div className={styles.bottomRow}>
      <div className={styles.donutCard}>
        <div className={styles.prTitle}>Difficulty Breakdown</div>

        {DIFFICULTIES.map(
          ({ key, type, difficulty, labelClass, barClass, total }) => (
            <DifficultyBar
              key={key}
              type={type}
              barClass={barClass}
              labelClass={labelClass}
              solved={data.solved[difficulty]}
              total={data[total]}
            />
          ),
        )}
      </div>

      <div className={styles.badgeSection}></div>
    </div>
  );
};

export default ProblemChart;

// const ProblemChart = ({ data }) => {
//   const easyProgress = (data.solved.easy / data.totalEasy) * 100;

//   const mediumProgress = (data.solved.medium / data.totalMedium) * 100;

//   const hardProgress = (data.solved.hard / data.totalHard) * 100;
//   return (
//     <>
//       <div className={styles.bottomRow}>
//         <div className={styles.donutCard}>
//           <div className={styles.prTitle}>Difficulty Breakdown</div>

//           <div className={styles.diffBar}>
//             <div className={styles.diffTop}>
//               <span className={`${styles.diffName} ${styles.easyLabel}`}>
//                 Easy
//               </span>

//               <span className={styles.diffCount}>
//                 {data.solved.easy}/{data.totalEasy}
//               </span>
//             </div>

//             <div className={styles.barTrack}>
//               <div
//                 className={`${styles.barFill} ${styles.easyBar}`}
//                 style={{ width: `${easyProgress}%` }}
//               >
//                  </div>
//             </div>
//           </div>

//           <div className={styles.diffBar}>
//             <div className={styles.diffTop}>
//               <span className={`${styles.diffName} ${styles.mediumLabel}`}>
//                 Medium
//               </span>

//               <span className={styles.diffCount}>
//                 {data.solved.medium}/{data.totalMedium}
//               </span>
//             </div>

//             <div className={styles.barTrack}>
//               <div
//                 className={`${styles.barFill} ${styles.mediumBar}`}
//                 style={{ width: `${mediumProgress}%` }}
//               ></div>
//             </div>
//           </div>

//           <div className={styles.diffBar}>
//             <div className={styles.diffTop}>
//               <span className={`${styles.diffName} ${styles.hardLabel}`}>
//                 Hard
//               </span>

//               <span className={styles.diffCount}>
//                 {data.solved.hard}/{data.totalHard}
//               </span>
//             </div>

//             <div className={styles.barTrack}>
//               <div
//                 className={`${styles.barFill} ${styles.hardBar}`}
//                 style={{ width: `${hardProgress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div className={styles.badgeSection}></div>
//       </div>
//     </>
//   );
// };

// export default ProblemChart;
