import React, { useState } from "react";
import chatIcon from "../assets/icons/chat-svgrepo-com.svg";
import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  Users,
  Newspaper,
  MessageSquare,
  Handshake,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar items config
  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { label: "Jobs", icon: <Handshake size={20} />, path: "/jobs" },
    { label: "Projects", icon: <FolderKanban size={20} />, path: "/projects" },
    { label: "Investors", icon: <Users size={20} />, path: "/investors" },
    { label: "News", icon: <Newspaper size={20} />, path: "/news" },
    { label: "Messages", icon: <MessageSquare size={20} />, path: "/messages" },
  ];

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-white flex justify-between items-center shadow-sm px-4 md:px-8 z-50">
        {/* --- Hamburger Menu Icon (visible on small screens) / Logo (visible on larger screens) --- */}
        <div className="flex items-center">
          {/* Hamburger Menu Button - visible on small screens */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - hidden on small screens */}
          <h1 className="hidden md:flex text-blue-400 font-extrabold text-2xl">
            INNOVATEHUB
          </h1>
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center space-x-3 sm:space-x-6 ml-auto">
          {/* Chat Button */}
          <div
            onClick={() => navigate("/messages")}
            className="chat flex items-center hover:bg-gray-200 transition p-1 sm:px-3 rounded-lg cursor-pointer"
          >
            <img src={chatIcon} alt="chat-logo" className="w-10 h-10" />
            <h2 className="hidden sm:block ml-1 text-sm sm:text-base font-bold text-gray-800">
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-lg z-40 md:hidden overflow-y-auto">
            <ul className="px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  onClick={() => handleMenuItemClick(item.path)}
                  className={`flex items-center gap-3 cursor-pointer h-12 rounded-md p-3 transition-all duration-200
                  ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : "text-zinc-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  <span className="text-zinc-800">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NavBar;
