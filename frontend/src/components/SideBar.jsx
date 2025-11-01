import React from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Newspaper,
  MessageSquare,
  Handshake,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-white w-64 md:w-56 sm:w-20 flex flex-col">
      {/* Sidebar Menu */}
      <ul className="px-4 pt-10 space-y-3 flex-1">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          onClick={() => navigate("/")}
        />
        <SidebarItem
          icon={<Handshake size={20} />}
          label="Jobs"
          onClick={() => navigate("/jobs")}
        />
        <SidebarItem
          icon={<FolderKanban size={20} />}
          label="Projects"
          onClick={() => navigate("/projects")}
        />
        <SidebarItem
          icon={<Users size={20} />}
          label="Investors"
          onClick={() => navigate("/investors")}
        />
        <SidebarItem
          icon={<Newspaper size={20} />}
          label="News"
          onClick={() => navigate("/news")}
        />
        <SidebarItem
          icon={<MessageSquare size={20} />}
          label="Messages"
          onClick={() => navigate("/messages")}
        />
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, label, onClick }) => {
  return (
    <li
      className="flex items-center gap-3 text-zinc-700 hover:text-blue-700 hover:bg-blue-100 cursor-pointer font-semibold h-10 rounded-md p-2 transition-all duration-200"
      onClick={onClick}
    >
      <span className="text-zinc-500">{icon}</span>
      {/* Hide text on small screens */}
      <span className="hidden sm:hidden md:inline">{label}</span>
    </li>
  );
};

export default Sidebar;
