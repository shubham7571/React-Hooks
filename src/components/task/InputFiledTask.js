import React, { useEffect, useRef, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';


function InputFeildTask() {
    const [value, setValue] = useState([

    ]);
    const Inpu1 = useRef(null)

    useEffect(() => {
        Inpu1.current.focus();
    }, [])

    const handlekeydown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setValue([...value, e.target.value]);
            e.target.value = '';
        }
    }

    return (
        <div>
            <div>
                <input className='border border-black m-10' ref={Inpu1} onKeyDown={(e) => handlekeydown(e)} onChange={(e) => { }} />
            </div>
            <div className='mt-20'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 260 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='bg-red-600'>
                                <TableCell sx={{ color: 'white' }}>Action</TableCell>
                                <TableCell sx={{ color: 'white' }}>Confirm</TableCell>
                                <TableCell sx={{ color: 'white' }}> TextField</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {value.map((item, index) => (
                                <TableRow key={index}  >
                                    <TableCell>Action</TableCell>
                                    <TableCell><Checkbox /></TableCell>
                                    <TableCell>{item}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    );
}


export default InputFeildTask