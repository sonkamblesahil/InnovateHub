import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white rounded-lg min-h-screen shadow p-4 sm:p-6 overflow-auto">
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
            <span className="text-green-600 text-sm font-medium">+23 today</span>
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

      {/* Extra Dashboard Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-8">
        {/* Placeholder for charts, tables, or widgets */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 h-48 flex items-center justify-center text-gray-400 text-sm">
          Chart / Graph Placeholder
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-200 h-48 flex items-center justify-center text-gray-400 text-sm">
          Table Placeholder
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-200 h-48 flex items-center justify-center text-gray-400 text-sm">
          Widget Placeholder
        </div>
      </div>
    </div>
  );
};

export default HomePage;
