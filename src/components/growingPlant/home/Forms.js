import React, { useState } from 'react'


/*   3752
  //     2-Ones
  Once we click 1's one time it project red intial state and 2nd click time it project red, only two click 
  //     5-Tens
  we click 10's it will project green it will continue 5 times,only 5 click
  //     7-Hundreds
  we click 100's it will project blue it continue 7 times but 1st click it give one blue
  2nd -blue ,3rd-blue ....,only 7 click
  // 3-Thousands
  as well as above the concepts.only 3 click.
  */

function Forms() {
    const [red, setRed] = useState("");
     //const [green, setGreen] = useState("");
   // const [blue, setBlue] = useState("");
   // const [orange, setOrange] = useState("");
   const [buttonText, setButtonText] = useState("");
   const [counter , setCounter] = useState (0);

    //const [click, setClick] = useState(0);

    
    
       
    const handleClick = () => {
        setCounter(counter+1);

    setButtonText(`Clicked ${counter + 1} times`);

        
          if(counter<=3);

      
      

   }
         
          


  /*  const handleClick1 = () => {
        setGreen(green + "Green");
        if (click < 6)
            setClick(click + 1);
    } */

   /*  const handleClick3 = () => {
        setBlue(blue + "Blue");
        if (click < 8)
            setClick(click + 1);
    } */

     /*const handleClick4 = () => {
        setOrange(orange + "Orange");

        if (click < 4)
            setClick(click + 1);
    } */
     return (
        <div>
       {/*<button onClick={handleClick}>1's</button><button>{green}</button>*/} 
        </div>           
                          

     )
       


    
}



export default Forms
