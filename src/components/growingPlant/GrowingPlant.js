import React from 'react'
import './GrowingPlant.scss'


function GrowingPlant() {
  // variable
  const plantStyles = {               //into components we use styles  and also
    color: 'red'                            //  use inline styles in 28
  }

  // using normal variable
  const plantName = 'Sunflower'     // Render    ``(back tick)
  const size = 30

  // using object
  const plantData = {
    name: 'rose',
    icon: '🌹',    // it will string bcz don't no type
    size: 40,
  }

  return (
    <div>
      <div className='plant'>GrowingPlant 🌱</div>

      <div style={plantStyles}>Plant1 🌵</div>

      <div style={{ color: 'blue' }}>Plant2 🪴</div>

      <div className='logo'>Save Water</div>

      <div className='text'>Grow Plant</div>

      <h2 className='test'>I am a {plantName}</h2>

      <div>I'm growing <span style={{ fontSize: `${size}px` }}>🌻</span></div>

      <h2 className='test'>I am a {plantData.name}</h2>

      <div>I'm Growing<span style={{ fontSize: `${plantData.size}px` }}>{plantData.icon}</span> </div>


    </div>


  )
}

export default GrowingPlant
