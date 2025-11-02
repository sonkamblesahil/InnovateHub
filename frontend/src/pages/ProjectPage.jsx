import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const ProjectPage = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Filter and Sort Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center bg-gray-300 rounded-3xl p-1 gap-2 sm:gap-3">
          <button className="px-3 py-2 bg-gray-50 rounded-full text-sm font-medium" >
            All Projects
          </button>
          <button className="px-3 py-2 text-sm hover:bg-gray-50 rounded-full">
            Active
          </button>
          <button className="px-3 py-2 text-sm hover:bg-gray-50 rounded-full">
            Funded
          </button>
          <button className="px-3 py-2 text-sm hover:bg-gray-50 rounded-full">
            My Projects
          </button>
        </div>

        {/* Sort & Category Filters */}
        <div className="flex flex-row items-center gap-2 sm:gap-3">
        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400 cursor-pointer w-full sm:w-auto">
  <option>All Categories</option>
  <option>Technology</option>
  <option>Healthcare</option>
  <option>Green Energy</option>
  <option>Education</option>
</select>


         <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400 cursor-pointer w-full sm:w-auto">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Ending Soon</option>
          </select>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectPage;
