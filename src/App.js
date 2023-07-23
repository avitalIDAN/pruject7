import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from './pages/Login';
import GardenTools from "./pages/gardenTools";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Layout" />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/register" element={<Registration />}/> */}
        <Route path="Layout" element={<Layout />}> {/*rename */}
          <Route path="Home" element={<Home />} />
          <Route path="regulations" element={<regulations />} />
          <Route path="GardenTools" element={<GardenTools />} />
          {/* <Route path=":id/Posts" element={<Posts />} />
          <Route path=":id/Todos" element={<Todos />} />
          <Route path=":id/Info" element={<Info />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
