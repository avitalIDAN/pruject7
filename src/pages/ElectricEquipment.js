import React from 'react'

const ElectricEquipment = () => {
  var str = require("../images/ElectricTools/masor.jpg");
  const logo = require('../images/ElectricTools/masor.jpg');
  return (
    <div dir="rtl" className="container">
      <img className='image' src={str}/>
    </div>
  );
};

export default ElectricEquipment;