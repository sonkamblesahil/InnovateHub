import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectPage.jsx";
import InvestorsPage from "./pages/InvestorsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import MessagePage from "./pages/MessagePage.jsx";

function App() {
  return (
    <div className="maindiv bg-gray-100 overflow-x-hidden">
      {/* Fixed Top Navbar */}
      <NavBar />

      <div className="flex pt-16">
        {/* Fixed Sidebar (visible on md and up) */}
        <div className="hidden md:block w-[18vw] fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-sm">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div
          className="
            flex-1 
            ml-0 
            md:ml-[18vw] 
            p-4 
            min-h-[calc(100vh-4rem)] 
            overflow-y-auto 
            lg:overflow-y-visible
          "
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/messages" element={<MessagePage/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
