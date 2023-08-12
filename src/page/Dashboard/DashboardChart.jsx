import { PieChart } from "@mui/x-charts";
import React from "react";

const DashboardChart = () => {
  const data = [
    { id: 0, value: 10, label: "Ward 1" },
    { id: 1, value: 15, label: "Ward 2" },
    { id: 2, value: 20, label: "Ward 3" },
  ];
  
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={600}
      height={350}
    />
  );
};

export default DashboardChart;
