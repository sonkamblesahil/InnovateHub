import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectPage.jsx";
import InvestorsPage from "./pages/InvestorsPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";

function App() {
  return (
    <div className="maindiv min-h-screen bg-gray-100 overflow-x-hidden">
      <NavBar />
      <div className="flex pt-16">
        <div className="hidden md:block w-[15vw] fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-auto">
          <Sidebar />
        </div>
        <div className="w-full min-h-[calc(100vh-4rem)] md:ml-[15vw] p-4">
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
