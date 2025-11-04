import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <h3 className="font-semibold text-lg text-gray-900 mb-1">
          Senior Frontend Developer
        </h3>
        <p className="text-gray-500 text-sm mb-2">TechVentures Inc.</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          We are looking for an experienced frontend developer to build
          innovative web applications with React and modern frameworks.
        </p>

        <ul className="space-y-1 text-sm text-gray-700 mb-4">
          <li>📍 San Francisco, CA</li>
          <li>💼 Full-time</li>
          <li>💰 $120K – $160K</li>
          <li>⏰ 2 days ago</li>
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
            Engineering
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
            Remote
          </span>
        </div>
      </div>

      <button className="bg-black text-white rounded-lg py-2 text-sm font-medium hover:bg-gray-800 transition">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
