import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import AddItemCreationModal from "./AddItemCreationModal";

function ItemCreation() {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);


  return (
    <div className="p-10">
      <div className="flex justify-between items-center space-x-2">
        <div className="flex space-x-2 items-center w-5/12">
          <TextField
            size="small"
            fullWidth
            label="Search by ItemName/ItemCode"
          />
          <button
            type="button"
            className="bg-indigo-900 text-white rounded p-2"
          >
            <SearchIcon />
          </button>
        </div>
        <button
          className="bg-indigo-900 text-white p-2 rounded whitespace-nowrap"
          onClick={handleOpenModal}
        >
          + Add
        </button>
      </div>
      <div>
        {tableData.length > 0 ? (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Actions</TableCell>
                    <TableCell>Item Name</TableCell>
                    <TableCell>Item Code</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((item) => {
                    return (
                      <TableRow>
                        <TableCell><div>
                          <button typeof="button" url='./'>
                          </button></div> 
                          </TableCell>
                        <TableCell>{item["Item Name"]}</TableCell>
                        <TableCell>{item["Item code"]}</TableCell>

                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ) : (
          <h1 className="my-28 text-center">No Records Added...</h1>
        )}
      </div>
      <AddItemCreationModal
        handleOpenModal={openModal}
        handleCloseModal={handleCloseModal}
        tableData={tableData}
        setTableData={setTableData}
      />
    </div>
  );
}

export default ItemCreation;