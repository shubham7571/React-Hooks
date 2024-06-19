import { InputAdornment, TextField, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Common_Button from '../commonComponent/commonButton/Common_Button';
import IndexModal from './IndexModal';

function Index() {
    const [indexModelOpen, setIndexModelOpen] = useState(false);
    const handleOpen = () => setIndexModelOpen(true);
    const handleClose = () => setIndexModelOpen(false);


    return (
        <div>
            <div className='flex justify-between '>
                {/* <TextField
                    label="search field"
                    // variant="filled"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        height: '1.5rem', // Minimal height
                        width: '10rem',
                        '& .MuiFilledInput-root': {
                            height: '100%',
                            padding: 0, // Remove padding for minimal height
                            paddingTop: '0.5rem', // Adjust for label space
                        },
                        '& .MuiFilledInput-input': {
                            height: '100%',
                            padding: '0.25rem', // Adjust padding for minimal input area
                            paddingTop: '0.75rem', // Adjust padding for label space
                            display: 'flex',
                            alignItems: 'center', // Center align the input text
                        },
                        '& .MuiInputAdornment-root': {
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center', // Center align the adornment
                        },
                        '& .MuiInputBase-input': {
                            padding: '0 0.5rem', // Horizontal padding
                            lineHeight: '1.5rem', // Ensure text aligns vertically
                        },
                        '& .MuiFormLabel-root': {
                            fontSize: '0.75rem', // Smaller font size for the label
                            top: '-0.80rem', // Adjust the label's top position
                            lineHeight: '1rem', // Adjust the line height
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            top: '0.5rem', // Adjust label position when focused
                        },
                        '& .MuiFormLabel-root.MuiInputLabel-shrink': {
                            top: '0.25em', // Adjust label position when input is filled
                        },
                    }}
                /> */}

                <TextField
                    label="search field"
                    size='small'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />



                <Common_Button
                    label='Add Model '
                    className='bg-blue-700 h-9 text-center w-28 rounded  text-white p-2'
                    onClick={handleOpen}
                />

            </div>
            {
                indexModelOpen &&
                <IndexModal
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={indexModelOpen}
                />


            }

        </div>
    );
}

export default Index;
