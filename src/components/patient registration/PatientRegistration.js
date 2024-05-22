import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BloodGroupApi, GenderApi, IsdApi, MarriedStatusApi, NationalityApi, Prefix, PrefixApi } from '../../services/PatientRegistration';
import { API_COMMON_URL } from '../../http';

function PatientRegistration() {
    const { register, handleSubmit, reset, watch } = useForm();
    const [selectedGender, setSelectedGender] = useState('');
    const [prefix, setPrefix] = useState([]);
    const [isd, setIsd] = useState([]);
    const [marriedStatus, setMarriedStatus] = useState([]);
    const [gender, setGender] = useState([]);
    const [blood, setBlood] = useState([]);
    const [nationality, setNationality] = useState([]);


    const [prefixName, setPrefixName] = useState([]);
    const [genderName, setGenderName] = useState(null)
    const [maritalStatus, setMaritalStatus] = useState({})
    const [bloodGroup, setBloodGroup] = useState([])
    const [nationalityName, setNationalityName] = useState([])
    const [isdCode, setIsdCode] = useState([])


    //calculation of age years months days
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

    const onSubmit = async (data) => {
        const { years, months, days } = calculateAge(data.dob);
        const formData = { ...data, years, months, days, gender: selectedGender };
        let tempObj = {
            email: data?.email,
            dob: data?.dob,
            age: data?.age,
            gender: {
                id: genderName?.id,
                genderName: genderName?.value
            },
            maritalStatusId: {
                id: maritalStatus?.id,
                maritalStatusName: maritalStatus?.value
            },
            isdCode: {
                id: isdCode?.id,
                isdCode: isdCode?.value
            },
            nationality: {
                id: nationalityName?.id,
                nationalityName: nationalityName?.value
            },
            bloodGroup: {
                id: bloodGroup?.id,
                bloodGroup: bloodGroup?.value
            },
            mob: data?.mob,
            prefix: {
                id: prefixName?.id,
                prefix: prefixName?.value
            },
            fname: data?.firstName,
            mname: data?.middleName,
            lname: data?.lastName,
            mob: data?.mobile,
        }
        console.log("tempArr", tempObj);


        //post api
        axios.post(`${API_COMMON_URL}/registration/saveUser`, tempObj)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })


        reset();
    };

    const dob = watch('dob');

    const ageDetails = dob ? calculateAge(dob) : { age: '', years: '', months: '', days: '' };

    const handleAddPrefix = (value, id) => {
        setPrefixName({ value: value, id: id })

    }
    const handleAddGender = (value, id) => {
        setGenderName({ value: value, id: id })

    }
    const handleMaritalStatus = (value, id) => {
        setMaritalStatus({ value: value, id: id })
    }
    const handleAddBloodGroup = (value, id) => {
        setBloodGroup({ value: value, id: id })
    }
    const handleNationality = (value, id) => {
        setNationalityName({ value: value, id: id })
    }
    const handleIsd = (value, id) => {
        setIsdCode({ value: value, id: id })
    }
    // get apis
    useEffect(() => {
        // preFix api
        PrefixApi()
            .then((res) => {
                console.log("res", res);
                setPrefix(res);
            })
            .catch((error) => {
                console.log(error);
            })
        //Married Status api
        MarriedStatusApi()
            .then((res) => {
                setMarriedStatus(res)
            })
            .catch((error) => {
                console.log(error)
            })
        //Gender api
        GenderApi()
            .then((res) => {
                setGender(res)
            })
            .catch((error) => {
                console.log(error)
            })
        //bloodgroup api
        BloodGroupApi()
            .then((res) => {
                setBlood(res)
            })
            .catch((error) => {
                console.log(error)
            })
        //NationalityApi
        NationalityApi()
            .then((res) => {
                setNationality(res)
            })
            .catch((error) => {
                console.log(error)
            })
        //Isdapi
        IsdApi()
            .then((res) => {
                setIsd(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);


    return (
        <form className='m-4 border ' onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow-lg p-2 rounded">
                <div>
                    {/* Patient Basic Information */}
                    <div className='m-2'>
                        <div className='grid grid-cols-3 gap-2 my-4'>
                            <TextField
                                id="search"
                                name='Search By Patient Name/UHID/Mobile No'
                                size="small"
                                className='w-full'
                                label="Search By Patient Name/UHID/Mobile No "
                                variant="outlined"
                                {...register('search')}
                            />
                            <TextField
                                id="email"
                                name='email'
                                size="small"
                                className='w-full'
                                label="Email Id"
                                variant="outlined"
                                {...register('email')}
                            />
                            <TextField
                                id="registrationDate"
                                name='registrationDate'
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
                                    name='prefix'
                                    label="Prefix*"
                                    size='small'
                                    {...register('prefix')}
                                >
                                    {
                                        prefix?.length > 0
                                            ? prefix.map((item, index) => (
                                                <MenuItem onClick={() => { handleAddPrefix(item.value, item.id) }} key={index} value={item.value}>{item.name}</MenuItem>
                                            ))
                                            : null
                                    }
                                </Select>
                            </FormControl>

                            <TextField
                                id="firstName"
                                name='firstName'
                                size="small"
                                label="First Name *"
                                variant="outlined"
                                {...register('firstName')}
                            />
                            <TextField
                                id="middleName"
                                name='middleName'
                                className='w-full'
                                size="small"
                                label="Middle Name"
                                variant="outlined"
                                {...register('middleName')}
                            />
                            <TextField
                                id="lastName"
                                name='lastName'
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
                                name='dob'
                                size="small"
                                label="Date of Birth"
                                InputLabelProps={{ shrink: true }}
                                type='date'
                                variant="outlined"
                                {...register('dob')}
                            />
                            <TextField
                                id="age"
                                name='age'
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
                                name='years'
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
                                name='months'
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
                                name='days'
                                size="small"
                                label="Days"
                                variant="outlined"
                                value={ageDetails.days}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <FormControl>
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    id="gender"
                                    name='gender'
                                    label="Gender"
                                    size='small'
                                    className='min-w-[120px]'
                                >
                                    {
                                        gender?.map((item, index) => (
                                            <MenuItem onClick={() => { handleAddGender(item.value, item.id) }} key={index} value={item.value}>{item.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>


                        </div>
                        <div className='grid grid-cols-5 gap-4'>
                            <FormControl>
                                <InputLabel id="isd-label">ISD*</InputLabel>
                                <Select
                                    labelId="isd-label"
                                    id="isd"
                                    name='isd'
                                    label="ISD*"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('isd')}
                                >
                                    {
                                        isd?.map((item, index) => (
                                            <MenuItem onClick={() => { handleIsd(item.value, item.id) }} key={index} value={item.value}>{item.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <TextField
                                id="mobile"
                                name='mobile'
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
                                    name='maritalStatus'
                                    label="Marital Status"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('maritalStatus')}
                                >
                                    {
                                        marriedStatus?.map((item, index) => (
                                            <MenuItem onClick={() => { handleMaritalStatus(item.value, item.id) }} key={index} value={item.value}>{item.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="nationality-label">Nationality</InputLabel>
                                <Select
                                    labelId="nationality-label"
                                    id="nationality"
                                    name='nationality'
                                    label="Nationality"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('nationality')}
                                >
                                    {
                                        nationality.map((item, index) => (
                                            <MenuItem onClick={() => { handleNationality(item.value, item.id) }} key={index} value={item.value}>{item.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="bloodGroup-label">Blood Group</InputLabel>
                                <Select
                                    labelId="bloodGroup-label"
                                    id="bloodGroup"
                                    name='bloodGroup'
                                    label="Blood Group"
                                    size='small'
                                    className='min-w-[120px]'
                                    {...register('bloodGroup')}
                                >
                                    {
                                        blood?.map((item, index) => (
                                            <MenuItem onClick={() => { handleAddBloodGroup(item.value, item.id) }} key={index} value={item.value}>{item.name}</MenuItem>
                                        ))
                                    }
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
