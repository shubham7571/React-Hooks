 import React, { useEffect, useState } from 'react'
import UseHookProp from './UseHookProp'
 
 function  Parent() {
const [preNo,setPreNO]= useState(100)
const [no,setNo]=useState(10)
useEffect(()=>{
    console.log("abc");

},)

   return (
     <div> 
        <UseHookProp
         countdata={preNo}
         countnumber={no}
        />
        <button  className='rounded black bg-black  p-2 m-5 text-white 'onClick={()=>setPreNO(preNo+1)} >
            update Data
        </button>
        <button className='rounded black bg-black  p-2   m-5 text-white' onClick={()=>setNo(no+1)}>
        update Number
        </button>
     </div>
   )
 }
 
 export default  Parent