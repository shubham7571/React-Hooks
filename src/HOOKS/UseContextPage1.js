 import React, { useContext } from 'react'
import { NewContext } from './NewContext'
 
 function UseContextPage1() {
  const [text , setText]=useContext(NewContext);
   return (
     <div>
      <p>{text}</p>
     </div>
   )
 }
 
 export default UseContextPage1