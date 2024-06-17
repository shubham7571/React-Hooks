import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { NewContext } from '../contextapi/NewContext';

function BasicInformation() {
    const { details, setDetails } = useContext(NewContext)
    const { control, handleSubmit,reset } = useForm();

    const onSubmit = (data) => {
        let tempData = [...details]
        tempData.push(data)
        setDetails(tempData)
        reset()

    };
    console.log("details", details)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3' style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <div className=' grid grid-cols-3 gap-3'>
                <div>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="First Name"
                                id="firstName"
                                size='small'
                                fullWidth
                            />
                        )}
                    />
                </div>

                <div>
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Last Name"
                                id="lastName"
                                size='small'
                                fullWidth
                            />
                        )}
                    />
                </div>

                <div>
                    <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Address"
                                id="address"
                                size='small'
                                fullWidth
                            />
                        )}
                    />
                </div>

                <div>
                    <Controller
                        name="city"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="City"
                                id="city"
                                size='small'
                                fullWidth
                            />
                        )}
                    />
                </div>



            </div>
            <Button  type="submit" variant="contained" color="primary">Next</Button>
        </form>
    );
}

export default BasicInformation;