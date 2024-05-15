import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

export default function CrudOperation() {
    const [tableData, setTableData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName: event.target.firstName.value,
            middleName: event.target.middleName.value,
            lastName: event.target.lastName.value,
            address: event.target.address.value
        };
        setTableData([...tableData, formData]); // Update tableData with new form data
        event.target.reset(); // Clear form fields after submission
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-20 text-center justify-center flex space-x-2">
                    <div><TextField size='small' label="First Name" name='firstName' /></div>
                    <div><TextField size='small' label="Middle Name" name='middleName' /></div>
                    <div><TextField size='small' label="Last Name" name='lastName' /></div>
                    <div><TextField size='small' label="Address" name='address' /></div>
                    <div>
                        <Button variant='contained' size='small' type='submit'>SAVE</Button>
                    </div>
                </div>
            </form>
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
                                        <Button>EDIT</Button>
                                        <Button>DELETE</Button>
                                    </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
