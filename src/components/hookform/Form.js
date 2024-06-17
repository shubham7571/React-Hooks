import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const [submit, setsubmit] = useState([])
    console.log("data", submit);
    const {
        register, handleSubmit,reset
    } = useForm();
    //array of object
    const onsubmit = (object) => {
        let tempArr = [...submit]
        tempArr.push(object)
        setsubmit(tempArr)
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className='space-x-4 m-10 '>
                    <TextField size='small' {...register("fname")} label="fname" />
                    <TextField size='small' {...register("mname")} label="mname" />
                    <TextField size='small' {...register("lname")} label="lname" />
                    <Button type='submit' > save</Button>
                </div>
            </form>
        </div>
    )
}
