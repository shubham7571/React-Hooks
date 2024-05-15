import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import React from 'react'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${theme.breakpoints.up('sm')}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${theme.breakpoints.down('sm')}`]: {
        fontSize: 14,
    },
}));
function CommonTable(props) {
    const {
        dataResult,
    } = props
    let headers = [];
    if (dataResult?.length > 0) {
        dataResult.forEach((list) => {
            let temp = Object.keys(list)
            temp.forEach((key) => {
                if (!headers.includes(key)) {
                    headers.push(key);
                }
            })
        })
    }

    return (
        <div>
            {dataResult?.length > 0 ? (
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
                            {dataResult?.map((data, index) => (
                                <TableRow key={index}>
                                    {headers.map((header) => (
                                        <StyledTableCell>{data[header]}</StyledTableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>) : (
                <p className='text-center my-28'>No Record Found...</p>
            )}



        </div>
    )
}

export default CommonTable