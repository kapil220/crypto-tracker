import React from "react";
import "./App.css"; // Importing CSS file for global styles

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
  <Route path="/watchlist" element={<WatchlistPage />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
