import React from "react";

const InvestmentTrendsCard = () => {
  const trends = [
    { label: "Technology", percent: 35, color: "bg-blue-500" },
    { label: "Healthcare", percent: 25, color: "bg-green-500" },
    { label: "Green Energy", percent: 20, color: "bg-emerald-400" },
    { label: "Education", percent: 12, color: "bg-purple-500" },
    { label: "Other", percent: 8, color: "bg-gray-500" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-1">Investment Trends</h3>
      <p className="text-gray-500 text-sm mb-5">Popular categories</p>

      <div className="space-y-4 text-sm">
        {trends.map((item) => (
          <TrendBar
            key={item.label}
            label={item.label}
            percent={item.percent}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

const TrendBar = ({ label, percent, color }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="font-medium text-gray-800">{label}</span>
      <span className="text-gray-600">{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className={`${color} h-2.5 rounded-full`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);

export default InvestmentTrendsCard;
