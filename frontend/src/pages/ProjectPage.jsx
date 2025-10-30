import React from "react";

const ProjectPage = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Project Title
          </h3>
          <p className="text-gray-600 mb-4">Project description goes here...</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-600">Technology</span>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
