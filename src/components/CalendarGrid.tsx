import ProgressRing from "@/components/ProgressRing"; // Ensure this path is correct

interface CalendarGridProps {
  data: { day: string; progress: number }[]; // Example: [{ day: "Mon", progress: 75 }]
}

const CalendarGrid = ({ data }: CalendarGridProps) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <p className="text-sm font-medium">{item.day}</p>
          <ProgressRing label={item.day} value={item.progress} goal={100} />
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
