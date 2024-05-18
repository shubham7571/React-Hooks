import React, { useState } from 'react';
import { useReducer } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    address: ''
};

const formReducer = (state, action) => {
    switch (action.type) {

        case "ADD_FIELD":
            return {
                ...state,
                [action.field]: action.value
            };
        case 'RESET_FORM':
            return initialState;

        case 'DELETE_ROW':
            return state.filter((index) => index !== action.index);

        case 'EDIT_ROW':
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
};

function UseReducerForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null)
    const buttonLabel = selectedRow !== null ? 'UPDATE' : 'ADD';
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempArr = [...data];
        if (selectedRow !== null) {
            tempArr[selectedRow] = state;
        } else { tempArr.push(state); }

        setData(tempArr);
        console.log("data", tempArr);
        dispatch({ type: 'RESET_FORM' });
        setSelectedRow(null);
    };

    const handleInput = (field, value) => {
        dispatch({
            type: 'ADD_FIELD',
            field,
            value
        });
    };
    const handleDeleteRow = (index) => {

        dispatch({
            type: 'DELETE_ROW',
            index
        })
        // const newData=[...data]
        // newData.splice(index,1)
        // setData(newData)
    }
    const handleEditRow = (index) => {
        const rowData = data[index];
        dispatch({
            type: 'EDIT_ROW',
            data: rowData
        });
        setSelectedRow(index);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <form className='' onSubmit={handleSubmit}>
                    <div className='flex space-x-4 mt-9'>
                        <input type='text' className='border rounded' placeholder='Enter the FirstName'
                            value={state.firstname} onChange={(e) => handleInput('firstname', e.target.value)} />
                        <input type='text' className='border rounded' placeholder='Enter the LastName'
                            value={state.lastname} onChange={(e) => handleInput('lastname', e.target.value)} />
                        <input type='text' className='border rounded' placeholder='Enter the Email'
                            value={state.email} onChange={(e) => handleInput('email', e.target.value)} />
                        <input type='text' className='border rounded' placeholder='Enter the Address'
                            value={state.address} onChange={(e) => handleInput('address', e.target.value)} />
                        <button button label={buttonLabel}
                            type='submit'
                            className="bg-black text-white px-2 rounded py-2"
                        >ADD</button>
                    </div>
                </form>
            </div>
            <div className='mt-20'>
                {
                    data.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small"  >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>FirstName</TableCell>
                                        <TableCell>LastName</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Address</TableCell>
                                        <TableCell>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.map((item, index) => (
                                            <TableRow
                                                key={index}

                                            >
                                                <TableCell>{item.firstname}</TableCell>
                                                <TableCell>{item.lastname}</TableCell>
                                                <TableCell>{item.email}</TableCell>
                                                <TableCell>{item.address}</TableCell>
                                                <TableCell>
                                                    <div className='flex gap-4'>
                                                        <EditIcon onClick={() => {
                                                            handleEditRow(index);
                                                            setSelectedRow(index);
                                                        }} />
                                                        <DeleteIcon onClick={() => handleDeleteRow(index)} />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <h1 className='text-center text-xl  mt-7'>No Result Found...</h1>
                    )
                }
            </div>
        </div>
    );
}

export default UseReducerForm;