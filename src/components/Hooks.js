import React, { useState } from 'react'

function Hooks() {
    const [color, setColor] = useState("red");

    return (
        <div>
            <h1>My favorite color is {color}!</h1>
            <button onClick={(Hooks) => setColor("blue")}>Blue</button>
            <button onClick={(Hooks) => setColor("yellow")}>Yellow</button>
            <button onClick={(Hooks) => setColor("green")}>Green</button>
            <button onClick={(Hooks) => setColor("red")}>Red</button>

        </div>
    )
}

export default Hooks
