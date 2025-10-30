import React from "react";

const NewsPage = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Latest News</h1>
      <div className="space-y-6">
        {/* News articles */}
        <article className="border-b border-gray-200 pb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            News Title
          </h2>
          <p className="text-gray-600 mb-4">
            News article preview text goes here...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">October 30, 2025</span>
            <button className="text-blue-600 hover:text-blue-700">
              Read More →
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsPage;
