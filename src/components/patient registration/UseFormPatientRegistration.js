import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from "react-icons/io5";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

function UseFormPatientRegistration() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const { reset, handleSubmit, register, setValue } = useForm();
    const [data, setData] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedRow(null);
        reset(); // Clear form data when modal is closed
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
            axios.put(`http://192.168.138.12:8080/updateStudent/${selectedRow.id}`, tempObj)
                .then(() => {
                    getDataFromDataBase();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios.post(`http://192.168.138.12:8080/student/save`, tempObj)
                .then(() => {
                    getDataFromDataBase();
                })
                .catch((error) => {
                    console.log("error", error);
                });
        }

        handleClose();
    };

    const getDataFromDataBase = () => {
        axios.get(`http://192.168.138.12:8080/StudentsList`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const handleEdit = (row) => {
        setSelectedRow(row);
        handleOpen();
    };

    const handleDelete = (id) => {
        axios.delete(`http://192.168.138.12:8080/deleteStudent/${id}`)
            .then(() => {
                getDataFromDataBase();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className='text-end m-2'>
                <Button variant='contained' onClick={handleOpen}>ADD Student</Button>
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
                                />
                                <TextField
                                    {...register('lastName')}
                                    size='small'
                                    label='Last Name'
                                    fullWidth
                                />
                                <TextField
                                    {...register('age')}
                                    size='small'
                                    label='Age'
                                    fullWidth
                                />
                                <TextField
                                    {...register('standard')}
                                    size='small'
                                    label='Standard'
                                    fullWidth
                                />
                                <TextField
                                    {...register('percentage')}
                                    size='small'
                                    label='Percentage'
                                    fullWidth
                                />
                            </div>
                            <div className='text-end mt-4'>
                                <Button variant='contained' type='submit'>
                                    {selectedRow ? "Update" : "Add"}
                                </Button>
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
