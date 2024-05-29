import React from 'react';
import { TextField, Button } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function InputFieldTable(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 850,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const schema = yup.object().shape({
        FirstName: yup.string().required("Please enter your first name"),
        MiddleName: yup.string().required("Please enter your middle name"),
        LastName: yup.string().required("Please enter your last name"),
        Address: yup.string().required("Please enter your address"),
    });

    const {  reset,formState: { errors },handleSubmit,register} = useForm({ resolver: yupResolver(schema),});

    const onSubmit = (data) => {
        let tempArr = [...props.loginData];
        tempArr.push(data)
        props.setLoginData(tempArr)
        props.handleClose()
        reset();
    };
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='text-end' onClick={props.handleClose}>
                            <Button variant='contained' type='button'>Close</Button>
                        </div>
                        <div className="my-20 text-center justify-center flex space-x-2">
                            <div>
                                <TextField
                                    label="First Name"
                                    size="small"
                                    name="FirstName"
                                    error={!!errors?.FirstName}
                                    helperText={errors?.FirstName?.message}
                                    {...register("FirstName")}
                                />
                            </div>
                            <TextField
                                label="Middle Name"
                                size="small"
                                name="MiddleName"
                                helperText={errors?.MiddleName?.message}
                                error={!!errors?.MiddleName}
                                {...register("MiddleName")}
                            />
                            <div>
                                <TextField
                                    label="Last Name"
                                    error={!!errors?.LastName}
                                    helperText={errors?.LastName?.message}
                                    size="small"
                                    {...register("LastName")}
                                    name="LastName"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Address"
                                    error={!!errors?.Address}
                                    helperText={errors?.Address?.message}
                                    size="small"
                                    name="Address"
                                    {...register("Address")}
                                />
                            </div>
                            <Button className='h-10 w-10' variant="contained" size="small" type="submit">
                                ADD
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}

export default InputFieldTable;
