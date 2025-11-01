import React from "react";
import Trendingprojectlistcard from "../components/Trendingprojectlistcard";
import RecentActivityCard from "../components/RecentActivityCard";

const HomePage = () => {
  return (
    <div className="bg-gray-100  min-h-[calc(100vh-4rem)]  p-4 sm:p-6 overflow-auto">
      {/* Stats Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Funding */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-xl">$</span>
            </div>
            <span className="text-green-600 text-sm font-medium">+12.5%</span>
          </div>
          <h3 className="text-gray-500 text-sm">Total Funding</h3>
          <p className="text-2xl font-semibold mt-1">$2.4M</p>
        </div>

        {/* Active Projects */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 text-xl">📁</span>
            </div>
            <span className="text-green-600 text-sm font-medium">+8 new</span>
          </div>
          <h3 className="text-gray-500 text-sm">Active Projects</h3>
          <p className="text-2xl font-semibold mt-1">156</p>
        </div>

        {/* Total Investors */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 text-xl">👥</span>
            </div>
            <span className="text-green-600 text-sm font-medium">
              +23 today
            </span>
          </div>
          <h3 className="text-gray-500 text-sm">Total Investors</h3>
          <p className="text-2xl font-semibold mt-1">1,234</p>
        </div>

        {/* Success Rate */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-xl">📈</span>
            </div>
            <span className="text-green-600 text-sm font-medium">+5.2%</span>
          </div>
          <h3 className="text-gray-500 text-sm">Success Rate</h3>
          <p className="text-2xl font-semibold mt-1">68%</p>
        </div>
      </div>

      {/* Dashboard Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mt-8 min-h-0">
        {/* Trending Projects */}
        <div className="trendingprojects h-full lg:w-[70%] w-full bg-white rounded-lg shadow p-6">
          <div className="title">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              Trending Projects
            </h1>
            <p className="text-gray-500">Most popular projects this week</p>
          </div>

          <div className="projectlist">
            <Trendingprojectlistcard />
            <Trendingprojectlistcard />
            <Trendingprojectlistcard />
            <Trendingprojectlistcard />
            <Trendingprojectlistcard />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-[30%] w-full flex flex-col gap-6">
          {/* Quick Actions Section */}
          <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-2 hover:bg-blue-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h18M3 7l2 10h14l2-10M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                </svg>
                <span className="font-semibold" >Create New Project</span>
              </button>

              <button className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-2 hover:bg-blue-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5V4H2v16h5m10 0v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span className="font-semibold">Find Investors</span>
              </button>

              <button className="flex items-center gap-3 border border-gray-300 rounded-md px-4 py-2 hover:bg-blue-300 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h8m-8 4h5m5 6H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v13a2 2 0 01-2 2z" />
                </svg>
                <span className="font-semibold">Start Discussion</span>
              </button>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="recentactivity h-full">
            <RecentActivityCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
