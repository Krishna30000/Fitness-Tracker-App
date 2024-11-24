// components/FriendFeed.tsx
import { Card } from "@/components/ui/card";

interface Friend {
  name: string;
  activity: string;
}

interface FriendFeedProps {
  friends: Friend[];
}

const FriendFeed = ({ friends }: FriendFeedProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Friend Activity</h3>
      <div className="space-y-2">
        {friends.map((friend, idx) => (
          <Card key={idx} className="flex items-center p-4 space-x-3">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
              {friend.name[0]}
            </div>
            <p className="text-sm">{friend.activity}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FriendFeed;
