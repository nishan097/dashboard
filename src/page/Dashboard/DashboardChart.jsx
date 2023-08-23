import { PieChart } from "@mui/x-charts";
import React from "react";

const DashboardChart = () => {
  const data = [
    { id: 0, value: 10, label: "वडा १ " },
    { id: 1, value: 15 , label: "वडा २" },
    { id: 2, value: 20 , label: "वडा ३" },
  ];
  
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={700}
      height={450}
    />
  );
};

export default DashboardChart;
