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
import Common_Button from '../../commonComponent/commonButton/Common_Button';

const initialState = {
    todos: [],

}

const formReducer = (state, action) => {
    console.log("action123", state, action);

    switch (action.type) {
        case "ADD_FIELD":
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                        age: action.payload.age,
                        address: action.payload.address
                    }
                ]
            };
        case 'DELETE_ROW':
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case 'EDIT_ROW':
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
                )
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};
function UseReducerForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [newToDo, setNewToDo] = useState({
        id: "",
        firstname: "",
        lastname: "",
        age: "",
        address: ""
    });
    const [selectedRow, setSelectedRow] = useState(null);
    const buttonLabel = selectedRow !== null ? 'UPDATE' : 'ADD';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedRow !== null) {
            dispatch({
                type: 'EDIT_ROW',
                payload: newToDo
            });
        } else {
            dispatch({
                type: 'ADD_FIELD',
                payload: newToDo
            });
        }
        setNewToDo({
            id: "",
            firstname: "",
            lastname: "",
            age: "",
            address: ""
        });
        setSelectedRow(null);
    };

    const handleDeleteRow = (id) => {
        dispatch({
            type: 'DELETE_ROW',
            payload: id
        });
    };

    const handleEditRow = (index) => {
        const rowData = state.todos[index];
        setNewToDo(rowData);
        setSelectedRow(index);
    };

    return (
        <div>
            <div className='flex justify-center'>
                <form className='' onSubmit={handleSubmit}>
                    <div className='flex space-x-4 mt-9'>
                        <input type='text' className='border  rounded  ' placeholder='Enter the FirstName'
                            value={newToDo?.firstname} onChange={(e) => setNewToDo((prev) => ({ ...prev, firstname: e.target.value }))} />
                        <input type='text' className='border  rounded  ' placeholder='Enter the LastName'
                            value={newToDo?.lastname} onChange={(e) => setNewToDo((prev) => ({ ...prev, lastname: e.target.value }))} />
                        <input type='text' className='border  rounded  ' placeholder='Enter the Age'
                            value={newToDo?.age} onChange={(e) => setNewToDo((prev) => ({ ...prev, age: e.target.value }))} />
                        <input type='text' className='border  rounded  ' placeholder='Enter the Address'
                            value={newToDo?.address} onChange={(e) => setNewToDo((prev) => ({ ...prev, address: e.target.value }))} />
                        {/* <CommonButton label={buttonLabel}
                            type='submit'
                            className="bg-black text-white px-2   rounded  py-2"
                        /> */}

                        <Common_Button
                            type='submit'
                            className='rounded bg-black text-white px-2 py-2 '
                            label='Submit'
                        />
                    </div>
                </form>
            </div>

            <div  className='mt-20'>
                {state.todos.length > 0 ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>FirstName</TableCell>
                                    <TableCell>LastName</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {state.todos.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.firstname}</TableCell>
                                        <TableCell>{item.lastname}</TableCell>
                                        <TableCell>{item.age}</TableCell>
                                        <TableCell>{item.address}</TableCell>
                                        <TableCell>
                                            <div className='flex gap-4'>
                                                <EditIcon onClick={() => handleEditRow(index)} />
                                                <DeleteIcon onClick={() => handleDeleteRow(item.id)} />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <h1 className='text-center text-xl font-semibold mt-7'>NO Result Found...</h1>
                )}
            </div>
        </div>
    );
}

export default UseReducerForm;


