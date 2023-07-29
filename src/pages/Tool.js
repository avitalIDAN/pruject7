import React, { useState, useEffect } from 'react';

const GardenTools = ({ tool }) => {
  const [imageSrc, setImageSrc] = useState(null);

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

  return (
    <div key={tool.id} className="tool-item">
      <div>
        {imageSrc && <img className="image" src={imageSrc} alt={tool.name} />}
        <h3 className="name">{tool.name}</h3>
        <p className="garden">{tool.amount}</p>
        <p className="price">{tool.cost}</p>
        <button className="lending">השאלה</button>
      </div>
    </div>
  );
};

export default GardenTools;
