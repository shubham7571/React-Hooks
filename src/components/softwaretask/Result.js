import React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Bike from '../softwaretask/Bike.png';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



function Result(props) {

    return (
        <div className='w-[30vw] border   shadow-xl mt-16 mr-10 font-bold ' >
            <div className='flex   h-12  p-2  text-center w-full shadow-sm mb-4 border '>
                <h2 className='font-bold my-auto'>Bajaj CT100</h2>
                <img className='' src={Bike} />
                <p className='text-red-500 ml-40 text-xs my-auto'>Change</p>
            </div>
            <div className='p-4'>
                <div className='pb-4'>
                    <TextField id="outlined-basic" className='w-full -2' label="MH 00 XX 0000" size='small' />

                    <div className='flex justify-between '>

                        <h2>Periodic Maintenance Charge </h2>
                    <p className='text-xs'>Rs.{props.periodicMaintainanceCost} </p>
                    </div>

                </div>
                <div>
                    {props.selectedService.map((service,index)=>{
                        <div key={index}>
                            <h1>{props.service.name1}:</h1>
                            <h1>Rs.{props.service.price}</h1>

                        </div>
                    })}
                </div>
                <hr />
                <div className='py-2'>
                    <div className='flex justify-between '>
                        <h2>Total :</h2>
                        <p>Rs 2350</p>
                    </div>

                </div>
                <FormControl className='w-full  '>

                    <InputLabel  > Select Your Area</InputLabel>

                    <Select className='mt-3'
                        label='Slect Your Area'
                        id='Select Your Area'
                        size='small'>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Shirdi</MenuItem>
                        <MenuItem value={21}>Kopergaon</MenuItem>
                        <MenuItem value={22}>kolpewadi</MenuItem>
                    </Select>
                </FormControl>
                <div className='flex justify-between '>

                    <h1 className='font-bold my-auto'>Need pick-up& drop ?</h1>
                    <Switch defaultChecked
                    />
                </div>
                <button className='bg-blue-600  w-full font-bold h-9 text-gray-100'>Check Out</button>


            </div>
        </div>
    )
}

export default Result