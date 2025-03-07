import React from "react";

const RecentActivityCard = () => {
  const activities = [];

  return (
    <div className="bg-gradient-to-r from-cDarkBlue to-CPurple rounded-lg font-inter shadow-md p-6">
      <h2 className="text-xl font-semibold text-cWhite mb-4">
        Recent Activity
      </h2>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {activity.user.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                {activity.user}
              </p>
              <p className="text-xs text-gray-500">{activity.action}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivityCard;
