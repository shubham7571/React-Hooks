import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Button } from '@mui/material';
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
                            /><br />
                            <button type='Submit' className='font-semibold bg-blue-300 w-56 rounded-md p-2 border border-black focus:border-blue-500 font-serif mt-2'> Login </button>
                        </form>
                        <h1 className='ml-24  font-serif my-2'>Or</h1>
                        <a href='https://www.google.com/'><button type='submit' className='bg-blue-300 rounded-md p-2 font-serif border border-black focus:border-blue-500  w-56'>sign Up with Google</button></a>
                        <a href='https://www.facebook.com/'><button className='bg-blue-300 rounded-md p-2 font-serif border border-black focus:border-blue-500 w-56 my-2' >Sign Up with Facebook</button></a>
                    </div>
                </div>
            </form>
        </div>
    );
}
