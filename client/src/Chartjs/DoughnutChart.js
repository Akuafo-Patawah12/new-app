import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart({ chartData }) {
  const option={
    responsive:true
  }
  return <Doughnut options={option} data={chartData} />;
}

export default  DoughnutChart;