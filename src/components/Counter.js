// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;


import React, { useState } from "react" //imported the useState hook from React

function Counter() {
  //creating a component function that will return our JSX and execute functions for it
 
  const [count, setCount] = useState(0) 
  //calling useState inside component: creating a new internal state for the component with an initial value of 0
  //useState returns 2 variables: 
    // 1. count(ref to the current value of state in react's internals)
    // 2. setCount( a setter function to update that state)

  function increment() {
    console.log(count)
    setCount((currentCount) => currentCount +1)
    console.log(count)
   

    //setCount does 2 things:
      // 1. updates value of count in React's internal state to be count + 1
      // 2. automatically re-renders component and all its children and updates DOM based on new values for state!
  }

  return (
    <button onClick={increment}>I have been clicked {count} times.</button>
    //{count} displays the current value in the button element
  )
}

export default Counter