import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';

export default function SearchFilter() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // Flatten nested data objects into a single level
    const flattenObject = (obj, parentKey = '', result = {}) => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const propName = parentKey ? `${parentKey}.${key}` : key;
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    flattenObject(obj[key], propName, result);
                } else {
                    result[propName] = obj[key];
                }
            }
        }
        return result;
    };

    // Filter the data based on the search term
    const filteredData = data.filter((val) => {
        return searchTerm === "" || Object.values(flattenObject(val)).some(value =>
            value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // Get unique column headers
    const columnHeaders = Array.from(
        new Set(
            data.flatMap(item => Object.keys(flattenObject(item)))
        )
    );

    return (
        <TableContainer component={Paper}>
            <TextField
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
                <TableHead>
                    <TableRow>
                        {columnHeaders.map((header) => (
                            <TableCell key={header}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredData.map((item) => (
                        <TableRow key={item.id}>
                            {columnHeaders.map((header) => (
                                <TableCell key={header}>
                                    {flattenObject(item)[header]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
