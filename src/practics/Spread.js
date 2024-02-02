import React from 'react'
//Spread oprator  
function Spread() {
  const Name = ["shubham more"]
  const Age = [22 ,...Name];
  const RollNO = [10,...Age]
  
   console.log(RollNO);
  return (
    <div>
      <h1>{"My Name is" +" "+ Name}</h1>
      <br/>
      <h1>{"My Age is" +" "+  Age}</h1>
    

    </div>
  )
}

export default Spread