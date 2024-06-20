import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Usetable({ TableInfo }) {
    let header;
    TableInfo.forEach((list) => {
        return (
            header = Object.keys(list)
        )
    })
        return (
        <div className='mt-6'>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead >
                        <TableRow >
                            {
                                header?.map((item) => (
                                    <TableCell align="right">{item}</TableCell>
                                ))
                            }
                            {/* <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Middle Name </TableCell>
                            <TableCell align="right">Last Name </TableCell>
                            <TableCell align="right">Address </TableCell>
                            <TableCell align="right">Mobile No </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                     {TableInfo?.map((item)=>(
                        <TableRow>
                            {header?.map((abc)=>(
                                <TableCell>{item[abc]}</TableCell>
                            ))}
                        </TableRow>
                     ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default Usetable