import React,{useState,useEffect} from 'react'
                                               //using setTimeout to automate the count(in Js concept)
function UseEffect1() {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  
    }
)
    return (
      
      <h1>I've rendered {count} times!</h1>
    )
  }

export default UseEffect1
