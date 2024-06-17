import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

function HookFormTask() {
    const [tableData, setTableData] = useState([]);
    const [tableHeaders, setTableHeaders] = useState([]);

    // react hook form 

    const { reset, setValue, handleSubmit, register } = useForm()
    

    const onSubmit = (data) => {
        let tempObj = [...tableData]   
        let tableObject = {
            "First Name": data?.firstName,
            "Last Name": data?.lastName,
            age: data?.age,
            standard: data?.standard
        }
        tempObj.push(tableObject)
        setTableData(tempObj)
        console.log("data", data)
        reset();  
        // setValue("firstName", ""); // set the value after use

    }
    // use for thr header 
    useEffect(() => {
        if (tableData?.length > 0) {
            let headers = Object.keys(tableData[0]);
            setTableHeaders(headers);
        }
    }, [tableData])


    return (
        <div className='my-10   text-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className=' font-serif font-bold'> REACT  HOOK  FORM </label>

                <div className='space-x-10 mt-20'>
                    <TextField
                        label='First Name'
                        size='small'
                        variant='outlined'
                        {...register('firstName')}

                    />
                    <TextField
                        label='Last Name'
                        size='small'
                        variant='outlined'
                        {...register('lastName')}
                    />
                    <TextField
                        label='age'
                        size='small'
                        variant='outlined'
                        {...register('age')}

                    />
                    <TextField
                        label='standard'
                        size='small'
                        variant='outlined'
                        {...register('standard')}

                    />
                    <Button type='submit' variant='contained' > Save</Button>
                </div>
                {
                    tableData.length > 0 ?
                        <div className='mt-10'>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            {
                                                tableHeaders?.length > 0 ?
                                                    tableHeaders.map((header, index) => (
                                                        <TableCell key={index}>{header}</TableCell>
                                                    )) :
                                                    ("")
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            tableData?.length > 0 ?
                                                tableData.map((row) => (
                                                    <TableRow>
                                                        <>

                                                            {tableHeaders.map((header) => (
                                                                <TableCell key={header}>{row[header]}</TableCell>
                                                            ))}
                                                        </>
                                                    </TableRow>
                                                )) : null
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        : (
                            <div className=' text-center '>
                                <p className='font-bold text-lg font-serif mt-20 '>No Record Found ...</p>
                            </div>
                        )}

            </form >
        </div >
    )
}

export default HookFormTask