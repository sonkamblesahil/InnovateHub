import React from "react";

const RecentActivityCard = () => {
  // Sample activity data (replace later with API data)
  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "funded",
      project: "AI-Powered Smart Home",
      amount: "$5,000",
      time: "2 hours ago",
      isFunded: true,
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "created",
      project: "Eco-Friendly Packaging",
      time: "5 hours ago",
      isFunded: false,
    },
    {
      id: 3,
      user: "Mike Wilson",
      action: "funded",
      project: "Solar Water Purification",
      amount: "$2,500",
      time: "1 day ago",
      isFunded: true,
    },
    {
      id: 4,
      user: "Lisa Anderson",
      action: "commented on",
      project: "Medical Diagnosis Assistant",
      time: "1 day ago",
      isFunded: false,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
      <p className="text-sm text-gray-500 mb-4">Latest platform updates</p>

      {/* Activity List */}
      <div className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3 items-start">
            {/* Avatar placeholder */}
            <div className="w-3 h-3 bg-gray-300 rounded-full mt-1.5"></div>

            {/* Activity Content */}
            <div>
              <p className="text-gray-800 text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="font-medium">{activity.project}</span>
              </p>

              {/* Show amount only if funded */}
              {activity.isFunded && (
                <p className="text-green-600 text-sm font-semibold">
                  {activity.amount}
                </p>
              )}

              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
