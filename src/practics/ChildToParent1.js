import React from 'react'
//Child Compoent
function ChildToParent1(data1) {
    const data ='shubham more' 
  return (
    <div>  
        <h1>User Name</h1>
        <button onClick={()=>data1.alert(data)}>Click me</button>
    </div>
  )
}

export default ChildToParent1