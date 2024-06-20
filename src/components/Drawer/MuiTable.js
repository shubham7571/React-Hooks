import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Table } from '@mui/material';

export default function MuiTable({ tableData, header }) {
  // Check if header and tableData exist and have length > 0
  const hasData = header && header.length > 0 && tableData && tableData.length > 0;

  return (
    <div className='mt-10'>
      {hasData ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth:200 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {header.map((item, index) => (
                  <TableCell key={index}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {header.map((col, colIndex) => (
                    <TableCell key={colIndex}>{row[col]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className='justify-center flex  mt-40'>No data available...</div>
      )}
    </div>
  );
}
