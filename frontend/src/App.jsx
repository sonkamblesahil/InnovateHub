import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectPage.jsx";
import InvestorsPage from "./pages/InvestorsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex pt-16">
        <div className="hidden md:block w-[20vw] fixed h-[calc(100vh-4rem)]">
          <Sidebar />
        </div>
        <div className="w-full h-full md:ml-[20vw] p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
