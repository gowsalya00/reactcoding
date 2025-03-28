import React,{useState,useEffect} from 'react'
                                                
// clearTimeout using for stop the count(in Js concept)

function EffectCleanup() {
    const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

    

    
    export default EffectCleanup