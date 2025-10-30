import React from "react";

const InvestorsPage = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Investors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Investor cards */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Investor Name
              </h3>
              <p className="text-sm text-gray-600">Investment Focus</p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">Investor bio and interests...</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorsPage;
