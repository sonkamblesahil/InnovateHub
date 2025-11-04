import React from "react";
import JobCard from "../components/JobCard";

const JobPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-8 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Openings</h1>
          <p className="text-gray-600 text-sm">
            Join innovative companies and grow your career
          </p>
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
          + Post a Job
        </button>
      </div>

      {/* Filter Buttons + Dropdowns */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Job Type Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full">
            All Jobs
          </button>
          <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-300">
            Full-time
          </button>
          <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-300">
            Part-time
          </button>
          <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-300">
            Contract
          </button>
          <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-300">
            Remote
          </button>
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400 cursor-pointer w-full sm:w-auto">
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Design</option>
            <option>Product</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400 cursor-pointer w-full sm:w-auto">
            <option>Most Recent</option>
            <option>Highest Salary</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobPage;
