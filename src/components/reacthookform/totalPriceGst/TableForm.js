import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InputField from './InputField';

function TableForm() {
    const [tableData, setTableData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openChildComponent, setOpenChildComponent] = useState(false);
    const [totalAdditionPrice, setTotalAdditionPrice] = useState(0);
    const [totalDiscAmount, setTotalDiscAmount] = useState(0);
    const [totalGstAmount, setTotalGstAmount] = useState(0);
    const [totalNetAmount, setTotalNetAmount] = useState(0);

    // Calculate totals when tableData changes
    useEffect(() => {
        const totalPriceSum = tableData.reduce((total, row) => total + parseFloat(row.TotalPrice), 0);
        setTotalAdditionPrice(totalPriceSum);

        const totalDiscAmountSum = tableData.reduce((total, row) => total + parseFloat(row.Disc_Amount || 0), 0);
        setTotalDiscAmount(totalDiscAmountSum);

        const totalGstAmountSum = tableData.reduce((total, row) => total + parseFloat(row.Gst_Amount || 0), 0);
        setTotalGstAmount(totalGstAmountSum);

        const totalNetAmountSum = tableData.reduce((total, row) => total + parseFloat(row.Net_Amount || 0), 0);
        setTotalNetAmount(totalNetAmountSum);
    }, [tableData]);
    // onchange funtion table input     

    // let temp = [...tableData]; // Create a copy of the tableData array
    const handleChangeQuantity = (e, row, index) => {
        let temp = [...tableData];
        let tempObj = temp[index]

        tempObj.Quantity = Number(e.target.value);
        tempObj.TotalPrice = Number(e.target.value) * Number(row.Price)
        tempObj.Net_Amount = Number(row.TotalPrice)

        temp[index] = tempObj;
        setTableData(temp)
    }
    const handleChangeprice = (e, row, index) => {
        let temp = [...tableData]; // Create a copy of the tableData array
        let tempObj = temp[index]; // Get the specific row object from the copied array

        tempObj.price = Number(e.target.value); // Update the 'price' property of the row object with the new value
        tempObj.TotalPrice = Number(e.target.value) * Number(row.Quantity); // Calculate the TotalPrice based on the new 'price' and the existing 'Quantity'
        tempObj.Net_Amount = Number(row.TotalPrice)
        temp[index] = tempObj; // Update the row object in the copied array
        setTableData(temp); // Update the tableData state with the modified array
    };
    const handleChangeDiscount = (e, row, index) => {
        let temp = [...tableData]; // Create a copy of the tableData array
        let tempObj = temp[index];

        tempObj.Distcount = Number(e.target.value);
        tempObj.Disc_Amount = ((tempObj.Distcount) /100 )*Number(row.TotalPrice);
        tempObj.Net_Amount = (Number(row.Quantity) * Number(row.Price)) - Number(tempObj.Disc_Amount) + Number(row.Gst_Amount);

        console.log("temp", tempObj.Distcount);
        temp[index] = tempObj;
        setTableData(temp);
    }

    const handleChangeDiscountAmount = (e, row, index) => {
        let temp = [...tableData];
        let tempObj = temp[index];
        console.log("rows", row);
        tempObj.Disc_Amount = Number(e.target.value);
        tempObj.Discount = (Number(tempObj.Disc_Amount) / (row.Quantity * row.Price)) * 100;
        tempObj.Net_Amount = (Number(row.Quantity) * Number(row.Price)) - Number(tempObj.Disc_Amount) + Number(row.Gst_Amount);
    
        temp[index] = tempObj;
        setTableData(temp);
    }
    
    const handleChangeGst = (e, row, index) => {
        let temp = [...tableData];
        let tempobj = temp[index];

        tempobj.Gst = Number(e.target.value);
        tempobj.Gst_Amount =  Number(e.target.value/100)*(Number(row.TotalPrice)-Number(row.Disc_Amount));
        tempobj.Net_Amount = Number(row.TotalPrice) - Number(row.Disc_Amount) + Number(row.Gst_Amount);

        temp[index] = tempobj;
        setTableData(temp);
    }

    // Define handleChangeGstAmount function
    const handleChangeGstAmount = (e, row, index) => {
        let temp = [...tableData];
        let tempObj = temp[index];

        tempObj.Gst_Amount = Number(e.target.value);
        tempObj.Gst = (tempObj.Gst_Amount / row.TotalPrice) * 100;

        // Calculate the net amount based on the given GST amount
        tempObj.Net_Amount = Number(row.TotalPrice) - Number(row.Disc_Amount) + Number(tempObj.Gst_Amount);

        temp[index] = tempObj;
        setTableData(temp);
    }


    // Function to add a new row
    const addNewRow = () => {
        // Logic to add a new row

        // For example:
        const newRow = {
            ItemName: "", // Add your default values here
            Quantity: "",
            Price: "",
            TotalPrice: "",
            Distcount: "",
            Disc_Amount: "",
            Gst: "",
            Gst_Amount: "",
            Net_Amount: ""
        };
        setTableData([...tableData, newRow]);
    };

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
                                <TableCell>Item Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Total Price</TableCell>
                                <TableCell>Distcount</TableCell>
                                <TableCell>Disc Amount</TableCell>
                                <TableCell>GST %</TableCell>
                                <TableCell>GST Amount</TableCell>
                                <TableCell>Net Amount</TableCell>
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
                                    <TableCell>{row.ItemName}</TableCell>
                                    <TableCell><input className="border rounded w-20 text-center" name={`Quantity${index}`} onChange={(e) => { handleChangeQuantity(e, row, index) }} defaultValue={row.Quantity} /></TableCell>
                                    <TableCell><input className="border rounded w-20 text-center" name={`Price${index}`} onChange={(e) => { handleChangeprice(e, row, index) }} defaultValue={row.Price} /></TableCell>
                                    <TableCell>{row.TotalPrice}</TableCell>
                                    <TableCell><input className="border rounded w-20 text-center" name={`Distcount${index}`} onChange={(e) => { handleChangeDiscount(e, row, index) }} defaultValue={row.Distcount} /></TableCell>
                                    <TableCell><input className="border rounded w-20 text-center" name={`Disc_Amount${index}`} onChange={(e) => { handleChangeDiscountAmount(e, row, index) }} defaultValue={row.Disc_Amount} /></TableCell>
                                    <TableCell><input className="border rounded w-20 text-center" name={`Gst${index}`} onChange={(e) => { handleChangeGst(e, row, index) }} defaultValue={row.Gst} /></TableCell>
                                    <TableCell><input className="border rounded w-20 text-center" name={`Gst_Amount${index}`} onChange={(e) => { handleChangeGstAmount(e, row, index) }} defaultValue={row.Gst_Amount} /></TableCell>
                                    <TableCell>{row.Net_Amount}</TableCell>
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
            {tableData.length > 0 ? (
                <div className='text-center space-x-4 mt-80'>
                    <TextField size='small' label='Total Addition Price' value={totalAdditionPrice.toFixed(2)} disabled />
                    <TextField size='small' label='Total Disc Amount' value={totalDiscAmount.toFixed(2)} disabled />
                    <TextField size='small' label='Total GST Amount' value={totalGstAmount.toFixed(2)} disabled />
                    <TextField size='small' label='Total Net Amount' value={totalNetAmount.toFixed(2)} disabled />
                </div>
            ) : ("")}
            <InputField
                open={openChildComponent}
                handleClose={() => setOpenChildComponent(false)}
                tableData={tableData}
                setTableData={setTableData}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
            />
        </div >
    );
};

export default TableForm;
