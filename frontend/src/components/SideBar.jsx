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
    <div className="h-full w-full bg-white">
      <ul className="px-4 pt-10 space-y-4">
        <li
          className="flex items-center text-zinc-700 gap-2 hover:text-blue-700 hover:bg-blue-100 cursor-pointer font-bold h-10 rounded-md p-2"
          onClick={() => navigate("/")}
        >
          <LayoutDashboard size={20} className="text-zinc-500" /> Dashboard
        </li>
        <li
          className="flex items-center gap-2 text-zinc-700 hover:text-blue-700 hover:bg-blue-100 cursor-pointer font-bold h-10 rounded-md p-2"
          onClick={() => navigate("/projects")}
        >
          <FolderKanban size={20} className="text-zinc-500" /> Projects
        </li>
        <li
          className="flex items-center gap-2 text-zinc-700 hover:text-blue-700 hover:bg-blue-100 cursor-pointer font-bold h-10 rounded-md p-2"
          onClick={() => navigate("/investors")}
        >
          <Users size={20} className="text-zinc-500" /> Investors
        </li>
        <li
          className="flex items-center gap-2 text-zinc-700 hover:text-blue-700 hover:bg-blue-100 cursor-pointer font-bold h-10 rounded-md p-2"
          onClick={() => navigate("/news")}
        >
          <Newspaper size={20} className="text-zinc-500" /> News
        </li>
        <li
          className="flex items-center gap-2 text-zinc-700 hover:text-blue-700 hover:bg-blue-100 cursor-pointer font-bold h-10 rounded-md p-2"
          onClick={() => navigate("/messages")}
        >
          <MessageSquare size={20} className="text-zinc-500" /> Messages
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
