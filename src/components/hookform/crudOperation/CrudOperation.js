import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const validationSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    middleName: yup.string().required('Middle Name is required'),
    lastName: yup.string().required('Last Name is required'),
    address: yup.string().required('Address is required')
});

export default function CrudOperation() {
    const [open, setOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [editRow, setEditRow] = useState(null);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            address: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            let tempArr = [...tableData];
            if (editRow !== null) {
                const index = tempArr.findIndex(row => row === editRow);
                if (index !== -1) {
                    tempArr[index] = values;
                    setTableData(tempArr);
                    setEditRow(null);
                    toast.success('Record updated successfully!', { position: "bottom-left" });

                }
            } else {
                setTableData([...tableData, values]);
                toast.success('Record added successfully!', { position: "bottom-left" });

            }
            resetForm();
            setOpen(false);
        },
    });

    useEffect(() => {
        if (editRow !== null) {
            formik.setValues(editRow);
            setOpen(true);
        } else {
            formik.resetForm();
        }
    }, [editRow]);

    const handleOpen = () => {
        setOpen(true);
        setEditRow(null);
    };

    const handleClose = () => {
        setOpen(false);
        setEditRow(null);
        formik.resetForm();
    };

    const handleDelete = (index) => {
        setTableData(tableData.filter((row, i) => i !== index));
        toast.error('Record deleted successfully!', { position: "bottom-left" });
    };

    return (
        <div>
            <ToastContainer  position="bottom-left"/>
            <div className='text-end m-10 '>
                <Button variant='contained' onClick={handleOpen}>ADD NEW</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="">
                    <Box sx={style}>
                        <form onSubmit={formik.handleSubmit} className="my-10 text-center justify-center flex space-x-2">
                            <TextField
                                size='small'
                                label="First Name"
                                name='firstName'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            />
                            <TextField
                                size='small'
                                label="Middle Name"
                                name='middleName'
                                value={formik.values.middleName}
                                onChange={formik.handleChange}
                                error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                            />
                            <TextField
                                size='small'
                                label="Last Name"
                                name='lastName'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            />
                            <TextField
                                size='small'
                                label="Address"
                                name='address'
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                            />
                            <Button variant='contained' size='small' className='h-10 w-20' type='submit'>
                                {editRow === null ? 'Add' : 'Update'}
                            </Button>
                        </form>
                    </Box>
                </div>
            </Modal>
            {tableData.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">First Name</TableCell>
                                <TableCell align="right">Middle Name</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{item.firstName}</TableCell>
                                    <TableCell align="right">{item.middleName}</TableCell>
                                    <TableCell align="right">{item.lastName}</TableCell>
                                    <TableCell align="right">{item.address}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => setEditRow(item)}><EditIcon /></Button>
                                        <Button onClick={() => handleDelete(index)}><DeleteIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <h1 className='text-center text-xl mt-7'>No Result Found...</h1>
            )}
        </div>
    );
}
