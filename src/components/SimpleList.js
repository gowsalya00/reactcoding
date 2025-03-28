import React from 'react'

const SimpleList = () => {

    const fruits = ['Apple', 'Banana', 'Orange'];

    return (
        <div>
            <h3>Fruits List</h3>
            <ul>
            {fruits.map((fruit, index) => ( 
                    <div key={fruit}>{index+1}.{fruit}</div>
                ))}

            </ul>
                
            
        </div>
    );
};
export default SimpleList
