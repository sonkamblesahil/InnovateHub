import React from "react";
import NewsCard from "../components/NewsCard";

const NewsPage = () => {
  return (
    <div className="newsPage bg-gray-100 lg:h-full flex flex-col p-4 ">
      {/* Filter Buttons */}
      <div className="flex items-center gap-2 md:gap-3 bg-gray-200 max-w-max rounded-2xl px-2 md:px-3 mb-4 font-semibold p-1 overflow-x-auto">
        {["All Updates", "Projects", "Funding", ].map((label) => (
          <button
            key={label}
            className="text-xs md:text-sm text-gray-600 hover:text-gray-900 hover:bg-white px-2 md:px-3 py-1 rounded-2xl whitespace-nowrap transition"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 flex-grow:1">
        {/* News List */}
        <div className="newsList w-full lg:w-[60%] bg-white rounded-2xl p-3 md:p-4 shadow-sm flex flex-col md:h-[74vh]  h-full ">
          {/* IMPORTANT: overflow-y-auto only on large screens */}
          <div className="newsItem flex-grow:1 pr-2 lg:overflow-y-auto">
            {/* News Cards */}
            {[...Array(10)].map((_, i) => (
              <NewsCard key={i} />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex rightSection w-full lg:w-[35%] flex-col gap-4 h-[74vh] ">
          {/* Trending Topics */}
          <div className="bg-white rounded-2xl p-4 shadow-sm flex-grow:1 overflow-y-auto">
            <h3 className="font-bold text-lg mb-3">Trending Topics</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-700">
                <span className="font-medium">1. #AI</span>
                <span className="text-gray-500">234 posts</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span className="font-medium">2. #Green Energy</span>
                <span className="text-gray-500">156 posts</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span className="font-medium">3. #Healthcare</span>
                <span className="text-gray-500">145 posts</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span className="font-medium">4. #Robotics</span>
                <span className="text-gray-500">98 posts</span>
              </li>
              <li className="flex justify-between text-gray-700">
                <span className="font-medium">5. #Education</span>
                <span className="text-gray-500">87 posts</span>
              </li>
            </ul>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl p-4 shadow-sm h-[30vh]">
            <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
            <p className="text-gray-600 text-sm">Don't miss these events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
