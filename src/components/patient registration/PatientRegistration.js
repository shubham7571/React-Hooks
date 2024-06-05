import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import ProfilePhoto from '../assects/ProfilePhoto.webp'
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';

import { BloodGroupApi, GenderApi, IsdApi, MarriedStatusApi, NationalityApi, PrefixApi, cityApi, countryApi, districtApi, stateApi, talukaApi } from '../../services/PatientRegistration';
import { API_COMMON_URL } from '../../http';

function PatientRegistration() {
    const { register, handleSubmit, reset, control, watch, setValue } = useForm();
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [prefix, setPrefix] = useState([]);
    const [isd, setIsd] = useState([]);
    const [marriedStatus, setMarriedStatus] = useState([]);
    const [gender, setGender] = useState([]);
    const [blood, setBlood] = useState([]);
    const [nationality, setNationality] = useState([]);
    const [country, setCountry] = useState([])
    const [state, setState] = useState([]);
    const [district, setDistrict] = useState([]);
    const [taluka, setTaluka] = useState([]);
    const [city, setCity] = useState([]);

    // console.log("country", state);


    const [prefixName, setPrefixName] = useState({});
    const [genderName, setGenderName] = useState({})
    const [maritalStatus, setMaritalStatus] = useState({})
    const [bloodGroup, setBloodGroup] = useState({})
    const [nationalityName, setNationalityName] = useState({})
    const [isdCode, setIsdCode] = useState({});
    const [countryName, setCountryName] = useState({});
    const [stateName, setStateName] = useState({});
    const [districtName, setDistrictName] = useState({});
    const [talukaName, setTalukaName] = useState({});
    const [cityName, setCityName] = useState({});



    //upload profile
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setProfilePhoto(reader.result);
        };
        reader.readAsDataURL(file);
    };
    const handleUploadButtonClick = () => {
        document.getElementById('profile-photo-input').click();
    };

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

    const onSubmit = (data) => {

        console.log("data",data);

        let tempObj = {
            email: data?.email,
            dob: data?.dob,
            age: ageDetails?.age,
            prefix: {
                id: prefixName?.id,
                prefixName: prefixName?.value
            },
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
                isdCodeCode: isdCode?.value
            },
            nationality: {
                id: nationalityName?.id,
                nationalityName: nationalityName?.value
            },
            bloodGroup: {
                id: bloodGroup?.id,
                bloodGroupName: bloodGroup?.value
            },
            country: {
                id: countryName?.id,
                country_name: countryName?.value
            },
            state: {
                id: stateName?.id,
                state_name: stateName?.value
            },
            district: {
                id: districtName?.id,
                district_name: districtName?.value
            },
            taluka: {
                id: talukaName?.id,
                talukaName: talukaName?.value,
            },
            city: {
                id: cityName?.id,
                city_name: cityName?.value
            },


            fname: data?.firstName,
            mname: data?.middleName,
            lname: data?.lastName,
            mob: data?.mobile,
        };
        console.log("werhj", tempObj.country);
        axios.post(`${API_COMMON_URL}/registration/saveUser`, tempObj)
            .then((res) => {
                console.log(res.data);

            })
            .catch((error) => {
                console.log(error);
            });

        console.log('tempObj', tempObj);

        reset();
        setValue('prefix', '')
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
    const handleAddCountry = (value, id) => {
        setCountryName({ value: value, id: id })
    }
    const handleAddState = (value, id) => {
        setStateName({ value: value, id: id })
    }
    const handleAddDistrict = (value, id) => {
        setDistrictName({ value: value, id: id })
    }
    const handleAddTaluka = (value, id) => {
        setTalukaName({ value: value, id: id })
        console.log("id", id);
    }
    const handleAddCity = (value, id) => {
        setCityName({ value: value, id: id })
    }

    // patient  registraion  get apis
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
        //
        countryApi()
            .then((res) => {
                setCountry(res)
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);
    // address details get  apis
    useEffect(() => {
        // state Api
        if (countryName) {
            stateApi(countryName)
                .then((res) => {
                    setState(res)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        //District Api
        if (stateName) {
            districtApi(stateName)
                .then((response) => {
                    setDistrict(response)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        //taluka api
        if (districtName) {
            talukaApi(districtName)
                .then((response) => {
                    setTaluka(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        //city api
        if (talukaName) {
            cityApi(talukaName)
                .then((response) => {
                    setCity(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [countryName, stateName, districtName, talukaName])




    return (
        <form className='border-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='text-center h-16 p-4 font-bold text-xl tracking-wide bg-gray-200'>
                <h1>Patient Registration</h1>
            </div>
            <div className="shadow-2xl p-2 rounded">
                <div>
                    <h1 className='font-bold tracking-wide'>Patient Basic Information</h1>
                    <div className=''>
                        <div className='flex gap-6'>
                            <div>
                                <div className='grid grid-cols-3 gap-2 my-4'>
                                    <Controller
                                        name="search"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                id="search"
                                                size="small"
                                                className="w-full"
                                                label="Search By Patient Name/UHID/Mobile No"
                                                variant="outlined"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <SearchIcon fontSize="small" />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                id="email"
                                                size="small"
                                                className="w-full"
                                                label="Email Id"
                                                variant="outlined"
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="registrationDate"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                size="small"
                                                className='w-full'
                                                label="Registration Date"
                                                InputLabelProps={{ shrink: true }}
                                                type='date'
                                                variant="outlined"
                                            />
                                        )}
                                    />
                                </div>
                                <div className='grid grid-cols-3 gap-2 my-5'>
                                    <div className='flex justify-around gap-2'>
                                        <Controller
                                            name="prefix"
                                            control={control}
                                            render={({ field }) => (
                                                <FormControl>
                                                    <InputLabel id="prefix-label">Prefix*</InputLabel>
                                                    <Select
                                                        {...field}
                                                        labelId="prefix-label"
                                                        id="prefix"
                                                        label="Prefix*"
                                                        size="small"
                                                        className="w-40"
                                                    >
                                                        {prefix?.map((item, index) => (
                                                            <MenuItem key={index} value={item.value}>
                                                                {item.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            )}
                                        />
                                        <Controller
                                            name="firstName"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="firstName"
                                                    size="small"
                                                    label="First Name *"
                                                    className='w-40'
                                                    variant="outlined"
                                                />
                                            )}
                                        />
                                    </div>
                                    <Controller
                                        name="middleName"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                id="middleName"
                                                size="small"
                                                className='w-full'
                                                label="Middle Name"
                                                variant="outlined"
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                id="lastName"
                                                size="small"
                                                className='w-full'
                                                label="Last Name *"
                                                variant="outlined"
                                            />
                                        )}
                                    />
                                </div>
                                <div className='grid grid-cols-3 gap-2 my-5'>
                                    <div className='flex justify-around gap-2'>
                                        <Controller
                                            name="dob"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="dob"
                                                    size="small"
                                                    label="Date of Birth"
                                                    className='w-48'
                                                    InputLabelProps={{ shrink: true }}
                                                    type='date'
                                                    variant="outlined"
                                                />
                                            )}
                                        />
                                        <Controller
                                            name="age"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="age"
                                                    size="small"
                                                    label="Age"
                                                    className='w-48'
                                                    variant="outlined"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    <div className='flex justify-around space-x-3'>
                                        <Controller
                                            name="years"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="years"
                                                    size="small"
                                                    label="Years"
                                                    variant="outlined"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            )}
                                        />
                                        <Controller
                                            name="months"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="months"
                                                    size="small"
                                                    label="Months"
                                                    variant="outlined"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            )}
                                        />
                                        <Controller
                                            name="days"
                                            control={control}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    id="days"
                                                    size="small"
                                                    label="Days"
                                                    variant="outlined"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>
                                    <Controller
                                        name="gender"
                                        control={control}
                                        render={({ field }) => (
                                            <FormControl>
                                                <InputLabel id="gender-label">Gender</InputLabel>
                                                <Select
                                                    {...field}
                                                    labelId="gender-label"
                                                    id="gender"
                                                    label="Gender"
                                                    size='small'
                                                >
                                                    {gender?.map((item, index) => (
                                                        <MenuItem key={index} value={item.value}>
                                                            {item.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className='rounded border h-44 w-80 my-3 p-2'>
                                <input
                                    id="profile-photo-input"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <img className='h-36 w-72' src={profilePhoto || ProfilePhoto} alt="Profile" />
                                <button
                                    type="button"
                                    className="font-medium text-center text-blue-500 w-full"
                                    onClick={handleUploadButtonClick}
                                >
                                    UPLOAD PROFILE
                                </button>
                            </div>
                        </div>
                        <div className='flex space-x-4'>
                            <Controller
                                name="isd"
                                control={control}
                                render={({ field }) => (
                                    <FormControl className='w-24'>
                                        <InputLabel id="isd-label">ISD*</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="isd-label"
                                            id="isd"
                                            label="ISD*"
                                            size="small"
                                        >
                                            {isd?.map((item, index) => (
                                                <MenuItem key={index} value={item.value}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name="mobile"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        id="mobile"
                                        size="small"
                                        label="Mobile *"
                                        variant="outlined"
                                    />
                                )}
                            />
                            <Controller
                                name="maritalStatus"
                                control={control}
                                render={({ field }) => (
                                    <FormControl style={{ width: '28%' }}>
                                        <InputLabel id="maritalStatus-label">Marital Status</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="maritalStatus-label"
                                            id="maritalStatus"
                                            label="Marital Status"
                                            size="small"
                                        >
                                            {marriedStatus?.map((item, index) => (
                                                <MenuItem key={index} value={item.value}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name="nationality"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <FormControl className='w-64'>
                                        <InputLabel id="nationality-label">Nationality</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="nationality-label"
                                            id="nationality"
                                            label="Nationality"
                                            size="small"
                                        >
                                            {nationality.map((item, index) => (
                                                <MenuItem key={index} value={item.value}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name="bloodGroup"
                                control={control}
                                render={({ field }) => (
                                    <FormControl className='w-64'>
                                        <InputLabel id="bloodGroup-label">Blood Group</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="bloodGroup-label"
                                            id="bloodGroup"
                                            label="Blood Group"
                                            size="small"
                                        >
                                            {blood?.map((item, index) => (
                                                <MenuItem key={index} value={item.value}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </div>
                    </div>
                    <hr className="w-full border-t-2 border my-6" />
                    <div>
                        <h1 className='font-bold'>Address Details</h1>
                        <div className='grid grid-cols-4 gap-2 my-4'>
                            <Controller
                                name="houseNo"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        id="houseNo"
                                        size="small"
                                        label="House No/Flat No/Building Name"
                                        variant="outlined"
                                    />
                                )}
                            />
                            <Controller
                                name="streetAddress"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        id="streetAddress"
                                        size="small"
                                        label="Street Address"
                                        variant="outlined"
                                    />
                                )}
                            />
                            <Controller
                                name="country"
                                control={control}
                                render={({ field }) => (
                                    <FormControl>
                                        <InputLabel id="country-label">Country</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="country-label"
                                            label="Country"
                                            size="small"
                                            className="min-w-[200px]"
                                        >
                                            {country.map((item) => (
                                                <MenuItem onClick={() => { handleAddCountry(item.value, item.id) }} key={item.value} value={item.value}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name="state"
                                control={control}
                                render={({ field }) => (
                                    <FormControl>
                                        <InputLabel id="state-label">State</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="state-label"
                                            id="state"
                                            label="State"
                                            size='small'
                                            className="min-w-[200px]"
                                        >
                                            {state.map((item) => (
                                                <MenuItem onClick={() => { handleAddState(item.value, item.id) }} key={item.value} value={item.value}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </div>
                        <div className='grid grid-cols-4 gap-2 my-4'>
                            <div className='flex justify-around gap-2'>
                                <Controller
                                    name="district"
                                    control={control}
                                    render={({ field }) => (
                                        <FormControl>
                                            <InputLabel id="district-label">District</InputLabel>
                                            <Select
                                                {...field}
                                                labelId="district-label"
                                                id="district"
                                                label="District"
                                                size='small'
                                                className='w-36'
                                            >
                                                {district?.map((item) => (
                                                    <MenuItem onClick={() => { handleAddDistrict(item.value, item.id) }} key={item.value} value={item.value}>
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    name="taluka"
                                    control={control}
                                    render={({ field }) => (
                                        <FormControl>
                                            <InputLabel id="taluka-label">Taluka</InputLabel>
                                            <Select
                                                {...field}
                                                labelId="taluka-label"
                                                id="taluka"
                                                label="Taluka"
                                                size='small'
                                                className="w-36"
                                            >
                                                {taluka.map((item) => (
                                                    <MenuItem onClick={() => { handleAddTaluka(item.value, item.id) }} key={item.value} value={item.value}>
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </div>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <FormControl>
                                        <InputLabel id="city-label">City</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="city-label"
                                            id="city"
                                            label="City"
                                            size='small'
                                            className="min-w-[200px]"
                                        >
                                            {city?.map((item) => (
                                                <MenuItem onClick={() => { handleAddCity(item.value, item.id) }} key={item.value} value={item.value}>
                                                    {item.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                name="pincode"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        id="pincode"
                                        size="small"
                                        className='w-full'
                                        label="Pincode*"
                                        variant="outlined"
                                    />
                                )}
                            />
                            <Controller
                                name="area"
                                control={control}
                                render={({ field }) => (
                                    <FormControl>
                                        <InputLabel id="area-label">Area</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="area-label"
                                            id="area"
                                            label="Area"
                                            size='small'
                                        >
                                            <MenuItem value="Area1">Area1</MenuItem>
                                            <MenuItem value="Area2">Area2</MenuItem>
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        </div>
                    </div>
                    <div className='text-center my-6'>
                        <Button className='h-10 w-16' type='submit' variant='contained'>Submit</Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default PatientRegistration;
