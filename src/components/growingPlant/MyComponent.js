import React from 'react'

// basic examples
function MyComponent() {
    const isLoggedIn = true;

    if (isLoggedIn) {
      return <h1>Welcome back, user!</h1>;
    } else {
      return <h1>Please log in.</h1>;
    }
}

export default MyComponent
