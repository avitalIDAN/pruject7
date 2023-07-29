import React from 'react'

const GardenTools = ({tool}) => {
    //var str = require(tool.image);
    return (
        <div  key={tool.id} className="tool-item">		        
            <div>
                <img className='image' src={tool.image} alt={tool.name}/>
                <h3 className='name'>{tool.name}</h3>
                <p className='garden'>{tool.amount}</p>
                <p className='price'>{tool.cost}</p>
                <button className='lending'>השאלה</button>
            </div>
        </div>
    );
};

export default GardenTools;