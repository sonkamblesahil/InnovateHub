import React from "react";
import InvestorRank from "./InvestorRank";

const TopInvestorsCard = () => {
  const topInvestors = [
    { name: "Robert Anderson", projects: "34", amount: "$2.5M", rank: 1 },
    { name: "David Martinez", projects: "42", amount: "$3.2M", rank: 2 },
    { name: "Michael Chen", projects: "31", amount: "$2.8M", rank: 3 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">
        Top Investors
        <span className="block text-gray-500 text-sm font-normal">
          Most active this month
        </span>
      </h3>

      <div className="space-y-4 text-sm">
        {topInvestors.map((inv) => (
          <InvestorRank
            key={inv.rank}
            name={inv.name}
            projects={inv.projects}
            amount={inv.amount}
            rank={inv.rank}
          />
        ))}
      </div>
    </div>
  );
};

export default TopInvestorsCard;
