import React from 'react'
import { useState, useEffect } from "react";
import {
  requestsGet,
  requestsPost,
  requestsPut,
  requestsDelete,
} from "../requestsToServer.js";
import './gardenTools.css'
import Tool from "./Tool"

const GardenTools = () => {
  const [tools, setTools] = useState([{
    image: require("../images/GardenTools/ManualPruningShears.jpg"),//??
    name: 'מזמרה ידנית לגיזום',
    amount: '1 מתוך 1',
    price: '10 שח'
  }]);
  useEffect(() => {
    // async function fetchData() { //??
    //   try {
    //     var user = JSON.parse(localStorage.getItem("currentUser"));
    //     //const data = await requestsGet(``);
    //     setTodos(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // fetchData();

    try {
      //var user = JSON.parse(localStorage.getItem("currentUser"));
      //const data = await requestsGet(``);
      //setTools(data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div dir="rtl" className="gardenTools-container">
      {/* {tools.map((tool) => (
        <Tool tool={tool}/>
        <div  key={tool.id} className="tool-item">		        
					<div>
						<img className='image' src={ManualPruningShears} alt={tool.name}/>
						<h3 className='name'>{tool.name}</h3>
						<p className='amount'>{tool.amount}</p>
						<p className='price'>{tool.price}</p>
						<button className='lending'>{tool.lending}</button>
					</div>
				</div>
        ))} */}
		           

      <div>
        <Tool tool={tools[0]}/>
        {/* <div>
            <img className='image' src={'../images/GardenTools/ManualPruningShears.jpg'} alt="מזמרה ידנית לגיזום"/>
            <h3 className='name'>מזמרה ידנית לגיזום</h3>
            <p className='Amount'>1 מתוך 1</p>
            <p className='price'>10 שח</p>
            <button className='lending'>השאלה</button>
        </div> */}
      </div>
    </div>
  );
};

export default GardenTools;
