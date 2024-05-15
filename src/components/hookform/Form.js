import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
    const [submit, setsubmit] = useState([])
    console.log("data",submit);
    const {
        register, handleSubmit
    } = useForm();
    //array of object
    const onsubmit = (object) => {
        let tempArr = [...submit]
        tempArr.push(object)
        setsubmit(tempArr)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <TextField size='small' {...register("fname")} label="fname" />
                <TextField size='small' {...register("mname")} label="mname" />
                <TextField size='small' {...register("lname")} label="lname" />
                <Button type='submit' > save</Button>
            </form>
        </div>
    )
}
