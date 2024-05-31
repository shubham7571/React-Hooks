import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
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
export default function CrudOperation() {
    const [open, setOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [editRow, setEditRow] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        address: ''
    });

    useEffect(() => {
        if (editRow !== null) {
            setFormData(editRow);
            setOpen(true);
        } else {
            setFormData({
                firstName: '',
                middleName: '',
                lastName: '',
                address: ''
            });
        }
    }, [editRow]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let tempArr = [...tableData];
        if (editRow !== null) {
            const index = tempArr.findIndex(row => row === editRow);
            if (index !== -1) {
                tempArr[index] = formData;
                setTableData(tempArr);
                setEditRow(null);
            }
        } else {
            setTableData([...tableData, formData]);
        }
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            address: ''
        });
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
        setEditRow(null);
    };

    const handleClose = () => {
        setOpen(false);
        setEditRow(null);
    };

    const handleDelete = (index) => {
        setTableData(tableData.filter((row, i) => i !== index));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
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
                        <form onSubmit={handleSubmit} className=" my-10 text-center justify-center flex space-x-2">
                            <TextField size='small' label="First Name" name='firstName' value={formData.firstName} onChange={handleInputChange} />
                            <TextField size='small' label="Middle Name" name='middleName' value={formData.middleName} onChange={handleInputChange} />
                            <TextField size='small' label="Last Name" name='lastName' value={formData.lastName} onChange={handleInputChange} />
                            <TextField size='small' label="Address" name='address' value={formData.address} onChange={handleInputChange} />
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
