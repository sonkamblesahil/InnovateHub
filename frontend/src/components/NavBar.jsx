import React from "react";
import chatIcon from "../assets/icons/chat-svgrepo-com.svg";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white flex justify-between items-center shadow-sm px-4 md:px-8 z-50">
      {/* --- Logo (hidden on small screens) --- */}
      <div className=" lg:flex md:flex items-center justify-center">
        <h1 className=" text-blue-400 font-extrabold text-2xl md:text-2xl ">
          INNOVATEHUB
        </h1>
      </div>

      {/* --- Right Section --- */}
      <div className="flex items-center space-x-3 sm:space-x-6 ml-auto">
        {/* Chat Button */}
        <div className="chat flex items-center  hover:bg-gray-200 transition p-1 sm:px-3 rounded-lg cursor-pointer">
          <img
            src={chatIcon}
            alt="chat-logo"
            className="w-10 h-10"
          />
          <h2 className=" hidden sm:block ml-1 text-sm sm:text-base font-bold text-gray-800">
            Messages
          </h2>
        </div>

        {/* Profile Section */}
        <div className="profile flex items-center hover:bg-gray-200 transition p-1 sm:px-3 rounded-lg cursor-pointer">
         
          <div className="bg-black h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden">
            <img
              src="/assets/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
