import React, { useState } from 'react'

function Decrementbutton() {
  const [derementCount, setdecrementCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(0);

  return (
    <div>
      <h1> Increment and Decrement count</h1>
      <h3>Remove :{derementCount}</h3>
      <h3>Add button:{incrementCount}</h3>
      <button onClick={ ()=>  setdecrementCount(derementCount-1) }>-</button>
      <button onClick={ ()=> setIncrementCount(incrementCount+1) }>+</button>
      
          </div >
  )
}

export default Decrementbutton