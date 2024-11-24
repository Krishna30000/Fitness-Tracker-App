// components/LineChart.tsx
"use client";

import { Line } from "react-chartjs-2";

interface LineChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const LineChart = ({ data, labels, title }: LineChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        fill: true,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
