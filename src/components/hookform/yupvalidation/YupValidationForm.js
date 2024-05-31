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
        reset(); // empty the text fields or form
    };
    const handleConfirmOpen = (index) => {
        setDeleteIndex(index);
        setConfirmOpen(true);
    };
    const handleConfirmClose = () => setConfirmOpen(false);

    // Yup Validation
    const schema = yup.object({
        firstname: yup.string().required("Please enter your first name"),
        lastname: yup.string().required("Please enter your last name"),
        age: yup.number().required("Please enter your age"),
        address: yup.string().required("Please enter your address"),
        mobileno: yup.string().required("Please enter your mobile number"),
        email: yup.string().email("Invalid email").required("Please enter your email")
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
                "Email": data.email
            };
            setTableData(tempObj);
            setIsEdit(false);
            setCurrentIndex(null);
        } else {
            let tempObj = [...tableData];
            let tableObject = {
                "First Name": data.firstname,
                "Last Name": data.lastname,
                "Age": data.age,
                "Address": data.address,
                "Mobile No": data.mobileno,
                "Email": data.email
            };
            tempObj.push(tableObject);
            setTableData(tempObj);
        }
        reset(); // empty the text fields or form
        handleClose(); // close the modal
    };

    const handleEdit = (index) => {
        const selectedRow = tableData[index];
        setValue('firstname', selectedRow['First Name']);
        setValue('lastname', selectedRow['Last Name']);
        setValue('age', selectedRow['Age']);
        setValue('address', selectedRow['Address']);
        setValue('mobileno', selectedRow['Mobile No']);
        setValue('email', selectedRow['Email']);
        setIsEdit(true);
        setCurrentIndex(index);
        handleOpen();
    };

    const handleDelete = () => {
        let tempObj = [...tableData];
        tempObj.splice(deleteIndex, 1);
        setTableData(tempObj);
        handleConfirmClose();
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
            <div className='text-end m-10'>
                <Button onClick={handleOpen} variant='contained'>Open modal</Button>
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
                                helperText={errors.firstname?.message}
                            />
                            <TextField
                                label="Last Name"
                                size='small'
                                variant="outlined"
                                {...register('lastname')}
                                error={!!errors.lastname}
                                helperText={errors.lastname?.message}
                            />
                            <TextField
                                label="Age"
                                size='small'
                                variant="outlined"
                                {...register('age')}
                                error={!!errors.age}
                                helperText={errors.age?.message}
                            />
                            <TextField
                                label="Address"
                                size='small'
                                variant="outlined"
                                {...register('address')}
                                error={!!errors.address}
                                helperText={errors.address?.message}
                            />
                            <TextField
                                label="Mobile No"
                                size='small'
                                variant="outlined"
                                {...register('mobileno')}
                                error={!!errors.mobileno}
                                helperText={errors.mobileno?.message}
                            />
                            <TextField
                                label="Email"
                                size='small'
                                variant="outlined"
                                {...register('email')}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            
                        </div>
                        <div className='text-end'>
                            <button type="submit" className='bg-black h-10 w-16 rounded font-semibold text-white'>SAVE</button>
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
                    <Button onClick={handleConfirmClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Delete
                    </Button>
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
