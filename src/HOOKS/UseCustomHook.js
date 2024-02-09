import React, { useState } from 'react'

function UseCustomHook() {
const [count,SetCount] =useState(0)
function  Add() {
    SetCount(count+1);
}
function  Neg () {
    SetCount(count-1);
}
  return (
    <div> 
        <h1>{count}</h1>
        <button></button>
        <button onClick={Add}>Increment</button>
        <button onClick={Neg}>Decrement</button>
    </div>
  )
}

export default UseCustomHook