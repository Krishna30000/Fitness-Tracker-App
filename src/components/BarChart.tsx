// components/BarChart.tsx
"use client";

import { Bar } from "react-chartjs-2";

interface BarChartProps {
  data: number[];
  labels: string[];
  title: string;
}



const BarChart = ({ data, labels, title }: BarChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const, // Ensure the value matches allowed types
      },
    },
  };  

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
