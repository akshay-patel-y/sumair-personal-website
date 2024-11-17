import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ExperienceList from "./components/ExperienceList";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperienceList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
