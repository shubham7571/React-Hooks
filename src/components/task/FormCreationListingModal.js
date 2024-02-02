import React, { useState } from 'react'
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Task2 from './FormListing';


function Task() {
    const [open, setOpen] = useState(false);

    const handleopen = () => {
        setOpen(true);
    };

    const handleclose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className=' m-10 flex justify-between '>
                <div className='space-x-4  '>
                    <TextField
                        label='FirstName/MobileName'
                        size='small'
                    />

                    < SearchIcon
                        className='bg-blue-500 text-white rounded  '
                        fontSize='large'
                    />
                </div>

                <button type='button' onClick={handleopen} className='bg-blue-500 rounded text-white  p-2 '>
                    + ADD
                </button>


            </div>

            <Task2 open={open} handleopen={handleopen} handleclose={handleclose} />


















        </div>
    )
}

export default Task