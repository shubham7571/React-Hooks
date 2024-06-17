import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button, ButtonBase } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function YupValidation() {
    const schema = yup
        .object({
            Name: yup.string().required("please enter your Name"),
            Email: yup.string().required("please enter your email"),
            Password: yup.string().required("please enter your Password"),
        })
        .required();

    const {
        reset, //reset the input field
        //setValue, // set the value 
        //getValues, // value ghete ji pahije ti value ghete
        //watch, //onchange runtime value change kart
        register, // save the value
        handleSubmit,  //submit the value 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log("data", data);
        reset()
    };

    return (
        <div className='flex'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-between'>
                    <div className='ml-24 mt-4'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='space-x-8'>
                                <TextField sx={{ mt: 2 }} label="Full Name " name='Name' size='small' variant="outlined" helperText={errors?.Name?.message}
                                    {...register("Name")}
                                    error={errors.Name} />
                                <TextField sx={{ mt: 2 }} label="Email " type='email' size='small' variant="outlined" helperText={errors?.Email?.message}
                                    {...register("Email")}
                                    error={errors.Email}
                                />
                                <TextField sx={{ mt: 2 }} label="Password" size='small' type='password' variant="outlined" helperText={errors?.Password?.message}
                                    {...register("Password")}
                                    error={errors.Password}
                                />
                            </div>
                            <br />

                            <div className='mt-4 ml-72'>
                                <Button variant='contained' type='submit'>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </div>
    );
}
