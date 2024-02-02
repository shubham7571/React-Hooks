import React, { useState } from 'react'
import Child from './Child'
//prpos 
function Student() {
    const [main,SetMain] =useState('shubham')
  return (
    <div> 
        <Child 
         name={main} />
        <button onClick={()=>{ SetMain("shubham sunil more")}}>update</button>
    </div>
  )
}

export default Student
 