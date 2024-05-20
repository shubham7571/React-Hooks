import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function PatientRegistration() {
    const { register, handleSubmit, reset, watch } = useForm();
    const [selectedGender, setSelectedGender] = useState('');


    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            age--;
            months += 12;
        }

        if (days < 0) {
            const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += previousMonth.getDate();
            months--;
        }

        const years = age;
        return { age: years, years, months, days };
    };

    const onSubmit = (data) => {
        const { years, months, days } = calculateAge(data.dob);
        const formData = { ...data, years, months, days, gender: selectedGender }; // Include selectedGender in the form data
        console.log("submit", formData);
        reset();
        setSelectedGender('');
    };

    const dob = watch('dob');

    const ageDetails = dob ? calculateAge(dob) : { age: '', years: '', months: '', days: '' };
    const handleGenderSelect = (value) => {
        setSelectedGender(value);
    };


    return (
        <form className='m-4' onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow-lg p-2 rounded">
                <div>
                    {/* Patient Basic Information */}
                    <div className='m-2'>
                        <div className='grid grid-cols-3 gap-2 my-4'>
                            <TextField
                                id="search"
                                size="small"
                                className='w-full'
                                label="Search By Patient Name/UHID/Mobile No "
                                variant="outlined"
                                {...register('search')}
                            />
                            <TextField
                                id="email"
                                size="small"
                                className='w-full'
                                label="Email Id"
                                variant="outlined"
                                {...register('email')}
                            />
                            <TextField
                                id="registrationDate"
                                size="small"
                                className='w-full'
                                label="Registration Date"
                                InputLabelProps={{ shrink: true }}
                                type='date'
                                variant="outlined"
                                {...register('registrationDate')}
                            />
                        </div>
                        <div className='grid grid-cols-4 gap-2 my-4'>
                            <FormControl>
                                <InputLabel id="prefix-label">Prefix*</InputLabel>
                                <Select
                                    labelId="prefix-label"
                                    id="prefix"
                                    label="Prefix*"
                                    size='small'
                                    {...register('prefix')}
                                >
                                    <MenuItem value="mr">Mr</MenuItem>
                                    <MenuItem value="miss">Miss</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="firstName"
                                size="small"
                                label="First Name *"
                                variant="outlined"
                                {...register('firstName')}
                            />
                            <TextField
                                id="middleName"
                                className='w-full'
                                size="small"
                                label="Middle Name"
                                variant="outlined"
                                {...register('middleName')}
                            />
                            <TextField
                                id="lastName"
                                className='w-full'
                                size="small"
                                label="Last Name *"
                                variant="outlined"
                                {...register('lastName')}
                            />
                        </div>
                        <div className='grid grid-cols-7 gap-2 my-4'>
                            <TextField
                                id="dob"
                                size="small"
                                label="Date of Birth"
                                InputLabelProps={{ shrink: true }}
                                type='date'
                                variant="outlined"
                                {...register('dob')}
                            />
                            <TextField
                                id="age"
                                size="small"
                                label="Age"
                                variant="outlined"
                                value={ageDetails.age}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="years"
                                size="small"
                                label="Years"
                                variant="outlined"
                                value={ageDetails.years}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="months"
                                size="small"
                                label="Months"
                                variant="outlined"
                                value={ageDetails.months}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="days"
                                size="small"
                                label="Days"
                                variant="outlined"
                                value={ageDetails.days}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <ButtonGroup variant="outlined" size='small' aria-label="Basic button group">
                                <div className="flex items-center">
                                    <h1 className="mr-2">Gender</h1>
                                    <Button
                                        onClick={() => handleGenderSelect('male')}
                                        style={{ backgroundColor: selectedGender === 'male' ? '#007bff' : '#fff', color: selectedGender === 'male' ? '#fff' : '#000' }}
                                    >
                                        Male
                                    </Button>
                                    <Button
                                        onClick={() => handleGenderSelect('female')}
                                        style={{ backgroundColor: selectedGender === 'female' ? '#007bff' : '#fff', color: selectedGender === 'female' ? '#fff' : '#000' }}
                                    >
                                        Female
                                    </Button>
                                    <Button
                                        onClick={() => handleGenderSelect('other')}
                                        style={{ backgroundColor: selectedGender === 'other' ? '#007bff' : '#fff', color: selectedGender === 'other' ? '#fff' : '#000' }}
                                    >
                                        Other
                                    </Button>
                                </div>
                            </ButtonGroup>

                        </div>
                        <div className='grid grid-cols-5 gap-4'>
                            <TextField
                                id="isd"
                                size="small"
                                label="ISD*"
                                variant="outlined"
                                {...register('isd')}
                            />
                            <TextField
                                id="mobile"
                                size="small"
                                label="Mobile *"
                                variant="outlined"
                                {...register('mobile')}
                            />
                            <FormControl>
                                <InputLabel id="maritalStatus-label">Marital Status</InputLabel>
                                <Select
                                    labelId="maritalStatus-label"
                                    id="maritalStatus"
                                    label="Marital Status"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('maritalStatus')}
                                >
                                    <MenuItem value="single">Single</MenuItem>
                                    <MenuItem value="married">Married</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="nationality-label">Nationality</InputLabel>
                                <Select
                                    labelId="nationality-label"
                                    id="nationality"
                                    label="Nationality"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('nationality')}
                                >
                                    <MenuItem value="Indian">Indian</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="bloodGroup-label">Blood Group</InputLabel>
                                <Select
                                    labelId="bloodGroup-label"
                                    id="bloodGroup"
                                    label="Blood Group"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('bloodGroup')}
                                >
                                    <MenuItem value="A+">A+</MenuItem>
                                    <MenuItem value="B+">B+</MenuItem>
                                    <MenuItem value="O+">O+</MenuItem>
                                    <MenuItem value="AB+">AB+</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {/* Patient Basic Information Close */}
                    {/* Address Details */}
                    <div>
                        <h1 className='p-2 font-medium'>Address Details</h1>
                        <div className='grid grid-cols-4 gap-4 p-2'>
                            <TextField
                                id="houseNo"
                                size="small"
                                label="House No/Flat No/Building Name"
                                variant="outlined"
                                {...register('houseNo')}
                            />
                            <TextField
                                id="streetAddress"
                                size="small"
                                label="Street Address"
                                variant="outlined"
                                {...register('streetAddress')}
                            />
                            <FormControl>
                                <InputLabel id="country-label">Country</InputLabel>
                                <Select
                                    labelId="country-label"
                                    id="country"
                                    label="Country"
                                    size='small'
                                    className="min-w-[200px]"
                                    {...register('country')}
                                >
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="state-label">State</InputLabel>
                                <Select
                                    labelId="state-label"
                                    id="state"
                                    label="State"
                                    size='small'
                                    className="min-w-[200px]"
                                    {...register('state')}
                                >
                                    <MenuItem value="State1">State1</MenuItem>
                                    <MenuItem value="State2">State2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='grid grid-cols-4 gap-4 p-2'>
                            <FormControl>
                                <InputLabel id="district-label">District</InputLabel>
                                <Select
                                    labelId="district-label"
                                    id="district"
                                    label="District"
                                    size='small'
                                    className="min-w-[200px]"
                                    {...register('district')}
                                >
                                    <MenuItem value="District1">District1</MenuItem>
                                    <MenuItem value="District2">District2</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="pincode"
                                size="small"
                                label="Pincode*"
                                variant="outlined"
                                {...register('pincode')}
                            />
                            <FormControl>
                                <InputLabel id="area-label">Area</InputLabel>
                                <Select
                                    labelId="area-label"
                                    id="area"
                                    label="Area"
                                    size='small'
                                    className="min-w-[200px]"
                                    {...register('area')}
                                >
                                    <MenuItem value="Area1">Area1</MenuItem>
                                    <MenuItem value="Area2">Area2</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="taluka-label">Taluka</InputLabel>
                                <Select
                                    labelId="taluka-label"
                                    id="taluka"
                                    label="Taluka"
                                    size='small'
                                    className="min-w-[200px]"
                                    {...register('taluka')}
                                >
                                    <MenuItem value="Taluka1">Taluka1</MenuItem>
                                    <MenuItem value="Taluka2">Taluka2</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="city-label">City</InputLabel>
                                <Select
                                    labelId="city-label"
                                    id="city"
                                    label="City"
                                    size='small'
                                    className="min-w-[200px]"
                                    {...register('city')}
                                >
                                    <MenuItem value="City1">City1</MenuItem>
                                    <MenuItem value="City2">City2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='text-center my-2'>
                        <Button className='h-10 w-16' type='submit' variant='contained'>Submit</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PatientRegistration;
