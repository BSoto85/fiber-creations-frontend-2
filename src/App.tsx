import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import LandingPage from "./Components/Pages/LandingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
