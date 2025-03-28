import React from 'react'

function TernaryOperator() {
    const isLoggedIn =false;
  return (
    <div>{isLoggedIn ? 'Welcome back, user!' : 'Please log in.'}</div>
      
    
  )
}

export default TernaryOperator

