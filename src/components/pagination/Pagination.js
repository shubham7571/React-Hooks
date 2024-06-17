import React, { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import axios from 'axios';

function Pagination() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2); // default row is two
  const [tableData, setTableData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios.post(`http://192.168.0.58:8080/getPaginatedStudents`, {
        pageNumber: page,
        pageSize: rowsPerPage
      })
        .then((res) => {
          setTableData(res.data.paginatedStudents);
          setTotalCount(res.data.studentCount);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [page, rowsPerPage]);

  //headers*********************
  useEffect(() => {
    if (tableData.length > 0) {
      const headers = Object.keys(tableData[0]);
      setTableHeaders(headers);
    } else {
      setTableHeaders([]);
    }
  }, [tableData]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableHeaders.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {tableHeaders.map((header) => (
                  <TableCell key={`${row.id}-${header}`}>{row[header]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[2, 4, 6, 7]}  // options for disply row
        count={totalCount}     //The total number of items available (for pagination).
        rowsPerPage={rowsPerPage}  //  select the row
        page={page} //Tracks the current page number.
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Pagination;
