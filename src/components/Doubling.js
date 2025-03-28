import React from 'react'

const Doubling = () => {
    const numbers = [1, 2, 3, 4];
  
    return (
      <div>
        <h3>Doubled Numbers</h3>
        <ul>
          {numbers.map((number,index) => (
            <li key={index}>{number * 2}</li>
          ))}
        </ul>
      </div>
    );
  };

export default Doubling
