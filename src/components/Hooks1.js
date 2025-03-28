import React, { useState } from 'react'

function Hooks1() {
    const [count, setCount] = useState(0); // Initializes count to 0

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Hooks1
