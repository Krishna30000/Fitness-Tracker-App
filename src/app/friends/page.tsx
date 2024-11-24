"use client";

import ProgressRing from "@/components/ProgressRing";

interface Friend {
  name: string;
  steps: number;
  calories: number;
  workouts: number;
}

const friendsData: Friend[] = [
  {
    name: "Grace",
    steps: 7000, // Adjusted realistic steps
    calories: Math.round(7000 * 0.05), // Calories burned based on steps
    workouts: 1, // Realistic value
  },
  {
    name: "John",
    steps: 8500, // Adjusted realistic steps
    calories: Math.round(8500 * 0.05), // Calories burned based on steps
    workouts: 2, // Realistic value
  },
  {
    name: "Sophia",
    steps: 10000, // Adjusted realistic steps
    calories: Math.round(10000 * 0.05), // Calories burned based on steps
    workouts: 3, // Realistic value
  },
];

const FriendsList = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center">Friends Progress</h1>
      <h2 className="text-center text-gray-600">Viewing progress for: All Friends</h2>
      <div className="flex flex-col items-center space-y-4">
        {friendsData.map((friend) => (
          <div
            key={friend.name}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            style={{
              minHeight: "140px",
              maxWidth: "850px",
              width: "100%",
            }}
          >
            {/* Friend Name */}
            <h3 className="text-lg font-bold transition-all duration-300 hover:text-2xl">
              {friend.name}
            </h3>

            {/* Progress Rings */}
            <div className="flex space-x-8 items-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 hover:w-24 hover:h-24 transition-all duration-300">
                  <ProgressRing label="" value={friend.steps} goal={10000} />
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-700 hover:text-lg transition-all duration-300">
                  Steps
                </p>
                <p className="mt-1 text-xs text-gray-500">{friend.steps.toLocaleString()} / 10,000</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 hover:w-24 hover:h-24 transition-all duration-300">
                  <ProgressRing label="" value={friend.calories} goal={600} />
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-700 hover:text-lg transition-all duration-300">
                  Calories
                </p>
                <p className="mt-1 text-xs text-gray-500">{friend.calories} / 600</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 hover:w-24 hover:h-24 transition-all duration-300">
                  <ProgressRing label="" value={friend.workouts} goal={3} />
                </div>
                <p className="mt-1 text-sm font-semibold text-gray-700 hover:text-lg transition-all duration-300">
                  Workouts
                </p>
                <p className="mt-1 text-xs text-gray-500">{friend.workouts} / 3</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
