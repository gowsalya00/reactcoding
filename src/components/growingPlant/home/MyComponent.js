import React, { useState } from 'react';

const MyComponent = () => {
    const [green, setGreen] = useState(""); 
    const [click, setClick] = useState(0);   

    const handleClick1 = () => {
        
        setGreen(green +"Green");
        setClick(click + 1);

        if (click >= 5) {
            return <p>The button is now disabled after 5 clicks!</p>;
          } else {
            return null; 
    }
}

    return (
        
           
        <div>

             <label>Text Box
                <input type='number'/>
                <button>Submit</button>     
                </label>
             
            <div>
            <button onClick={handleClick1} disabled={click >= 5}>1's</button>
            
            <button>{green}</button>
            
            
            </div>  
        </div>
    )

}


export default MyComponent
