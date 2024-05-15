import { Button } from '@mui/material'
import React, { useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ChildComponent from './ChildComponent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ParentComponent() {
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openChildComponent, setOpenChildComponent] = useState(false);

  // Delete row function
  const deleteRow = (index) => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      const updatedTableData = [...tableData];
      updatedTableData.splice(index, 1);
      setTableData(updatedTableData);
    }
  }

  return (
    <div>
      <div className='text-end m-4'>
        <Button variant='contained' onClick={() => setOpenChildComponent(true)}>ADD NEW</Button>
      </div>
      {tableData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ background: "lightgray" }}>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    setSelectedRow(row)
                  }}
                >
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.middleName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>
                    <Button onClick={() => { setOpenChildComponent(true); setSelectedRow(row) }}>
                      <EditIcon />
                    </Button>
                    <Button onClick={() => deleteRow(index)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p className="text-center my-28">No Record Found...</p>
      )}
      <ChildComponent
        open={openChildComponent}
        handleClose={() => setOpenChildComponent(false)}
        tableData={tableData}
        setTableData={setTableData}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
    </div>
  )
}

export default ParentComponent;
