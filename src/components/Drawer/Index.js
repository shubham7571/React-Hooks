import { Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

// import { Link } from 'react-router-dom';

function Index() {
    return (
        <div>
            <div className='flex justify-between '>
                <TextField
                    label='search field'
                    size='small'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" >Add Model</Button>
            </div>


        </div>
    );
}

export default Index;
