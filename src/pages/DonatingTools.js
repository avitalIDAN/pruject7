import React, { useState } from 'react';
import {requestsPost} from "../requestsToServer.js";
import {  useNavigate } from "react-router-dom";
import "./DonatingTools.css"; // Link the CSS file

const DonatingTools = () => {

  const [itemName, setItemName] = useState("");
  const [tableName, setTableName] = useState("כלי גינה");
  let navigate = useNavigate();

  const handleDonateTool = async () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user == null){
      alert("כדי לתרום צריך קודם להתחבר :)")
      navigate("/Login");
      return;
    }
      try {
        const donaitingData = {
          userId: user.id,
          username: user.username,
          itemName: itemName,
          tableName: tableName,
        };
        const response = await requestsPost("/donation", donaitingData);
        if (response.ok) {
          // Item was successfully lent, you can handle it as needed
          alert("תודה רבה על תרומתך המנהל יטפל בבקשתך :)"); // You can customize this message
        } else {
          throw new Error('Failed to lend the tool');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while lending the tool');
      }
  };


  // List of available tables
  const tableOptions = ['כלי גינה', 'ציוד חשמלי', 'כלי עבודה ידניים', 'ציוד מגן', 'כלי עבודהה לבית', 'כלי קאמפינג'];

  return (
    <div dir="rtl" className="new-tool-form">
      <input
        type="text"
        name="itemName" // Change to "itemName" for item name field
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="שם הכלי"
      />
      <select
        name="tableName" // Change to "tableName" for table name field
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
      >
        {/* Generate options from the tableOptions array */}
        {tableOptions.map((table) => (
          <option key={table} value={table}>
            {table}
          </option>
        ))}
      </select>
      <button onClick={handleDonateTool}>תרומת כלים</button>
    </div>
  );
};

export default DonatingTools;
