import React from "react";
import { MessageCircle, UserPlus, MapPin } from "lucide-react";

const InvestorProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="Investor Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Robert Anderson</h3>
            <p className="text-sm text-gray-600">
              Venture Capitalist at TechVentures Capital
            </p>
            <p className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin size={14} className="mr-1" /> San Francisco, CA
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 hover:bg-gray-50">
            <MessageCircle size={14} /> Message
          </button>
          <button className="bg-black text-white rounded-lg px-3 py-1.5 text-sm flex items-center gap-1 hover:bg-gray-800">
            <UserPlus size={14} /> Follow
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        Focused on early-stage technology startups with strong technical teams.
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
          Technology
        </span>
        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
          AI
        </span>
        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
          Healthcare
        </span>
      </div>

      <div className="border-t border-gray-200 pt-4 grid grid-cols-3 text-sm text-gray-700">
        <div>
          <p className="text-gray-500">Investments</p>
          <p className="font-medium">34 projects</p>
        </div>
        <div>
          <p className="text-gray-500">Total Invested</p>
          <p className="font-medium">$2.5M</p>
        </div>
        <div>
          <p className="text-gray-500">Success Rate</p>
          <p className="text-green-600 font-medium">↑ 72%</p>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfileCard;
