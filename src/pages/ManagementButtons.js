import React, { useState, useEffect } from 'react';

const ManagementButtons = ({tool, handleAdded, handleDelete, handleUpdate}) => {

    // const handleDelete = (id) => {
    //     requestsDelete(`/todos/${id}`);
    
    //     const updatedTodos = todos.filter((todo) => todo.id !== id);
    //     setTodos(updatedTodos);
    // };

  return (
    <div className="ManagementButtons-item">
        <button onClick={() => handleAdded(tool.id)} className="added">הוספה</button>
        <button onClick={() => handleDelete(tool.id)} className="delete">מחיקה</button>
        <button onClick={() => handleUpdate(tool.id)} className="update">עריכה</button>
    </div>
  );
};

export default ManagementButtons;