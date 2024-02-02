import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from "react-hook-form"
function From() {
    const { register, handleSubmit, watch } =useForm();
    let firstNameValue = watch("First Name");
    const onSubmit = (dataobj) => {
        console.log("dataobj", dataobj);
    };
    return (
        <from onSubmit={handleSubmit(onSubmit)} >
            <div className='p-10 grid gap-2 w-5/12'>
                <TextField
                    name='First Name'
                    label='First Name'
                    size='small'
                    {...register("First Name")} />
                <button type='submit' className='bg-blue-600 rounded' variant='Contained'>
                    SAVE
                </button>
            </div>
            {firstNameValue}
        </from>
    )
}

export default From



// import React from 'react'
// import { useState } from 'react'
// function From() {
//     const [data,setData]=useState()
//     function update(){
//         setData("shubham")
//     }
//   return (
//     <div> 
//         <h1>
//            { data}
//         </h1>
//         <button onClick={update}> 
//             update data
//         </button>
//     </div>
//   )
// }

// export default From
