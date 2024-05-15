import React, { useRef } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UseRef = ({ data }) => {
  const tableRef = useRef();

  const handleKeyDown = (event) => {
    const { keyCode } = event;
    const table = tableRef.current;

    if (keyCode === 38) { // Up arrow key
      // Scroll up
      table.scrollTop -= 50; // Adjust the scroll amount as needed
    } else if (keyCode === 40) { // Down arrow key
      // Scroll down
      table.scrollTop += 50; // Adjust the scroll amount as needed
    }
  };

  return (
    <TableContainer component={Paper} onKeyDown={handleKeyDown} tabIndex={0}>
      <Table ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            {/* Add more table headers if needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.column1}</TableCell>
              <TableCell>{row.column2}</TableCell>
              {/* Add more table cells if needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UseRef;