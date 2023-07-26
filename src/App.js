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
import ElectricEquipment from "./pages/ElectricEquipment"
import HandTools from "./pages/HandTools"
import ProtectiveEquipment from "./pages/ProtectiveEquipment"
import HomeTools from "./pages/HandTools"
import CampingTools from "./pages/CampingTools"
import DonatingTools from "./pages/DonatingTools"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ArgazKelim/Home" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Registration />}/>
        <Route path="ArgazKelim" element={<Layout />}> {/*rename */}
          <Route path="Home" element={<Home />} />
          {/* <Route path="regulations" element={<regulations />} /> */}
          <Route path="GardenTools" element={<GardenTools />} />
          <Route path="ElectricEquipment" element={<ElectricEquipment />} />
          <Route path="HandTools" element={<HandTools />} />
          <Route path="ProtectiveEquipment" element={<ProtectiveEquipment />} />
          <Route path="HomeTools" element={<HomeTools />} />
          <Route path="CampingTools" element={<CampingTools />} />
          <Route path="DonatingTools" element={<DonatingTools />} />
          {/* <Route path=":id/Posts" element={<Posts />} />
          <Route path=":id/Todos" element={<Todos />} />
          <Route path=":id/Info" element={<Info />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
