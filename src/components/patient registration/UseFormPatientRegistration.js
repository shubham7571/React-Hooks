import { Box, Button, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
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

function UseFormPatientRegistration() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { reset, handleSubmit, register } = useForm();

    const [data, setData] = useState([]);
    console.log("data", data);
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
    const onSubmit = (data) => {
        const tempObj = {
            firstName: data?.firstname,
            lastName: data?.lastName,
            age: data?.age,
            std: data?.standard,
            percentage: data?.percentage
        }
        console.log("tempObj", tempObj)
        reset();
    }
    useEffect(() => {
        axios.get(`http://192.168.84.12:8080/StudentsList`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }, [])
    return (
        <div>
            <div className='text-end m-2'>
                <Button variant='contained' onClick={handleOpen}> ADD Student</Button>
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
                                    {...register('firstName')}
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
                                <Button variant='contained' type='submit' >Save</Button>
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
                                <TableRow>
                                    <TableCell >firstname </TableCell>
                                    <TableCell >lastName  </TableCell>
                                    <TableCell >age </TableCell>
                                    <TableCell >standard </TableCell>
                                    <TableCell >percentage </TableCell>
                                    <TableCell >Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data.map((item) => (
                                        <TableRow
                                            key={item.id}
                                        >
                                            <TableCell  >
                                                {item.firstName}
                                            </TableCell>
                                            <TableCell  >
                                                {item.lastName}
                                            </TableCell>
                                            <TableCell  >
                                                {item.age}
                                            </TableCell>
                                            <TableCell >
                                                {item.std}
                                            </TableCell>
                                            <TableCell  >
                                                {item.percentage}
                                            </TableCell>
                                            <TableCell  >

                                            </TableCell>

                                        </TableRow>
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            ) : (
                <p>No data found</p>
           )}
        </div>
    )
}

export default UseFormPatientRegistration