import React from 'react'


function GrowingPlant1(props) {

    const name = "John";
    return <Child name={name} />;
}

function Child(props) {
    return <h1 className='logo'>Hello, {props.name}!</h1>;

}

export default GrowingPlant1