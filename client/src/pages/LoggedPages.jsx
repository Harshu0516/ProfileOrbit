import React, {useState } from "react";
import Navbar from "../components/Navbar2/Navbar";
import Footer from "../components/Footer/Footer";

import DashboardInfo from "../components/IN/Dashboard/Dashboard.jsx";
import Stats from "../components/IN/Stats/Stats.jsx";
import DSA_Sheets from "../components/IN/DSA_SHEETS/Sheet.jsx";

import LoggedData from "../store/LoggedData.jsx";

import "../App.css"


const LoggedPages = () => {
const [selectedTab, setSelectedTab] = useState("Dashboard");

 const tabs = {
    Dashboard: <DashboardInfo />,
    Profile: <Stats/>,
    "DSA Sheets": <DSA_Sheets />,
  };
  return (
    <>

      <LoggedData>  
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {tabs[selectedTab]}
      <Footer />
      </LoggedData>
    </>
  );
};

export default LoggedPages;
