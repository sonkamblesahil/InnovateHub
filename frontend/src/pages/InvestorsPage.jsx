import React from "react";
import StatCard from "../components/InvestorStatCard";
import InvestorProfile from "../components/InvestorProfileCard";
import InvestmentTrendsCard from "../components/InvestmentTrendsCard";
import InvestorTipsCard from "../components/InvestorsTipsCard";
import TopInvestorsCard from "../components/TopInvestorsCard";

const InvestorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Investors</h1>
          <p className="text-gray-600 text-sm">
            Connect with investors interested in your innovation
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <StatCard title="Total Investors" value="1,234" change="+23 this week" />
        <StatCard title="Total Invested" value="$24.5M" change="+$2.1M this month" />
        <StatCard title="Active Investors" value="456" change="68% active rate" />
        <StatCard title="Avg Investment" value="$19.8K" change="per project" />
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-3">
          <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full">
            All Investors
          </button>
          <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-300">
            Most Active
          </button>
          <button className="bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:bg-gray-300">
            Following
          </button>
        </div>

        <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer w-full sm:w-auto">
          <option>All Industries</option>
          <option>Technology</option>
          <option>Healthcare</option>
          <option>Finance</option>
        </select>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Investor Profiles */}
        <div className="flex-1 space-y-4">
          <InvestorProfile />
          <InvestorProfile />
          <InvestorProfile />
          <InvestorProfile />
        </div>

        {/* Right Sidebar - Sticky */}
        <div className="w-full lg:w-[30%] space-y-6 lg:sticky lg:top-24 h-fit">
          <TopInvestorsCard />
          <InvestmentTrendsCard />
          <InvestorTipsCard />
        </div>
      </div>
    </div>
  );
};

export default InvestorsPage;
