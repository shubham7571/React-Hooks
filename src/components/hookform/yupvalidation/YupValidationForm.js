import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function YupValidationForm() {
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [tableHeaders, setTableHeaders] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        reset();
    };
    const handleConfirmOpen = (index) => {
        setDeleteIndex(index);
        setConfirmOpen(true);
    };
    const handleConfirmClose = () => setConfirmOpen(false);

    // Yup Validation
    const schema = yup.object({
        firstname: yup.string().required('First name is required'),
        lastname: yup.string().required('Last name is required'),
        mobileno: yup.string().matches(/^\d{10,12}$/, 'Mobile number must be between 10 and 12 digits').required('Mobile number is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        age: yup.number().required('Age is required').positive('Age must be a positive number').integer('Age must be an integer'),
        address: yup.string().required('Address is required'),
        aadharcard: yup.string().required('Aadhar card is required').matches(/^\d{12}$/, 'Aadhar card must be exactly 12 digits'),
        pancard: yup.string().required('PAN card is required').matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'PAN card must be in the format ABCDE1234F'),
        voterid: yup.string().required('Voter ID is required').matches(/^[A-Z]{3}[0-9]{7}$/, 'Voter ID must be in the format ABC1234567'),

    }).required();

    const { reset, handleSubmit, register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        if (isEdit) {
            let tempObj = [...tableData];
            tempObj[currentIndex] = {
                "First Name": data.firstname,
                "Last Name": data.lastname,
                "Age": data.age,
                "Address": data.address,
                "Mobile No": data.mobileno,
                "Email": data.email,
                "Aadhar Card": data.aadharcard,
                "PAN Card": data.pancard,
                "Voter ID": data.voterid,

            };
            setTableData(tempObj);
            setIsEdit(false);
            setCurrentIndex(null);
            toast.success('Record update successfully!', { position: "bottom-left" });

        } else {
            let tempObj = [...tableData];
            let tableObject = {
                "First Name": data.firstname,
                "Last Name": data.lastname,
                "Mobile No": data.mobileno,
                "Email": data.email,
                "Age": data.age,
                "Address": data.address,
                "Aadhar Card": data.aadharcard,
                "PAN Card": data.pancard,
                "Voter ID": data.voterid,
            };
            tempObj.push(tableObject);
            setTableData(tempObj);
            toast.success('Record  added successfully!', { position: "bottom-left" });

        }
        reset();
        handleClose();
    };

    const handleEdit = (index) => {
        const selectedRow = tableData[index];
        setValue('firstname', selectedRow['First Name']);
        setValue('lastname', selectedRow['Last Name']);
        setValue('age', selectedRow['Age']);
        setValue('address', selectedRow['Address']);
        setValue('mobileno', selectedRow['Mobile No']);
        setValue('email', selectedRow['Email']);
        setValue('aadharcard', selectedRow['Aadhar Card']);
        setValue('pancard', selectedRow['PAN Card']);
        setValue('voterid', selectedRow['Voter ID']);
        setIsEdit(true);
        setCurrentIndex(index);
        handleOpen();

    };

    const handleDelete = () => {
        let tempObj = [...tableData];
        tempObj.splice(deleteIndex, 1);
        setTableData(tempObj);
        handleConfirmClose();
        toast.error('Record deleted successfully!', { position: "bottom-left" });

    };

    // Use for the header
    useEffect(() => {
        if (tableData.length > 0) {
            let headers = Object.keys(tableData[0]);
            setTableHeaders(headers);
        }
    }, [tableData]);

    return (
        <div>
            <ToastContainer/>
            <div className='text-end m-10'>
                <button onClick={handleOpen} className='bg-black h-10 w-28 rounded  text-white' >Open Modal</button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <button
                            type="button"
                            onClick={handleClose}
                            style={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                            }}
                        >
                            <CancelIcon />
                        </button>

                        <div className='grid grid-cols-4 gap-4 my-5'>
                            <TextField
                                label="First Name"
                                size='small'
                                variant="outlined"
                                {...register('firstname')}
                                error={!!errors.firstname}
                            // helperText={errors.firstname?.message}
                            />
                            <TextField
                                label="Last Name"
                                size='small'
                                variant="outlined"
                                {...register('lastname')}
                                error={!!errors.lastname}
                            // helperText={errors.lastname?.message}
                            />
                            <TextField
                                label="Mobile No"
                                size='small'
                                variant="outlined"
                                {...register('mobileno')}
                                error={!!errors.mobileno}
                            // helperText={errors.mobileno?.message}
                            />
                            <TextField
                                label="Email"
                                size='small'
                                variant="outlined"
                                {...register('email')}
                                error={!!errors.email}
                            // helperText={errors.email?.message}
                            />
                            <TextField
                                label="Age"
                                size='small'
                                variant="outlined"
                                {...register('age')}
                                error={!!errors.age}
                            // helperText={errors.age?.message}
                            />
                            <TextField
                                label="Address"
                                size='small'
                                variant="outlined"
                                {...register('address')}
                                error={!!errors.address}
                            // helperText={errors.address?.message}
                            />
                            <TextField
                                label="Aadhar Card"
                                size='small'
                                variant="outlined"
                                {...register('aadharcard')}
                                error={!!errors.aadharcard}
                            />
                            <TextField
                                label="Pan Card"
                                size='small'
                                variant="outlined"
                                {...register('pancard')}
                                error={!!errors.pancard}
                            />
                            <TextField
                                label="Voter Id"
                                size='small'
                                variant="outlined"
                                {...register('voterid')}
                                error={!!errors.voterid}
                            />
                        </div>
                        <div className='text-end'>
                            <button type="submit" className='bg-black h-10 w-16 rounded font-semibold text-white'>  {isEdit ? 'Update' : 'Save'}</button>
                        </div>
                    </form>
                </Box>
            </Modal>
            <Dialog
                open={confirmOpen}
                onClose={handleConfirmClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this row?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className='bg-black h-10 w-16 rounded   text-white' onClick={handleConfirmClose} color="primary">
                        Cancel
                    </button>
                    <button  className='bg-black h-10 w-16 rounded   text-white' onClick={handleDelete} color="primary" autoFocus>
                        Delete
                    </button>
                </DialogActions>
            </Dialog>
            <div>
                {tableData.length > 0 ? (
                    <div className='mt-10'>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {tableHeaders.length > 0 ? (
                                            tableHeaders.map((header, index) => (
                                                <TableCell key={index}>{header}</TableCell>
                                            ))
                                        ) : (
                                            ""
                                        )}
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData.length > 0 ? (
                                        tableData.map((row, rowIndex) => (
                                            <TableRow key={rowIndex}>
                                                {tableHeaders.map((header) => (
                                                    <TableCell key={header}>{row[header]}</TableCell>
                                                ))}
                                                <TableCell>
                                                    <IconButton onClick={() => handleEdit(rowIndex)}>
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleConfirmOpen(rowIndex)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : null}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                ) : (
                    <div className='text-center'>
                        <p className='font-bold text-lg font-serif mt-20'>No Record Found ...</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default YupValidationForm;
