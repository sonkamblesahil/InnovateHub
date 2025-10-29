import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import ProjectsPage from './pages/ProjectPage.jsx'; // ensure correct file name
import ProfilePage from './pages/ProfilePage.jsx';
import InvestorsPage from './pages/InvestorsPage.jsx';
import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Top Navbar */}
        <NavBar />

        <div className="flex flex-1">
          {/* Sidebar (hidden on small screens) */}
          <div className="hidden md:block w-[20vw] bg-gray-100 fixed h-full top-14">
            <SideBar />
          </div>

          {/* Main Content */}
          <div className="flex-1 ">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/investors" element={<InvestorsPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
