import React from "react";

const InvestorRank = ({ rank, name, projects, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-700 font-semibold rounded-full text-xs">
          {rank}
        </span>
        <div>
          <p className="text-gray-900 font-medium">{name}</p>
          <p className="text-gray-500 text-xs">{projects} projects</p>
        </div>
      </div>
      <p className="font-medium text-gray-700">{amount}</p>
    </div>
  );
};

export default InvestorRank;
