import React from 'react'
import styles from "./Dashboard.module.css"
import Welcome from "./Welcome/Welcome"
import QuickStats from "./Quick/QuickStats"
import PlatformOverview from "./PlatformOverview/PlatformOverview"

const Dashboard = () => {
  return (
    <>
    <div className={styles.dashboardPage}>
        <Welcome/>
        <QuickStats/>
        <PlatformOverview/>
    </div>
    </>
  )
}

export default Dashboard
