import React, { createContext } from 'react'
import UseContextPage2 from './UseContextPage2'
// import createContext from 'react'
// import {data,data1} form 'react';
const data = createContext();
const data1 = createContext();
function UseContextPage1() {

  const fname = "shubham";
  const lname = "More";
  return (
    <div>
      <data.Provider value={fname}>
        <data1.Provider value={lname}>
          <UseContextPage2 />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}
export{data,data1}
export default UseContextPage1