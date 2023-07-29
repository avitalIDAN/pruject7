import { useState, useEffect } from 'react';
import {
  requestsGet
} from "../requestsToServer.js";
import './gardenTools.css'
import Tool from "./Tool"

function GardenTools (){
  const [tools, setTools] =useState(null);

  useEffect(() => {
    async function fetchData() { //??
      try {
        const data = await requestsGet(`/garden`);
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div dir="rtl" className="gardenTools-container">
      {tools && tools.map((tool) => (
        <Tool tool={tool}/>
        ))}
      </div>
  );
};

export default GardenTools;
