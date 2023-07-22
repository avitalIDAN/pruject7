import React from 'react';
import logo from '../images/Tools.jpg';
//import "./Home.css";

const Home = () => {
  return (
    <div dir="rtl" className="Home-container">
      <img src={logo} alt="Logo" />
      <div>
        <h3>שעות פתיחה:</h3>
        <h3>כתובת: </h3>
        <h3>מספר טלפון: 012-3456789</h3>
        <h3>באו להתנדב</h3>
      </div>
    </div>
  );
};

export default Home;
