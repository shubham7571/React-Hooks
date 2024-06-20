import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Reuse() {
    const textFieldArray = [
        {
            id: 1,
            label: "Name",
            type: "text",
            size: 'small'
        },
        {
            id: 2,
            label: "Password",
            type: "password",
            size: 'small'
        },
        // {
        //     id: 3,
        //     label: "Phone",
        //     type: "number",
        //     size: 'small'
        // },
    ];

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || password === '') {
            alert('Please fill all fields');

        } else {
            alert('Form submitted');

        }
        console.log('Name:', name, 'Password:', password);
    };

    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                {textFieldArray.map((textField) => (
                    <div key={textField.id} className='my-2 '>
                        <TextField
                            type={textField.id === 2 ? (showPassword ? 'text' : 'password') : textField.type}
                            label={textField.label}
                            size={textField.size}
                            value={textField.id === 1 ? name : password}
                            onChange={textField.id === 1 ? handleChangeName : handleChangePassword}
                            InputProps={
                                textField.id === 2 && {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }
                            }
                            style={{ width: '10rem', height: '2rem', margin: '0.5rem' }}
                        />
                    </div>
                ))}
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Save</button>
            </form>
        </div>
    );
}

export default Reuse;
