import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { NewContext } from './NewContext';
function BasicInformation() {
    const { details, setDetails } = useContext(NewContext)
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        let tempData = [...details]
        tempData.push(data)
        setDetails(tempData)

    };
    console.log("details", details)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-3' style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <div className=' grid grid-cols gap-3'>
                <div>
                    <Controller
                        name="Name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Name"
                                id="Name"
                                size='small'
                                fullWidth
                            />
                        )}
                    />
                </div>



                <div>
                    <Controller
                        name="dob"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Date of Birth"
                                id="dob"
                                size='small'
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                            />
                        )}
                    />
                </div>


                <div>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Email"
                                id="email"
                                size='small'
                                type="email"
                                fullWidth
                            />
                        )}
                    />
                </div>

                <div>
                    <Controller
                        name="mobile"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Mobile No"
                                id="mobile"
                                size='small'
                                type="tel"
                                fullWidth
                            />
                        )}
                    />
                </div>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <div className='grid '>
                                    <RadioGroup row aria-label="gender" {...field}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </div>
                            )}
                        />
                    </FormControl>
                </div>

            </div>
            <div className='space-x-4 '>
                <Button className='w-24 h-10' type="" variant="contained" color="primary">Previous</Button>
                <Button className='w-24 h-10' type="submit" variant="contained" color="primary">Next</Button>
            </div>
        </form>
    );
}

export default BasicInformation;