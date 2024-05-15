import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { object } from 'yup';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.breakpoints.up('sm')}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${theme.breakpoints.down('sm')}`]: {
        fontSize: 14,
    },
}));

function ReuseableTable({ }) {
    const StudentData = [{
        name: "tushar",
        last: "sawant"
    },
    {
        name: "kiran",
        age: 12

    },
    {
        name: "jafar",
        address: "pune"
    }]


    // console.log("data Result", StudentData);
    let headers = [];
    StudentData.forEach((list) => {
        let temp = Object.keys(list)
        temp.forEach((key) => {
            if (!headers.includes(key)) {
                headers.push(key);
            }
        })


        // Object.key(list)

    })

    // let headers = [];
    // data.forEach((item) => {
    //     let temp = Object.keys(item);
    //     temp.forEach((key) => {
    //         if (!headers.includes(key)) {
    //             headers.push(key);
    //         }
    //     });
    // });

    // let minheaders = [...new Set(headers)]


    console.log("headers", headers);
    // console.log("minheaders", minheaders);
    return (
        <div>
            {StudentData.length === 0 ? '' :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {headers.map((header) => (
                                    <StyledTableCell>{header}</StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {StudentData.map((data, index) => (
                                <TableRow key={index}>
                                    {headers.map((header) => (
                                        <StyledTableCell>{data[header]}</StyledTableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>

    )
}

export default ReuseableTable;