import React from "react";
import { Clock } from "lucide-react";

const TrendingProjectListCard = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-3 mt-4 hover:shadow-md transition-all">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=200&q=80"
        alt="project_image"
        className="h-20 w-20 rounded-lg object-cover"
      />

      {/* Content */}
      <div className="flex flex-col w-full">
        {/* Title and Category */}
        <div className="flex justify-between items-start">
          <div>
            <p className="font-semibold text-gray-900">AI-Powered Smart Home System</p>
            <p className="text-sm text-gray-500">by Sarah Johnson</p>
          </div>
          <span className="text-xs px-3 py-1 rounded-lg bg-blue-100 text-blue-700 font-medium">
            Technology
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>

        {/* Stats */}
        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <p>$85K of $100K</p>
          <div className="flex items-center gap-4">
            <p>234 backers</p>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              12 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProjectListCard;
