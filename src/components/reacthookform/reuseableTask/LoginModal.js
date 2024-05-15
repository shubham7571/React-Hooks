import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default function LoginModal({ handleClose, open,setLoginData,loginData }) {
    const [isRegisterForm, setIsRegisterForm] = useState(false);
    const [forgetPassword, setForgetPassword] = useState(false);

    const schema = yup.object().shape({
        // Define your form validation schema here
    });

    const {
        reset,
        register,
        handleSubmit,
        // formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data, e) => {
        e.preventDefault();
        let tempArr=[...loginData]
        tempArr.push(data)
        setLoginData(tempArr)
        localStorage.setItem("setLoginData",JSON.stringify(tempArr))
        console.log("data", data);
        reset();
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='text-end mt-0' style={{ position: 'absolute', top: 10, right: 10 }}>
                        <button onClick={handleClose} style={{ fontSize: '20px', background: 'transparent', border: 'none' }}>
                            <GiCancel />
                        </button>
                    </div>
                    <div className='flex'>
                        {forgetPassword ? (
                            // Forgot Password Form
                            <div className='space-y-2 '>
                                {/* Implement your forgot password form here */}
                                <div>
                                    <p className='text-center my-2 font-bold font-serif text-lg'>Recover password</p>
                                    <TextField
                                        size='small'
                                        variant='outlined'
                                        label="Email"
                                        name='Email'
                                        {...register("Email")}

                                    />
                                    <p className='text-xs'>Please enter your e-mail:</p>
                                </div>
                                <div className='text-white p-1.5 ml-14'>
                                    <Button  variant='contained' onClick={() => setForgetPassword(false)} type='submit'>Recover</Button>

                                </div>
                            </div>
                        ) : (
                            // Login or Register Form
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='space-y-2'>
                                    {isRegisterForm ? (
                                        // Register Form
                                        <div className='space-y-2'>
                                            <div>
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    label="First Name"
                                                    name='firstName'
                                                    {...register("firstName")}

                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    label="Last Name"
                                                    name='LastName'
                                                     {...register("LastName")}

                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    label="Email"
                                                    name='Email'
                                                    {...register("Email")}

                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    label="Password"
                                                    name='Password'
                                                    {...register("Password")}

                                                />
                                            </div>
                                            <div className='text-center my-4'>
                                                <Button variant='contained' type="submit">Create Account</Button>
                                            </div>
                                            <div>Already have an account? <span className='cursor-pointer ' onClick={() => setIsRegisterForm(false)}>Login</span> </div>
                                        </div>
                                    ) : (
                                        // Login Form
                                        <div className='space-y-2'>
                                            <div>
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    label="Email"
                                                    name='Email'
                                                    {...register("Email")}
                                                />
                                            </div>
                                            <div>
                                                <TextField
                                                    size='small'
                                                    variant='outlined'
                                                    label="Password"
                                                    name='Password'
                                                    {...register("Password")}
                                                />
                                            </div>
                                            <p className='text-end text-xs cursor-pointer' onClick={() => setForgetPassword(true)}>Forgot Password?</p>
                                            <div className='text-center my-4'>
                                                <Button variant='contained' type='submit'>Login</Button>
                                            </div>
                                            <div className='text-sm'>
                                                New customer? <Link to='register'> <span className='cursor-pointer' onClick={() => setIsRegisterForm(true)}>Create an account</span></Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
