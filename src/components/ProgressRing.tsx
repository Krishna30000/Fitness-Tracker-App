import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the styles

interface ProgressRingProps {
  label: string;
  value: number;
  goal: number;
}

const ProgressRing = ({ label, value, goal }: ProgressRingProps) => {
  const percentage = Math.round((value / goal) * 100);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
      <p className="mt-2 text-xs text-gray-500">{label}</p>
    </div>
  );
};

export default ProgressRing;
