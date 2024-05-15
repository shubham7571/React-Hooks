import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import React, { useState } from 'react'
import InputFieldTable from './InputFieldTable';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.breakpoints.up('sm')}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${theme.breakpoints.down('sm')}`]: {
        fontSize: 14,
    },
}));
function ReuseableTable() {
    
    const [loginData, setLoginData] = useState([])
    const [open,setOpen] =useState(false)
    const handleOpen=()=>{setOpen(true)}
    const handleClose=()=>{setOpen(false)}
    // console.log("data Result", StudentData);
    let headers = [];
    loginData.forEach((list) => {
        let temp = Object.keys(list)
        temp.forEach((key) => {
            if (!headers.includes(key)) {
                headers.push(key);
            }
        })
    })

    return (
        <div>
            <div className='text-right m-4'>
                <Button variant='contained' onClick={handleOpen}>Add New</Button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <StyledTableCell>{header}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loginData.map((data, index) => (
                            <TableRow key={index}>
                                {headers.map((header) => (
                                    <StyledTableCell>{data[header]}</StyledTableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <InputFieldTable
                loginData={loginData}
                setLoginData={setLoginData}
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />

        </div>
    )
}

export default ReuseableTable