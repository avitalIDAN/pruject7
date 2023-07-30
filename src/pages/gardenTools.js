import React, { useState, useEffect } from 'react';
import {
  requestsPut,
  requestsDelete,
  requestsGet,
  requestsPost // Import requestsPost function for adding new tool
} from "../requestsToServer.js";
import Tool from "./Tool";
import './gardenTools.css';

const tableName = 'garden';
const isManager = JSON.parse(localStorage.getItem("currentUser")).isManager;


const GardenTools = () => {
  const [tools, setTools] = useState(null);
  const [showAddToolForm, setShowAddToolForm] = useState(false); // State to control the display of the form
  const [showManagerControl, setShowManagerControl] = useState(false);
  const [newTool, setNewTool] = useState({
    name: "",
    quantityAvailable: 0,
    quantity: 0,
    cost: 0,
    size: "",
    image: "path/to/default/image.jpg", // Set a default image path
  });

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

  const handleAddToolClick = () => {
    // Handle click event for the "Add New Tool" button to show the form
    setShowAddToolForm(true);
  };

  const handleFormChange = (e) => {
    // Handle form input changes and update the new tool state
    const { name, value } = e.target;
    setNewTool({
      ...newTool,
      [name]: value,
    });
  };

  const handleAddTool = async () => {
    // Handle click event for the "Add" button in the form
    try {
      // Perform a POST request to add the new tool to the server
      const response = await requestsPost('/'+tableName, newTool);

      if (response.ok) {
        // Handle the success case, e.g., display a success message, close the form, etc.
        console.log('Tool added successfully');
        setNewTool({
          name: "",
          quantityAvailable: "",
          quantity: "",
          cost: "",
          size: "",
          image: "path/to/default/image.jpg", // Reset the new tool data to initial values
        });
        setShowAddToolForm(false); // Hide the form after adding the tool
        updateToolList(); // Fetch the updated list of tools
      } else {
        // Handle the error case, e.g., display an error message
        throw new Error('Failed to add the tool');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the tool');
    }
  };

  return (
    <div dir="rtl" className="Tools-container">
      {showManagerControl && (<div className="add-button-container">
        <button className="button-add" onClick={handleAddToolClick}>
          הוספת כלי חדש
        </button>
      </div>)}
      {showAddToolForm &&( // Display the form if showAddToolForm is true
        <div className="new-tool-form">
          <input
            type="text"
            name="name"
            value={newTool.name}
            onChange={handleFormChange}
            placeholder="שם הכלי"
          />
          <input
            type="number"
            name="quantityAvailable"
            value={newTool.quantityAvailable}
            onChange={handleFormChange}
            placeholder="כמות זמינה"
          />
          <input
            type="number"
            name="quantity"
            value={newTool.quantity}
            onChange={handleFormChange}
            placeholder="כמות כוללת"
          />
          <input
            type="number"
            name="cost"
            value={newTool.cost}
            onChange={handleFormChange}
            placeholder="עלות"
          />
          <input
            type="number"
            name="size"
            value={newTool.size}
            onChange={handleFormChange}
            placeholder="גודל"
          />
          <button onClick={handleAddTool}>הוספה</button>
          <button type="button" onClick={() => setShowAddToolForm(false)}>
            ביטול
          </button>
        </div>
      )}
      <div className="tool-list-container">
        {tools && tools.map((tool) => (
          <Tool key={tool.id} tool={tool} tableName={tableName} updateToolList={updateToolList} isManager={showManagerControl}/>
        ))}
      </div>
    </div>
  );
};

export default GardenTools;
