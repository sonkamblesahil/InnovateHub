import React from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Newspaper,
  MessageSquare,
  Handshake,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar items config (simplifies JSX)
  const menuItems = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { label: "Jobs", icon: <Handshake size={20} />, path: "/jobs" },
    { label: "Projects", icon: <FolderKanban size={20} />, path: "/projects" },
    { label: "Investors", icon: <Users size={20} />, path: "/investors" },
    { label: "News", icon: <Newspaper size={20} />, path: "/news" },
    { label: "Messages", icon: <MessageSquare size={20} />, path: "/messages" },
  ];

  return (
    <div className="h-full bg-white  flex flex-col border-r border-gray-200 shadow-sm">
      {/* Sidebar Menu */}
      <ul className="px-4 pt-10 space-y-2 flex-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          />
        ))}
      </ul>
    </div>
  );
};

// Reusable Item Component
const SidebarItem = ({ icon, label, active, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer h-10 rounded-md p-2 transition-all duration-200
      ${
        active
          ? "bg-blue-100 text-blue-700 font-semibold"
          : "text-zinc-700 hover:text-blue-700 hover:bg-blue-50"
      }`}
    >
      <span className="text-zinc-800">{icon}</span>
      {/* Hide text on small screens (icons only) */}
      <span className="hidden md:inline">{label}</span>
    </li>
  );
};

export default Sidebar;
