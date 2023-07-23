import React from 'react'
import ManualPruningShears from '../images/GardenTools/ManualPruningShears.jpg'
import Shovel from '../images/GardenTools/Shovel.jpg'
import leafSaw from '../images/GardenTools/leafSaw.jpg'
import rake from '../images/GardenTools/rake.jpg'
import weedEater from '../images/GardenTools/weedEater.jpg'

const GardenTools = () => {
  return (
    <div dir="rtl" className="gardenTools-container">
      <div>
        <div>
            <img src={ManualPruningShears} alt="מזמרה ידנית לגיזום"/>
            <h3>מזמרה ידנית לגיזום</h3>
        </div>
      </div>
    </div>
  );
};

export default GardenTools;
