import React, { useState } from "react";
import { createContext } from "react";
import { codingStats } from "../data/dummy";


export const DataFromPlatform = createContext();

const LoggedData = ({ children }) => {
  const [data, setData] = useState(codingStats.leetcode);
  const [activePlatform, setActivePlatform] = useState("leetcode");

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
    setData(codingStats[platform]);
  };

  let value = {
    CONFIG,
    DIFFICULTIES,
    data,
    setData,
    activePlatform,
    setActivePlatform,
    handlePlatformChange,
  };

  return (
    <>
      <DataFromPlatform.Provider value={value}>
        {children}
      </DataFromPlatform.Provider>
    </>
  );
};

export default LoggedData;

const CONFIG = [
  {
    key: "total",
    type: "Total",
    difficulty: "total",
  },
  {
    key: "easy",
    type: "Easy",
    difficulty: "easy",
  },
  {
    key: "medium",
    type: "Medium",
    difficulty: "medium",
  },
  {
    key: "hard",
    type: "Hard",
    difficulty: "hard",
  },
];

const DIFFICULTIES = [
  {
    key: "easy",
    type: "Easy",
    difficulty: "easy",
    total: "totalEasy",
    labelClass: "easyLabel",
    barClass: "easyBar",
  },
  {
    key: "medium",
    type: "Medium",
    difficulty: "medium",
    total: "totalMedium",
    labelClass: "mediumLabel",
    barClass: "mediumBar",
  },
  {
    key: "hard",
    type: "Hard",
    difficulty: "hard",
    total: "totalHard",
    labelClass: "hardLabel",
    barClass: "hardBar",
  },
];
