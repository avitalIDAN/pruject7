import React, { useState, useEffect } from 'react';
import {requestsGet} from "../requestsToServer.js";
import Tool from "./Tool";
import AddTool from './AddTool.js';
import './Tool.css';

const tableName = 'camping';
var user = JSON.parse(localStorage.getItem("currentUser"));
const isManager = user?user.isManager:false;

const CampingTools = () => {
  const [tools, setTools] = useState(null);
  const [showManagerControl, setShowManagerControl] = useState(false);
  
  async function fetchData() {
    try {
      const data = await requestsGet(`/`+tableName);
      setTools(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
    isManager?setShowManagerControl(true):setShowManagerControl(false);
  }, []);

  const updateToolList = () => {
    fetchData();
  };

  return (
    <div dir="rtl" className="Tools-container">
      <h2>כלי קמפינג</h2>
      {showManagerControl && ( <AddTool tableName={tableName} updateToolList={updateToolList}></AddTool>
      )}
      <div className="tool-list-container">
        {tools && tools.map((tool) => (
          <Tool key={tool.id} tool={tool} tableName={tableName} updateToolList={updateToolList} isManager={showManagerControl}/>
        ))}
      </div>
    </div>
  );
};

export default CampingTools;
