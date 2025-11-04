import React from "react";

const InvestorStatCard = ({ title, value, change }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5">
      <h4 className="text-gray-600 text-sm mb-1">{title}</h4>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-green-600 text-sm font-medium mt-1">{change}</p>
    </div>
  );
};

export default InvestorStatCard;
