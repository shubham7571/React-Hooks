import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Usetable from './Usetable';



function Table() {
    const [details, setDetails] = useState([]);
    const Header =["First Name","Last Name","Last Name","Address","Mobile No"]
    
    const { register,
        handleSubmit,
        reset

    } = useForm();
    const onSubmit = (data) => {
        let tem = [...details]
        tem.push(data)
        setDetails(tem)
        console.log(data);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-3  w-[140vh] mt-4 p-2 border border-black mx-auto  h-[35vh]'>
                    <TextField id="outlined-basic" size='small '{...register('FirstName', { required: true })} className='w-[40vh]' label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" size='small ' {...register('MiddleName', { required: true })} className='w-[40vh]' label=" Middle Name" variant="outlined" />
                    <TextField id="outlined-basic" size='small '  {...register('LastName', { required: true })} className='w-[40vh]' label=" last name" variant="outlined" />
                    <TextField id="outlined-basic" size='small ' {...register('Address', { required: true })} className='w-[40vh]' label=" Address" variant="outlined" />
                    <TextField id="outlined-basic" size='small ' {...register('MobileNo', { required: true })} className='w-[40vh] ' label="Mobile No" variant="outlined" />
                    <Button className=' w-10 h-10  mt-4' variant='contained' type='submit' >Submit</Button>
                </div>
            </form>
            <Usetable
                  TableInfo={details}
                  header={Header}
            />

        </div>
    )
}

export default Table