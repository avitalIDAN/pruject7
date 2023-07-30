import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from './pages/Login';
import Registration from "./pages/SignIn"
import GardenTools from "./pages/gardenTools";
import ElectricTool from "./pages/ElectricTool"
import HandTools from "./pages/HandTools"
import PotectorTools from "./pages/PotectorTools"
import HomeTools from "./pages/HomeTools"
import CampingTools from "./pages/CampingTools"
import DonatingTools from "./pages/DonatingTools"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ArgazKelim/Home" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Registration />}/>
        <Route path="ArgazKelim" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="GardenTools" element={<GardenTools />} />
          <Route path="ElectricEquipment" element={<ElectricTool />} />
          <Route path="HandTools" element={<HandTools />} />
          <Route path="ProtectiveEquipment" element={<PotectorTools />} />
          <Route path="HomeTools" element={<HomeTools />} />
          <Route path="CampingTools" element={<CampingTools />} />
          <Route path="DonatingTools" element={<DonatingTools />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
