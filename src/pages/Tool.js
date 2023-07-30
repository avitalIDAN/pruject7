import React, { useState, useEffect } from 'react';
import {
  requestsPut,
  requestsDelete
} from "../requestsToServer.js";
import './Tool.css'; 

const Tool = ({ tool , tableName , updateToolList }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [name, setName] = useState(tool.name);
  const [quantityAvailable, setQuantityAvailable] = useState(tool.quantityAvailable);
  const [quantity, setQuantity] = useState(tool.quantity);
  const [cost, setCost] = useState(tool.cost);
  const [size, setSize] = useState(tool.size);

  useEffect(() => {
    // Dynamically import the image using its relative path
    import(`../images/${tool.image}`)
      .then((imageModule) => {
        setImageSrc(imageModule.default);
      })
      .catch((error) => {
        console.error('Error loading image:', error);
      });
  }, [tool.image]);

  const handleLendClick = () => {

  };

  const handleDeleteClick = async () => {
    try {
      const response = await requestsDelete('/' + tableName + '/' + tool.id);
      if (response.ok) {
        // Call the updateToolList function to fetch the updated list of tools
        updateToolList();
      } else {
        throw new Error('Failed to delete the tool');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the tool');
    }
  };

  const handleEditClick = () => {
    setEditingMode(true);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    try {
      const updatedData = {
        id: tool.id,
        name: name,
        quantityAvailable: quantityAvailable,
        quantity: quantity,
        cost: cost, 
        size: size, 
      };
      
      console.log("Updated data:", updatedData);
      // Perform a PUT request to update the post on the server
      const response = await requestsPut('/' + tableName +'/' + tool.id, updatedData)
  
      if (response.ok) {
        // Handle the success case, e.g., display a success message, close the form, etc.
        console.log('Post updated successfully');
        setEditingMode(false);
        updateToolList();
      } else {
        // Handle the error case, e.g., display an error message
        throw new Error('Failed to update the post');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the post');
    }
  };

  return (
    
    <div key={tool.id} className="tool-item">
      <div className='tool-container'>
        {imageSrc && <img className="image" src={imageSrc} alt={tool.name} />}
        <div className="tool-info">
           <h3 className="name">{tool.name}</h3>
           <p className="amount">{tool.quantityAvailable}/{tool.quantity}</p>
           <p className="size">{tool.size} מטר</p>
           <p className="price">{tool.cost} ש"ח</p>
       </div>
        <div className='button-container'>
        <button className="button" onClick={handleLendClick}>השאלה</button>
        <button className="button" onClick={handleDeleteClick}>מחיקה</button>
        <button className="button" onClick={handleEditClick}>עריכה</button>
        </div>
      </div>
      {editingMode ? (
        <form className='form-container' onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tool Name"
          />
          <input
            type="number"
            value={quantityAvailable}
            onChange={(e) => setQuantityAvailable(e.target.value)}
            placeholder="Quantity Available"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="Cost"
          />
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Size"
          />
          <button type="submit">שמירה</button>
          <button type="button" onClick={() => setEditingMode(false)}>
            ביטול
          </button>
        </form>
      ):null}

    </div>
  );
};

export default Tool;
