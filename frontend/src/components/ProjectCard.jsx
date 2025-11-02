import React from "react";

const ProjectCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src="https://picsum.photos/1200/800"
          alt="Project"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          AI-Powered Smart Home System
        </h3>
        <p className="text-gray-600 mb-3 text-sm">
          Revolutionary AI system that learns your habits and optimizes your
          home environment.
        </p>
        <p className="text-sm text-gray-500 mb-3">by Sarah Johnson</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div
            className="bg-black h-2 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>

        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <span className="text-black font-semibold">$85K raised</span>
          <span>85%</span>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>234 backers</span>
          <span>12 days</span>
        </div>

        <button className=" rounded-2xl w-full py-2 bg-black text-white hover:bg-zinc-700 font-medium">
          Back This Project
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
