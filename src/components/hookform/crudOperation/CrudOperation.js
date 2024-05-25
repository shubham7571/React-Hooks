import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CrudOperation() {
    const [tableData, setTableData] = useState([]);
    const [editRow, setEditRow] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        address: ''
    });
    //useEffect Hook
    useEffect(() => {
        if (editRow !== null) {
            setFormData(editRow);
        } else {
            setFormData({
                firstName: '',
                middleName: '',
                lastName: '',
                address: ''
            });
        }
    }, [editRow]);
    //Form Submission (handleSubmit)
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
    };
    //Deleting a Row (handleDelete)
    const handleDelete = (index) => {
        // const tempArr = [...tableData];
        // tempArr.splice(index, 1);
        // setTableData(tempArr);

        // or filter  method
        setTableData(tableData.filter((row, i) => i !== index));
    };
    //Handling Input Changes (handleInputChange)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    //Rendering the Form and Table
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-20 text-center justify-center flex space-x-2">
                    <div><TextField size='small' label="First Name" name='firstName' value={formData.firstName} onChange={handleInputChange} /></div>
                    <div><TextField size='small' label="Middle Name" name='middleName' value={formData.middleName} onChange={handleInputChange} /></div>
                    <div><TextField size='small' label="Last Name" name='lastName' value={formData.lastName} onChange={handleInputChange} /></div>
                    <div><TextField size='small' label="Address" name='address' value={formData.address} onChange={handleInputChange} /></div>
                    <div>
                        <Button variant='contained' size='small' className='h-10 w-20' type='submit'>
                            {editRow === null ? 'Add' : 'Update'}
                        </Button>
                    </div>
                </div>
            </form>
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
                            {tableData.map((item, index ,row) => (
                                <TableRow key={index}>
                                    <TableCell align="right">{item.firstName}</TableCell>
                                    <TableCell align="right">{item.middleName}</TableCell>
                                    <TableCell align="right">{item.lastName}</TableCell>
                                    <TableCell align="right">{item.address}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => setEditRow(item)}><EditIcon /></Button>
                                        <Button onClick={() => handleDelete(index,row)}><DeleteIcon /></Button>
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
