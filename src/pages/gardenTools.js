
import {
  requestsGet
} from "../requestsToServer.js";
import './gardenTools.css'
import Tool from "./Tool"


const React = require('react');
const { useState, useEffect } = require('react');

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

  const updateToolList = async () => {
    try {
      const data = await requestsGet('/garden');
      setTools(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div dir="rtl" className="gardenTools-container">
      {tools && tools.map((tool) => (
        <Tool key={tool.id} tool={tool} tableName="garden" updateToolList={updateToolList}/>
        ))}
      </div>
  );
};

export default GardenTools;
