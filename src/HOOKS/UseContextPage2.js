import React, { useContext } from 'react'
import { data, data1 } from './UseContextPage1'
function UseContextPage2() {
  const Firstname = useContext(data);
  const Lastname = useContext(data1);
  return (
    <div>
      <h1>My first name is{Firstname}</h1>
      <h1>My Last name is{Lastname}</h1>
    </div>
  )
}

export default UseContextPage2