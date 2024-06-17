import { Box, Modal, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from "react-icons/io5";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Common_Button from '../commonComponent/commonButton/Common_Button';
import { USEFORM_REGISTRATION } from '../../http';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const schema = yup.object().shape({
    firstname: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    age: yup.number().typeError('Age must be a number').required('Age is required').positive().integer(),
    standard: yup.string().required('Standard is required'),
    percentage: yup.number().typeError('Percentage must be a number').required('Percentage is required').min(0).max(100),
});

function UseFormPatientRegistration() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const { reset, handleSubmit, register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const [data, setData] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedRow(null);
        reset();
    };

    useEffect(() => {
        getDataFromDataBase();
    }, []);

    useEffect(() => {
        if (selectedRow) {
            setValue("firstname", selectedRow.firstName);
            setValue("lastName", selectedRow.lastName);
            setValue("age", selectedRow.age);
            setValue("standard", selectedRow.std);
            setValue("percentage", selectedRow.percentage);
        }
    }, [selectedRow, setValue]);

    const onSubmit = (data) => {
        const tempObj = {
            firstName: data.firstname,
            lastName: data.lastName,
            age: data.age,
            std: data.standard,
            percentage: data.percentage
        };

        if (selectedRow) {
            axios.put(`${USEFORM_REGISTRATION}/updateStudent/${selectedRow.id}`, tempObj)
                .then(() => {
                    getDataFromDataBase();
                    toast.success("Student updated successfully!");
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Failed to update student!");
                });
        } else {
            axios.post(`${USEFORM_REGISTRATION}/student/save`, tempObj)
                .then(() => {
                    getDataFromDataBase();
                    toast.success("Student added successfully!");
                })
                .catch((error) => {
                    console.log("error", error);
                    toast.error("Failed to add student!");
                });
        }

        handleClose();
    };

    const getDataFromDataBase = () => {
        axios.get(`${USEFORM_REGISTRATION}/StudentsList`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log('error', error);
                toast.error("Failed to fetch student data!");
            });
    };

    const handleEdit = (row) => {
        setSelectedRow(row);
        handleOpen();
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            axios.delete(`${USEFORM_REGISTRATION}/deleteStudent/${id}`)
                .then(() => {
                    getDataFromDataBase();
                    toast.error("Student deleted successfully!", {
                        toastId: 'delete-toast',
                        position:'bottom-left',
                        autoClose: 2000,  
                        className: 'toast-error', // Custom class for styling
                        theme:'colored',
                        transition: Bounce,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Failed to delete student!");
                });
        }
    };

    return (
        <div>
                        <ToastContainer theme="colored" />

            <div className='text-end m-10'>
                <button className='h-10 w-32 bg-black text-white rounded' onClick={handleOpen}>ADD STUDENT</button>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='absolute top-2 right-2'>
                                <button
                                    className='text-3xl border-2 rounded p-1 text-red-500'
                                    onClick={handleClose}
                                    type="button"
                                >
                                    <IoCloseOutline />
                                </button>
                            </div>
                            <div className='grid grid-cols-3 gap-4 mt-10'>
                                <TextField
                                    {...register('firstname')}
                                    size="small"
                                    label="First Name"
                                    fullWidth
                                    error={!!errors.firstname}
                                    // helperText={errors.firstname?.message}
                                />
                                <TextField
                                    {...register('lastName')}
                                    size='small'
                                    label='Last Name'
                                    fullWidth
                                    error={!!errors.lastName}
                                    // helperText={errors.lastName?.message}
                                />
                                <TextField
                                    {...register('age')}
                                    size='small'
                                    label='Age'
                                    fullWidth
                                    error={!!errors.age}
                                    // helperText={errors.age?.message}
                                />
                                <TextField
                                    {...register('standard')}
                                    size='small'
                                    label='Standard'
                                    fullWidth
                                    error={!!errors.standard}
                                    // helperText={errors.standard?.message}
                                />
                                <TextField
                                    {...register('percentage')}
                                    size='small'
                                    label='Percentage'
                                    fullWidth
                                    error={!!errors.percentage}
                                    // helperText={errors.percentage?.message}
                                />
                            </div>
                            <div className='text-end mt-4'>
                                <Common_Button
                                    type='submit'
                                    className="h-10 w-16 bg-black text-white rounded"
                                    label={selectedRow ? "Update" : "ADD"}
                                />
                            </div>
                        </form>
                    </Box>
                </Modal>
            </div>
            {data.length > 0 ? (
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className='items-center'>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Standard</TableCell>
                                    <TableCell>Percentage</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.firstName}</TableCell>
                                        <TableCell>{item.lastName}</TableCell>
                                        <TableCell>{item.age}</TableCell>
                                        <TableCell>{item.std}</TableCell>
                                        <TableCell>{item.percentage}</TableCell>
                                        <TableCell className='space-x-4'>
                                            <button className='cursor-pointer' onClick={() => handleEdit(item)}>
                                                <EditIcon />
                                            </button>
                                            <DeleteIcon className='cursor-pointer' onClick={() => handleDelete(item.id)} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ) : (
                <div className='text-center font-bold text-xl'>
                    <p>No data found....</p>
                </div>
            )}
        </div>
    );
}

export default UseFormPatientRegistration;
