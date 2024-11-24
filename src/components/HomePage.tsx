// pages/index.tsx
import ProgressRing from "@/components/ProgressRing";
import FriendFeed from "@/components/FriendFeed";

const Home = () => {
  const userData = {
    steps: 7500,
    calories: 1200,
    workouts: 2,
    goalSteps: 10000,
    goalCalories: 2000,
    goalWorkouts: 3,
  };

  const friends = [
    { name: "Grace", activity: "5,000 steps today 🚶‍♀️" },
    { name: "John", activity: "Burned 450 calories 🏋️‍♂️" },
    { name: "Sarah", activity: "Completed a 30-min yoga session 🧘‍♀️" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Hello, Edward!</h2>
          <p className="text-gray-500">Here’s your activity for today</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Settings
        </button>
      </div>

      {/* Progress Rings */}
      <div className="grid grid-cols-3 gap-4">
        <ProgressRing
          label="Steps"
          value={userData.steps}
          goal={userData.goalSteps}
        />
        <ProgressRing
          label="Calories"
          value={userData.calories}
          goal={userData.goalCalories}
        />
        <ProgressRing
          label="Workouts"
          value={userData.workouts}
          goal={userData.goalWorkouts}
        />
      </div>

      {/* Friend Feed */}
      <FriendFeed friends={friends} />
    </div>
  );
};

export default Home;
