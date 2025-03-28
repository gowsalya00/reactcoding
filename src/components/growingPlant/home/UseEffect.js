import React,{useState,useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    
    useEffect(() => {
      setCalculation(()=> count*2);
      console.log('count is increased');
      console.log(calculation);
      console.log('component mounted');
    },[count,calculation]);
  
    return (                        
      <div>
       
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count value is : {count}</p>
        <button onClick={() => setCalculation('msg updated on click event')}>update message</button>
     
      </div>
    )
}

export default UseEffect
