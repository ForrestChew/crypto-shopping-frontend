import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import TopDeals from "./pages/TopDeals/TopDeals";
import Crypto from "./pages/Crypto/Crypto";
import Orders from "./pages/Orders/Orders";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-deals" element={<TopDeals />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
