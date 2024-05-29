import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, TextField, IconButton } from '@mui/material';

function PasswordShow() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    return (
        <div className='flex m-10 gap-10'>
            <TextField
                name='firstName'
                label='First Name'
                size='small'
            />
            <TextField
                name='password'
                label='Password'
                size='small'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}

export default PasswordShow;
