import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/Main";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
