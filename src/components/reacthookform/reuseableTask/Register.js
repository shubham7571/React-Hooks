import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { GiCancel } from "react-icons/gi";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 460,
    width: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function Register(handleClose,open,loginData ,setLoginData) {

    const schema = yup.object().shape({
        FirstName: yup.string().required("Please enter your  First Name"),
        Email: yup.string().email("Please enter a valid email").required("Please enter your email"),
        Password: yup.string().required("please enter your Password"),
    });
console.log("props.loginData",loginData);
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        let tempArr = [...loginData];
        tempArr.push(data);
        setLoginData(tempArr);
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
                    <div className='flex'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='text-end '>
                                <button onClick={ handleClose} style={{ fontSize: '20px' }}>
                                    <GiCancel />
                                </button>
                            </div>
                            <div className='space-y-2'>
                                <div>
                                    <TextField
                                        size='small'
                                        variant='outlined'
                                        label=" First Name"
                                        {...register("FirstName")}
                                        error={errors.FirstName?.message}
                                        // helperText={errors.FirstName?.message}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        size='small'
                                        variant='outlined'
                                        label="Email"
                                        {...register("Email")}
                                        error={errors.Email?.message}
                                        // helperText={errors.Email?.message}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        size='small'
                                        variant='outlined'
                                        label="Password"
                                        {...register("Password")}
                                        error={errors.Password?.message}
                                        // helperText={errors.Password?.message}
                                    />
                                </div>
                                <div className='text-center my-4'>
                                    <button  type="submit" className=' bg-black text-white p-2 rounded  w-56'>Create Account</button>
                                    
                                </div>
                                <div>Already have an account? <span>Login</span> </div>
                                <h1 className='ml-24  font-serif my-2'>Or</h1>
                                <div className='space-y-2 t'>
                                    <div>
                                        <a href='https://www.google.com/?hl=la'>
                                            <button  type='button'  className=' bg-black text-white p-2 rounded  w-56'>Sign Up with Google</button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href='https://www.facebook.com/login/'>
                                            <button  type='button'  className='bg-black text-white p-2 rounded  w-56'>Sign Up with Facebook</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
