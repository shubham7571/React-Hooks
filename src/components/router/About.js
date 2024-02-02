import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    const temObj={
        FirstName:"Shubham"
    }
  return (
    <div> 
        <button
        className='bg-indigo-900 text white rounded px-3 h-9'
        onClick={()=>{
            navigate("/",{state:temObj});
        }}>
Go Back
        </button>
        rhtkjhlj';
    </div>
  )
}

export default About