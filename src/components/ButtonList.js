import React from 'react'

const ButtonList = () => {
    const labels = ['Save', 'Delete', 'Cancel'];
  
    return (
      <div>
        <h3>Action Buttons</h3>
        {labels.map((label,index) => (
          <button key={index}>{label}</button>
        ))}
      </div>
    );
  };
  

export default ButtonList
