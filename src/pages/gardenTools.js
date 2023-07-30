
import {
  requestsGet
} from "../requestsToServer.js";
import './Tool.css'
import Tool from "./Tool"



const React = require('react');
const { useState, useEffect } = require('react');
const tableName = 'garden';

function GardenTools (){
  const [tools, setTools] =useState(null);

  useEffect(() => {
    async function fetchData() { //??
      try {
        const data = await requestsGet(`/`+tableName);
        setTools(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const updateToolList = async () => {
    try {
      const data = await requestsGet('/'+tableName);
      setTools(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div dir="rtl">
      <div>
        {tools && tools.map((tool) => (
          <Tool
            key={tool.id}
            tool={tool}
            tableName={tableName}
            updateToolList={updateToolList}
          />
        ))}
      </div>
    </div>
  );
};

export default GardenTools;
