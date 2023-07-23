import React from 'react'
import ManualPruningShears from '../images/GardenTools/ManualPruningShears.jpg'
import Shovel from '../images/GardenTools/Shovel.jpg'
import leafSaw from '../images/GardenTools/leafSaw.jpg'
import rake from '../images/GardenTools/rake.jpg'
import weedEater from '../images/GardenTools/weedEater.jpg'
import './gardenTools.css'

const GardenTools = () => {
  return (
    <div dir="rtl" className="gardenTools-container">
      <div>
        <div>
            <img className='image' src={ManualPruningShears} alt="מזמרה ידנית לגיזום"/>
            <h3 className='name'>מזמרה ידנית לגיזום</h3>
            <p className='Amount'>1 מתוך 1</p>
            <p className='price'>10 שח</p>
            <button className='lending'>השאלה</button>
        </div>
      </div>
    </div>
  );
};

export default GardenTools;
