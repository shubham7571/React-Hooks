import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function TableFrom(_) {
    //yup validation
    const schema = yup
        .object({
            firstName: yup.string().required("please enter your firstname"),
            midalName: yup.string().required("please enter your midalName"),
            lastName: yup.string().required("please enter your lastName"),
            address: yup.string().required("please enter your address"),
            // age: yup.number().positive().integer().required(),
        })
        .required();
    //useform
    const {
        reset, //reset the input field
        setValue, // set the value 
        getValues, // value ghete ji pahije ti value ghete
        watch, //onchange runtime value change kart
        register, // save the value
        handleSubmit,  //submit the value 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [tableData, setTableData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);


    console.log("formData", selectedRow);
    const onSubmit = (data) => {
        let tempArr = [...tableData];
        tempArr.push(data);
        setTableData(tempArr);
        reset();
    };


    useEffect(() => {
        if (selectedRow !== null) {
            setValue("firstName", selectedRow.firstName)
            setValue("midalName", selectedRow.midalName)
            setValue("lastName", selectedRow.lastName)
            setValue("address", selectedRow.address)
        }
    }, [selectedRow])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-20 text-center justify-center flex space-x-2">
                    <div>
                        <TextField
                            error={errors.firstName}
                            helperText={errors?.firstName?.message}
                            label="First Name"
                            size="small"
                            name="firstName"
                            {...register("firstName")}
                        />
                    </div>
                    <TextField
                        label="Midal Name"
                        size="small"
                        name="midalName"
                        helperText={errors?.midalName?.message}
                        error={errors.midalName}
                        {...register("midalName")}
                    />
                    <div>
                        <TextField
                            label="Last Name"
                            error={errors.lastName}
                            helperText={errors?.lastName?.message}
                            size="small"
                            {...register("lastName")}
                            name="lastName"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Address"
                            error={errors.address}
                            helperText={errors?.address?.message}
                            size="small"
                            name="address"
                            {...register("address")}
                        />
                    </div>
                    <Button variant="contained" size="small" type="submit">
                        Add
                    </Button>
                </div>
            </form>
            {tableData.length > 0 ? (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow sx={{ background: "lightgray" }}>
                                <TableCell>First Name</TableCell>
                                <TableCell>Midal Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    onClick={() => {
                                        setSelectedRow(row)
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row["firstName"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row["midalName"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row["lastName"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.address}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p className="text-center  my-28">No Record Found...</p>
            )}
        </>
    );
}

export default TableFrom;