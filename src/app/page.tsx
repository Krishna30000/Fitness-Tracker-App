"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import ProgressRing from "@/components/ProgressRing";
import LineChart from "@/components/LineChart";
import CalendarGrid from "@/components/CalendarGrid";
import BarChart from "@/components/BarChart";

// Updated realistic data
const walkingData = [500, 700, 800, 1200, 1000, 600, 400, 700, 1000, 800]; // Total: 7700 steps
const sleepData = [6, 7, 8, 6, 5, 7, 8]; // Weekly sleep hours
const weeklyProgress = [
  { day: "Mon", progress: 80 },
  { day: "Tue", progress: 70 },
  { day: "Wed", progress: 90 },
  { day: "Thu", progress: 60 },
  { day: "Fri", progress: 85 },
  { day: "Sat", progress: 50 },
  { day: "Sun", progress: 95 },
];

// Calories burned calculation (approx. 0.05 per step)
const totalSteps = walkingData.reduce((a, b) => a + b, 0); // Total steps: 7700
const caloriesBurned = Math.round(totalSteps * 0.05); // Approx. 385 calories

const Home = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-4">My Progress</h1>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl">
        {/* Progress Rings */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <ProgressRing label="Steps" value={totalSteps} goal={10000} />
            <p className="mt-2 text-sm font-bold text-gray-700">
              {totalSteps.toLocaleString()} / 10,000 Steps
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <ProgressRing label="Calories" value={caloriesBurned} goal={600} />
            <p className="mt-2 text-sm font-bold text-gray-700">
              {caloriesBurned} / 600 Calories Burned
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <ProgressRing label="Workouts" value={2} goal={3} />
            <p className="mt-2 text-sm font-bold text-gray-700">
              2 / 3 Workouts
            </p>
          </div>
        </div>

        {/* Walking Patterns */}
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Walking Patterns</h2>
          <BarChart
            data={walkingData}
            labels={Array.from({ length: walkingData.length }, (_, i) => `${i}h`)}
            title="Hourly Steps"
          />
          <p className="mt-2 text-sm font-semibold text-gray-700">
            Total Steps: {totalSteps.toLocaleString()}
          </p>
        </div>

        {/* Sleep Patterns */}
        <div className="col-span-1 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Sleep Patterns</h2>
          <LineChart
            data={sleepData}
            labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
            title="Sleep Hours"
          />
          <p className="mt-2 text-sm font-semibold text-gray-700">
            Average Sleep: {Math.round((sleepData.reduce((a, b) => a + b, 0) / sleepData.length) * 10) / 10} hrs
          </p>
        </div>

        {/* Weekly Overview */}
        <div className="col-span-3 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Weekly Overview</h2>
          <CalendarGrid data={weeklyProgress} />
        </div>
      </div>
    </div>
  );
};

export default Home;
