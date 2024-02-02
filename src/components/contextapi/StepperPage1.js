import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form";

function StepperPage1() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    reset()
  }

  return (
    <div className=''>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=' w-[30%] space-y-4 grid grid-col-1 mx-[37%] border-black border shadow-2xl  border-spacing-2  p-4 rounded items-center'>

          <TextField type='text'
            label="Name"
            placeholder='Enter Your Name'
            size='small'{...register("name")}
          />
          <TextField
            type='text'
            placeholder='Enter your Password'
            label='Password'
            size='small'{...register("password")}
          />
          <TextField
            type='Number'
            placeholder='Enter your Mobile No'
            label='Mobile no'
            size='small'{...register("mobile no")}
          />
          <TextField
            type='text'
            placeholder='Enter your Email ID'
            label='xyz@gmail.com'
            size='small'{...register(" text")}
          />
          <button className='bg-yellow-400 rounded w-[60%]   mx-[20%] ' type='Submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default StepperPage1