import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ParkingBay } from "./ParkingBay";
import { NavBar } from "./NavBar";
import { Settings } from "./Settings";

export const Landing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parkbay" element={<ParkingBay />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
