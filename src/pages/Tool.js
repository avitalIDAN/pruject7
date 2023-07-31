import React, { useState, useEffect } from 'react';
import {
  requestsPut,
  requestsDelete,
  requestsPost
} from "../requestsToServer.js";
import './Tool.css'; 
import {  useNavigate } from "react-router-dom";



const Tool = ({ tool , tableName , updateToolList , isManager}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [name, setName] = useState(tool.name);
  const [quantityAvailable, setQuantityAvailable] = useState(tool.quantityAvailable);
  const [quantity, setQuantity] = useState(tool.quantity);
  const [cost, setCost] = useState(tool.cost);
  const [size, setSize] = useState(tool.size);
  
  let navigate = useNavigate();
  


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


  const handleQuantityAvailableChange = async (newQuantity) => {
    try {
      const updatedData = {
        id: tool.id,
        name: name,
        quantityAvailable: newQuantity,
        quantity: quantity,
        cost: cost, 
        size: size, 
      };
      // Perform a PUT request to update the quantityAvailable in the database
      const response = await requestsPut(`/${tableName}/${tool.id}`,updatedData);

      if (response.ok){
        // If the update was successful, update the local state with the new quantityAvailable
        setQuantityAvailable(newQuantity);
        // Optionally, you can fetch the updated tool list from the server
        updateToolList();
      } else {
        throw new Error('Failed to update the quantityAvailable');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the quantityAvailable');
    }
  };

  const handleLendClick = async () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user == null){
      alert("כדי להשאיל צריך קודם להתחבר :)")
      navigate("/Login");
      return;
    }
    if (tool.quantityAvailable > 0) {
      // The item is available for lending
      const lendingData = {
        userId: user.id,
        username: user.username,
        itemId: tool.id,
        tableName: tableName,
        itemName: tool.name
      };
      try {
        const response = await requestsPost("/lending", lendingData);
        if (response.ok) {
          var newQuantity= tool.quantityAvailable-1;
          handleQuantityAvailableChange(newQuantity);
          // Item was successfully lent, you can handle it as needed
          alert("המוצר זמין, פרטייך נשמרו במערכת, מוזמן להגיע בשעות הפתיחה :)"); // You can customize this message
        } else {
          throw new Error('Failed to lend the tool');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while lending the tool');
      }
    } else {
      // The item is not available for lending
      alert("המוצר אינו זמין כעת"); // You can customize this message
    }

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
  {isManager && (
    <>
      <button className="button" onClick={handleDeleteClick}>מחיקה</button>
      <button className="button" onClick={handleEditClick}>עריכה</button>
    </>
  )}
</div>

      </div>
      {editingMode ? (
        <form className='form-container' onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="שם הכלי"
          />
          <input
            type="number"
            value={quantityAvailable}
            onChange={(e) => setQuantityAvailable(e.target.value)}
            placeholder="כמות זמינה"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="כמות כוללת"
          />
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="עלות"
          />
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="גודל"
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
