import React from "react";

const InvestorTipsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-2">Investor Tips</h3>
      <p className="text-gray-600 text-sm mb-4">
        Boost your investment success with smart insights:
      </p>

      <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
        <li>Diversify your portfolio across multiple sectors.</li>
        <li>Track early-stage startups for high potential growth.</li>
        <li>Engage with founders to understand business strategy.</li>
        <li>Reinvest profits into emerging tech fields like AI.</li>
      </ul>
    </div>
  );
};

export default InvestorTipsCard;
