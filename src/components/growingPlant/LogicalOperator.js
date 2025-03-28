import React from 'react'

function LogicalOperator() {

    const isLoggedIn = true;

  return (
    <div>
       {isLoggedIn && <h1>Welcome back, user!</h1>}
    </div>
  )
}

export default LogicalOperator
